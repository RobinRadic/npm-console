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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MimeTypes_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MimeTypes = void 0;
const NodeMimeTypeGuesser_1 = require("./NodeMimeTypeGuesser");
const mime_types_1 = require("mime-types");
const Foundation_1 = require("../../../Foundation");
let MimeTypes = MimeTypes_1 = class MimeTypes {
    constructor(map = {}) {
        this.extensions = {};
        this.mimeTypes = {};
        this.guessers = [];
        Object.entries(map).forEach(([mimeType, extensions]) => {
            this.extensions[mimeType] = extensions;
            for (const extension of extensions) {
                this.mimeTypes[extension].push(mimeType);
            }
        });
        this.registerGuesser(new NodeMimeTypeGuesser_1.NodeMimeTypeGuesser());
    }
    lookup(path) { return (0, mime_types_1.lookup)(path); }
    contentType(path) { return (0, mime_types_1.contentType)(path); }
    static setDefault(def) {
        this.default = def;
    }
    static getDefault() {
        return this.default ? this.default : new this();
    }
    /**
     * Registers a MIME type guesser.
     *
     * The last registered guesser has precedence over the other ones.
     */
    registerGuesser(guesser) {
        this.guessers.unshift(guesser);
    }
    /**
     * {@inheritdoc}
     */
    getExtensions(mimeType) {
        let extensions;
        if (this.extensions) {
            extensions = this.extensions[mimeType] || this.extensions[mimeType.toLocaleLowerCase()] || null;
        }
        return extensions || this.constructor.MAP[mimeType] || this.constructor.MAP[mimeType.toLocaleLowerCase()] || mimeType.toLocaleLowerCase() || [];
    }
    /**
     * {@inheritdoc}
     */
    getMimeTypes(ext) {
        const self = this.constructor;
        let mimeTypes;
        if (this.mimeTypes) {
            mimeTypes = this.mimeTypes[ext] || this.mimeTypes[ext.toLocaleLowerCase()] || null;
        }
        return mimeTypes || self.REVERSE_MAP[ext] || self.REVERSE_MAP[ext.toLocaleLowerCase()] || [];
    }
    /**
     * {@inheritdoc}
     */
    isGuesserSupported() {
        for (const guesser of this.guessers) {
            if (guesser.isGuesserSupported()) {
                return true;
            }
        }
        return false;
    }
    /**
     * {@inheritdoc}
     *
     * The file is passed to each registered MIME type guesser in reverse order
     * of their registration (last registered is queried first). Once a guesser
     * returns a value that is not null, this method terminates and returns the
     * value.
     */
    guessMimeType(path) {
        for (const guesser of this.guessers) {
            if (!guesser.isGuesserSupported()) {
                continue;
            }
            let mimeType = guesser.guessMimeType(path);
            if (null !== mimeType) {
                return mimeType;
            }
        }
        if (!this.isGuesserSupported()) {
            throw new Error('Unable to guess the MIME type as no guessers are available (have you enabled the php_fileinfo extension?).');
        }
        return null;
    }
};
/**
 * A map of MIME types and their default extensions.
 *
 * Updated from upstream on 2021-09-03
 *
 * @see Resources/bin/update_mime_types.php
 */
MimeTypes.MAP = mime_types_1.types;
MimeTypes.REVERSE_MAP = mime_types_1.extensions;
MimeTypes = MimeTypes_1 = __decorate([
    (0, Foundation_1.injectable)(),
    __param(0, (0, Foundation_1.unmanaged)()),
    __metadata("design:paramtypes", [Object])
], MimeTypes);
exports.MimeTypes = MimeTypes;
//# sourceMappingURL=MimeTypes.js.map