import { Site } from '../Sites';
import { ApacheServer } from './ApacheServer';
import { ApacheConfig } from './configTypes';
export declare class ApacheSite extends Site<ApacheConfig, ApacheServer> {
    constructor(server: ApacheServer, configFilePath: string);
    getHostNames(): Promise<string[]>;
    protected cachedConfig: ApacheConfig;
    getConfig(force?: boolean): Promise<ApacheConfig>;
}
