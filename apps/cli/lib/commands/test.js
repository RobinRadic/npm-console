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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("@radic/console");
const core_1 = require("@radic/core");
const console_input_1 = require("@radic/console-input");
let TestCommand = class TestCommand extends console_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'ff';
    }
    handle(suite) {
        return __awaiter(this, void 0, void 0, function* () {
            console.dir(this.config);
            console.log({ name: this.name, suite });
            this.cli.showHelp('log');
            yield console_input_1.Input.fuzzypath('Pick the date');
        });
    }
};
__decorate([
    (0, console_1.option)('n', 'name'),
    (0, console_1.coerce)(value => value + 'asdf'),
    __metadata("design:type", String)
], TestCommand.prototype, "name", void 0);
__decorate([
    (0, core_1.inject)('config'),
    __metadata("design:type", typeof (_a = typeof core_1.ConfigRepository !== "undefined" && core_1.ConfigRepository) === "function" ? _a : Object)
], TestCommand.prototype, "config", void 0);
TestCommand = __decorate([
    (0, console_1.command)('test [suite]', 'Dev test stuff')
], TestCommand);
exports.default = TestCommand;
//# sourceMappingURL=test.js.map