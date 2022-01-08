/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import * as src from '../src';

@suite('Manager')
class TestTest extends TestCase {

    @test
    async 'helloWorld'() {
        src.helloWorld.should.equal('helloWorld')
    }
}

