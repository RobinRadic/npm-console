import { join } from 'path';
import { copyFileSync, renameSync, unlinkSync } from 'fs';

import { IconDefinition, IconLookup, IconName, IconPack, IconPrefix, Library } from '@fortawesome/fontawesome';
import { Create, OutputInfo, OverlayOptions, PngOptions, Sharp, SharpOptions } from 'sharp';
import { requireModule } from './requireModule';

export interface IconData extends IconLookup {
    width: number,
    height: number,
    ligatures: string[]
    unicode: string
    svgPathData: string | string[]
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

export class IconGenerator {
    public readonly prefixes: IconPrefix[] = [];
    public readonly library: Library;
    protected _findIconDefinition: (lookup: IconLookup) => IconDefinition;
    protected sharp: (options?: SharpOptions) => Sharp;

    constructor(public options: IconsOptions) {
        const { findIconDefinition, library } = requireModule('@fortawesome/fontawesome', 'iconGenerator');
        this._findIconDefinition              = findIconDefinition;
        this.library                          = library;
        this.sharp                            = requireModule('sharp', 'IconGenerator');
    }

    addIconPacks(packs: Record<IconPrefix | string, IconPack>) {
        Object.keys(packs).forEach(prefix => {
            if ( this.prefixes.includes(prefix as any) ) {
                return;
            }
            this.library.add(packs[ prefix ] as any);
        });
        return this;
    }

    addDefaultIconPacks() {
        return this.addIconPacks({
            far: requireModule('@fortawesome/free-regular-svg-icons', 'IconGenerator icon pack far'),
            fab: requireModule('@fortawesome/free-brands-svg-icons', 'IconGenerator icon pack fab'),
            fas: requireModule('@fortawesome/free-solid-svg-icons', 'IconGenerator icon pack fas'),
        });
    }

    async notify(color: string = 'white', iconName: IconName, iconPrefix?: IconPrefix): Promise<string> {
        const icon  = this.findIcon(iconName as any, iconPrefix);
        const image = await this.generate(icon, { format: 'png', fill: color });
        return image.path;
    }

    async generate(icon: IconData, options: GenerateOptions = { format: 'png' }): Promise<GeneratedIcon> {
        let filePath = join(this.options.cacheDir, icon.iconName + '.' + options.format);

        options.sharp = options.sharp || {
            create: {
                height    : options.height || icon.height,
                width     : options.width || icon.width,
                background: options.background || { r: 0, g: 0, b: 0, alpha: 0 },
                channels  : 4,
            },
        };

        let image          = this.sharp(options.sharp);
        options.composites = options.composites || [];
        options.composites.unshift({
            blend: 'add',
            ...options.composite || {},
            input: this.createSvgBufferFromIcon(icon, options.stroke, options.fill),
        });
        image.composite(options.composites);
        image.toFormat(options.format, options[ options.format ]);
        const info = await image.toFile(filePath);
        return new GeneratedIcon(filePath, image, info);
    }

    findIcon(iconName: IconName, prefix?: IconPrefix): IconData {
        let definition = this.findIconDefinition(iconName, prefix);
        if ( definition ) {
            return this.getIconFromDefinition(definition);
        }
    }

    protected findIconDefinition(iconName: IconName, prefix?: IconPrefix): IconDefinition {
        if ( !prefix ) {
            for ( const prefix of this.prefixes ) {
                let definition = this._findIconDefinition({ iconName, prefix });
                if ( definition ) {
                    return definition;
                }
            }
        }

        return this._findIconDefinition({ iconName, prefix });
    }


    createSvgBufferFromIcon(icon: IconData, stroke?: string, fill?: string) {
        let style = ``;
        if ( stroke || fill ) {
            style = `style="${stroke ? 'stroke: ' + stroke + ';' : ''} ${fill ? 'fill: ' + fill : ''};"`;
        }
        return Buffer.from(`
            <svg viewBox="0 0 ${icon.width} ${icon.height}">
                <path ${style} d="${icon.svgPathData}"/>
            </svg>`);
    }

    getIconFromDefinition(definition: IconDefinition): IconData {
        const { icon, iconName, prefix }                         = definition;
        const [ width, height, ligatures, unicode, svgPathData ] = icon;
        return { iconName, prefix, width, height, ligatures, unicode, svgPathData };
    }
}

export class GeneratedIcon implements OutputInfo {
    public channels: 1 | 2 | 3 | 4;
    public cropOffsetLeft: number | undefined;
    public cropOffsetTop: number | undefined;
    public format: string;
    public height: number;
    public premultiplied: boolean;
    public size: number;
    public trimOffsetLeft: number | undefined;
    public trimOffsetTop: number | undefined;
    public width: number;


    constructor(public path: string, public image: Sharp, protected info: OutputInfo) {
        Object.assign(this, info);
    }

    delete() {
        return unlinkSync(this.path);
    }

    moveTo(filePath: string) {
        renameSync(this.path, filePath);
        this.path = filePath;
        return this;
    }

    copyTo(filePath: string) {
        copyFileSync(this.path, filePath);
        return new (this.constructor as any)(filePath, this.info);
    }
}
