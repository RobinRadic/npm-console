import { Ui } from './Ui';
import { Text } from './Text';
import { Erase } from './Erase';
import { Move } from './Move';
export declare class UiBase {
    protected ui: Ui;
    constructor(ui: Ui);
    protected get stdout(): any;
    protected get move(): Move;
    protected get erase(): Erase;
    protected get text(): Text;
}
