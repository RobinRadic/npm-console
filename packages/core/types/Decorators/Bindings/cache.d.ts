import { Constructor } from '@radic/shared';
import { CacheAdapter } from '../../Cache';
import { Bindings } from '../../Foundation';
export declare const caching: (name: string, Adapter?: Constructor<CacheAdapter>) => (target: any, key: string) => void;
export declare type caching = CacheAdapter;
export declare const cache: (proto: any, key: string) => void;
export declare type cache = Bindings['cache'];
