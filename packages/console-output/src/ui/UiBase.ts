import { Ui } from './Ui';
import { Text } from './Text';
import { Erase } from './Erase';
import { Move } from './Move';

export class UiBase {
    protected ui: Ui
    constructor(ui: Ui) {
        this.ui = ui;
    }

    protected get stdout() { return this.ui.output.stdout;}

    protected get move(): Move {return this.ui.move;}

    protected get erase(): Erase {return this.ui.erase;}

    protected get text(): Text {return this.ui.text;}
}
