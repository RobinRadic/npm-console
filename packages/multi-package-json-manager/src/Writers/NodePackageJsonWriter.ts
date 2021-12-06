import { format } from 'prettier-package-json';
import { JsonFileDetails } from '../interfaces';
import { AbstractJsonWriter } from './AbstractJsonWriter';
import { PackageJson } from '../types';


export class NodePackageJsonWriter<T extends PackageJson = PackageJson> extends AbstractJsonWriter<T> {

    detailsToPackageJson(details: JsonFileDetails<T>): string {
        let json = format(details.data, {
            useTabs        : false,
            tabWidth       : this.manager.indent,
            enforceMultiple: false,
            expandUsers    : true,
            keyOrder       : this.manager.keyOrder as any,
        });
        json     = this.compileString(json, details);
        return json;
    }
}
