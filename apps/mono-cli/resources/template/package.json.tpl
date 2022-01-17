{
    "name": "<%= name %>",
    "private": false,
    "version": "1.0.0",
    "description": "<%= name %>",
    <% if(has('author')){ %>
    "author": {
        "name": "<%= author.name %>",
        "email": "<%= author.email %>",
        "url": "<%= author.url %>"
    },
    <% } %>
<% if(has('license')){ %>
    "license": "<%= license %>",
<% } %>
    "main": "lib/index.js",
    "types": "types/index.d.ts",
<% if(has('homepage')){ %>
    "homepage": "<%= homepage %>",
<% } %>
    "scripts": {
        "build": "yarn clean:build && tsc --project tsconfig.build.json",
        "clean:build": "rm -rf lib/ types/",
        "clean:src": "rimraf src/**/*.{js,js.map,d.ts}",
        "clean:docs:api": "rm -rf docs/api",
        "clean:test": "rm -rf .nyc-output/",
        "clean:yarn": "rm yarn.lock node_modules/",
        "docs:api": "rm -rf docs/api && node ../../../typedoc.js",
        "pretest": "yarn clean:test",
        "test": "nyc mocha --opts test/mocha.opts",
        "posttest": "yarn clean:test",
        "watch": "tsc --project tsconfig.build.json --watch"
    },
    "dependencies": {},
    "devDependencies": {
        "@radic/core": "^1.0.0"
    },
    "keywords": [],
<% if(has('bugs')){ %>
    "bugs": {
        "email": "rradic@hotmail.com",
        "url": "https://github.com/robinradic/npm-packages/issues"
    },
<% } %>
    "engines": {
        "node": ">=12"
    },
<% if(has('repository')){ %>
"repository": {
"type": "git",
"url": "https://github.com/robinradic.git",
"directory": "packages/shared"
},
<% } %>
    "publishConfig": {
        "access": "public"
    }
}
