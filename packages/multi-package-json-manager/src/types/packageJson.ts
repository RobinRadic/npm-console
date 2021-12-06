import {PackageJson as BasePackageJson} from 'prettier-package-json/build/types'

export interface PackageJson extends Partial<BasePackageJson> {
    [ key: string ]: any;
}
