"use strict";
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
exports.Process = void 0;
const path_1 = require("path");
const systeminformation_1 = require("systeminformation");
class Process {
    // path: string;
    constructor(manager, path) {
        this.manager = manager;
        this.path = path;
        this.instances = [];
        this.name = (0, path_1.basename)(path);
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            const loads = yield (0, systeminformation_1.processLoad)(this.name);
            const datas = this.manager.processes.filter(proc => proc.path.includes(this.name));
            for (const data of datas) {
                let load = loads.find(load => load.pid === data.pid);
                this.instances.push(Object.assign(Object.assign({}, data), load));
            }
            return this;
        });
    }
}
exports.Process = Process;
//# sourceMappingURL=Process.js.map