/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import { app, Application } from '../src';

@suite('Core')
class CoreTest extends TestCase {

    before() {
    }

    @test
    async 'app'() {
        app.should.be.instanceOf(Application);
    }
}

