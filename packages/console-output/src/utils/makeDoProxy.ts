
export function makeDoProxy(target, write, returnValue) {
    const proxy = new Proxy(target, {
        get(target: any, p: PropertyKey, receiver: any): any {
            return (...args) => {
                let value = target[ p ];
                if ( typeof value === 'function' ) {
                    value = value(...args);
                }
                write(value);
                return returnValue;
            };
        },
    });
    return proxy as any;
}

