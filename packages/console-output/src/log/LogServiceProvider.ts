import { ServiceProvider } from '@radic/shared';
import winston, { LogCallback, LoggerOptions } from 'winston';
import { colors, levels, LogLevelColors, LogLevels } from './levels';
import * as Transport from 'winston-transport';
import { Bindings, inject } from '@radic/core';


type WinstonLogLevels =
    'error'
    | 'warn'
    | 'help'
    | 'data'
    | 'info'
    | 'debug'
    | 'prompt'
    | 'http'
    | 'verbose'
    | 'input'
    | 'silly'
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'warning'
    | 'notice'

export interface Logger extends Omit<winston.Logger, WinstonLogLevels> {
    error: winston.LeveledLogMethod;
    warn: winston.LeveledLogMethod;
    success: winston.LeveledLogMethod;
    info: winston.LeveledLogMethod;
    verbose: winston.LeveledLogMethod;
    vverbose: winston.LeveledLogMethod;
    vvverbose: winston.LeveledLogMethod;
    debug: winston.LeveledLogMethod;
    log: LogMethod;
}


interface LogMethod extends winston.LogMethod {
    (level: keyof LogLevels, message: string, callback: LogCallback): Logger;

    (level: keyof LogLevels, message: string, meta: any, callback: LogCallback): Logger;

    (level: keyof LogLevels, message: string, ...meta: any[]): Logger;

    (level: keyof LogLevels, message: any): Logger;
}

export interface LogConfiguration extends Omit<LoggerOptions, 'level' | 'transports'> {
    level?: keyof LogLevels;
    levels?: LogLevels;
    colors?: LogLevelColors;
    transports?: Transport[];
}

declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        log: Logger;
    }

    export interface Application {
        log: Logger;
    }
}
declare module '@radic/core/types/types/config' {
    export interface Configuration {
        log?: LogConfiguration;
    }
}
//
// app.events.on('Application:initialize:defaultConfig', defaultConfig => {
//     defaultConfig.log = {
//         level: 'info',
//         levels,
//         colors,
//     };
// });

export class LogServiceProvider extends ServiceProvider {

    load() {
        this.config({
            key     : 'log',
            defaults: {
                level            : 'info',
                levels,
                colors,
                transports       : [],
                exceptionHandlers: [],
                handleExceptions : true,
                format           : winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple(),
                ),
            },
            schema  : {
                level : { type: 'string', enum: Object.keys(levels) },
                colors: { type: 'object' },
                levels: { type: 'object' },
            },
        });
    }

    register() {
        const config         = this.app.config.log;
        const logger: Logger = winston.createLogger({
            level            : config.level as string,
            levels           : config.levels,
            transports       : config.transports.length > 0 ? config.transports : [
                new winston.transports.Console({
                    format: config.format,
                }),
            ],
            exceptionHandlers: config.handleExceptions ? [
                new winston.transports.Console({
                    format          : config.format,
                    handleExceptions: true,
                }),
            ] : [],
            handleExceptions : config.handleExceptions,
            format           : config.format,
        }) as any;
        winston.addColors(config.colors);
        this.app.instance('log', logger).addBindingGetter('log');
    }
}

export const log = inject('log');
export type log = Bindings['log']
