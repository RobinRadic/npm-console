import { IDE } from './IDE';
import { XmlFile } from './XmlFile';
import jsonpath from 'jsonpath';
import { DirectoryMark } from './types';

export interface ImlDocumentQuery {
    (expression: string, limit?: number): any[];

    module(expression: string, limit?: number): any[];

    component(expression: string, limit?: number): any[];

    components(expression: string, limit?: number): any[];
}

export class ImlDocument {
    protected file: XmlFile;
    protected json: Iml;

    constructor(protected ide: IDE, protected filePath: string) {
        this.file = new XmlFile(filePath);
        this.json = this.file.getJson();
    }

    save() {
        this.file.setJson(this.json);
        return this;
    }

    get iml(): Iml {return this.json;}

    get module(): iml.Module {return this.json.module; }

    get components(): iml.module.Component[] {return this.module.component;}

    get component(): iml.module.Component {return this.module.component[ 0 ];}

    get query(): ImlDocumentQuery {
        let query: ImlDocumentQuery = function (expression: string, limit?: number) {
            return jsonpath.query(this.json, expression, limit);
        }.bind(this) as any;
        query.module                = (expression: string, limit?: number) => jsonpath.query(this.json.module, expression, limit);
        query.component             = (expression: string, limit?: number) => jsonpath.query(this.json.module.component[ 0 ], expression, limit);
        query.components            = (expression: string, limit?: number) => jsonpath.query(this.json.module.component, expression, limit);
        return query;
    }

    paths(expression: string, limit?: number) {
        return jsonpath.paths(this.json, expression, limit);
    }

    apply(expression: string, fn: (value: any) => any) {
        return jsonpath.apply(this.json, expression, fn);
    }

    pathToUrl(path: string) {
        path = path.replace(this.ide.rootPath + '/', '');
        return `file://$MODULE_DIR$/${path}`;
    }

    urlToPath(url) {
        return url.replace('file://$MODULE_DIR$/', '');
    }

    markDirectory(relativePath: string, type: DirectoryMark): this
    markDirectory(relativePath: string, type: 'source', prefix?: string): this
    markDirectory(relativePath: string, type: 'test-sources', prefix?: string): this
    markDirectory(...args): this {
        let relativePath: string = args[ 0 ];
        let type: DirectoryMark  = args[ 1 ];
        let prefix: string       = args[ 2 ];
        let hasPrefix: boolean   = !!prefix;
        switch ( type ) {
            case 'source':
                return this.addSourceFolder(relativePath, prefix);
            case 'test-sources':
                return this.addTestFolder(relativePath);
            case 'excluded':
                return this.addExcludeFolder(relativePath);
        }
        return this;
    }

    addTestFolder(path: string, prefix?: string) {
        let items                                             = this.query('$..sourceFolder.*') as iml.module.component.content.SourceFolder[];
        let folder: iml.module.component.content.SourceFolder = { $: { url: this.pathToUrl(path), isTestSource: 'true' as any } };
        if ( prefix ) {
            folder.$.packagePrefix = prefix;
        }
        this.apply('$..sourceFolder', (value: iml.module.component.content.SourceFolder[]) => {
            value.push(folder);
            return value;
        });
        return this;
    }

    addSourceFolder(path: string, prefix?: string) {
        let items                                             = this.query('$..sourceFolder.*') as iml.module.component.content.SourceFolder[];
        let folder: iml.module.component.content.SourceFolder = { $: { url: this.pathToUrl(path) } };
        if ( prefix ) {
            folder.$.packagePrefix = prefix;
        }
        this.apply('$..sourceFolder', (value: iml.module.component.content.SourceFolder[]) => {
            value.push(folder);
            return value;
        });
        return this;
    }

    addExcludeFolder(path: string) {
        let items                                              = this.query('$..excludeFolder.*') as iml.module.component.content.ExcludeFolder[];
        let folder: iml.module.component.content.ExcludeFolder = {
            $: { url: this.pathToUrl(path) },
        };
        this.apply('$..excludeFolder', (value: iml.module.component.content.ExcludeFolder[]) => {
            value.push(folder);
            return value;
        });
        return this;
    }

    getTestFolders(): Array<{ path: string, prefix?: string }> {
        return this.sourceFolders(true);
    }

    getSourceFolders(): Array<{ path: string, prefix?: string }> {
        return this.sourceFolders();
    }

    protected sourceFolders(tests: boolean = false): Array<{ path: string, prefix?: string }> {
        let items = this.query('$..sourceFolder.*') as iml.module.component.content.SourceFolder[];
        if ( tests === false ) {
            items = items.filter(item => item.$.isTestSource === undefined || JSON.parse(item.$.isTestSource as any) === false);
        } else {
            items = items.filter(item => item.$.isTestSource !== undefined || JSON.parse(item.$.isTestSource as any) === true);
        }
        return items.map(item => ({
            path  : this.urlToPath(item.$.url),
            prefix: item.$.packagePrefix,
        }));
    }

    getExcludedFolders(): string[] {
        let items = this.query('$..excludedFolder.*') as iml.module.component.content.ExcludeFolder[];
        return items.map(item => this.urlToPath(item.$.url));
    }


}

export interface Iml {
    module: iml.Module;
}

export namespace iml {
    export interface Module {
        $: module.Attrs;
        component: module.Component[];
    }

    export namespace module {
        export interface Attrs {
            type: string;
            version: number;
        }

        export interface Component {
            $: component.Attrs;
            'exclude-output': string[];
            content: component.Content[];
            orderEntry: component.OrderEntry[];
        }

        export namespace component {

            export interface Attrs {
                name: string;
                'inherit-compiler-output'?: boolean;
            }


            export interface OrderEntry {
                $: orderEntry.Attrs;
            }

            export namespace orderEntry {
                export interface Attrs {
                    type: string;
                    forTests?: boolean;
                }
            }

            export interface Content {
                $: content.Attrs;
                sourceFolder?: content.SourceFolder[];
                excludeFolder?: content.ExcludeFolder[];
            }

            export namespace content {

                export interface Attrs {
                    url: string;
                }


                export interface SourceFolder {
                    $: SourceFolderAttrs;
                }

                export interface SourceFolderAttrs {
                    url: string;
                    isTestSource?: boolean;
                    packagePrefix?: string;
                }

                export interface ExcludeFolder {
                    $: ExcludeFolderAttrs;
                }

                export interface ExcludeFolderAttrs {
                    url: string;
                }
            }
        }
    }

}
