import { config } from '@radic/core';
import { ConnectionManager } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { DatabasesConfiguration } from './types';
import { ConnectionHelper } from './ConnectionHelper';
export declare class DatabaseManager {
    protected _config: config;
    protected connections: Record<string, Connection>;
    protected manager: ConnectionManager;
    protected helper: ConnectionHelper;
    constructor();
    get config(): DatabasesConfiguration;
    protected getConnectionConfigurations(): (import("typeorm/driver/mysql/MysqlConnectionOptions").MysqlConnectionOptions[] | import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions[] | import("typeorm/driver/sqlite/SqliteConnectionOptions").SqliteConnectionOptions[] | import("typeorm/driver/sqlserver/SqlServerConnectionOptions").SqlServerConnectionOptions[] | import("typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions").BetterSqlite3ConnectionOptions[] | import("typeorm/driver/mongodb/MongoConnectionOptions").MongoConnectionOptions[])[];
    getDatabaseHelper(): ConnectionHelper;
    connect(name: string): Promise<Connection>;
    getConnectionNames(): any[];
    getConnectionConfiguration(name: string): import("typeorm/driver/mysql/MysqlConnectionOptions").MysqlConnectionOptions | import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions | import("typeorm/driver/sqlite/SqliteConnectionOptions").SqliteConnectionOptions | import("typeorm/driver/sqlserver/SqlServerConnectionOptions").SqlServerConnectionOptions | import("typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions").BetterSqlite3ConnectionOptions | import("typeorm/driver/mongodb/MongoConnectionOptions").MongoConnectionOptions;
    updateConnections(): void;
    protected createConnection(options: ConnectionOptions): Connection;
    exist(name: string): boolean;
}
