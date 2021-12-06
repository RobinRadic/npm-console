import { TSconfigJson } from '../types';
import { AbstractJsonFileReader } from './AbstractJsonFileReader';

export class TypescriptConfigFileReader<T extends TSconfigJson = TSconfigJson> extends AbstractJsonFileReader<T> {

}
