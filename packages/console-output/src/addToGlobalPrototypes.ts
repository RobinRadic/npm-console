import { Output } from './Output';
import { createHash } from 'crypto';
import { Color } from './colors';
import { CliString } from './colors/CliString';


export function addToGlobalPrototypes(out: Output) {

    String.prototype.getHashCode = function () {
        var hash = 0;
        if ( this.length == 0 ) return hash;
        for ( var i = 0; i < this.length; i ++ ) {
            hash = this.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    String.prototype.toHexColor  = function () {
        return '#' + createHash('md5').update(this.toString()).digest('hex').substr(0, 6);
    };
    String.prototype.toCliColor  = function () {
        const t = this.toColor().toTruColor();
        return t.in + this + t.out;
    };
    String.prototype.toColor     = function () {
        return Color.make(this.toHexColor());
    };

    String.prototype.colorize     = function () {
        return new CliString(this);
    };
    Object.defineProperty(String.prototype, 'colors', {
        get(): CliString {
            return new CliString(this);
        },
    })

}
