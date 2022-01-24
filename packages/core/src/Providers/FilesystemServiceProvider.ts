import { ServiceProvider } from '@radic/shared';
import { DiskCollection, Filesystem, FS, MimeTypes, resolveDisks } from '../System';
import { interfaces } from 'inversify/lib/interfaces/interfaces';

declare module '../Foundation/Application' {
    export interface Application {
        fs: FS;

        disks(): Promise<DiskCollection>;
    }

    export interface Bindings {
        fs: FS;
    }
}
export class FilesystemServiceProvider extends ServiceProvider {
    public register() {
        this.app.singleton('mimes', MimeTypes);
        this.app.instance('fs', Filesystem).addBindingGetter('fs');
        this.app.bind('disks.provider').toProvider(ctx => {
            if ( this.app.isBound('disks.provider.promise') ) {
                return this.app.get('disks.provider.promise');
            }
            let promise = loader(ctx);
            this.app.instance('disks.provider.promise', promise);
            return promise;
        }).onActivation((ctx, injectable) => {
            ctx.container.unbind('disks.provider.promise');
            return injectable;
        });
        this.app.bind('disks').toProvider(ctx => {
            return async () => (ctx.container.get('disks.provider') as any)();
        });
        this.app.get('disks')();
        this.app.addBindingGetter('disks');
    }

}


const loader = (ctx: interfaces.Context) => {
    return async function (refresh: boolean = false): Promise<DiskCollection> {

        if ( !refresh && ctx.container.isBound('disks.disks') ) {
            return ctx.container.get('disks.disks');
        }
        let disks = await resolveDisks();
        if ( ctx.container.isBound('disks.disks') ) {
            ctx.container.unbind('disks.disks');
        }
        ctx.container.bind('disks.disks').toConstantValue(disks);

        return disks;
    };
};
