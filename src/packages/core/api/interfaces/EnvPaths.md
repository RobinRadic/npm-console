[@radic/core](../README.md) / EnvPaths

# Interface: EnvPaths

## Table of contents

### Properties

- [cache](EnvPaths.md#cache)
- [config](EnvPaths.md#config)
- [data](EnvPaths.md#data)
- [log](EnvPaths.md#log)
- [temp](EnvPaths.md#temp)

## Properties

### cache

• `Readonly` **cache**: `string`

Directory for non-essential data files.
Example locations (with the default `nodejs` suffix):
- macOS: `~/Library/Caches/MyApp-nodejs`
- Windows: `%LOCALAPPDATA%\MyApp-nodejs\Cache` (for example, `C:\Users\USERNAME\AppData\Local\MyApp-nodejs\Cache`)
- Linux: `~/.cache/MyApp-nodejs` (or `$XDG_CACHE_HOME/MyApp-nodejs`)

#### Defined in

[packages/core/src/Support/envPaths.ts:121](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/envPaths.ts#L121)

___

### config

• `Readonly` **config**: `string`

Directory for data files.
Example locations (with the default `nodejs` suffix):
- macOS: `~/Library/Preferences/MyApp-nodejs`
- Windows: `%APPDATA%\MyApp-nodejs\Config` (for example, `C:\Users\USERNAME\AppData\Roaming\MyApp-nodejs\Config`)
- Linux: `~/.config/MyApp-nodejs` (or `$XDG_CONFIG_HOME/MyApp-nodejs`)

#### Defined in

[packages/core/src/Support/envPaths.ts:112](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/envPaths.ts#L112)

___

### data

• `Readonly` **data**: `string`

Directory for data files.
Example locations (with the default `nodejs` suffix):
- macOS: `~/Library/Application Support/MyApp-nodejs`
- Windows: `%LOCALAPPDATA%\MyApp-nodejs\Data` (for example, `C:\Users\USERNAME\AppData\Local\MyApp-nodejs\Data`)
- Linux: `~/.local/share/MyApp-nodejs` (or `$XDG_DATA_HOME/MyApp-nodejs`)

#### Defined in

[packages/core/src/Support/envPaths.ts:103](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/envPaths.ts#L103)

___

### log

• `Readonly` **log**: `string`

Directory for log files.
Example locations (with the default `nodejs` suffix):
- macOS: `~/Library/Logs/MyApp-nodejs`
- Windows: `%LOCALAPPDATA%\MyApp-nodejs\Log` (for example, `C:\Users\USERNAME\AppData\Local\MyApp-nodejs\Log`)
- Linux: `~/.local/state/MyApp-nodejs` (or `$XDG_STATE_HOME/MyApp-nodejs`)

#### Defined in

[packages/core/src/Support/envPaths.ts:130](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/envPaths.ts#L130)

___

### temp

• `Readonly` **temp**: `string`

Directory for temporary files.
Example locations (with the default `nodejs` suffix):
- macOS: `/var/folders/jf/f2twvvvs5jl_m49tf034ffpw0000gn/T/MyApp-nodejs`
- Windows: `%LOCALAPPDATA%\Temp\MyApp-nodejs` (for example, `C:\Users\USERNAME\AppData\Local\Temp\MyApp-nodejs`)
- Linux: `/tmp/USERNAME/MyApp-nodejs`

#### Defined in

[packages/core/src/Support/envPaths.ts:139](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/envPaths.ts#L139)
