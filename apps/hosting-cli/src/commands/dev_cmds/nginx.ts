import { group } from '@decorators';
import { GroupCommand } from '@modules';


@group('nginx', 'nginx', __dirname)
export default class NginxCommand extends GroupCommand {
    public async handle(): Promise<void> {
        return;
    }
}
