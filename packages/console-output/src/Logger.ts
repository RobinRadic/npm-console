import { Output } from './Output';
import { trucolor } from 'trucolor';
import { objectify } from './utils/objectify';
import { inspect } from 'util';


type LogCallback = (error?: any, level?: string, message?: string, meta?: any) => void;

interface LogEntry {
    level: LogLevel;
    message: string;
    callback?: LogCallback,
    meta?: any[]
    hasCallback?: boolean

    [ optionName: string ]: any;
}

const isLogEntry    = (val: any): val is LogEntry => val && typeof val === 'object' && typeof val.level === 'string' && typeof val.message === 'string';
const isLogCallback = (val: any): val is LogCallback => val && typeof val === 'function';

interface LogMethod {
    (level: string, message: string, callback: LogCallback): Logger;

    (level: string, message: string, meta: any, callback: LogCallback): Logger;

    (level: string, message: string, ...meta: any[]): Logger;

    (entry: LogEntry): Logger;
}

interface LeveledLogMethod {
    (message: string, callback: LogCallback): Logger;

    (message: string, meta: any, callback: LogCallback): Logger;

    (message: string, ...meta: any[]): Logger;

    (infoObject: object): Logger;
}

export interface LogLevels {
    error: LeveledLogMethod;
    warn: LeveledLogMethod;
    info: LeveledLogMethod;
    debug: LeveledLogMethod;
}

export type LogLevelFormatter = (entry: LogEntry, logger: Logger) => string
export type LogLevel = keyof LogLevels
export type LogLevelFormatters =
    {
        [P in LogLevel]?: LogLevelFormatter
    }
    & {
        default?: LogLevelFormatter
    }
export const logLevels: LogLevel[] = [ 'error', 'warn', 'info', 'debug' ];

// higher then logLevel should be shown
export const logLevelWeight:Record<LogLevel,number> = {
    error:1000,
    warn:100,
    info:10,
    debug:1,
}

export const shouldShowLevel = (minimumLevel:LogLevel, level:LogLevel) => logLevelWeight[minimumLevel] >= logLevelWeight[level]

shouldShowLevel('info','debug')

export const defaultFormatter: LogLevelFormatter = (entry, logger) => {
    let out                            = logger.out;
    let { cross, warning, info, star } = out.figures;
    if ( !logger.options.useFigures ) {
        cross = 'error', warning = 'warn', info = 'info', star = 'star';
    }
    let figureLevelMap: Record<LogLevel, [ string, string ]> = {
        error: [ cross, 'red' ],
        warn : [ warning, 'yellow' ],
        info : [ info, 'blue' ],
        debug: [ star, 'purple' ],
    };
    let figureLevels: Record<LogLevel, string>               = Object.entries(figureLevelMap).map(([ level, [ figure, color ] ]) => {
        let { in: before, out: after } = trucolor(color, { format: 'cli' });
        figure                         = [ before, figure, after ].join('');
        return [ level, figure ];
    }).reduce(objectify, {});
    let data                                         :any      = {};
    let output = [];
    if ( figureLevels[ entry.level ] !== undefined ) {
        data.level =figureLevels[ entry.level ] + ' ';
    }
    data.message = out.parse(entry.message);
    data.metas = []
    let metas = (entry.meta || []).map(e => inspect(e, { colors: true, showHidden: true }));
    if ( metas.length > 0 ) {
        output.push(out.parse('\n{bold.underline}metas{/reset}\n'));
        output.push(...metas);
    }

    return output.join('');
};

export class Formatter {
    protected formatters: LogLevelFormatters = {};

    constructor(public logger: Logger) {}

    register(formatter: LogLevelFormatter, levels: LogLevel[] = []) {
        if ( levels.length === 0 ) {
            this.formatters.default = formatter;
            return this;
        }
        for ( const level of levels ) {
            this.formatters[ level ] = formatter;
        }
        return this;
    }

    format(entry: LogEntry): string {
        let formatter: LogLevelFormatter = this.formatters[ entry.level ] || this.formatters.default;
        return formatter(entry, this.logger);
    }
}

export interface ILogger extends Logger, LeveledLogMethod {
}

export interface LoggerOptions {
    out: Output;
    namespace?: string;
    defaultFormatter?: LogLevelFormatter;
    useFigures?: boolean;
    level?: LogLevel

}

export function createLogger(options: LoggerOptions): ILogger {
    return new Logger(options) as ILogger;
}

export class Logger implements LogLevels {
    public enabled: boolean       = true;
    protected entries: LogEntry[] = [];
    public formatter: Formatter;
    public out: Output;
    protected level: LogLevel        = 'warn';

    constructor(public options: LoggerOptions) {
        options.defaultFormatter = options.defaultFormatter || defaultFormatter;
        this.level = options.level || 'warn';
        this.out                 = options.out;
        this.formatter           = new Formatter(this);
        this.formatter.register(options.defaultFormatter);
    }

    public setLevel(level:LogLevel){
        this.level = level;
        return this;
    }

    public getLevel(){return this.level}

    public log(level: string, message: string, callback: LogCallback): this
    public log(level: string, message: string, meta: any, callback: LogCallback): this
    public log(level: string, message: string, ...meta: any[]): this
    public log(entry: LogEntry): this
    public log(...args): this {
        let entry: LogEntry;
        let level: LogLevel        = args[ 0 ];
        let message: string      = args[ 1 ];
        let callback: LogCallback; // = args[args.length - 1]
        let lastArg              = args[ args.length - 1 ];
        let hasCallback: boolean = false;// = typeof callback === 'function'
        let meta: any[]          = [];

        if ( isLogEntry(args[ 0 ]) ) {
            entry = args[ 0 ];
        } else {
            if ( args.length > 2 ) {
                hasCallback = true;
                if ( isLogCallback(args[ 2 ]) ) {
                    callback = args[ 2 ];
                } else if ( isLogCallback(args[ 3 ]) ) {
                    meta     = [ args[ 2 ] ];
                    callback = args[ 3 ];
                } else {
                    meta        = args.slice(2);
                    hasCallback = false;
                }
            }
            entry = { level, message, callback, meta, hasCallback };
        }
        if ( entry.level === undefined ) throw new Error('Could not log, missing level');
        if ( entry.message === undefined ) throw new Error('Could not log, missing message');
        this.entries.push(entry);
        if(shouldShowLevel(this.level, entry.level)) {
            this.out.line(this.formatter.format(entry));
        }
        return this;
    }


    public debug(...args) {return this.log.call(this, ...[ 'debug', ...args ]);}

    public error(...args) {return this.log.call(this, ...[ 'error', ...args ]);}

    public info(...args) {return this.log.call(this, ...[ 'info', ...args ]);}

    public warn(...args) {return this.log.call(this, ...[ 'warn', ...args ]);}
}
