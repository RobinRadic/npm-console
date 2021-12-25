import { Bindings } from '@radic/core';
import { Command } from '../Command';
export default class AuthCommand extends Command {
    log: Bindings['log'];
    config: Bindings['config'];
    guard: Bindings['guard'];
    commands: string[];
    handle(command?: string, name?: string): Promise<import("winston").Logger>;
    hand44le(): Promise<void>;
    register(): Promise<void>;
}
