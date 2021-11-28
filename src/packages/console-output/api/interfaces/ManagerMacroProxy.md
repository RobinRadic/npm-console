[@radic/console-output](../README.md) / ManagerMacroProxy

# Interface: ManagerMacroProxy<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [hasMacro](ManagerMacroProxy.md#hasmacro)
- [macro](ManagerMacroProxy.md#macro)
- [runMacro](ManagerMacroProxy.md#runmacro)

## Methods

### hasMacro

▸ **hasMacro**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/utils/managerProxy.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/managerProxy.ts#L9)

___

### macro

▸ **macro**(`name`, `macro`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `macro` | [`ManagerMacroCallback`](../README.md#managermacrocallback)<`T`\> |

#### Returns

`T`

#### Defined in

[packages/console-output/src/utils/managerProxy.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/managerProxy.ts#L7)

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

#### Defined in

[packages/console-output/src/utils/managerProxy.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/managerProxy.ts#L11)
