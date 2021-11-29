import { App } from 'vuepress';
import { DefaultThemeOptions } from '@vuepress/theme-default';
import { MonorepoPackage } from './MonorepoPackage';
import { NavbarGroup, SidebarConfigObject, SidebarItem } from '@vuepress/theme-default/lib/shared/nav';
import { Monorepo } from './Monorepo';
import { get, has, set } from 'lodash';
import { firstBy } from '@radic/shared';


export class ThemeHelper {
    get app(): App {return this.monorepo.app;};

    get config(): DefaultThemeOptions {return this.app.options.themeConfig;}

    get sidebar(): SidebarConfigObject {return this.config.sidebar as SidebarConfigObject;}

    constructor(protected monorepo: Monorepo) {}

    addAllPackagesToTheme(){
        this.monorepo.each(pkg => {
            this.addPackageToNavbar(pkg)
            this.addPackageToSidebar(pkg)
        })
        return this;
    }

    addPackageToNavbar(pkg: MonorepoPackage) {
        if ( Array.isArray(this.config.navbar) ) {
            let nav: NavbarGroup = this.config.navbar.find(n => n[ 'text' ] === 'Packages') as NavbarGroup;
            if ( !nav ) {
                this.config.navbar.unshift({
                    text    : 'Packages',
                    children: [],
                });
                nav = this.config.navbar.find(n => n[ 'text' ] === 'Packages') as NavbarGroup;
            }
            nav.children.push({
                text: pkg?.pkg?.vuepress?.name || pkg.name,
                link: `/${this.monorepo.options.dirName}/${pkg.options.destDir}/`,
            });
        }
    }

    addPackageToSidebar(pkg: MonorepoPackage) {
        let items                                                                   = pkg.getAllRelativeDocsPaths().map(fileName => fileName.replace('.md', '')).filter(name => !name.endsWith('README'));
        let children:SidebarItem['children'] = []
        let tree:any = {}
        let link = `/${this.monorepo.options.dirName}/${pkg.options.destDir}/`;
        items = items.sort((v1, v2) => {
            return v2.split('/').length > v1.split('/').length ? -1 : 1;
        })
        items.forEach(item => {
            let segments = item.split('/')

            if(segments.length > 0){
                let segmentLink = link;
                let childs=children
                for(const segmentIndex in segments) {
                    let segment=segments[segmentIndex]
                    segmentLink += segment +'/'
                    let text=segment
                    if(parseInt(segmentIndex) === segments.length -1){
                        childs.push({text,link:segmentLink,children:[]});
                    } else {
                        let child = childs.find(c => typeof c === 'object' && c.text === text)
                        if ( !child ) {
                            let index = childs.push({
                                text,
                                link:segmentLink,
                                children: []
                            })
                            childs    = childs[ index - 1 ][ 'children' ]
                        } else {
                            childs=child['children']
                        }
                    }
                }
                // let path = segments.join('.children.')
                // if(!has(tree, path)){
                //     set(tree, path, <SidebarItem>{
                //         children: [],
                //         text:
                //     })
                // }
                // get(tree, path, <SidebarItem>{
                //     children: [],
                // })
            }
            let path = item.replace(/\//g,'.')
        })
        this.sidebar[ link ] = [
            {
                text    : pkg?.pkg?.vuepress?.name || pkg.name,
                link   ,
                children,
            },
        ];
        return this;
    }

}
