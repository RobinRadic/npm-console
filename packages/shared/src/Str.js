"use strict";
exports.__esModule = true;
exports.Str = void 0;
var Str = /** @class */ (function () {
    function Str() {
    }
    Str.random = function (length) {
        if (length === void 0) { length = 15; }
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    Str.ensureLeft = function (str, left) {
        if (false === str.startsWith(left)) {
            return left + str;
        }
        return str;
    };
    Str.ensureRight = function (str, right) {
        if (false === str.endsWith(right)) {
            return str + right;
        }
        return str;
    };
    Str.stripLeft = function (str, left) {
        if (str.startsWith(left)) {
            return str.substr(left.length);
        }
        return str;
    };
    Str.stripRight = function (str, right) {
        if (str.endsWith(right)) {
            return str.substr(0, str.length - right.length);
        }
        return str;
    };
    Str.ucfirst = function (string) {
        return string[0].toUpperCase() + string.slice(1);
    };
    Str.lcfirst = function (string) {
        return string[0].toLowerCase() + string.slice(1);
    };
    Str.parameters = function (str, params) {
        Object.entries(params).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return str = str.replace(new RegExp(':' + key, 'g'), value);
        });
        return str;
    };
    return Str;
}());
exports.Str = Str;
