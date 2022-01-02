import { Command } from '../Command';
import { ReleaseType } from 'semver';
export default class extends Command {
    all: boolean;
    bump: ReleaseType;
    commit: boolean;
    build: boolean;
    interactive: boolean;
    handle(name?: string): Promise<void>;
}
