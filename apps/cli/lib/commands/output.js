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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("@radic/console");
const console_output_1 = require("@radic/console-output");
let OutputCommand = class OutputCommand extends console_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'ff';
    }
    handle(macro, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ name: this.name, macro, args });
            const out = new console_output_1.ConsoleOutput();
            console.log(out);
            out.macro('foo', function (a, b) {
                console.log('macro foo', 'this', this, { a, b });
            });
            out.foo();
            if (macro) {
                out.runMacro(macro, ...args);
            }
        });
    }
};
__decorate([
    (0, console_1.option)('n', 'name'),
    __metadata("design:type", String)
], OutputCommand.prototype, "name", void 0);
OutputCommand = __decorate([
    (0, console_1.command)('output [macro] [args...]', 'Dev test stuff')
], OutputCommand);
exports.default = OutputCommand;
//# sourceMappingURL=output.js.map