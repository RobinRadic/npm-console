//https://github.com/Teun/thenBy.js

function identity(v){return v;}

function ignoreCase(v){return typeof(v)==="string" ? v.toLowerCase() : v;}

function makeCompareFunction(f, opt){
    opt = typeof(opt)==="object" ? opt : {direction:opt};

    if(typeof(f)!="function"){
        var prop = f;
        // make unary function
        f = function(v1){return !!v1[prop] ? v1[prop] : "";}
    }
    if(f.length === 1) {
        // f is a unary function mapping a single item to its sort score
        var uf = f;
        var preprocess = opt.ignoreCase?ignoreCase:identity;
        var cmp = opt.cmp || function(v1,v2) {return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;}
        f = function(v1,v2) {return cmp(preprocess(uf(v1)), preprocess(uf(v2)));}
    }
    const descTokens = {"-1":'', desc:''};
    if(opt.direction in descTokens) return function(v1,v2){return -f(v1,v2)};
    return f;
}

/* adds a secondary compare function to the target function (`this` context)
   which is applied in case the first one returns 0 (equal)
   returns a new compare function, which has a `thenBy` method as well */
function tb(func, opt) {
    /* should get value false for the first call. This can be done by calling the
    exported function, or the firstBy property on it (for es6 module compatibility)
    */
    var x = (typeof(this) == "function" && !this.firstBy) ? this : false;
    var y = makeCompareFunction(func, opt);
    var f = x ? function(a, b) {
                  return x(a,b) || y(a,b);
              }
              : y;
    f.thenBy = tb;
    return f;
}


type SortOrder =
    'asc'
    | 'desc'
    | - 1
    | 1;

declare class opt {
    direction?: SortOrder;
    ignoreCase?: boolean;
}

declare class typedOpt<T> extends opt {
    cmp?: (a: T, b: T) => number;
}

interface IThenBy<T> {
    (v1: T, v2: T): number;

    /**
     * Full format to compare two elements and determine which sorts first.
     * @param compare function that receives two values from the sorted array and returns a number indicating which comes first: < 0: first comes first, 0: doesn't matter, > 0: second comes first.
     * @param direction can be used to reverse the sorting by passing -1
     **/
    thenBy<T>(compare: ((v1: T, v2: T) => number), direction?: SortOrder | opt): IThenBy<T>;

    /**
     * Shorthand for selecting a value to sort on from the sorted element.
     * @param select function that receives a value from the sorted array and selects the thing to sort on
     * @param direction reverse by passing -1. opt for other options
     **/
    thenBy<T, U>(select: ((v: T) => U), direction?: SortOrder | typedOpt<U>): IThenBy<T>;

    /**
     * Shorthand for sorting on a simple property.
     * @param byPropertyName is the name of the property to sort on as a string
     * @param direction reverse by passing -1. opt for other options
     **/
    thenBy<T>(byPropertyName: (keyof T), direction?: SortOrder | typedOpt<any>): IThenBy<T>;
}


/**
 * Full format to compare two elements and determine which sorts first.
 * @param compare function that receives two values from the sorted array and returns a number indicating which comes first: < 0: first comes first, 0: doesn't matter, > 0: second comes first.
 * @param direction can be used to reverse the sorting by passing -1
 **/
export function firstBy<T>(compare: ((v1: T, v2: T) => number), direction?: SortOrder | opt): IThenBy<T>;
/**
 * Shorthand for selecting a value to sort on from the sorted element.
 * @param select function that receives a value from the sorted array and selects the thing to sort on
 * @param direction reverse by passing -1. opt for other options
 **/
export function firstBy<T, U>(select: ((v: T) => U), direction?: SortOrder | typedOpt<U>): IThenBy<T>;
/**
 * Shorthand for sorting on a simple property.
 * @param byPropertyName is the name of the property to sort on as a string
 * @param direction reverse by passing -1. opt for other options
 **/
export function firstBy<T>(byPropertyName: (keyof T), direction?: SortOrder | typedOpt<any>): IThenBy<T>;
export function firstBy(first: any, direction: any): any {
    return tb(first, direction);
}
