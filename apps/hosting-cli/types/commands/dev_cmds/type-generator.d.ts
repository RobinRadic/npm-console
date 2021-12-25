import { Collector, TypeGeneratorFactory } from '@radic/hosting';
import { Command } from '../../Command';
export default class TypeGeneratorCommand extends Command {
    collector: Collector;
    generatorFactory: TypeGeneratorFactory;
    path: string;
    force: boolean;
    confirm: boolean;
    handle(): Promise<any>;
    getPath(): string;
}
