import { ApacheSite } from './ApacheSite';
import { HTTPServer } from '../HTTPServer';
export declare class ApacheServer extends HTTPServer<ApacheSite> {
    name: string;
    serviceName: string;
    readonly SiteClass: typeof ApacheSite;
}
