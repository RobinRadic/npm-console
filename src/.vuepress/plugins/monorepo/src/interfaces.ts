import { PackageJson as BasePackageJson } from '@radic/shared';

export interface MonorepoPackageOptions {
    name?: string;
    path: string;
    docsDir?: string;
    readme?: string;
    destDir?: string;
}

export interface MonorepoOptions {
    root: string;
    dirName?:string
    generateDirIndexPage?:boolean
    resolve?:{
        packagesFromWorkspaces?:boolean
        workspacesFromRoot?:boolean
        exclude?:string[]
    }
    defaultPackageOptions?:Partial<MonorepoPackageOptions>
    workspaces?:string[]
}

export interface MonorepoPluginOptions{
    buildBase?:string
    monorepo:MonorepoOptions
    packages?: Array<MonorepoPackageOptions | string>;
}
export interface PackageJsonVuepress extends Omit<MonorepoPackageOptions,'path'> {

}
export interface PackageJson extends BasePackageJson{
    vuepress?: PackageJsonVuepress
}
