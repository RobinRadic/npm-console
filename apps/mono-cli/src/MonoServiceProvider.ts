import { ServiceProvider } from '@radic/shared';
import { MonoRepoOptions } from './mono';
import { MonoRepo } from './mono/MonoRepo';
import { Output } from '@radic/console-output';

declare module './mono' {
    export interface MonoRepo {
        build(name: string): this;

        rebuild(name: string): this;

        clean(name: string): this;

        watch(name: string): this;

        buildAll(): this;

        rebuildAll(): this;

        cleanAll(): this;

        watchAll(): this;
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


declare module '@radic/console-output/types/colors/StyleManager' {
    export interface Styles {

    }
}

declare module '@radic/console-output/types/Output' {
    export interface Output {
        info(message: string): this;

        error(message: string, title?: string, error?: Error): this;

        warning(message: string): this;

        success(message: string): this;
    }
}

export class MonoServiceProvider extends ServiceProvider {

    load() {
        this.app.addConfig<Partial<MonoConfiguration>>({
            key     : 'mono',
            defaults: {
                rootDir: this.app.paths.root,
                options: {
                    rootPackagePath: this.app.paths.path(this.app.paths.root, 'package.json'),
                    workspaces     : false,
                    packagePaths   : [],
                },
            },
        });
    }

    register() {
        this.app.binding('monoRepo', app => {
            return new MonoRepo(app.config.mono.options);
        }, true).addBindingGetter('monoRepo');
    }

    boot() {
        this.bootOutputMacros();
        this.bootMonoRepoMacros();
        this.hookPackageBuilders();
    }

    hookPackageBuilders() {
        const out = this.app.output;
        const log = this.app.log;
        const dim = (commands: string[]) => commands.map(cmd => `{dim}${cmd}{/dim}`);
        this.app.monoRepo.packagesArray.forEach(pkg => {
            pkg.colorize = pkg.name.toColor().lighten(0.3,true).getWrapper();
            pkg.hooks.builder.tap('mono', builder => {
                builder.hooks.preBuild.tap('mono', (commands) => {
                    log.info(` ${pkg.coloredName}: Starting build`);
                    out.info(` ${pkg.coloredName}: Starting build`);
                    out.line(' ' + dim(commands).join('\n '));
                    return commands;
                });
                builder.hooks.postBuild.tap('mono', (commands) => {
                    log.info(` ${pkg.coloredName}: Building done`);
                    out.info(` ${pkg.coloredName}: Building done`);
                    return commands;
                });
                builder.hooks.preClean.tap('mono', (commands) => {
                    log.info(` ${pkg.coloredName}: Starting clean`);
                    out.info(` ${pkg.coloredName}: Starting clean`);
                    out.line(' ' + dim(commands).join('\n '));
                    return commands;
                });
                builder.hooks.postClean.tap('mono', (commands) => {
                    log.success(` ${pkg.coloredName}: Cleaning done`);
                    out.success(` ${pkg.coloredName}: Cleaning done`);
                    return commands;
                });
            });
        });
    }

    bootOutputMacros() {
        let app    = this.app;
        let output = this.app.get<Output>('output');
        output.macro('info', function (this: Output, message: string) {
            this.line(`{blue}${this.figures.info}{/blue} ${message}`);
            return this;
        });
        output.macro('warning', function (this: Output, message: string) {
            this.line(`{yellow}${this.figures.warning}{/yellow} ${message}`);
            return this;
        });
        output.macro('success', function (this: Output, message: string) {
            this.line(`{green}${this.figures.checkboxOn}{/green} ${message}`);
            return this;
        });
        output.macro('error', function (this: Output, message: string, title?: string, error?: string) {
            title = title ? `{red.bold}${title}:{/red./bold}` : '';
            this.line(`{red}${this.figures.cross}{/red} ${title} ${message}`);
            if ( error && app.config.debug ) {
                app.error(error, !app.config.debug);
            }
            return this;
        });
    }

    bootMonoRepoMacros() {
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
