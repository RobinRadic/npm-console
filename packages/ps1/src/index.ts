export const helloWorld = 'helloWorld'
import chalk from 'chalk'
const replaceToPS1 = (text:string) => text.replace(/\[([\d;]+)m/gm, '\\[\\e[$1m\\]').replace(//g, '');

console.log(replaceToPS1(chalk.bgGray.red(' hello ')+chalk.reset(' ')));
