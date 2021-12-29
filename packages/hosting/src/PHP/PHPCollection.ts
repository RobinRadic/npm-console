import { Collection } from '@radic/core';
import { PHP } from './PHP';


export class PHPCollection extends Collection<PHP> {

    fpm(): this {return this.where('isFPM', true) as this; }


    cli(): this {return this.where('isCli', true) as this; }
}
