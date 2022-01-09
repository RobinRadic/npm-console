import { DirectoryStorage } from '@radic/core';
import { isObject, isString, ProxyRepository, Repository } from '@radic/shared';
import { MonoRepo } from './MonoRepo';
import { merge, template } from 'lodash';
import { SyncWaterfallHook } from 'tapable';
import { copySync, existsSync, mkdirpSync } from 'fs-extra';
import { glob } from 'glob';
import { Stats, statSync } from 'fs';
import { dirname, join } from 'path';

class TemplateStorage extends DirectoryStorage {
    to: PackageStorage;
    creator: PackageCreator;

    copy(templatePath: string, packagePath: string, templated: boolean = false, variables: any = {}) {
        if(this.isDirectory(templatePath)){
            let paths = glob.sync('**',{root: this.path(templatePath),cwd:this.path(templatePath)});
            for(let path of paths){
                path=join(templatePath,path)
                let fromPath=this.path(path);
                let toPath=this.to.path(path);
                let stat = statSync(fromPath);
                if(stat.isDirectory()){
                    this.to.ensureDir(toPath);
                } else {
                    this.to.ensureDir(dirname(toPath));
                    this.copy(path,path,templated,variables)
                }
            }
            return this;
        }
        let content = this.read(templatePath);
        if ( templated ) {
            content = this.compile(content, variables);
        }
        this.to.write(packagePath, content);
        return this;
    }

    build(builderPath: string, opts:{to?:string,params?:any}={params:{}}) {
        if ( !this.exists(builderPath) || !builderPath.endsWith('.js') ) {
            throw new Error('invalid builderPath');
        }
        const builder = require(this.path(builderPath));
        const content = builder(opts.params);
        if(opts.to) {
            this.to.write(opts.to, content);
        }
        return this;
    }

    compile(str: string, variables: any = {}) {
        const tpl = template(str, {

        });
        return tpl(Repository.asProxy(variables));
    }
}

class PackageStorage extends DirectoryStorage {
    generate(path:string){
        if(path.includes('.')){
            return this.ensureFileWithContent('',path)
        }
        return this.ensureDir(path);
    }
}

export const isITemplateCopyObject = (val: any): val is ITemplateCopyObject => val && isObject(val) && 'from' in val && 'to' in val;

export interface ITemplateCopyObject {
    from: string,
    to: string,
    templated?: boolean,
    set?: any
}

export type ITemplateCopyString = string
export type ITemplateCopy =
    ITemplateCopyObject
    | ITemplateCopyString

export interface ITemplateBuilder {
    builder: string,
    to?: string,
    params?: any
}

export interface ITemplate {
    variables?: any;
    copy?: Array<string | ITemplateCopy>;
    build?: ITemplateBuilder[];
    generate?:string[]
}

export class PackageCreator {
    readonly hooks                                  = {
        copy : new SyncWaterfallHook<[ ITemplateCopyObject ]>([ 'item' ]),
        build: new SyncWaterfallHook<[ ITemplateBuilder ]>([ 'item' ]),
        generate: new SyncWaterfallHook<[ string ]>([ 'path' ]),
    };
    fs: TemplateStorage;
    vars: ProxyRepository<{ [ key: string ]: any }> = Repository.asProxy({});
    opts: ProxyRepository<ITemplate>                = Repository.asProxy<ITemplate>({
        variables: {},
        copy     : [],
        build    : [],
        generate: []
    });

    constructor(public readonly mono: MonoRepo) {
        this.setTemplateDirectory(mono.resourcesPath('template'));
    }

    setTemplateDirectory(templateDirPath: string) {
        this.fs = new TemplateStorage({
            basePath: templateDirPath,
        });
        if ( this.fs.exists('_template.json') ) {
            this.opts.merge(this.fs.readJson('_template.json'));
        }
        return this;
    }

    setPackageDirectory(packageDirPath: string) {
        this.fs.to      = new PackageStorage({
            basePath: packageDirPath,
        });
        this.fs.creator = this;
        return this;
    }

    run(variables: any = {}) {
        for ( let item of this.opts.copy ) {
            if ( isString(item) ) {
                item = { from: item, to: item };
            }
            item = this.hooks.copy.call(item);
            if ( isITemplateCopyObject(item) ) {
                this.fs.copy(item.from, item.to, item?.templated, this.getVars(item?.set || {}, variables));
            }
        }
        for ( let item of this.opts.build ) {
            item = this.hooks.build.call(item);
            if ( isString(item) ) {
                item = { builder:item };
            }
            this.fs.build(item.builder, item);
        }
        for(let path of this.opts.generate){
            path = this.hooks.generate.call(path);
            this.fs.to.generate(path);
        }
    }

    getVars(...objs: any[]) {
        let vars = this.vars.get();
        return merge({}, vars, this.opts.get('variables', {}), ...objs);
    }
}
