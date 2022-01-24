import { readFileSync, writeFileSync } from 'fs';


export interface ReplacersOptions {
    files: Array<{ paths: string[], replacers: string[] }>;
    replacers: Record<string, [ string, string ]>;
    cwd?: string;
    silent?: boolean;
}

export function replacers(options: ReplacersOptions) {
    const { files, replacers, silent, cwd } = {
        silent   : false,
        cwd      : process.cwd(),
        replacers: {},
        files    : [],
        ...options,
    };
    for ( const file of files ) {
        for ( const path of file.paths ) {
            const filePath      = cwd + '/' + path;
            let content         = readFileSync(filePath, 'utf8');
            for ( const replacerName of file.replacers ) {
                if(replacerName in replacers) {
                    content = content.replace(replacers[ replacerName ][ 0 ], replacers[ replacerName ][ 1 ]);
                }
            }
            writeFileSync(filePath, content, 'utf8');
            if ( !silent ) {
                console.log(`[dtsfix]: File "${path}" replaced using replacers: "${file.replacers.join('", "')}" `);
            }
        }
    }
}
