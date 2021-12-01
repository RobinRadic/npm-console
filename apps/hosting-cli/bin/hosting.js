#!/usr/bin/env node
const {join} = require('path')
const {readFileSync} = require('fs')
const {addAliases} = require('module-alias');


const dev = process.env.NODE_ENV==='development';
//
// const objectify = (obj, [k, v]) => (Object.assign(Object.assign({}, obj), { [k]: v }));
const tsConfigPath=join(__dirname, '..','tsconfig.json')
const tsconfig = JSON.parse(readFileSync(tsConfigPath,'utf8').toString())
// let compilerPaths = Object.entries(tsconfig.compilerOptions.paths)
//
let dir = dev ? join(__dirname, '..', 'src') : join(__dirname, '..', tsconfig.compilerOptions.outDir)

if(dev){
    // compilerPaths=compilerPaths.map(([key,values]) => ([key, values[0].replace('src', dir)])).reduce(objectify,{})
    // addAliases(compilerPaths)
    require('ts-node').register({
        transpileOnly: true,
    })
} else {
    // addAliases(compilerPaths.map(([key,values]) => ([key, values[0].replace('src', dir).replace('.tsx','.jsx').replace('.ts','.js')])).reduce(objectify,{}))
}

const cli = require(join(dir, 'index'));
cli.startCli().catch(reason => {
    console.error('startCli', reason);
})
