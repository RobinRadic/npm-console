import { Adapter } from './Adapter';
import { PackageJson, TSconfigJson } from '../types';
import { JsonFileReaderInterface } from '../Readers';
import { Constructor } from '@radic/shared';
import { JsonWriterInterface } from '../Writers';
export declare class TypescriptConfigPackageAdapter extends Adapter<TSconfigJson> {
    readerClass: Constructor<JsonFileReaderInterface<PackageJson>>;
    writerClass: Constructor<JsonWriterInterface<PackageJson>>;
}
