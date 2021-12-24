import { createTsconfigJsonManager } from 'multi-package-json-manager';
import { resolve } from 'path';

const build = createTsconfigJsonManager(resolve(__dirname, '..'));

build.addJsonFiles('packages/*/tsconfig.build.json')
     .unset('compileOnSave')
     .merge({
         compilerOptions: {
             'target'                        : 'ES6',
             'module'                        : 'CommonJS',
             'moduleResolution'              : 'Node',
             'lib'                           : [ 'ES5', 'ES6', 'ES2017', 'ES2018', 'ES2018.Promise', 'ES2015.Promise' ],
             'composite'                     : false,
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
             'inlineSourceMap'               : false,
             'inlineSources'                 : false,
             'sourceMap'                     : true,
             'experimentalDecorators'        : true,
             'outDir'                        : 'lib',
             'declarationDir'                : 'types',
             'declaration'                   : true,
             'resolveJsonModule'             : true,
             'suppressImplicitAnyIndexErrors': true,
             'allowJs'                       : false,
             'checkJs'                       : false,
             'importHelpers'                 : true,
             'skipLibCheck'                  : true,
             'emitDecoratorMetadata'         : true,
             'baseUrl'                       : '.',
             'typeRoots'                     : [
                 '../../node_modules/@types',
                 './typings',
             ],
             'types'                         : [],
         },
     })
     .set('include', [ 'src' ])
     .set('exclude', [
         'node_modules',
         'examples',
         'lib',
         'tests',
         'types',
         'types/*.d.ts',
     ])
     .enableTestRun(process.argv.includes('--test'))
     .enableDryRun(process.argv.includes('--dry'))
     .run();


const config = createTsconfigJsonManager(resolve(__dirname, '..'));

config.addJsonFiles('packages/*/tsconfig.json')
      .unset('compileOnSave')
      .setKeyOrder([
          'extends',
          'compileOnSave',
          'compilerOptions'
      ])
      .set('extends', 'tsconfig.build.json')
      .set('compilerOptions', {
          composite       : true,
          baseUrl         : '.',
          target          : 'ES6',
          module          : 'CommonJS',
          moduleResolution: 'Node',
          lib             : [ 'ES5', 'ES6', 'ES2017', 'ES2018', 'ES2018.Promise', 'ES2015.Promise' ],
          esModuleInterop: true,
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
      })
      .set('include', [ 'src' ])
      .set('exclude', [
          'node_modules',
          'examples',
          'lib',
          'tests',
          'types',
          'types/*.d.ts',
      ])
      .set('references', [
          { 'path': '../console' },
          { 'path': '../console-colors' },
          { 'path': '../console-input' },
          { 'path': '../console-output' },
          { 'path': '../core' },
          { 'path': '../hosting' },
          { 'path': '../shared' },
      ])
      .enableTestRun(process.argv.includes('--test'))
      .enableDryRun(process.argv.includes('--dry'))
      .run();


//function (this: Change<{ path: string }[]>, details: JsonFileDetails) {
//           details.data;
//           details.dirName;
//           this.value = this.value.filter(val => !val.path.endsWith(details.dirName));
//           return true;
//       }
