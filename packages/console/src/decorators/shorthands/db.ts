
// lazy shorthands
import { Bindings, inject } from '../../core/Foundation';

export const db = inject('db');
export type db = Bindings['db']
