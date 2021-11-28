import { dirname,relative,basename, extname, resolve } from 'path';
import { debug, logger } from '@vuepress/utils';
import glob from 'glob';
import { App } from 'vuepress';
import { merge } from 'lodash';
import { copyFileSync, existsSync, FSWatcher, mkdirSync, watch } from 'fs';
import { MonorepoPackageOptions, PackageJson, PackageJsonVuepress } from './interfaces';
import { Monorepo } from './Monorepo';
import { SidebarConfigObject } from '@vuepress/theme-default/lib/shared/nav';

const log = debug.debug('monorepo:package');


export class MonorepoPackage {
    public readonly options: MonorepoPackageOptions;
    public readonly pkg: PackageJson;
    protected watchers: FSWatcher[] = [];

    get name() {return this.options.name;}

    get app(): App {return this.monorepo.app;}

    constructor(protected monorepo: Monorepo, options: MonorepoPackageOptions | string) {
        if ( typeof options === 'string' ) {
            options = { path: options };
        }
        this.options = merge({}, monorepo.options.defaultPackageOptions, options);
        this.pkg     = require(resolve(this.options.path, 'package.json'));
        if ( !this.options.name ) {
            this.options.name = this.pkg.name;
        }
        if ( !this.options.destDir ) {
            this.options.destDir = this.pkg.name.split('/').pop();
        }
        if ( this.pkg.vuepress ) {
            let allowed: Array<keyof PackageJsonVuepress> = [ 'name', 'destDir', 'docsDir', 'readme' ];
            Object.keys(this.pkg.vuepress).filter(key => allowed.includes(key as any)).forEach(key => {
                this.options[key] = this.pkg.vuepress[key]
            })
        }
    }

    rootPath(...parts) {return resolve(this.options.path, ...parts);}

    docsPath(...parts) {return resolve(this.options.path, this.options.docsDir, ...parts);}

    destPath(...parts) {return resolve(this.app.dir.source(this.monorepo.options.dirName, this.options.destDir), ...parts);}

    ensureDocDir() {
        if ( !existsSync(this.destPath()) ) {
            mkdirSync(this.destPath(), { recursive: true });
        }
        return this;
    }

    copyDocFile(fileName: string) {
        const filePath     = this.docsPath(fileName);
        const destFilePath = this.destPath(fileName);
        copyFileSync(filePath, destFilePath);
        log(`copyDocFile from "${filePath}" > "${destFilePath}"`);
        return this;
    }

    copyDocFiles() {
        const files = this.getAllDocsPaths();
        for ( const filePath of files ) {
            const relativePath = relative(this.docsPath(),filePath);
            const destFilePath = this.destPath(relativePath);
            const destFileDir = dirname(destFilePath)
            if(!existsSync(destFileDir)){
                mkdirSync(destFileDir,{recursive:true})
            }
            copyFileSync(filePath, destFilePath);
            log(`copyDocFile from "${filePath}" > "${destFilePath}"`);
        }
        return this;
    }

    getAllRelativeDocsPaths(){
        return this.getAllDocsPaths().map(filePath => relative(this.docsPath(),filePath))
    }

    copyReadme() {
        copyFileSync(this.getReadmePath(), this.destPath('README.md'));
        log(`copyReadme from "${this.getReadmePath()}" > "${this.destPath('README.md')}"`);
        return this;
    }

    getReadmePath() {
        let readmePath = this.rootPath(this.options.readme);
        if ( !existsSync(readmePath) ) {
            logger.createError(`Readme for monorepo package ${this.options.name} not found at "${readmePath}"`);
        }
        return readmePath;
    }

    getAllDocsPaths() {
        return glob.sync(this.docsPath('**/*.*'), { absolute: true });
    }

    startWatching() {
        logger.success('monorepo startWatching');
        log('startWatching');
        this.watchers.push(watch(this.getReadmePath(), (event, filename) => {
            logger.success('monorepo watch readme', filename);
            log('watch readme', filename);
            this.copyReadme();
        }));
        for ( const docPath of this.getAllDocsPaths() ) {
            this.watchers.push(watch(docPath, { encoding: 'utf8' }, (event, filename) => {
                logger.success('monorepo watch', filename);
                log('watch', filename);
                this.copyDocFile(filename);
            }));
        }
        return this;
    }

    stopWatching() {
        logger.success('monorepo stopWatching');
        log('stopWatching');
        while ( this.watchers.length > 0 ) {
            this.watchers.shift().close();
        }
        return this;
    }
}
