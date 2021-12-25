import { SitesCommand } from '../../SitesCommand';
import { ApacheSite, NginxSite, Site } from '@radic/hosting';
export default class EditCommand extends SitesCommand {
    server: string;
    open: boolean;
    handle(name?: string): Promise<any>;
    protected editConfigFile(site: Site): Promise<void>;
    protected editApacheSite(site: ApacheSite): Promise<void>;
    protected editNginxSite(site: NginxSite): Promise<void>;
}
