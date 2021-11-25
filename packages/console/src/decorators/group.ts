import { decorator } from './decorator';

export function group(name: string, desc: string, directory:string) {
    if(!directory.endsWith('cmds')){
        directory+=`/${name}_cmds`;
    }
    name+= ' <command>';
    return decorator('group',{name,desc,directory})
}
