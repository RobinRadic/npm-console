import yargs from 'yargs';
import { PackageBuilder } from './PackageBuilder';

process.on('uncaughtException', (error, origin) => console.error('uncaughtException', 'error:', error, 'origin:', origin));
process.on('unhandledRejection', (reason, promise) => console.error('unhandledRejection', 'reason:', reason));



const parsed = yargs
.showHelpOnFail(true)
.scriptName('cli')
.demandCommand()
.help('h').alias('h', 'help')
.command('build [name]', 'Build package(s)', {
    handler: args => {
        if ( args.all ) {
            return PackageBuilder.buildAll();
        } else if ( args.name !== undefined && PackageBuilder.builderNames.includes(args.name.toString().trim()) ) {
            return PackageBuilder.build(args.name.toString().trim());
        } else {
            console.error('You did not supply the name or option --all');

        }
    },
    builder: yargs => {
        return yargs
        .example('builder build console', 'Start build for packages/console')
        .example('builder build --all', 'Start build for all package')
        .options({
            all: { alias: 'a', type: 'boolean', description: 'Build all' },
        });
    },
})
.command('watch [name]', 'Watch package(s) and build them', {
    handler: args => {
        if ( args.all ) {
            return PackageBuilder.watchAll();
        } else if ( args.name !== undefined && PackageBuilder.builderNames.includes(args.name.toString().trim()) ) {
            return PackageBuilder.watch(args.name.toString().trim());
        } else {
            console.error('You did not supply the name or option --all');
        }
    },
    builder: yargs => {
        return yargs
        .example('builder watch console', 'Start build on change in packages/console/src')
        .example('builder watch --all', 'Start build on change in any package')
        .options({
            all: { alias: 'a', type: 'boolean', description: 'Watch all' },
        });
    },
})
.command('clean [name]', 'Clean package(s)', {
    handler: args => {
        if ( args.all ) {
            return PackageBuilder.cleanAll();
        } else if ( args.name !== undefined && PackageBuilder.builderNames.includes(args.name.toString().trim()) ) {
            return PackageBuilder.clean(args.name.toString().trim());
        } else {
            console.error('You did not supply the name or option --all');
        }
    },
    builder: yargs => {
        return yargs
        .example('builder clean console', 'clean packages/console')
        .example('builder clean --all', 'clean all packages')
        .options({
            all: { alias: 'a', type: 'boolean', description: 'Clean all' },
        });
    },
})
.parse();
