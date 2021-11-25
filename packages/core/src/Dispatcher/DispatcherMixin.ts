import { event, EventAndListener, EventEmitter2, eventNS, ListenerFn, OnOptions } from 'eventemitter2';


export class DispatcherMixin {
    protected events: EventEmitter2 = new EventEmitter2({
        wildcard: true,
        delimiter: '.',
    });

    emit(event: event | eventNS, ...values: any[]): boolean {return this.events.emit.apply(this.events, ...arguments); }

    emitAsync(event: event | eventNS, ...values: any[]): Promise<any[]> {return this.events.emitAsync.apply(this.events, ...arguments); }

    on(event: event | eventNS, listener: ListenerFn, options?: boolean | OnOptions): this {
        this.events.on.apply(this.events, ...arguments);
        return this;
    }

    once(event: event | eventNS, listener: ListenerFn, options?: true | OnOptions): this {
        this.events.once.apply(this.events, ...arguments);
        return this;
    }

    onAny(listener: EventAndListener): this {
        this.events.onAny.apply(this.events, ...arguments);
        return this;
    }

    offAny(listener: ListenerFn): this {
        this.events.offAny.apply(this.events, ...arguments);
        return this;
    }

    off(event: event | eventNS, listener: ListenerFn): this {return this.events.off.apply(this.events, ...arguments); }
}
