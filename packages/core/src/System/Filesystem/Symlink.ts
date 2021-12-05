import { Base } from './Base';

export class Symlink extends Base{
    type:'link'
}
Base.classes.link = Symlink;
