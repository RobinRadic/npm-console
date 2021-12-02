/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
// import {  }    from 'mocha-typescript';
import { TestCase } from './TestCase';
import { Input } from '../src';
import { ReadableStream, WritableStream } from 'memory-streams';

@suite('Input')
class InputTest extends TestCase {
    input: ReadableStream;
    output: WritableStream;

    before() {
        this.input   = new ReadableStream('');
        this.output  = new WritableStream({});
        Input.prompt = Input.inquirer.createPromptModule({
            input : this.input as any,
            output: this.output as any,
        });
    }

    @test('methods')
    async testInput() {
        const methods = [
            'question',
            'input',
            'confirm',
            'checkbox',
            'list',
            'path',
            'directory',
            'editor',
        ];
        for ( const method of methods ) {
            expect(Input[ method ]).instanceOf(Function);
        }
    }


    @test
    async 'check if dev prompts are working'() {
        expect(Input.ensureCustomPromptRegistered('autocomplete')).to.equal(true);
        // "@matti-o7/inquirer-maxlength-input-prompt": "^1.0.1",
        //     "inquirer-autocomplete-prompt": "^1.3.0",
        //     "inquirer-chalk-pipe": "^1.3.0",
        //     "inquirer-datepicker": "^2.0.0",
        //     "inquirer-directory": "^2.2.0",
        //     "inquirer-file-path": "^1.0.1",
        //     "inquirer-tree-prompt": "^1.1.2"
    }
}

