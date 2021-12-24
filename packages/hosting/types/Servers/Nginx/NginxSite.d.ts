import { Site } from '../Sites';
import { NginxServer } from './NginxServer';
import { NginxParseTreeNode } from 'nginx-conf/dist/src/parser';
export declare class NginxSite extends Site<NginxParseTreeNode, NginxServer> {
    constructor(server: NginxServer, configFilePath: string);
    getHostNames(): Promise<string[]>;
    protected cachedConfig: NginxParseTreeNode;
    getConfig(force?: boolean): Promise<NginxParseTreeNode>;
    saveConfig(config: NginxParseTreeNode): void;
}
