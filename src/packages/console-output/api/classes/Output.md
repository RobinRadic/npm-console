[@radic/console-output](../README.md) / Output

# Class: Output

## Hierarchy

- [`MacroProxy`](../interfaces/MacroProxy.md)<[`Output`](Output.md)\>

  ↳ **`Output`**

## Table of contents

### Constructors

- [constructor](Output.md#constructor)

### Properties

- [colors](Output.md#colors)
- [figures](Output.md#figures)
- [icons](Output.md#icons)
- [options](Output.md#options)
- [parsers](Output.md#parsers)
- [stderr](Output.md#stderr)
- [stdin](Output.md#stdin)
- [stdout](Output.md#stdout)
- [styles](Output.md#styles)
- [ui](Output.md#ui)
- [util](Output.md#util)
- [defaultOptions](Output.md#defaultoptions)

### Accessors

- [chain](Output.md#chain)
- [colorsEnabled](Output.md#colorsenabled)
- [isSilent](Output.md#issilent)
- [nl](Output.md#nl)

### Methods

- [addDefaultParsers](Output.md#adddefaultparsers)
- [clean](Output.md#clean)
- [configure](Output.md#configure)
- [disableColors](Output.md#disablecolors)
- [dump](Output.md#dump)
- [enableColors](Output.md#enablecolors)
- [hasMacro](Output.md#hasmacro)
- [line](Output.md#line)
- [macro](Output.md#macro)
- [parse](Output.md#parse)
- [runMacro](Output.md#runmacro)
- [silence](Output.md#silence)
- [styled](Output.md#styled)
- [unsilence](Output.md#unsilence)
- [write](Output.md#write)
- [writeln](Output.md#writeln)

## Constructors

### constructor

• **new Output**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OutputOptions`](../interfaces/OutputOptions.md) |

#### Inherited from

MacroProxy<Output\>.constructor

#### Defined in

[packages/console-output/src/Output.ts:42](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L42)

## Properties

### colors

• **colors**: [`Colors`](Colors.md)

#### Defined in

[packages/console-output/src/Output.ts:22](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L22)

___

### figures

• **figures**: [`Figures`](../interfaces/Figures.md) = `figures`

#### Defined in

[packages/console-output/src/Output.ts:23](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L23)

___

### icons

• **icons**: [`IconGenerator`](IconGenerator.md)

#### Defined in

[packages/console-output/src/Output.ts:26](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L26)

___

### options

• `Readonly` **options**: [`OutputOptions`](../interfaces/OutputOptions.md) = `{}`

___

### parsers

• `Readonly` **parsers**: `Map`<`string`, [`IParser`](../interfaces/IParser.md)\>

#### Defined in

[packages/console-output/src/Output.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L20)

___

### stderr

• **stderr**: `WritableStream` = `process.stderr`

#### Defined in

[packages/console-output/src/Output.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L18)

___

### stdin

• **stdin**: `ReadableStream` = `process.stdin`

#### Defined in

[packages/console-output/src/Output.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L16)

___

### stdout

• **stdout**: `WritableStream` = `process.stdout`

#### Defined in

[packages/console-output/src/Output.ts:17](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L17)

___

### styles

• **styles**: [`StyleManager`](StyleManager.md)<[`StyleName`](../README.md#stylename)\>

#### Defined in

[packages/console-output/src/Output.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L21)

___

### ui

• `Readonly` **ui**: [`Ui`](Ui.md)

#### Defined in

[packages/console-output/src/Output.ts:24](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L24)

___

### util

• `Readonly` **util**: [`OutputUtil`](OutputUtil.md)

#### Defined in

[packages/console-output/src/Output.ts:25](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L25)

___

### defaultOptions

▪ `Static` **defaultOptions**: [`OutputOptions`](../interfaces/OutputOptions.md)

#### Defined in

[packages/console-output/src/Output.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L28)

## Accessors

### chain

• `get` **chain**(): [`Chain`](../README.md#chain)

#### Returns

[`Chain`](../README.md#chain)

#### Defined in

[packages/console-output/src/Output.ts:65](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L65)

___

### colorsEnabled

• `get` **colorsEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/Output.ts:109](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L109)

___

### isSilent

• `get` **isSilent**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/Output.ts:110](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L110)

___

### nl

• `get` **nl**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/Output.ts:63](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L63)

## Methods

### addDefaultParsers

▸ **addDefaultParsers**(): `void`

#### Returns

`void`

#### Defined in

[packages/console-output/src/Output.ts:57](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L57)

___

### clean

▸ **clean**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/Output.ts:78](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L78)

___

### configure

▸ **configure**(`options`): [`Output`](Output.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`OutputOptions`](../interfaces/OutputOptions.md)\> |

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:51](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L51)

___

### disableColors

▸ **disableColors**(): [`Output`](Output.md)

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:112](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L112)

___

### dump

▸ **dump**(...`args`): [`Output`](Output.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:103](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L103)

___

### enableColors

▸ **enableColors**(): [`Output`](Output.md)

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:111](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L111)

___

### hasMacro

▸ **hasMacro**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[hasMacro](../interfaces/MacroProxy.md#hasmacro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L9)

___

### line

▸ **line**(`text?`): [`Output`](Output.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `''` |

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:101](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L101)

___

### macro

▸ **macro**(`name`, `macro`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `macro` | [`MacroCallback`](../README.md#macrocallback)<`any`\> |

#### Returns

`any`

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[macro](../interfaces/MacroProxy.md#macro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L7)

___

### parse

▸ **parse**(`text`, `force?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `force?` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/Output.ts:73](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L73)

___

### runMacro

▸ **runMacro**(`name`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[runMacro](../interfaces/MacroProxy.md#runmacro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L11)

___

### silence

▸ **silence**(): [`Output`](Output.md)

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:113](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L113)

___

### styled

▸ **styled**(`name`, `text`): [`Output`](Output.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`StyleName`](../README.md#stylename) |
| `text` | `string` |

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:67](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L67)

___

### unsilence

▸ **unsilence**(): [`Output`](Output.md)

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:114](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L114)

___

### write

▸ **write**(`text`): [`Output`](Output.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:83](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L83)

___

### writeln

▸ **writeln**(`text?`): [`Output`](Output.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `''` |

#### Returns

[`Output`](Output.md)

#### Defined in

[packages/console-output/src/Output.ts:92](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/Output.ts#L92)
