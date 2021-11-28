[@radic/console-output](../README.md) / ProgressBarOptions

# Interface: ProgressBarOptions

## Hierarchy

- `Partial`<`BaseProgressBarOptions`\>

  ↳ **`ProgressBarOptions`**

## Table of contents

### Properties

- [callback](ProgressBarOptions.md#callback)
- [clear](ProgressBarOptions.md#clear)
- [complete](ProgressBarOptions.md#complete)
- [curr](ProgressBarOptions.md#curr)
- [format](ProgressBarOptions.md#format)
- [head](ProgressBarOptions.md#head)
- [incomplete](ProgressBarOptions.md#incomplete)
- [output](ProgressBarOptions.md#output)
- [renderThrottle](ProgressBarOptions.md#renderthrottle)
- [stream](ProgressBarOptions.md#stream)
- [style](ProgressBarOptions.md#style)
- [total](ProgressBarOptions.md#total)
- [width](ProgressBarOptions.md#width)

## Properties

### callback

• `Optional` **callback**: `Function`

Optional function to call when the progress bar completes.

#### Inherited from

Partial.callback

#### Defined in

node_modules/@types/progress/index.d.ts:146

___

### clear

• `Optional` **clear**: `boolean`

Option to clear the bar on completion defaulting to false.

#### Inherited from

Partial.clear

#### Defined in

node_modules/@types/progress/index.d.ts:141

___

### complete

• `Optional` **complete**: `string`

Completion character defaulting to "=".

#### Inherited from

Partial.complete

#### Defined in

node_modules/@types/progress/index.d.ts:131

___

### curr

• `Optional` **curr**: `number`

current completed index

#### Inherited from

Partial.curr

#### Defined in

node_modules/@types/progress/index.d.ts:106

___

### format

• `Optional` **format**: `string`

#### Defined in

[packages/console-output/src/ui/ProgressBar.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/ProgressBar.ts#L9)

___

### head

• `Optional` **head**: `string`

head character defaulting to complete character

#### Inherited from

Partial.head

#### Defined in

node_modules/@types/progress/index.d.ts:111

___

### incomplete

• `Optional` **incomplete**: `string`

Incomplete character defaulting to "-".

#### Inherited from

Partial.incomplete

#### Defined in

node_modules/@types/progress/index.d.ts:136

___

### output

• `Optional` **output**: [`OutputConfig`](OutputConfig.md)

#### Defined in

[packages/console-output/src/ui/ProgressBar.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/ProgressBar.ts#L10)

___

### renderThrottle

• `Optional` **renderThrottle**: `number`

minimum time between updates in milliseconds defaulting to 16

#### Inherited from

Partial.renderThrottle

#### Defined in

node_modules/@types/progress/index.d.ts:121

___

### stream

• `Optional` **stream**: `WritableStream`

The output stream defaulting to stderr.

#### Inherited from

Partial.stream

#### Defined in

node_modules/@types/progress/index.d.ts:126

___

### style

• `Optional` **style**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor?` | `string` |
| `barColor?` | `string` |
| `barFigure?` | keyof [`Figures`](Figures.md) |
| `borderColor?` | `string` |
| `borderFigure?` | keyof [`Figures`](Figures.md) |

#### Defined in

[packages/console-output/src/ui/ProgressBar.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/ProgressBar.ts#L11)

___

### total

• `Optional` **total**: `number`

Total number of ticks to complete.

#### Inherited from

Partial.total

#### Defined in

node_modules/@types/progress/index.d.ts:101

___

### width

• `Optional` **width**: `number`

The displayed width of the progress bar defaulting to total.

#### Inherited from

Partial.width

#### Defined in

node_modules/@types/progress/index.d.ts:116
