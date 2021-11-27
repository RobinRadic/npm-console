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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBc0Q7QUFDdEQsc0NBQXVFO0FBR3ZFLElBQXFCLGVBQWUsR0FBcEMsTUFBcUIsZUFBZ0IsU0FBUSxxQkFBVztJQUk5QyxNQUFNLENBQUMsSUFBYTs7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBTSxDQUFDLEVBQUMsRUFBRTtnQkFDL0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUNKLENBQUE7QUFacUI7SUFBakIsSUFBQSxhQUFNLEVBQUMsUUFBUSxDQUFDOzhCQUFTLHVCQUFnQjsrQ0FBTTtBQUM1QjtJQUFuQixJQUFBLGFBQU0sRUFBQyxVQUFVLENBQUM7OEJBQVcscUJBQWM7aURBQUM7QUFGNUIsZUFBZTtJQURuQyxJQUFBLGlCQUFPLEVBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7R0FDN0IsZUFBZSxDQWFuQztrQkFib0IsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21tYW5kLCBjb21tYW5kIH0gZnJvbSAnQHJhZGljL2NvbnNvbGUnO1xuaW1wb3J0IHsgQ29uZmlnUmVwb3NpdG9yeSwgaW5qZWN0LCBTZXJ2aWNlTWFuYWdlciB9IGZyb20gJ0ByYWRpYy9jb3JlJztcblxuQGNvbW1hbmQoJ3NlcnZpY2VzIFtuYW1lXScsICdTZXJ2aWNlcyB0ZXN0IHN0dWZmJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZpY2VzQ29tbWFuZCBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBAaW5qZWN0KCdjb25maWcnKSBjb25maWc6IENvbmZpZ1JlcG9zaXRvcnk8YW55PjtcbiAgICBAaW5qZWN0KCdzZXJ2aWNlcycpIHNlcnZpY2VzOiBTZXJ2aWNlTWFuYWdlcjtcblxuICAgIGFzeW5jIGhhbmRsZShuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coeyBuYW1lIH0pO1xuICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IHRoaXMuc2VydmljZXMucmVmcmVzaEFsbCgpO1xuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2VzLmVhY2goYXN5bmMgcyA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgcy5leGVjKCdzdGF0dXMnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMnLCBzLm5hbWUsIHMucGlkcywgc3RhdHVzKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG4iXX0=