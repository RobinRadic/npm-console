import { PackageJson, TSconfigJson } from '@radic/shared';
import { readJSONSync } from 'fs-extra';
import { basename, join } from 'path';
import { JsonConfigs, PackageBuilder } from './PackageBuilder';
import { SyncHook } from 'tapable';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import assert from 'assert';
import { ColorWrapper } from '@radic/console-output';
import semver from 'semver/preload';
import { ReleaseType, SemVer } from 'semver';
import { Application, Filesystem, inject } from '@radic/core';
import slug from 'slug';

const hasNodePackage          = (path: string) => existsSync(join(path, 'package.json'));
const hasTypecriptConfig      = (path: string) => existsSync(join(path, 'tsconfig.json'));
const hasTypecriptBuildConfig = (path: string) => existsSync(join(path, 'tsconfig.build.json'));
const isRadicPackage          = (path: string) => hasNodePackage(path) && hasTypecriptConfig(path) && hasTypecriptBuildConfig(path);
const getJsonConfigs          = (pkg: Package): JsonConfigs => {
    const configs: JsonConfigs = {
        pkg          : readJSONSync(pkg.packageJsonPath, 'utf8'),
        tsconfig     : readJSONSync(pkg.tsconfigJsonPath, 'utf8'),
        tsconfigBuild: readJSONSync(pkg.tsconfigBuildJsonPath, 'utf8'),
    };
    return configs;
};

export class Package {
    @inject('app') app: Application;
    pkg: PackageJson;
    tsconfig: TSconfigJson;
    tsconfigBuild: TSconfigJson;
    basename: string;
    #builder: PackageBuilder;
    colorize: ColorWrapper;

    get coloredName() {return this.colorize(this.pkg.name); }

    readonly hooks = {
        builder: new SyncHook<[ PackageBuilder ]>([ 'builder' ]),
    };

    get packageJsonPath() {return join(this.path, 'package.json');}

    get tsconfigJsonPath() {return join(this.path, 'tsconfig.json');}

    get tsconfigBuildJsonPath() {return join(this.path, 'tsconfig.build.json');}

    constructor(public path: string) {
        assert.ok(isRadicPackage(path));
        Object.assign(this, getJsonConfigs(this));
        this.basename = basename(this.path);
    }

    get name() { return this.pkg.name; }

    get slug(){ return slug(this.pkg.name)}

    get builder(): PackageBuilder {
        if ( !this.#builder ) {
            this.#builder = new PackageBuilder(this);
            this.hooks.builder.call(this.#builder);
        }
        return this.#builder;
    }

    get semver(): SemVer {
        return semver.parse(this.version);
    }

    get version() {
        return this.pkg.version;
    }

    bump(type: ReleaseType) {
        let content: string = Filesystem.get(this.packageJsonPath);
        let exp             = /^(.*)("version":)(\s*?)"([\d\w\.]*)?"(.*?$)/gm;
        if ( !exp.test(content) ) {
            throw new Error('Incorrect package.json');
        }
        content.match(exp);
        const matches      = exp.exec(content);
        let currentVersion = matches[ 4 ];
        if ( !semver.valid(currentVersion) ) {
            throw new Error('Incorrect package.json version');
        }
        let newVersion       = this.getBumpedVersion(type);
        const backupFilePath = this.app.paths.env.data(join('backups',this.slug,`${Date.now()}-package.json`));
        const backupDirPath = this.app.paths.env.data(join('backups',this.slug));
        Filesystem.ensureDirectoryExists(backupDirPath)
        Filesystem.put(backupFilePath, content)
        content = content.replace(exp, (match, p1, p2, p3, p4, p5) => {
            return p1 + p2 + p3 + '"' + newVersion + '"' + p5;
        });
        Filesystem.put(this.packageJsonPath, content);
        this.pkg.version = newVersion;
        return newVersion;
    }

    getBumpedVersion(type: ReleaseType) {
        return this.semver.inc(type).format();
    }
}
