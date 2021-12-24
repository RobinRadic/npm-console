import { DatabaseManager, NginxServer, NginxSite, servers } from '@radic/hosting';
import { command } from '@radic/console';
import { Command } from '../Command';
import { inject, system } from '@radic/core';


@command('test <foo> [bar] [force] [args...]', 'Just a test command')
export default class TestCommand extends Command {
    @servers servers: servers;
    @system system: system;
    @inject('db') db: DatabaseManager;

    async handle(
        foo: string,
        bar?: string,
        force: boolean = false,
        ...args: number[]
    ) {
        await this.ask.confirm('are you well ?');
        return;
    }

    // async han2dle(
    //     @arg('a required foo string',true) foo:string,
    //     @arg('a optional bar string') bar?:string,
    //     @arg('a optional force boolean with default ') force:boolean=false,
    //     @arg('a optional number vararg ') ...args:number[]
    // ) {
    //     await this.ask.confirm('are you well ?')
    //     return;
    // }

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
