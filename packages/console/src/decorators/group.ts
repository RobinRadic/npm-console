import { decorator } from './decorator';
import { existsSync } from 'fs';

export function group(name: string, desc: string, directory:string) {
    if(!directory.endsWith('cmds')){
        if(existsSync(`${directory}/${name}`)){
            directory+=`/${name}`
        } else {
            directory += `/${name}_cmds`;
        }
    }
    name+= ' <command>';
    return decorator('group',{name,desc,directory})
}
