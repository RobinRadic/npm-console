import { PHP } from './PHP';
export declare enum PHPApi {
    CLI = "Command Line Interface",
    FPM = "FPM/FastCGI"
}
export declare namespace PHPApi {
    const keys: any;
    const values: any;
    type Key = 'CLI' | 'FPM';
    const toApi: (string: any) => PHPApi;
    const fromKey: (key: Key) => any;
    const is: (php: PHP, api: PHPApi) => boolean;
    const isCLI: (api: PHPApi) => boolean;
    const isFPM: (api: PHPApi) => boolean;
    const isValue: (api: any) => api is PHPApi;
    const isKey: (api: string) => api is Key;
    const toKey: (api: PHPApi) => "CLI" | "FPM";
}
