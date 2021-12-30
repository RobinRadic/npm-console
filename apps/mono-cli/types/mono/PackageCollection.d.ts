import { Collection } from '@radic/core';
import { Package } from './Package';
import { PackageBuilder } from './PackageBuilder';
export declare class PackageCollection extends Collection<Package> {
    toBuilders(): Collection<PackageBuilder>;
}
