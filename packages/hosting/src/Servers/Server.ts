import { injectable,Service } from '@radic/core';

@injectable()
export abstract class Server {
    abstract serviceName: string;
    abstract name: string;

    get service(): Service {return new Service(this.serviceName);}

}
