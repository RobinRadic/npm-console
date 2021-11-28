/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
// import {  }    from 'mocha-typescript';
import { TestCase } from './TestCase';
import { cli, CliInstance } from '../src';

@suite('Cli')
class CliTest extends TestCase {

    before() {

    }

    @test
    async 'cli should be instanceof CliInstance'() {
        cli.should.be.instanceOf(CliInstance);
    }


}

