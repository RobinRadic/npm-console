import { event, EventAndListener, eventNS, ListenerFn, OnOptions } from 'eventemitter2';
import eventemitter2 from 'eventemitter2';
import EventEmitter2 = eventemitter2.EventEmitter2;
export declare class DispatcherMixin {
    protected events: EventEmitter2;
    emit(event: event | eventNS, ...values: any[]): boolean;
    emitAsync(event: event | eventNS, ...values: any[]): Promise<any[]>;
    on(event: event | eventNS, listener: ListenerFn, options?: boolean | OnOptions): this;
    once(event: event | eventNS, listener: ListenerFn, options?: true | OnOptions): this;
    onAny(listener: EventAndListener): this;
    offAny(listener: ListenerFn): this;
    off(event: event | eventNS, listener: ListenerFn): this;
}
