import { servers } from '@radic/hosting';
import { SitesCommand } from '../../SitesCommand';
export default class ServersCommand extends SitesCommand {
    servers: servers;
    list: boolean;
    add: boolean;
    detect: boolean;
    remove: boolean;
    handle(...args: any[]): Promise<any>;
    handleList(): Promise<void>;
    handleDetect(): Promise<void>;
    handleAdd(): Promise<void>;
    handleRemove(): Promise<void>;
}
