import { Constructor } from '@radic/shared';
import { JsonFileReaderInterface } from '../Readers';
import { JsonWriterInterface } from '../Writers';
import { Manager } from '../Manager';

export abstract class Adapter<T = object> {
    abstract readerClass: Constructor<JsonFileReaderInterface<T>>
    abstract writerClass: Constructor<JsonWriterInterface<T>>
    protected reader:JsonFileReaderInterface<T>
    protected writer:JsonWriterInterface<T>

    constructor(protected manager:Manager<T>) {
    }

    getReader<R  extends JsonFileReaderInterface<T>=JsonFileReaderInterface<T>>():R{
        if(!this.reader){
            this.reader = new this.readerClass(this.manager)
        }
        return this.reader as R;
    }
    getWriter<R  extends JsonWriterInterface<T>=JsonWriterInterface<T>>():R{
        if(!this.writer){
            this.writer = new this.writerClass(this.manager)
        }
        return this.writer as R;
    }
}
