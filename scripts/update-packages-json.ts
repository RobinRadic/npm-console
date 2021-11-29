import { Manager } from 'multi-package-json-manager';
import { resolve } from 'path';


let manager = new Manager(resolve(__dirname, '..'));
manager.addPackageJsons('packages/*/package.json');
manager.enableTestRun(true);
manager.addVariables({
    email : 'rradic@hotmail.com',
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
.setKey('os', [ 'linux', 'darwin' ])
.setKey('private', false)
.setKey('publishConfig', {
    access: 'public',
})
.setKey('repository', {
    type     : 'git',
    url      : '{{github.urls.organisation}}.git',
    directory: 'packages/{{dirName}}',
});


manager.run();
