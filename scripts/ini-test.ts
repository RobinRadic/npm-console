import {encode} from 'ini';

const obj={
    root       : true,
    [ '*' ]    : {
        charset                 : 'utf-8',
        end_of_line             : 'lf',
        indent_style            : 'space',
        indent_size             : 4,
        trim_trailing_whitespace: true,
        insert_final_newline    : true,
    },
    [ '*.yml' ]: {
        indent_size: 2,
    },
}

let str = encode(obj,{
    whitespace:true
})

str=str.replace(/^\[(.*)(\*)\\(\..*)\]$/gm,'[$1$2$3]')

console.log(str);
