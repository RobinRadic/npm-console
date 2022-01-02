import { group, GroupCommand } from '@radic/console';


@group('package', 'Manage packages', __dirname,['p'])
export default class extends GroupCommand {
}
