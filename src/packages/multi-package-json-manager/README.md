# Multi Package Json Manager

Manage multiple package.json files. Usefull for **monorepos** and other stuff.

## Example usage

### Creating an instance and providing options
```typescript
let rootPath = resolve(__dirname, '..');
let manager = new Manager(rootPath);
// add packages by using a glob file string, relative to rootPath
manager.addPackageJsons('packages/*/package.json');
// you can enable a test run and provide a output dir to write all JSON files to a test directory
manager.enableTestRun(true, '.jsonTestOutput');
// You can set key order priority as well as spaces/indent to use for the formatted output
manager.setIndent(4);
manager.setKeyOrder([
    'name',
    'private',
    'version',
    'description',
    'author',
    'license',
    'main',
    'type',
    'types',
    'typings',
    'homepage',
    'scripts',
    'dependencies',
    'devDependencies',
    'optionalDependencies',
    'peerDependencies',
    'author',
    'keywords',
])
```

### Using variables
You can add variables that can be used when setting package.json values, as is shown [below](#managing-packagejson)
```typescript
manager.addVariables({
    email : 'awesome@foo.com',
    name  : 'Robin Radic',
    github: {
        urls      : {
            organisation  : 'https://github.com/robinradic',
            organisationIO: 'https://robinradic.github.io',
        },
        repository: 'npm-packages',
        owner     : 'robinradic',
    },
});
```

### Managing package.json's
```typescript
manager
// set(path:string, value:any, fileFilter?: FileFilterCallback)
// is without any typechecking and can be a dot-notated path
.set('author', {
    email: '{{email}}',
    name : '{{name}}',
    url  : '{{github.urls.organisation}}',
})
// setKey<K extends keyof PackageJson>(key: K, value: T[K], fileFilter?: FileFilterCallback)
// Uses type checking for both key and value and provides code-completion
.setKey('bugs', {
    email: 'rradic@hotmail.com',
    url  : '{{github.urls.organisation}}/{{github.repository}}/issues',
})
// merge(value: PackageJson, fileFilter?: FileFilterCallback)
// Uses type checking for both key and value and provides code-completion
.merge({
    homepage: '{{github.urls.organisationIO}}/{{github.repository}}/packages/{{dirName}}',
})
.setKey('license', 'MIT')
.setKey('engines', {
    node: '>=12',
})
.setKey('os', [ 'linux', 'darwin' ], (details) => {
    let tuxOnlyPackages = ['@radic/console','package-b'];
    return details.pkg.name.includes(tuxOnlyPackages) === false;
})
.setKey('private', false)
.setKey('publishConfig', {
    access: 'public',
})
.setKey('repository', {
    type     : 'git',
    url      : '{{github.urls.organisation}}.git',
    directory: 'packages/{{dirName}}',
})
```
### Filter a change
Each of these methods have a last **optional** `fileFilter?: FileFilterCallback` parameter that you can provide with a filter callback
```typescript
manager.setKey('os', [ 'linux', 'darwin' ], (details) => {
    let tuxOnlyPackages = ['@radic/console','package-b'];
    return details.pkg.name.includes(tuxOnlyPackages) === false;
})
```

The callback and it's details parameter:
```typescript
export type FileFilterCallback = (fileDetails: FilePackageDetails) => boolean
export interface FilePackageDetails {
    absoluteFilePath: string;
    relativeFilePath: string;
    dirName: string;
    pkg: PackageJson;
    names: {
        hasScope:boolean
        /** @example @company/my-package */
        full:string
        /** @example @company */
        scope: string
        /** @example company */
        scopeName: string
        /** @example my-package */
        withoutScope: string
    }
}
```


### Applying all changes
The hardest part is to run the manager
````typescript
manager.run();
````
