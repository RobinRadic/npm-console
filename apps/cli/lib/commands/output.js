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
                this.line('{green}[[tick]]{/green} Done');
                console.log('macro foo', 'this', this, { a, b });
            });
            out.foo();
            if (macro) {
                out.runMacro(macro, ...args);
            }
            let c = out.colors.chain();
            console.log(c.green.bgBlue.bold.get('whatsup'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL291dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFzRTtBQUN0RSxzQ0FBdUQ7QUFVdkQsSUFBcUIsYUFBYSxHQUFsQyxNQUFxQixhQUFjLFNBQVEscUJBQVc7SUFBdEQ7O1FBQ3lCLFNBQUksR0FBVyxJQUFJLENBQUM7SUFxQjdDLENBQUM7SUFqQlMsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFHLElBQUk7O1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3QyxJQUFJLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFBO1lBRWhCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQXFCLENBQUUsRUFBQyxDQUFFO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtZQUMvQyxDQUFDLENBQUMsQ0FBQTtZQUNGLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUcsS0FBSyxFQUFDO2dCQUNMLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDaEM7WUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUM1QyxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBckJ3QjtJQUFwQixJQUFBLGdCQUFNLEVBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQzs7MkNBQXFCO0FBRXZCO0lBQWpCLElBQUEsYUFBTSxFQUFDLFFBQVEsQ0FBQzs7MENBQVc7QUFIWCxhQUFhO0lBRGpDLElBQUEsaUJBQU8sRUFBQywwQkFBMEIsRUFBRSxnQkFBZ0IsQ0FBQztHQUNqQyxhQUFhLENBc0JqQztrQkF0Qm9CLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tbWFuZCwgY29lcmNlLCBjb21tYW5kLCBvcHRpb24gfSBmcm9tICdAcmFkaWMvY29uc29sZSc7XG5pbXBvcnQgeyBDb25maWdSZXBvc2l0b3J5LCBpbmplY3QgfSBmcm9tICdAcmFkaWMvY29yZSc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAcmFkaWMvY29uc29sZS1vdXRwdXQnO1xuXG5kZWNsYXJlIG1vZHVsZSAnQHJhZGljL2NvbnNvbGUtb3V0cHV0L2xpYicge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3V0cHV0IHtcbiAgICAgICAgZm9vKClcbiAgICB9XG59XG5cbkBjb21tYW5kKCdvdXRwdXQgW21hY3JvXSBbYXJncy4uLl0nLCAnRGV2IHRlc3Qgc3R1ZmYnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0Q29tbWFuZCBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBAb3B0aW9uKCduJywgJ25hbWUnKSBuYW1lOiBzdHJpbmcgPSAnZmYnO1xuXG4gICAgQGluamVjdCgnb3V0cHV0Jykgb3V0Ok91dHB1dFxuXG4gICAgYXN5bmMgaGFuZGxlKG1hY3JvPzogc3RyaW5nLCAuLi5hcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coeyBuYW1lOiB0aGlzLm5hbWUsIG1hY3JvLGFyZ3MgfSk7XG4gICAgICAgIGxldCB7b3V0fSA9IHRoaXNcblxuICAgICAgICBvdXQubWFjcm8oJ2ZvbycsIGZ1bmN0aW9uKHRoaXM6T3V0cHV0LGE/LGI/KSB7XG4gICAgICAgICAgICB0aGlzLmxpbmUoJ3tncmVlbn1bW3RpY2tdXXsvZ3JlZW59IERvbmUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hY3JvIGZvbycsICd0aGlzJyx0aGlzLHthLGJ9KVxuICAgICAgICB9KVxuICAgICAgICBvdXQuZm9vKCk7XG4gICAgICAgIGlmKG1hY3JvKXtcbiAgICAgICAgICAgIG91dC5ydW5NYWNybyhtYWNybywgLi4uYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYyA9IG91dC5jb2xvcnMuY2hhaW4oKTtcbiAgICAgICAgY29uc29sZS5sb2coYy5ncmVlbi5iZ0JsdWUuYm9sZC5nZXQoJ3doYXRzdXAnKSk7XG4gICAgICAgIG91dC5saW5lKCd7Z3JlZW59W1t0aWNrXV17L2dyZWVufSBEb25lJylcbiAgICB9XG59XG4iXX0=