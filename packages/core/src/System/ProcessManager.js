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
exports.ProcessManager = void 0;
const Manager_1 = require("../Support/Manager");
const Process_1 = require("./Process");
const systeminformation_1 = require("systeminformation");
const collect_js_1 = require("collect.js");
class ProcessManager extends Manager_1.Manager {
    constructor() {
        super(...arguments);
        this.processes = new collect_js_1.Collection();
    }
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (0, systeminformation_1.processes)();
            data.list.forEach(p => {
                let proc = this.processes.where('pid', p.pid).first();
                if (!proc) {
                    this.processes.push(p);
                }
            });
            this.processes.map(p => {
                return data.list.find(pp => pp.pid = p.pid);
            });
            delete data.list;
            this.info = data;
            return this;
        });
    }
    register(name) {
        if (!this.has(name)) {
            this.set(name, new Process_1.Process(this, name));
        }
    }
}
exports.ProcessManager = ProcessManager;
//# sourceMappingURL=ProcessManager.js.map