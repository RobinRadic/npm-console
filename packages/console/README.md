Console
==========

A slightly modified yargs clone that allows class based command structure and dependency injection, with the help of some decorators.
This is an slightly opinionated way of dealing with bigger cli applications in a structural way. Efforts have been made to make everything
fully extendable and replaceable, while keeping it possible to use yargs the same way when need to do so.

## Documentation
A more thorough documentation can be found [here](docs) on github or the compiled [documentation website](https://radic.dev/npm-console)

This package also uses `@radic/core` to provide the service container which provides dependency injection and service providers to allow a specified way of
adding, extending and modifying existing extensions to the platform. For anyone that has used Laravel's `Application` with its `ServiceProviders`, you'll feel right at home.


## Examples
Lets start with the gist of it so you know if this is something you'll want to have or rather pass.

> A full working example can be found in this repo. Check out the `apps/cli` directory that uses pretty much all available options

- You can also use this library in Javascript if you want. Examples will be in Typescript.
- This example uses typescript compiled from `src` to `lib` directory. So many of the code below will be examples from `src`

### Basic way of starting your cli application
**bin/foo**
```javascript
#!/usr/bin/env node
require('../lib').cli(); // lib is the compiled javascript
```

**src/index.ts**
```typescript
export async function cli(){
    /**
     * Boots up the application. This might be done in various ways. Check the `apps/cli/src/index.ts` file for an example
     */
}
```

### A Command
**commands/move.ts**
Lets start with a simple command to show of the basics.
- The `BaseCommand` is not required. But it contains goodies we'll later check into
- The parameters are directly translated from the first parameter `@command` string that is equal to yargs it's way of command definition.
- Options are declared with `@option` decorator.

```typescript
import {command, option, BaseCommand } from '@radic/console';

@command('move <path> [files...]', 'Move one or multiple files to the given path')
export default class extends BaseCommand {
    @option('o', 'Override exising files') write: boolean;
    @option('l', 'Limit the amount of files to be moved') limit: number=100;

    async handle(path: string, ...files:string[]) {
        for(const index in files){
            if(this.limit && this.limit > index){
                break;
            }
            let file = files[index];
            if(this.write){
                // code
            }
        }
    }
}
```

### Subcommands
**commands/config.ts**
To create a structure with sub-commands.
- It defaults to defining the directory with sub commands to `__dirname + '/${name}_cmds'`.
- This can easily be altered. This example show how

```typescript
import {group, GroupCommand } from '@radic/console';

@group('config', 'Configuration management', __dirname)
export default class extends GroupCommand {
    builder = cli => {
        cli.commandDir(__dirname+'/config');
    }
}
```

**commands/config_cmds/list.ts**
- `Config` is an imaginary class that has been bound into the Service Container. (more on that later)
- `Config` is using dot notated getters/setters, for the example sake
- `dot-object` has a method `dot` to convert object to dotted-key/value pair. Used here for listing nested configuration structures

```typescript
import {command, option, BaseCommand } from '@radic/console';
import {inject} from '@radic/core';
import {Config} from '../../'
import {dot} from 'dot-object'

@command('list [path]', 'List all configuration')
export default class extends BaseCommand {
    @inject('config') config:Config

    async handle(path?: string) {
        let config;
        if(path){
            config = this.config.get(path, {});
        } else {
            config = this.config.all();
        }
        Object.entries(dot(config)).forEach(([key,value]) => {
            console.log(`[${key}]: `, value);
        })
    }
}
```

### Further reading and examples are found in the documentation
