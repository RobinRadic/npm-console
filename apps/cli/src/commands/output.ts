import { BaseCommand, coerce, command, option } from '@radic/console';
import { ConfigRepository, inject } from '@radic/core';
import { ConsoleOutput } from '@radic/console-output';

@command('output [macro] [args...]', 'Dev test stuff')
export default class OutputCommand extends BaseCommand {
    @option('n', 'name') name: string = 'ff';

    async handle(macro?: string, ...args): Promise<any> {
        console.log({ name: this.name, macro,args });
        const out = new ConsoleOutput()
        console.log(out)
        out.macro('foo', function(a?,b?) {
            console.log('macro foo', 'this',this,{a,b})
        })
        out.foo();
        if(macro){
            out.runMacro(macro, ...args);
        }
    }
}
