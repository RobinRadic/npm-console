import { config } from 'winston';
export interface LogLevels extends config.AbstractConfigSetLevels {
    error: number;
    warn: number;
    success: number;
    info: number;
    verbose: number;
    vverbose: number;
    vvverbose: number;
    debug: number;
}
export declare type LogLevel = keyof LogLevels;
/**
 Font styles: bold, dim, italic, underline, inverse, hidden, strikethrough.

 Font foreground colors: black, red, green, yellow, blue, magenta, cyan, white, gray, grey.

 Background colors: blackBG, redBG, greenBG, yellowBG, blueBG magentaBG, cyanBG, whiteBG
 */
export interface LogLevelColors extends config.AbstractConfigSetColors {
    error: string | string[];
    warn: string | string[];
    success: string | string[];
    info: string | string[];
    verbose: string | string[];
    vverbose: string | string[];
    vvverbose: string | string[];
    debug: string | string[];
}
export interface LogSet extends config.AbstractConfigSet {
    levels: LogLevels;
    colors: LogLevelColors;
}
export declare const levels: LogLevels;
export declare const colors: LogLevelColors;
