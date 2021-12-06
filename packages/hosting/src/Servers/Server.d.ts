import { Service } from '@radic/core';
export declare abstract class Server {
    abstract serviceName: string;
    abstract name: string;
    get service(): Service;
}
