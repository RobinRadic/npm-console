import Argv from './Argv'

import { CliInstance } from './CliInstance';


export interface Cli extends CliInstance {

}
export const cli:Cli=Argv;

export default cli;
