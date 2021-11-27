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
let OutputCommand = class OutputCommand extends console_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'ff';
    }
    handle(macro, ...args) {
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
            out.line('{green}[[tick]]{/green} Done');
        });
    }
};
__decorate([
    (0, console_1.option)('n', 'name'),
    __metadata("design:type", String)
], OutputCommand.prototype, "name", void 0);
__decorate([
    (0, core_1.inject)('output'),
    __metadata("design:type", Object)
], OutputCommand.prototype, "out", void 0);
OutputCommand = __decorate([
    (0, console_1.command)('output [macro] [args...]', 'Dev test stuff')
], OutputCommand);
exports.default = OutputCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL291dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE4RDtBQUM5RCxzQ0FBcUM7QUFVckMsSUFBcUIsYUFBYSxHQUFsQyxNQUFxQixhQUFjLFNBQVEscUJBQVc7SUFBdEQ7O1FBQ3lCLFNBQUksR0FBVyxJQUFJLENBQUM7SUFvQjdDLENBQUM7SUFoQlMsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFHLElBQUk7O1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBRW5CLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQXdCLENBQUUsRUFBRSxDQUFFO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUssS0FBSyxFQUFHO2dCQUNULEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDaEM7WUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxRCxHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQXBCd0I7SUFBcEIsSUFBQSxnQkFBTSxFQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7OzJDQUFxQjtBQUV2QjtJQUFqQixJQUFBLGFBQU0sRUFBQyxRQUFRLENBQUM7OzBDQUFhO0FBSGIsYUFBYTtJQURqQyxJQUFBLGlCQUFPLEVBQUMsMEJBQTBCLEVBQUUsZ0JBQWdCLENBQUM7R0FDakMsYUFBYSxDQXFCakM7a0JBckJvQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbW1hbmQsIGNvbW1hbmQsIG9wdGlvbiB9IGZyb20gJ0ByYWRpYy9jb25zb2xlJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ0ByYWRpYy9jb3JlJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0ByYWRpYy9jb25zb2xlLW91dHB1dCc7XG5cbmRlY2xhcmUgbW9kdWxlICdAcmFkaWMvY29uc29sZS1vdXRwdXQvbGliJyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBPdXRwdXQge1xuICAgICAgICBmb28oYSxiKTtcbiAgICB9XG59XG5cbkBjb21tYW5kKCdvdXRwdXQgW21hY3JvXSBbYXJncy4uLl0nLCAnRGV2IHRlc3Qgc3R1ZmYnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0Q29tbWFuZCBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBAb3B0aW9uKCduJywgJ25hbWUnKSBuYW1lOiBzdHJpbmcgPSAnZmYnO1xuXG4gICAgQGluamVjdCgnb3V0cHV0Jykgb3V0OiBPdXRwdXQ7XG5cbiAgICBhc3luYyBoYW5kbGUobWFjcm8/OiBzdHJpbmcsIC4uLmFyZ3MpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh7IG5hbWU6IHRoaXMubmFtZSwgbWFjcm8sIGFyZ3MgfSk7XG4gICAgICAgIGxldCB7IG91dCB9ID0gdGhpcztcblxuICAgICAgICBvdXQubWFjcm8oJ2ZvbycsIGZ1bmN0aW9uICh0aGlzOiBPdXRwdXQsIGE/LCBiPykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hY3JvIGZvbycsICd0aGlzID0gJyx0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHsgYSwgYiB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG91dC5mb28oJ2JhcicsJ2tpZScpO1xuICAgICAgICBpZiAoIG1hY3JvICkge1xuICAgICAgICAgICAgb3V0LnJ1bk1hY3JvKG1hY3JvLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjID0gb3V0LmNvbG9ycy5jaGFpbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhjLmdyZWVuLmJnQmx1ZS5ib2xkLnVuZGVybGluZS5nZXQoJ3doYXRzdXAnKSk7XG4gICAgICAgIG91dC5saW5lKCd7Z3JlZW59W1t0aWNrXV17L2dyZWVufSBEb25lJyk7XG4gICAgfVxufVxuIl19