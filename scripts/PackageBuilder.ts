import { existsSync, FSWatcher, readdirSync, Stats, statSync, watch } from 'fs';
import { basename, dirname, isAbsolute, join, parse, ParsedPath, relative } from 'path';
import assert from 'assert';
import { readJSONSync } from 'fs-extra';
import { objectify, PackageJson } from '../packages/shared/src';
import { TSconfigJson } from '../packages/multi-package-json-manager/src/types/tsconfigJson';
import { debounce } from 'lodash-decorators';
import debug from 'debug';
import { glob } from 'glob';
import { execSync } from 'child_process';

import sortObject from 'sort-object-keys';

type DirectoryTree = Record<string, DirectoryTreeItem>;

interface DirectoryTreeItem {
    name: string;
    path: string;
    dir: string;
    parentPath: string;

    getParent(): DirectoryTreeItem;

    stat?: FStat;
    children?: DirectoryTree;
}

type FStatType =
    'file'
    | 'dir'
    | 'block'
    | 'character'
    | 'link'
    | 'fifo'
    | 'socket'

interface FStat extends Stats, ParsedPath {
    path: string;
    type: FStatType;
}


const root                    = (...parts) => join(__dirname, '..', ...parts);
const resolvePath             = (path: string) => isAbsolute(path) ? path : join(process.cwd(), path);
const hasNodePackage          = (path: string) => existsSync(join(path, 'package.json'));
const hasTypecriptConfig      = (path: string) => existsSync(join(path, 'tsconfig.json'));
const hasTypecriptBuildConfig = (path: string) => existsSync(join(path, 'tsconfig.build.json'));
const isRadicPackage          = (path: string) => hasNodePackage(path) && hasTypecriptConfig(path) && hasTypecriptBuildConfig(path);
const getJsonConfigs          = (path: string) => {
    assert.ok(isRadicPackage(path));
    const configs: { pkg: PackageJson, tsconfig: TSconfigJson, tsconfigBuild: TSconfigJson } = {
        pkg          : readJSONSync(join(path, 'package.json'), 'utf8'),
        tsconfig     : readJSONSync(join(path, 'tsconfig.json'), 'utf8'),
        tsconfigBuild: readJSONSync(join(path, 'tsconfig.build.json'), 'utf8'),
    };
    return configs;
};
const getFstatsType           = (stats: Stats): FStatType => {
    if ( stats.isFile() ) return 'file';
    if ( stats.isDirectory() ) return 'dir';
    if ( stats.isBlockDevice() ) return 'block';
    if ( stats.isCharacterDevice() ) return 'character';
    if ( stats.isSymbolicLink() ) return 'link';
    if ( stats.isFIFO() ) return 'fifo';
    if ( stats.isSocket() ) return 'socket';
    throw new Error('Not a recognized filesystem type');
};
const toFSStats               = (path: string, stats?: Stats): FStat => {
    stats = stats || statSync(path);
    Object.assign<Stats, Partial<FStat>>(stats, { path, ...parse(path), type: getFstatsType(stats) });
    return stats as FStat;
};

export class PackageBuilder {
    path: string;
    pkg: PackageJson;
    tsconfig: TSconfigJson;
    tsconfigBuild: TSconfigJson;
    protected log: debug.Debugger;

    constructor(path: string) {
        this.path = path;
        assert.ok(isRadicPackage(this.path));
        Object.assign(this, getJsonConfigs(this.path));
        this.log = debug(this.pkg.name);
    }

    watcher: FSWatcher;

    protected getDeepestUniqueDirectories() {

        let statCache: Record<string, Stats> = {};
        glob.sync(join(this.path, 'src/**'), { absolute: true, stat: true, statCache });
        const paths = Object.entries(statCache)
                            .map<FStat>(([ path, stats ]) => toFSStats(path, stats))
                            .filter(stat => stat.isDirectory())
                            .map(stat => ({
                                [ relative(this.path, stat.path) ]:
                                    readdirSync(stat.path, { withFileTypes: true })
                                    .filter(dir => dir.isDirectory())
                                    .map(dir => dir.name),
                            }))
                            .map(obj => Object.entries(obj)[ 0 ])
                            .filter(([ path, dirs ]) => Array.isArray(dirs) && dirs.length === 0)
                            .map(([ path, dirs ]) => path);

        paths.unshift('src');
        return paths;
    }

    watchers: Record<string, FSWatcher> = {};

    watch() {
        this.log('Starting watch');

        this.getDeepestUniqueDirectories().forEach(path => {
            const watcher = this.watchers[ path ] = watch(join(this.path, path), { encoding: 'utf-8', recursive: true, persistent: true }, (event, filename) => {
                this.log('Watched', filename, event);
                this.clean();
                this.build();
            });
            watcher.on('error', (error) => this.log('Watch error:', error));
            watcher.on('close', () => {
                this.log('Closing watch');
                delete this.watchers[ path ];
            });
            this.log('Watching ', path);
        });

        return this;
    }


    @debounce(400, {
        trailing: true,
        leading : false,
    })
    build() {
        this.log('Starting build');
        const output = this.exec('tsc --project tsconfig.build.json');
        this.log('Build finished', '\n', output);
        return this;
    }

    @debounce(400, {
        trailing: true,
        leading : false,
    })
    clean() {
        this.log('Cleaning up');
        this.log('rm -rf lib/ types/', this.exec('rm -rf lib/ types/'));
        this.log('rimraf src/**/*.{js,js.map,d.ts}', this.exec('rimraf src/**/*.{js,js.map,d.ts}'));
        this.log('Cleaned up');
        return this;

    }

    protected exec(command: string): string {
        try {
            return execSync(command, { cwd: this.path, encoding: 'utf-8' }).toString();
        } catch (e) {
            console.error(`Error while executing: ${command}`, e);
        }
    }

    dirname() {return dirname(this.path); }

    basename() {return basename(this.path); }
}

export namespace PackageBuilder {
    let unsorted: Record<string, PackageBuilder> = glob.sync(root('{packages,apps}/*')).map(path => {
        let builder = new PackageBuilder(path);
        return [ builder.basename(), builder ];
    }).reduce(objectify, {});
    export const builders = sortObject(unsorted, [
        'shared',
        'core',
        'console-colors',
        'console-input',
        'console-output',
        'console',
        'hosting',
        'hosting-cli',
        'multi-package-json-manager'
    ])

    export const builderNames                             = Object.keys(builders);
    export const rebuild                                    = (name: string) => {
        builders[ name ].clean()
        builders[ name ].build()
    };
    export const build                                    = (name: string) => builders[ name ].build();
    export const clean                                    = (name: string) => builders[ name ].clean();
    export const watch                                    = (name: string) => builders[ name ].watch();
    export const rebuildAll                                 = () => Object.values(builders).forEach(builder => {
        builder.clean();
        builder.build();
    });
    export const buildAll                                 = () => Object.values(builders).forEach(builder => builder.build());
    export const watchAll                                 = () => Object.values(builders).forEach(builder => builder.watch());
    export const cleanAll                                 = () => Object.values(builders).forEach(builder => builder.clean());
}
