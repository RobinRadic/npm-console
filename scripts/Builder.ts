import { existsSync, FSWatcher, watch } from 'fs';
import { basename, dirname, isAbsolute, join } from 'path';
import assert from 'assert';
import { readJSONSync } from 'fs-extra';
import { objectify, PackageJson } from '@radic/shared';
import { TSconfigJson } from 'multi-package-json-manager';
import { debounce } from 'lodash-decorators';
import debug from 'debug';
import { glob } from 'glob';
import { execSync } from 'child_process';
import yargs from 'yargs';

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

export class Builder {
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

    watch() {
        this.log('Starting watch');
        this.watcher = watch(join(this.path, 'src'), { encoding: 'utf-8', recursive: true, persistent: true }, (event, filename) => {
            this.log('Watched', filename, event);
            this.build();
        });
        this.watcher.on('error', (error) => this.log('Watch error:', error));
        this.watcher.on('close', () => this.log('Closing watch'));
    }

    @debounce(400, {
        trailing: true,
        leading :false,
    })
    build() {
        this.log('Starting build');
        const output = this.exec('tsc --project tsconfig.build.json');
        this.log('Build finished', '\n', output);
    }

    clean(){
        this.log('Cleaning up');
        this.log('rm -rf lib/ types/',this.exec('rm -rf lib/ types/'))
        this.log('rimraf src/**/*.{js,js.map,d.ts}', this.exec('rimraf src/**/*.{js,js.map,d.ts}'));
        this.log('Cleaned up')
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

export namespace Builder {
    export const builders: Record<string, Builder> = glob.sync(root('packages/*')).map(path => {
        let builder = new Builder(path);
        return [ builder.basename(), builder ];
    }).reduce(objectify, {});
    export const builderNames                      = Object.keys(builders);
    export const build                             = (name: string) => builders[ name ].build();
    export const watch                             = (name: string) => builders[ name ].watch();
    export const clean                             = (name: string) => builders[ name ].clean();
    export const buildAll                          = () => Object.values(builders).forEach(builder => builder.build());
    export const watchAll                          = () => Object.values(builders).forEach(builder => builder.watch());
    export const cleanAll                          = () => Object.values(builders).forEach(builder => builder.clean());
}

process.on('uncaughtException', (error, origin) => console.error('uncaughtException', 'error:', error, 'origin:', origin));
process.on('unhandledRejection', (reason, promise) => console.error('unhandledRejection', 'reason:', reason));

function runCli() {
    const parsed = yargs
    .showHelpOnFail(true)
    .scriptName('builder')
    .demandCommand()
    .help('h').alias('h', 'help')
    // .usage()
    .command('build [name]', 'Build package(s)', {
        handler: args => {
            if ( args.all ) {
                return Builder.buildAll();
            } else if ( args.name !== undefined && Builder.builderNames.includes(args.name.toString().trim()) ) {
                return Builder.build(args.name.toString().trim());
            } else {
                console.error('You did not supply the name or option --all');

            }
        },
        builder: yargs => {
            return yargs
            .example('builder build console', 'Start build for packages/console')
            .example('builder build --all', 'Start build for all package')
            .options({
                all: { alias: 'a', type: 'boolean', description: 'Build all' },
            });
        },
    })
    .command('watch [name]', 'Watch package(s) and build them', {
        handler: args => {
            if ( args.all ) {
                return Builder.watchAll();
            } else if ( args.name !== undefined && Builder.builderNames.includes(args.name.toString().trim()) ) {
                return Builder.watch(args.name.toString().trim());
            } else {
                console.error('You did not supply the name or option --all');
            }
        },
        builder: yargs => {
            return yargs
            .example('builder watch console', 'Start build on change in packages/console/src')
            .example('builder watch --all', 'Start build on change in any package')
            .options({
                all: { alias: 'a', type: 'boolean', description: 'Watch all' },
            });
        },
    })
    .command('clean [name]', 'Clean package(s)', {
        handler: args => {
            if ( args.all ) {
                return Builder.cleanAll();
            } else if ( args.name !== undefined && Builder.builderNames.includes(args.name.toString().trim()) ) {
                return Builder.clean(args.name.toString().trim());
            } else {
                console.error('You did not supply the name or option --all');
            }
        },
        builder: yargs => {
            return yargs
            .example('builder clean console', 'clean packages/console')
            .example('builder clean --all', 'clean all packages')
            .options({
                all: { alias: 'a', type: 'boolean', description: 'Clean all' },
            });
        },
    })
    .parse();
}

runCli();
