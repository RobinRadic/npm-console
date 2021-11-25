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
exports.cli = void 0;
const core_1 = require("@radic/core");
const console_1 = require("@radic/console");
const InputServiceProvider_1 = require("@radic/console-input/InputServiceProvider");
function cli() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = core_1.Application.instance;
        app.registerPaths(__dirname);
        yield app.initialize({
            providers: [
                core_1.CacheServiceProvider,
                core_1.SystemServiceProvider,
                console_1.CliServiceProvider,
                InputServiceProvider_1.InputServiceProvider
            ],
            config: {
                startFn: (app, ...args) => __awaiter(this, void 0, void 0, function* () {
                    app.cli
                        .showHelpOnFail()
                        .demandCommand();
                    yield app.cliStart();
                    return app.cli;
                }),
                system: {
                    processes: ['php-fpm8.0'],
                    services: ['php8.0-fpm']
                },
                cli: {
                    commandDir: __dirname + '/commands',
                }
            },
        });
        yield app.boot();
        yield app.start();
        app.cache.put('a', 'n');
        const services = yield app.services.refreshAll();
        yield app.services.each((s) => __awaiter(this, void 0, void 0, function* () {
            let status = yield s.exec('status');
            console.log('status', s.name, s.pids, status);
        }));
        return app;
    });
}
exports.cli = cli;
//# sourceMappingURL=index.js.map