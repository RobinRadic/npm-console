"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
class Str {
    static random(length = 15) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    static ensureLeft(str, left) {
        if (false === str.startsWith(left)) {
            return left + str;
        }
        return str;
    }
    static ensureRight(str, right) {
        if (false === str.endsWith(right)) {
            return str + right;
        }
        return str;
    }
    static stripLeft(str, left) {
        if (str.startsWith(left)) {
            return str.substr(left.length);
        }
        return str;
    }
    static stripRight(str, right) {
        if (str.endsWith(right)) {
            return str.substr(0, str.length - right.length);
        }
        return str;
    }
    static ucfirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    static lcfirst(string) {
        return string[0].toLowerCase() + string.slice(1);
    }
    static parameters(str, params) {
        Object.entries(params).forEach(([key, value]) => str = str.replace(new RegExp(':' + key, 'g'), value));
        return str;
    }
}
exports.Str = Str;
//# sourceMappingURL=Str.js.map