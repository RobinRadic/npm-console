import { join, resolve } from 'path';
import { existsSync, mkdirpSync } from 'fs-extra';
import { Application, DirectoryStorage, inject } from '@radic/core';
import { PackageJson } from '@radic/shared';
import simpleGit, { SimpleGit } from 'simple-git';
import { encode } from 'ini';
import { MonoRepoOptions } from './MonoRepo';
import { spawn } from 'child_process';
import which from 'npm-which';
import { SyncHook } from 'tapable';

export class MonoRepoCreator {
    @inject('app') private app: Application;
    public readonly hooks                    = {
        create            : new SyncHook(),
        init              : new SyncHook(),
        createReadme      : new SyncHook(),
        createPackageJson : new SyncHook(),
        createMonoJson    : new SyncHook(),
        createEditorConfig: new SyncHook(),
        createGitIgnore   : new SyncHook(),
        runGitInit        : new SyncHook(),
        runGitAdd         : new SyncHook(),
        runYarn           : new SyncHook(),
        runYarnDataOut         : new SyncHook<[string]>(['str']),
        runYarnDataErr         : new SyncHook<[string]>(['str']),
    };
    public gitignore: string[]               = [
        'node_modules',
        'package-lock.json',
        'yarn-error.log',
        'yarn.lock',
        '.env',
        '.tmp',
    ];
    public editorconfig: any                 = {
        root       : true,
        [ '*' ]    : {
            charset                 : 'utf-8',
            end_of_line             : 'lf',
            indent_style            : 'space',
            indent_size             : 4,
            trim_trailing_whitespace: true,
            insert_final_newline    : true,
        },
        [ '*.yml' ]: {
            indent_size: 2,
        },
    };
    public packageJson: Partial<PackageJson> = {
        version     : '1.0.0',
        description : 'Monorepo',
        private     : true,
        workspaces  : {
            packages: [
                'packages/*',
            ]
        },
        scripts     : {},
        dependencies: {
            '@radic/mono-cli': '^1.0.0',
        },
    };
    protected files: string[]                = [];

    protected get dir(): DirectoryStorage {
        return new DirectoryStorage({
            basePath: this.path,
            encoding: 'utf-8',
            json    : {
                pretty: true,
            },
        });
    }

    protected get git(): SimpleGit {return simpleGit(this.path);}


    constructor(public name?: string, public path?: string) {
        if ( !path ) {
            this.path = join(process.cwd(), name);
        }
    }

    public validForCreate() {
        return existsSync(this.path) === false;
    }

    public validForInit() {
        return existsSync(this.path) === true;
    }

    async create() {
        if(!this.validForCreate()){
            throw new Error('Not valid for create')
        }
        this.hooks.create.call(this);
        mkdirpSync(this.path);
        this.dir.ensureDir('packages');
        this.createPackageJson();
        this.createMonoJson();
        this.createEditorConfig();
        this.createGitIgnore();
        await this.runGitInit();
        await this.runGitAdd();
        await this.runYarn();
    }

    async init() {
        if(!this.validForInit()){
            throw new Error('Not valid for init')
        }
        this.hooks.init.call(this);
        this.createMonoJson();
        await this.runGitAdd();
    }

    protected createReadme() {
        this.hooks.createReadme.call(this);
        this.dir.write('README.md', `# ${this.name}\nMono Repo`);
        this.files.push('README.md');
    }

    protected createEditorConfig() {
        this.hooks.createEditorConfig.call(this);
        let str = encode(this.editorconfig, {
            whitespace: true,
        });
        str     = str.replace(/^\[(.*)(\*)\\(\..*)\]$/gm, '[$1$2$3]');
        this.dir.write('.editorconfig', str);
        this.files.push('.editorconfig');
    }

    protected createPackageJson() {
        this.hooks.createPackageJson.call(this);
        this.dir.writeJson('package.json', {
            ...this.packageJson,
            name: this.name,
        });
        this.files.push('package.json');
    }

    protected createMonoJson() {
        this.hooks.createMonoJson.call(this);
        this.dir.writeJson('mono.json', <MonoRepoOptions>{
            $schema   : this.resourcesPath('schema/mono.schema.json'),
            workspaces: true,
            creator   : {
                template : this.resourcesPath('template/_template.json'),
                variables: {},
            },
        });
        this.files.push('mono.json');
    }

    protected createGitIgnore() {
        this.hooks.createGitIgnore.call(this);
        this.dir.write('.gitignore', this.gitignore.join('\n'));
        this.files.push('.gitignore');
    }

    protected async runGitInit() {
        this.hooks.runGitInit.call(this);
        return this.git.init();
    }

    protected async runGitAdd() {
        this.hooks.runGitAdd.call(this);
        await this.git.add(this.files);
        this.files = [];
    }

    protected async runYarn() {
        this.hooks.runYarn.call(this);
        return new Promise((resolve, reject) => {
            let command = which.sync('yarn', { cwd: '/', env: process.env });
            if ( !command ) {
                command = 'yarn';
            }
            let proc            = spawn(command, [ 'install' ], {
                cwd          : this.path,
                env          : process.env,
                gid          : process.getgid(),
                uid          : process.getuid(),
                serialization: 'json',
                killSignal   : 'SIGKILL',
                timeout      : 1000 * 60, // minute
            });
            let datas: string[] = [];
            proc.stdout.on('data', (data) => {
                this.hooks.runYarnDataOut.call(data);
                datas.push(data);
                // console.log(`stdout: ${data}`);
            });
            proc.stderr.on('data', (data) => {
                this.hooks.runYarnDataErr.call(data);
                datas.push(data);
                // console.error(`stderr: ${data}`);
            });
            proc.on('close', (code) => code === 0 ? resolve(null) : reject(datas.pop()));
            proc.on('exit', (code) => code === 0 ? resolve(null) : reject(datas.pop()));
        });
    }


    /**
     * Accepts relative path from the @radic/mono-cli resources path and returns the absolute path
     * @param parts
     */
    protected resourcesPath(...parts: string[]) {return resolve(__dirname, '../../resources', ...parts); }

}
