import { NginxServer } from '@radic/hosting';
import { BaseCommand, command,  } from '@radic/console';
import { servers,NginxSite } from '@radic/hosting';
import { dot } from 'dot-object';
import { isArray, objectify } from '@radic/shared';
import { TreeItem } from '@radic/console-input';
import { NginxConfFile, NginxParseTreeNode } from '@radic/hosting/lib/Servers/Nginx/parser';
import { Command } from '../Command';


function transformNginxToInquirerTree(nginxNodes?: NginxParseTreeNode[]): TreeItem[] {
    let items: TreeItem[] = [];
    if ( !nginxNodes ) {
        return items;
    }
    for ( const ng of nginxNodes ) {
        // items.push({
        //     // value   : ng.value.toString(),
        //     // children: ng.isBlock ? transformNginxToInquirerTree(ng.children) : null,
        // });
    }
    return items;
}

//
// class App extends BlessedComponent<{ screen: blessed.Widgets.Screen }, any> {
//     render() {
//         const { screen } = this.props;
//         let layoutProps  = {
//             width : app.get('cli.wrap'),
//             height: '50%',
//             left  : '50%',
//             right : 0,
//             bottom: 0,
//         };
//
//         return (
//             <Layout {...layoutProps}>
//                 {`Focused: ${screen?.focused?.name} `}
//                 <Tree name="tree">
//                     <TreeItem value={3}>haai2</TreeItem>
//                     <TreeItem value={5}>haai2</TreeItem>
//                     <TreeItem value={6}>haai2</TreeItem>
//                 </Tree>
//             </Layout>
//         );
//     }
// }

@command('test', 'Just a test command')
export default class TestCommand extends Command {
    @servers servers: servers;



    async hasdfndle() {
        let server = this.servers.get<NginxServer>('nginx');
        let site   = await server.sites.first();
        let config = await site.getConfig();

        const transformConfig = (config: NginxParseTreeNode[]) => {
            let tree = {};
            for ( const c of config ) {
                let value = {
                    value   : c.value,
                    comments: c.comments,
                    isBlock : c.isBlock,
                    children: transformConfig(c.children),
                };
                if ( tree[ c.name ] ) {
                    tree[ c.name ] = [ tree[ c.name ], value ];
                } else {
                    tree[ c.name ] = value;
                }
            }
            return tree;
        };

        let tree   = transformConfig(config.children);
        let dotted = dot(tree);
        dotted     = Object.entries(dotted).filter(([ key, value ]) => {
            return !!value || (isArray(value) && value.length > 0) || value !== {};
        }).reduce(objectify, {});
        this.out.dump(dotted);
        let answers: NginxParseTreeNode[] = await this.ask.tree('Browse tree', transformNginxToInquirerTree(config.children), {
            multiple   : true,
            transformer: (ng: NginxParseTreeNode) => {
                let name = `{cyan}${ng.name}{/cyan}`;
                if ( ng.value ) {
                    name += ` : {teal}${ng.value}{/teal}`;
                }
                if ( ng.comments && ng.comments.length > 0 ) {
                    name += ` {green}/** ${ng.comments} */{/green}`;
                }
                return this.out.parse(name);
            },
        });

        if ( answers.length ) {
            for ( const answer of answers ) {
                answer.value = await this.ask.input(answer.name, answer.value);
            }
            if ( await this.ask.confirm('Modify changes in config file?') ) {

                let file    = new NginxConfFile(config, { tab: '    ' });
                let content = file.nginx.toString();

                let c = file.toString();
                return { content, c, file };

            }
        }

    }

    async handeele() {
        let server = this.servers.get<NginxServer>('nginx');

        let paths = server.resolvePaths();

        const availableSitesPaths = server.getAvailableSitePaths();
        const enabledSitesPaths   = server.getEnabledSitePaths();
        const sites               = availableSitesPaths.map(path => new NginxSite(server, path));
        const site                = sites[ 0 ];
        const siteEnabled         = site.isEnabled();
        const siteConfig          = await site.getConfig();
        const siteHostNames       = await site.getHostNames();
        const siteHostFileEntries = await site.getHostFileEntries();

        return;
    }

    async handggle() {
        const hostfile = this.app.hostfile;
        hostfile.load();
        let lines = hostfile.all();
        let hosts = hostfile.hosts();

        let hosts2 = hostfile.getAllByAddress('10.0.0.*');
        let hosts3 = hostfile.getAllByName('*.local');

        let saved = hostfile.save();

        return;
    }
}
