import { ServiceProvider } from '@radic/shared';
import winston, { LogCallback, LoggerOptions } from 'winston';
import { colors, levels, LogLevel, LogLevelColors, LogLevels } from './levels';
import * as Transport from 'winston-transport';
import { Bindings, inject } from '@radic/core';
import { Figure } from '../interfaces';
import { Format } from 'logform';
import { figures } from '../figures';


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

interface WinstonFigureFormatOptions {
    default?: { color?: string, figure: Figure }
    figures?: Record<LogLevel, { color?: string, figure: Figure }|null>,
}

export type FormatWrap<T = any> = (opts?: T) => Format;
const figure: FormatWrap<WinstonFigureFormatOptions> = winston.format((info, opts: Partial<WinstonFigureFormatOptions> = {}) => {
    info.figure = '';
    if(opts.figures[ info.level ] === null){
        return info;
    }

    const getFigure = (opt: { color?: string, figure: Figure }) => {
        if ( opt.color ) {
            return `{${opt.color}}${figures[opt.figure]}{/${opt.color}}`;
        } else {
            return figures[opt.figure];
        }
    };

    if ( info.level in opts.figures ) {
        info.figure = getFigure(opts.figures[ info.level ]);
    } else if ( opts.default ) {
        info.figure = getFigure(opts.default);
    }
    return info;
});


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
                format           : this.getFormat(),
            },
            schema  : {
                type      : 'object',
                properties: {
                    level : { type: 'string', enum: Object.keys(levels) },
                    colors: { type: 'object' },
                    levels: { type: 'object' },
                },
            },
        });
    }

    getFormat(): Format {

        const getFigure = (level: LogLevel, figure: Figure|null = level as Figure) => {
            if(figure === null){
                return null;
            }
            let color: string = colors[ level ] as any;
            color             = Array.isArray(color) ? color.join(' ') : color;
            return { figure, color };
        };

        return winston.format.combine(
            winston.format.timestamp({ format: 'HH:mm:ss' }),
            winston.format.ms(),
            figure({
                default: { figure: 'bullet', color: 'dim' },
                figures: {
                    info     : getFigure('info','info'),
                    warn     : getFigure('warn','warning'),
                    success  : getFigure('success', 'tick'),
                    error    : getFigure('error','cross'),
                    verbose  : getFigure('verbose', null),
                    vverbose : getFigure('vverbose', null),
                    vvverbose: getFigure('vvverbose', null),
                },
            }),
            winston.format.printf((debug) => {
                let {
                        figure, timestamp, level, message, ms, label, ...args
                    } = debug;
                let levelName=this.app.output.ui.text.strip(level)
                let color = this.app.output.colors.getTrucolor(colors[levelName] as any).wrapper;
                level = color(level);
                label = label ? `{bold}${label}{/bold}` : '';
                let ts = timestamp.slice(0, 19).replace('T', ' ');
                let output = ` ${figure} [${level}][${ts}]: ${label} - ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''} ${ms}`
                if(levelName === 'verbose'){
                    output = `{dim}${message}{/dim}`
                }
                return this.app.output.parse(output);
            }),
        );
    }

    register() {
        const config         = this.app.config.log;
        const logger: Logger = winston.createLogger({
            level            : config.level as string,
            levels           : config.levels,
            transports       : config.transports.length > 0 ? config.transports : [
                new winston.transports.Console({
                    format: this.getFormat(),
                }),
            ],
            exceptionHandlers: config.handleExceptions ? [
                new winston.transports.Console({
                    format          : config.format,
                    handleExceptions: true,
                }),
            ] : [],
            handleExceptions : config.handleExceptions,
            format           : this.getFormat(),
        }) as any;
        winston.addColors(config.colors);
        this.app.instance('log', logger).addBindingGetter('log');
    }
}

export const log = inject('log');
export type log = Bindings['log']
