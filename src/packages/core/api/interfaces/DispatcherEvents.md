[@radic/core](../README.md) / DispatcherEvents

# Interface: DispatcherEvents

Interface to augment from other scripts to provide code completion when using the dispatcher's methods.

eventname -> listener parameters

'Application:start': [Application]

## Table of contents

### Properties

- [Application:boot](DispatcherEvents.md#application:boot)
- [Application:bootProvider](DispatcherEvents.md#application:bootprovider)
- [Application:booted](DispatcherEvents.md#application:booted)
- [Application:bootedProvider](DispatcherEvents.md#application:bootedprovider)
- [Application:error](DispatcherEvents.md#application:error)
- [Application:exit](DispatcherEvents.md#application:exit)
- [Application:initialize](DispatcherEvents.md#application:initialize)
- [Application:initialize:defaultConfig](DispatcherEvents.md#application:initialize:defaultconfig)
- [Application:initialized](DispatcherEvents.md#application:initialized)
- [Application:loadProvider](DispatcherEvents.md#application:loadprovider)
- [Application:loadedProvider](DispatcherEvents.md#application:loadedprovider)
- [Application:registerProvider](DispatcherEvents.md#application:registerprovider)
- [Application:registerProviders](DispatcherEvents.md#application:registerproviders)
- [Application:registeredProviders](DispatcherEvents.md#application:registeredproviders)
- [Application:start](DispatcherEvents.md#application:start)
- [Application:started](DispatcherEvents.md#application:started)

## Properties

### Application:boot

• **Application:boot**: [[`Application`](../classes/Application.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:68](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L68)

___

### Application:bootProvider

• **Application:bootProvider**: [`ServiceProvider`]

#### Defined in

[packages/core/src/Foundation/Application.ts:69](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L69)

___

### Application:booted

• **Application:booted**: [[`Application`](../classes/Application.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:71](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L71)

___

### Application:bootedProvider

• **Application:bootedProvider**: [`ServiceProvider`]

#### Defined in

[packages/core/src/Foundation/Application.ts:70](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L70)

___

### Application:error

• **Application:error**: [`string`, [`ExitCode`](../enums/ExitCode.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:67](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L67)

___

### Application:exit

• **Application:exit**: [[`Application`](../classes/Application.md), [`ExitCode`](../enums/ExitCode.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:66](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L66)

___

### Application:initialize

• **Application:initialize**: [`ApplicationInitOptions`]

#### Defined in

[packages/core/src/Foundation/Application.ts:64](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L64)

___

### Application:initialize:defaultConfig

• **Application:initialize:defaultConfig**: [`Partial`<`Configuration`\>]

#### Defined in

[packages/core/src/Foundation/Application.ts:63](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L63)

___

### Application:initialized

• **Application:initialized**: [[`Application`](../classes/Application.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:65](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L65)

___

### Application:loadProvider

• **Application:loadProvider**: [`Constructor`<`ServiceProvider`\>]

#### Defined in

[packages/core/src/Foundation/Application.ts:74](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L74)

___

### Application:loadedProvider

• **Application:loadedProvider**: [`ServiceProvider`]

#### Defined in

[packages/core/src/Foundation/Application.ts:75](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L75)

___

### Application:registerProvider

• **Application:registerProvider**: [`Constructor`<`ServiceProvider`\>]

#### Defined in

[packages/core/src/Foundation/Application.ts:77](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L77)

___

### Application:registerProviders

• **Application:registerProviders**: [`Constructor`<`ServiceProvider`\>[]]

#### Defined in

[packages/core/src/Foundation/Application.ts:76](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L76)

___

### Application:registeredProviders

• **Application:registeredProviders**: [`ServiceProvider`]

#### Defined in

[packages/core/src/Foundation/Application.ts:78](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L78)

___

### Application:start

• **Application:start**: [[`Application`](../classes/Application.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:72](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L72)

___

### Application:started

• **Application:started**: [[`Application`](../classes/Application.md)]

#### Defined in

[packages/core/src/Foundation/Application.ts:73](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L73)
