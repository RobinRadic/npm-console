import { BaseCommand } from '@radic/console';
import { Input } from '@radic/console-input';
import { PackageBuilder } from './mono/PackageBuilder';
import { inject } from '@radic/core';
import { MonoRepo } from './mono';
import { out } from '@radic/console-output';


export class Command extends BaseCommand {
    @inject('monoRepo') monoRepo:MonoRepo
    @out out:out;

    async getPackageName(name?:string): Promise<string>{
        return name ? name.toString().trim() : await Input.list('Choose package', this.monoRepo.packagesArray.map(pkg => pkg.name));
    }
}
