import { resolve } from 'path';

import { IDE } from './ide/IDE';


async function run() {
    const ide = new IDE(resolve(__dirname, '..'));
    const sourceFolders = ide.iml.getSourceFolders();
    const testFolders = ide.iml.getTestFolders();
    const excludedFolders = ide.iml.getExcludedFolders();

    ide.iml.markDirectory('packages/multi-package-json-manager/src','source')
        .markDirectory('packages/multi-package-json-manager/lib','excluded')
        .markDirectory('apps/hosting-cli/lib','excluded')
        .markDirectory('apps/hosting-cli/src','source')


    ide.iml.save();
    return;
}



function makeIT() {

    function Poc() {}

    Poc.prototype.query = function query() {}
    Poc.prototype.query.iml = function iml() {}
    Poc.prototype.query.prototype.module = function module() {}

    let poc = new Poc()
    let q = poc.query
    let b  =new poc.query()
    return {poc, q,b}
}
makeIT();
run();

