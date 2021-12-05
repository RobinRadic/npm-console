import { command, option } from '@radic/console';
import { Command } from '../../Command';
import { system, User } from '@radic/core';


@command('users', 'User management')
export default class UsersCommand extends Command {
    @system system: system;
    @option('c', 'Only show the current user') current: boolean;

    async handle() {
        const users = this.system.users.toArray();
        if ( this.current ) {
            this.out.line(`{bold}Current user:{/bold}`);
            return this.printUser(this.system.users.currentUser);
        }
        this.out.line(`{bold}All users:{/bold}`);
        this.printUserTable(users);
    }


    printUser(user: User) {
        let columns = [ 'username', 'uid', 'gid', 'gecos', 'homedir', 'shell' ];
        let text    = columns.map(col => `${col}:  \t${user[ col ]}`).join('\n');
        let ui      = this.out.ui.divBuilder;
        ui.div(text);
        this.out.line(ui.toString());
    }


    printUserTable(users: User[]) {
        let columns = [ 'username', 'uid', 'gid', 'gecos', 'homedir', 'shell' ];
        let table   = this.out.ui.table({
            head: columns,
        }, 'borderless');
        for ( const user of users ) {
            table.push(columns.map(name => user[ name ]));
        }
        this.out.line(table.toString());
    }
}
