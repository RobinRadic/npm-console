[@radic/console-output](../README.md) / WrapOptions

# Interface: WrapOptions

## Table of contents

### Properties

- [hard](WrapOptions.md#hard)
- [trim](WrapOptions.md#trim)
- [wordWrap](WrapOptions.md#wordwrap)

## Properties

### hard

• `Optional` **hard**: `boolean`

By default the wrap is soft, meaning long words may extend past the column width. Setting this to true will make it hard wrap at the column width.
default: false

#### Defined in

[packages/console-output/src/interfaces.ts:47](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L47)

___

### trim

• `Optional` **trim**: `boolean`

Whitespace on all lines is removed by default. Set this option to false if you don't want to trim.
default: true

#### Defined in

[packages/console-output/src/interfaces.ts:58](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L58)

___

### wordWrap

• `Optional` **wordWrap**: `boolean`

By default, an attempt is made to split words at spaces, ensuring that they don't extend past the configured columns.
If wordWrap is false, each column will instead be completely filled splitting words as necessary.
default: true

#### Defined in

[packages/console-output/src/interfaces.ts:53](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L53)
