const {replacers} = require('@radic/build-tools/replacers');
const {Tasks} = require('@radic/build-tools/tasks');
const {cp} = require('@radic/build-tools/shell');
const {createPath} = require('@radic/build-tools/createPath');

const p = createPath(__dirname);
const tasks = new Tasks({
    'dts'        : ['dts:copy', 'dts:replace'],
    'dts:copy'   : async () => {
        cp('-rf', p('types', '*'), p('lib/'));
    },
    'dts:replace': async () => {
        replacers({
            cwd      : __dirname,
            files    : [{
                paths    : ['lib/index.d.ts', 'types/index.d.ts'],
                replacers: ['ConsoleServiceProvider']
            }],
            replacers: {
                ConsoleServiceProvider: ['/// <reference types="types/ConsoleServiceProvider" />', '/// <reference path="./ConsoleServiceProvider.d.ts" />']
            }
        });
    }
});


tasks.cli();
