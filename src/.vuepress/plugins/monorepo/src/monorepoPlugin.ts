import type { Plugin } from '@vuepress/core';
import { debug } from '@vuepress/utils';
import { MonorepoPluginOptions } from './interfaces';
import { Monorepo } from './Monorepo';
import { ThemeHelper } from './ThemeHelper';

const log = debug.debug('monorepo:plugin');

export const monorepoPlugin: Plugin<MonorepoPluginOptions> = (options, app) => {
    options                  = {
        packages: [],
        ...options,
    };
    if(app.env.isBuild && options.buildBase){
        app.options.base = options.buildBase
    }
    const monorepo: Monorepo = new Monorepo(app, options.monorepo);
    options.packages.forEach(options => monorepo.createPackage(options));
    monorepo.remakeDocDir();
    monorepo.copyPackageDocs();
    monorepo.themeHelper.addAllPackagesToTheme();


    return {
        name         : 'vuepress-monorepo-plugin',
        onInitialized: async app => {
            log('onInitialized');
            monorepo.startWatching();
        },
        onGenerated  : app => {
            monorepo.stopWatching();
        },
    };
};
