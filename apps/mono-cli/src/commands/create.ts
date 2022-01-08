import { command, option } from '@radic/console';
import { Command } from '../Command';
import { isAbsolute, join, relative } from 'path';
import { existsSync } from 'fs-extra';
import { readFileSync, statSync } from 'fs';
import { isString } from '@radic/shared';


@command('create [name] [path]', 'Create package', [ 'C' ])
export default class extends Command {
    @option('t', 'Path to a custom template', { requiresArg: true }) template: string;
    @option('v', 'Path to a json file containing variables to override the default template variables', { requiresArg: true }) variables: string;

    async handle(name?: string, path?: string) {
        let variables:any = {}
        if ( !name ) {
            name = await this.ask.input('Package name');
        }
        let hasGivenPath = isString(path);
        if ( !path ) {
            path = name.split('/').pop();
            path = 'packages/' + path;
        }
        if ( !await this.ask.confirm(`This package will be created in [${path}]`,hasGivenPath) ) {
            const parentPath = await this.ask.directory('Choose parent directory the package will be created in', this.monoRepo.rootPath);
            const dirName    = await this.ask.input('Enter the directory name the package will be created in');
            path             = join(relative(this.monoRepo.rootPath, parentPath), dirName);
        }


        const creator = this.monoRepo.createPackageCreator(path);
        if ( this.template ) {
            if ( !isAbsolute(this.template) ) {
                this.template = this.monoRepo.path(this.template);
            }
            let error = false;
            if ( !existsSync(this.template) ) {
                this.log.error(`Custom template directory does not exist: ${this.template}`);
                error = true;
            }
            if (!error&& !statSync(this.template).isDirectory() ) {
                this.log.error(`Custom template path is not a directory: ${this.template}`);
                error = true;
            }
            if ( error === true ) {
                this.template = await this.ask.directory('Choose the directory containing the custom template', this.monoRepo.rootPath);
                if ( !isAbsolute(this.template) ) {
                    this.template = this.monoRepo.path(this.template);
                }
            }
            creator.setTemplateDirectory(this.template);
        }


        if(this.variables){
            if ( !isAbsolute(this.variables) ) {
                this.variables = this.monoRepo.path(this.variables);
            }
            let error = false;
            if ( !existsSync(this.variables) ) {
                this.log.error(`Custom variables json file does not exist: ${this.variables}`);
                error = true;
            }
            if (!error&& !statSync(this.variables).isFile() ) {
                this.log.error(`Custom variables json file path is not a directory: ${this.variables}`);
                error = true;
            }
            if ( error === true ) {
                this.variables = await this.ask.filePath('Provide the json file path containing the custom template variables', this.monoRepo.rootPath);
                if ( !isAbsolute(this.variables) ) {
                    this.variables = this.monoRepo.path(this.variables);
                }
            }
            let content = readFileSync(this.variables,'utf-8')
            variables = JSON.parse(content);
        }


        creator.hooks.copy.tap('cli', item => {
            this.log.info(`Copy [${item.from}] to [${item.to}]`)
            return item;
        })
        creator.hooks.build.tap('cli', item => {
            this.log.info(`Build [${item.to}] using [${item.builder}]`)
            return item;
        })
        creator.hooks.generate.tap('cli', path => {
            this.log.info(`Create [${path}]`)
            return path;
        })
        variables.name = name;
        creator.run(variables);

    }
}
