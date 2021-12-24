import { BlockType, TypeDefinitionBuilder } from '@radic/core';
import { Collected, NginxContext, ScrapedDirective, TypeOverrides } from './types';
export declare class TypeGenerator {
    protected collected: Collected;
    protected overrides: TypeOverrides;
    protected prefix: string;
    protected get directives(): Collected['directives'];
    protected get variables(): Collected['variables'];
    protected get contexts(): Collected['contexts'];
    protected get modules(): Collected['modules'];
    constructor(collected: Collected);
    mainContextDirectives: ScrapedDirective[];
    contextContextMap: Record<string, string[]>;
    contextDirectiveMaps: Record<string, ScrapedDirective[]>;
    protected generateMaps(): void;
    protected getContextInterfaceName(context: NginxContext): string;
    protected getContextTypeName(context: NginxContext): string;
    protected getDirectiveType(directive: ScrapedDirective): string;
    protected pushToModule(module: string, directive: ScrapedDirective): void;
    protected fixCollected(collected: Collected): Collected;
    generate(): Promise<string>;
    protected addDirectivesToBlock(block: TypeDefinitionBuilder, type: BlockType, name: string, directives: ScrapedDirective[]): string;
    protected addDirectiveToBlock(directive: ScrapedDirective, block: TypeDefinitionBuilder): void;
}
