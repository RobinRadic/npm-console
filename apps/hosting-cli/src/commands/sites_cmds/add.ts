import {dirname } from 'path';
import { command } from '@radic/console';
import { SitesCommand } from '../../SitesCommand';
import { parse } from 'url';
import { HostLine } from '@radic/hosting';

@command('add', 'Add existing site')
export default class AddCommand extends SitesCommand {

    async handle(){
        this.log.info('Interactive site creator')
        const hostname = await this.ask.input('hostname', dirname(process.cwd()) + '.local')
        const parsedHostname = parse(hostname)
        const rootPath = await this.ask.directory('public root directory', process.cwd())
        const logPath = await this.ask.directory('log directory', process.cwd())
        const server = await this.askServer();

        const createDatabase = await this.ask.confirm('Create database?')
        if(createDatabase){
            const databaseType = await this.ask.list('database server/type', ['mysql','sqlite'])
            const databaseName = await this.ask.input('database name', parsedHostname.host)
        }
        const addToHostfile = await this.ask.confirm('Add to hostfile?')
        if(addToHostfile){
            const hostFileIp = await this.ask.input('ip', '127.0.0.1')
            this.hostfile.load()
            let lines=this.hostfile.getAllByName(hostname);
            const hostEntryExists = lines.length > 0
            if(hostEntryExists){
                const hostEntryOperation = await this.ask.list(`Hostfile entry for "${hostname}" already exists ${lines.length} time`, [
                    {name: 'Doesnt matter, add the entry.', value:'add'},
                    {name: 'Comment out the existing and add the entry', value:'comment'},
                    {name: 'Remove the existing and add the entry', value:'remove'},
                    {name: 'Dont do anything, handle it myself', value:'dont'},
                ])
                if(hostEntryOperation === 'add'){
                    this.hostfile.add(hostname, [hostFileIp]);
                } else if(hostEntryOperation === 'comment'){
                    for(const line of lines){
                        if(line instanceof HostLine){
                            line.commentOut()
                        }
                    }
                    this.hostfile.add(hostname, [hostFileIp]);
                } else if(hostEntryOperation === 'remove'){
                    this.hostfile.remove(lines)
                    this.hostfile.add(hostname, [hostFileIp]);
                } else {

                }
            }
        }

    }
}
