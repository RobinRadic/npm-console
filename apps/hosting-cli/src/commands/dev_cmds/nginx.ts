import { group, GroupCommand } from '@radic/console';


@group('nginx', 'nginx', __dirname)
export default class NginxCommand extends GroupCommand {
    public async handle(): Promise<void> {
        return;
    }
}
