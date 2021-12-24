const con = require('concurrently');
import { resolve } from 'path';

const root     = (...parts) => resolve(__dirname, ...parts);
const packages = (...parts) => root('packages', ...parts);

export async function watch() {
    let result = await con([
        { command: 'yarn console watch', prefixColor: 'bgCyan', name: 'console' },
        // { command: 'yarn console-colors watch', prefixColor: 'bgYellow', name: 'console-colors' },
        // { command: 'yarn console-input watch', prefixColor: 'bgWhite', name: 'console-input' },
        // { command: 'yarn console-output watch', prefixColor: 'bgGreen', name: 'console-output' },
        { command: 'yarn core watch', prefixColor: 'blue', name: 'core' },
        { command: 'yarn hosting watch', prefixColor: 'cyan', name: 'hosting' },
        // { command: 'yarn multi-package-json-manager watch', prefixColor: 'white', name: 'multi-package-json-manager' },
        { command: 'yarn shared watch', prefixColor: 'yellow', name: 'shared' },
    ], {
        prefix          : 'name',
        killOthers      : [ 'success' ],
        restartTries    : 10,
        restartDelay    : 1000 * 60,
        successCondition: 'last',
        timestampFormat : 'HH:mm:ss',
        cwd             : root(),
    });

    console.dir(result);
}


watch();







