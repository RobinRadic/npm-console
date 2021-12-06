import { order } from 'multi-package-json-manager/src/sorter';
import { TSconfigJson } from 'multi-package-json-manager/src';

const obj: TSconfigJson = {
    'compileOnSave'  : false,
    'compilerOptions': {
        'target'                        : 'ES6',
        'module'                        : 'CommonJS',
        'moduleResolution'              : 'Node',
        'lib'                           : [ 'ES5', 'ES6', 'ES2018', 'ES2018.Promise', 'DOM' ],
        'suppressImplicitAnyIndexErrors': true,
        'jsx'                           : 'preserve',
        'jsxFactory'                    : 'h',
        'strict'                        : false,
        'noImplicitAny'                 : false,
        'strictNullChecks'              : false,
        'strictFunctionTypes'           : false,
        'strictBindCallApply'           : false,
        'strictPropertyInitialization'  : false,
        'noImplicitThis'                : false,
        'alwaysStrict'                  : false,
        'noUnusedLocals'                : false,
        'noUnusedParameters'            : false,
        'noImplicitReturns'             : false,
        'noFallthroughCasesInSwitch'    : false,
        'allowSyntheticDefaultImports'  : true,
        'esModuleInterop'               : true,
        'inlineSourceMap'               : true,
        'inlineSources'                 : true,
        'experimentalDecorators'        : true,
        'emitDecoratorMetadata'         : true,
    },
    'include'        : [
        'typedoc.ts',
        'scripts',
    ],
    'exclude'        : [
        '*',
        'node_modules',
        'examples',
        'src',
        'packages',
        'apps',
        'dist',
        'lib',
    ],
};
let result              = order(obj, {
    $self: [
        'include',
        'exclude',
        'compileOnSave',
    ],
    compilerOptions: [
        'strict',
        'emitDecoratorMetadata',
        'noUnusedLocals'
    ]
});

console.dir(JSON.stringify(result, null, 4));
