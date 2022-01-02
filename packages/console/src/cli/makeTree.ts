import { Cli } from './Cli';
import { RequireDirectoryOptions } from '../yargs';
import { relative } from 'path';


export function makeTree<T = any, U = T>(cli: Cli, dir: string, opts: RequireDirectoryOptions = {}) {
    const shim = cli.getShim();
    const m=module
    let result = shim.requireDirectory(m, dir, {
        extensions: [ 'js', 'ts' ],
        exclude   : p => p.endsWith('d.ts'),
        recurse: true,
        visit(obj: T, joined, filename): void | U {
let rf = relative(dir, filename);
let rj = relative(dir, joined);
let a = {rf,rj}
            return;
        },
    });
    return result;
}
