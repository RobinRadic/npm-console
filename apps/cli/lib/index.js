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
const OutputServiceProvider_1 = require("@radic/console-output/OutputServiceProvider");
function cli() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = core_1.Application.instance;
        app.registerPaths(__dirname);
        yield app.initialize({
            providers: [
                core_1.CacheServiceProvider,
                core_1.SystemServiceProvider,
                console_1.CliServiceProvider,
                InputServiceProvider_1.InputServiceProvider,
                OutputServiceProvider_1.OutputServiceProvider,
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
                    services: ['php8.0-fpm'],
                },
                cli: {
                    commandDir: __dirname + '/commands',
                },
                output: {
                    colors: true,
                    silent: false,
                    resetOnNewline: true,
                },
            },
        });
        yield app.boot();
        yield app.start();
        return app;
    });
}
exports.cli = cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBQ3ZGLDRDQUFvRDtBQUNwRCxvRkFBaUY7QUFDakYsdUZBQW9GO0FBRXBGLFNBQXNCLEdBQUc7O1FBQ3JCLE1BQU0sR0FBRyxHQUFHLGtCQUFXLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2pCLFNBQVMsRUFBRTtnQkFDUCwyQkFBb0I7Z0JBQ3BCLDRCQUFxQjtnQkFDckIsNEJBQWtCO2dCQUNsQiwyQ0FBb0I7Z0JBQ3BCLDZDQUFxQjthQUN4QjtZQUNELE1BQU0sRUFBSztnQkFDUCxPQUFPLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTtvQkFDNUIsR0FBRyxDQUFDLEdBQUc7eUJBQ0gsY0FBYyxFQUFFO3lCQUNoQixhQUFhLEVBQUUsQ0FBQztvQkFDcEIsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sR0FBRyxDQUFDLEdBQVUsQ0FBQztnQkFDMUIsQ0FBQyxDQUFBO2dCQUNELE1BQU0sRUFBRztvQkFDTCxTQUFTLEVBQUUsQ0FBRSxZQUFZLENBQUU7b0JBQzNCLFFBQVEsRUFBRyxDQUFFLFlBQVksQ0FBRTtpQkFDOUI7Z0JBQ0QsR0FBRyxFQUFNO29CQUNMLFVBQVUsRUFBRSxTQUFTLEdBQUcsV0FBVztpQkFDdEM7Z0JBQ0QsTUFBTSxFQUFHO29CQUNMLE1BQU0sRUFBVSxJQUFJO29CQUNwQixNQUFNLEVBQVUsS0FBSztvQkFDckIsY0FBYyxFQUFFLElBQUk7aUJBQ3ZCO2FBQ0o7U0FDSixDQUFDLENBQUM7UUFDSCxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FBQTtBQXBDRCxrQkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQ2FjaGVTZXJ2aWNlUHJvdmlkZXIsIFN5c3RlbVNlcnZpY2VQcm92aWRlciB9IGZyb20gJ0ByYWRpYy9jb3JlJztcbmltcG9ydCB7IENsaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJ0ByYWRpYy9jb25zb2xlJztcbmltcG9ydCB7IElucHV0U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnQHJhZGljL2NvbnNvbGUtaW5wdXQvSW5wdXRTZXJ2aWNlUHJvdmlkZXInO1xuaW1wb3J0IHsgT3V0cHV0U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnQHJhZGljL2NvbnNvbGUtb3V0cHV0L091dHB1dFNlcnZpY2VQcm92aWRlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGkoKSB7XG4gICAgY29uc3QgYXBwID0gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgYXBwLnJlZ2lzdGVyUGF0aHMoX19kaXJuYW1lKTtcbiAgICBhd2FpdCBhcHAuaW5pdGlhbGl6ZSh7XG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgQ2FjaGVTZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgICAgICBTeXN0ZW1TZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgICAgICBDbGlTZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgICAgICBJbnB1dFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgICAgIE91dHB1dFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgXSxcbiAgICAgICAgY29uZmlnICAgOiB7XG4gICAgICAgICAgICBzdGFydEZuOiBhc3luYyAoYXBwLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgYXBwLmNsaVxuICAgICAgICAgICAgICAgICAgIC5zaG93SGVscE9uRmFpbCgpXG4gICAgICAgICAgICAgICAgICAgLmRlbWFuZENvbW1hbmQoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBhcHAuY2xpU3RhcnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwLmNsaSBhcyBhbnk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3lzdGVtIDoge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlczogWyAncGhwLWZwbTguMCcgXSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcyA6IFsgJ3BocDguMC1mcG0nIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpICAgIDoge1xuICAgICAgICAgICAgICAgIGNvbW1hbmREaXI6IF9fZGlybmFtZSArICcvY29tbWFuZHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dHB1dCA6IHtcbiAgICAgICAgICAgICAgICBjb2xvcnMgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaWxlbnQgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzZXRPbk5ld2xpbmU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGF3YWl0IGFwcC5ib290KCk7XG4gICAgYXdhaXQgYXBwLnN0YXJ0KCk7XG4gICAgcmV0dXJuIGFwcDtcbn1cbiJdfQ==