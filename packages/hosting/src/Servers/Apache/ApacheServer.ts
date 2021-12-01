import { ApacheSite } from './ApacheSite';
import { HTTPServer } from '../HTTPServer';


export class ApacheServer extends HTTPServer<ApacheSite> {
    public name: string        = 'apache';
    public serviceName: string = 'apache2';
    public readonly SiteClass  = ApacheSite;
}
