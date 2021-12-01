import { app, PATH } from '@radic/core';
import { objectify, Str } from '@radic/shared';
import { promisify } from 'util';
import { exec as _exec } from 'child_process';
import { parse } from 'ini';
import { existsSync, readFileSync } from 'fs';
import { basename, join } from 'path';
import { PhpInfo, PhpParsedInfo } from './types';
import { glob } from 'glob';
import { merge } from 'lodash';

const exec = promisify(_exec);

export class PHPScanner {
    protected static get path(): PATH {return app.path;}

    static async searchForPhpBins() {
        return await this.path.match(this.path.search('php', { realpath: true }), '--help', out => out.trim().startsWith('Usage: php'));
    }

    static async searchForPhpServices() {
        return await this.path.match(glob.sync('/etc/init.d/*php*', { realpath: true }), ' status', out => out.trim().includes('Loaded:'));
    }

    static async isValidPhpBinPath(path: string) {
        try {
            await this.parsePhpInfo(path, await this.extractPhpInfoFromBin(path));
            return true;
        } catch (e) {
            return false;
        }
    }

    static async extractPhpInfoFromBin(path: string) {
        try {
            let { stdout, stderr } = await exec(path + ' -i', {
                env    : process.env,
                timeout: 1000,
            });
            return stdout;
        } catch (e) {
            throw e;
        }
    }

    static parsePhpInfo(path: string, info: string): PhpInfo {
        let parsed: PhpParsedInfo = info.match(/^(.*?)=>(.*)$/gm).map(str => str.split('=>').map(str => str.trim())).reduce(objectify, {});

        let iniFiles: string[]  = [ parsed[ 'Additional .ini files parsed' ].replace(',', '') ],
            reachedLastIniLine  = false,
            reachedFirstIniLine = false;
        info.split(/\n/g).forEach((line, i) => {
            if ( reachedFirstIniLine && !reachedLastIniLine ) {
                if ( line.endsWith('.ini,') ) {
                    iniFiles.push(line.replace(',', ''));
                }
                if ( line.endsWith('.ini') ) {
                    iniFiles.push(line);
                    reachedLastIniLine = true;
                }
            }
            if ( line.includes('Additional .ini files parsed') ) {
                reachedFirstIniLine = true;
            }
        });
        let pools = {};
        glob.sync(join(parsed[ 'Configuration File (php.ini) Path' ], '*.conf')).forEach(path => {
            let parsed = parse(readFileSync(path, { encoding: 'utf8' }));
            merge(pools, parsed);

            if ( parsed.include || parsed.global.include ) {
                glob.sync(parsed.include || parsed.global.include).forEach(path => {
                    let parsed = parse(readFileSync(path, { encoding: 'utf8' }));
                    merge(pools, parsed);
                });
            }
            return parsed;
        });
        let config       = parse(readFileSync(parsed[ 'Loaded Configuration File' ], { encoding: 'utf8' }));
        const extensions = iniFiles.map(filePath => {
            let name = basename(filePath).replace(/^[\d]+/g, '');
            name     = Str.stripLeft(name, '-');
            name     = Str.stripRight(name, '.ini');
            let ini  = {};
            if ( existsSync(filePath) ) {
                let content = readFileSync(filePath, { encoding: 'utf8' });
                ini         = parse(content);
            }
            return [ name, ini ];
        }).reduce(objectify, {});

        return { bin: path, config, extensions, iniFiles, parsed, pools } as any;
    }
}
