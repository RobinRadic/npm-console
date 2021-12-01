import { Site } from '../Sites';
import { NginxServer } from './NginxServer';
import { NginxParser } from 'nginx-conf';
import { NginxParseTreeNode } from 'nginx-conf/dist/src/parser';


function searchTree<T>(tree: T, childrenPropName: string, propName: string, value: string): T {
    var i, f = null; // iterator, found node
    if ( Array.isArray(tree) ) { // if entry object is array objects, check each object
        for ( i = 0; i < tree.length; i ++ ) {
            f = searchTree(tree[ i ], childrenPropName, propName, value);
            if ( f ) { // if found matching object, return it.
                return f;
            }
        }
    } else if ( typeof tree === 'object' ) { // standard tree node (one root)
        if ( tree[ propName ] !== undefined && tree[ propName ] === value ) {
            return tree; // found matching node
        }
    }
    if ( tree[ childrenPropName ] !== undefined && tree[ childrenPropName ].length > 0 ) { // if this is not maching node, search nodes, children (if prop exist and it is not empty)
        return searchTree(tree[ childrenPropName ], childrenPropName, propName, value);
    } else {
        return null; // node does not match and it neither have children
    }
}


export class NginxSite extends Site<NginxParseTreeNode, NginxServer> {

    constructor(server: NginxServer, configFilePath: string) {
        super(server, configFilePath);
    }


    async getHostNames() {
        let found = searchTree(await this.getConfig(), 'children', 'name', 'server_name');
        if ( found && found.value ) {
            if ( found.value.includes(' ') ) {
                return found.value.split(' ');
            }
            return [ found.value ];
        }
        return [];
    }

    protected cachedConfig: NginxParseTreeNode;

    async getConfig(force: boolean = false): Promise<NginxParseTreeNode> {
        return new Promise((resolve, reject) => {
            if ( this.cachedConfig && !force ) {
                resolve(this.cachedConfig);
            }
            const parser = new NginxParser();
            parser.parseFile(this.configFilePath, 'utf8', (error, tree) => {
                if ( error ) return reject(error);
                // tree              = this.createConfigProxy(tree);
                this.cachedConfig = tree;
                resolve(tree);
            });
        });
    }
}
