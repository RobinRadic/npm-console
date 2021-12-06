"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHPApi = void 0;
var PHPApi;
(function (PHPApi) {
    PHPApi["CLI"] = "Command Line Interface";
    PHPApi["FPM"] = "FPM/FastCGI";
})(PHPApi = exports.PHPApi || (exports.PHPApi = {}));
let apiKeys = Object.keys(PHPApi);
let apiValues = Object.values(PHPApi);
(function (PHPApi) {
    PHPApi.keys = apiKeys;
    PHPApi.values = apiValues;
    PHPApi.toApi = (string) => {
        if (string === PHPApi.CLI) {
            return PHPApi.CLI;
        }
        else if (string === PHPApi.FPM) {
            return PHPApi.FPM;
        }
        throw Error('Unknown PHP API');
    };
    PHPApi.fromKey = (key) => PHPApi[key.toUpperCase()];
    PHPApi.is = (php, api) => php.api === api;
    PHPApi.isCLI = (api) => api === PHPApi.CLI;
    PHPApi.isFPM = (api) => api === PHPApi.FPM;
    PHPApi.isValue = (api) => { return api === PHPApi.CLI || api === PHPApi.FPM; };
    PHPApi.isKey = (api) => PHPApi.keys.includes(api);
    PHPApi.toKey = (api) => {
        if (PHPApi.isCLI(api)) {
            return 'CLI';
        }
        if (PHPApi.isFPM(api)) {
            return 'FPM';
        }
        throw Error('Unknown PHP API');
    };
})(PHPApi = exports.PHPApi || (exports.PHPApi = {}));
//# sourceMappingURL=PHPApi.js.map