import { NginxSite } from './NginxSite';
import { HTTPServer } from '../HTTPServer';
export declare class NginxServer extends HTTPServer<NginxSite> {
    name: string;
    serviceName: string;
    readonly SiteClass: typeof NginxSite;
}
