import { BaseCommand, Collector, TypeGenerator } from '@modules';
import { command, option } from '@decorators';
import { isAbsolute, parse, format, resolve,join } from 'path';
import { inject } from '@core';
import { existsSync, unlinkSync, writeFileSync } from 'fs';
import { TypeGeneratorFactory } from '@modules';

@command('type-generator', 'Generate NGINX types')
export default class TypeGeneratorCommand extends BaseCommand {
    @inject('nginx.types.collector')collector:Collector
    @inject('nginx.types.generator.factory') generatorFactory:TypeGeneratorFactory
    @option('p', 'Path to generate type definition file. Providing a directory or file path may be relative or absolute. By default the filename will be nginx.types.ts') path: string = 'nginx.types.ts';
    @option('f', 'For generation, ignore previously cached') force:boolean=true
    @option('y', 'Cofirm all comfirmations') confirm:boolean=false

    async handle() {
        let path = this.getPath();
        if(this.force){
            this.collector.disableCache();
        }
        this.log.info('Collecting..')
        const collected = await this.collector.collect(this.force)
        this.log.info('Generating..')
        const generator = await this.generatorFactory(collected)
        const generated = await generator.generate()

        if(existsSync(path)){
            if(!this.confirm) {
                if ( !await this.ask.confirm(`This will override the file at {blue}${path}{/blue} location. Are you sure?`) ) {
                    return this.log.warn(`No output was generated`)
                }
            }
            unlinkSync(path);
        }
        writeFileSync(path, generated, 'utf8');
        return this.log.success(`Output generated in [${path}]`)
    }

    getPath() {
        let parsed = parse(this.path);

        if(!isAbsolute(parsed.dir)){
            parsed.dir = resolve(process.cwd(),parsed.dir)
        }
        if(!parsed.ext){
            parsed.dir = join(parsed.dir, parsed.base)
            parsed.base = 'nginx.types.ts'
            parsed.ext = 'ts'
            parsed.name = 'nginx.types'

        }

        let path = format(parsed);


        return path;
    }
}
