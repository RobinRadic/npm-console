import { Line } from './Line';

export class CommentLine implements Line{
    constructor(protected content: string) {
    }

    format() {return this.content; }
}
