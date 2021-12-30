/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from '../../TestCase';
import { Filesystem,app, Application } from '../../../src';

@suite('System/Filesystem/Fileystem')
class FileystemTest extends TestCase {

    before() {
    }

    @test
    async 'filesystem'() {
        app.should.be.instanceOf(Application);
    }
}

