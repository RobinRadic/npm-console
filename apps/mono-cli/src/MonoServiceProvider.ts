import { ServiceProvider } from '@radic/shared';
import { MonoRepo, MonoRepoOptions } from './mono';

declare module './mono' {
    export interface MonoRepo {
        build(name: string):this;

        rebuild(name: string):this;

        clean(name: string):this;

        watch(name: string):this;

        buildAll():this;

        rebuildAll():this;

        cleanAll():this;

        watchAll():this;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        monoRepo: MonoRepo;
    }

    export interface Application {
        monoRepo: MonoRepo;
    }
}

declare module '@radic/core/types/types/config' {
    export interface Configuration {
        mono?: MonoConfiguration;
    }
}

export interface MonoConfiguration {
    rootDir?: string;
    options?: MonoRepoOptions;
}


export class MonoServiceProvider extends ServiceProvider {

    load() {
        this.app.addConfig<Partial<MonoConfiguration>>({
            key     : 'mono',
            defaults: {
                rootDir: this.app.paths.root,
                options: {
                    rootPackagePath: this.app.paths.path(this.app.paths.root, 'package.json'),
                },
            },
        });
    }

    register() {
        this.app.binding('monoRepo', app => {
            // @ts-ignore
            return new MonoRepo(app.config.mono.options);
        }, true).addBindingGetter('monoRepo');
    }

    boot() {
        let monoRepo = this.app.get<MonoRepo>('monoRepo');
        monoRepo.macro('build', function (this: MonoRepo, name: string) {
            this.getPackage(name).builder.build();
        });
        monoRepo.macro('rebuild', function (this: MonoRepo, name: string) {
            this.getPackage(name).builder.clean().build();
        });
        monoRepo.macro('watch', function (this: MonoRepo, name: string) {
            this.getPackage(name).builder.watch();
        });
        monoRepo.macro('clean', function (this: MonoRepo, name: string) {
            this.getPackage(name).builder.clean();
        });
        monoRepo.macro('buildAll', function (this: MonoRepo) {
            this.packages.each(pkg => pkg.builder.build());
        });
        monoRepo.macro('rebuildAll', function (this: MonoRepo) {
            this.packages.each(pkg => pkg.builder.clean().build());
        });
        monoRepo.macro('watchAll', function (this: MonoRepo) {
            this.packages.each(pkg => pkg.builder.watch());
        });
        monoRepo.macro('cleanAll', function (this: MonoRepo) {
            this.packages.each(pkg => pkg.builder.clean());
        });
    }
}
