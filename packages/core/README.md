Console
==========

Create class based commands with Yargs using decorators.

**index.ts**
```ts
import yargs from 'yargs';
import {enableYargsClassCommands, addCommandDirs} from '@radic/console'

addCommandDirs(
    ['path/*/to/*/somewhere', 'another/**/path'], // glob patterns to command directories
    ['.js','.ts','!.d.ts'] // allow .js and .ts. Ignore .d.ts files
);

enableYargsClassCommands(yargs);

yargs.help('h')
     .alias('h', 'help')
     .showHelpOnFail(true);

const args = yargs.parse();

if ( args[ 'help' ] ) {
    yargs.showHelp();
}
```


**commands/TestCommand**
```ts
import { arg, command, handler, option } from '../decorators';
import { Output } from '@radic/console-output';

@command('test', 'Testing this')
export class TestCommand {
    @option('w', { required: true })
    write: boolean;

    @option()
    text: string;


    @handler()
    async handle(@arg.required.description('The path to write to')() path: string
                 @arg({description:'another way'}) count?:number) {

        console.log(`Writing to path ${path}`);
        console.log(`Counting to ${count}`);
        console.log(`Showing your ${this.text}`);
        await wait(300, 20);
    }
}


async function wait(ms:number, cycles:number=1){
    for(let i = 0; i < cycles; i++) {
        const txt=await new Promise(res => {
            setTimeout(() => res(`Finished timeout (${i}/${cycles}) after ${ms}ms`), ms)
        })
        console.log(txt);
    }
}
```
