import { JsonFileDetails } from '../interfaces';
import { AbstractJsonWriter } from './AbstractJsonWriter';
import { PackageJson } from '../types';
export declare class NodePackageJsonWriter<T extends PackageJson = PackageJson> extends AbstractJsonWriter<T> {
    detailsToPackageJson(details: JsonFileDetails<T>): string;
}
