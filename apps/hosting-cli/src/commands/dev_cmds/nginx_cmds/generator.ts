import { BaseCommand } from '@modules';
import { command, option } from '@decorators';
import { isAbsolute, parse } from 'path';

@command('generator', 'Generate NGINX types')
export default class GeneratorCommand extends BaseCommand {
    @option('p', 'Path to generate type definition file. Providing a directory or file path may be relative or absolute. By default the filename will be nginx.types.ts') path: string = 'nginx.types.ts';

    async handle() {
        let path = this.getPath();
        this.out.writeln('asdf');
        return path;
    }

    getPath() {
        let path = parse(this.path);

        if ( isAbsolute(this.path) ) {

        }

        return '';
    }
}
