import { makeBin } from '@radic/core';

export const phpenmod  = makeBin<string[], { v?: 'all' | string, s?: 'cli' | 'fpm' | 'all' | string[] | string }>('/usr/sbin/phpenmod', { s: 'all' });
export const phpdismod = makeBin<string[], { v?: 'all' | string, s?: 'cli' | 'fpm' | 'all' | string[] | string }>('/usr/sbin/phpdismod', { s: 'all' });
