import { PackageJson, TSconfigJson } from '@radic/shared';
import { readJSONSync } from 'fs-extra';
import { basename, join } from 'path';
import { JsonConfigs, PackageBuilder } from './PackageBuilder';
import { SyncHook } from 'tapable';
import { existsSync } from 'fs';
import assert from 'assert';

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
    pkg: PackageJson;
    tsconfig: TSconfigJson;
    tsconfigBuild: TSconfigJson;
    basename: string;
    #builder: PackageBuilder;
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

    get builder(): PackageBuilder {
        if ( !this.#builder ) {
            this.#builder = new PackageBuilder(this);
            this.hooks.builder.call(this.#builder);
        }
        return this.#builder;
    }
}
