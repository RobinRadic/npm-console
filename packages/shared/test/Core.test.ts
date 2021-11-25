/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import { isString } from '../src';

@suite('Core')
class CoreTest extends TestCase {

    before() {
    }

    @test
    async 'isString'() {
        isString('bb').should.equal(true);
        isString(1).should.equal(false);
        isString(undefined).should.equal(false);
    }
}

