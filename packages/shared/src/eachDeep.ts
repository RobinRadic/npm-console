import { trim,forOwn,isObject,isArray,isString,identity,merge,indexOf } from 'lodash';

export interface KeysDeepOptions extends EachDeepOptions {

    checkCircular      ?: boolean,
    includeCircularPath?: boolean,
}
export interface EachDeepOptions {
    track?:boolean
    parents?:{
        values?:any[]
        keys?:any[]
        paths?:any[]
    }
}

function iterate(
    obj,
    path,
    depth,
    parent,
    parentKey,
    parentPath,
    callback,
    options,
) {
    path       = trim(path, '.');
    parentPath = trim(parentPath, '.');
    if ( options.track ) {
        options.parents.values.push(parent);
        options.parents.keys.push(parentKey);
        options.parents.paths.push(parentPath);
    }
    if ( !isObject(obj) ) {
        return;
    }
    forOwn(obj, function (value, key) {
        var okey = key;
        if ( isArray(obj) ) {
            key = '[' + key + ']';
        } else {
            if ( isString(key) && key.match(/^[a-zA-Z_$]+([\w_$]*)$/) ) {
                key = '.' + key;
            } else {
                key = '["' + key + '"]';
            }
        }
        var currentPath = trim(path + key, '.');
        var res         = callback(
            value,
            okey,
            currentPath,
            depth,
            obj,
            parentKey,
            trim(path, '.'),
            options.parents,
        );
        if ( res !== false && isObject(value) ) {
            iterate(
                value,
                path + key,
                depth + 1,
                obj,
                okey,
                path,
                callback,
                options,
            );
        }
    });
    if ( options.track ) {
        options.parents.values.pop();
        options.parents.keys.pop();
        options.parents.paths.pop();
    }
}

export type EachDeepCallback =(value:any, key:string, path:string, depth:number, parent:any, parentKey:string, parentPath:string, parents:{keys:string[],paths:string[],values:any[]}) => false|void

export function eachDeep<T extends object>(obj:T, callback:EachDeepCallback, options?:EachDeepOptions) {
    if ( callback === undefined ) callback = identity;
    options = merge(
        {
            track: false,
        },
        options || {},
    );
    if ( options.track ) {
        options.parents = { keys: [], paths: [], values: [] };
    }
    iterate(obj, '', 0, null, '', '', callback, options);
    return obj;
}

export function keysDeep(obj:object, options?:KeysDeepOptions) {
    options             = merge(
        {
            checkCircular      : false,
            includeCircularPath: true,
        },
        options || {},
    );
    var eachDeepOptions = {
        track: options.checkCircular,
    };
    var res             = [];
    eachDeep(
        obj,
        function (
            value,
            key,
            path,
            depth,
            parent,
            parentKey,
            parentPath,
            parents,
        ) {
            var circular = false;
            if ( options.checkCircular ) {
                circular = indexOf(parents.values, value) !== - 1;
            }
            if ( !circular || options.includeCircularPath ) {
                res.push(path);
            }
            if ( circular ) {
                return false;
            }
        },
        eachDeepOptions
    );
    return res;
}

