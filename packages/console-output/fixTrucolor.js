const findupSync = require('findup-sync')
const glob = require('glob');
const {dirname, resolve} = require('path');
const {readFileSync, unlinkSync, writeFileSync} = require('fs');

let dir = findupSync('../../node_modules');
if ( dir ) {
    let pattern = resolve(dir, '..', 'node_modules/trucolor/index.mjs');
    searchAndFix(pattern)
    let pattern2 = resolve(dir, '..', '**/node_modules/trucolor/index.mjs');
    searchAndFix(pattern2)
}

function searchAndFix(pattern){
    let files = glob.sync(pattern, {absolute: true});
    let packageFiles = files.map(file => dirname(file)).map(dir => resolve(dir, 'package.json'));
    for (const file of files) {
        unlinkSync(file);
        console.log(`Removed trucolor file [${file}]`);
    }
    for (const packageFile of packageFiles) {
        let content = readFileSync(packageFile, 'utf-8');
        content = content.replace('"module": "index.mjs",', '');
        content = content.replace('"type": "module",', '');
        writeFileSync(packageFile, content, 'utf-8');
        console.log(`Removed trucolor package.json "module" definition`);
    }
}
