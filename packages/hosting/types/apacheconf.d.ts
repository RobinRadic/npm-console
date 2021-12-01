
declare module 'apacheconf' {
    namespace apacheconf {
        export interface Parser {
            write(line)
        }

        export interface Options {
            /** @default  '/usr/local/apache' */
            serverRoot?: string
        }

        export type Callback = (error: Error | null, config: any, parser: Parser) => void

    }

    function apacheconf(filename: string, options: apacheconf.Options, cb: apacheconf.Callback): void;
    function apacheconf(filename: string, cb: apacheconf.Callback): void;

    export = apacheconf;
}
