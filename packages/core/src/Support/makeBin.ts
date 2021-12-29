import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { merge } from 'lodash';
import { app } from '../Foundation';


export function makeBin<ARGS extends any[] = any[], OPTS = any>(path: string, defaults:Partial<OPTS>={}, execOpts: ExecSyncOptionsWithStringEncoding = {} as any) {
    execOpts = merge({}, {
        encoding: 'utf-8',
        gid     : process.getgid(),
        uid     : process.getuid(),
        env     : process.env,
    } as Partial<ExecSyncOptionsWithStringEncoding>, execOpts) as ExecSyncOptionsWithStringEncoding;
    return (args: ARGS, options?: OPTS, sudo:boolean=true) => {
        options = {
            ...defaults,
            ...options,
        }
        let opts = Object.entries(options).map(([ key, value ]) => {
            let option = '';
            if ( key.length === 1 ) {
                option = '-' + key;
            } else {
                option = '--' + key;
            }
            if ( typeof value !== 'boolean' ) {
                option += ' ' + value;
            }
            return option;
        }).join(' ');

        let command = `${sudo ? 'sudo' :''} ${path} ${opts} ${args.join(' ')} `;
        app.ifDebug(log => log('makeBin command', command))
        let output = execSync(command, execOpts).toString();
        app.ifDebug(log => log('makeBin command output', output))
        return output;
    };
}
