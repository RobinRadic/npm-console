"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatcherMixin = void 0;
const eventemitter2_1 = __importDefault(require("eventemitter2"));
var EventEmitter2 = eventemitter2_1.default.EventEmitter2;
class DispatcherMixin {
    constructor() {
        this.events = new EventEmitter2({
            wildcard: true,
            delimiter: '.',
        });
    }
    emit(event, ...values) { return this.events.emit.apply(this.events, ...arguments); }
    emitAsync(event, ...values) { return this.events.emitAsync.apply(this.events, ...arguments); }
    on(event, listener, options) {
        this.events.on.apply(this.events, ...arguments);
        return this;
    }
    once(event, listener, options) {
        this.events.once.apply(this.events, ...arguments);
        return this;
    }
    onAny(listener) {
        this.events.onAny.apply(this.events, ...arguments);
        return this;
    }
    offAny(listener) {
        this.events.offAny.apply(this.events, ...arguments);
        return this;
    }
    off(event, listener) { return this.events.off.apply(this.events, ...arguments); }
}
exports.DispatcherMixin = DispatcherMixin;
//# sourceMappingURL=DispatcherMixin.js.map