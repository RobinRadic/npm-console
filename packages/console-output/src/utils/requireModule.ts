import { isModuleInstalled } from './isModuleInstalled';

export const requireModule     = (name: string, context?: string) => {
    if ( !isModuleInstalled(name) ) {
        throw new Error(`Package "${name}" is not installed but needed for this function. ${context}`);
    }
    return require(name);
};
