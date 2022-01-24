import { Command, program } from 'commander';
import { exec } from './shell';

export type Task=TaskNames|TaskCallback|TaskExec
export type TaskExec=string
export type TaskNames=string[]
export type TaskCallback<T extends Tasks=Tasks>= ((tasks?:T) => Promise<any>);

const isTask = (val:any):val is Task => isTaskCallback(val) || isTaskNames(val)||isTaskExec(val)
const isTaskExec = (val:any):val is TaskExec => typeof val === 'string'
const isTaskNames = (val:any):val is TaskNames => Array.isArray(val)
const isTaskCallback = (val:any):val is TaskCallback => typeof val === 'function'


export class Tasks {


    constructor(protected tasks: Record<string, Task> = {}) {}

    add(name: string, cb:Task) {
        this.tasks[ name ] = cb;
        return this;
    }

    has(name) {return name in this.tasks;}

    async run(...names) {
        for ( const name of names ) {
            const task=this.tasks[ name ];
            if(isTaskCallback(task)) {
                await task(this);
            } else if(isTaskNames(task)){
                await this.run(...task)
            } else if(isTaskExec(task)){
                exec(task);
            }
            // delete this.tasks[ name ];
        }
        return this;
    }

    names() {return Object.keys(this.tasks);}


    async cli() {
        const exit          = process.exit.bind(process);
        const options       = {
            silent: program.createOption('-s, --silent', 'Silent mode - no output').default(false),
            json  : program.createOption('-j, --json', 'Output in json').default(false),
        };

        program
        .command('run <names...>')
        .description('Run tasks')
        .addOption(options.silent)
        .addHelpText('after', `\nAvailable tasks(use * to run all):\n- ${this.names().join('- ')}`)
        .action(async (names: string[], options: { silent: boolean }, cmd: Command) => {
            let useLog = !options.silent;
            if ( names.length === 1 && names[ 0 ] === '*' ) {
                names = this.names();
            }
            for ( const name of names ) {
                if ( !this.has(name) ) {
                    useLog && console.log(`Task '${name}' does not exist`);
                    continue;
                }
                useLog && console.log(`- Starting task '${name}' `);
                await this.run(name);
            }
            useLog && console.log(`All tasks done`);
            return exit();
        });

        program
        .command('list')
        .description('List tasks')
        .addOption(options.json)
        .action(async (options: { json: boolean }, cmd: Command) => {
            if ( options.json ) {
                console.log(JSON.stringify(this.names()));
                return exit();
            }
            this.names().forEach(name => console.log(`- ${name}`));
        });


        program.addHelpCommand(true);
        let parsed = await program.parseAsync();

        return;
    }
}
