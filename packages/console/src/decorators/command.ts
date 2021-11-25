import { decorator } from './decorator';

export function command(name: string, desc: string, aliases?: string[]) {
    return decorator('command',{name,desc,aliases})
}
