

declare module '@webantic/nginx-config-parser' {

    export class Parser {
        fileName
        serverRoot

        /**
         * To support including sub-configs, we need to get server root
         * @param fileName
         */
        setFileName (fileName:string)

        /**
         * @method resolve
         * @summary Retrieves a value from within an object using a dot-notation path
         * @param obj {Object} The object to search
         * @param path {String} The path to the value
         * @returns The found value, or `undefined`
         * @example
         *
         *    const myObject = {
         *      foo: {
         *        bar: 'baz'
         *      }
         *    };
         *    resolve(myObject, 'foo.bar') // returns 'baz'
         *
         */
        resolve (obj:any, path:string)

        /**
         * @method resolveSet
         * @summary Sets a value within an object using a dot-notation path
         * @param obj {Object} The object to store/update the value in
         * @param path {String} The path to the value
         * @param val {Mixed} The value to store
         * @returns {Boolean} Whether the operation was successful
         * @example
         *
         *     const myObject = {
         *       foo: {
         *         bar: 'baz'
         *       }
         *     };
         *     resolveSet(myObject, 'foo.bar', 999) // myObject.foo.bar === 999
         *
         */
        resolveSet (obj:any, path:string, val:any):any

        /**
         * Read and parse a file from the filesystem
         *
         * @param {string} fileName the path to the file
         * @param {function} [cb] a callback function. invoked with an error or a parsed config
         * @param {Object} [options] optional parse options
         * @param {boolean} [options.parseIncludes] If `true`, will resolve and include
         * referenced files' contents in the output
         * @returns {object} a parsed config if no callback is provided
         */
        readConfigFile (fileName:string, cb:Function, options?:{parseIncludes?:boolean}):any

        /**
         * Write a config object to a file on the filesystem
         *
         * @param {string} fileName a file on the filesystem
         * @param {any} data the config object
         * @param {boolean} [overwrite=false] whether to overwrite an existing file
         * @param {any} [cb] a callback to be called after writing
         * @returns
         */
        writeConfigFile (fileName:string, data:any, overwrite?:boolean, cb?:Function)

        /**
         * @method parse
         * @summary Wrapper function which determines the input type and calls
         * the relevant parsing function
         * @param {Object | string} mixed The input source to be converted
         * @param {Object} [options] optional parse options
         * @param {boolean} [options.parseIncludes] If `true`, will resolve and include
         * referenced files' contents in the output
         * @param {string} [options.includesRoot] An optional root path to resolve includes from
         * @returns {Object | string} The converted input
         * @throws {TypeError} If type of `mixed` isn't either Object or String
         * @example
         *
         *     const myObject = require('./sampleJSON')
         *     parse(myObject) // returns config string
         *
         */
        parse (mixed:any, options?:{parseIncludes?:boolean,includesRoot?:string}):any

        /**
         * @method toJSON
         * @summary Converts a config string into a JS object
         * @param conf {String} The nginx config string
         * @param {Object} [options] optional parse options
         * @param {boolean} [options.parseIncludes] If `true`, will resolve and include
         * referenced files' contents in the output
         * @param {string} [options.includesRoot] An optional root path to resolve includes from
         * @returns {Object} The converted input
         * @example
         *
         *     const myConfString = require('./sampleconf')
         *     toJSON(myConfString) // returns JS object
         *
         */
        toJSON (conf:string,options?:{parseIncludes?:boolean,includesRoot?:string}):any

        /**
         * Resolve setting value with merging existing value and converting it
         * to array. When true is returned, an array was used
         * @return bool
         */

        resolveAppendSet (json:any, key:any, val:any)

        /**
         * Appends given value into json with parent detection -> resolveSet or resolve
         *
         * @param {Object} json
         * @param {string} key
         * @param val
         * @param {string} parent
         */
        appendValue (json:any, key:string, val:any, parent?:string)

        /**
         * @method toConf
         * @summary Converts a JS object into a config string
         * @param json {Object} The nginx config represented as a JS object
         * @returns {String} The converted input
         * @example
         *
         *     const myJSObject = require('./samplejson')
         *     toConf(myJSObject) // returns a config string
         *
         */
        toConf (json:any):string
    }

    export default Parser
}
