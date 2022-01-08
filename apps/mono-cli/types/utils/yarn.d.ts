export declare let yarn: (args: string[], options?: YarnOpts, sudo?: boolean) => string;
export declare type YarnArgs = 'link' | 'unlink' | 'add' | 'global' | string;
export interface YarnOpts {
    global?: boolean;
    dev?: boolean;
    optional?: boolean;
    peer?: boolean;
}
export interface Yarn {
    (cmds: string[], args?: string[]): any;
    link(args?: string[]): Promise<any>;
    unlink(args?: string[]): Promise<any>;
    add(args?: string[]): Promise<any>;
    global(args?: string[]): Promise<any>;
}
