[@radic/core](../README.md) / Process

# Class: Process

## Table of contents

### Constructors

- [constructor](Process.md#constructor)

### Properties

- [instances](Process.md#instances)
- [manager](Process.md#manager)
- [name](Process.md#name)
- [path](Process.md#path)

### Methods

- [refresh](Process.md#refresh)

## Constructors

### constructor

• **new Process**(`manager`, `path`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`ProcessManager`](ProcessManager.md) |
| `path` | `string` |

#### Defined in

[packages/core/src/System/Process.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/Process.ts#L35)

## Properties

### instances

• **instances**: { `command`: `string` ; `cpu`: `number` ; `cpus`: `number` ; `cpuu`: `number` ; `mem`: `number` ; `memRss`: `number` ; `memVsz`: `number` ; `nice`: `number` ; `params`: `string` ; `parentPid`: `number` ; `pid`: `number` ; `pids`: `number`[] ; `priority`: `number` ; `proc`: `string` ; `started`: `string` ; `state`: `string` ; `tty`: `string` ; `user`: `string`  }[] = `[]`

#### Defined in

[packages/core/src/System/Process.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/Process.ts#L7)

___

### manager

• `Protected` **manager**: [`ProcessManager`](ProcessManager.md)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/core/src/System/Process.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/Process.ts#L6)

___

### path

• `Readonly` **path**: `string`

## Methods

### refresh

▸ **refresh**(): `Promise`<[`Process`](Process.md)\>

#### Returns

`Promise`<[`Process`](Process.md)\>

#### Defined in

[packages/core/src/System/Process.ts:39](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/Process.ts#L39)
