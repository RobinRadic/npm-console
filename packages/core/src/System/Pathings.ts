import { glob, IOptions } from 'glob';
import { join } from 'path';
import { flatten } from 'lodash';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';
import envPaths from '../Support/envPaths';
import { app } from '../Foundation';

const exec = promisify(_exec);

export interface PathSearchOptions extends  IOptions {}

export class Pathings {
    static getinPaths(): string {
        return process.env.PATH;
    }
    static getBinPaths(): string[] {
        return (process.env.PATH || '').split(':');
    }

    static search(name: string, options:PathSearchOptions={}) {
        if ( !name.startsWith('*') ) {
            name = '*' + name;
        }
        if ( !name.endsWith('*') ) {
            name += '*';
        }
        return flatten(this.getBinPaths().map(path => glob.sync(join(path, name), options)));
    }

    static async match(paths: string[], args: string, matcher: (output: string) => boolean) {
        let promises  = paths.map(async path => {
            try {
                let { stderr, stdout } = await exec(path + ' ' + args, {
                    env    : process.env,
                    timeout: 1000,
                });
                return { path, output: stdout };
            } catch (e) {
                return { path, output: null };
            }
        });
        const results = await Promise.all(promises);
        return results.filter(r => r.output !== null).filter(r => matcher(r.output)).map(r => r.path);
    }

}
