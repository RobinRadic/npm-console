import { command, option } from '@radic/console';
import { servers } from '@radic/hosting';
import { SitesCommand } from '../../SitesCommand';

@command('servers', 'Manage servers')
export default class ServersCommand extends SitesCommand {
    @servers servers: servers;
    @option('l', 'List servers') list: boolean             = false;
    @option('a', 'Add server') add: boolean                = false;
    @option('d', 'Detect and add servera') detect: boolean = false;
    @option('r', 'Remove server') remove: boolean          = false;

    public async handle(...args): Promise<any> {
        if ( this.list ) {
            return this.handleList();
        } else if ( this.add ) {
            return this.handleAdd();
        } else if ( this.detect ) {
            return this.handleDetect()
        } else if ( this.remove ) {
            return this.handleRemove();
        } else {
            return this.handleList();
        }
    }

    async handleList() {
        for ( const server of this.servers.toArray() ) {
            this.out.line(`- ${server.name}`);
        }
    }

    async handleDetect(){
        this.app.path.search('nginx',{root:'/'});
        this.app.path.search('apache2',{root:'/'});
    }

    async handleAdd() {

    }

    async handleRemove() {

    }
}
