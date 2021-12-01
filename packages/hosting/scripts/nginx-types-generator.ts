import { NginxTypesGenerator } from '../src';
import { join } from 'path';

// run this file to generate types.
// You can tweak the config here below to adjust some stuff

async function run() {
    const scraper = new NginxTypesGenerator();
    scraper.fetcher.setCachePath(join(__dirname, '.cache'));
    // await scraper.generateTypesToFile(join(__dirname, 'nginx-types.ts'));
    await scraper.generateInfoToFile(join(__dirname, 'nginx-info.json'));
}


run();
