import { command } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';

@command('edit [name]', 'Edit a site')
export default class EditCommand extends SitesCommand {

}
