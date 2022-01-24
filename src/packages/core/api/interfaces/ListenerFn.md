[@radic/core](../README.md) / ListenerFn

# Interface: ListenerFn<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`DispatcherEvents`](DispatcherEvents.md) |

## Callable

### ListenerFn

▸ **ListenerFn**(...`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | [`DispatcherEvents`](DispatcherEvents.md)[`T`] |

#### Returns

`void`

#### Defined in

[packages/core/src/Dispatcher/Dispatcher.ts:63](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Dispatcher/Dispatcher.ts#L63)
