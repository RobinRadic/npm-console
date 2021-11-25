import { Output }     from './Output';
import * as colors     from './colors';
import * as ui        from './ui';
import { Diff }       from './utils/diff';
import { figures }    from './figures';

export default Output;
export *              from './interfaces';
export *              from './Logger';
export { Output }     from './Output';
export { OutputUtil } from './OutputUtil';

export * from 'trucolor'
export * from './ConsoleOutput';

export {
    colors,
    ui,
    Diff,
    figures,
};
