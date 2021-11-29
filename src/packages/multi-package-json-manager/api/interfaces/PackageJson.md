[multi-package-json-manager](../README.md) / PackageJson

# Interface: PackageJson

## Hierarchy

- `Partial`<`BasePackageJson`\>

  ↳ **`PackageJson`**

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [$schema](PackageJson.md#$schema)
- [author](PackageJson.md#author)
- [bin](PackageJson.md#bin)
- [browser](PackageJson.md#browser)
- [bugs](PackageJson.md#bugs)
- [bundleDependencies](PackageJson.md#bundledependencies)
- [bundledDependencies](PackageJson.md#bundleddependencies)
- [config](PackageJson.md#config)
- [contributors](PackageJson.md#contributors)
- [cpu](PackageJson.md#cpu)
- [dependencies](PackageJson.md#dependencies)
- [description](PackageJson.md#description)
- [devDependencies](PackageJson.md#devdependencies)
- [directories](PackageJson.md#directories)
- [engineStrict](PackageJson.md#enginestrict)
- [engines](PackageJson.md#engines)
- [esnext](PackageJson.md#esnext)
- [exports](PackageJson.md#exports)
- [files](PackageJson.md#files)
- [flat](PackageJson.md#flat)
- [funding](PackageJson.md#funding)
- [homepage](PackageJson.md#homepage)
- [jspm](PackageJson.md#jspm)
- [keywords](PackageJson.md#keywords)
- [license](PackageJson.md#license)
- [licenses](PackageJson.md#licenses)
- [main](PackageJson.md#main)
- [maintainers](PackageJson.md#maintainers)
- [man](PackageJson.md#man)
- [module](PackageJson.md#module)
- [name](PackageJson.md#name)
- [optionalDependencies](PackageJson.md#optionaldependencies)
- [os](PackageJson.md#os)
- [peerDependencies](PackageJson.md#peerdependencies)
- [peerDependenciesMeta](PackageJson.md#peerdependenciesmeta)
- [preferGlobal](PackageJson.md#preferglobal)
- [private](PackageJson.md#private)
- [publishConfig](PackageJson.md#publishconfig)
- [repository](PackageJson.md#repository)
- [resolutions](PackageJson.md#resolutions)
- [scripts](PackageJson.md#scripts)
- [sideEffects](PackageJson.md#sideeffects)
- [type](PackageJson.md#type)
- [types](PackageJson.md#types)
- [typings](PackageJson.md#typings)
- [version](PackageJson.md#version)
- [workspaces](PackageJson.md#workspaces)

## Properties

### $schema

• `Optional` **$schema**: `string`

#### Inherited from

Partial.$schema

#### Defined in

node_modules/prettier-package-json/build/types.d.ts:5

___

### author

• `Optional` **author**: `Person`

#### Inherited from

Partial.author

#### Defined in

node_modules/type-fest/source/package-json.d.ts:382

___

### bin

• `Optional` **bin**: `string` \| `Record`<`string`, `string`\>

The executable files that should be installed into the `PATH`.

#### Inherited from

Partial.bin

#### Defined in

node_modules/type-fest/source/package-json.d.ts:421

___

### browser

• `Optional` **browser**: `string` \| `Record`<`string`, `string` \| ``false``\>

A hint to JavaScript bundlers or component tools when packaging modules for client side use.

#### Inherited from

Partial.browser

#### Defined in

node_modules/type-fest/source/package-json.d.ts:253

___

### bugs

• `Optional` **bugs**: `BugsLocation`

The URL to the package's issue tracker and/or the email address to which issues should be reported.

#### Inherited from

Partial.bugs

#### Defined in

node_modules/type-fest/source/package-json.d.ts:367

___

### bundleDependencies

• `Optional` **bundleDependencies**: `string`[]

Alias of `bundledDependencies`.

#### Inherited from

Partial.bundleDependencies

#### Defined in

node_modules/type-fest/source/package-json.d.ts:495

___

### bundledDependencies

• `Optional` **bundledDependencies**: `string`[]

Package names that are bundled when the package is published.

#### Inherited from

Partial.bundledDependencies

#### Defined in

node_modules/type-fest/source/package-json.d.ts:490

___

### config

• `Optional` **config**: `Record`<`string`, `unknown`\>

Is used to set configuration parameters used in package scripts that persist across upgrades.

#### Inherited from

Partial.config

#### Defined in

node_modules/type-fest/source/package-json.d.ts:460

___

### contributors

• `Optional` **contributors**: `Person`[]

A list of people who contributed to the package.

#### Inherited from

Partial.contributors

#### Defined in

node_modules/type-fest/source/package-json.d.ts:387

___

### cpu

• `Optional` **cpu**: `LiteralUnion`<``"arm"`` \| ``"arm64"`` \| ``"ia32"`` \| ``"mips"`` \| ``"mipsel"`` \| ``"ppc"`` \| ``"ppc64"`` \| ``"s390"`` \| ``"s390x"`` \| ``"x32"`` \| ``"x64"`` \| ``"!arm"`` \| ``"!arm64"`` \| ``"!ia32"`` \| ``"!mips"`` \| ``"!mipsel"`` \| ``"!ppc"`` \| ``"!ppc64"`` \| ``"!s390"`` \| ``"!s390x"`` \| ``"!x32"`` \| ``"!x64"``, `string`\>[]

CPU architectures the module runs on.

#### Inherited from

Partial.cpu

#### Defined in

node_modules/type-fest/source/package-json.d.ts:533

___

### dependencies

• `Optional` **dependencies**: `Dependency`

The dependencies of the package.

#### Inherited from

Partial.dependencies

#### Defined in

node_modules/type-fest/source/package-json.d.ts:465

___

### description

• `Optional` **description**: `string`

Package description, listed in `npm search`.

#### Inherited from

Partial.description

#### Defined in

node_modules/type-fest/source/package-json.d.ts:352

___

### devDependencies

• `Optional` **devDependencies**: `Dependency`

Additional tooling dependencies that are not required for the package to work. Usually test, build, or documentation tooling.

#### Inherited from

Partial.devDependencies

#### Defined in

node_modules/type-fest/source/package-json.d.ts:470

___

### directories

• `Optional` **directories**: `DirectoryLocations`

Indicates the structure of the package.

#### Inherited from

Partial.directories

#### Defined in

node_modules/type-fest/source/package-json.d.ts:433

___

### engineStrict

• `Optional` **engineStrict**: `boolean`

**`deprecated`**

#### Inherited from

Partial.engineStrict

#### Defined in

node_modules/type-fest/source/package-json.d.ts:507

___

### engines

• `Optional` **engines**: `Object`

Engines that this package runs on.

#### Inherited from

Partial.engines

#### Defined in

node_modules/type-fest/source/package-json.d.ts:500

___

### esnext

• `Optional` **esnext**: `string` \| { [moduleName: string]: `string` \| `undefined`; `browser?`: `string` ; `main?`: `string`  }

A module ID with untranspiled code that is the primary entry point to the program.

#### Inherited from

Partial.esnext

#### Defined in

node_modules/type-fest/source/package-json.d.ts:242

___

### exports

• `Optional` **exports**: `Exports`

Standard entry points of the package, with enhanced support for ECMAScript Modules.

[Read more.](https://nodejs.org/api/esm.html#esm_package_entry_points)

#### Inherited from

Partial.exports

#### Defined in

node_modules/type-fest/source/package-json.d.ts:416

___

### files

• `Optional` **files**: `string`[]

The files included in the package.

#### Inherited from

Partial.files

#### Defined in

node_modules/type-fest/source/package-json.d.ts:397

___

### flat

• `Optional` **flat**: `boolean`

If your package only allows one version of a given dependency, and you’d like to enforce the same behavior as `yarn install --flat` on the command-line, set this to `true`.

Note that if your `package.json` contains `"flat": true` and other packages depend on yours (e.g. you are building a library rather than an app), those other packages will also need `"flat": true` in their `package.json` or be installed with `yarn install --flat` on the command-line.

#### Inherited from

Partial.flat

#### Defined in

node_modules/type-fest/source/package-json.d.ts:320

___

### funding

• `Optional` **funding**: `string` \| { `type?`: `LiteralUnion`<``"github"`` \| ``"opencollective"`` \| ``"patreon"`` \| ``"individual"`` \| ``"foundation"`` \| ``"corporation"``, `string`\> ; `url`: `string`  }

Describes and notifies consumers of a package's monetary support information.

[Read more.](https://github.com/npm/rfcs/blob/latest/accepted/0017-add-funding-support.md)

#### Inherited from

Partial.funding

#### Defined in

node_modules/type-fest/source/package-json.d.ts:581

___

### homepage

• `Optional` **homepage**: `LiteralUnion`<``"."``, `string`\>

The URL to the package's homepage.

#### Inherited from

Partial.homepage

#### Defined in

node_modules/type-fest/source/package-json.d.ts:362

___

### jspm

• `Optional` **jspm**: `PackageJson`

JSPM configuration.

#### Inherited from

Partial.jspm

#### Defined in

node_modules/type-fest/source/package-json.d.ts:332

___

### keywords

• `Optional` **keywords**: `string`[]

Keywords associated with package, listed in `npm search`.

#### Inherited from

Partial.keywords

#### Defined in

node_modules/type-fest/source/package-json.d.ts:357

___

### license

• `Optional` **license**: `string`

The license for the package.

#### Inherited from

Partial.license

#### Defined in

node_modules/type-fest/source/package-json.d.ts:372

___

### licenses

• `Optional` **licenses**: { `type?`: `string` ; `url?`: `string`  }[]

The licenses for the package.

#### Inherited from

Partial.licenses

#### Defined in

node_modules/type-fest/source/package-json.d.ts:377

___

### main

• `Optional` **main**: `string`

The module ID that is the primary entry point to the program.

#### Inherited from

Partial.main

#### Defined in

node_modules/type-fest/source/package-json.d.ts:409

___

### maintainers

• `Optional` **maintainers**: `Person`[]

A list of people who maintain the package.

#### Inherited from

Partial.maintainers

#### Defined in

node_modules/type-fest/source/package-json.d.ts:392

___

### man

• `Optional` **man**: `string` \| `string`[]

Filenames to put in place for the `man` program to find.

#### Inherited from

Partial.man

#### Defined in

node_modules/type-fest/source/package-json.d.ts:428

___

### module

• `Optional` **module**: `string`

An ECMAScript module ID that is the primary entry point to the program.

#### Inherited from

Partial.module

#### Defined in

node_modules/type-fest/source/package-json.d.ts:237

___

### name

• `Optional` **name**: `string`

The name of the package.

#### Inherited from

Partial.name

#### Defined in

node_modules/type-fest/source/package-json.d.ts:342

___

### optionalDependencies

• `Optional` **optionalDependencies**: `Dependency`

Dependencies that are skipped if they fail to install.

#### Inherited from

Partial.optionalDependencies

#### Defined in

node_modules/type-fest/source/package-json.d.ts:475

___

### os

• `Optional` **os**: `LiteralUnion`<``"aix"`` \| ``"darwin"`` \| ``"freebsd"`` \| ``"linux"`` \| ``"openbsd"`` \| ``"sunos"`` \| ``"win32"`` \| ``"!aix"`` \| ``"!darwin"`` \| ``"!freebsd"`` \| ``"!linux"`` \| ``"!openbsd"`` \| ``"!sunos"`` \| ``"!win32"``, `string`\>[]

Operating systems the module runs on.

#### Inherited from

Partial.os

#### Defined in

node_modules/type-fest/source/package-json.d.ts:512

___

### peerDependencies

• `Optional` **peerDependencies**: `Dependency`

Dependencies that will usually be required by the package user directly or via another dependency.

#### Inherited from

Partial.peerDependencies

#### Defined in

node_modules/type-fest/source/package-json.d.ts:480

___

### peerDependenciesMeta

• `Optional` **peerDependenciesMeta**: `Record`<`string`, { `optional`: ``true``  }\>

Indicate peer dependencies that are optional.

#### Inherited from

Partial.peerDependenciesMeta

#### Defined in

node_modules/type-fest/source/package-json.d.ts:485

___

### preferGlobal

• `Optional` **preferGlobal**: `boolean`

If set to `true`, a warning will be shown if package is installed locally. Useful if the package is primarily a command-line application that should be installed globally.

**`deprecated`**

#### Inherited from

Partial.preferGlobal

#### Defined in

node_modules/type-fest/source/package-json.d.ts:564

___

### private

• `Optional` **private**: `boolean`

If set to `true`, then npm will refuse to publish it.

#### Inherited from

Partial.private

#### Defined in

node_modules/type-fest/source/package-json.d.ts:569

___

### publishConfig

• `Optional` **publishConfig**: `Record`<`string`, `unknown`\>

A set of config values that will be used at publish-time. It's especially handy to set the tag, registry or access, to ensure that a given package is not tagged with 'latest', published to the global public registry or that a scoped module is private by default.

#### Inherited from

Partial.publishConfig

#### Defined in

node_modules/type-fest/source/package-json.d.ts:574

___

### repository

• `Optional` **repository**: `string` \| { `directory?`: `string` ; `type`: `string` ; `url`: `string`  }

Location for the code repository.

#### Inherited from

Partial.repository

#### Defined in

node_modules/type-fest/source/package-json.d.ts:438

___

### resolutions

• `Optional` **resolutions**: `Dependency`

Selective version resolutions. Allows the definition of custom package versions inside dependencies without manual edits in the `yarn.lock` file.

#### Inherited from

Partial.resolutions

#### Defined in

node_modules/type-fest/source/package-json.d.ts:325

___

### scripts

• `Optional` **scripts**: `Scripts`

Script commands that are run at various times in the lifecycle of the package. The key is the lifecycle event, and the value is the command to run at that point.

#### Inherited from

Partial.scripts

#### Defined in

node_modules/type-fest/source/package-json.d.ts:455

___

### sideEffects

• `Optional` **sideEffects**: `boolean` \| `string`[]

Denote which files in your project are "pure" and therefore safe for Webpack to prune if unused.

[Read more.](https://webpack.js.org/guides/tree-shaking/)

#### Inherited from

Partial.sideEffects

#### Defined in

node_modules/type-fest/source/package-json.d.ts:262

___

### type

• `Optional` **type**: ``"module"`` \| ``"commonjs"``

Resolution algorithm for importing ".js" files from the package's scope.

[Read more.](https://nodejs.org/api/esm.html#esm_package_json_type_field)

#### Inherited from

Partial.type

#### Defined in

node_modules/type-fest/source/package-json.d.ts:404

___

### types

• `Optional` **types**: `string`

Location of the bundled TypeScript declaration file.

#### Inherited from

Partial.types

#### Defined in

node_modules/type-fest/source/package-json.d.ts:269

___

### typings

• `Optional` **typings**: `string`

Location of the bundled TypeScript declaration file. Alias of `types`.

#### Inherited from

Partial.typings

#### Defined in

node_modules/type-fest/source/package-json.d.ts:274

___

### version

• `Optional` **version**: `string`

Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).

#### Inherited from

Partial.version

#### Defined in

node_modules/type-fest/source/package-json.d.ts:347

___

### workspaces

• `Optional` **workspaces**: `string`[] \| `WorkspaceConfig`

Used to configure [Yarn workspaces](https://classic.yarnpkg.com/docs/workspaces/).

Workspaces allow you to manage multiple packages within the same repository in such a way that you only need to run `yarn install` once to install all of them in a single pass.

Please note that the top-level `private` property of `package.json` **must** be set to `true` in order to use workspaces.

#### Inherited from

Partial.workspaces

#### Defined in

node_modules/type-fest/source/package-json.d.ts:313
