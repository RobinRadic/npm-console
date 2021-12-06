"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatcher = void 0;
const eventemitter2_1 = __importDefault(require("eventemitter2"));
var EventEmitter2 = eventemitter2_1.default.EventEmitter2;
const inversify_1 = require("inversify");
(0, inversify_1.decorate)((0, inversify_1.injectable)(), EventEmitter2);
let Dispatcher = class Dispatcher extends EventEmitter2 {
    /**
     * Create a new Dispatcher instance.
     *
     * @param opts
     */
    constructor(opts) {
        super({
            wildcard: true,
            delimiter: ':',
        });
        this.anyListeners = [];
    }
    /**
     * Emit an event by name.
     *
     * @param eventName
     * @param args
     * @returns
     */
    emit(eventName, ...args) {
        let result = super.emit(eventName, ...args);
        this.anyListeners.forEach(listener => listener(eventName, ...args));
        return result;
    }
    /**
     * Register an event listener.
     *
     * @param listener
     */
    any(listener) {
        this.anyListeners.push(listener);
    }
};
Dispatcher = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.unmanaged)()),
    __metadata("design:paramtypes", [Object])
], Dispatcher);
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=Dispatcher.js.map