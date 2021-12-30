import { Collection } from '@radic/core';
import { Package } from './Package';
import { PackageBuilder } from './PackageBuilder';


export class PackageCollection extends Collection<Package> {
    toBuilders(): Collection<PackageBuilder> {
        return Collection.make(this.map(pkg => pkg.builder).toArray());
    }
}
