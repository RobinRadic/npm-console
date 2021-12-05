import { command } from '@radic/console';
import { Bindings, inject } from '@radic/core';
import { Command } from '../Command';
import crypto from 'crypto';
import { Guard } from '../Auth/Guard';

@command('auth [command] [name]', 'Login for using various parts of the app')
export default class LoginCommand extends Command {
    @inject('log') log: Bindings['log'];
    @inject('config') config: Bindings['config'];
    @inject('guard') guard: Bindings['guard'];

    commands = [ 'login', 'register' ];

    async handle(command?: string, name?: string) {
        if ( !this.commands.includes(command) ) {
            this.log.error('Invalid command');
        }
        if ( !command ) {
            command = await this.ask.list('What command?', this.commands);
        }
        if ( !name ) {
            name = await this.ask.input('name?');
        }
        const password = await this.ask.password('Password')
        if(command === 'register'){
            let password2 =await this.ask.password('Confirm password')
            if(password !== password2){
                return this.log.error('passwords do not match')
            }
        }
        let guard      = new Guard();
        if(command==='login') {
            let passport = guard.login(name, password)
            if(!passport){
                return this.log.error('Invalid login')
            }
            this.log.success('You are logged in')
        }
    }

    async hand44le() {
        const { out }                   = this;
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength     : 2084,
            publicKeyEncoding : {
                type  : 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type      : 'pkcs8',
                format    : 'pem',
                cipher    : 'aes-256-cbc',
                passphrase: 'secret',
            },
        });


        // Create
        const sign = crypto.createSign('SHA256');
        sign.write('some data to sign');
        sign.end();
        const signature = sign.sign({
            key       : privateKey,
            format    : 'pem',
            passphrase: 'secret',
        }, 'base64');
        out.line(signature);

        // Verify signed token from `sign` example above
        const verify = crypto.createVerify('SHA256');
        verify.write('some data to sign');
        verify.end();
        console.log(verify.verify(publicKey, signature, 'base64'));
        // Prints: true

    }

    async register() {

    }
}
