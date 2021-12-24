import { Constructor } from '@radic/shared';
import { JsonFileReaderInterface } from '../Readers';
import { JsonWriterInterface } from '../Writers';
import { Manager } from '../Manager';
export declare abstract class Adapter<T = object> {
    protected manager: Manager<T>;
    abstract readerClass: Constructor<JsonFileReaderInterface<T>>;
    abstract writerClass: Constructor<JsonWriterInterface<T>>;
    protected reader: JsonFileReaderInterface<T>;
    protected writer: JsonWriterInterface<T>;
    constructor(manager: Manager<T>);
    getReader<R extends JsonFileReaderInterface<T> = JsonFileReaderInterface<T>>(): R;
    getWriter<R extends JsonWriterInterface<T> = JsonWriterInterface<T>>(): R;
}
