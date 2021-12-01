export function example(example: string, description: string): ClassDecorator {
    return Target => {
        if ( !Reflect.hasMetadata('examples', Target.prototype) ) {
            Reflect.defineMetadata('examples', [], Target.prototype);
        }
        const examples: any[] = Reflect.getMetadata('examples', Target.prototype);
        examples.push({ example, description });
        Reflect.defineMetadata('examples', examples, Target.prototype);
        return Target;
    };
}

export function examples(examples: Record<string,string>): ClassDecorator {
    return Target => {
        if ( !Reflect.hasMetadata('examples', Target.prototype) ) {
            Reflect.defineMetadata('examples', [], Target.prototype);
        }
        const _examples: any[] = Reflect.getMetadata('examples', Target.prototype);
        Object.entries(examples).forEach(([example, description]) => {
            _examples.push({ example, description });
        })
        Reflect.defineMetadata('examples', _examples, Target.prototype);
        return Target;
    };
}
