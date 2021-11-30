import { DefaultThemeOptions } from '@vuepress/theme-default';
import { Theme } from '@vuepress/core';
import { path } from '@vuepress/utils';

const { resolve } = path;

export interface RadicalThemeOptions extends DefaultThemeOptions {

}

export const radicalTheme: Theme<RadicalThemeOptions> = (pluginConfig, app) => {

    return {

        name                 : 'vuepress-theme-radical',
        extends              : '@vuepress/theme-default',
        clientAppEnhanceFiles: resolve(__dirname, '../client/clientAppEnhance.js'),
    };
};
