const KNOWN_STATICS = {
    name     : true,
    length   : true,
    prototype: true,
    caller   : true,
    callee   : true,
    arguments: true,
    arity    : true,
};


const TYPE_STATICS = {};

const defineProperty           = Object.defineProperty;
const getOwnPropertyNames      = Object.getOwnPropertyNames;
const getOwnPropertySymbols    = Object.getOwnPropertySymbols;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const getPrototypeOf           = Object.getPrototypeOf;
const objectPrototype          = Object.prototype;

export function hoistStatics(targetComponent: object, sourceComponent: object, excludelist: Record<string, boolean> = {}) {
    if ( typeof sourceComponent !== 'string' ) { // don't hoist over string (html) components

        if ( objectPrototype ) {
            const inheritedComponent = getPrototypeOf(sourceComponent);
            if ( inheritedComponent && inheritedComponent !== objectPrototype ) {
                hoistStatics(targetComponent, inheritedComponent, excludelist);
            }
        }

        let keys = getOwnPropertyNames(sourceComponent);

        if ( getOwnPropertySymbols ) {
            keys = keys.concat(...getOwnPropertySymbols(sourceComponent) as any);
        }


        for ( let i = 0; i < keys.length; ++ i ) {
            const key = keys[ i ];
            if ( !KNOWN_STATICS[ key ] && !(excludelist && excludelist[ key ]) ) {
                const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }

    return targetComponent;
};
