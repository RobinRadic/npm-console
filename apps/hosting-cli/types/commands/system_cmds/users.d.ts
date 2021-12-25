import { Command } from '../../Command';
import { system, User } from '@radic/core';
export default class UsersCommand extends Command {
    system: system;
    current: boolean;
    handle(): Promise<void>;
    printUser(user: User): void;
    printUserTable(users: User[]): void;
}
