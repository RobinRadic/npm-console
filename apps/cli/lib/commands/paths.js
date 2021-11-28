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
const fs_1 = require("fs");
const child_process_1 = require("child_process");
let PathsCommand = class PathsCommand extends console_1.BaseCommand {
    handle(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let { out, app, cli, ask } = this;
            let paths = {
                app: app.paths.app,
                pkg: app.paths.pkg,
                root: app.paths.root,
            };
            let { cache, config, data, log, temp } = app.paths.env;
            let envPaths = {
                cache: cache(),
                config: config(),
                data: data(),
                log: log(),
                temp: temp(),
            };
            if (name) {
                let path = paths[name] || envPaths[name];
                if (this.open) {
                    if (!(0, fs_1.existsSync)(path)) {
                        return out.line(`{red.bold}Error{/red./bold} Path does not exist [${path}]`);
                    }
                    if ((0, fs_1.statSync)(path).isDirectory()) {
                        let bin = yield ask.input('Application to open directory with?', 'nemo');
                        return (0, child_process_1.execSync)(`${bin} ${path}`);
                    }
                    else if ((0, fs_1.statSync)(path).isFile()) {
                        const result = yield ask.editor('Application to edit file with?', {});
                        return out.line(result);
                    }
                    return out.line('Something went wrong');
                }
            }
            out.chain.bold.white.underline.line('Paths');
            let width = out.util.widest(Object.keys(paths).concat(Object.keys(envPaths))) + 5;
            const printPaths = (paths) => {
                Object.entries(paths).forEach(([k, v]) => {
                    let space = ' '.repeat(width - k.length);
                    out.chain.cyan.write(k + ':' + space);
                    let color = (0, fs_1.existsSync)(v.toString()) ? 'green' : 'yellow';
                    out.chain[color].line(v.toString());
                });
            };
            out.chain.white.bold.line('Application:');
            printPaths(paths);
            out.chain.white.bold.line('Environment:');
            printPaths(envPaths);
        });
    }
};
__decorate([
    (0, console_1.option)('o', 'Open the given path (requires name argument)'),
    __metadata("design:type", Boolean)
], PathsCommand.prototype, "open", void 0);
__decorate([
    (0, core_1.inject)('config'),
    __metadata("design:type", core_1.ConfigRepository)
], PathsCommand.prototype, "config", void 0);
__decorate([
    (0, core_1.inject)('services'),
    __metadata("design:type", core_1.ServiceManager)
], PathsCommand.prototype, "services", void 0);
__decorate([
    (0, core_1.inject)('output'),
    __metadata("design:type", Object)
], PathsCommand.prototype, "out", void 0);
__decorate([
    (0, core_1.inject)('input'),
    __metadata("design:type", Object)
], PathsCommand.prototype, "ask", void 0);
PathsCommand = __decorate([
    (0, console_1.command)('paths [name]', 'Services test stuff')
], PathsCommand);
exports.default = PathsCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEQ7QUFDOUQsc0NBQXVFO0FBR3ZFLDJCQUEwQztBQUMxQyxpREFBeUM7QUFHekMsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFhLFNBQVEscUJBQVc7SUFPM0MsTUFBTSxDQUFDLElBQWE7O1lBQ3RCLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFFbEMsSUFBSSxLQUFLLEdBQWdDO2dCQUNyQyxHQUFHLEVBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNuQixHQUFHLEVBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNuQixJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQ3ZCLENBQUM7WUFDRixJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3ZELElBQUksUUFBUSxHQUE2QjtnQkFDckMsS0FBSyxFQUFHLEtBQUssRUFBRTtnQkFDZixNQUFNLEVBQUUsTUFBTSxFQUFFO2dCQUNoQixJQUFJLEVBQUksSUFBSSxFQUFFO2dCQUNkLEdBQUcsRUFBSyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSSxFQUFJLElBQUksRUFBRTthQUNqQixDQUFDO1lBQ0YsSUFBSyxJQUFJLEVBQUc7Z0JBQ1IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFFLElBQUksQ0FBRSxJQUFJLFFBQVEsQ0FBRSxJQUFJLENBQUUsQ0FBQztnQkFDN0MsSUFBSyxJQUFJLENBQUMsSUFBSSxFQUFHO29CQUNiLElBQUssQ0FBQyxJQUFBLGVBQVUsRUFBQyxJ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RSxxQkFBcUIsQ0FBQztHQUMxQixZQUFZLENBMERoQztrQkExRG9CLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tbWFuZCwgY29tbWFuZCwgb3B0aW9uIH0gZnJvbSAnQHJhZGljL2NvbnNvbGUnO1xuaW1wb3J0IHsgQ29uZmlnUmVwb3NpdG9yeSwgaW5qZWN0LCBTZXJ2aWNlTWFuYWdlciB9IGZyb20gJ0ByYWRpYy9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0ByYWRpYy9jb25zb2xlLW91dHB1dCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0ByYWRpYy9jb25zb2xlLWlucHV0JztcbmltcG9ydCB7IGV4aXN0c1N5bmMsIHN0YXRTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuQGNvbW1hbmQoJ3BhdGhzIFtuYW1lXScsICdTZXJ2aWNlcyB0ZXN0IHN0dWZmJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGhzQ29tbWFuZCBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBAb3B0aW9uKCdvJywgJ09wZW4gdGhlIGdpdmVuIHBhdGggKHJlcXVpcmVzIG5hbWUgYXJndW1lbnQpJykgb3BlbjogYm9vbGVhbjtcbiAgICBAaW5qZWN0KCdjb25maWcnKSBjb25maWc6IENvbmZpZ1JlcG9zaXRvcnk8YW55PjtcbiAgICBAaW5qZWN0KCdzZXJ2aWNlcycpIHNlcnZpY2VzOiBTZXJ2aWNlTWFuYWdlcjtcbiAgICBAaW5qZWN0KCdvdXRwdXQnKSBvdXQ6IE91dHB1dDtcbiAgICBAaW5qZWN0KCdpbnB1dCcpIGFzazogdHlwZW9mIElucHV0O1xuXG4gICAgYXN5bmMgaGFuZGxlKG5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgeyBvdXQsIGFwcCwgY2xpLCBhc2sgfSA9IHRoaXM7XG5cbiAgICAgICAgbGV0IHBhdGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7XG4gICAgICAgICAgICBhcHAgOiBhcHAucGF0aHMuYXBwLFxuICAgICAgICAgICAgcGtnIDogYXBwLnBhdGhzLnBrZyxcbiAgICAgICAgICAgIHJvb3Q6IGFwcC5wYXRocy5yb290LFxuICAgICAgICB9O1xuICAgICAgICBsZXQgeyBjYWNoZSwgY29uZmlnLCBkYXRhLCBsb2csIHRlbXAgfSA9IGFwcC5wYXRocy5lbnY7XG4gICAgICAgIGxldCBlbnZQYXRocyAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge1xuICAgICAgICAgICAgY2FjaGUgOiBjYWNoZSgpLFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcoKSxcbiAgICAgICAgICAgIGRhdGEgIDogZGF0YSgpLFxuICAgICAgICAgICAgbG9nICAgOiBsb2coKSxcbiAgICAgICAgICAgIHRlbXAgIDogdGVtcCgpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIG5hbWUgKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHBhdGhzWyBuYW1lIF0gfHwgZW52UGF0aHNbIG5hbWUgXTtcbiAgICAgICAgICAgIGlmICggdGhpcy5vcGVuICkge1xuICAgICAgICAgICAgICAgIGlmICggIWV4aXN0c1N5bmMocGF0aCkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXQubGluZShge3JlZC5ib2xkfUVycm9yey9yZWQuL2JvbGR9IFBhdGggZG9lcyBub3QgZXhpc3QgWyR7cGF0aH1dYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggc3RhdFN5bmMocGF0aCkuaXNEaXJlY3RvcnkoKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpbiA9IGF3YWl0IGFzay5pbnB1dCgnQXBwbGljYXRpb24gdG8gb3BlbiBkaXJlY3Rvcnkgd2l0aD8nLCAnbmVtbycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY1N5bmMoYCR7YmlufSAke3BhdGh9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggc3RhdFN5bmMocGF0aCkuaXNGaWxlKCkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFzay5lZGl0b3IoJ0FwcGxpY2F0aW9uIHRvIGVkaXQgZmlsZSB3aXRoPycsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dC5saW5lKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQubGluZSgnU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIG91dC5jaGFpbi5ib2xkLndoaXRlLnVuZGVybGluZS5saW5lKCdQYXRocycpO1xuICAgICAgICBsZXQgd2lkdGggICAgICAgID0gb3V0LnV0aWwud2lkZXN0KE9iamVjdC5rZXlzKHBhdGhzKS5jb25jYXQoT2JqZWN0LmtleXMoZW52UGF0aHMpKSkgKyA1O1xuICAgICAgICBjb25zdCBwcmludFBhdGhzID0gKHBhdGhzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhdGhzKS5mb3JFYWNoKChbIGssIHYgXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9ICcgJy5yZXBlYXQod2lkdGggLSBrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgb3V0LmNoYWluLmN5YW4ud3JpdGUoayArICc6JyArIHNwYWNlKTtcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBleGlzdHNTeW5jKHYudG9TdHJpbmcoKSkgPyAnZ3JlZW4nIDogJ3llbGxvdyc7XG4gICAgICAgICAgICAgICAgb3V0LmNoYWluWyBjb2xvciBdLmxpbmUodi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvdXQuY2hhaW4ud2hpdGUuYm9sZC5saW5lKCdBcHBsaWNhdGlvbjonKTtcbiAgICAgICAgcHJpbnRQYXRocyhwYXRocyk7XG5cbiAgICAgICAgb3V0LmNoYWluLndoaXRlLmJvbGQubGluZSgnRW52aXJvbm1lbnQ6Jyk7XG4gICAgICAgIHByaW50UGF0aHMoZW52UGF0aHMpO1xuXG5cbiAgICB9XG59XG4iXX0=