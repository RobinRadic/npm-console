// lazy shorthands
import { Bindings, inject } from '@radic/core';

export const servers = inject('servers');
export type servers = Bindings['servers']

export const php = inject('php');
export type php = Bindings['php']

export const hostfile = inject('hostfile');
export type hostfile = Bindings['hostfile']
