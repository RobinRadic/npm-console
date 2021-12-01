export function usage(usage: string): ClassDecorator {
    return Target => {
        Reflect.defineMetadata('usage', usage, Target.prototype);
        return Target;
    };
}
