import { Line } from './Line';

export class BlankLine implements Line{
    constructor(protected content: string) {
    }

    format() {return this.content; }
}
