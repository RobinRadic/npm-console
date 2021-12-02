import { command, option } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';
import { ApacheSite, HTTPServer, NginxSite, Site } from '@radic/hosting';
import { NginxConfFile, NginxParseTreeNode } from '@radic/hosting/lib/Servers/Nginx/parser';
import { TreeItem } from '@radic/console-input';
import { app } from '@radic/core';
import { readFileSync, writeFileSync } from 'fs';


function transformNginxToInquirerTree(nginxNodes?: NginxParseTreeNode[], indexes: number[] = []): TreeItem[] {
    let items: TreeItem[] = [];
    if ( !nginxNodes ) {
        return items;
    }
    for ( let i in nginxNodes ) {
        let index = parseInt(i);
        let node  = nginxNodes[ index ];
        let name  = node.name;
        if ( node.value ) {
            name += ' ' + app.output.parse(`{teal}${node.value.toString()}{/teal}`);
        }
        items.push({
            name    : name,
            value   : { node, indexes: [ ...indexes, index ] },
            children: node.isBlock ? transformNginxToInquirerTree(node.children, [ ...indexes, index ]) : null,
        });
    }
    return items;
}

type TreeNodeUpdate = { node: NginxParseTreeNode, indexes: number[] }

function updateNginxTreeNode(root: NginxParseTreeNode, update: TreeNodeUpdate) {
    let node = root;
    for ( const index of update.indexes ) {
        node = node.children[ index ];
    }
    node.value = update.node.value;
}


@command('edit [name]', 'Edit a site')
export default class EditCommand extends SitesCommand {

    @option('s', 'Specify server that site is on', { nargs: 1, requiresArg: true }) server: string;
    @option('o', 'Edit the site by opening the configuration in a text editor') open: boolean;

    async handle(name?: string) {
        let site: Site;
        if ( name ) {
            if ( this.server ) {
                site = this.servers.get<HTTPServer>(this.server).sites.first(s => s.filename === name);
            } else {
                site = this.sites.get(name);
            }
        } else {
            site = await this.askSite(this.server ? this.server : undefined);
        }
        if ( !(site instanceof Site) ) {
            return this.log.error(`Could not find site "${name}"`);
        }
        if(this.open){
            return this.editConfigFile(site);
        }
        if ( site instanceof NginxSite ) {
            return await this.editNginxSite(site);
        }
        if ( site instanceof ApacheSite ) {
            return await this.editApacheSite(site);
        }
    }

    protected async editConfigFile(site:Site){
        let content = readFileSync(site.configFilePath, 'utf-8')
        let changed = (await this.ask.edit(content) as string);
        this.out.line('{bold}======================RESULT======================{/bold}')
        this.out.line(changed);
        this.out.line('{bold}=================================================={/bold}')
        if(await this.ask.confirm('Are you sure you want to save that?', true)){
            writeFileSync(site.configFilePath,changed,'utf-8')
            this.log.success('Saved to file')
        } else {
            this.log.warn('Canceled saving changes')
        }
    }

    protected async editApacheSite(site: ApacheSite) {
        this.log.warn(`Editing apache sites interactively is not yet available`);
        if(await this.ask.confirm('Do you want to open the config file in an external editor?', true)){
            await this.editConfigFile(site);
            await this.askRestartServer(site)
        }
    }

    protected async editNginxSite(site: NginxSite) {
        let config                    = await site.getConfig();
        let tree                      = transformNginxToInquirerTree(config.children);
        let answers: TreeNodeUpdate[] = await this.ask.tree('Select the directives you would like to modify', tree, {
            multiple: true,
        });
        if ( answers.length ) {
            for ( const answer of answers ) {
                answer.node.value = await this.ask.input(answer.node.name, answer.node.value);
                updateNginxTreeNode(config, answer);
            }
            if ( await this.ask.confirm('Modify changes in config file?') ) {
                site.saveConfig(config);
                this.log.success('Configuration saved')
                await this.askRestartServer(site)
            }
        }
    }
}
