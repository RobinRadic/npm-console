/// <reference types="node" />
import { IconDefinition, IconLookup, IconName, IconPack, IconPrefix, Library } from '@fortawesome/fontawesome';
import { Create, OutputInfo, OverlayOptions, PngOptions, Sharp, SharpOptions } from 'sharp';
export interface IconData extends IconLookup {
    width: number;
    height: number;
    ligatures: string[];
    unicode: string;
    svgPathData: string | string[];
}
export interface IconsOptions {
    cacheDir: string;
}
export interface GenerateOptions extends Partial<Omit<Create, 'channels' | 'background'>> {
    format: 'png' | 'gif' | 'jpeg';
    stroke?: string;
    fill?: string;
    background?: Create['background'];
    png?: PngOptions;
    gif?: PngOptions;
    jpeg?: PngOptions;
    modifier?: (icon: Sharp) => any;
    composite?: OverlayOptions;
    composites?: OverlayOptions[];
    sharp?: SharpOptions;
}
export declare class IconGenerator {
    options: IconsOptions;
    readonly prefixes: IconPrefix[];
    readonly library: Library;
    protected _findIconDefinition: (lookup: IconLookup) => IconDefinition;
    protected sharp: (options?: SharpOptions) => Sharp;
    constructor(options: IconsOptions);
    addIconPacks(packs: Record<IconPrefix | string, IconPack>): this;
    addDefaultIconPacks(): this;
    notify(color: string, iconName: IconName, iconPrefix?: IconPrefix): Promise<string>;
    generate(icon: IconData, options?: GenerateOptions): Promise<GeneratedIcon>;
    findIcon(iconName: IconName, prefix?: IconPrefix): IconData;
    protected findIconDefinition(iconName: IconName, prefix?: IconPrefix): IconDefinition;
    createSvgBufferFromIcon(icon: IconData, stroke?: string, fill?: string): Buffer;
    getIconFromDefinition(definition: IconDefinition): IconData;
}
export declare class GeneratedIcon implements OutputInfo {
    path: string;
    image: Sharp;
    protected info: OutputInfo;
    channels: 1 | 2 | 3 | 4;
    cropOffsetLeft: number | undefined;
    cropOffsetTop: number | undefined;
    format: string;
    height: number;
    premultiplied: boolean;
    size: number;
    trimOffsetLeft: number | undefined;
    trimOffsetTop: number | undefined;
    width: number;
    constructor(path: string, image: Sharp, info: OutputInfo);
    delete(): void;
    moveTo(filePath: string): this;
    copyTo(filePath: string): any;
}
