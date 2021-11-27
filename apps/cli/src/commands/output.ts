import { BaseCommand, coerce, command, option } from '@radic/console';
import { ConfigRepository, inject } from '@radic/core';
import { Output } from '@radic/console-output';

declare module '@radic/console-output/lib' {
    export interface Output {
        foo()
    }
}

@command('output [macro] [args...]', 'Dev test stuff')
export default class OutputCommand extends BaseCommand {
    @option('n', 'name') name: string = 'ff';

    @inject('output') out:Output

    async handle(macro?: string, ...args): Promise<any> {
        console.log({ name: this.name, macro,args });
        let {out} = this

        out.macro('foo', function(this:Output,a?,b?) {
            this.line('{green}[[tick]]{/green} Done')
            console.log('macro foo', 'this',this,{a,b})
        })
        out.foo();
        if(macro){
            out.runMacro(macro, ...args);
        }

        let c = out.colors.chain();
        console.log(c.green.bgBlue.bold.get('whatsup'));
        out.line('{green}[[tick]]{/green} Done')
    }
}
