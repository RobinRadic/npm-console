import { BaseCommand, command, option } from '@radic/console';
import { inject } from '@radic/core';
import { Output } from '@radic/console-output';

declare module '@radic/console-output/lib' {
    export interface Output {
        foo(a,b);
    }
}

@command('output [macro] [args...]', 'Dev test stuff')
export default class OutputCommand extends BaseCommand {
    @option('n', 'name') name: string = 'ff';

    @inject('output') out: Output;

    async handle(macro?: string, ...args): Promise<any> {
        console.log({ name: this.name, macro, args });
        let { out } = this;

        out.macro('foo', function (this: Output, a?, b?) {
            console.log('macro foo', 'this = ',this.constructor.name, { a, b });
        });
        out.foo('bar','kie');
        if ( macro ) {
            out.runMacro(macro, ...args);
        }

        let c = out.colors.chain();
        console.log(c.green.bgBlue.bold.underline.get('whatsup'));
        out.line('{green}[[tick]]{/green} Done');
    }
}
