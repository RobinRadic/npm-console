/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import { HostFile } from '../src';
import { app, Application } from '@radic/core';

@suite('Hosts')
class HostsTest extends TestCase {


    async before() {

    }

    @test
    async 'HostFile can be loaded'() {
        const hostfile = new HostFile();
        hostfile.load(true);
        hostfile.isLoaded().should.eq(true);
    }
}

