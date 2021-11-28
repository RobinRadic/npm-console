import { BaseCommand, command, option } from '@radic/console';
import { inject } from '@radic/core';
import { Output } from '@radic/console-output';
import { wait } from '@radic/shared';


declare module '@radic/console-output/lib' {
    export interface Output {
        foo(a, b);
    }
}

@command('output [arg] [args...]', 'Dev test stuff')
export default class OutputCommand extends BaseCommand {
    @option('n', 'name') name: string = 'ff';
    @option('m', 'Run a macro', { choices: [ 'spinner', 'notify', 'sparkly', 'progress', 'highlight' ] }) macro: string;

    @inject('output') out: Output;

    async handle(arg?: string, ...args): Promise<any> {
        const { out } = this;
        out.chain.blue.bold.line('Hello');
        if(this.macro){
            out.chain.green.line(`Running macro "${this.macro}`);
            await this[this.macro]()
        }
    }

    async icon() {
        let data = this.out.icons.findIcon('address-book', 'far');
        let icon = await this.out.icons.generate(data, { format: 'png', fill: 'blue' });
        this.out.line(`{green}[[tick]]{/green} Created ${icon.path}`);
    }

    async spinner() {
        let spin  = this.out.ui.spinner('haai', { interval: 0.1 });
        spin.text = 'Waiting';
        spin.start();
        await wait(1999);
        spin.stop();
    }

    async progress() {
        return new Promise(resolve => {
            const bar = this.out.ui.progress.bar({
                total: 100,
                curr: 0,
                callback: () => resolve(null),
            });
            bar.render();
            let intervalId = setInterval(() => {
                if(bar.complete){
                    clearInterval(intervalId);
                }
                bar.tick(1)
            }, 300);
        });
    }

    async notify() {
        this.out.ui.notify({ message: 'Job Done!', title: 'Job: Creating Heaven', icon: await this.out.icons.notify('green', 'check') });
    }

    async sparkly() {
        this.out.ui.sparkly([ 1, 2, 5, 6 ], { minimum: 0, maximum: 10, style: 'fire' });
    }

    async highlight(){
        this.out.ui.highlight('<?php\n\nclass Hasher {\n\tpublic function hash(str){\n\t\treturn str . str;\n\t}\n}', {language:'php'})
    }

    async handle2(macro?: string, ...args): Promise<any> {
        console.log({ name: this.name, macro, args });
        let { out } = this;

        out.macro('foo', function (this: Output, a?, b?) {
            console.log('macro foo', 'this = ', this.constructor.name, { a, b });
        });
        out.foo('bar', 'kie');
        if ( macro ) {
            out.runMacro(macro, ...args);
        }

        let c = out.colors.chain();
        console.log(c.green.bgBlue.bold.underline.get('whatsup'));

    }
}
