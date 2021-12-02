import { command} from '@radic/console';
import { Bindings, inject } from  '@radic/core';
import { dot } from 'dot-object';
import { Command } from '../Command';
import { CredentialStore } from '../CredentialStore';

@command('auth [command]', 'Login for using various parts of the app')
export default class LoginCommand extends Command {
    @inject('log') log: Bindings['log'];
    @inject('config') config: Bindings['config'];
    commands = ['login','register']
    async handle() {

        CredentialStore.unlock('auth',)
    }

    async register(){

    }
}
