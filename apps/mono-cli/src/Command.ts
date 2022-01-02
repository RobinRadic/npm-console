import { BaseCommand } from '@radic/console';
import { Input,ask } from '@radic/console-input';
import { inject } from '@radic/core';
import { MonoRepo } from './mono';
import { out } from '@radic/console-output';


export class Command extends BaseCommand {
    @inject('monoRepo') monoRepo: MonoRepo;
    @out out: out;
    @ask ask: ask;

    async getPackageName(name?: string): Promise<string> {
        if ( name ) {
            name = name.toString().trim();
        }
        if ( !name || this.monoRepo.getPackage(name) === undefined ) {
            this.out.warning('No (valid) package name given.')
            name = await this.askPackageName();
        }
        return name;
    }

    async askPackageName(): Promise<string> {
        return await Input.list('Choose package', this.monoRepo.packagesArray.map(pkg => pkg.name));
    }
}
