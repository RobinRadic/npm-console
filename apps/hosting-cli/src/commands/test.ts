import { NginxServer, NginxSite, servers } from '@radic/hosting';
import { command } from '@radic/console';
import { Command } from '../Command';
import { Directory, File, system, User } from '@radic/core';


@command('test', 'Just a test command')
export default class TestCommand extends Command {
    @servers servers: servers;
    @system system: system;

    async handle() {
let users=this.system.users.collection;
        let sites = this.app.servers.get<NginxServer>('nginx').sites.mapWithKeys(site => ([site.filename, site.getConfig()])).toArray();
        sites = await Promise.all(sites)
        let disks = await this.system.getDisks();
        let partitions = disks.getAllPartitions();
        let partition = partitions.getByMountPath('/mnt/fat');
        let filesystem = partition.filesystem;
        let downloads:Directory = filesystem.items.downloads;
        await downloads.open()
        let found = downloads.items.sorted5.children.searchName(/Missy|Luv/g);
        let file = found.first() as File;
        let mimeType = file.mimeType;
        let contentType = file.contentType;
        // await file.open()
        return;
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
