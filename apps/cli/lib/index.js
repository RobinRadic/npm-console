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
const console_output_1 = require("@radic/console-output");
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
        let out = app.get('output');
        out.ui.addMacros([console_output_1.macros.beep, console_output_1.macros.spinner, console_output_1.macros.sparkly, console_output_1.macros.notify, console_output_1.macros.highlight]);
        yield app.start();
        return app;
    });
}
exports.cli = cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBQ3ZGLDRDQUFvRDtBQUNwRCxvRkFBaUY7QUFDakYsdUZBQW9GO0FBQ3BGLDBEQUF1RDtBQUV2RCxTQUFzQixHQUFHOztRQUNyQixNQUFNLEdBQUcsR0FBRyxrQkFBVyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQixTQUFTLEVBQUU7Z0JBQ1AsMkJBQW9CO2dCQUNwQiw0QkFBcUI7Z0JBQ3JCLDRCQUFrQjtnQkFDbEIsMkNBQW9CO2dCQUNwQiw2Q0FBcUI7YUFDeEI7WUFDRCxNQUFNLEVBQUs7Z0JBQ1AsT0FBTyxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7b0JBQzVCLEdBQUcsQ0FBQyxHQUFHO3lCQUNILGNBQWMsRUFBRTt5QkFDaEIsYUFBYSxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixPQUFPLEdBQUcsQ0FBQyxHQUFVLENBQUM7Z0JBQzFCLENBQUMsQ0FBQTtnQkFDRCxNQUFNLEVBQUc7b0JBQ0wsU0FBUyxFQUFFLENBQUUsWUFBWSxDQUFFO29CQUMzQixRQUFRLEVBQUcsQ0FBRSxZQUFZLENBQUU7aUJBQzlCO2dCQUNELEdBQUcsRUFBTTtvQkFDTCxVQUFVLEVBQUUsU0FBUyxHQUFHLFdBQVc7aUJBQ3RDO2dCQUNELE1BQU0sRUFBRztvQkFDTCxNQUFNLEVBQVUsSUFBSTtvQkFDcEIsTUFBTSxFQUFVLEtBQUs7b0JBQ3JCLGNBQWMsRUFBRSxJQUFJO2lCQUN2QjthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFFLHVCQUFNLENBQUMsSUFBSSxFQUFFLHVCQUFNLENBQUMsT0FBTyxFQUFFLHVCQUFNLENBQUMsT0FBTyxFQUFFLHVCQUFNLENBQUMsTUFBTSxFQUFFLHVCQUFNLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQztRQUNuRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FBQTtBQXRDRCxrQkFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQ2FjaGVTZXJ2aWNlUHJvdmlkZXIsIFN5c3RlbVNlcnZpY2VQcm92aWRlciB9IGZyb20gJ0ByYWRpYy9jb3JlJztcbmltcG9ydCB7IENsaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJ0ByYWRpYy9jb25zb2xlJztcbmltcG9ydCB7IElucHV0U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnQHJhZGljL2NvbnNvbGUtaW5wdXQvSW5wdXRTZXJ2aWNlUHJvdmlkZXInO1xuaW1wb3J0IHsgT3V0cHV0U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnQHJhZGljL2NvbnNvbGUtb3V0cHV0L091dHB1dFNlcnZpY2VQcm92aWRlcic7XG5pbXBvcnQgeyBtYWNyb3MsIE91dHB1dCB9IGZyb20gJ0ByYWRpYy9jb25zb2xlLW91dHB1dCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGkoKSB7XG4gICAgY29uc3QgYXBwID0gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgYXBwLnJlZ2lzdGVyUGF0aHMoX19kaXJuYW1lKTtcbiAgICBhd2FpdCBhcHAuaW5pdGlhbGl6ZSh7XG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgQ2FjaGVTZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgICAgICBTeXN0ZW1TZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgICAgICBDbGlTZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgICAgICBJbnB1dFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgICAgIE91dHB1dFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgXSxcbiAgICAgICAgY29uZmlnICAgOiB7XG4gICAgICAgICAgICBzdGFydEZuOiBhc3luYyAoYXBwLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgYXBwLmNsaVxuICAgICAgICAgICAgICAgICAgIC5zaG93SGVscE9uRmFpbCgpXG4gICAgICAgICAgICAgICAgICAgLmRlbWFuZENvbW1hbmQoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBhcHAuY2xpU3RhcnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwLmNsaSBhcyBhbnk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3lzdGVtIDoge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlczogWyAncGhwLWZwbTguMCcgXSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcyA6IFsgJ3BocDguMC1mcG0nIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpICAgIDoge1xuICAgICAgICAgICAgICAgIGNvbW1hbmREaXI6IF9fZGlybmFtZSArICcvY29tbWFuZHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dHB1dCA6IHtcbiAgICAgICAgICAgICAgICBjb2xvcnMgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaWxlbnQgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzZXRPbk5ld2xpbmU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGF3YWl0IGFwcC5ib290KCk7XG4gICAgbGV0IG91dDogT3V0cHV0ID0gYXBwLmdldCgnb3V0cHV0Jyk7XG4gICAgb3V0LnVpLmFkZE1hY3JvcyhbIG1hY3Jvcy5iZWVwLCBtYWNyb3Muc3Bpbm5lciwgbWFjcm9zLnNwYXJrbHksIG1hY3Jvcy5ub3RpZnksIG1hY3Jvcy5oaWdobGlnaHQgXSk7XG4gICAgYXdhaXQgYXBwLnN0YXJ0KCk7XG4gICAgcmV0dXJuIGFwcDtcbn1cblxuZGVjbGFyZSBtb2R1bGUgJ0ByYWRpYy9jb25zb2xlLW91dHB1dC9saWIvdWkvVWknIHtcbiAgICBpbnRlcmZhY2UgVWkge1xuICAgICAgICBiZWVwOiBtYWNyb3MuQmVlcGVyQ2FsbGJhY2s7XG4gICAgICAgIHNwaW5uZXI6IG1hY3Jvcy5TcGlubmVyQ2FsbGJhY2s7XG4gICAgICAgIHNwYXJrbHk6IG1hY3Jvcy5TcGFya2x5Q2FsbGJhY2s7XG4gICAgICAgIG5vdGlmeTogbWFjcm9zLk5vdGlmeUNhbGxiYWNrO1xuICAgICAgICBoaWdobGlnaHQ6IG1hY3Jvcy5IaWdobGlnaHRDYWxsYmFjaztcbiAgICB9XG59XG4iXX0=