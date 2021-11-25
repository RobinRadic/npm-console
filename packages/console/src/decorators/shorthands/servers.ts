// lazy shorthands
import { Bindings, inject } from '../../core';

export const servers = inject('servers');
export type servers = Bindings['servers']
