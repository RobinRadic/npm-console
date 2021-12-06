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
exports.FilesystemServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const Filesystem_1 = require("./Filesystem");
const Mime_1 = require("./Mime");
const utils_1 = require("./utils");
class FilesystemServiceProvider extends shared_1.ServiceProvider {
    register() {
        this.app.singleton('mimes', Mime_1.MimeTypes);
        this.app.instance('fs', Filesystem_1.Filesystem).addBindingGetter('fs');
        this.app.bind('disks.provider').toProvider(ctx => {
            if (this.app.isBound('disks.provider.promise')) {
                return this.app.get('disks.provider.promise');
            }
            let promise = loader(ctx);
            this.app.instance('disks.provider.promise', promise);
            return promise;
        }).onActivation((ctx, injectable) => {
            ctx.container.unbind('disks.provider.promise');
            return injectable;
        });
        this.app.bind('disks').toProvider(ctx => {
            return () => __awaiter(this, void 0, void 0, function* () { return ctx.container.get('disks.provider')(); });
        });
        this.app.get('disks')();
        this.app.addBindingGetter('disks');
    }
}
exports.FilesystemServiceProvider = FilesystemServiceProvider;
const loader = (ctx) => {
    return function (refresh = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refresh && ctx.container.isBound('disks.disks')) {
                return ctx.container.get('disks.disks');
            }
            let disks = yield (0, utils_1.resolveDisks)();
            if (ctx.container.isBound('disks.disks')) {
                ctx.container.unbind('disks.disks');
            }
            ctx.container.bind('disks.disks').toConstantValue(disks);
            return disks;
        });
    };
};
//# sourceMappingURL=FilesystemServiceProvider.js.map