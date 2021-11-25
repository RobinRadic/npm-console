import { YargsInstance } from '../yargs';


export class CliInstance extends YargsInstance {

    commandos(path: string) {
        return this.commandDir(path, {
            extensions: [ 'ts', 'js', 'tsx' ],
            visit     : (commandObject, pathToFile, filename) => {
                return new commandObject.default();
            },
        });
    }
}
