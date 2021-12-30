/// <reference types="@types/chai" />
/// <reference types="mocha-typescript" />
import { TestCase } from './TestCase';
import { MonoRepo, PackageBuilder } from '../src';
import { Application } from '@radic/core';

@suite('MonoRepo')
class MonoRepoTest extends TestCase {
    static async before() {
        super.before();
        await MonoRepoTest.bootApp({
            mono: {
                options: {
                    workspaces  : false,
                    packagePaths: [
                        'apps/mono-cli',
                        'apps/hosting-cli',
                        'packages/hosting',
                        'packages/console',
                        'packages/console-colors',
                        'packages/console-input',
                        'packages/console-output',
                        'packages/core',
                        'packages/shared',
                        'packages/multi-package-json-manager',
                    ],
                },
            },
        });
    }

    protected app: Application;

    before() {
        this.app = MonoRepoTest.app;
    }

    @test
    async 'MonoServiceProvider should provide monoRepo'() {
        // @ts-ignore
        this.app.get('monoRepo').should.be.instanceof(MonoRepo);
        // @ts-ignore
        this.app.monoRepo.should.be.instanceof(MonoRepo);
    }

    @test
    async 'has resolved packages'() {
        this.app.monoRepo.packages.length.should.be.above(0);
    }

    @test
    async 'getBuildOrder should sort and return a correct build order'() {
        let buildOrder = await this.app.monoRepo.getBuilderOrder();
        buildOrder.should.include.ordered.members([
            '@radic/core',
            '@radic/shared',
            '@radic/console',
            '@radic/console-input',
            '@radic/console-output',
            '@radic/mono-cli',
            '@radic/hosting',
            '@radic/hosting-cli',
            '@radic/console-colors',
            'multi-package-json-manager',
        ], `Actual builder order is:\n-${buildOrder.join('\n-')}\n\nCheck if repo dependencies have changed`);
    }

    @test
    async 'getOrderedBuilders return PackageBuilder array in correct build order'() {
        const builders = await this.app.monoRepo.getOrderedBuilders();
        builders.forEach(builder => builder.should.be.an.instanceOf(PackageBuilder));
    }


    @test
    async 'has macros'() {
        this.app.monoRepo.hasMacro('build').should.equal(true);
        this.app.monoRepo.hasMacro('rebuild').should.equal(true);
        this.app.monoRepo.hasMacro('clean').should.equal(true);
        this.app.monoRepo.hasMacro('watch').should.equal(true);
        this.app.monoRepo.hasMacro('buildAll').should.equal(true);
        this.app.monoRepo.hasMacro('rebuildAll').should.equal(true);
        this.app.monoRepo.hasMacro('cleanAll').should.equal(true);
        this.app.monoRepo.hasMacro('watchAll').should.equal(true);
    }
}

