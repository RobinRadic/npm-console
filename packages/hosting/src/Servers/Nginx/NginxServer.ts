import { NginxSite } from './NginxSite';
import { HTTPServer } from '../HTTPServer';


export class NginxServer extends HTTPServer<NginxSite> {
    public name: string        = 'nginx';
    public serviceName: string = 'nginx';
    public readonly SiteClass  = NginxSite;
}
