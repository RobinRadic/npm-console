import { convertableToString, Parser as BaseParser } from 'xml2js';
import deasync from 'deasync';

export class Parser extends BaseParser {
    parseStringSync(str: convertableToString) {
        const fn = deasync<convertableToString, never>(this.parseString).bind(this);
        return fn(str);
    }
}
