import { Repository } from '../Config';
import { IServiceProviderClass } from '@radic/shared';
import { StartFn } from '../Foundation';
export declare type Config = Repository<Configuration> & Configuration;
export interface Configuration {
    debug?: boolean;
    startFn?: StartFn;
}
export interface ApplicationInitOptions {
    dirname: string;
    providers?: IServiceProviderClass[];
    config?: Configuration;
}
