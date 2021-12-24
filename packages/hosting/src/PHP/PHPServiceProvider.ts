import { FileCacheAdapter } from '@radic/core';
import { PHPManager } from './PHPManager';
import { ServiceProvider } from '@radic/shared';


export interface PhpVersionOptions {
    binPath: string;
}

export interface PhpOptions {
    versions?: PhpVersionOptions[];
}

declare module '@radic/core/types/types/config' {
    export interface Configuration {
        php?: PhpOptions;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        php: PHPManager;
    }

    export interface Application {
        php: PHPManager;
    }
}


export class PHPServiceProvider extends ServiceProvider {
    deferred=true
    public load() {
        this.config({
            key     : 'php',
            defaults: {
                versions: [],
            },
        });
    }

    public register() {
        this.registerPhpManager();
    }

    protected registerPhpManager() {
        this.app.singleton('php', PHPManager).addBindingGetter('php');
    }


    async boot() {
        if(!this.app.cache.has('php')){
            this.app.cache.register(new FileCacheAdapter({
                name:'php'
            }));
        }
        await Promise.all(this.app.config.php.versions.map(async v => {
            const phpInfo = await this.app.php.getPhpInfoByPath(v.binPath);
            this.app.php.createAdd(phpInfo);
        }));
    }
}
