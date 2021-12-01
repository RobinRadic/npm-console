import { Site } from '../Sites';
import { ApacheServer } from './ApacheServer';
import { ApacheConfig } from './configTypes';
import apacheconf from 'apacheconf';


export class ApacheSite extends Site<ApacheConfig, ApacheServer> {

    constructor(server: ApacheServer, configFilePath: string) {
        super(server, configFilePath);
    }

    async getHostNames() {
        const config = await this.getConfig();
        if ( config.VirtualHost ) {
            return config.VirtualHost.map<string>(vhost => vhost.ServerName as any).filter(Boolean);
        }
        return [  ];
    }

    protected cachedConfig:ApacheConfig

    async getConfig(force: boolean = false): Promise<ApacheConfig> {
        return new Promise((resolve, reject) => {
            if ( this.cachedConfig && !force ) {
                resolve(this.cachedConfig);
            }
            apacheconf(this.configFilePath, (error, config, parser) => {
                if ( error ) return reject(error);
                this.cachedConfig = config;
                resolve(config);
            });
        });
    }
}
