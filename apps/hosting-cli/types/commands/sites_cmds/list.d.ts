import { Cli } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';
import { Site } from '@radic/hosting';
export default class ListCommand extends SitesCommand {
    asc: boolean;
    enabled: boolean;
    disabled: boolean;
    server: string;
    builder: (cli: Cli) => void;
    handle(): Promise<void>;
    protected showSite(site: Site): boolean;
}
