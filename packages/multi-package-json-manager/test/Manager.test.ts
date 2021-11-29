/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import { Manager } from '../src';

@suite('Manager')
class ManagerTest extends TestCase {
    manager:Manager;
    before() {
        this.manager = new Manager(__dirname)
    }

    @test
    async 'instance'() {
        this.manager.should.be.instanceOf(Manager);
    }
}

