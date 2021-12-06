import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export interface DatabasesConfiguration {
    connectOnBoot?: string[];
    main?: string;
    // connections?: Record<ConnectionOptions['type'], ConnectionOptions[]>;
    connections?: DatabasesConnectionConfiguration;
}

export interface DatabaseServerTypes {
    mysql?: MysqlConnectionOptions;
    postgres?: PostgresConnectionOptions;
    sqlite?: SqliteConnectionOptions;
    sql?: SqlServerConnectionOptions;
    bettersqlite3?: BetterSqlite3ConnectionOptions;
    mongo?: MongoConnectionOptions;
}

export type DatabaseServerType = keyof DatabaseServerTypes
export type DatabasesConnectionConfiguration = {
    [P in keyof DatabaseServerTypes]: Array<DatabaseServerTypes[P]>
}
