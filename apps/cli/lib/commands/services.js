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
const core_1 = require("@radic/core");
let ServicesCommand = class ServicesCommand extends console_1.BaseCommand {
    handle(name) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ name });
            const services = yield this.services.refreshAll();
            yield this.services.each((s) => __awaiter(this, void 0, void 0, function* () {
                let status = yield s.exec('status');
                console.log('status', s.name, s.pids, status);
            }));
        });
    }
};
__decorate([
    (0, core_1.inject)('config'),
    __metadata("design:type", core_1.ConfigRepository)
], ServicesCommand.prototype, "config", void 0);
__decorate([
    (0, core_1.inject)('services'),
    __metadata("design:type", core_1.ServiceManager)
], ServicesCommand.prototype, "services", void 0);
ServicesCommand = __decorate([
    (0, console_1.command)('services [name]', 'Services test stuff')
], ServicesCommand);
exports.default = ServicesCommand;
//# sourceMappingURL=services.js.map