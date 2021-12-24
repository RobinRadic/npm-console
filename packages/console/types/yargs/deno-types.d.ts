declare type ArgsOutput = (string | number)[];
export interface Arguments {
    /** Non-option arguments */
    _: ArgsOutput;
    /** Arguments after the end-of-options flag `--` */
    '--'?: ArgsOutput;
    /** All remaining options */
    [argName: string]: any;
}
export {};
