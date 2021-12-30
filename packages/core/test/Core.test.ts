/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import { app, Application, CoreServiceProvider } from '../src';

@suite('Core')
class CoreTest extends TestCase {

    async before() {
        await app.initialize({
            dirname  : __dirname,
            providers: [ CoreServiceProvider ],
            config   : {},
        });
        await app.boot()
        await app.start()
    }

    @test
    async 'app'() {
        app.should.be.instanceOf(Application);
        const disks = await app.system.getDisks()
        let partitions = disks.getAllPartitions();
        let diskz = disks.all();

        return
    }
}

