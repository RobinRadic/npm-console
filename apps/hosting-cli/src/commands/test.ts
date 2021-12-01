import { NginxServer, NginxSite, servers } from '@radic/hosting';
import { command } from '@radic/console';
import { TreeItem } from '@radic/console-input';
import { NginxConfFile, NginxParseTreeNode } from '@radic/hosting/lib/Servers/Nginx/parser';
import { Command } from '../Command';
import { app } from '@radic/core';


@command('test', 'Just a test command')
export default class TestCommand extends Command {
    @servers servers: servers;


    async handle() {
        let server = this.servers.get<NginxServer>('nginx');
        let site   = await server.sites.first();

    }

    async handeele() {
        let server = this.servers.get<NginxServer>('nginx');

        let paths = server.resolvePaths();

        const availableSitesPaths = server.getAvailableSitePaths();
        const enabledSitesPaths   = server.getEnabledSitePaths();
        const sites               = availableSitesPaths.map(path => new NginxSite(server, path));
        const site                = sites[ 0 ];
        const siteEnabled         = site.isEnabled();
        const siteConfig          = await site.getConfig();
        const siteHostNames       = await site.getHostNames();
        const siteHostFileEntries = await site.getHostFileEntries();

        return;
    }

    async handggle() {
        const hostfile = this.app.hostfile;
        hostfile.load();
        let lines = hostfile.all();
        let hosts = hostfile.hosts();

        let hosts2 = hostfile.getAllByAddress('10.0.0.*');
        let hosts3 = hostfile.getAllByName('*.local');

        let saved = hostfile.save();

        return;
    }
}
