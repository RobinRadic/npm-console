import { Adapter } from './Adapter';
import { PackageJson } from '../types';
import { JsonFileReaderInterface } from '../Readers';
import { Constructor } from '@radic/shared';
import { JsonWriterInterface } from '../Writers';
export declare class NodePackageAdapter extends Adapter<PackageJson> {
    readerClass: Constructor<JsonFileReaderInterface<PackageJson>>;
    writerClass: Constructor<JsonWriterInterface<PackageJson>>;
}
