import { resolve } from 'path';


export const createPath = (from: string) => (...parts: string[]) => resolve(from, ...parts);
