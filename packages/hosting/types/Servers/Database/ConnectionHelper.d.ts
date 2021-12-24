import { Connection } from 'typeorm/connection/Connection';
import { ConnectionManager } from 'typeorm';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
export declare class ConnectionHelper {
    manager: ConnectionManager;
    protected con: Connection;
    protected name: string;
    use(name: string, options?: ConnectionOptions): this;
    isConnected(): boolean;
    connect(): Promise<Connection>;
    listDatabases(): Promise<string[]>;
    dropDatabase(name: string): Promise<boolean>;
    createDatabase(name: string): Promise<boolean>;
    hasDatabase(name: string): Promise<boolean>;
}
