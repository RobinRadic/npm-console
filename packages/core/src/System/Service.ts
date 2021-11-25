import { services, Systeminformation } from 'systeminformation';
import { exec } from 'child_process';
import { app } from '../Foundation';

export enum ServiceStatus {
    ERROR    = '',
    ACTIVE   = 'Active: active (running)',
    INACTIVE = 'Active: inactive (dead) ',
}

export namespace ServiceStatus {
    export const isActive   = (s: ServiceStatus) => s === ServiceStatus.ACTIVE;
    export const isError    = (s: ServiceStatus) => s === ServiceStatus.ERROR;
    export const isInactive = (s: ServiceStatus) => s === ServiceStatus.INACTIVE;
}

export class Service implements Systeminformation.ServicesData {
    public cpu: number;
    public mem: number;
    public pids: number[];
    public running: boolean;
    public startmode: string;

    constructor(public name: string) {}

    async refresh() {
        let service = await services(this.name);
        Object.assign(this, service.shift());
        return this;
    }

    async start() {
        app.events.emit(`service:${this.name}:starting`, this);
        await this.exec('start');
        app.events.emit(`service:${this.name}:started`, this);
    }

    async stop() {
        app.events.emit(`service:${this.name}:stoping`, this);
        await this.exec('stop');
        app.events.emit(`service:${this.name}:stopped`, this);
    }

    async restart() {
        app.events.emit(`service:${this.name}:restart`, this);
        let result = await this.exec('restart');
        app.events.emit(`service:${this.name}:restarted`, this);
        return result;
    }

    async reload() {
        return await this.exec('reload');
    }

    async forceReload() {
        return await this.exec('force-reload');
    }

    async status(): Promise<ServiceStatus> {
        let status = await this.exec('status');
        if ( status.includes(ServiceStatus.ACTIVE) ) {
            return ServiceStatus.ACTIVE;
        }
        if ( status.includes(ServiceStatus.INACTIVE) ) {
            return ServiceStatus.INACTIVE;
        }
        throw new Error('Unknown service status');
    }

    async isActive() {
        return await this.status() === ServiceStatus.ACTIVE;
    }

    async isInactive() {
        return await this.status() === ServiceStatus.ACTIVE;
    }

    async exec(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            exec(`sudo service ${this.name} ${command}`, {}, (error, stdout, stderr) => {
                if ( stderr ) throw new Error(stderr);
                resolve(stdout);
            });
        });
    }
}
