import { Cli, command, nargs, option } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';
import { firstBy } from '@radic/shared';
import { HTTPServer, Site } from '@radic/hosting';

@command('list [command] [other]', 'List sites')
export default class ListCommand extends SitesCommand {

    @option('a', 'Disabled sites sorted on top of list') asc: boolean = false;
    @option('e', 'Only show enabled sites') enabled: boolean          = false;
    @option('d', 'Only show disabled sites') disabled: boolean        = false;
    @option('s', 'Only show sites from specified server', { nargs: 1, requiresArg: true }) server: string;

    builder = (cli: Cli) => {
        cli.choices('s', this.app.servers.names());
    };

    async handle() {

        const { servers, out, ask, sites } = this;
        const direction                    = this.asc === true ? 'asc' : 'desc';
        let sorter                         = () => firstBy((site: Site) => site.isEnabled(), direction);

        for ( const server of servers.values<HTTPServer>() ) {
            out.line(`{green.bold}${server.name} sites:{/green./bold}`);
            let sites = server.sites.values<Site>().sort(sorter());
            for ( const site of sites ) {
                if ( this.showSite(site) ) {
                    let figure    = site.isEnabled() ? `{green}${out.figures.arrowUp}{/green}` : `{yellow}${out.figures.arrowDown}{/yellow}`;
                    let hostNames = await site.getHostNames();
                    let name      = hostNames.join(' / ');
                    if ( hostNames.length > 0 ) {
                        name = ': ' + name;
                    }
                    out.line(` ${figure} {bold}${site.filename}{/bold} ${name}`);
                }
            }
        }
    }

    protected showSite(site: Site) {
        if ( !this.enabled && !this.disabled ) return true;
        return (this.enabled && site.isEnabled()) || (this.disabled && !site.isEnabled());
    }
}
