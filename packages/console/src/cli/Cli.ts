import Argv from './Argv'

import { CliInstance } from './CliInstance';


export interface Cli extends CliInstance {

}
const cli:Cli=Argv;

export default cli;
