import { Cli } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';
export default class DisableCommand extends SitesCommand {
    server: string;
    reload: boolean;
    forceReload: boolean;
    refresh: boolean;
    restart: boolean;
    builder: (cli: Cli) => import("@radic/console").YargsInstance;
    handle(name?: string): Promise<import("winston").Logger>;
}
