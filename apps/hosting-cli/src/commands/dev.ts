import { group, GroupCommand } from '@radic/console';


@group('dev', 'Dev commands', __dirname)
export default class DevCommand extends GroupCommand {}
