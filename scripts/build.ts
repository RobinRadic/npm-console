import { existsSync } from 'fs';
import { isAbsolute, join } from 'path';
import assert from 'assert';
import { readJSONSync } from 'fs-extra';

const root                    = (...parts) => join(__dirname, '..', ...parts);
const resolvePath             = (path: string) => isAbsolute(path) ? path : root(path);
const hasNodePackage          = (path: string) => existsSync(root(path, 'package.json'));
const hasTypecriptConfig      = (path: string) => existsSync(root(path, 'tsconfig.json'));
const hasTypecriptBuildConfig = (path: string) => existsSync(root(path, 'tsconfig.build.json'));
const isRadicPackage          = (path: string) => hasNodePackage(path) && hasTypecriptConfig(path) && hasTypecriptBuildConfig(path);
const getJsonConfigs          = (path: string) => {
    assert.ok(isRadicPackage(path));
    const configs = {
        package      : readJSONSync(root(path, 'package.json'), 'utf8'),
        tsconfig     : readJSONSync(root(path, 'tsconfig.json'), 'utf8'),
        tsconfigBuild: readJSONSync(root(path, 'tsconfig.build.json'), 'utf8'),
    }
};


export function build(path: string) {

    assert.ok(isRadicPackage(path));


}
