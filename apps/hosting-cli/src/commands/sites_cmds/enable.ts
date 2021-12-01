import { Cli, command, option } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';
import { Site } from '@radic/hosting';

@command('enable [name]', 'Enable a site')
export default class EnableCommand extends SitesCommand {

    @option('s', 'Specify site server', { nargs: 1, requiresArg: true }) server: string;
    @option(null, 'Reload the site server service') reload: boolean            = true;
    @option(null, 'Force reload the site server service') forceReload: boolean = false;
    @option(null, 'Refresh the site server service') refresh: boolean          = false;
    @option(null, 'Restart the site server service') restart: boolean          = false;

    builder = (cli: Cli) => cli.choices('s', this.app.servers.names());

    async handle(name?: string) {
        let site: Site;
        if ( !name ) {
            site = await this.askSite(this.server, site => !site.isEnabled());
        } else {
            site = this.getSite(name, this.server);
        }
        if ( !site ) {
            return this.log.error(`Could not find site '${name}'` + (this.server ? `for server ${this.server}` : ''));
        }
        site.setEnabled(true);
        this.log.success(`Site [${site.filename}] has been enabled`);

        let result;
        let action = 'reload';
        if ( this.forceReload ) {
            action = 'force-reload';
            result = await site.server.service.forceReload();
        } else if ( this.reload ) {
            action = 'reload';
            result = await site.server.service.reload();
        } else if ( this.refresh ) {
            action = 'refresh';
            result = await site.server.service.refresh();
        } else if ( this.restart ) {
            action = 'restart';
            result = await site.server.service.restart();
        }
        this.log.info(`Server ${site.server.name} has done a ${action}`);
        this.log.verbose(result);
    }
}
