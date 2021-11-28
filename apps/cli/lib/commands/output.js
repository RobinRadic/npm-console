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
const shared_1 = require("@radic/shared");
let OutputCommand = class OutputCommand extends console_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'ff';
    }
    handle(arg, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { out } = this;
            out.chain.blue.bold.line('Hello');
            if (this.macro) {
                out.chain.green.line(`Running macro "${this.macro}`);
                yield this[this.macro]();
            }
        });
    }
    icon() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = this.out.icons.findIcon('address-book', 'far');
            let icon = yield this.out.icons.generate(data, { format: 'png', fill: 'blue' });
            this.out.line(`{green}[[tick]]{/green} Created ${icon.path}`);
        });
    }
    spinner() {
        return __awaiter(this, void 0, void 0, function* () {
            let spin = this.out.ui.spinner('haai', { interval: 0.1 });
            spin.text = 'Waiting';
            spin.start();
            yield (0, shared_1.wait)(1999);
            spin.stop();
        });
    }
    progress() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const bar = this.out.ui.progress.bar({
                    total: 100,
                    curr: 0,
                    callback: () => resolve(null),
                });
                bar.render();
                let intervalId = setInterval(() => {
                    if (bar.complete) {
                        clearInterval(intervalId);
                    }
                    bar.tick(1);
                }, 300);
            });
        });
    }
    notify() {
        return __awaiter(this, void 0, void 0, function* () {
            this.out.ui.notify({ message: 'Job Done!', title: 'Job: Creating Heaven', icon: yield this.out.icons.notify('green', 'check') });
        });
    }
    sparkly() {
        return __awaiter(this, void 0, void 0, function* () {
            this.out.ui.sparkly([1, 2, 5, 6], { minimum: 0, maximum: 10, style: 'fire' });
        });
    }
    highlight() {
        return __awaiter(this, void 0, void 0, function* () {
            this.out.ui.highlight('<?php\n\nclass Hasher {\n\tpublic function hash(str){\n\t\treturn str . str;\n\t}\n}', { language: 'php' });
        });
    }
    handle2(macro, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ name: this.name, macro, args });
            let { out } = this;
            out.macro('foo', function (a, b) {
                console.log('macro foo', 'this = ', this.constructor.name, { a, b });
            });
            out.foo('bar', 'kie');
            if (macro) {
                out.runMacro(macro, ...args);
            }
            let c = out.colors.chain();
            console.log(c.green.bgBlue.bold.underline.get('whatsup'));
        });
    }
};
__decorate([
    (0, console_1.option)('n', 'name'),
    __metadata("design:type", String)
], OutputCommand.prototype, "name", void 0);
__decorate([
    (0, console_1.option)('m', 'Run a macro', { choices: ['spinner', 'notify', 'sparkly', 'progress', 'highlight'] }),
    __metadata("design:type", String)
], OutputCommand.prototype, "macro", void 0);
__decorate([
    (0, core_1.inject)('output'),
    __metadata("design:type", Object)
], OutputCommand.prototype, "out", void 0);
OutputCommand = __decorate([
    (0, console_1.command)('output [arg] [args...]', 'Dev test stuff')
], OutputCommand);
exports.default = OutputCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL291dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE4RDtBQUM5RCxzQ0FBcUM7QUFFckMsMENBQXFDO0FBVXJDLElBQXFCLGFBQWEsR0FBbEMsTUFBcUIsYUFBYyxTQUFRLHFCQUFXO0lBQXREOztRQUN5QixTQUFJLEdBQVcsSUFBSSxDQUFDO0lBeUU3QyxDQUFDO0lBcEVTLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBRyxJQUFJOztZQUM5QixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFBO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FB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QUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFOUQsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQXpFd0I7SUFBcEIsSUFBQSxnQkFBTSxFQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7OzJDQUFxQjtBQUM2RDtJQUFyRyxJQUFBLGdCQUFNLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUUsRUFBRSxDQUFDOzs0Q0FBZTtBQUVsRztJQUFqQixJQUFBLGFBQU0sRUFBQyxRQUFRLENBQUM7OzBDQUFhO0FBSmIsYUFBYTtJQURqQyxJQUFBLGlCQUFPLEVBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7R0FDL0IsYUFBYSxDQTBFakM7a0JBMUVvQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbW1hbmQsIGNvbW1hbmQsIG9wdGlvbiB9IGZyb20gJ0ByYWRpYy9jb25zb2xlJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ0ByYWRpYy9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0ByYWRpYy9jb25zb2xlLW91dHB1dCc7XG5pbXBvcnQgeyB3YWl0IH0gZnJvbSAnQHJhZGljL3NoYXJlZCc7XG5cblxuZGVjbGFyZSBtb2R1bGUgJ0ByYWRpYy9jb25zb2xlLW91dHB1dC9saWInIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIE91dHB1dCB7XG4gICAgICAgIGZvbyhhLCBiKTtcbiAgICB9XG59XG5cbkBjb21tYW5kKCdvdXRwdXQgW2FyZ10gW2FyZ3MuLi5dJywgJ0RldiB0ZXN0IHN0dWZmJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHB1dENvbW1hbmQgZXh0ZW5kcyBCYXNlQ29tbWFuZCB7XG4gICAgQG9wdGlvbignbicsICduYW1lJykgbmFtZTogc3RyaW5nID0gJ2ZmJztcbiAgICBAb3B0aW9uKCdtJywgJ1J1biBhIG1hY3JvJywgeyBjaG9pY2VzOiBbICdzcGlubmVyJywgJ25vdGlmeScsICdzcGFya2x5JywgJ3Byb2dyZXNzJywgJ2hpZ2hsaWdodCcgXSB9KSBtYWNybzogc3RyaW5nO1xuXG4gICAgQGluamVjdCgnb3V0cHV0Jykgb3V0OiBPdXRwdXQ7XG5cbiAgICBhc3luYyBoYW5kbGUoYXJnPzogc3RyaW5nLCAuLi5hcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgeyBvdXQgfSA9IHRoaXM7XG4gICAgICAgIG91dC5jaGFpbi5ibHVlLmJvbGQubGluZSgnSGVsbG8nKTtcbiAgICAgICAgaWYodGhpcy5tYWNybyl7XG4gICAgICAgICAgICBvdXQuY2hhaW4uZ3JlZW4ubGluZShgUnVubmluZyBtYWNybyBcIiR7dGhpcy5tYWNyb31gKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXNbdGhpcy5tYWNyb10oKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaWNvbigpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLm91dC5pY29ucy5maW5kSWNvbignYWRkcmVzcy1ib29rJywgJ2ZhcicpO1xuICAgICAgICBsZXQgaWNvbiA9IGF3YWl0IHRoaXMub3V0Lmljb25zLmdlbmVyYXRlKGRhdGEsIHsgZm9ybWF0OiAncG5nJywgZmlsbDogJ2JsdWUnIH0pO1xuICAgICAgICB0aGlzLm91dC5saW5lKGB7Z3JlZW59W1t0aWNrXV17L2dyZWVufSBDcmVhdGVkICR7aWNvbi5wYXRofWApO1xuICAgIH1cblxuICAgIGFzeW5jIHNwaW5uZXIoKSB7XG4gICAgICAgIGxldCBzcGluICA9IHRoaXMub3V0LnVpLnNwaW5uZXIoJ2hhYWknLCB7IGludGVydmFsOiAwLjEgfSk7XG4gICAgICAgIHNwaW4udGV4dCA9ICdXYWl0aW5nJztcbiAgICAgICAgc3Bpbi5zdGFydCgpO1xuICAgICAgICBhd2FpdCB3YWl0KDE5OTkpO1xuICAgICAgICBzcGluLnN0b3AoKTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFyID0gdGhpcy5vdXQudWkucHJvZ3Jlc3MuYmFyKHtcbiAgICAgICAgICAgICAgICB0b3RhbDogMTAwLFxuICAgICAgICAgICAgICAgIGN1cnI6IDAsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHJlc29sdmUobnVsbCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJhci5yZW5kZXIoKTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGJhci5jb21wbGV0ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhci50aWNrKDEpXG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBub3RpZnkoKSB7XG4gICAgICAgIHRoaXMub3V0LnVpLm5vdGlmeSh7IG1lc3NhZ2U6ICdKb2IgRG9uZSEnLCB0aXRsZTogJ0pvYjogQ3JlYXRpbmcgSGVhdmVuJywgaWNvbjogYXdhaXQgdGhpcy5vdXQuaWNvbnMubm90aWZ5KCdncmVlbicsICdjaGVjaycpIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHNwYXJrbHkoKSB7XG4gICAgICAgIHRoaXMub3V0LnVpLnNwYXJrbHkoWyAxLCAyLCA1LCA2IF0sIHsgbWluaW11bTogMCwgbWF4aW11bTogMTAsIHN0eWxlOiAnZmlyZScgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGlnaGxpZ2h0KCl7XG4gICAgICAgIHRoaXMub3V0LnVpLmhpZ2hsaWdodCgnPD9waHBcXG5cXG5jbGFzcyBIYXNoZXIge1xcblxcdHB1YmxpYyBmdW5jdGlvbiBoYXNoKHN0cil7XFxuXFx0XFx0cmV0dXJuIHN0ciAuIHN0cjtcXG5cXHR9XFxufScsIHtsYW5ndWFnZToncGhwJ30pXG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlMihtYWNybz86IHN0cmluZywgLi4uYXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgbmFtZTogdGhpcy5uYW1lLCBtYWNybywgYXJncyB9KTtcbiAgICAgICAgbGV0IHsgb3V0IH0gPSB0aGlzO1xuXG4gICAgICAgIG91dC5tYWNybygnZm9vJywgZnVuY3Rpb24gKHRoaXM6IE91dHB1dCwgYT8sIGI/KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFjcm8gZm9vJywgJ3RoaXMgPSAnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHsgYSwgYiB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG91dC5mb28oJ2JhcicsICdraWUnKTtcbiAgICAgICAgaWYgKCBtYWNybyApIHtcbiAgICAgICAgICAgIG91dC5ydW5NYWNybyhtYWNybywgLi4uYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYyA9IG91dC5jb2xvcnMuY2hhaW4oKTtcbiAgICAgICAgY29uc29sZS5sb2coYy5ncmVlbi5iZ0JsdWUuYm9sZC51bmRlcmxpbmUuZ2V0KCd3aGF0c3VwJykpO1xuXG4gICAgfVxufVxuIl19