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
                replacers: ['CoreServiceProvider','SystemServiceProvider','CacheServiceProvider','FilesystemServiceProvider']
            }],
            replacers: {
                CoreServiceProvider: ['/// <reference types="types/CoreServiceProvider" />', '/// <reference path="./CoreServiceProvider.d.ts" />'],
                SystemServiceProvider: ['/// <reference types="types/Providers/SystemServiceProvider" />', '/// <reference path="./Providers/SystemServiceProvider.d.ts" />'],
                CacheServiceProvider: ['/// <reference types="types/Providers/CacheServiceProvider" />', '/// <reference path="./Providers/CacheServiceProvider.d.ts" />'],
                FilesystemServiceProvider: ['/// <reference types="types/Providers/FilesystemServiceProvider" />', '/// <reference path="./Providers/FilesystemServiceProvider.d.ts" />'],
            }
        });
    }
});

tasks.cli();
