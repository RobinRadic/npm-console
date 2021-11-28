[@radic/console-output](../README.md) / IconGenerator

# Class: IconGenerator

## Table of contents

### Constructors

- [constructor](IconGenerator.md#constructor)

### Properties

- [\_findIconDefinition](IconGenerator.md#_findicondefinition)
- [library](IconGenerator.md#library)
- [options](IconGenerator.md#options)
- [prefixes](IconGenerator.md#prefixes)
- [sharp](IconGenerator.md#sharp)

### Methods

- [addDefaultIconPacks](IconGenerator.md#adddefaulticonpacks)
- [addIconPacks](IconGenerator.md#addiconpacks)
- [createSvgBufferFromIcon](IconGenerator.md#createsvgbufferfromicon)
- [findIcon](IconGenerator.md#findicon)
- [findIconDefinition](IconGenerator.md#findicondefinition)
- [generate](IconGenerator.md#generate)
- [getIconFromDefinition](IconGenerator.md#geticonfromdefinition)
- [notify](IconGenerator.md#notify)

## Constructors

### constructor

• **new IconGenerator**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IconsOptions`](../interfaces/IconsOptions.md) |

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:40](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L40)

## Properties

### \_findIconDefinition

• `Protected` **\_findIconDefinition**: (`lookup`: `IconLookup`) => `IconDefinition`

#### Type declaration

▸ (`lookup`): `IconDefinition`

##### Parameters

| Name | Type |
| :------ | :------ |
| `lookup` | `IconLookup` |

##### Returns

`IconDefinition`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:37](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L37)

___

### library

• `Readonly` **library**: `Library`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:36](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L36)

___

### options

• **options**: [`IconsOptions`](../interfaces/IconsOptions.md)

___

### prefixes

• `Readonly` **prefixes**: `IconPrefix`[] = `[]`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L35)

___

### sharp

• `Protected` **sharp**: (`options?`: `SharpOptions`) => `Sharp`

#### Type declaration

▸ (`options?`): `Sharp`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SharpOptions` |

##### Returns

`Sharp`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:38](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L38)

## Methods

### addDefaultIconPacks

▸ **addDefaultIconPacks**(): [`IconGenerator`](IconGenerator.md)

#### Returns

[`IconGenerator`](IconGenerator.md)

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:57](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L57)

___

### addIconPacks

▸ **addIconPacks**(`packs`): [`IconGenerator`](IconGenerator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packs` | `Record`<`string`, `IconPack`\> |

#### Returns

[`IconGenerator`](IconGenerator.md)

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:47](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L47)

___

### createSvgBufferFromIcon

▸ **createSvgBufferFromIcon**(`icon`, `stroke?`, `fill?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | [`IconData`](../interfaces/IconData.md) |
| `stroke?` | `string` |
| `fill?` | `string` |

#### Returns

`Buffer`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:117](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L117)

___

### findIcon

▸ **findIcon**(`iconName`, `prefix?`): [`IconData`](../interfaces/IconData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iconName` | `IconName` |
| `prefix?` | `IconPrefix` |

#### Returns

[`IconData`](../interfaces/IconData.md)

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:96](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L96)

___

### findIconDefinition

▸ `Protected` **findIconDefinition**(`iconName`, `prefix?`): `IconDefinition`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iconName` | `IconName` |
| `prefix?` | `IconPrefix` |

#### Returns

`IconDefinition`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:103](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L103)

___

### generate

▸ **generate**(`icon`, `options?`): `Promise`<[`GeneratedIcon`](GeneratedIcon.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | [`IconData`](../interfaces/IconData.md) |
| `options` | [`GenerateOptions`](../interfaces/GenerateOptions.md) |

#### Returns

`Promise`<[`GeneratedIcon`](GeneratedIcon.md)\>

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:71](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L71)

___

### getIconFromDefinition

▸ **getIconFromDefinition**(`definition`): [`IconData`](../interfaces/IconData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `IconDefinition` |

#### Returns

[`IconData`](../interfaces/IconData.md)

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:128](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L128)

___

### notify

▸ **notify**(`color?`, `iconName`, `iconPrefix?`): `Promise`<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | `string` | `'white'` |
| `iconName` | `IconName` | `undefined` |
| `iconPrefix?` | `IconPrefix` | `undefined` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:65](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L65)
