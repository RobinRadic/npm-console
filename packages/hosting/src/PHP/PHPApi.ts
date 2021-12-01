import { PHP } from './PHP';

export enum PHPApi {
    CLI = 'Command Line Interface',
    FPM = 'FPM/FastCGI'
}

let apiKeys   = Object.keys(PHPApi);
let apiValues = Object.values(PHPApi);

export namespace PHPApi {
    export const keys = apiKeys;
    export const values      = apiValues;
    export type Key =
        'CLI'
        | 'FPM'
    export const toApi   = (string) => {
        if ( string === PHPApi.CLI ) {
            return PHPApi.CLI;
        } else if ( string === PHPApi.FPM ) {
            return PHPApi.FPM;
        }
        throw Error('Unknown PHP API');
    };
    export const fromKey = (key: Key) => PHPApi[ key.toUpperCase() ];
    export const is      = (php: PHP, api: PHPApi) => php.api === api;
    export const isCLI   = (api: PHPApi) => api === PHPApi.CLI;
    export const isFPM   = (api: PHPApi) => api === PHPApi.FPM;
    export const isValue = (api: any): api is PHPApi => {return api === PHPApi.CLI || api === PHPApi.FPM;};
    export const isKey   = (api: string): api is Key => keys.includes(api);
    export const toKey   = (api: PHPApi) => {
        if ( isCLI(api) ) {
            return 'CLI';
        }
        if ( isFPM(api) ) {
            return 'FPM';
        }
        throw Error('Unknown PHP API');
    };
}
