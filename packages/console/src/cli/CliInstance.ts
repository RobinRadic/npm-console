import { YargsInstance } from '../yargs';
import { makeTree } from './makeTree';
import { glob } from 'glob';
import { basename, dirname, extname, join, relative } from 'path';
import { Stats } from 'fs';
import { Application, inject, toStatType } from '@radic/core';
import { isBoolean, isFunction } from '@radic/shared';
import { randomUUID } from 'crypto';


export class CliInstance extends YargsInstance {
    @inject('app') app: Application;

    public getGlobalOptionsGroup() {
        if ( this.app.isBound('output') ) {
            return this.app.output.parse('{bold}Global Options:{/bold}');
        }
        return 'Global Options:';
    }

    public globalHelp(opt?: string, msg?: string): this {
        super.help(opt, msg)
             .option(opt, {
                 alias      : 'help',
                 global     : true,
                 description: 'Show help',
                 boolean    : true,
                 group      : this.getGlobalOptionsGroup(),
             });
        return this;
    }

    public useVerbosity(times: number):this {
        this.option('v', {
            alias : 'verbose',
            desc  : `Increase output verbosity up to ${times} times. Eg: -v -vv -vvv`,
            count : true,
            global: true,
            group : this.getGlobalOptionsGroup(),
        });
        if(this.app.isBound('log')) {
            this.app.hooks.cli.command.handler.tap('mono', (command, params) => {
                let verbose = 'v'.repeat(command.instance.verbose);
                if ( verbose ) {
                    this.app.log.level = verbose + 'erbose';
                }
            });
        }
        return this;
    }

    commandos(dir) :this{
        let extensions = [ 'ts', 'js', 'tsx' ];
        this.commandDir(dir, {
            extensions,
            visit: (commandObject, pathToFile, filename) => {
                return new commandObject.default();
            },
        });
        return this;
    }

    commandos4(dir: string) {
        const shim                           = this.getShim();
        let extensions                       = [ 'ts', 'js', 'tsx' ];
        let pattern                          = `*.{${extensions.join(',')}}`;
        let statCache: Record<string, Stats> = {};
        glob.sync(pattern, {
            cwd     : dir,
            absolute: true,
            // root: path,
            stat: true,
            statCache,
        });
        const results = Object.entries(statCache).filter(([ path, stats ]) => !isBoolean(stats)).map(([ path, stats ]) => {
            let result  = {
                uuid    : randomUUID(),
                relative: relative(dir, path),
                isDir   : stats.isDirectory(),
                isFile  : stats.isFile(),

                Class      : null,
                commandName: null,
                description: null,
                command    : null,
                type       : null,

                parent   : null,
                file     : null,
                dir      : null,
                children : [],
                parents  : [],
                base     : basename(path),
                dirname  : dirname(path),
                extension: stats.isFile() ? extname(path) : null,
                name     : stats.isFile() ? basename(path, extname(path)) : basename(path),
                path, stats,
            };
            let exp     = new RegExp(`\.${extensions.join('|\.')}$`, 'gm');
            let parents = result.relative.split('/').filter(segment => exp.test(segment) === false);
            if ( parents[ parents.length - 1 ] === result.name ) {
                parents.pop();
            }
            if ( result.isFile ) {
                let Class;
                const file  = require(result.path);
                result.file = file;
                if ( isBoolean(file?.__esModule) && file.__esModule === true && isFunction(file.default) ) {
                    Class = file.default;
                } else if ( isFunction(file) ) {
                    Class = file;
                }

                result.Class = Class;
            }

            if ( result.Class ) {
                result.command     = result.Class.command;
                result.commandName = result.Class.commandName;
                result.description = result.Class.description;
                result.type        = result.Class.type;
                // const instance:BaseCommand|GroupCommand = new result.Class()
                // let a = instance
            }

            result.parents = parents;
            return result;
        });


        let a     = results;
        const ctx = this.getContext();
        let cmd   = this.getCommand();
        return this;
    }


    commandos2(dir: string) {
        const shim                           = this.getShim();
        let extensions                       = [ 'ts', 'js', 'tsx' ];
        let pattern                          = `+(**/*.{${extensions.join(',')}}|**/)`;
        pattern                              = '**/';
        let statCache: Record<string, Stats> = {};
        glob.sync(pattern, {
            cwd     : dir,
            absolute: true,
            // root: path,
            stat: true,
            statCache,
        });
        const results = Object.entries(statCache).filter(([ path, stats ]) => !isBoolean(stats)).map(([ path, stats ]) => {
            let result  = {
                uuid     : randomUUID(),
                relative : relative(dir, path),
                type     : toStatType(stats),
                isDir    : stats.isDirectory(),
                isFile   : stats.isFile(),
                parent   : null,
                file     : null,
                dir      : null,
                Class    : null,
                children : [],
                parents  : [],
                base     : basename(path),
                dirname  : dirname(path),
                extension: stats.isFile() ? extname(path) : null,
                name     : stats.isFile() ? basename(path, extname(path)) : basename(path),
                path, stats,
            };
            let exp     = new RegExp(`\.${extensions.join('|\.')}$`, 'gm');
            let parents = result.relative.split('/').filter(segment => exp.test(segment) === false);
            if ( parents[ parents.length - 1 ] === result.name ) {
                parents.pop();
            }
            if ( result.isFile ) {
                let Class;
                const file  = require(result.path);
                result.file = file;
                if ( isBoolean(file?.__esModule) && file.__esModule === true && isFunction(file.default) ) {
                    Class = file.default;
                } else if ( isFunction(file) ) {
                    Class = file;
                }
                result.Class = Class;
            }

            result.parents = parents;
            return result;
        });

        results.map(result => {
            if ( result.parents.length > 0 ) {

                let parentName = result.parents[ result.parents.length - 1 ];
                results.forEach(res => {
                    let equalsName = res.base === parentName;
                    let startsWith = result.path.startsWith(res.path);
                    let equalsPath = result.path === join(res.path, result.base);
                    if ( equalsName && startsWith && equalsPath ) {
                        result.parent = res;
                        result.parent.children.push(result);
                    }
                });
            }
            return result;
        });

        let a = results;
        this.commandDir(dir, {
            extensions,
            visit: (commandObject, pathToFile, filename) => {
                return new commandObject.default();
            },
        });
        const ctx = this.getContext();
        let cmd   = this.getCommand();
        return this;
    }

    showTree(dir: string) {
        return makeTree(this, dir);
    }
}
