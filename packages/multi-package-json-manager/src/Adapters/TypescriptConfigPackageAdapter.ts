import { Adapter } from './Adapter';
import { PackageJson, TSconfigJson } from '../types';
import { JsonFileReaderInterface, TypescriptConfigFileReader } from '../Readers';
import { Constructor } from '@radic/shared';
import { JsonWriterInterface, TypescriptConfigJsonWriter } from '../Writers';


export class TypescriptConfigPackageAdapter extends Adapter<TSconfigJson> {
    public readerClass: Constructor<JsonFileReaderInterface<PackageJson>> = TypescriptConfigFileReader;
    public writerClass: Constructor<JsonWriterInterface<PackageJson>>     = TypescriptConfigJsonWriter;
}
