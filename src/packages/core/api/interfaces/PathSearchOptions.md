[@radic/core](../README.md) / PathSearchOptions

# Interface: PathSearchOptions

## Hierarchy

- `IOptions`

  ↳ **`PathSearchOptions`**

## Table of contents

### Properties

- [absolute](PathSearchOptions.md#absolute)
- [cache](PathSearchOptions.md#cache)
- [cwd](PathSearchOptions.md#cwd)
- [debug](PathSearchOptions.md#debug)
- [dot](PathSearchOptions.md#dot)
- [flipNegate](PathSearchOptions.md#flipnegate)
- [follow](PathSearchOptions.md#follow)
- [fs](PathSearchOptions.md#fs)
- [ignore](PathSearchOptions.md#ignore)
- [mark](PathSearchOptions.md#mark)
- [matchBase](PathSearchOptions.md#matchbase)
- [nobrace](PathSearchOptions.md#nobrace)
- [nocase](PathSearchOptions.md#nocase)
- [nocomment](PathSearchOptions.md#nocomment)
- [nodir](PathSearchOptions.md#nodir)
- [noext](PathSearchOptions.md#noext)
- [noglobstar](PathSearchOptions.md#noglobstar)
- [nomount](PathSearchOptions.md#nomount)
- [nonegate](PathSearchOptions.md#nonegate)
- [nonull](PathSearchOptions.md#nonull)
- [nosort](PathSearchOptions.md#nosort)
- [nounique](PathSearchOptions.md#nounique)
- [realpath](PathSearchOptions.md#realpath)
- [realpathCache](PathSearchOptions.md#realpathcache)
- [root](PathSearchOptions.md#root)
- [silent](PathSearchOptions.md#silent)
- [stat](PathSearchOptions.md#stat)
- [statCache](PathSearchOptions.md#statcache)
- [strict](PathSearchOptions.md#strict)
- [symlinks](PathSearchOptions.md#symlinks)
- [sync](PathSearchOptions.md#sync)

## Properties

### absolute

• `Optional` **absolute**: `boolean`

#### Inherited from

IOptions.absolute

#### Defined in

node_modules/@types/glob/index.d.ts:58

___

### cache

• `Optional` **cache**: `Object`

#### Index signature

▪ [path: `string`]: `boolean` \| ``"DIR"`` \| ``"FILE"`` \| `ReadonlyArray`<`string`\>

#### Inherited from

IOptions.cache

#### Defined in

node_modules/@types/glob/index.d.ts:39

___

### cwd

• `Optional` **cwd**: `string`

#### Inherited from

IOptions.cwd

#### Defined in

node_modules/@types/glob/index.d.ts:30

___

### debug

• `Optional` **debug**: `boolean`

#### Inherited from

IOptions.debug

#### Defined in

node_modules/@types/glob/index.d.ts:46

___

### dot

• `Optional` **dot**: `boolean`

#### Inherited from

IOptions.dot

#### Defined in

node_modules/@types/glob/index.d.ts:32

___

### flipNegate

• `Optional` **flipNegate**: `boolean`

Returns from negate expressions the same as if they were not negated.
(Ie, true on a hit, false on a miss.)

**`default`** false

#### Inherited from

IOptions.flipNegate

#### Defined in

node_modules/@types/minimatch/index.d.ts:114

___

### follow

• `Optional` **follow**: `boolean`

#### Inherited from

IOptions.follow

#### Defined in

node_modules/@types/glob/index.d.ts:54

___

### fs

• `Optional` **fs**: `__module`

#### Inherited from

IOptions.fs

#### Defined in

node_modules/@types/glob/index.d.ts:59

___

### ignore

• `Optional` **ignore**: `string` \| readonly `string`[]

#### Inherited from

IOptions.ignore

#### Defined in

node_modules/@types/glob/index.d.ts:53

___

### mark

• `Optional` **mark**: `boolean`

#### Inherited from

IOptions.mark

#### Defined in

node_modules/@types/glob/index.d.ts:34

___

### matchBase

• `Optional` **matchBase**: `any`

#### Inherited from

IOptions.matchBase

#### Defined in

node_modules/@types/glob/index.d.ts:51

___

### nobrace

• `Optional` **nobrace**: `boolean`

#### Inherited from

IOptions.nobrace

#### Defined in

node_modules/@types/glob/index.d.ts:47

___

### nocase

• `Optional` **nocase**: `boolean`

#### Inherited from

IOptions.nocase

#### Defined in

node_modules/@types/glob/index.d.ts:50

___

### nocomment

• `Optional` **nocomment**: `boolean`

#### Inherited from

IOptions.nocomment

#### Defined in

node_modules/@types/glob/index.d.ts:57

___

### nodir

• `Optional` **nodir**: `boolean`

#### Inherited from

IOptions.nodir

#### Defined in

node_modules/@types/glob/index.d.ts:52

___

### noext

• `Optional` **noext**: `boolean`

#### Inherited from

IOptions.noext

#### Defined in

node_modules/@types/glob/index.d.ts:49

___

### noglobstar

• `Optional` **noglobstar**: `boolean`

#### Inherited from

IOptions.noglobstar

#### Defined in

node_modules/@types/glob/index.d.ts:48

___

### nomount

• `Optional` **nomount**: `boolean`

#### Inherited from

IOptions.nomount

#### Defined in

node_modules/@types/glob/index.d.ts:33

___

### nonegate

• `Optional` **nonegate**: `boolean`

#### Inherited from

IOptions.nonegate

#### Defined in

node_modules/@types/glob/index.d.ts:56

___

### nonull

• `Optional` **nonull**: `boolean`

#### Inherited from

IOptions.nonull

#### Defined in

node_modules/@types/glob/index.d.ts:45

___

### nosort

• `Optional` **nosort**: `boolean`

#### Inherited from

IOptions.nosort

#### Defined in

node_modules/@types/glob/index.d.ts:35

___

### nounique

• `Optional` **nounique**: `boolean`

#### Inherited from

IOptions.nounique

#### Defined in

node_modules/@types/glob/index.d.ts:44

___

### realpath

• `Optional` **realpath**: `boolean`

#### Inherited from

IOptions.realpath

#### Defined in

node_modules/@types/glob/index.d.ts:55

___

### realpathCache

• `Optional` **realpathCache**: `Object`

#### Index signature

▪ [path: `string`]: `string`

#### Inherited from

IOptions.realpathCache

#### Defined in

node_modules/@types/glob/index.d.ts:42

___

### root

• `Optional` **root**: `string`

#### Inherited from

IOptions.root

#### Defined in

node_modules/@types/glob/index.d.ts:31

___

### silent

• `Optional` **silent**: `boolean`

#### Inherited from

IOptions.silent

#### Defined in

node_modules/@types/glob/index.d.ts:37

___

### stat

• `Optional` **stat**: `boolean`

#### Inherited from

IOptions.stat

#### Defined in

node_modules/@types/glob/index.d.ts:36

___

### statCache

• `Optional` **statCache**: `Object`

#### Index signature

▪ [path: `string`]: ``false`` \| { `isDirectory`: () => `boolean`  } \| `undefined`

#### Inherited from

IOptions.statCache

#### Defined in

node_modules/@types/glob/index.d.ts:40

___

### strict

• `Optional` **strict**: `boolean`

#### Inherited from

IOptions.strict

#### Defined in

node_modules/@types/glob/index.d.ts:38

___

### symlinks

• `Optional` **symlinks**: `Object`

#### Index signature

▪ [path: `string`]: `boolean` \| `undefined`

#### Inherited from

IOptions.symlinks

#### Defined in

node_modules/@types/glob/index.d.ts:41

___

### sync

• `Optional` **sync**: `boolean`

#### Inherited from

IOptions.sync

#### Defined in

node_modules/@types/glob/index.d.ts:43
