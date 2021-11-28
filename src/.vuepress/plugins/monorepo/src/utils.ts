import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import {resolve}from 'path'

export function createTypedocApp() {
    let app = new Application()
    load(app);
    app.options.addReader(new TypeDocReader())
    app.options.addReader(new TSConfigReader())
    let rootPath = resolve(__dirname, '../../../../../')
    app.bootstrap({
        entryPointStrategy: 'packages',
        entryPoints:[rootPath]
    })
    return app;
}
