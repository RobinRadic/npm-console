import { Line } from './Line';

export class InvalidLine implements Line {
    constructor(protected content: string) {
    }

    format() {return this.content; }
}
