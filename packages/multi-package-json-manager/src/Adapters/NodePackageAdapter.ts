import { Adapter } from './Adapter';
import { PackageJson } from '../types';
import { JsonFileReaderInterface, NodePackageJsonFileReader } from '../Readers';
import { Constructor } from '@radic/shared';
import { JsonWriterInterface, NodePackageJsonWriter } from '../Writers';


export class NodePackageAdapter extends Adapter<PackageJson> {
    public readerClass: Constructor<JsonFileReaderInterface<PackageJson>> = NodePackageJsonFileReader;
    public writerClass: Constructor<JsonWriterInterface<PackageJson>>     = NodePackageJsonWriter;
}
