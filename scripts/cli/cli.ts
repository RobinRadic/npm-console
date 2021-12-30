import yargs from 'yargs';
import { PackageBuilder } from './PackageBuilder';
import { inspect } from 'util';
import { Input } from '@radic/console-input';
import { execSync } from 'child_process';

process.on('uncaughtException', (error, origin) => console.error('uncaughtException', 'error:', error, 'origin:', origin));
process.on('unhandledRejection', (reason, promise) => {
    console.error('unhandledRejection', 'reason:', reason, promise);
    console.log(inspect(promise, true, 10, true));
});
const getPackageName = async (args: any): Promise<string> => args.name ? args.name.toString().trim() : await Input.list('Choose package', PackageBuilder.builderNames);

yargs
.showHelpOnFail(true)
.scriptName('cli')
.demandCommand()
.help('h').alias('h', 'help');


yargs.command({ command: 'list', describe: 'List packages', handler: args => console.log(PackageBuilder.builderNames.join('\n')) });

yargs.command({
    command: 'rebuild [name]', describe: 'Build package(s)',
    handler: async args => {
        if ( args.all ) {
            return PackageBuilder.rebuildAll();
        }
        const name = await getPackageName(args);
        PackageBuilder.rebuild(name);
    },
    builder: yargs => yargs
    .example('$0 build console', 'Start build for packages/console')
    .example('$0 build --all', 'Start build for all package')
    .options({
        all: { alias: 'a', type: 'boolean', description: 'Build all' },
    }),
});

yargs.command({
    command : 'build [name]', describe: 'Build package(s)',
    handler : async args => {
        if ( args.all ) {
            return PackageBuilder.buildAll();
        }
        const name = await getPackageName(args);
        PackageBuilder.build(name);
    },
    builder : yargs => yargs
    .example('$0 build console', 'Start build for packages/console')
    .example('$0 build --all', 'Start build for all package')
    .options({
        all: { alias: 'a', type: 'boolean', description: 'Build all' },
    }),
});

yargs.command({
    command : 'watch [name]',    describe: 'Watch package(s) and build them',
    handler : async args => {
        if ( args.all ) {
            return PackageBuilder.watchAll();
        }
        const name = await getPackageName(args);
        PackageBuilder.watch(name);
    },
    builder : yargs => yargs
    .example('$0 watch console', 'Start build on change in packages/console/src')
    .example('$0 watch --all', 'Start build on change in any package')
    .options({
        all: { alias: 'a', type: 'boolean', description: 'Watch all' },
    }),
});

yargs.command({
    command : 'clean [name]',    describe: 'Clean package(s)',
    handler : async args => {
        if ( args.all ) {
            return PackageBuilder.cleanAll();
        }
        const name = await getPackageName(args);
        PackageBuilder.clean(name);
    },
    builder : yargs => yargs.options({
        all: { alias: 'a', type: 'boolean', description: 'Clean all' },
    }),
});

yargs.command({
    command : 'commit [message]',
    describe: 'Commit to git',
    handler : async args => {
        args.message = args.message || 'commit';
        execSync(`git add --all`);
        execSync(`git commit -m "${args.message}"`);
    },
    builder : yargs => yargs.example('$0 commit', 'add and commit').example('$0 commit "message"', 'add and commit with message'),
});


yargs.parse();
