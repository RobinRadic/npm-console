import { Adapter } from './Adapter';
import { PackageJson } from '../types';
import { JsonFileReader, JsonFileReaderInterface, NodePackageJsonFileReader } from '../Readers';
import { Constructor } from '@radic/shared';
import { JsonWriter, JsonWriterInterface, NodePackageJsonWriter } from '../Writers';


export class JsonAdapter extends Adapter<object> {
    public readerClass: Constructor<JsonFileReaderInterface<PackageJson>> = JsonFileReader;
    public writerClass: Constructor<JsonWriterInterface<PackageJson>>     = JsonWriter;
}
