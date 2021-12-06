export function usage(text: string, append:boolean=false): ClassDecorator {
    return Target => {
        Reflect.defineMetadata('usage', {text,append}, Target.prototype);
        return Target;
    };
}
