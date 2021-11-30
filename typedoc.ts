import { Application, TSConfigReader, TypeDocReader, DefaultTheme, PageEvent, DefaultThemeRenderContext } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import { resolve } from 'path';

export function createTypedocApp() {
    let app = new Application();
    load(app);
    app.options.addReader(new TypeDocReader());
    app.options.addReader(new TSConfigReader());
    return app;
}

class MyTheme extends DefaultTheme {
    override getRenderContext(_pageEvent: PageEvent<any>): DefaultThemeRenderContext {
        return super.getRenderContext(_pageEvent);
    }
}

export async function bootstrap(app: Application, packagePath: string) {

    app.bootstrap({
        entryPoints: [ resolve(packagePath, 'src/index.ts') ],
        tsconfig   : resolve(packagePath, 'tsconfig.json'),
        readme:'none'
    });
    const project = app.convert();

    if ( project ) {
        const outputDir = resolve(packagePath, 'docs/api');
        await app.generateDocs(project, outputDir);
        // await app.generateJson(project, outputDir + '/generated-typedoc.json')
    }
}

export async function main() {
    let app = createTypedocApp();
    await bootstrap(app, process.cwd());
}

main().catch(console.error);
