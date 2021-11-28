import { defineUserConfig } from 'vuepress';
import { WebpackBundlerOptions } from '@vuepress/bundler-webpack';
import { DefaultThemeOptions } from '@vuepress/theme-default';
import { resolve } from 'path';
import { MonorepoPluginOptions } from './plugins/monorepo/src/interfaces';

const root     = (...parts) => resolve(__dirname, '../..', ...parts);
const packages = (packageName: string, ...parts) => root('packages', packageName, ...parts);
const config   = defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
    lang       : 'en-US',
    title      : 'NPM Packages',
    description: '',

    head: [
        [ 'meta', { name: 'theme-color', content: '#3EAF7C' } ],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
    ],

    themeConfig: {
        editLinks   : false,
        docsDir     : '',
        editLinkText: '',
        lastUpdated : false,
        themePlugins: {
            git    : false,
            prismjs: false,
        },
        navbar      : [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Config',
                link: '/config/',
            },
        ],
        sidebarDepth: 5,
        sidebar     : {
            '/guide/': [
                {
                    text    : 'Guide',
                    children: [
                        '',
                        'using-vue',
                    ],
                },
            ],
        },
    },

    plugins: [
        [ resolve(__dirname, 'plugins/monorepo'), <MonorepoPluginOptions>{
            monorepo: {
                root: root(),
                resolve: {
                    exclude: ['apps/cli']
                }
            }
        } ],
        '@vuepress/plugin-back-to-top',
        /** @link https://v2.vuepress.vuejs.org/reference/plugin/active-header-links.html#install */
        [ '@vuepress/plugin-active-header-links', {} ],
        '@vuepress/plugin-toc',
        [ '@vuepress/plugin-prismjs', { preloadLanguages: [ 'markdown', 'jsdoc', 'yaml', 'typescript' ] } ],
        [ '@vuepress/register-components', { componentsDir: resolve(__dirname, 'components') } ],
        // [containerPlugin, {}],
        [ '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                },
            },
        ],
        // [
        //     pluginTypedoc,
        //
        //     // Plugin / TypeDoc options
        //     {name:'vuepress-plugin-typedoc',
        //         entryPoints: [
        //             packages('console-input', 'src/index.ts'),
        //         ],
        //         tsconfig   : packages('console-input', 'tsconfig.json'),
        //     }
        //     ],
    ],
});
export default config;
