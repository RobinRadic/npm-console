import { BaseCommand, command, option } from '@radic/console';
import { ConfigRepository, inject, ServiceManager } from '@radic/core';
import { Output } from '@radic/console-output';
import { Input } from '@radic/console-input';
import { existsSync, statSync } from 'fs';
import { execSync } from 'child_process';

@command('paths [name]', 'Services test stuff')
export default class PathsCommand extends BaseCommand {
    @option('o', 'Open the given path (requires name argument)') open: boolean;
    @inject('config') config: ConfigRepository<any>;
    @inject('services') services: ServiceManager;
    @inject('output') out: Output;
    @inject('input') ask: typeof Input;

    async handle(name?: string): Promise<any> {
        let { out, app, cli, ask } = this;

        let paths                              = {
            app : app.paths.app,
            pkg : app.paths.pkg,
            root: app.paths.root,
        };
        let { cache, config, data, log, temp } = app.paths.env;
        let envPaths                           = {
            cache : cache(),
            config: config(),
            data  : data(),
            log   : log(),
            temp  : temp(),
        };
        if ( name ) {
            let path = paths[ name ] || envPaths[ name ];
            if ( this.open ) {
                if ( !existsSync(path) ) {
                    return out.line(`{red.bold}Error{/red./bold} Path does not exist [${path}]`);
                }
                if ( statSync(path).isDirectory() ) {
                    let bin = await ask.input('Application to open directory with?', 'nemo');
                    return execSync(`${bin} ${path}`);
                } else if ( statSync(path).isFile() ) {
                    const result = await ask.editor('Application to edit file with?', {});
                    return out.line(result);
                }
                return out.line('Something went wrong');
            }

        }
        out.chain.bold.white.underline.line('Paths');
        let width        = out.util.widest(Object.keys(paths).concat(Object.keys(envPaths))) + 5;
        const printPaths = (paths: any) => {
            Object.entries(paths).forEach(([ k, v ]) => {
                let space = ' '.repeat(width - k.length);
                out.chain.cyan.write(k + ':' + space);
                let color = existsSync(v.toString()) ? 'green' : 'yellow';
                out.chain[ color ].line(v.toString());
            });
        };
        out.chain.white.bold.line('Application:');
        printPaths(paths);

        out.chain.white.bold.line('Environment:');
        printPaths(envPaths);


    }
}
