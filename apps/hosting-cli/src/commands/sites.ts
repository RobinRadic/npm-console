import { GroupCommand,group } from '@radic/console';

@group('sites', 'Manage site', __dirname)
export default class SiteCommand extends GroupCommand {}
