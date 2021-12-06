// noinspection ES6UnusedImports

import { resolve } from 'path';
import { existsSync, readdirSync, readFileSync } from 'fs';

const getName = (name: string) => {
    name = name.replace('.json', '');
    name = name.replace('.schema', '');
    return `${name}.schema.json`;
};

export class SchemaRepository {
    public static location = resolve(__dirname, '..', 'schemas');

    protected static path(name: string) {
        name = getName(name);
        return resolve(this.location, name);
    }

    static has(name: string) {return existsSync(this.path(name)); }

    static get(name: string) {return readFileSync(this.path(name), 'utf8'); }

    static getJSON(name: string) {return JSON.parse(this.get(name)); }

    static names():string[] {
        let files = readdirSync(this.location,{ encoding:'utf-8'})
        return files;
    }

}
