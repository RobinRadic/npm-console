/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createVueApp": () => (/* binding */ createVueApp)
});

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(7621);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=script&setup=true&lang=ts



/* harmony default export */ const Badgevue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "default", {}, () => {
        _push(`${(0,server_renderer.ssrInterpolate)(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue



const __exports__ = Badgevue_type_script_setup_true_lang_ts;

/* harmony default export */ const Badge = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroup.js

/* harmony default export */ const CodeGroup = ((0,external_vue_.defineComponent)({
    name: 'CodeGroup',
    setup(_, { slots }) {
        // index of current active item
        const activeIndex = (0,external_vue_.ref)(-1);
        // refs of the tab buttons
        const tabRefs = (0,external_vue_.ref)([]);
        if (false) {}
        // activate next tab
        const activateNext = (i = activeIndex.value) => {
            if (i < tabRefs.value.length - 1) {
                activeIndex.value = i + 1;
            }
            else {
                activeIndex.value = 0;
            }
            tabRefs.value[activeIndex.value].focus();
        };
        // activate previous tab
        const activatePrev = (i = activeIndex.value) => {
            if (i > 0) {
                activeIndex.value = i - 1;
            }
            else {
                activeIndex.value = tabRefs.value.length - 1;
            }
            tabRefs.value[activeIndex.value].focus();
        };
        // handle keyboard event
        const keyboardHandler = (event, i) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                activeIndex.value = i;
            }
            else if (event.key === 'ArrowRight') {
                event.preventDefault();
                activateNext(i);
            }
            else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                activatePrev(i);
            }
        };
        return () => {
            // NOTICE: here we put the `slots.default()` inside the render function to make
            // the slots reactive, otherwise the slot content won't be changed once the
            // `setup()` function of current component is called
            var _a;
            // get children code-group-item
            const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [])
                .filter((vnode) => vnode.type.name === 'CodeGroupItem')
                .map((vnode) => {
                if (vnode.props === null) {
                    vnode.props = {};
                }
                return vnode;
            });
            // do not render anything if there is no code-group-item
            if (items.length === 0) {
                return null;
            }
            if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
                // if `activeIndex` is invalid
                // find the index of the code-group-item with `active` props
                activeIndex.value = items.findIndex((vnode) => vnode.props.active === '' || vnode.props.active === true);
                // if there is no `active` props on code-group-item, set the first item active
                if (activeIndex.value === -1) {
                    activeIndex.value = 0;
                }
            }
            else {
                // set the active item
                items.forEach((vnode, i) => {
                    vnode.props.active = i === activeIndex.value;
                });
            }
            return (0,external_vue_.h)('div', { class: 'code-group' }, [
                (0,external_vue_.h)('div', { class: 'code-group__nav' }, (0,external_vue_.h)('ul', { class: 'code-group__ul' }, items.map((vnode, i) => {
                    const isActive = i === activeIndex.value;
                    return (0,external_vue_.h)('li', { class: 'code-group__li' }, (0,external_vue_.h)('button', {
                        ref: (element) => {
                            if (element) {
                                tabRefs.value[i] = element;
                            }
                        },
                        class: {
                            'code-group__nav-tab': true,
                            'code-group__nav-tab-active': isActive,
                        },
                        ariaPressed: isActive,
                        ariaExpanded: isActive,
                        onClick: () => (activeIndex.value = i),
                        onKeydown: (e) => keyboardHandler(e, i),
                    }, vnode.props.title));
                }))),
                items,
            ]);
        };
    },
}));

;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=script&setup=true&lang=ts




const __default__ = (0,external_vue_.defineComponent)({
  name: "CodeGroupItem"
});
function setup(__props) {
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
      class: ["code-group-item", { "code-group-item__active": __props.active }],
      "aria-selected": __props.active
    }, _attrs))}>`);
    (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  };
}
/* harmony default export */ const CodeGroupItemvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue



const CodeGroupItem_exports_ = CodeGroupItemvue_type_script_setup_true_lang_ts;

/* harmony default export */ const CodeGroupItem = (CodeGroupItem_exports_);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js + 10 modules
var composables = __webpack_require__(4391);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=script&setup=true&lang=ts





/* harmony default export */ const OutboundLinkvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    return (_ctx, _push, _parent, _attrs) => {
      _push((0,server_renderer.ssrRenderComponent)((0,external_vue_.unref)(lib/* OutboundLink */.MS), _attrs, {
        default: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              (0,external_vue_.createVNode)("span", { class: "sr-only" }, (0,external_vue_.toDisplayString)((0,external_vue_.unref)(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue



const OutboundLink_exports_ = OutboundLinkvue_type_script_setup_true_lang_ts;

/* harmony default export */ const OutboundLink = (OutboundLink_exports_);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/styles/index.scss
var styles = __webpack_require__(9349);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/clientAppEnhance.js








/* harmony default export */ const clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app, router }) => {
    app.component('Badge', Badge);
    app.component('CodeGroup', CodeGroup);
    app.component('CodeGroupItem', CodeGroupItem);
    // unregister the built-in `<OutboundLink>` to avoid warning
    delete app._context.components.OutboundLink;
    // override the built-in `<OutboundLink>`
    app.component('OutboundLink', OutboundLink);
    // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
    app.component('NavbarSearch', () => {
        const SearchComponent = app.component('Docsearch') || app.component('SearchBox');
        if (SearchComponent) {
            return (0,external_vue_.h)(SearchComponent);
        }
        return null;
    });
    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
        await (0,composables/* useScrollPromise */.P$)().wait();
        return scrollBehavior(...args);
    };
}));

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js + 3 modules
var client_composables = __webpack_require__(3928);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/clientAppEnhance.js



/* harmony default export */ const client_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app }) => {
    // provide theme data & theme locale data
    const themeData = (0,client_composables/* useThemeData */.BV)();
    const routeLocale = app._context.provides[lib/* routeLocaleSymbol */.C3];
    const themeLocaleData = (0,external_vue_.computed)(() => (0,client_composables/* resolveThemeLocaleData */.g$)(themeData.value, routeLocale.value));
    app.provide(client_composables/* themeLocaleDataSymbol */.ZS, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
        $theme: {
            get() {
                return themeData.value;
            },
        },
        $themeLocale: {
            get() {
                return themeLocaleData.value;
            },
        },
    });
}));

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(2253);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-toc/lib/client/components/Toc.js



const renderLink = (header, options, route) => {
    const hash = `#${header.slug}`;
    const linkClass = [options.linkClass];
    // add active class if the header hash is matched
    if (options.linkActiveClass && route.hash === hash) {
        linkClass.push(options.linkActiveClass);
    }
    // add active class if any sub-header hash is matched
    if (options.linkChildrenActiveClass &&
        header.children.some((item) => `#${item.slug}` === route.hash)) {
        linkClass.push(options.linkChildrenActiveClass);
    }
    if (options.linkTag === 'RouterLink') {
        return (0,external_vue_.h)(external_vue_router_.RouterLink, {
            to: hash,
            class: linkClass,
            ariaLabel: header.title,
        }, {
            default: () => header.title,
        });
    }
    return (0,external_vue_.h)('a', {
        href: hash,
        class: linkClass,
        ariaLabel: header.title,
    }, header.title);
};
const renderHeaders = (headers, options, route) => {
    if (headers.length === 0) {
        return [];
    }
    return [
        (0,external_vue_.h)('ul', {
            class: options.listClass,
        }, headers.map((header) => (0,external_vue_.h)('li', {
            class: options.itemClass,
        }, [
            renderLink(header, options, route),
            renderHeaders(header.children, options, route),
        ]))),
    ];
};
const Toc = (0,external_vue_.defineComponent)({
    name: 'Toc',
    props: {
        headers: {
            type: Array,
            required: false,
            default: null,
        },
        options: {
            type: Object,
            required: false,
            default: () => ({}),
        },
    },
    setup(props) {
        const { headers: propsHeaders, options: propsOptions } = (0,external_vue_.toRefs)(props);
        const route = (0,external_vue_router_.useRoute)();
        const page = (0,lib/* usePageData */.Vi)();
        const headers = (0,external_vue_.computed)(() => {
            var _a;
            const headersToUse = propsHeaders.value || page.value.headers;
            // skip h1 header
            return ((_a = headersToUse[0]) === null || _a === void 0 ? void 0 : _a.level) === 1
                ? headersToUse[0].children
                : headersToUse;
        });
        const options = (0,external_vue_.computed)(() => ({
            containerTag: 'nav',
            containerClass: 'vuepress-toc',
            listClass: 'vuepress-toc-list',
            itemClass: 'vuepress-toc-item',
            linkTag: 'RouterLink',
            linkClass: 'vuepress-toc-link',
            linkActiveClass: 'active',
            linkChildrenActiveClass: 'active',
            ...propsOptions.value,
        }));
        return () => {
            const renderedHeaders = renderHeaders(headers.value, options.value, route);
            if (options.value.containerTag) {
                return (0,external_vue_.h)(options.value.containerTag, {
                    class: options.value.containerClass,
                }, renderedHeaders);
            }
            return renderedHeaders;
        };
    },
});

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-toc/lib/client/clientAppEnhance.js



const defaultPropsOptions = {};
/* harmony default export */ const lib_client_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app }) => {
    // wrap the component with default options
    app.component("Toc", (props) => (0,external_vue_.h)(Toc, {
        headers: props.headers,
        options: {
            ...defaultPropsOptions,
            ...props.options,
        },
    }));
}));

;// CONCATENATED MODULE: ./src/.vuepress/clientAppEnhance.ts

/* harmony default export */ const _vuepress_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app, router, siteData }) => {
}));

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/clientAppEnhances.js





const clientAppEnhances = [
  clientAppEnhance,
  client_clientAppEnhance,
  lib_client_clientAppEnhance,
  _vuepress_clientAppEnhance,
]

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/clientAppRootComponents.js


const clientAppRootComponents = [

]

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/clientAppSetup.js


/* harmony default export */ const clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    (0,composables/* setupDarkMode */.OX)();
    (0,composables/* setupSidebarItems */.fR)();
}));

;// CONCATENATED MODULE: ./node_modules/ts-debounce/dist/src/index.esm.js
function r(r,e,n){var i,t,o;void 0===e&&(e=50),void 0===n&&(n={});var a=null!=(i=n.isImmediate)&&i,u=null!=(t=n.callback)&&t,c=n.maxWait,v=Date.now(),l=[];function f(){if(void 0!==c){var r=Date.now()-v;if(r+e>=c)return c-r}return e}var d=function(){var e=[].slice.call(arguments),n=this;return new Promise(function(i,t){var c=a&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,v=Date.now(),!a){var i=r.apply(n,e);u&&u(i),l.forEach(function(r){return(0,r.resolve)(i)}),l=[]}},f()),c){var d=r.apply(n,e);return u&&u(d),i(d)}l.push({resolve:i,reject:t})})};return d.cancel=function(r){void 0!==o&&clearTimeout(o),l.forEach(function(e){return(0,e.reject)(r)}),l=[]},d}
//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/composables/useActiveHeaderLinks.js




const useActiveHeaderLinks = ({ headerLinkSelector, headerAnchorSelector, delay, offset = 5, }) => {
    const router = (0,external_vue_router_.useRouter)();
    const page = (0,lib/* usePageData */.Vi)();
    const setActiveRouteHash = () => {
        var _a, _b, _c, _d;
        // get all header links
        const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector));
        // get all header anchors
        const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector));
        // filter anchors that do not have corresponding links
        const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
        // get current scrollTop
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        // get current scrollBottom
        const scrollBottom = window.innerHeight + scrollTop;
        // get the total scroll length of current page
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        // check if we have reached page bottom
        // notice the `scrollBottom` might not be exactly equal to `scrollHeight`, so we add offset here
        const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset;
        for (let i = 0; i < existedHeaderAnchors.length; i++) {
            const anchor = existedHeaderAnchors[i];
            const nextAnchor = existedHeaderAnchors[i + 1];
            // if this is the first anchor and now it's on the top of the page
            const isTheFirstAnchorActive = i === 0 && scrollTop === 0;
            // notice the `scrollTop` might not be exactly equal to `offsetTop` after clicking the anchor
            // so we add offset
            // if has scrolled past this anchor
            const hasPassedCurrentAnchor = scrollTop >= ((_b = (_a = anchor.parentElement) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0) - offset;
            // if has not scrolled past next anchor
            const hasNotPassedNextAnchor = !nextAnchor ||
                scrollTop < ((_d = (_c = nextAnchor.parentElement) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0) - offset;
            // if this anchor is the active anchor
            const isActive = isTheFirstAnchorActive ||
                (hasPassedCurrentAnchor && hasNotPassedNextAnchor);
            // continue to find the active anchor
            if (!isActive)
                continue;
            const routeHash = decodeURIComponent(router.currentRoute.value.hash);
            const anchorHash = decodeURIComponent(anchor.hash);
            // if the active anchor hash is current route hash, do nothing
            if (routeHash === anchorHash)
                return;
            // check if anchor is at the bottom of the page to keep hash consistent
            if (isAtPageBottom) {
                for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
                    // if current route hash is below the active hash, do nothing
                    if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
                        return;
                    }
                }
            }
            // replace current route hash with the active anchor hash
            replaceWithoutScrollBehavior(router, {
                hash: anchorHash,
                force: true,
            });
            return;
        }
    };
    const onScroll = r(() => setActiveRouteHash(), delay);
    (0,external_vue_.onMounted)(() => {
        onScroll();
        window.addEventListener('scroll', onScroll);
    });
    (0,external_vue_.onBeforeUnmount)(() => {
        window.removeEventListener('scroll', onScroll);
    });
    (0,external_vue_.watch)(() => page.value.path, onScroll);
};
/**
 * Call `router.replace()` and do not trigger `scrollBehavior`
 */
const replaceWithoutScrollBehavior = async (router, ...args) => {
    // temporarily disable `scrollBehavior`
    // restore it after navigation
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = undefined;
    await router
        .replace(...args)
        .finally(() => (router.options.scrollBehavior = scrollBehavior));
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/composables/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/clientAppSetup.js


const headerLinkSelector = "a.sidebar-item";
const headerAnchorSelector = ".header-anchor";
const delay = 200;
const offset = 5;
/* harmony default export */ const client_clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    if (true)
        return;
    useActiveHeaderLinks({
        headerLinkSelector,
        headerAnchorSelector,
        delay,
        offset,
    });
}));

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/clientAppSetups.js



const clientAppSetups = [
  clientAppSetup,
  client_clientAppSetup,
]

// EXTERNAL MODULE: ./src/.vuepress/.temp/internal/pagesComponents.js
var pagesComponents = __webpack_require__(2467);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js + 1 modules
var Vuepress = __webpack_require__(5577);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pagesRoutes.js


const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-ba934fd8","/config/","Config",["/config/index.html","/config/README.md"]],
  ["v-fffb8e28","/guide/","Introduction",["/guide/index.html","/guide/README.md"]],
  ["v-79e93bb0","/guide/using-vue.html","Using Vue in Markdown",["/guide/using-vue","/guide/using-vue.md"]],
  ["v-e4256a7e","/packages/console/","",["/packages/console/index.html","/packages/console/README.md"]],
  ["v-2e04e120","/packages/console-colors/","Console Colors",["/packages/console-colors/index.html","/packages/console-colors/README.md"]],
  ["v-6683a124","/packages/console-input/","Console Input",["/packages/console-input/index.html","/packages/console-input/README.md"]],
  ["v-03ab9c05","/packages/console-input/getting-started.html","Getting Started",["/packages/console-input/getting-started","/packages/console-input/getting-started.md"]],
  ["v-990410a2","/packages/console-output/","Console Output",["/packages/console-output/index.html","/packages/console-output/README.md"]],
  ["v-2a0ff7f2","/packages/core/","Console",["/packages/core/index.html","/packages/core/README.md"]],
  ["v-5e8b1ae3","/packages/multi-package-json-manager/","Multi Package Json Manager",["/packages/multi-package-json-manager/index.html","/packages/multi-package-json-manager/README.md"]],
  ["v-4e901641","/packages/shared/","Shared",["/packages/shared/index.html","/packages/shared/README.md"]],
  ["v-1ec5cb16","/packages/console-colors/api/","@radic/console-colors",["/packages/console-colors/api/index.html","/packages/console-colors/api/README.md"]],
  ["v-4bf43879","/packages/console-input/api/","@radic/console-input",["/packages/console-input/api/index.html","/packages/console-input/api/README.md"]],
  ["v-4f7a5184","/packages/console-output/api/","@radic/console-output",["/packages/console-output/api/index.html","/packages/console-output/api/README.md"]],
  ["v-30331c48","/packages/core/api/","@radic/core",["/packages/core/api/index.html","/packages/core/api/README.md"]],
  ["v-c7ca8a90","/packages/multi-package-json-manager/api/","multi-package-json-manager",["/packages/multi-package-json-manager/api/index.html","/packages/multi-package-json-manager/api/README.md"]],
  ["v-098e3c4b","/packages/console-colors/api/classes/Colors.html","Class: Colors",["/packages/console-colors/api/classes/Colors","/packages/console-colors/api/classes/Colors.md"]],
  ["v-b63eda08","/packages/console-colors/api/classes/Parser.html","Class: Parser",["/packages/console-colors/api/classes/Parser","/packages/console-colors/api/classes/Parser.md"]],
  ["v-4ce40c1f","/packages/console-colors/api/interfaces/AnsiRgbColors.html","Interface: AnsiRgbColors",["/packages/console-colors/api/interfaces/AnsiRgbColors","/packages/console-colors/api/interfaces/AnsiRgbColors.md"]],
  ["v-45bbd64f","/packages/console-colors/api/interfaces/ParserParsedTag.html","Interface: ParserParsedTag",["/packages/console-colors/api/interfaces/ParserParsedTag","/packages/console-colors/api/interfaces/ParserParsedTag.md"]],
  ["v-35a6a531","/packages/console-input/api/classes/Input.html","Class: Input",["/packages/console-input/api/classes/Input","/packages/console-input/api/classes/Input.md"]],
  ["v-41364e0f","/packages/console-input/api/interfaces/AutocompleteQuestion.html","Interface: AutocompleteQuestion<T>",["/packages/console-input/api/interfaces/AutocompleteQuestion","/packages/console-input/api/interfaces/AutocompleteQuestion.md"]],
  ["v-552d69b6","/packages/console-input/api/interfaces/AutocompleteQuestionOptions.html","Interface: AutocompleteQuestionOptions<T>",["/packages/console-input/api/interfaces/AutocompleteQuestionOptions","/packages/console-input/api/interfaces/AutocompleteQuestionOptions.md"]],
  ["v-c10353a8","/packages/console-input/api/interfaces/ColorQuestion.html","Interface: ColorQuestion<T>",["/packages/console-input/api/interfaces/ColorQuestion","/packages/console-input/api/interfaces/ColorQuestion.md"]],
  ["v-240a5868","/packages/console-input/api/interfaces/ColorQuestionOptions.html","Interface: ColorQuestionOptions<T>",["/packages/console-input/api/interfaces/ColorQuestionOptions","/packages/console-input/api/interfaces/ColorQuestionOptions.md"]],
  ["v-62b7bc8a","/packages/console-input/api/interfaces/DatepickerQuestion.html","Interface: DatepickerQuestion<T>",["/packages/console-input/api/interfaces/DatepickerQuestion","/packages/console-input/api/interfaces/DatepickerQuestion.md"]],
  ["v-26a23df9","/packages/console-input/api/interfaces/DatepickerQuestionOptions.html","Interface: DatepickerQuestionOptions<T>",["/packages/console-input/api/interfaces/DatepickerQuestionOptions","/packages/console-input/api/interfaces/DatepickerQuestionOptions.md"]],
  ["v-7e0b8d3c","/packages/console-input/api/interfaces/DirectoryQuestion.html","Interface: DirectoryQuestion<T>",["/packages/console-input/api/interfaces/DirectoryQuestion","/packages/console-input/api/interfaces/DirectoryQuestion.md"]],
  ["v-06788c72","/packages/console-input/api/interfaces/DirectoryQuestionOptions.html","Interface: DirectoryQuestionOptions<T>",["/packages/console-input/api/interfaces/DirectoryQuestionOptions","/packages/console-input/api/interfaces/DirectoryQuestionOptions.md"]],
  ["v-8a3f05a6","/packages/console-input/api/interfaces/FileFolderQuestion.html","Interface: FileFolderQuestion<T>",["/packages/console-input/api/interfaces/FileFolderQuestion","/packages/console-input/api/interfaces/FileFolderQuestion.md"]],
  ["v-6308ae54","/packages/console-input/api/interfaces/FilePathQuestion.html","Interface: FilePathQuestion<T>",["/packages/console-input/api/interfaces/FilePathQuestion","/packages/console-input/api/interfaces/FilePathQuestion.md"]],
  ["v-760b935c","/packages/console-input/api/interfaces/FileSelectorQuestion.html","Interface: FileSelectorQuestion<T>",["/packages/console-input/api/interfaces/FileSelectorQuestion","/packages/console-input/api/interfaces/FileSelectorQuestion.md"]],
  ["v-66c6e538","/packages/console-input/api/interfaces/FileSelectorQuestionOptions.html","Interface: FileSelectorQuestionOptions<T>",["/packages/console-input/api/interfaces/FileSelectorQuestionOptions","/packages/console-input/api/interfaces/FileSelectorQuestionOptions.md"]],
  ["v-43f3387d","/packages/console-input/api/interfaces/FileTreeSelectionQuestion.html","Interface: FileTreeSelectionQuestion<T>",["/packages/console-input/api/interfaces/FileTreeSelectionQuestion","/packages/console-input/api/interfaces/FileTreeSelectionQuestion.md"]],
  ["v-061b2e12","/packages/console-input/api/interfaces/FileTreeSelectionQuestionOptions.html","Interface: FileTreeSelectionQuestionOptions<T>",["/packages/console-input/api/interfaces/FileTreeSelectionQuestionOptions","/packages/console-input/api/interfaces/FileTreeSelectionQuestionOptions.md"]],
  ["v-fdc3a440","/packages/console-input/api/interfaces/FuzzypathQuestion.html","Interface: FuzzypathQuestion<T>",["/packages/console-input/api/interfaces/FuzzypathQuestion","/packages/console-input/api/interfaces/FuzzypathQuestion.md"]],
  ["v-3b94abd1","/packages/console-input/api/interfaces/MaxinputQuestion.html","Interface: MaxinputQuestion<T>",["/packages/console-input/api/interfaces/MaxinputQuestion","/packages/console-input/api/interfaces/MaxinputQuestion.md"]],
  ["v-c98761ba","/packages/console-input/api/interfaces/MaxinputQuestionOptions.html","Interface: MaxinputQuestionOptions<T>",["/packages/console-input/api/interfaces/MaxinputQuestionOptions","/packages/console-input/api/interfaces/MaxinputQuestionOptions.md"]],
  ["v-85e83e2a","/packages/console-input/api/interfaces/MyQuestionMap.html","Interface: MyQuestionMap<T>",["/packages/console-input/api/interfaces/MyQuestionMap","/packages/console-input/api/interfaces/MyQuestionMap.md"]],
  ["v-e2c3ee1c","/packages/console-input/api/interfaces/PathQuestion.html","Interface: PathQuestion<T>",["/packages/console-input/api/interfaces/PathQuestion","/packages/console-input/api/interfaces/PathQuestion.md"]],
  ["v-a531ca3c","/packages/console-input/api/interfaces/PathQuestionOptions.html","Interface: PathQuestionOptions<T>",["/packages/console-input/api/interfaces/PathQuestionOptions","/packages/console-input/api/interfaces/PathQuestionOptions.md"]],
  ["v-591106aa","/packages/console-input/api/interfaces/SuggestQuestion.html","Interface: SuggestQuestion<T>",["/packages/console-input/api/interfaces/SuggestQuestion","/packages/console-input/api/interfaces/SuggestQuestion.md"]],
  ["v-2b4fb509","/packages/console-input/api/interfaces/SuggestQuestionOptions.html","Interface: SuggestQuestionOptions<T>",["/packages/console-input/api/interfaces/SuggestQuestionOptions","/packages/console-input/api/interfaces/SuggestQuestionOptions.md"]],
  ["v-2347e0be","/packages/console-input/api/interfaces/TableQuestion.html","Interface: TableQuestion<T>",["/packages/console-input/api/interfaces/TableQuestion","/packages/console-input/api/interfaces/TableQuestion.md"]],
  ["v-05e40153","/packages/console-input/api/interfaces/TableQuestionOptions.html","Interface: TableQuestionOptions<T>",["/packages/console-input/api/interfaces/TableQuestionOptions","/packages/console-input/api/interfaces/TableQuestionOptions.md"]],
  ["v-43af7e0c","/packages/console-input/api/interfaces/TreeItem.html","Interface: TreeItem",["/packages/console-input/api/interfaces/TreeItem","/packages/console-input/api/interfaces/TreeItem.md"]],
  ["v-3afeb3ce","/packages/console-input/api/interfaces/TreeQuestion.html","Interface: TreeQuestion<T>",["/packages/console-input/api/interfaces/TreeQuestion","/packages/console-input/api/interfaces/TreeQuestion.md"]],
  ["v-f9d0984a","/packages/console-input/api/interfaces/TreeQuestionOptions.html","Interface: TreeQuestionOptions<T>",["/packages/console-input/api/interfaces/TreeQuestionOptions","/packages/console-input/api/interfaces/TreeQuestionOptions.md"]],
  ["v-531b34dc","/packages/console-output/api/classes/Colors.html","Class: Colors",["/packages/console-output/api/classes/Colors","/packages/console-output/api/classes/Colors.md"]],
  ["v-03dfe020","/packages/console-output/api/classes/Erase.html","Class: Erase",["/packages/console-output/api/classes/Erase","/packages/console-output/api/classes/Erase.md"]],
  ["v-799303b8","/packages/console-output/api/classes/FiguresParser.html","Class: FiguresParser",["/packages/console-output/api/classes/FiguresParser","/packages/console-output/api/classes/FiguresParser.md"]],
  ["v-91aa8744","/packages/console-output/api/classes/GeneratedIcon.html","Class: GeneratedIcon",["/packages/console-output/api/classes/GeneratedIcon","/packages/console-output/api/classes/GeneratedIcon.md"]],
  ["v-741aafec","/packages/console-output/api/classes/IconGenerator.html","Class: IconGenerator",["/packages/console-output/api/classes/IconGenerator","/packages/console-output/api/classes/IconGenerator.md"]],
  ["v-2ed058cb","/packages/console-output/api/classes/IterableManager.html","Class: IterableManager<K, V>",["/packages/console-output/api/classes/IterableManager","/packages/console-output/api/classes/IterableManager.md"]],
  ["v-541dcbdb","/packages/console-output/api/classes/Move.html","Class: Move",["/packages/console-output/api/classes/Move","/packages/console-output/api/classes/Move.md"]],
  ["v-9c0f282a","/packages/console-output/api/classes/Output.html","Class: Output",["/packages/console-output/api/classes/Output","/packages/console-output/api/classes/Output.md"]],
  ["v-10e37409","/packages/console-output/api/classes/OutputUtil.html","Class: OutputUtil",["/packages/console-output/api/classes/OutputUtil","/packages/console-output/api/classes/OutputUtil.md"]],
  ["v-b1d33340","/packages/console-output/api/classes/ProgressBar.html","Class: ProgressBar",["/packages/console-output/api/classes/ProgressBar","/packages/console-output/api/classes/ProgressBar.md"]],
  ["v-22c2e260","/packages/console-output/api/classes/StyleManager.html","Class: StyleManager<K>",["/packages/console-output/api/classes/StyleManager","/packages/console-output/api/classes/StyleManager.md"]],
  ["v-579033d4","/packages/console-output/api/classes/StyleParser.html","Class: StyleParser",["/packages/console-output/api/classes/StyleParser","/packages/console-output/api/classes/StyleParser.md"]],
  ["v-52d38802","/packages/console-output/api/classes/Text.html","Class: Text",["/packages/console-output/api/classes/Text","/packages/console-output/api/classes/Text.md"]],
  ["v-18b0abb8","/packages/console-output/api/classes/Ui.html","Class: Ui",["/packages/console-output/api/classes/Ui","/packages/console-output/api/classes/Ui.md"]],
  ["v-2ceed7e7","/packages/console-output/api/classes/UiBase.html","Class: UiBase",["/packages/console-output/api/classes/UiBase","/packages/console-output/api/classes/UiBase.md"]],
  ["v-0bb77920","/packages/console-output/api/interfaces/AnsiRgbColors.html","Interface: AnsiRgbColors",["/packages/console-output/api/interfaces/AnsiRgbColors","/packages/console-output/api/interfaces/AnsiRgbColors.md"]],
  ["v-65a860d2","/packages/console-output/api/interfaces/ChalkFunction.html","Interface: ChalkFunction",["/packages/console-output/api/interfaces/ChalkFunction","/packages/console-output/api/interfaces/ChalkFunction.md"]],
  ["v-d97663a0","/packages/console-output/api/interfaces/ColorsParserParsedTag.html","Interface: ColorsParserParsedTag",["/packages/console-output/api/interfaces/ColorsParserParsedTag","/packages/console-output/api/interfaces/ColorsParserParsedTag.md"]],
  ["v-5a9a96b2","/packages/console-output/api/interfaces/ColumnsOptions.html","Interface: ColumnsOptions",["/packages/console-output/api/interfaces/ColumnsOptions","/packages/console-output/api/interfaces/ColumnsOptions.md"]],
  ["v-22383cfa","/packages/console-output/api/interfaces/Erasers.html","Interface: Erasers",["/packages/console-output/api/interfaces/Erasers","/packages/console-output/api/interfaces/Erasers.md"]],
  ["v-338b07db","/packages/console-output/api/interfaces/Figures.html","Interface: Figures",["/packages/console-output/api/interfaces/Figures","/packages/console-output/api/interfaces/Figures.md"]],
  ["v-56dc75c1","/packages/console-output/api/interfaces/GenerateOptions.html","Interface: GenerateOptions",["/packages/console-output/api/interfaces/GenerateOptions","/packages/console-output/api/interfaces/GenerateOptions.md"]],
  ["v-a01e38bc","/packages/console-output/api/interfaces/IParser.html","Interface: IParser",["/packages/console-output/api/interfaces/IParser","/packages/console-output/api/interfaces/IParser.md"]],
  ["v-2302e254","/packages/console-output/api/interfaces/IParserConstructor.html","Interface: IParserConstructor",["/packages/console-output/api/interfaces/IParserConstructor","/packages/console-output/api/interfaces/IParserConstructor.md"]],
  ["v-193eb565","/packages/console-output/api/interfaces/IconData.html","Interface: IconData",["/packages/console-output/api/interfaces/IconData","/packages/console-output/api/interfaces/IconData.md"]],
  ["v-20697c24","/packages/console-output/api/interfaces/IconsOptions.html","Interface: IconsOptions",["/packages/console-output/api/interfaces/IconsOptions","/packages/console-output/api/interfaces/IconsOptions.md"]],
  ["v-0bbf62c6","/packages/console-output/api/interfaces/MacroProxy.html","Interface: MacroProxy<T, CB, R>",["/packages/console-output/api/interfaces/MacroProxy","/packages/console-output/api/interfaces/MacroProxy.md"]],
  ["v-239d2b1b","/packages/console-output/api/interfaces/ManagerMacroProxy.html","Interface: ManagerMacroProxy<T>",["/packages/console-output/api/interfaces/ManagerMacroProxy","/packages/console-output/api/interfaces/ManagerMacroProxy.md"]],
  ["v-af2bcf14","/packages/console-output/api/interfaces/Movers.html","Interface: Movers",["/packages/console-output/api/interfaces/Movers","/packages/console-output/api/interfaces/Movers.md"]],
  ["v-b7f656a8","/packages/console-output/api/interfaces/Options.html","Interface: Options",["/packages/console-output/api/interfaces/Options","/packages/console-output/api/interfaces/Options.md"]],
  ["v-e1a4ebf6","/packages/console-output/api/interfaces/OutputConfig.html","Interface: OutputConfig",["/packages/console-output/api/interfaces/OutputConfig","/packages/console-output/api/interfaces/OutputConfig.md"]],
  ["v-125c7f8d","/packages/console-output/api/interfaces/OutputOptions.html","Interface: OutputOptions",["/packages/console-output/api/interfaces/OutputOptions","/packages/console-output/api/interfaces/OutputOptions.md"]],
  ["v-0ccc5dca","/packages/console-output/api/interfaces/OutputOptionsTableStyle.html","Interface: OutputOptionsTableStyle",["/packages/console-output/api/interfaces/OutputOptionsTableStyle","/packages/console-output/api/interfaces/OutputOptionsTableStyle.md"]],
  ["v-0171dd16","/packages/console-output/api/interfaces/OutputOptionsTableStyles.html","Interface: OutputOptionsTableStyles",["/packages/console-output/api/interfaces/OutputOptionsTableStyles","/packages/console-output/api/interfaces/OutputOptionsTableStyles.md"]],
  ["v-554d8b4d","/packages/console-output/api/interfaces/OutputSpinners.html","Interface: OutputSpinners",["/packages/console-output/api/interfaces/OutputSpinners","/packages/console-output/api/interfaces/OutputSpinners.md"]],
  ["v-7bf0057a","/packages/console-output/api/interfaces/OutputStylesConfig.html","Interface: OutputStylesConfig",["/packages/console-output/api/interfaces/OutputStylesConfig","/packages/console-output/api/interfaces/OutputStylesConfig.md"]],
  ["v-2bda26ef","/packages/console-output/api/interfaces/Palette.html","Interface: Palette",["/packages/console-output/api/interfaces/Palette","/packages/console-output/api/interfaces/Palette.md"]],
  ["v-304a7e70","/packages/console-output/api/interfaces/ProgressBarOptions.html","Interface: ProgressBarOptions",["/packages/console-output/api/interfaces/ProgressBarOptions","/packages/console-output/api/interfaces/ProgressBarOptions.md"]],
  ["v-610bf934","/packages/console-output/api/interfaces/Styles.html","Interface: Styles",["/packages/console-output/api/interfaces/Styles","/packages/console-output/api/interfaces/Styles.md"]],
  ["v-64c4b7e0","/packages/console-output/api/interfaces/TreeData.html","Interface: TreeData",["/packages/console-output/api/interfaces/TreeData","/packages/console-output/api/interfaces/TreeData.md"]],
  ["v-5e3a422c","/packages/console-output/api/interfaces/TreeOptions.html","Interface: TreeOptions",["/packages/console-output/api/interfaces/TreeOptions","/packages/console-output/api/interfaces/TreeOptions.md"]],
  ["v-3d2bcebc","/packages/console-output/api/interfaces/Trucolor.html","Interface: Trucolor",["/packages/console-output/api/interfaces/Trucolor","/packages/console-output/api/interfaces/Trucolor.md"]],
  ["v-ebb5679c","/packages/console-output/api/interfaces/TruncateOptions.html","Interface: TruncateOptions",["/packages/console-output/api/interfaces/TruncateOptions","/packages/console-output/api/interfaces/TruncateOptions.md"]],
  ["v-2dc29996","/packages/console-output/api/interfaces/WrapOptions.html","Interface: WrapOptions",["/packages/console-output/api/interfaces/WrapOptions","/packages/console-output/api/interfaces/WrapOptions.md"]],
  ["v-005e8bd0","/packages/console-output/api/interfaces/macros.MacroDefinition.html","Interface: MacroDefinition<T>",["/packages/console-output/api/interfaces/macros.MacroDefinition","/packages/console-output/api/interfaces/macros.MacroDefinition.md"]],
  ["v-5da42c86","/packages/console-output/api/modules/macros.html","Namespace: macros",["/packages/console-output/api/modules/macros","/packages/console-output/api/modules/macros.md"]],
  ["v-7e0b0a4e","/packages/core/api/classes/Application.html","Class: Application",["/packages/core/api/classes/Application","/packages/core/api/classes/Application.md"]],
  ["v-32393fa7","/packages/core/api/classes/ArrayCollection.html","Class: ArrayCollection<Type>",["/packages/core/api/classes/ArrayCollection","/packages/core/api/classes/ArrayCollection.md"]],
  ["v-2c0761c9","/packages/core/api/classes/CacheManager.html","Class: CacheManager",["/packages/core/api/classes/CacheManager","/packages/core/api/classes/CacheManager.md"]],
  ["v-c74abf60","/packages/core/api/classes/CacheServiceProvider.html","Class: CacheServiceProvider",["/packages/core/api/classes/CacheServiceProvider","/packages/core/api/classes/CacheServiceProvider.md"]],
  ["v-977c48d4","/packages/core/api/classes/Collection.html","Class: Collection<T>",["/packages/core/api/classes/Collection","/packages/core/api/classes/Collection.md"]],
  ["v-2059baf0","/packages/core/api/classes/ConfigRepository.html","Class: ConfigRepository<T>",["/packages/core/api/classes/ConfigRepository","/packages/core/api/classes/ConfigRepository.md"]],
  ["v-440f7252","/packages/core/api/classes/CoreServiceProvider.html","Class: CoreServiceProvider",["/packages/core/api/classes/CoreServiceProvider","/packages/core/api/classes/CoreServiceProvider.md"]],
  ["v-5ba07eb4","/packages/core/api/classes/DirectoryStorage.html","Class: DirectoryStorage",["/packages/core/api/classes/DirectoryStorage","/packages/core/api/classes/DirectoryStorage.md"]],
  ["v-01fc8d2d","/packages/core/api/classes/Dispatcher.html","Class: Dispatcher",["/packages/core/api/classes/Dispatcher","/packages/core/api/classes/Dispatcher.md"]],
  ["v-8254fd78","/packages/core/api/classes/DispatcherMixin.html","Class: DispatcherMixin",["/packages/core/api/classes/DispatcherMixin","/packages/core/api/classes/DispatcherMixin.md"]],
  ["v-c030606a","/packages/core/api/classes/FileCacheAdapter.html","Class: FileCacheAdapter",["/packages/core/api/classes/FileCacheAdapter","/packages/core/api/classes/FileCacheAdapter.md"]],
  ["v-8e63c6de","/packages/core/api/classes/Manager.html","Class: Manager<T>",["/packages/core/api/classes/Manager","/packages/core/api/classes/Manager.md"]],
  ["v-6c3b8a62","/packages/core/api/classes/PATH.html","Class: PATH",["/packages/core/api/classes/PATH","/packages/core/api/classes/PATH.md"]],
  ["v-332211e2","/packages/core/api/classes/Process.html","Class: Process",["/packages/core/api/classes/Process","/packages/core/api/classes/Process.md"]],
  ["v-73576b14","/packages/core/api/classes/ProcessManager.html","Class: ProcessManager",["/packages/core/api/classes/ProcessManager","/packages/core/api/classes/ProcessManager.md"]],
  ["v-14e48b2c","/packages/core/api/classes/Repository.html","Class: Repository<T>",["/packages/core/api/classes/Repository","/packages/core/api/classes/Repository.md"]],
  ["v-f5d6eaee","/packages/core/api/classes/Service.html","Class: Service",["/packages/core/api/classes/Service","/packages/core/api/classes/Service.md"]],
  ["v-2222b9bc","/packages/core/api/classes/ServiceManager.html","Class: ServiceManager",["/packages/core/api/classes/ServiceManager","/packages/core/api/classes/ServiceManager.md"]],
  ["v-59004427","/packages/core/api/classes/SystemServiceProvider.html","Class: SystemServiceProvider",["/packages/core/api/classes/SystemServiceProvider","/packages/core/api/classes/SystemServiceProvider.md"]],
  ["v-fb8b8520","/packages/core/api/classes/TypeDefinitionBuilder.html","Class: TypeDefinitionBuilder",["/packages/core/api/classes/TypeDefinitionBuilder","/packages/core/api/classes/TypeDefinitionBuilder.md"]],
  ["v-0334c855","/packages/core/api/enums/ExitCode.html","Enumeration: ExitCode",["/packages/core/api/enums/ExitCode","/packages/core/api/enums/ExitCode.md"]],
  ["v-717ceec7","/packages/core/api/enums/ProxyFlags.html","Enumeration: ProxyFlags",["/packages/core/api/enums/ProxyFlags","/packages/core/api/enums/ProxyFlags.md"]],
  ["v-794249cb","/packages/core/api/enums/ServiceStatus.html","Enumeration: ServiceStatus",["/packages/core/api/enums/ServiceStatus","/packages/core/api/enums/ServiceStatus.md"]],
  ["v-54106dd2","/packages/core/api/interfaces/Bindings.html","Interface: Bindings",["/packages/core/api/interfaces/Bindings","/packages/core/api/interfaces/Bindings.md"]],
  ["v-6aa75a5a","/packages/core/api/interfaces/CacheAdapter.html","Interface: CacheAdapter",["/packages/core/api/interfaces/CacheAdapter","/packages/core/api/interfaces/CacheAdapter.md"]],
  ["v-409d1ecc","/packages/core/api/interfaces/CacheConfiguration.html","Interface: CacheConfiguration",["/packages/core/api/interfaces/CacheConfiguration","/packages/core/api/interfaces/CacheConfiguration.md"]],
  ["v-15e5d4ab","/packages/core/api/interfaces/ConfigPart.html","Interface: ConfigPart<T, K>",["/packages/core/api/interfaces/ConfigPart","/packages/core/api/interfaces/ConfigPart.md"]],
  ["v-6d52e60a","/packages/core/api/interfaces/DirectoryStorage.JsonOptions.html","Interface: JsonOptions",["/packages/core/api/interfaces/DirectoryStorage.JsonOptions","/packages/core/api/interfaces/DirectoryStorage.JsonOptions.md"]],
  ["v-18fbe5c2","/packages/core/api/interfaces/DirectoryStorageOptions.html","Interface: DirectoryStorageOptions",["/packages/core/api/interfaces/DirectoryStorageOptions","/packages/core/api/interfaces/DirectoryStorageOptions.md"]],
  ["v-23d48600","/packages/core/api/interfaces/DispatcherEvents.html","Interface: DispatcherEvents",["/packages/core/api/interfaces/DispatcherEvents","/packages/core/api/interfaces/DispatcherEvents.md"]],
  ["v-4cf76782","/packages/core/api/interfaces/EnvPaths.html","Interface: EnvPaths",["/packages/core/api/interfaces/EnvPaths","/packages/core/api/interfaces/EnvPaths.md"]],
  ["v-bd8c1216","/packages/core/api/interfaces/EnvPathsOptions.html","Interface: EnvPathsOptions",["/packages/core/api/interfaces/EnvPathsOptions","/packages/core/api/interfaces/EnvPathsOptions.md"]],
  ["v-217072fd","/packages/core/api/interfaces/FileCacheAdapterOptions.html","Interface: FileCacheAdapterOptions",["/packages/core/api/interfaces/FileCacheAdapterOptions","/packages/core/api/interfaces/FileCacheAdapterOptions.md"]],
  ["v-387ec5c2","/packages/core/api/interfaces/Hooks.html","Interface: Hooks",["/packages/core/api/interfaces/Hooks","/packages/core/api/interfaces/Hooks.md"]],
  ["v-4fe122c4","/packages/core/api/interfaces/ListenerFn.html","Interface: ListenerFn<T>",["/packages/core/api/interfaces/ListenerFn","/packages/core/api/interfaces/ListenerFn.md"]],
  ["v-ef46963e","/packages/core/api/interfaces/PathSearchOptions.html","Interface: PathSearchOptions",["/packages/core/api/interfaces/PathSearchOptions","/packages/core/api/interfaces/PathSearchOptions.md"]],
  ["v-27bf6b44","/packages/core/api/interfaces/Paths.html","Interface: Paths",["/packages/core/api/interfaces/Paths","/packages/core/api/interfaces/Paths.md"]],
  ["v-4431ecd8","/packages/core/api/interfaces/ProcessManagerData.html","Interface: ProcessManagerData",["/packages/core/api/interfaces/ProcessManagerData","/packages/core/api/interfaces/ProcessManagerData.md"]],
  ["v-287205ea","/packages/core/api/interfaces/SystemConfiguration.html","Interface: SystemConfiguration",["/packages/core/api/interfaces/SystemConfiguration","/packages/core/api/interfaces/SystemConfiguration.md"]],
  ["v-54158147","/packages/core/api/modules/DirectoryStorage.html","Namespace: DirectoryStorage",["/packages/core/api/modules/DirectoryStorage","/packages/core/api/modules/DirectoryStorage.md"]],
  ["v-86ab1e94","/packages/core/api/modules/ServiceStatus.html","Namespace: ServiceStatus",["/packages/core/api/modules/ServiceStatus","/packages/core/api/modules/ServiceStatus.md"]],
  ["v-41bef194","/packages/multi-package-json-manager/api/classes/JsonFileHandler.html","Class: JsonFileHandler",["/packages/multi-package-json-manager/api/classes/JsonFileHandler","/packages/multi-package-json-manager/api/classes/JsonFileHandler.md"]],
  ["v-23815f6d","/packages/multi-package-json-manager/api/classes/Manager.html","Class: Manager<T>",["/packages/multi-package-json-manager/api/classes/Manager","/packages/multi-package-json-manager/api/classes/Manager.md"]],
  ["v-70e638e8","/packages/multi-package-json-manager/api/interfaces/Change.html","Interface: Change",["/packages/multi-package-json-manager/api/interfaces/Change","/packages/multi-package-json-manager/api/interfaces/Change.md"]],
  ["v-2b7ea7f8","/packages/multi-package-json-manager/api/interfaces/FilePackageDetails.html","Interface: FilePackageDetails",["/packages/multi-package-json-manager/api/interfaces/FilePackageDetails","/packages/multi-package-json-manager/api/interfaces/FilePackageDetails.md"]],
  ["v-71fa5cc8","/packages/multi-package-json-manager/api/interfaces/PackageJson.html","Interface: PackageJson",["/packages/multi-package-json-manager/api/interfaces/PackageJson","/packages/multi-package-json-manager/api/interfaces/PackageJson.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress/* Vuepress */.Y,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress/* Vuepress */.Y,
    }
  ]
)

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/composables/index.js + 12 modules
var lib_composables = __webpack_require__(5617);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/utils/index.js + 3 modules
var utils = __webpack_require__(3447);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/provideGlobalComputed.js



/**
 * Create and provide global computed
 */
const provideGlobalComputed = (app, router) => {
    // create global computed
    const routeLocale = (0,external_vue_.computed)(() => (0,lib_composables/* resolveRouteLocale */.S)(lib_composables/* siteData.value.locales */.HM.value.locales, router.currentRoute.value.path));
    const siteLocaleData = (0,external_vue_.computed)(() => (0,lib_composables/* resolveSiteLocaleData */.kY)(lib_composables/* siteData.value */.HM.value, routeLocale.value));
    const pageFrontmatter = (0,external_vue_.computed)(() => (0,lib_composables/* resolvePageFrontmatter */.hN)(lib_composables/* pageData.value */.Xp.value));
    const pageHeadTitle = (0,external_vue_.computed)(() => (0,lib_composables/* resolvePageHeadTitle */.lp)(lib_composables/* pageData.value */.Xp.value, siteLocaleData.value));
    const pageHead = (0,external_vue_.computed)(() => (0,lib_composables/* resolvePageHead */.nl)(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
    const pageLang = (0,external_vue_.computed)(() => (0,lib_composables/* resolvePageLang */.Vo)(lib_composables/* pageData.value */.Xp.value));
    // provide global computed
    app.provide(lib_composables/* routeLocaleSymbol */.C3, routeLocale);
    app.provide(lib_composables/* siteLocaleDataSymbol */.AE, siteLocaleData);
    app.provide(lib_composables/* pageFrontmatterSymbol */.PY, pageFrontmatter);
    app.provide(lib_composables/* pageHeadTitleSymbol */.et, pageHeadTitle);
    app.provide(lib_composables/* pageHeadSymbol */.VV, pageHead);
    app.provide(lib_composables/* pageLangSymbol */.b5, pageLang);
    // provide global helpers
    Object.defineProperties(app.config.globalProperties, {
        $frontmatter: { get: () => pageFrontmatter.value },
        $headTitle: { get: () => pageHeadTitle.value },
        $lang: { get: () => pageLang.value },
        $page: { get: () => lib_composables/* pageData.value */.Xp.value },
        $routeLocale: { get: () => routeLocale.value },
        $site: { get: () => lib_composables/* siteData.value */.HM.value },
        $siteLocale: { get: () => siteLocaleData.value },
        $withBase: { get: () => utils/* withBase */.pJ },
    });
};

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/index.js + 3 modules
var components = __webpack_require__(704);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/registerGlobalComponents.js

/**
 * Register global built-in components
 */
const registerGlobalComponents = (app) => {
    /* eslint-disable vue/match-component-file-name */
    app.component('ClientOnly', components/* ClientOnly */.qx);
    app.component('Content', components/* Content */.VY);
    app.component('OutboundLink', components/* OutboundLink */.MS);
    /* eslint-enable vue/match-component-file-name */
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/app.js











/**
 * - use `createApp` in dev mode
 * - use `createSSRApp` in build mode
 */
const appCreator =  false ? 0 : external_vue_.createSSRApp;
/**
 * - use `createWebHistory` in dev mode and build mode client bundle
 * - use `createMemoryHistory` in build mode server bundle
 */
const historyCreator =  true ? external_vue_router_.createMemoryHistory : 0;
const createVueApp = async () => {
    // create vue app
    const app = appCreator({
        name: 'VuepressApp',
        setup() {
            // auto update head
            (0,lib_composables/* setupUpdateHead */.BK)();
            // invoke all clientAppSetups
            for (const clientAppSetup of clientAppSetups) {
                clientAppSetup();
            }
            return () => [
                (0,external_vue_.h)(external_vue_router_.RouterView),
                ...clientAppRootComponents.map((comp) => (0,external_vue_.h)(comp)),
            ];
        },
    });
    // create vue-router
    const router = (0,external_vue_router_.createRouter)({
        // TODO: it might be an issue of vue-router that have to remove the ending slash
        history: historyCreator((0,esm/* removeEndingSlash */.U1)(lib_composables/* siteData.value.base */.HM.value.base)),
        routes: pagesRoutes,
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition)
                return savedPosition;
            if (to.hash)
                return { el: to.hash };
            return { top: 0 };
        },
    });
    router.beforeResolve(async (to, from) => {
        var _a;
        if (to.path !== from.path || from === external_vue_router_.START_LOCATION) {
            // ensure page data and page component have been loaded
            ;
            [lib_composables/* pageData.value */.Xp.value] = await Promise.all([
                (0,lib_composables/* resolvePageData */.C4)(to.name),
                (_a = pagesComponents/* pagesComponents */.b[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader(),
            ]);
        }
    });
    // global computed and global components
    provideGlobalComputed(app, router);
    registerGlobalComponents(app);
    // invoke all clientAppEnhances
    for (const clientAppEnhance of clientAppEnhances) {
        await clientAppEnhance({ app, router, siteData: lib_composables/* siteData */.HM });
    }
    // vue-router will start to initialize once it is installed
    // via `app.use()`, but users might make some modifications
    // to router in `clientAppEnhance`, so we install it after
    // that. This can also avoid the `scrollBehavior` issue on
    // initial navigation.
    app.use(router);
    return {
        app,
        router,
    };
};
// mount app in client bundle
if (false) {}


/***/ }),

/***/ 5577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Vuepress)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/layoutComponents.js


const layoutComponents = {
  "404": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | layout-404 */ 6663).then(__webpack_require__.bind(__webpack_require__, 9542))),
  "Layout": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | layout-Layout */ 8832).then(__webpack_require__.bind(__webpack_require__, 7210))),
}

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/composables/index.js + 12 modules
var composables = __webpack_require__(5617);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js




/**
 * Global Layout
 */
const Vuepress = (0,external_vue_.defineComponent)({
    name: 'Vuepress',
    setup() {
        const page = (0,composables/* usePageData */.Vi)();
        // resolve layout component
        const layoutComponent = (0,external_vue_.computed)(() => {
            // resolve layout name of current page
            let layoutName;
            if (page.value.path) {
                // if current page exists
                // use layout from frontmatter
                const frontmatterLayout = page.value.frontmatter.layout;
                if ((0,esm/* isString */.HD)(frontmatterLayout)) {
                    layoutName = frontmatterLayout;
                }
                else {
                    // fallback to default layout
                    layoutName = 'Layout';
                }
            }
            else {
                // if current page does not exist
                // use 404 layout
                layoutName = '404';
            }
            // use theme layout or fallback to custom layout
            return layoutComponents[layoutName] || (0,external_vue_.resolveComponent)(layoutName, false);
        });
        return () => (0,external_vue_.h)(layoutComponent.value);
    },
});


/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qx": () => (/* reexport */ ClientOnly),
  "VY": () => (/* reexport */ Content),
  "MS": () => (/* reexport */ OutboundLink_OutboundLink)
});

// UNUSED EXPORTS: Vuepress

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/ClientOnly.js

const ClientOnly = (0,external_vue_.defineComponent)({
    setup(_, ctx) {
        const isMounted = (0,external_vue_.ref)(false);
        (0,external_vue_.onMounted)(() => {
            isMounted.value = true;
        });
        return () => { var _a, _b; return (isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null); };
    },
});

// EXTERNAL MODULE: ./src/.vuepress/.temp/internal/pagesComponents.js
var pagesComponents = __webpack_require__(2467);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/composables/index.js + 12 modules
var composables = __webpack_require__(5617);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Content.js



/**
 * Markdown rendered content
 */
const Content = (props) => {
    let key;
    // use the page key from props directly
    if (props.pageKey) {
        key = props.pageKey;
    }
    else {
        // get current page key from page data
        const page = (0,composables/* usePageData */.Vi)();
        key = page.value.key;
    }
    const component = pagesComponents/* pagesComponents */.b[key];
    // use page component
    if (component) {
        return (0,external_vue_.h)(component);
    }
    // fallback
    return (0,external_vue_.h)('div',  false
        ? 0
        : '404 Not Found');
};
Content.displayName = 'Content';
Content.props = {
    pageKey: {
        type: String,
        required: false,
    },
};

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.css
var OutboundLink = __webpack_require__(3336);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.js


const svg = (0,external_vue_.h)('svg', {
    'class': 'icon outbound',
    'xmlns': 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    'focusable': 'false',
    'x': '0px',
    'y': '0px',
    'viewBox': '0 0 100 100',
    'width': '15',
    'height': '15',
}, [
    (0,external_vue_.h)('path', {
        fill: 'currentColor',
        d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
    }),
    (0,external_vue_.h)('polygon', {
        fill: 'currentColor',
        points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
    }),
]);
const OutboundLink_OutboundLink = (_, { slots }) => { var _a; return (0,external_vue_.h)('span', [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]); };
OutboundLink_OutboundLink.displayName = 'OutboundLink';

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js + 1 modules
var Vuepress = __webpack_require__(5577);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/index.js






/***/ }),

/***/ 5617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xp": () => (/* reexport */ pageData),
  "PY": () => (/* reexport */ pageFrontmatterSymbol),
  "VV": () => (/* reexport */ pageHeadSymbol),
  "et": () => (/* reexport */ pageHeadTitleSymbol),
  "b5": () => (/* reexport */ pageLangSymbol),
  "C4": () => (/* reexport */ resolvePageData),
  "hN": () => (/* reexport */ resolvePageFrontmatter),
  "nl": () => (/* reexport */ resolvePageHead),
  "lp": () => (/* reexport */ resolvePageHeadTitle),
  "Vo": () => (/* reexport */ resolvePageLang),
  "S": () => (/* reexport */ resolveRouteLocale),
  "kY": () => (/* reexport */ resolveSiteLocaleData),
  "C3": () => (/* reexport */ routeLocaleSymbol),
  "BK": () => (/* reexport */ setupUpdateHead),
  "HM": () => (/* reexport */ siteData_siteData),
  "AE": () => (/* reexport */ siteLocaleDataSymbol),
  "Vi": () => (/* reexport */ usePageData),
  "I2": () => (/* reexport */ usePageFrontmatter),
  "I": () => (/* reexport */ useRouteLocale),
  "WF": () => (/* reexport */ useSiteData),
  "I5": () => (/* reexport */ useSiteLocaleData)
});

// UNUSED EXPORTS: createHeadTag, pagesData, queryHeadTag, updateHeadSymbol, usePageHead, usePageHeadTitle, usePageLang, usePagesData, useUpdateHead

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pagesData.js
const pagesData = {
  // path: /
  "v-8daa1a0e": () => __webpack_require__.e(/* import() | v-8daa1a0e */ 2509).then(__webpack_require__.bind(__webpack_require__, 3301)).then(({ data }) => data),
  // path: /config/
  "v-ba934fd8": () => __webpack_require__.e(/* import() | v-ba934fd8 */ 5605).then(__webpack_require__.bind(__webpack_require__, 8757)).then(({ data }) => data),
  // path: /guide/
  "v-fffb8e28": () => __webpack_require__.e(/* import() | v-fffb8e28 */ 9807).then(__webpack_require__.bind(__webpack_require__, 6678)).then(({ data }) => data),
  // path: /guide/using-vue.html
  "v-79e93bb0": () => __webpack_require__.e(/* import() | v-79e93bb0 */ 2787).then(__webpack_require__.bind(__webpack_require__, 4964)).then(({ data }) => data),
  // path: /packages/console/
  "v-e4256a7e": () => __webpack_require__.e(/* import() | v-e4256a7e */ 3685).then(__webpack_require__.bind(__webpack_require__, 5454)).then(({ data }) => data),
  // path: /packages/console-colors/
  "v-2e04e120": () => __webpack_require__.e(/* import() | v-2e04e120 */ 9027).then(__webpack_require__.bind(__webpack_require__, 7459)).then(({ data }) => data),
  // path: /packages/console-input/
  "v-6683a124": () => __webpack_require__.e(/* import() | v-6683a124 */ 5972).then(__webpack_require__.bind(__webpack_require__, 5437)).then(({ data }) => data),
  // path: /packages/console-input/getting-started.html
  "v-03ab9c05": () => __webpack_require__.e(/* import() | v-03ab9c05 */ 9141).then(__webpack_require__.bind(__webpack_require__, 5891)).then(({ data }) => data),
  // path: /packages/console-output/
  "v-990410a2": () => __webpack_require__.e(/* import() | v-990410a2 */ 6727).then(__webpack_require__.bind(__webpack_require__, 8405)).then(({ data }) => data),
  // path: /packages/core/
  "v-2a0ff7f2": () => __webpack_require__.e(/* import() | v-2a0ff7f2 */ 6549).then(__webpack_require__.bind(__webpack_require__, 5984)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/
  "v-5e8b1ae3": () => __webpack_require__.e(/* import() | v-5e8b1ae3 */ 3200).then(__webpack_require__.bind(__webpack_require__, 5366)).then(({ data }) => data),
  // path: /packages/shared/
  "v-4e901641": () => __webpack_require__.e(/* import() | v-4e901641 */ 8398).then(__webpack_require__.bind(__webpack_require__, 1844)).then(({ data }) => data),
  // path: /packages/console-colors/api/
  "v-1ec5cb16": () => __webpack_require__.e(/* import() | v-1ec5cb16 */ 6222).then(__webpack_require__.bind(__webpack_require__, 7795)).then(({ data }) => data),
  // path: /packages/console-input/api/
  "v-4bf43879": () => __webpack_require__.e(/* import() | v-4bf43879 */ 2449).then(__webpack_require__.bind(__webpack_require__, 7426)).then(({ data }) => data),
  // path: /packages/console-output/api/
  "v-4f7a5184": () => __webpack_require__.e(/* import() | v-4f7a5184 */ 6223).then(__webpack_require__.bind(__webpack_require__, 5966)).then(({ data }) => data),
  // path: /packages/core/api/
  "v-30331c48": () => __webpack_require__.e(/* import() | v-30331c48 */ 4174).then(__webpack_require__.bind(__webpack_require__, 8293)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/api/
  "v-c7ca8a90": () => __webpack_require__.e(/* import() | v-c7ca8a90 */ 2998).then(__webpack_require__.bind(__webpack_require__, 938)).then(({ data }) => data),
  // path: /packages/console-colors/api/classes/Colors.html
  "v-098e3c4b": () => __webpack_require__.e(/* import() | v-098e3c4b */ 6869).then(__webpack_require__.bind(__webpack_require__, 6640)).then(({ data }) => data),
  // path: /packages/console-colors/api/classes/Parser.html
  "v-b63eda08": () => __webpack_require__.e(/* import() | v-b63eda08 */ 9006).then(__webpack_require__.bind(__webpack_require__, 4430)).then(({ data }) => data),
  // path: /packages/console-colors/api/interfaces/AnsiRgbColors.html
  "v-4ce40c1f": () => __webpack_require__.e(/* import() | v-4ce40c1f */ 3049).then(__webpack_require__.bind(__webpack_require__, 5187)).then(({ data }) => data),
  // path: /packages/console-colors/api/interfaces/ParserParsedTag.html
  "v-45bbd64f": () => __webpack_require__.e(/* import() | v-45bbd64f */ 4304).then(__webpack_require__.bind(__webpack_require__, 2388)).then(({ data }) => data),
  // path: /packages/console-input/api/classes/Input.html
  "v-35a6a531": () => __webpack_require__.e(/* import() | v-35a6a531 */ 735).then(__webpack_require__.bind(__webpack_require__, 1707)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/AutocompleteQuestion.html
  "v-41364e0f": () => __webpack_require__.e(/* import() | v-41364e0f */ 3248).then(__webpack_require__.bind(__webpack_require__, 9352)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/AutocompleteQuestionOptions.html
  "v-552d69b6": () => __webpack_require__.e(/* import() | v-552d69b6 */ 1614).then(__webpack_require__.bind(__webpack_require__, 7263)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/ColorQuestion.html
  "v-c10353a8": () => __webpack_require__.e(/* import() | v-c10353a8 */ 2173).then(__webpack_require__.bind(__webpack_require__, 6318)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/ColorQuestionOptions.html
  "v-240a5868": () => __webpack_require__.e(/* import() | v-240a5868 */ 5144).then(__webpack_require__.bind(__webpack_require__, 6098)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/DatepickerQuestion.html
  "v-62b7bc8a": () => __webpack_require__.e(/* import() | v-62b7bc8a */ 3633).then(__webpack_require__.bind(__webpack_require__, 73)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/DatepickerQuestionOptions.html
  "v-26a23df9": () => __webpack_require__.e(/* import() | v-26a23df9 */ 8202).then(__webpack_require__.bind(__webpack_require__, 964)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/DirectoryQuestion.html
  "v-7e0b8d3c": () => __webpack_require__.e(/* import() | v-7e0b8d3c */ 4284).then(__webpack_require__.bind(__webpack_require__, 6649)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/DirectoryQuestionOptions.html
  "v-06788c72": () => __webpack_require__.e(/* import() | v-06788c72 */ 9380).then(__webpack_require__.bind(__webpack_require__, 5350)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FileFolderQuestion.html
  "v-8a3f05a6": () => __webpack_require__.e(/* import() | v-8a3f05a6 */ 2959).then(__webpack_require__.bind(__webpack_require__, 7492)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FilePathQuestion.html
  "v-6308ae54": () => __webpack_require__.e(/* import() | v-6308ae54 */ 5751).then(__webpack_require__.bind(__webpack_require__, 9472)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FileSelectorQuestion.html
  "v-760b935c": () => __webpack_require__.e(/* import() | v-760b935c */ 3699).then(__webpack_require__.bind(__webpack_require__, 9538)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FileSelectorQuestionOptions.html
  "v-66c6e538": () => __webpack_require__.e(/* import() | v-66c6e538 */ 3117).then(__webpack_require__.bind(__webpack_require__, 1821)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FileTreeSelectionQuestion.html
  "v-43f3387d": () => __webpack_require__.e(/* import() | v-43f3387d */ 550).then(__webpack_require__.bind(__webpack_require__, 3002)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FileTreeSelectionQuestionOptions.html
  "v-061b2e12": () => __webpack_require__.e(/* import() | v-061b2e12 */ 2519).then(__webpack_require__.bind(__webpack_require__, 6027)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/FuzzypathQuestion.html
  "v-fdc3a440": () => __webpack_require__.e(/* import() | v-fdc3a440 */ 7245).then(__webpack_require__.bind(__webpack_require__, 5203)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/MaxinputQuestion.html
  "v-3b94abd1": () => __webpack_require__.e(/* import() | v-3b94abd1 */ 8984).then(__webpack_require__.bind(__webpack_require__, 8343)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/MaxinputQuestionOptions.html
  "v-c98761ba": () => __webpack_require__.e(/* import() | v-c98761ba */ 3433).then(__webpack_require__.bind(__webpack_require__, 8507)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/MyQuestionMap.html
  "v-85e83e2a": () => __webpack_require__.e(/* import() | v-85e83e2a */ 2485).then(__webpack_require__.bind(__webpack_require__, 7694)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/PathQuestion.html
  "v-e2c3ee1c": () => __webpack_require__.e(/* import() | v-e2c3ee1c */ 5529).then(__webpack_require__.bind(__webpack_require__, 5142)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/PathQuestionOptions.html
  "v-a531ca3c": () => __webpack_require__.e(/* import() | v-a531ca3c */ 1369).then(__webpack_require__.bind(__webpack_require__, 8993)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/SuggestQuestion.html
  "v-591106aa": () => __webpack_require__.e(/* import() | v-591106aa */ 2262).then(__webpack_require__.bind(__webpack_require__, 1945)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/SuggestQuestionOptions.html
  "v-2b4fb509": () => __webpack_require__.e(/* import() | v-2b4fb509 */ 7037).then(__webpack_require__.bind(__webpack_require__, 1295)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/TableQuestion.html
  "v-2347e0be": () => __webpack_require__.e(/* import() | v-2347e0be */ 8509).then(__webpack_require__.bind(__webpack_require__, 4818)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/TableQuestionOptions.html
  "v-05e40153": () => __webpack_require__.e(/* import() | v-05e40153 */ 4062).then(__webpack_require__.bind(__webpack_require__, 5894)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/TreeItem.html
  "v-43af7e0c": () => __webpack_require__.e(/* import() | v-43af7e0c */ 7649).then(__webpack_require__.bind(__webpack_require__, 8911)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/TreeQuestion.html
  "v-3afeb3ce": () => __webpack_require__.e(/* import() | v-3afeb3ce */ 7664).then(__webpack_require__.bind(__webpack_require__, 4313)).then(({ data }) => data),
  // path: /packages/console-input/api/interfaces/TreeQuestionOptions.html
  "v-f9d0984a": () => __webpack_require__.e(/* import() | v-f9d0984a */ 773).then(__webpack_require__.bind(__webpack_require__, 8885)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/Colors.html
  "v-531b34dc": () => __webpack_require__.e(/* import() | v-531b34dc */ 3838).then(__webpack_require__.bind(__webpack_require__, 2042)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/Erase.html
  "v-03dfe020": () => __webpack_require__.e(/* import() | v-03dfe020 */ 1980).then(__webpack_require__.bind(__webpack_require__, 9950)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/FiguresParser.html
  "v-799303b8": () => __webpack_require__.e(/* import() | v-799303b8 */ 746).then(__webpack_require__.bind(__webpack_require__, 2870)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/GeneratedIcon.html
  "v-91aa8744": () => __webpack_require__.e(/* import() | v-91aa8744 */ 5511).then(__webpack_require__.bind(__webpack_require__, 1050)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/IconGenerator.html
  "v-741aafec": () => __webpack_require__.e(/* import() | v-741aafec */ 620).then(__webpack_require__.bind(__webpack_require__, 817)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/IterableManager.html
  "v-2ed058cb": () => __webpack_require__.e(/* import() | v-2ed058cb */ 483).then(__webpack_require__.bind(__webpack_require__, 8611)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/Move.html
  "v-541dcbdb": () => __webpack_require__.e(/* import() | v-541dcbdb */ 5267).then(__webpack_require__.bind(__webpack_require__, 7761)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/Output.html
  "v-9c0f282a": () => __webpack_require__.e(/* import() | v-9c0f282a */ 9585).then(__webpack_require__.bind(__webpack_require__, 8431)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/OutputUtil.html
  "v-10e37409": () => __webpack_require__.e(/* import() | v-10e37409 */ 1162).then(__webpack_require__.bind(__webpack_require__, 8846)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/ProgressBar.html
  "v-b1d33340": () => __webpack_require__.e(/* import() | v-b1d33340 */ 2746).then(__webpack_require__.bind(__webpack_require__, 5040)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/StyleManager.html
  "v-22c2e260": () => __webpack_require__.e(/* import() | v-22c2e260 */ 741).then(__webpack_require__.bind(__webpack_require__, 6818)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/StyleParser.html
  "v-579033d4": () => __webpack_require__.e(/* import() | v-579033d4 */ 573).then(__webpack_require__.bind(__webpack_require__, 9975)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/Text.html
  "v-52d38802": () => __webpack_require__.e(/* import() | v-52d38802 */ 3778).then(__webpack_require__.bind(__webpack_require__, 1793)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/Ui.html
  "v-18b0abb8": () => __webpack_require__.e(/* import() | v-18b0abb8 */ 9762).then(__webpack_require__.bind(__webpack_require__, 2907)).then(({ data }) => data),
  // path: /packages/console-output/api/classes/UiBase.html
  "v-2ceed7e7": () => __webpack_require__.e(/* import() | v-2ceed7e7 */ 8638).then(__webpack_require__.bind(__webpack_require__, 3601)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/AnsiRgbColors.html
  "v-0bb77920": () => __webpack_require__.e(/* import() | v-0bb77920 */ 3101).then(__webpack_require__.bind(__webpack_require__, 8261)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/ChalkFunction.html
  "v-65a860d2": () => __webpack_require__.e(/* import() | v-65a860d2 */ 2276).then(__webpack_require__.bind(__webpack_require__, 9026)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/ColorsParserParsedTag.html
  "v-d97663a0": () => __webpack_require__.e(/* import() | v-d97663a0 */ 8713).then(__webpack_require__.bind(__webpack_require__, 6674)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/ColumnsOptions.html
  "v-5a9a96b2": () => __webpack_require__.e(/* import() | v-5a9a96b2 */ 8593).then(__webpack_require__.bind(__webpack_require__, 3388)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Erasers.html
  "v-22383cfa": () => __webpack_require__.e(/* import() | v-22383cfa */ 6550).then(__webpack_require__.bind(__webpack_require__, 1308)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Figures.html
  "v-338b07db": () => __webpack_require__.e(/* import() | v-338b07db */ 500).then(__webpack_require__.bind(__webpack_require__, 3762)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/GenerateOptions.html
  "v-56dc75c1": () => __webpack_require__.e(/* import() | v-56dc75c1 */ 6519).then(__webpack_require__.bind(__webpack_require__, 1374)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/IParser.html
  "v-a01e38bc": () => __webpack_require__.e(/* import() | v-a01e38bc */ 4439).then(__webpack_require__.bind(__webpack_require__, 4907)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/IParserConstructor.html
  "v-2302e254": () => __webpack_require__.e(/* import() | v-2302e254 */ 822).then(__webpack_require__.bind(__webpack_require__, 5435)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/IconData.html
  "v-193eb565": () => __webpack_require__.e(/* import() | v-193eb565 */ 8415).then(__webpack_require__.bind(__webpack_require__, 3750)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/IconsOptions.html
  "v-20697c24": () => __webpack_require__.e(/* import() | v-20697c24 */ 4763).then(__webpack_require__.bind(__webpack_require__, 6727)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/MacroProxy.html
  "v-0bbf62c6": () => __webpack_require__.e(/* import() | v-0bbf62c6 */ 4871).then(__webpack_require__.bind(__webpack_require__, 5233)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/ManagerMacroProxy.html
  "v-239d2b1b": () => __webpack_require__.e(/* import() | v-239d2b1b */ 1158).then(__webpack_require__.bind(__webpack_require__, 1763)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Movers.html
  "v-af2bcf14": () => __webpack_require__.e(/* import() | v-af2bcf14 */ 3991).then(__webpack_require__.bind(__webpack_require__, 8443)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Options.html
  "v-b7f656a8": () => __webpack_require__.e(/* import() | v-b7f656a8 */ 6923).then(__webpack_require__.bind(__webpack_require__, 9223)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/OutputConfig.html
  "v-e1a4ebf6": () => __webpack_require__.e(/* import() | v-e1a4ebf6 */ 7825).then(__webpack_require__.bind(__webpack_require__, 8017)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/OutputOptions.html
  "v-125c7f8d": () => __webpack_require__.e(/* import() | v-125c7f8d */ 703).then(__webpack_require__.bind(__webpack_require__, 2000)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/OutputOptionsTableStyle.html
  "v-0ccc5dca": () => __webpack_require__.e(/* import() | v-0ccc5dca */ 9245).then(__webpack_require__.bind(__webpack_require__, 393)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/OutputOptionsTableStyles.html
  "v-0171dd16": () => __webpack_require__.e(/* import() | v-0171dd16 */ 3168).then(__webpack_require__.bind(__webpack_require__, 3117)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/OutputSpinners.html
  "v-554d8b4d": () => __webpack_require__.e(/* import() | v-554d8b4d */ 8148).then(__webpack_require__.bind(__webpack_require__, 6555)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/OutputStylesConfig.html
  "v-7bf0057a": () => __webpack_require__.e(/* import() | v-7bf0057a */ 6510).then(__webpack_require__.bind(__webpack_require__, 1902)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Palette.html
  "v-2bda26ef": () => __webpack_require__.e(/* import() | v-2bda26ef */ 1457).then(__webpack_require__.bind(__webpack_require__, 1310)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/ProgressBarOptions.html
  "v-304a7e70": () => __webpack_require__.e(/* import() | v-304a7e70 */ 9694).then(__webpack_require__.bind(__webpack_require__, 9745)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Styles.html
  "v-610bf934": () => __webpack_require__.e(/* import() | v-610bf934 */ 2323).then(__webpack_require__.bind(__webpack_require__, 7314)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/TreeData.html
  "v-64c4b7e0": () => __webpack_require__.e(/* import() | v-64c4b7e0 */ 9319).then(__webpack_require__.bind(__webpack_require__, 4626)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/TreeOptions.html
  "v-5e3a422c": () => __webpack_require__.e(/* import() | v-5e3a422c */ 8704).then(__webpack_require__.bind(__webpack_require__, 111)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/Trucolor.html
  "v-3d2bcebc": () => __webpack_require__.e(/* import() | v-3d2bcebc */ 4437).then(__webpack_require__.bind(__webpack_require__, 4573)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/TruncateOptions.html
  "v-ebb5679c": () => __webpack_require__.e(/* import() | v-ebb5679c */ 5567).then(__webpack_require__.bind(__webpack_require__, 278)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/WrapOptions.html
  "v-2dc29996": () => __webpack_require__.e(/* import() | v-2dc29996 */ 2678).then(__webpack_require__.bind(__webpack_require__, 686)).then(({ data }) => data),
  // path: /packages/console-output/api/interfaces/macros.MacroDefinition.html
  "v-005e8bd0": () => __webpack_require__.e(/* import() | v-005e8bd0 */ 8412).then(__webpack_require__.bind(__webpack_require__, 4914)).then(({ data }) => data),
  // path: /packages/console-output/api/modules/macros.html
  "v-5da42c86": () => __webpack_require__.e(/* import() | v-5da42c86 */ 5160).then(__webpack_require__.bind(__webpack_require__, 4495)).then(({ data }) => data),
  // path: /packages/core/api/classes/Application.html
  "v-7e0b0a4e": () => __webpack_require__.e(/* import() | v-7e0b0a4e */ 2278).then(__webpack_require__.bind(__webpack_require__, 1163)).then(({ data }) => data),
  // path: /packages/core/api/classes/ArrayCollection.html
  "v-32393fa7": () => __webpack_require__.e(/* import() | v-32393fa7 */ 920).then(__webpack_require__.bind(__webpack_require__, 1721)).then(({ data }) => data),
  // path: /packages/core/api/classes/CacheManager.html
  "v-2c0761c9": () => __webpack_require__.e(/* import() | v-2c0761c9 */ 8474).then(__webpack_require__.bind(__webpack_require__, 2275)).then(({ data }) => data),
  // path: /packages/core/api/classes/CacheServiceProvider.html
  "v-c74abf60": () => __webpack_require__.e(/* import() | v-c74abf60 */ 1631).then(__webpack_require__.bind(__webpack_require__, 7540)).then(({ data }) => data),
  // path: /packages/core/api/classes/Collection.html
  "v-977c48d4": () => __webpack_require__.e(/* import() | v-977c48d4 */ 6966).then(__webpack_require__.bind(__webpack_require__, 8856)).then(({ data }) => data),
  // path: /packages/core/api/classes/ConfigRepository.html
  "v-2059baf0": () => __webpack_require__.e(/* import() | v-2059baf0 */ 3306).then(__webpack_require__.bind(__webpack_require__, 791)).then(({ data }) => data),
  // path: /packages/core/api/classes/CoreServiceProvider.html
  "v-440f7252": () => __webpack_require__.e(/* import() | v-440f7252 */ 6018).then(__webpack_require__.bind(__webpack_require__, 1350)).then(({ data }) => data),
  // path: /packages/core/api/classes/DirectoryStorage.html
  "v-5ba07eb4": () => __webpack_require__.e(/* import() | v-5ba07eb4 */ 7222).then(__webpack_require__.bind(__webpack_require__, 653)).then(({ data }) => data),
  // path: /packages/core/api/classes/Dispatcher.html
  "v-01fc8d2d": () => __webpack_require__.e(/* import() | v-01fc8d2d */ 6403).then(__webpack_require__.bind(__webpack_require__, 7054)).then(({ data }) => data),
  // path: /packages/core/api/classes/DispatcherMixin.html
  "v-8254fd78": () => __webpack_require__.e(/* import() | v-8254fd78 */ 9973).then(__webpack_require__.bind(__webpack_require__, 3612)).then(({ data }) => data),
  // path: /packages/core/api/classes/FileCacheAdapter.html
  "v-c030606a": () => __webpack_require__.e(/* import() | v-c030606a */ 6373).then(__webpack_require__.bind(__webpack_require__, 9608)).then(({ data }) => data),
  // path: /packages/core/api/classes/Manager.html
  "v-8e63c6de": () => __webpack_require__.e(/* import() | v-8e63c6de */ 6104).then(__webpack_require__.bind(__webpack_require__, 5316)).then(({ data }) => data),
  // path: /packages/core/api/classes/PATH.html
  "v-6c3b8a62": () => __webpack_require__.e(/* import() | v-6c3b8a62 */ 788).then(__webpack_require__.bind(__webpack_require__, 2105)).then(({ data }) => data),
  // path: /packages/core/api/classes/Process.html
  "v-332211e2": () => __webpack_require__.e(/* import() | v-332211e2 */ 1365).then(__webpack_require__.bind(__webpack_require__, 9886)).then(({ data }) => data),
  // path: /packages/core/api/classes/ProcessManager.html
  "v-73576b14": () => __webpack_require__.e(/* import() | v-73576b14 */ 1991).then(__webpack_require__.bind(__webpack_require__, 7040)).then(({ data }) => data),
  // path: /packages/core/api/classes/Repository.html
  "v-14e48b2c": () => __webpack_require__.e(/* import() | v-14e48b2c */ 929).then(__webpack_require__.bind(__webpack_require__, 3648)).then(({ data }) => data),
  // path: /packages/core/api/classes/Service.html
  "v-f5d6eaee": () => __webpack_require__.e(/* import() | v-f5d6eaee */ 2882).then(__webpack_require__.bind(__webpack_require__, 8934)).then(({ data }) => data),
  // path: /packages/core/api/classes/ServiceManager.html
  "v-2222b9bc": () => __webpack_require__.e(/* import() | v-2222b9bc */ 153).then(__webpack_require__.bind(__webpack_require__, 7787)).then(({ data }) => data),
  // path: /packages/core/api/classes/SystemServiceProvider.html
  "v-59004427": () => __webpack_require__.e(/* import() | v-59004427 */ 4525).then(__webpack_require__.bind(__webpack_require__, 3452)).then(({ data }) => data),
  // path: /packages/core/api/classes/TypeDefinitionBuilder.html
  "v-fb8b8520": () => __webpack_require__.e(/* import() | v-fb8b8520 */ 7905).then(__webpack_require__.bind(__webpack_require__, 1918)).then(({ data }) => data),
  // path: /packages/core/api/enums/ExitCode.html
  "v-0334c855": () => __webpack_require__.e(/* import() | v-0334c855 */ 4348).then(__webpack_require__.bind(__webpack_require__, 8398)).then(({ data }) => data),
  // path: /packages/core/api/enums/ProxyFlags.html
  "v-717ceec7": () => __webpack_require__.e(/* import() | v-717ceec7 */ 2898).then(__webpack_require__.bind(__webpack_require__, 1795)).then(({ data }) => data),
  // path: /packages/core/api/enums/ServiceStatus.html
  "v-794249cb": () => __webpack_require__.e(/* import() | v-794249cb */ 7047).then(__webpack_require__.bind(__webpack_require__, 2709)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/Bindings.html
  "v-54106dd2": () => __webpack_require__.e(/* import() | v-54106dd2 */ 4574).then(__webpack_require__.bind(__webpack_require__, 5475)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/CacheAdapter.html
  "v-6aa75a5a": () => __webpack_require__.e(/* import() | v-6aa75a5a */ 1123).then(__webpack_require__.bind(__webpack_require__, 218)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/CacheConfiguration.html
  "v-409d1ecc": () => __webpack_require__.e(/* import() | v-409d1ecc */ 7309).then(__webpack_require__.bind(__webpack_require__, 5199)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/ConfigPart.html
  "v-15e5d4ab": () => __webpack_require__.e(/* import() | v-15e5d4ab */ 1436).then(__webpack_require__.bind(__webpack_require__, 6663)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/DirectoryStorage.JsonOptions.html
  "v-6d52e60a": () => __webpack_require__.e(/* import() | v-6d52e60a */ 6747).then(__webpack_require__.bind(__webpack_require__, 116)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/DirectoryStorageOptions.html
  "v-18fbe5c2": () => __webpack_require__.e(/* import() | v-18fbe5c2 */ 8746).then(__webpack_require__.bind(__webpack_require__, 2462)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/DispatcherEvents.html
  "v-23d48600": () => __webpack_require__.e(/* import() | v-23d48600 */ 3526).then(__webpack_require__.bind(__webpack_require__, 7367)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/EnvPaths.html
  "v-4cf76782": () => __webpack_require__.e(/* import() | v-4cf76782 */ 4272).then(__webpack_require__.bind(__webpack_require__, 8642)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/EnvPathsOptions.html
  "v-bd8c1216": () => __webpack_require__.e(/* import() | v-bd8c1216 */ 1434).then(__webpack_require__.bind(__webpack_require__, 8126)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/FileCacheAdapterOptions.html
  "v-217072fd": () => __webpack_require__.e(/* import() | v-217072fd */ 1666).then(__webpack_require__.bind(__webpack_require__, 1736)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/Hooks.html
  "v-387ec5c2": () => __webpack_require__.e(/* import() | v-387ec5c2 */ 7362).then(__webpack_require__.bind(__webpack_require__, 3354)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/ListenerFn.html
  "v-4fe122c4": () => __webpack_require__.e(/* import() | v-4fe122c4 */ 5136).then(__webpack_require__.bind(__webpack_require__, 3324)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/PathSearchOptions.html
  "v-ef46963e": () => __webpack_require__.e(/* import() | v-ef46963e */ 9875).then(__webpack_require__.bind(__webpack_require__, 3700)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/Paths.html
  "v-27bf6b44": () => __webpack_require__.e(/* import() | v-27bf6b44 */ 3648).then(__webpack_require__.bind(__webpack_require__, 2474)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/ProcessManagerData.html
  "v-4431ecd8": () => __webpack_require__.e(/* import() | v-4431ecd8 */ 8884).then(__webpack_require__.bind(__webpack_require__, 6151)).then(({ data }) => data),
  // path: /packages/core/api/interfaces/SystemConfiguration.html
  "v-287205ea": () => __webpack_require__.e(/* import() | v-287205ea */ 553).then(__webpack_require__.bind(__webpack_require__, 4591)).then(({ data }) => data),
  // path: /packages/core/api/modules/DirectoryStorage.html
  "v-54158147": () => __webpack_require__.e(/* import() | v-54158147 */ 4385).then(__webpack_require__.bind(__webpack_require__, 2518)).then(({ data }) => data),
  // path: /packages/core/api/modules/ServiceStatus.html
  "v-86ab1e94": () => __webpack_require__.e(/* import() | v-86ab1e94 */ 6659).then(__webpack_require__.bind(__webpack_require__, 4869)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/api/classes/JsonFileHandler.html
  "v-41bef194": () => __webpack_require__.e(/* import() | v-41bef194 */ 8191).then(__webpack_require__.bind(__webpack_require__, 8794)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/api/classes/Manager.html
  "v-23815f6d": () => __webpack_require__.e(/* import() | v-23815f6d */ 559).then(__webpack_require__.bind(__webpack_require__, 2920)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/api/interfaces/Change.html
  "v-70e638e8": () => __webpack_require__.e(/* import() | v-70e638e8 */ 2756).then(__webpack_require__.bind(__webpack_require__, 2710)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/api/interfaces/FilePackageDetails.html
  "v-2b7ea7f8": () => __webpack_require__.e(/* import() | v-2b7ea7f8 */ 3581).then(__webpack_require__.bind(__webpack_require__, 7085)).then(({ data }) => data),
  // path: /packages/multi-package-json-manager/api/interfaces/PackageJson.html
  "v-71fa5cc8": () => __webpack_require__.e(/* import() | v-71fa5cc8 */ 2403).then(__webpack_require__.bind(__webpack_require__, 4694)).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 6425)).then(({ data }) => data),
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/pagesData.js


/**
 * Global pages data ref
 */
const pagesData_pagesData = (0,external_vue_.ref)(pagesData);
/**
 * Returns the ref of data resolvers of all pages
 */
const usePagesData = () => pagesData_pagesData;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/pageData.js


/**
 * Empty page data to be used as the fallback value
 */
const pageDataEmpty = (0,external_vue_.readonly)({
    key: '',
    path: '',
    title: '',
    lang: '',
    frontmatter: {},
    excerpt: '',
    headers: [],
});
/**
 * Global page data ref
 */
const pageData = (0,external_vue_.ref)(pageDataEmpty);
/**
 * Returns the ref of the data of current page
 */
const usePageData = () => pageData;
/**
 * Resolve page data according to page key
 */
const resolvePageData = async (pageKey) => {
    const pageDataResolver = pagesData_pagesData.value[pageKey];
    if (!pageDataResolver) {
        return pageDataEmpty;
    }
    const pageData = await pageDataResolver();
    return pageData !== null && pageData !== void 0 ? pageData : pageDataEmpty;
};
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/pageFrontmatter.js

/**
 * Injection key for page frontmatter
 */
const pageFrontmatterSymbol = Symbol( false ? 0 : '');
/**
 * Returns the ref of the frontmatter of current page
 */
const usePageFrontmatter = () => {
    const pageFrontmatter = (0,external_vue_.inject)(pageFrontmatterSymbol);
    if (!pageFrontmatter) {
        throw new Error('usePageFrontmatter() is called without provider.');
    }
    return pageFrontmatter;
};
/**
 * Resolve page frontmatter from page data
 */
const resolvePageFrontmatter = (pageData) => pageData.frontmatter;

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/pageHead.js


/**
 * Injection key for page head
 */
const pageHeadSymbol = Symbol( false ? 0 : '');
/**
 * Returns the ref of the head config of current page
 */
const usePageHead = () => {
    const pageHead = (0,external_vue_.inject)(pageHeadSymbol);
    if (!pageHead) {
        throw new Error('usePageHead() is called without provider.');
    }
    return pageHead;
};
/**
 * Merge the head config in frontmatter and site locale
 *
 * Frontmatter should take priority over site locale
 */
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
    const description = (0,esm/* isString */.HD)(frontmatter.description)
        ? frontmatter.description
        : siteLocale.description;
    const head = [
        ...((0,esm/* isArray */.kJ)(frontmatter.head) ? frontmatter.head : []),
        ...siteLocale.head,
        ['title', {}, headTitle],
        ['meta', { name: 'description', content: description }],
    ];
    return (0,esm/* dedupeHead */.H7)(head);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/pageHeadTitle.js

/**
 * Injection key for page head title
 */
const pageHeadTitleSymbol = Symbol( false ? 0 : '');
/**
 * Returns the ref of the head title of current page
 */
const usePageHeadTitle = () => {
    const pageHeadTitle = inject(pageHeadTitleSymbol);
    if (!pageHeadTitle) {
        throw new Error('usePageHeadTitle() is called without provider.');
    }
    return pageHeadTitle;
};
/**
 * Resolve the content of page head title
 *
 * It would be used as the content of the `<title>` tag
 */
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/pageLang.js

/**
 * Injection key for page language
 */
const pageLangSymbol = Symbol( false ? 0 : '');
/**
 * Returns the ref of the language of current page
 */
const usePageLang = () => {
    const pageLang = (0,external_vue_.inject)(pageLangSymbol);
    if (!pageLang) {
        throw new Error('usePageLang() is called without provider.');
    }
    return pageLang;
};
/**
 * Resolve page language from page data
 *
 * It would be used as the `lang` attribute of `<html>` tag
 */
const resolvePageLang = (pageData) => pageData.lang || 'en';

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/routeLocale.js


/**
 * Injection key for page route locale path
 */
const routeLocaleSymbol = Symbol( false ? 0 : '');
/**
 * Returns the ref of the route locale path of current page
 */
const useRouteLocale = () => {
    const routeLocale = (0,external_vue_.inject)(routeLocaleSymbol);
    if (!routeLocale) {
        throw new Error('useRouteLocale() is called without provider.');
    }
    return routeLocale;
};
/**
 * Resolve locale path according to route path and locales config
 */
const resolveRouteLocale = (locales, routePath) => (0,esm/* resolveLocalePath */.gb)(locales, routePath);

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/siteData.js
const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "NPM Packages",
  "description": "",
  "head": [
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3EAF7C"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ]
  ],
  "locales": {}
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/siteData.js


/**
 * Global site data ref
 */
const siteData_siteData = (0,external_vue_.ref)(siteData);
/**
 * Returns the ref of the site data
 */
const useSiteData = () => siteData_siteData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/siteLocaleData.js

/**
 * Injection key for site locale data
 */
const siteLocaleDataSymbol = Symbol( false ? 0 : '');
/**
 * Returns the ref of the site data of current locale
 */
const useSiteLocaleData = () => {
    const siteLocaleData = (0,external_vue_.inject)(siteLocaleDataSymbol);
    if (!siteLocaleData) {
        throw new Error('useSiteLocaleData() is called without provider.');
    }
    return siteLocaleData;
};
/**
 * Resolve site data for specific locale
 *
 * It would merge the locales fields to the root fields
 */
const resolveSiteLocaleData = (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale],
});

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(2253);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/updateHead.js





/**
 * Injection key for `updateHead` util
 */
const updateHeadSymbol = Symbol( false ? 0 : '');
/**
 * Returns the `updateHead` util
 */
const useUpdateHead = () => {
    const updateHead = inject(updateHeadSymbol);
    if (!updateHead) {
        throw new Error('useUpdateHead() is called without provider.');
    }
    return updateHead;
};
/**
 * Auto update head and provide as global util in setup
 */
const setupUpdateHead = () => {
    const route = (0,external_vue_router_.useRoute)();
    const head = usePageHead();
    const lang = usePageLang();
    // ssr-only, extract page meta info to ssrContext
    if (true) {
        const ssrContext = (0,external_vue_.useSSRContext)();
        if (ssrContext) {
            ssrContext.head = head.value;
            ssrContext.lang = lang.value;
        }
        return;
    }
    const headTags = (0,external_vue_.ref)([]);
    // load current head tags from DOM
    const loadHead = () => {
        head.value.forEach((item) => {
            const tag = queryHeadTag(item);
            if (tag) {
                headTags.value.push(tag);
            }
        });
    };
    // update html lang attribute and head tags to DOM
    const updateHead = () => {
        document.documentElement.lang = lang.value;
        headTags.value.forEach((item) => {
            if (item.parentNode === document.head) {
                document.head.removeChild(item);
            }
        });
        headTags.value.splice(0, headTags.value.length);
        head.value.forEach((item) => {
            const tag = createHeadTag(item);
            if (tag !== null) {
                document.head.appendChild(tag);
                headTags.value.push(tag);
            }
        });
    };
    (0,external_vue_.provide)(updateHeadSymbol, updateHead);
    (0,external_vue_.onMounted)(() => {
        loadHead();
        updateHead();
        // only update head on route change
        (0,external_vue_.watch)(() => route.path, () => updateHead());
    });
};
/**
 * Query the matched head tag of head config
 */
const queryHeadTag = ([tagName, attrs, content = '',]) => {
    const attrsSelector = Object.entries(attrs)
        .map(([key, value]) => {
        if ((0,esm/* isString */.HD)(value)) {
            return `[${key}="${value}"]`;
        }
        if (value === true) {
            return `[${key}]`;
        }
        return '';
    })
        .join('');
    const selector = `head > ${tagName}${attrsSelector}`;
    const tags = Array.from(document.querySelectorAll(selector));
    const matchedTag = tags.find((item) => item.innerText === content);
    return matchedTag || null;
};
/**
 * Create head tag from head config
 */
const createHeadTag = ([tagName, attrs, content,]) => {
    if (!(0,esm/* isString */.HD)(tagName)) {
        return null;
    }
    // create element
    const tag = document.createElement(tagName);
    // set attributes
    if ((0,esm/* isPlainObject */.PO)(attrs)) {
        Object.entries(attrs).forEach(([key, value]) => {
            if ((0,esm/* isString */.HD)(value)) {
                tag.setAttribute(key, value);
            }
            else if (value === true) {
                tag.setAttribute(key, '');
            }
        });
    }
    // set content
    if ((0,esm/* isString */.HD)(content)) {
        tag.appendChild(document.createTextNode(content));
    }
    return tag;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/composables/index.js












/***/ }),

/***/ 7621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MS),
/* harmony export */   "C3": () => (/* reexport safe */ _composables__WEBPACK_IMPORTED_MODULE_3__.C3),
/* harmony export */   "Vi": () => (/* reexport safe */ _composables__WEBPACK_IMPORTED_MODULE_3__.Vi),
/* harmony export */   "I2": () => (/* reexport safe */ _composables__WEBPACK_IMPORTED_MODULE_3__.I2),
/* harmony export */   "I": () => (/* reexport safe */ _composables__WEBPACK_IMPORTED_MODULE_3__.I),
/* harmony export */   "WF": () => (/* reexport safe */ _composables__WEBPACK_IMPORTED_MODULE_3__.WF),
/* harmony export */   "I5": () => (/* reexport safe */ _composables__WEBPACK_IMPORTED_MODULE_3__.I5),
/* harmony export */   "vW": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.vW),
/* harmony export */   "F2": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.F2),
/* harmony export */   "pJ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.pJ)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2253);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4705);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(704);
/* harmony import */ var _composables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5617);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3447);








/***/ }),

/***/ 3447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vW": () => (/* reexport */ defineClientAppEnhance),
  "F2": () => (/* reexport */ defineClientAppSetup),
  "pJ": () => (/* reexport */ withBase)
});

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/defineClientAppEnhance.js
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/defineClientAppSetup.js
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/composables/index.js + 12 modules
var composables = __webpack_require__(5617);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/withBase.js


/**
 * Prefix url with site base
 */
const withBase = (url) => {
    if ((0,esm/* isLinkHttp */.ak)(url))
        return url;
    const base = (0,composables/* useSiteData */.WF)().value.base;
    return `${base}${(0,esm/* removeLeadingSlash */.FY)(url)}`;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/index.js





/***/ }),

/***/ 3928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g$": () => (/* reexport */ resolveThemeLocaleData),
  "ZS": () => (/* reexport */ themeLocaleDataSymbol),
  "BV": () => (/* reexport */ useThemeData),
  "X6": () => (/* reexport */ useThemeLocaleData)
});

// UNUSED EXPORTS: themeData

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/themeData.js
const themeData = {
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": false,
  "navbar": [
    {
      "text": "Packages",
      "children": [
        {
          "text": "Console",
          "link": "/packages/console/"
        },
        {
          "text": "Console Colors",
          "link": "/packages/console-colors/"
        },
        {
          "text": "Console Input",
          "link": "/packages/console-input/"
        },
        {
          "text": "Console Output",
          "link": "/packages/console-output/"
        },
        {
          "text": "Core",
          "link": "/packages/core/"
        },
        {
          "text": "Shared",
          "link": "/packages/shared/"
        },
        {
          "text": "Multi Package Json Manager",
          "link": "/packages/multi-package-json-manager/"
        }
      ]
    },
    {
      "text": "Guide",
      "link": "/guide/"
    },
    {
      "text": "Config",
      "link": "/config/"
    }
  ],
  "sidebarDepth": 5,
  "sidebar": {
    "/guide/": [
      {
        "text": "Guide",
        "children": [
          "",
          "using-vue"
        ]
      }
    ],
    "/packages/console/": [
      {
        "text": "Console",
        "link": "/packages/console/",
        "children": []
      }
    ],
    "/packages/console-colors/": [
      {
        "text": "Console Colors",
        "link": "/packages/console-colors/",
        "children": [
          {
            "text": "api",
            "link": "/packages/console-colors/api/",
            "children": [
              {
                "text": "classes",
                "link": "/packages/console-colors/api/classes/",
                "children": [
                  {
                    "text": "Colors",
                    "link": "/packages/console-colors/api/classes/Colors/",
                    "children": []
                  },
                  {
                    "text": "Parser",
                    "link": "/packages/console-colors/api/classes/Parser/",
                    "children": []
                  }
                ]
              },
              {
                "text": "interfaces",
                "link": "/packages/console-colors/api/interfaces/",
                "children": [
                  {
                    "text": "AnsiRgbColors",
                    "link": "/packages/console-colors/api/interfaces/AnsiRgbColors/",
                    "children": []
                  },
                  {
                    "text": "ParserParsedTag",
                    "link": "/packages/console-colors/api/interfaces/ParserParsedTag/",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "/packages/console-input/": [
      {
        "text": "Console Input",
        "link": "/packages/console-input/",
        "children": [
          {
            "text": "getting-started",
            "link": "/packages/console-input/getting-started/",
            "children": []
          },
          {
            "text": "api",
            "link": "/packages/console-input/api/",
            "children": [
              {
                "text": "classes",
                "link": "/packages/console-input/api/classes/",
                "children": [
                  {
                    "text": "Input",
                    "link": "/packages/console-input/api/classes/Input/",
                    "children": []
                  }
                ]
              },
              {
                "text": "interfaces",
                "link": "/packages/console-input/api/interfaces/",
                "children": [
                  {
                    "text": "AutocompleteQuestion",
                    "link": "/packages/console-input/api/interfaces/AutocompleteQuestion/",
                    "children": []
                  },
                  {
                    "text": "AutocompleteQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/AutocompleteQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "ColorQuestion",
                    "link": "/packages/console-input/api/interfaces/ColorQuestion/",
                    "children": []
                  },
                  {
                    "text": "ColorQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/ColorQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "DatepickerQuestion",
                    "link": "/packages/console-input/api/interfaces/DatepickerQuestion/",
                    "children": []
                  },
                  {
                    "text": "DatepickerQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/DatepickerQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "DirectoryQuestion",
                    "link": "/packages/console-input/api/interfaces/DirectoryQuestion/",
                    "children": []
                  },
                  {
                    "text": "DirectoryQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/DirectoryQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "FileFolderQuestion",
                    "link": "/packages/console-input/api/interfaces/FileFolderQuestion/",
                    "children": []
                  },
                  {
                    "text": "FilePathQuestion",
                    "link": "/packages/console-input/api/interfaces/FilePathQuestion/",
                    "children": []
                  },
                  {
                    "text": "FileSelectorQuestion",
                    "link": "/packages/console-input/api/interfaces/FileSelectorQuestion/",
                    "children": []
                  },
                  {
                    "text": "FileSelectorQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/FileSelectorQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "FileTreeSelectionQuestion",
                    "link": "/packages/console-input/api/interfaces/FileTreeSelectionQuestion/",
                    "children": []
                  },
                  {
                    "text": "FileTreeSelectionQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/FileTreeSelectionQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "FuzzypathQuestion",
                    "link": "/packages/console-input/api/interfaces/FuzzypathQuestion/",
                    "children": []
                  },
                  {
                    "text": "MaxinputQuestion",
                    "link": "/packages/console-input/api/interfaces/MaxinputQuestion/",
                    "children": []
                  },
                  {
                    "text": "MaxinputQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/MaxinputQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "MyQuestionMap",
                    "link": "/packages/console-input/api/interfaces/MyQuestionMap/",
                    "children": []
                  },
                  {
                    "text": "PathQuestion",
                    "link": "/packages/console-input/api/interfaces/PathQuestion/",
                    "children": []
                  },
                  {
                    "text": "PathQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/PathQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "SuggestQuestion",
                    "link": "/packages/console-input/api/interfaces/SuggestQuestion/",
                    "children": []
                  },
                  {
                    "text": "SuggestQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/SuggestQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "TableQuestion",
                    "link": "/packages/console-input/api/interfaces/TableQuestion/",
                    "children": []
                  },
                  {
                    "text": "TableQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/TableQuestionOptions/",
                    "children": []
                  },
                  {
                    "text": "TreeItem",
                    "link": "/packages/console-input/api/interfaces/TreeItem/",
                    "children": []
                  },
                  {
                    "text": "TreeQuestion",
                    "link": "/packages/console-input/api/interfaces/TreeQuestion/",
                    "children": []
                  },
                  {
                    "text": "TreeQuestionOptions",
                    "link": "/packages/console-input/api/interfaces/TreeQuestionOptions/",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "/packages/console-output/": [
      {
        "text": "Console Output",
        "link": "/packages/console-output/",
        "children": [
          {
            "text": "api",
            "link": "/packages/console-output/api/",
            "children": [
              {
                "text": "classes",
                "link": "/packages/console-output/api/classes/",
                "children": [
                  {
                    "text": "Colors",
                    "link": "/packages/console-output/api/classes/Colors/",
                    "children": []
                  },
                  {
                    "text": "Erase",
                    "link": "/packages/console-output/api/classes/Erase/",
                    "children": []
                  },
                  {
                    "text": "FiguresParser",
                    "link": "/packages/console-output/api/classes/FiguresParser/",
                    "children": []
                  },
                  {
                    "text": "GeneratedIcon",
                    "link": "/packages/console-output/api/classes/GeneratedIcon/",
                    "children": []
                  },
                  {
                    "text": "IconGenerator",
                    "link": "/packages/console-output/api/classes/IconGenerator/",
                    "children": []
                  },
                  {
                    "text": "IterableManager",
                    "link": "/packages/console-output/api/classes/IterableManager/",
                    "children": []
                  },
                  {
                    "text": "Move",
                    "link": "/packages/console-output/api/classes/Move/",
                    "children": []
                  },
                  {
                    "text": "Output",
                    "link": "/packages/console-output/api/classes/Output/",
                    "children": []
                  },
                  {
                    "text": "OutputUtil",
                    "link": "/packages/console-output/api/classes/OutputUtil/",
                    "children": []
                  },
                  {
                    "text": "ProgressBar",
                    "link": "/packages/console-output/api/classes/ProgressBar/",
                    "children": []
                  },
                  {
                    "text": "StyleManager",
                    "link": "/packages/console-output/api/classes/StyleManager/",
                    "children": []
                  },
                  {
                    "text": "StyleParser",
                    "link": "/packages/console-output/api/classes/StyleParser/",
                    "children": []
                  },
                  {
                    "text": "Text",
                    "link": "/packages/console-output/api/classes/Text/",
                    "children": []
                  },
                  {
                    "text": "Ui",
                    "link": "/packages/console-output/api/classes/Ui/",
                    "children": []
                  },
                  {
                    "text": "UiBase",
                    "link": "/packages/console-output/api/classes/UiBase/",
                    "children": []
                  }
                ]
              },
              {
                "text": "interfaces",
                "link": "/packages/console-output/api/interfaces/",
                "children": [
                  {
                    "text": "AnsiRgbColors",
                    "link": "/packages/console-output/api/interfaces/AnsiRgbColors/",
                    "children": []
                  },
                  {
                    "text": "ChalkFunction",
                    "link": "/packages/console-output/api/interfaces/ChalkFunction/",
                    "children": []
                  },
                  {
                    "text": "ColorsParserParsedTag",
                    "link": "/packages/console-output/api/interfaces/ColorsParserParsedTag/",
                    "children": []
                  },
                  {
                    "text": "ColumnsOptions",
                    "link": "/packages/console-output/api/interfaces/ColumnsOptions/",
                    "children": []
                  },
                  {
                    "text": "Erasers",
                    "link": "/packages/console-output/api/interfaces/Erasers/",
                    "children": []
                  },
                  {
                    "text": "Figures",
                    "link": "/packages/console-output/api/interfaces/Figures/",
                    "children": []
                  },
                  {
                    "text": "GenerateOptions",
                    "link": "/packages/console-output/api/interfaces/GenerateOptions/",
                    "children": []
                  },
                  {
                    "text": "IconData",
                    "link": "/packages/console-output/api/interfaces/IconData/",
                    "children": []
                  },
                  {
                    "text": "IconsOptions",
                    "link": "/packages/console-output/api/interfaces/IconsOptions/",
                    "children": []
                  },
                  {
                    "text": "IParser",
                    "link": "/packages/console-output/api/interfaces/IParser/",
                    "children": []
                  },
                  {
                    "text": "IParserConstructor",
                    "link": "/packages/console-output/api/interfaces/IParserConstructor/",
                    "children": []
                  },
                  {
                    "text": "MacroProxy",
                    "link": "/packages/console-output/api/interfaces/MacroProxy/",
                    "children": []
                  },
                  {
                    "text": "macros.MacroDefinition",
                    "link": "/packages/console-output/api/interfaces/macros.MacroDefinition/",
                    "children": []
                  },
                  {
                    "text": "ManagerMacroProxy",
                    "link": "/packages/console-output/api/interfaces/ManagerMacroProxy/",
                    "children": []
                  },
                  {
                    "text": "Movers",
                    "link": "/packages/console-output/api/interfaces/Movers/",
                    "children": []
                  },
                  {
                    "text": "Options",
                    "link": "/packages/console-output/api/interfaces/Options/",
                    "children": []
                  },
                  {
                    "text": "OutputConfig",
                    "link": "/packages/console-output/api/interfaces/OutputConfig/",
                    "children": []
                  },
                  {
                    "text": "OutputOptions",
                    "link": "/packages/console-output/api/interfaces/OutputOptions/",
                    "children": []
                  },
                  {
                    "text": "OutputOptionsTableStyle",
                    "link": "/packages/console-output/api/interfaces/OutputOptionsTableStyle/",
                    "children": []
                  },
                  {
                    "text": "OutputOptionsTableStyles",
                    "link": "/packages/console-output/api/interfaces/OutputOptionsTableStyles/",
                    "children": []
                  },
                  {
                    "text": "OutputSpinners",
                    "link": "/packages/console-output/api/interfaces/OutputSpinners/",
                    "children": []
                  },
                  {
                    "text": "OutputStylesConfig",
                    "link": "/packages/console-output/api/interfaces/OutputStylesConfig/",
                    "children": []
                  },
                  {
                    "text": "Palette",
                    "link": "/packages/console-output/api/interfaces/Palette/",
                    "children": []
                  },
                  {
                    "text": "ProgressBarOptions",
                    "link": "/packages/console-output/api/interfaces/ProgressBarOptions/",
                    "children": []
                  },
                  {
                    "text": "Styles",
                    "link": "/packages/console-output/api/interfaces/Styles/",
                    "children": []
                  },
                  {
                    "text": "TreeData",
                    "link": "/packages/console-output/api/interfaces/TreeData/",
                    "children": []
                  },
                  {
                    "text": "TreeOptions",
                    "link": "/packages/console-output/api/interfaces/TreeOptions/",
                    "children": []
                  },
                  {
                    "text": "Trucolor",
                    "link": "/packages/console-output/api/interfaces/Trucolor/",
                    "children": []
                  },
                  {
                    "text": "TruncateOptions",
                    "link": "/packages/console-output/api/interfaces/TruncateOptions/",
                    "children": []
                  },
                  {
                    "text": "WrapOptions",
                    "link": "/packages/console-output/api/interfaces/WrapOptions/",
                    "children": []
                  }
                ]
              },
              {
                "text": "modules",
                "link": "/packages/console-output/api/modules/",
                "children": [
                  {
                    "text": "macros",
                    "link": "/packages/console-output/api/modules/macros/",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "/packages/core/": [
      {
        "text": "Core",
        "link": "/packages/core/",
        "children": [
          {
            "text": "api",
            "link": "/packages/core/api/",
            "children": [
              {
                "text": "classes",
                "link": "/packages/core/api/classes/",
                "children": [
                  {
                    "text": "Application",
                    "link": "/packages/core/api/classes/Application/",
                    "children": []
                  },
                  {
                    "text": "ArrayCollection",
                    "link": "/packages/core/api/classes/ArrayCollection/",
                    "children": []
                  },
                  {
                    "text": "CacheManager",
                    "link": "/packages/core/api/classes/CacheManager/",
                    "children": []
                  },
                  {
                    "text": "CacheServiceProvider",
                    "link": "/packages/core/api/classes/CacheServiceProvider/",
                    "children": []
                  },
                  {
                    "text": "Collection",
                    "link": "/packages/core/api/classes/Collection/",
                    "children": []
                  },
                  {
                    "text": "ConfigRepository",
                    "link": "/packages/core/api/classes/ConfigRepository/",
                    "children": []
                  },
                  {
                    "text": "CoreServiceProvider",
                    "link": "/packages/core/api/classes/CoreServiceProvider/",
                    "children": []
                  },
                  {
                    "text": "DirectoryStorage",
                    "link": "/packages/core/api/classes/DirectoryStorage/",
                    "children": []
                  },
                  {
                    "text": "Dispatcher",
                    "link": "/packages/core/api/classes/Dispatcher/",
                    "children": []
                  },
                  {
                    "text": "DispatcherMixin",
                    "link": "/packages/core/api/classes/DispatcherMixin/",
                    "children": []
                  },
                  {
                    "text": "FileCacheAdapter",
                    "link": "/packages/core/api/classes/FileCacheAdapter/",
                    "children": []
                  },
                  {
                    "text": "Manager",
                    "link": "/packages/core/api/classes/Manager/",
                    "children": []
                  },
                  {
                    "text": "PATH",
                    "link": "/packages/core/api/classes/PATH/",
                    "children": []
                  },
                  {
                    "text": "Process",
                    "link": "/packages/core/api/classes/Process/",
                    "children": []
                  },
                  {
                    "text": "ProcessManager",
                    "link": "/packages/core/api/classes/ProcessManager/",
                    "children": []
                  },
                  {
                    "text": "Repository",
                    "link": "/packages/core/api/classes/Repository/",
                    "children": []
                  },
                  {
                    "text": "Service",
                    "link": "/packages/core/api/classes/Service/",
                    "children": []
                  },
                  {
                    "text": "ServiceManager",
                    "link": "/packages/core/api/classes/ServiceManager/",
                    "children": []
                  },
                  {
                    "text": "SystemServiceProvider",
                    "link": "/packages/core/api/classes/SystemServiceProvider/",
                    "children": []
                  },
                  {
                    "text": "TypeDefinitionBuilder",
                    "link": "/packages/core/api/classes/TypeDefinitionBuilder/",
                    "children": []
                  }
                ]
              },
              {
                "text": "enums",
                "link": "/packages/core/api/enums/",
                "children": [
                  {
                    "text": "ExitCode",
                    "link": "/packages/core/api/enums/ExitCode/",
                    "children": []
                  },
                  {
                    "text": "ProxyFlags",
                    "link": "/packages/core/api/enums/ProxyFlags/",
                    "children": []
                  },
                  {
                    "text": "ServiceStatus",
                    "link": "/packages/core/api/enums/ServiceStatus/",
                    "children": []
                  }
                ]
              },
              {
                "text": "interfaces",
                "link": "/packages/core/api/interfaces/",
                "children": [
                  {
                    "text": "Bindings",
                    "link": "/packages/core/api/interfaces/Bindings/",
                    "children": []
                  },
                  {
                    "text": "CacheAdapter",
                    "link": "/packages/core/api/interfaces/CacheAdapter/",
                    "children": []
                  },
                  {
                    "text": "CacheConfiguration",
                    "link": "/packages/core/api/interfaces/CacheConfiguration/",
                    "children": []
                  },
                  {
                    "text": "ConfigPart",
                    "link": "/packages/core/api/interfaces/ConfigPart/",
                    "children": []
                  },
                  {
                    "text": "DirectoryStorage.JsonOptions",
                    "link": "/packages/core/api/interfaces/DirectoryStorage.JsonOptions/",
                    "children": []
                  },
                  {
                    "text": "DirectoryStorageOptions",
                    "link": "/packages/core/api/interfaces/DirectoryStorageOptions/",
                    "children": []
                  },
                  {
                    "text": "DispatcherEvents",
                    "link": "/packages/core/api/interfaces/DispatcherEvents/",
                    "children": []
                  },
                  {
                    "text": "EnvPaths",
                    "link": "/packages/core/api/interfaces/EnvPaths/",
                    "children": []
                  },
                  {
                    "text": "EnvPathsOptions",
                    "link": "/packages/core/api/interfaces/EnvPathsOptions/",
                    "children": []
                  },
                  {
                    "text": "FileCacheAdapterOptions",
                    "link": "/packages/core/api/interfaces/FileCacheAdapterOptions/",
                    "children": []
                  },
                  {
                    "text": "Hooks",
                    "link": "/packages/core/api/interfaces/Hooks/",
                    "children": []
                  },
                  {
                    "text": "ListenerFn",
                    "link": "/packages/core/api/interfaces/ListenerFn/",
                    "children": []
                  },
                  {
                    "text": "Paths",
                    "link": "/packages/core/api/interfaces/Paths/",
                    "children": []
                  },
                  {
                    "text": "PathSearchOptions",
                    "link": "/packages/core/api/interfaces/PathSearchOptions/",
                    "children": []
                  },
                  {
                    "text": "ProcessManagerData",
                    "link": "/packages/core/api/interfaces/ProcessManagerData/",
                    "children": []
                  },
                  {
                    "text": "SystemConfiguration",
                    "link": "/packages/core/api/interfaces/SystemConfiguration/",
                    "children": []
                  }
                ]
              },
              {
                "text": "modules",
                "link": "/packages/core/api/modules/",
                "children": [
                  {
                    "text": "DirectoryStorage",
                    "link": "/packages/core/api/modules/DirectoryStorage/",
                    "children": []
                  },
                  {
                    "text": "ServiceStatus",
                    "link": "/packages/core/api/modules/ServiceStatus/",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "/packages/shared/": [
      {
        "text": "Shared",
        "link": "/packages/shared/",
        "children": []
      }
    ],
    "/packages/multi-package-json-manager/": [
      {
        "text": "Multi Package Json Manager",
        "link": "/packages/multi-package-json-manager/",
        "children": [
          {
            "text": "api",
            "link": "/packages/multi-package-json-manager/api/",
            "children": [
              {
                "text": "classes",
                "link": "/packages/multi-package-json-manager/api/classes/",
                "children": [
                  {
                    "text": "JsonFileHandler",
                    "link": "/packages/multi-package-json-manager/api/classes/JsonFileHandler/",
                    "children": []
                  },
                  {
                    "text": "Manager",
                    "link": "/packages/multi-package-json-manager/api/classes/Manager/",
                    "children": []
                  }
                ]
              },
              {
                "text": "interfaces",
                "link": "/packages/multi-package-json-manager/api/interfaces/",
                "children": [
                  {
                    "text": "Change",
                    "link": "/packages/multi-package-json-manager/api/interfaces/Change/",
                    "children": []
                  },
                  {
                    "text": "FilePackageDetails",
                    "link": "/packages/multi-package-json-manager/api/interfaces/FilePackageDetails/",
                    "children": []
                  },
                  {
                    "text": "PackageJson",
                    "link": "/packages/multi-package-json-manager/api/interfaces/PackageJson/",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/useThemeData.js


const useThemeData_themeData = (0,external_vue_.ref)(themeData);
const useThemeData = () => useThemeData_themeData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/useThemeLocaleData.js

const themeLocaleDataSymbol = Symbol( false ? 0 : '');
const useThemeLocaleData = () => {
    const themeLocaleData = (0,external_vue_.inject)(themeLocaleDataSymbol);
    if (!themeLocaleData) {
        throw new Error('useThemeLocaleData() is called without provider.');
    }
    return themeLocaleData;
};
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
const resolveThemeLocaleData = (theme, routeLocale) => {
    var _a;
    return ({
        ...theme,
        ...(_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale],
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js




/***/ }),

/***/ 5897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H7": () => (/* reexport */ dedupeHead),
  "kJ": () => (/* reexport */ shared_namespaceObject.isArray),
  "mf": () => (/* reexport */ shared_namespaceObject.isFunction),
  "ak": () => (/* reexport */ isLinkHttp),
  "B2": () => (/* reexport */ isLinkMailto),
  "R5": () => (/* reexport */ isLinkTel),
  "PO": () => (/* reexport */ isPlainObject),
  "HD": () => (/* reexport */ shared_namespaceObject.isString),
  "U1": () => (/* reexport */ removeEndingSlash),
  "FY": () => (/* reexport */ removeLeadingSlash),
  "gb": () => (/* reexport */ resolveLocalePath)
});

// UNUSED EXPORTS: ensureEndingSlash, ensureLeadingSlash, formatDateString, htmlEscape, htmlUnescape, isLinkExternal, isLinkFtp, isPromise, normalizePackageName, resolveHeadIdentifier, resolveRoutePathFromUrl

;// CONCATENATED MODULE: external "@vue/shared"
const shared_namespaceObject = require("@vue/shared");
;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveHeadIdentifier.js
/**
 * Resolve identifier of a tag, to avoid duplicated tags in `<head>`
 */
const resolveHeadIdentifier = ([tag, attrs, content,]) => {
    // avoid duplicated `<meta>` with same `name`
    if (tag === 'meta' && attrs.name) {
        return `${tag}.${attrs.name}`;
    }
    // there should be only one `<title>` or `<base>`
    if (['title', 'base'].includes(tag)) {
        return tag;
    }
    // avoid duplicated `<template>` with same `id`
    if (tag === 'template' && attrs.id) {
        return `${tag}.${attrs.id}`;
    }
    return JSON.stringify([tag, attrs, content]);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/dedupeHead.js

/**
 * Dedupe head config with identifier
 *
 * Items that appear earlier have higher priority
 */
const dedupeHead = (head) => {
    const identifierSet = new Set();
    const result = [];
    head.forEach((item) => {
        const identifier = resolveHeadIdentifier(item);
        if (!identifierSet.has(identifier)) {
            identifierSet.add(identifier);
            result.push(item);
        }
    });
    return result;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlEscape.js
const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
};
const htmlEscapeRegexp = /[&<>'"]/g;
/**
 * Escape html chars
 */
const htmlEscape = (str) => str.replace(htmlEscapeRegexp, (char) => htmlEscapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlUnescape.js
const htmlUnescapeMap = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
};
const htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
/**
 * Unescape html chars
 */
const htmlUnescape = (str) => str.replace(htmlUnescapeRegexp, (char) => htmlUnescapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkHttp.js
/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkMailto.js
/**
 * Determine a link is a mailto: address or not
 */
const isLinkMailto = (link) => /^mailto:/.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkTel.js
/**
 * Determine a link is a tel: address or not
 */
const isLinkTel = (link) => /^tel:/.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isPlainObject.js
/**
 * Check if a value is plain object, with generic type support
 */
const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeEndingSlash.js
/**
 * Remove ending slash / from a string
 */
const removeEndingSlash = (str) => str.replace(/\/$/, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeLeadingSlash.js
/**
 * Remove leading slash / from a string
 */
const removeLeadingSlash = (str) => str.replace(/^\//, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveLocalePath.js
/**
 * Resolve the matched locale path of route path
 */
const resolveLocalePath = (locales, routePath) => {
    const localePaths = Object.keys(locales).sort((a, b) => {
        const levelDelta = b.split('/').length - a.split('/').length;
        if (levelDelta !== 0) {
            return levelDelta;
        }
        return b.length - a.length;
    });
    for (const localePath of localePaths) {
        if (routePath.startsWith(localePath)) {
            return localePath;
        }
    }
    return '/';
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/index.js




















;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js




/***/ }),

/***/ 4391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OX": () => (/* reexport */ setupDarkMode),
  "fR": () => (/* reexport */ setupSidebarItems),
  "vs": () => (/* reexport */ useDarkMode),
  "sC": () => (/* reexport */ useNavLink),
  "P$": () => (/* reexport */ useScrollPromise),
  "VU": () => (/* reexport */ useSidebarItems),
  "X6": () => (/* reexport */ useThemeLocaleData)
});

// UNUSED EXPORTS: darkModeSymbol, headerToSidebarItem, headersToSidebarItemChildren, resolveArraySidebarItems, resolveAutoSidebarItems, resolveMultiSidebarItems, resolveSidebarItems, sidebarItemsSymbol, updateHtmlDarkClass, useResolveRouteWithRedirect, useThemeData

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
;// CONCATENATED MODULE: ./node_modules/vue-demi/lib/index.mjs


var lib_isVue2 = false
var lib_isVue3 = true
var Vue2 = undefined

function install() {}

function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}




;// CONCATENATED MODULE: ./node_modules/@vueuse/shared/index.mjs


function and(...args) {
  return computed(() => args.every((i) => unref(i)));
}

function biSyncRef(a, b) {
  const flush = "sync";
  const stop1 = watch(a, (newValue) => {
    b.value = newValue;
  }, {
    flush,
    immediate: true
  });
  const stop2 = watch(b, (newValue) => {
    a.value = newValue;
  }, {
    flush,
    immediate: true
  });
  return () => {
    stop1();
    stop2();
  };
}

function controlledComputed(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  watch(source, () => {
    dirty.value = true;
    trigger();
  }, { flush: "sync" });
  return customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = fn();
          dirty.value = false;
        }
        track();
        return v;
      },
      set() {
      }
    };
  });
}

function __onlyVue3(name = "this function") {
  if (isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if (isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function controlledRef(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}

function shared_createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = effectScope(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function reactify(fn) {
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unref(i))));
  };
}

function shared_tryOnScopeDispose(fn) {
  if ((0,external_vue_.getCurrentScope)()) {
    (0,external_vue_.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    shared_tryOnScopeDispose(dispose);
    return state;
  };
}

const shared_isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const shared_toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const shared_isFunction = (val) => typeof val === "function";
const shared_isNumber = (val) => typeof val === "number";
const shared_isString = (val) => typeof val === "string";
const shared_isObject = (val) => shared_toString.call(val) === "[object Object]";
const isWindow = (val) => typeof window !== "undefined" && shared_toString.call(val) === "[object Window]";
const now = () => Date.now();
const shared_timestamp = () => +Date.now();
const shared_clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const shared_noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function shared_createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const shared_bypassFilter = (invoke) => {
  return invoke();
};
function shared_debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = unref(ms);
    const maxDuration = unref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function shared_throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let preventLeading = !leading;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (preventLeading)
        preventLeading = false;
      else
        invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        if (!leading)
          preventLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => preventLeading = true, duration);
  };
  return filter;
}
function shared_pausableFilter(extendFilter = shared_bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function shared_promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function shared_identity(arg) {
  return arg;
}
function shared_createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function shared_containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function shared_increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function shared_objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || !obj[k] === void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function shared_useDebounceFn(fn, ms = 200, options = {}) {
  return shared_createFilterWrapper(shared_debounceFilter(ms, options), fn);
}

function useDebounce(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = ref(value.value);
  const updater = shared_useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}

var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = shared_bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return (0,external_vue_.watch)(source, shared_createFilterWrapper(eventFilter, cb), watchOptions);
}

var __defProp$7 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function debouncedWatch(source, cb, options = {}) {
  const _a = options, {
    debounce = 0
  } = _a, watchOptions = __objRest$4(_a, [
    "debounce"
  ]);
  return watchWithFilter(source, cb, __spreadProps$4(__spreadValues$7({}, watchOptions), {
    eventFilter: shared_debounceFilter(debounce)
  }));
}

function eagerComputed(fn) {
  const result = shallowRef();
  watchSyncEffect(() => {
    result.value = fn();
  });
  return readonly(result);
}

function get(obj, key) {
  if (key == null)
    return unref(obj);
  return unref(obj)[key];
}

var __defProp$6 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function shared_ignorableWatch(source, cb, options = {}) {
  const _a = options, {
    eventFilter = shared_bypassFilter
  } = _a, watchOptions = __objRest$3(_a, [
    "eventFilter"
  ]);
  const filteredCb = shared_createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = ref(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = watch(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = ref(0);
    const syncCounter = ref(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(watch(source, () => {
      syncCounter.value++;
    }, __spreadProps$3(__spreadValues$6({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(watch(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function isDefined(v) {
  return unref(v) != null;
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$5({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function not(v) {
  return computed(() => !unref(v));
}

function or(...args) {
  return computed(() => args.some((i) => unref(i)));
}

var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function shared_pausableWatch(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = shared_pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$4({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj)) : value
    ];
  }));
}

function reactivePick(obj, ...keys) {
  return reactive(Object.fromEntries(keys.map((k) => [k, toRef(obj, k)])));
}

function refDefault(source, defaultValue) {
  return computed({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function shared_set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (isVue2) {
      set$1(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function syncRef(source, targets, {
  flush = "sync",
  deep = false,
  immediate = true
} = {}) {
  if (!Array.isArray(targets))
    targets = [targets];
  return watch(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

function shared_useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return shared_createFilterWrapper(shared_throttleFilter(ms, trailing, leading), fn);
}

function useThrottle(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = ref(value.value);
  const updater = shared_useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  watch(value, () => updater());
  return throttled;
}

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function throttledWatch(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest$1(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return watchWithFilter(source, cb, __spreadProps$1(__spreadValues$3({}, watchOptions), {
    eventFilter: shared_throttleFilter(throttle, trailing, leading)
  }));
}

function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function shared_toRefs(objectRef) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          objectRef.value = __spreadProps(__spreadValues$2({}, objectRef.value), { [key]: v });
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn);
}

function shared_tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function shared_tryOnUnmounted(fn) {
  if (getCurrentInstance())
    onUnmounted(fn);
}

function until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(r, (v) => {
        if (condition(v) === !isNot) {
          stop == null ? void 0 : stop();
          resolve();
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout) {
      promises.push(shared_promiseTimeout(timeout, throwOnTimeout).finally(() => {
        stop == null ? void 0 : stop();
      }));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    return toMatch((v) => v === unref(value), options);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(unref(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(unref(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useCounter(initialValue = 0, options = {}) {
  const count = ref(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

function shared_useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (interval <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, interval);
  }
  if (immediate && shared_isClient)
    resume();
  shared_tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = ref(0);
  const controls = shared_useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$1({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = ref((_a = options.initialValue) != null ? _a : null);
  watch(source, () => ms.value = shared_timestamp(), options);
  return ms;
}

function shared_useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (shared_isClient)
      start();
  }
  shared_tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = shared_useTimeoutFn(shared_noop, interval, options);
  const ready = computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false) {
  if (isRef(initialValue)) {
    return (value) => {
      initialValue.value = typeof value === "boolean" ? value : !initialValue.value;
    };
  } else {
    const boolean = ref(initialValue);
    const toggle = (value) => {
      boolean.value = typeof value === "boolean" ? value : !boolean.value;
    };
    return [boolean, toggle];
  }
}

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest(_a, [
    "count"
  ]);
  const current = ref(0);
  const stop = watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= unref(count))
      stop();
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

function watchOnce(source, cb, options) {
  const stop = watch(source, (...args) => {
    stop();
    return cb(...args);
  }, options);
}

function whenever(source, cb, options) {
  return watch(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}



;// CONCATENATED MODULE: ./node_modules/@vueuse/core/index.mjs





function asyncComputed(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    try {
      if (evaluating) {
        Promise.resolve().then(() => {
          evaluating.value = true;
        });
      }
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function autoResetRef(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, unref(afterMs));
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = inject(key);
  if (defaultSource)
    source = inject(key, defaultSource);
  if (treatDefaultAsFactory)
    source = inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return computed((ctx) => options(source, ctx));
  } else {
    return computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => unref(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = unref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = shared_isClient ? window : void 0;
const defaultDocument = shared_isClient ? window.document : void 0;
const defaultNavigator = shared_isClient ? window.navigator : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (shared_isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return shared_noop;
  let cleanup = shared_noop;
  const stopWatch = (0,external_vue_.watch)(() => (0,external_vue_.unref)(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = shared_noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  shared_tryOnScopeDispose(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, event = "pointerdown" } = options;
  if (!window)
    return;
  const listener = (event2) => {
    const el = unrefElement(target);
    if (!el)
      return;
    if (el === event2.target || event2.composedPath().includes(el))
      return;
    handler(event2);
  };
  return useEventListener(window, event, listener, { passive: true });
}

var __defProp$c = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$6(__spreadValues$c({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$6(__spreadValues$c({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$6(__spreadValues$c({}, options), { eventName: "keyup" }));
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  onMounted(_trigger);
  onUpdated(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const counter = ref(0);
  if (window) {
    useEventListener(window, "blur", () => counter.value += 1, true);
    useEventListener(window, "focus", () => counter.value += 1, true);
  }
  return computed(() => {
    counter.value;
    return window == null ? void 0 : window.document.activeElement;
  });
}

function useAsyncState(promise, initialState, options = {}) {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    resetOnExecute = true
  } = options;
  const state = shallowRef(initialState);
  const isReady = ref(false);
  const error = ref(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    if (delay2 > 0)
      await promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    error,
    execute
  };
}

function useBase64(target, options) {
  const base64 = ref("");
  const promise = ref();
  function execute() {
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = unref(target);
        if (_target === void 0 || _target === null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  watch(target, execute, { immediate: true });
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = navigator && "getBattery" in navigator;
  const charging = ref(false);
  const chargingTime = ref(0);
  const dischargingTime = ref(0);
  const level = ref(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return (0,external_vue_.ref)(false);
  const mediaQuery = window.matchMedia(query);
  const matches = (0,external_vue_.ref)(mediaQuery.matches);
  const handler = (event) => {
    matches.value = event.matches;
  };
  if ("addEventListener" in mediaQuery)
    mediaQuery.addEventListener("change", handler);
  else
    mediaQuery.addListener(handler);
  shared_tryOnScopeDispose(() => {
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$b = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$b({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = ref(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = true,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = unref(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

function useConfirmDialog(revealed = ref(false)) {
  const confirmHook = createEventHook();
  const cancelHook = createEventHook();
  const revealHook = createEventHook();
  let _resolve = noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow } = {}) {
  const variable = ref("");
  const elRef = computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  watch(elRef, (el) => {
    if (el && window)
      variable.value = window.getComputedStyle(el).getPropertyValue(prop);
  }, { immediate: true });
  watch(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(prop, val);
  });
  return variable;
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  }
};
function useStorage(key, initialValue, storage = ((_a) => (_a = defaultWindow) == null ? void 0 : _a.localStorage)(), options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = (0,external_vue_.unref)(initialValue);
  const type = rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  const data = (shallow ? external_vue_.shallowRef : external_vue_.ref)(initialValue);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
      } else {
        data.value = serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    watchWithFilter(data, () => {
      try {
        if (data.value == null)
          storage.removeItem(key);
        else
          storage.setItem(key, serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

function useDark(options = {}) {
  var _a;
  const {
    selector = "html",
    attribute = "class",
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow,
    storage = (_a = defaultWindow) == null ? void 0 : _a.localStorage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true
  } = options;
  const preferredDark = usePreferredDark({ window });
  const store = storageKey == null ? ref("auto") : useStorage(storageKey, "auto", storage, { window, listenToStorageChanges });
  const isDark = computed({
    get() {
      return store.value === "auto" ? preferredDark.value : store.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        store.value = "auto";
      else
        store.value = v ? "dark" : "light";
    }
  });
  const onChanged = options.onChanged || ((v) => {
    const el = window == null ? void 0 : window.document.querySelector(selector);
    if (attribute === "class") {
      el == null ? void 0 : el.classList.toggle(valueDark, v);
      if (valueLight)
        el == null ? void 0 : el.classList.toggle(valueLight, !v);
    } else {
      el == null ? void 0 : el.setAttribute(attribute, v ? valueDark : valueLight);
    }
  });
  watch(isDark, onChanged, { flush: "post" });
  tryOnMounted(() => onChanged(isDark.value));
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return markRaw({
      snapshot: dump(source.value),
      timestamp: timestamp()
    });
  }
  const last = ref(_createHistoryRecord());
  const undoStack = ref([]);
  const redoStack = ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = computed(() => [last.value, ...undoStack.value]);
  const canUndo = computed(() => undoStack.value.length > 0);
  const canRedo = computed(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$a = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = pausableFilter(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = ignorableWatch(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$5(__spreadValues$a({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$5(__spreadValues$a({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$9 = Object.defineProperty;
var core_defProps$4 = Object.defineProperties;
var core_getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$4 = (a, b) => core_defProps$4(a, core_getOwnPropDescs$4(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? debounceFilter(options.debounce) : void 0;
  const history = useRefHistory(source, core_spreadProps$4(__spreadValues$9({}, options), { eventFilter: filter }));
  return __spreadValues$9({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = bypassFilter
  } = options;
  const acceleration = ref({ x: null, y: null, z: null });
  const rotationRate = ref({ alpha: null, beta: null, gamma: null });
  const interval = ref(0);
  const accelerationIncludingGravity = ref({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = createFilterWrapper(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "DeviceOrientationEvent" in window);
  const isAbsolute = ref(false);
  const alpha = ref(null);
  const beta = ref(null);
  const gamma = ref(null);
  if (window && isSupported) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = (/* unused pure expression or super */ null && ([
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
]));
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: ref(1)
    };
  }
  const pixelRatio = ref(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    watch([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    onUpdated
  } = options;
  const devices = ref([]);
  const videoInputs = computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  let isSupported = false;
  const permissionGranted = ref(false);
  async function update() {
    if (!isSupported)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (navigator) {
    isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    if (isSupported) {
      if (requestPermissions)
        ensurePermissions();
      useEventListener(navigator.mediaDevices, "devicechange", update);
      update();
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a, _b;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_b = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _b.getDisplayMedia);
  const constraint = { audio, video };
  const stream = shallowRef();
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return ref("visible");
  const visibility = ref(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$8 = Object.defineProperty;
var core_defProps$3 = Object.defineProperties;
var core_getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$3 = (a, b) => core_defProps$3(a, core_getOwnPropDescs$3(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = ref((_b = options.initialValue) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = ref();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const preventDefault = (e) => {
    if (unref(options.preventDefault))
      e.preventDefault();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (unref(options.exact) && e.target !== unref(target))
      return;
    const rect = unref(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    preventDefault(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    preventDefault(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    preventDefault(e);
  };
  if (isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return core_spreadProps$3(__spreadValues$8({}, toRefs(position)), {
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

var core_getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var core_hasOwnProp$9 = Object.prototype.hasOwnProperty;
var core_propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var core_objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$9)
    for (var prop of core_getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = core_objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new window.ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);
  useResizeObserver(target, ([entry]) => {
    height.value = entry.contentRect.height;
    bottom.value = entry.contentRect.bottom;
    left.value = entry.contentRect.left;
    right.value = entry.contentRect.right;
    top.value = entry.contentRect.top;
    width.value = entry.contentRect.width;
    x.value = entry.contentRect.x;
    y.value = entry.contentRect.y;
  }, options);
  return {
    x,
    y,
    top,
    right,
    bottom,
    left,
    width,
    height
  };
}

function useElementHover(el) {
  const isHovered = ref(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    if (!element.value) {
      elementIsVisible.value = false;
    } else {
      const rect = element.value.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  tryOnMounted(testBounding);
  if (window)
    tryOnMounted(() => useEventListener((scrollTarget == null ? void 0 : scrollTarget.value) || window, "scroll", testBounding, { capture: false, passive: true }));
  return elementIsVisible;
}

const events = new Map();

function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    scope == null ? void 0 : scope.cleanups.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = ref(null);
  const data = ref(null);
  const status = ref("CONNECTING");
  const eventSource = ref(null);
  const error = ref(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper() {
  const isSupported = Boolean(window && "EyeDropper" in window);
  const sRGBHex = ref("");
  async function open() {
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open();
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = isRef(newIcon) ? newIcon : ref(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  watch(favicon, (i, o) => {
    if (isString(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var core_defProp$7 = Object.defineProperty;
var core_defProps$2 = Object.defineProperties;
var core_getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var core_hasOwnProp$8 = Object.prototype.hasOwnProperty;
var core_propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$7 = (obj, key, value) => key in obj ? core_defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$8.call(b, prop))
      core_defNormalProp$7(a, prop, b[prop]);
  if (core_getOwnPropSymbols$8)
    for (var prop of core_getOwnPropSymbols$8(b)) {
      if (core_propIsEnum$8.call(b, prop))
        core_defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$2 = (a, b) => core_defProps$2(a, core_getOwnPropDescs$2(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError");
}
function headersToObject(headers) {
  if (headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = computed(() => config.baseUrl ? joinPaths(unref(config.baseUrl), unref(url)) : unref(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = core_spreadValues$7(core_spreadValues$7({}, options), args[0]);
      } else {
        fetchOptions = core_spreadProps$2(core_spreadValues$7(core_spreadValues$7({}, fetchOptions), args[0]), {
          headers: core_spreadValues$7(core_spreadValues$7({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = core_spreadValues$7(core_spreadValues$7({}, options), args[1]);
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "get",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = core_spreadValues$7(core_spreadValues$7({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = core_spreadValues$7(core_spreadValues$7({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = createEventHook();
  const errorEvent = createEventHook();
  const finallyEvent = createEventHook();
  const isFinished = ref(false);
  const isFetching = ref(false);
  const aborted = ref(false);
  const statusCode = ref(null);
  const response = shallowRef(null);
  const error = ref(null);
  const data = shallowRef(initialData);
  const canAbort = computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = useTimeoutFn(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = core_spreadProps$2(core_spreadValues$7({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(unref(config.payload)) : unref(config.payload);
    }
    let isCanceled = false;
    const context = { url: unref(url), options: fetchOptions, cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve();
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, core_spreadProps$2(core_spreadValues$7(core_spreadValues$7({}, defaultFetchOptions), context.options), {
        headers: core_spreadValues$7(core_spreadValues$7({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          reject(fetchError);
        else
          resolve(void 0);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  watch(() => [
    unref(url),
    unref(options.refetch)
  ], () => unref(options.refetch) && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("get"),
    put: setMethod("put"),
    post: setMethod("post"),
    delete: setMethod("delete"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (isRef(config.payload)) {
          watch(() => [
            unref(config.payload),
            unref(options.refetch)
          ], () => unref(options.refetch) && execute(), { deep: true });
        }
        if (!payloadType && unref(payload) && Object.getPrototypeOf(unref(payload)) === Object.prototype)
          config.payloadType = "json";
        return shell;
      }
      return void 0;
    };
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return shell;
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return shell;
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

function useFocus(options = {}) {
  const {
    initialValue = false
  } = options;
  const activeElement = useActiveElement(options);
  const target = computed(() => unrefElement(options.target));
  const focused = computed({
    get() {
      return activeElement.value === target.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = target.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = target.value) == null ? void 0 : _b.focus();
    }
  });
  watch(target, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  function loop() {
    if (!isActive.value)
      return;
    fn();
    if (window)
      window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

function useFps(options) {
  var _a;
  const fps = ref(0);
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = (/* unused pure expression or super */ null && ([
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
]));
function useFullscreen(target, options = {}) {
  const { document = defaultDocument } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = ref(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document) {
    isSupported = false;
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "geolocation" in navigator;
  const locatedAt = ref(null);
  const error = ref(null);
  const coords = ref({
    accuracy: 0,
    latitude: 0,
    longitude: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  tryOnScopeDispose(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = (/* unused pure expression or super */ null && (["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"]));
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = throttleFilter(50)
  } = options;
  const idle = ref(initialState);
  const lastActive = ref(timestamp());
  let timer;
  const onEvent = createFilterWrapper(eventFilter, () => {
    idle.value = false;
    lastActive.value = timestamp();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = window && "IntersectionObserver" in window;
  let cleanup = noop;
  const stopWatch = isSupported ? watch(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new window.IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" }) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = (/* unused pure expression or super */ null && (["mousedown", "mouseup", "keydown", "keyup"]));
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = ref(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop
  } = options;
  const current = reactive(new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? reactive(obj) : obj;
  function updateRefs(e, value) {
    const key = e.key.toLowerCase();
    const code = e.code.toLowerCase();
    const values = [code, key];
    if (value)
      current.add(e.code);
    else
      current.delete(e.code);
    for (const key2 of values) {
      if (key2 in refs) {
        if (useReactive)
          refs[key2] = value;
        else
          refs[key2].value = value;
      }
    }
  }
  if (target) {
    useEventListener(target, "keydown", (e) => {
      updateRefs(e, true);
      return onEventFired(e);
    }, { passive });
    useEventListener(target, "keyup", (e) => {
      updateRefs(e, false);
      return onEventFired(e);
    }, { passive });
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])));
        } else {
          refs[prop] = ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? unref(r) : r;
    }
  });
  return proxy;
}

var core_defProp$6 = Object.defineProperty;
var core_getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var core_hasOwnProp$7 = Object.prototype.hasOwnProperty;
var core_propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$6 = (obj, key, value) => key in obj ? core_defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$7.call(b, prop))
      core_defNormalProp$6(a, prop, b[prop]);
  if (core_getOwnPropSymbols$7)
    for (var prop of core_getOwnPropSymbols$7(b)) {
      if (core_propIsEnum$7.call(b, prop))
        core_defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if (unref(source))
    cb(unref(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = core_spreadValues$6(core_spreadValues$6({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = ref(0);
  const duration = ref(0);
  const seeking = ref(false);
  const volume = ref(1);
  const waiting = ref(false);
  const ended = ref(false);
  const playing = ref(false);
  const rate = ref(1);
  const stalled = ref(false);
  const buffered = ref([]);
  const tracks = ref([]);
  const selectedTrack = ref(-1);
  const isPictureInPicture = ref(false);
  const muted = ref(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = isNumber(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = isNumber(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  watchEffect(() => {
    if (!document)
      return;
    const el = unref(target);
    if (!el)
      return;
    const src = unref(options.src);
    let sources = [];
    if (!src)
      return;
    if (isString(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if (isObject(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  tryOnScopeDispose(() => {
    const el = unref(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  watch(volume, (vol) => {
    const el = unref(target);
    if (!el)
      return;
    el.volume = vol;
  });
  watch(muted, (mute) => {
    const el = unref(target);
    if (!el)
      return;
    el.muted = mute;
  });
  watchEffect(() => {
    if (!document)
      return;
    const textTracks = unref(options.tracks);
    const el = unref(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = ignorableWatch(currentTime, (time) => {
    const el = unref(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = ignorableWatch(playing, (isPlaying) => {
    const el = unref(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = unref(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = unref(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(unref(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = unref(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = unref(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = watch([target], () => {
    const el = unref(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

function useMemory(options = {}) {
  const memory = ref();
  const isSupported = performance && "memory" in performance;
  if (isSupported) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMouse(options = {}) {
  const {
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow
  } = options;
  const x = ref(initialValue.x);
  const y = ref(initialValue.y);
  const sourceType = ref(null);
  const mouseHandler = (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      x.value = event.touches[0].clientX;
      y.value = event.touches[0].clientY;
      sourceType.value = "touch";
    }
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandler, { passive: true });
    useEventListener(window, "dragover", mouseHandler, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandler, { passive: true });
      useEventListener(window, "touchmove", touchHandler, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = ref(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = ref(0);
  const elementY = ref(0);
  const elementPositionX = ref(0);
  const elementPositionY = ref(0);
  const elementHeight = ref(0);
  const elementWidth = ref(0);
  const isOutside = ref(false);
  let stop = () => {
  };
  if (window) {
    stop = watch([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = elX < 0 || elY < 0 || elX > elementWidth.value || elY > elementHeight.value;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = ref(initialValue);
  const sourceType = ref(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = computed(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var core_getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var core_hasOwnProp$6 = Object.prototype.hasOwnProperty;
var core_propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var core_objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$6)
    for (var prop of core_getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = core_objRest$1(_a, ["window"]);
  let observer;
  const isSupported = window && "IntersectionObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new window.MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "connection" in navigator);
  const isOnline = ref(true);
  const saveData = ref(false);
  const offlineAt = ref(void 0);
  const downlink = ref(void 0);
  const downlinkMax = ref(void 0);
  const rtt = ref(void 0);
  const effectiveType = ref(void 0);
  const type = ref("unknown");
  const connection = isSupported && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var core_defProp$5 = Object.defineProperty;
var core_getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var core_hasOwnProp$5 = Object.prototype.hasOwnProperty;
var core_propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$5 = (obj, key, value) => key in obj ? core_defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$5.call(b, prop))
      core_defNormalProp$5(a, prop, b[prop]);
  if (core_getOwnPropSymbols$5)
    for (var prop of core_getOwnPropSymbols$5(b)) {
      if (core_propIsEnum$5.call(b, prop))
        core_defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn$1(update, interval, { immediate: true });
  if (exposeControls) {
    return core_spreadValues$5({
      now
    }, controls);
  } else {
    return now;
  }
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = ref(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = reactive(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var core_defProp$4 = Object.defineProperty;
var core_defProps$1 = Object.defineProperties;
var core_getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var core_hasOwnProp$4 = Object.prototype.hasOwnProperty;
var core_propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$4 = (obj, key, value) => key in obj ? core_defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$4.call(b, prop))
      core_defNormalProp$4(a, prop, b[prop]);
  if (core_getOwnPropSymbols$4)
    for (var prop of core_getOwnPropSymbols$4(b)) {
      if (core_propIsEnum$4.call(b, prop))
        core_defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$1 = (a, b) => core_defProps$1(a, core_getOwnPropDescs$1(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ (/* unused pure expression or super */ null && (Object.keys(defaultState)));
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = ref(false);
  const state = ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = objectPick(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return core_spreadProps$1(core_spreadValues$4({}, toRefs(state)), {
    isInside
  });
}

var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = reactive({ x: 0, y: 0 });
  const coordsEnd = reactive({ x: 0, y: 0 });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", noop, optionsBlock);
  document.removeEventListener("x", noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = ref(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = reactive({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = reactive({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = computed(() => posStart.x - posEnd.x);
  const distanceY = computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = ref(false);
  const isPointerDown = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return ref(["en"]);
  const navigator = window.navigator;
  const value = ref(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = unref(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value) {
      document.head.removeChild(scriptTag.value);
      scriptTag.value = null;
    }
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}

function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = ref(0);
  const y = ref(0);
  const isScrolling = ref(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  if (element) {
    const onScrollEnd = useDebounceFn(() => {
      isScrolling.value = false;
      onStop();
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0);
      x.value = scrollLeft;
      const scrollTop = eventTarget.scrollTop;
      arrivedState.top = scrollTop <= 0 + (offset.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd();
      onScroll();
    };
    useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState
  };
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var core_defProp$3 = Object.defineProperty;
var core_getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var core_hasOwnProp$3 = Object.prototype.hasOwnProperty;
var core_propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$3 = (obj, key, value) => key in obj ? core_defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$3.call(b, prop))
      core_defNormalProp$3(a, prop, b[prop]);
  if (core_getOwnPropSymbols$3)
    for (var prop of core_getOwnPropSymbols$3(b)) {
      if (core_propIsEnum$3.call(b, prop))
        core_defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = _navigator && "canShare" in _navigator;
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = core_spreadValues$3(core_spreadValues$3({}, unref(shareOptions)), unref(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = ref(options.lang || "en-US");
  const isListening = ref(false);
  const isFinal = ref(false);
  const result = ref("");
  const error = shallowRef(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = Boolean(SpeechRecognition);
  let recognition;
  if (isSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = unref(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    watch(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = unref(lang);
    };
    watch(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  tryOnScopeDispose(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  var _a, _b;
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = Boolean(synth);
  const isPlaying = ref(false);
  const status = ref("init");
  const voiceInfo = {
    lang: ((_a = options.voice) == null ? void 0 : _a.lang) || "default",
    name: ((_b = options.voice) == null ? void 0 : _b.name) || ""
  };
  const spokenText = ref(text || "");
  const lang = ref(options.lang || "en-US");
  const error = shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = unref(lang);
    options.voice && (utterance2.voice = options.voice);
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      utterance2.lang = unref(lang);
    };
  };
  const utterance = computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported) {
    bindEventsForUtterance(utterance.value);
    watch(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    watch(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    voiceInfo,
    utterance,
    error,
    toggle,
    speak
  };
}

function useTemplateRefsList() {
  const refs = ref([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}

var core_defProp$2 = Object.defineProperty;
var core_defProps = Object.defineProperties;
var core_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var core_hasOwnProp$2 = Object.prototype.hasOwnProperty;
var core_propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$2 = (obj, key, value) => key in obj ? core_defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$2.call(b, prop))
      core_defNormalProp$2(a, prop, b[prop]);
  if (core_getOwnPropSymbols$2)
    for (var prop of core_getOwnPropSymbols$2(b)) {
      if (core_propIsEnum$2.call(b, prop))
        core_defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps = (a, b) => core_defProps(a, core_getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = throttleFilter(throttle, trailing);
  const history = useRefHistory(source, core_spreadProps(core_spreadValues$2({}, options), { eventFilter: filter }));
  return core_spreadValues$2({}, history);
}

var core_defProp$1 = Object.defineProperty;
var core_getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var core_hasOwnProp$1 = Object.prototype.hasOwnProperty;
var core_propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$1 = (obj, key, value) => key in obj ? core_defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$1.call(b, prop))
      core_defNormalProp$1(a, prop, b[prop]);
  if (core_getOwnPropSymbols$1)
    for (var prop of core_getOwnPropSymbols$1(b)) {
      if (core_propIsEnum$1.call(b, prop))
        core_defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var core_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$1)
    for (var prop of core_getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = core_objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = computed(() => getTimeago(new Date(unref(time)), unref(now.value)));
  if (exposeControls) {
    return core_spreadValues$1({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

var core_defProp = Object.defineProperty;
var core_getOwnPropSymbols = Object.getOwnPropertySymbols;
var core_hasOwnProp = Object.prototype.hasOwnProperty;
var core_propIsEnum = Object.prototype.propertyIsEnumerable;
var core_defNormalProp = (obj, key, value) => key in obj ? core_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp.call(b, prop))
      core_defNormalProp(a, prop, b[prop]);
  if (core_getOwnPropSymbols)
    for (var prop of core_getOwnPropSymbols(b)) {
      if (core_propIsEnum.call(b, prop))
        core_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = ref(timestamp() + offset);
  const update = () => ts.value = timestamp() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn$1(update, interval, { immediate });
  if (exposeControls) {
    return core_spreadValues({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false
  } = options;
  const title = ref((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  watch(title, (t, o) => {
    if (isString(t) && t !== o && document)
      document.title = t;
  }, { immediate: true });
  if (observe && document) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = document.title;
    }, { childList: true });
  }
  return title;
}

const TransitionPresets = {
  linear: shared_identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = noop,
    onStarted = noop,
    transition = identity
  } = options;
  const currentTransition = computed(() => {
    const t = unref(transition);
    return isFunction(t) ? t : createEasingFunction(t);
  });
  const sourceValue = computed(() => {
    const s = unref(source);
    return isNumber(s) ? s : s.map(unref);
  });
  const sourceVector = computed(() => isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = ref(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = clamp(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = unref(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = useTimeoutFn(start, delay, { immediate: false });
  watch(sourceVector, () => {
    if (unref(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if (unref(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return computed(() => {
    const targetVector = unref(disabled) ? sourceVector : outputVector;
    return isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return reactive(initialValue);
  const state = reactive(initialValue);
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${location.hash || ""}`;
    if (mode === "hash-params")
      return `${location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = pausableWatch(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState({}, "", window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  updateState(read());
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b, _c;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const autoSwitch = ref((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = ref(options.videoDeviceId);
  const audioDeviceId = ref(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_c = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _c.getUserMedia);
  const stream = shallowRef();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  watch([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm));
  let event = eventName;
  if (!key) {
    if (isVue2) {
      const modelOptions = (_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$options) == null ? void 0 : _c.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key}`;
  if (passive) {
    const proxy = ref(props[key]);
    watch(() => props[key], (v) => proxy.value = v);
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return computed({
      get() {
        return props[key];
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVirtualList(list, options) {
  const containerRef = ref();
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  watch([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = computed(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const { navigator = defaultNavigator, document = defaultDocument } = options;
  let wakeLock;
  const isSupported = navigator && "wakeLock" in navigator;
  const isActive = ref(false);
  async function onVisibilityChange() {
    if (!isSupported || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = ref(null);
  const status = ref("CONNECTING");
  const wsRef = ref();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (retries < 0 || retried < retries)
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = useIntervalFn$1(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", close);
    tryOnScopeDispose(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = ref(null);
  const worker = shallowRef();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new window.Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    tryOnScopeDispose(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `${dep}`).toString();
  return `importScripts('${depsString}')`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = ref();
  const workerStatus = ref("PENDING");
  const promise = ref({});
  const timeoutId = ref();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return ref(false);
  const focused = ref(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window.pageXOffset);
  const y = ref(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
  if (!window) {
    return {
      width: ref(initialWidth),
      height: ref(initialHeight)
    };
  }
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  useEventListener("resize", () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }, { passive: true });
  return { width, height };
}



;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useDarkMode.js



const darkModeSymbol = Symbol( false ? 0 : '');
/**
 * Inject dark mode global computed
 */
const useDarkMode = () => {
    const isDarkMode = (0,external_vue_.inject)(darkModeSymbol);
    if (!isDarkMode) {
        throw new Error('useDarkMode() is called without provider.');
    }
    return isDarkMode;
};
/**
 * Create dark mode ref and provide as global computed in setup
 */
const setupDarkMode = () => {
    const themeLocale = useThemeLocaleData();
    const isDarkPreferred = usePreferredDark();
    const darkStorage = useStorage('vuepress-color-scheme', 'auto');
    const isDarkMode = (0,external_vue_.computed)({
        get() {
            // disable dark mode
            if (!themeLocale.value.darkMode) {
                return false;
            }
            // auto detected from prefers-color-scheme
            if (darkStorage.value === 'auto') {
                return isDarkPreferred.value;
            }
            // storage value
            return darkStorage.value === 'dark';
        },
        set(val) {
            if (val === isDarkPreferred.value) {
                darkStorage.value = 'auto';
            }
            else {
                darkStorage.value = val ? 'dark' : 'light';
            }
        },
    });
    (0,external_vue_.provide)(darkModeSymbol, isDarkMode);
    updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
    const update = (value = isDarkMode.value) => {
        // set `class="dark"` on `<html>` element
        const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector('html');
        htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle('dark', value);
    };
    (0,external_vue_.onMounted)(() => {
        (0,external_vue_.watch)(isDarkMode, update, { immediate: true });
    });
    (0,external_vue_.onUnmounted)(() => update());
};

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(2253);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useResolveRouteWithRedirect.js


/**
 * Resolve a route with redirection
 */
const useResolveRouteWithRedirect = (...args) => {
    const router = (0,external_vue_router_.useRouter)();
    const route = router.resolve(...args);
    const lastMatched = route.matched[route.matched.length - 1];
    if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
        return route;
    }
    const { redirect } = lastMatched;
    const resolvedRedirect = (0,esm/* isFunction */.mf)(redirect) ? redirect(route) : redirect;
    const resolvedRedirectObj = (0,esm/* isString */.HD)(resolvedRedirect)
        ? { path: resolvedRedirect }
        : resolvedRedirect;
    return useResolveRouteWithRedirect({
        hash: route.hash,
        query: route.query,
        params: route.params,
        ...resolvedRedirectObj,
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useNavLink.js

/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
const useNavLink = (item) => {
    const resolved = useResolveRouteWithRedirect(item);
    return {
        text: resolved.meta.title || item,
        link: resolved.name === '404' ? item : resolved.fullPath,
    };
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useScrollPromise.js
let promise = null;
let promiseResolve = null;
const scrollPromise = {
    wait: () => promise,
    pending: () => {
        promise = new Promise((resolve) => (promiseResolve = resolve));
    },
    resolve: () => {
        promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
        promise = null;
        promiseResolve = null;
    },
};
const useScrollPromise = () => scrollPromise;

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(7621);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useSidebarItems.js





const sidebarItemsSymbol = Symbol('sidebarItems');
/**
 * Inject sidebar items global computed
 */
const useSidebarItems = () => {
    const sidebarItems = (0,external_vue_.inject)(sidebarItemsSymbol);
    if (!sidebarItems) {
        throw new Error('useSidebarItems() is called without provider.');
    }
    return sidebarItems;
};
/**
 * Create sidebar items ref and provide as global computed in setup
 */
const setupSidebarItems = () => {
    const themeLocale = useThemeLocaleData();
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const sidebarItems = (0,external_vue_.computed)(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
    (0,external_vue_.provide)(sidebarItemsSymbol, sidebarItems);
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
const resolveSidebarItems = (frontmatter, themeLocale) => {
    var _a, _b, _c, _d;
    // get sidebar config from frontmatter > themeConfig
    const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : 'auto';
    const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
    // resolve sidebar items according to the config
    if (frontmatter.home || sidebarConfig === false) {
        return [];
    }
    if (sidebarConfig === 'auto') {
        return resolveAutoSidebarItems(sidebarDepth);
    }
    if ((0,esm/* isArray */.kJ)(sidebarConfig)) {
        return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
    }
    if ((0,esm/* isPlainObject */.PO)(sidebarConfig)) {
        return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
    }
    return [];
};
/**
 * Util to transform page header to sidebar item
 */
const headerToSidebarItem = (header, sidebarDepth) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, sidebarDepth),
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0
    ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1))
    : [];
/**
 * Resolve sidebar items if the config is `auto`
 */
const resolveAutoSidebarItems = (sidebarDepth) => {
    const page = (0,lib/* usePageData */.Vi)();
    return [
        {
            text: page.value.title,
            children: headersToSidebarItemChildren(page.value.headers, sidebarDepth),
        },
    ];
};
/**
 * Resolve sidebar items if the config is an array
 */
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
    const route = (0,external_vue_router_.useRoute)();
    const page = (0,lib/* usePageData */.Vi)();
    const handleChildItem = (item) => {
        var _a;
        let childItem;
        if ((0,esm/* isString */.HD)(item)) {
            childItem = useNavLink(item);
        }
        else {
            childItem = item;
        }
        if (childItem.children) {
            return {
                ...childItem,
                children: childItem.children.map((item) => handleChildItem(item)),
            };
        }
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        if (childItem.link === route.path) {
            // skip h1 header
            const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1
                ? page.value.headers[0].children
                : page.value.headers;
            return {
                ...childItem,
                children: headersToSidebarItemChildren(headers, sidebarDepth),
            };
        }
        return childItem;
    };
    return sidebarConfig.map((item) => handleChildItem(item));
};
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
    var _a;
    const route = (0,external_vue_router_.useRoute)();
    const sidebarPath = (0,esm/* resolveLocalePath */.gb)(sidebarConfig, route.path);
    const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
    return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js + 3 modules
var composables = __webpack_require__(3928);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useThemeData.js

const useThemeData = () => _useThemeData();
const useThemeLocaleData = () => (0,composables/* useThemeLocaleData */.X6)();

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js








/***/ }),

/***/ 3336:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon.outbound{position:relative;display:inline-block;color:#aaa;vertical-align:middle;top:-1px}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/client/lib/components/OutboundLink.css"],"names":[],"mappings":"AAAA,eACE,iBAAkB,CAClB,oBAAqB,CACrB,UAAW,CACX,qBAAsB,CACtB,QACF","sourcesContent":[".icon.outbound {\n  position: relative;\n  display: inline-block;\n  color: #aaa;\n  vertical-align: middle;\n  top: -1px;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 9349:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--c-brand:#3eaf7c;--c-brand-light:#4abf8a;--c-bg:#ffffff;--c-bg-light:#f3f4f5;--c-bg-lighter:#eeeeee;--c-bg-navbar:var(--c-bg);--c-bg-sidebar:var(--c-bg);--c-bg-arrow:#cccccc;--c-text:#2c3e50;--c-text-accent:var(--c-brand);--c-text-light:#3a5169;--c-text-lighter:#4e6e8e;--c-text-lightest:#6a8bad;--c-text-quote:#999999;--c-border:#eaecef;--c-border-dark:#dfe2e5;--c-tip:#42b983;--c-tip-bg:var(--c-bg-light);--c-tip-title:var(--c-text);--c-tip-text:var(--c-text);--c-tip-text-accent:var(--c-text-accent);--c-warning:#e7c000;--c-warning-bg:#fffae3;--c-warning-title:#ad9000;--c-warning-text:#746000;--c-warning-text-accent:var(--c-text);--c-danger:#cc0000;--c-danger-bg:#ffe0e0;--c-danger-title:#990000;--c-danger-text:#660000;--c-danger-text-accent:var(--c-text);--c-details-bg:#eeeeee;--c-badge-tip:var(--c-tip);--c-badge-warning:var(--c-warning);--c-badge-danger:var(--c-danger);--t-color:0.3s ease;--t-transform:0.3s ease;--code-bg-color:#282c34;--code-hl-bg-color:rgba(0, 0, 0, 0.66);--code-ln-color:#9e9e9e;--code-ln-wrapper-width:3.5rem;--font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;--font-family-code:Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;--navbar-height:3.6rem;--navbar-padding-v:0.7rem;--navbar-padding-h:1.5rem;--sidebar-width:20rem;--sidebar-width-mobile:calc(var(--sidebar-width) * 0.82);--content-width:740px;--homepage-width:960px}.back-to-top{--back-to-top-color:var(--c-brand);--back-to-top-color-hover:var(--c-brand-light)}.DocSearch{--docsearch-primary-color:var(--c-brand);--docsearch-text-color:var(--c-text);--docsearch-highlight-color:var(--c-brand);--docsearch-muted-color:var(--c-text-quote);--docsearch-container-background:rgba(9, 10, 17, 0.8);--docsearch-modal-background:var(--c-bg-light);--docsearch-searchbox-background:var(--c-bg-lighter);--docsearch-searchbox-focus-background:var(--c-bg);--docsearch-searchbox-shadow:inset 0 0 0 2px var(--c-brand);--docsearch-hit-color:var(--c-text-light);--docsearch-hit-active-color:var(--c-bg);--docsearch-hit-background:var(--c-bg);--docsearch-hit-shadow:0 1px 3px 0 var(--c-border-dark);--docsearch-footer-background:var(--c-bg)}.medium-zoom-overlay{--medium-zoom-bg-color:var(--c-bg)}#nprogress{--nprogress-color:var(--c-brand)}.pwa-popup{--pwa-popup-text-color:var(--c-text);--pwa-popup-bg-color:var(--c-bg);--pwa-popup-border-color:var(--c-brand);--pwa-popup-shadow:0 4px 16px var(--c-brand);--pwa-popup-btn-text-color:var(--c-bg);--pwa-popup-btn-bg-color:var(--c-brand);--pwa-popup-btn-hover-bg-color:var(--c-brand-light)}.search-box{--search-bg-color:var(--c-bg);--search-accent-color:var(--c-brand);--search-text-color:var(--c-text);--search-border-color:var(--c-border);--search-item-text-color:var(--c-text-lighter);--search-item-focus-bg-color:var(--c-bg-light)}html.dark{--c-brand:#3aa675;--c-brand-light:#349469;--c-bg:#22272e;--c-bg-light:#2b313a;--c-bg-lighter:#262c34;--c-text:#adbac7;--c-text-light:#96a7b7;--c-text-lighter:#8b9eb0;--c-text-lightest:#8094a8;--c-border:#3e4c5a;--c-border-dark:#34404c;--c-tip:#318a62;--c-warning:#ceab00;--c-warning-bg:#7e755b;--c-warning-title:#ceac03;--c-warning-text:#362e00;--c-danger:#940000;--c-danger-bg:#806161;--c-danger-title:#610000;--c-danger-text:#3a0000;--c-details-bg:#323843;--code-hl-bg-color:#363b46;color-scheme:dark}html.dark .DocSearch{--docsearch-logo-color:var(--c-text);--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;--docsearch-key-shadow:inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 2px 2px 0 rgba(3, 4, 9, 0.3);--docsearch-key-gradient:linear-gradient(-225deg, #444950, #1c1e21);--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2)}body,html{padding:0;margin:0;background-color:var(--c-bg);transition:background-color var(--t-color)}body{font-family:var(--font-family);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:var(--c-text)}a,p a code{color:var(--c-text-accent)}a{font-weight:500;overflow-wrap:break-word}p a code{font-weight:400}code,kbd{font-family:var(--font-family-code)}kbd{background:var(--c-bg-lighter);border:solid .15rem var(--c-border-dark);border-bottom:solid .25rem var(--c-border-dark);border-radius:.15rem;padding:0 .15em}code{color:var(--c-text-lighter);padding:.25rem .5rem;font-size:.85em;background-color:var(--c-bg-light);border-radius:3px;overflow-wrap:break-word;transition:background-color var(--t-color),color var(--t-color)}blockquote{color:var(--c-text-quote);border-left:.2rem solid var(--c-border-dark);margin:1rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p,code{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid var(--c-border);transition:border-color var(--t-color)}h3{font-size:1.35rem}h4{font-size:1.15rem}h5{font-size:1.05rem}blockquote,h6{font-size:1rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a,a.header-anchor:hover{text-decoration:none}a.header-anchor:focus-visible{opacity:1}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid var(--c-border)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid var(--c-border-dark)}tr:nth-child(2n){background-color:var(--c-bg-light)}td,th{border:1px solid var(--c-border-dark);padding:.6em 1em}.arrow,.badge{display:inline-block}.arrow{width:0;height:0}.arrow.down,.arrow.up{border-left:4px solid transparent;border-right:4px solid transparent}.arrow.up{border-bottom:6px solid var(--c-bg-arrow)}.arrow.down{border-top:6px solid var(--c-bg-arrow)}.arrow.left,.arrow.right{border-top:4px solid transparent;border-bottom:4px solid transparent}.arrow.right{border-left:6px solid var(--c-bg-arrow)}.arrow.left{border-right:6px solid var(--c-bg-arrow)}.badge{font-size:14px;height:18px;line-height:18px;border-radius:3px;padding:0 6px;color:var(--c-bg);vertical-align:top;transition:color var(--t-color),background-color var(--t-color)}.badge.tip{background-color:var(--c-badge-tip)}.badge.warning{background-color:var(--c-badge-warning)}.badge.danger{background-color:var(--c-badge-danger)}.badge+.badge{margin-left:5px}code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:var(--font-family-code);font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#ec5975}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:#3eaf7c}.theme-default-content pre,.theme-default-content pre[class*=language-]{line-height:1.4;padding:1.25rem 1.5rem;margin:.85rem 0;border-radius:6px;overflow:auto}.theme-default-content pre code,.theme-default-content pre[class*=language-] code{color:#fff;padding:0;background-color:transparent;border-radius:0;overflow-wrap:unset;-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.theme-default-content .line-number{font-family:var(--font-family-code)}div[class*=language-]{position:relative;background-color:var(--code-bg-color);border-radius:6px}div[class*=language-]::before{position:absolute;z-index:3;top:.8em;right:1em;font-size:.75rem;color:var(--code-ln-color)}div[class*=language-] pre,div[class*=language-] pre[class*=language-]{background:0 0!important;position:relative;z-index:1}div[class*=language-] .highlight-lines{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:1.3rem;position:absolute;top:0;left:0;width:100%;line-height:1.4}div[class*=language-] .highlight-lines .highlight-line{background-color:var(--code-hl-bg-color)}div[class*=language-]:not(.line-numbers-mode) .line-numbers{display:none}div[class*=language-].line-numbers-mode .highlight-lines .highlight-line{position:relative}div[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before{content:\" \";position:absolute;z-index:2;left:0;top:0;display:block;width:var(--code-ln-wrapper-width);height:100%}div[class*=language-].line-numbers-mode pre{margin-left:var(--code-ln-wrapper-width);padding-left:1rem;vertical-align:middle}div[class*=language-].line-numbers-mode .line-numbers{position:absolute;top:0;width:var(--code-ln-wrapper-width);text-align:center;color:var(--code-ln-color);padding-top:1.25rem;line-height:1.4}div[class*=language-].line-numbers-mode .line-numbers .line-number,div[class*=language-].line-numbers-mode .line-numbers br{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div[class*=language-].line-numbers-mode .line-numbers .line-number{position:relative;z-index:3;font-size:.85em}div[class*=language-].line-numbers-mode::after{content:\"\";position:absolute;top:0;left:0;width:var(--code-ln-wrapper-width);height:100%;border-radius:6px 0 0 6px;border-right:1px solid var(--code-hl-bg-color)}div[class*=language-].ext-c:before{content:\"c\"}div[class*=language-].ext-cpp:before{content:\"cpp\"}div[class*=language-].ext-cs:before{content:\"cs\"}div[class*=language-].ext-css:before{content:\"css\"}div[class*=language-].ext-dart:before{content:\"dart\"}div[class*=language-].ext-docker:before{content:\"docker\"}div[class*=language-].ext-fs:before{content:\"fs\"}div[class*=language-].ext-go:before{content:\"go\"}div[class*=language-].ext-html:before{content:\"html\"}div[class*=language-].ext-java:before{content:\"java\"}div[class*=language-].ext-js:before{content:\"js\"}div[class*=language-].ext-json:before{content:\"json\"}div[class*=language-].ext-kt:before{content:\"kt\"}div[class*=language-].ext-less:before{content:\"less\"}div[class*=language-].ext-makefile:before{content:\"makefile\"}div[class*=language-].ext-md:before{content:\"md\"}div[class*=language-].ext-php:before{content:\"php\"}div[class*=language-].ext-py:before{content:\"py\"}div[class*=language-].ext-rb:before{content:\"rb\"}div[class*=language-].ext-rs:before{content:\"rs\"}div[class*=language-].ext-sass:before{content:\"sass\"}div[class*=language-].ext-scss:before{content:\"scss\"}div[class*=language-].ext-sh:before{content:\"sh\"}div[class*=language-].ext-styl:before{content:\"styl\"}div[class*=language-].ext-ts:before{content:\"ts\"}div[class*=language-].ext-toml:before{content:\"toml\"}div[class*=language-].ext-vue:before{content:\"vue\"}div[class*=language-].ext-yml:before{content:\"yml\"}@media (max-width:419px){.theme-default-content div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.code-group__nav{margin-top:.85rem;margin-bottom:calc(-1.7rem - 6px);padding-bottom:calc(1.7rem - 6px);padding-left:10px;padding-top:10px;border-top-left-radius:6px;border-top-right-radius:6px;background-color:var(--code-bg-color)}.code-group__ul{margin:auto 0;padding-left:0;display:inline-flex;list-style:none}.code-group__nav-tab{border:0;padding:5px;cursor:pointer;background-color:transparent;font-size:.85em;line-height:1.4;color:rgba(255,255,255,.9);font-weight:600}.code-group__nav-tab:focus{outline:0}.code-group__nav-tab:focus-visible{outline:1px solid rgba(255,255,255,.9)}.code-group__nav-tab-active{border-bottom:var(--c-brand) 1px solid}@media (max-width:419px){.code-group__nav{margin-left:-1.5rem;margin-right:-1.5rem;border-radius:0}}.code-group-item,.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>a.router-link-active::after{display:none}.code-group-item__active{display:block}.code-group-item>pre{background-color:orange}.custom-container{transition:color var(--t-color),border-color var(--t-color),background-color var(--t-color)}.custom-container .custom-container-title{font-weight:600;margin-bottom:-.4rem}.custom-container.danger,.custom-container.tip,.custom-container.warning{padding:.1rem 1.5rem;border-left-width:.5rem;border-left-style:solid;margin:1rem 0}.custom-container.tip{border-color:var(--c-tip);background-color:var(--c-tip-bg);color:var(--c-tip-text)}.custom-container.tip .custom-container-title{color:var(--c-tip-title)}.custom-container.tip a{color:var(--c-tip-text-accent)}.custom-container.warning{border-color:var(--c-warning);background-color:var(--c-warning-bg);color:var(--c-warning-text)}.custom-container.warning .custom-container-title{color:var(--c-warning-title)}.custom-container.warning a{color:var(--c-warning-text-accent)}.custom-container.danger{border-color:var(--c-danger);background-color:var(--c-danger-bg);color:var(--c-danger-text)}.custom-container.danger .custom-container-title{color:var(--c-danger-title)}.custom-container.danger a{color:var(--c-danger-text-accent)}.custom-container.details{display:block;position:relative;border-radius:2px;margin:1.6em 0;padding:1.6em;background-color:var(--c-details-bg)}.custom-container.details h4{margin-top:0}.custom-container.details figure:last-child,.custom-container.details p:last-child{margin-bottom:0;padding-bottom:0}.custom-container.details summary{outline:0;cursor:pointer}.dropdown-wrapper{cursor:pointer}.dropdown-wrapper .dropdown-title,.dropdown-wrapper .mobile-dropdown-title{display:block;font-size:.9rem;font-family:inherit;cursor:inherit;padding:inherit;line-height:1.4rem;background:0 0;border:0;font-weight:500;color:var(--c-text)}.dropdown-wrapper .mobile-dropdown-title{display:none;font-weight:600;font-size:inherit}.dropdown-wrapper .dropdown-title:hover,.dropdown-wrapper .mobile-dropdown-title:hover{border-color:transparent}.dropdown-wrapper .dropdown-title .arrow,.dropdown-wrapper .mobile-dropdown-title .arrow{vertical-align:middle;margin-top:-1px;margin-left:.4rem}.dropdown-wrapper .mobile-dropdown-title:hover{color:var(--c-text-accent)}.dropdown-wrapper .nav-dropdown .dropdown-item{color:inherit;line-height:1.7rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle{margin:.45rem 0 0;border-top:1px solid var(--c-border);padding:1rem 0 .45rem;font-size:.9rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>span{padding:0 1.5rem 0 1.25rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>a{font-weight:inherit}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper{padding:0;list-style:none}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper .dropdown-subitem{font-size:.9em}.dropdown-wrapper .nav-dropdown .dropdown-item a{display:block;line-height:1.7rem;position:relative;border-bottom:none;font-weight:400;margin-bottom:0;padding:0 1.5rem 0 1.25rem}.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active,.dropdown-wrapper .nav-dropdown .dropdown-item a:hover,.navbar-links a.router-link-active,.navbar-links a:hover{color:var(--c-text-accent)}.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{content:\"\";width:0;height:0;border-left:5px solid var(--c-text-accent);border-top:3px solid transparent;border-bottom:3px solid transparent;position:absolute;top:calc(50% - 2px);left:9px}.dropdown-wrapper .nav-dropdown .dropdown-item:first-child .dropdown-subtitle{margin-top:0;padding-top:0;border-top:0}@media (max-width:719px){.dropdown-wrapper.open .dropdown-title,.dropdown-wrapper.open .mobile-dropdown-title{margin-bottom:.5rem}.dropdown-wrapper .dropdown-title{display:none}.dropdown-wrapper .mobile-dropdown-title{display:block}.dropdown-wrapper .nav-dropdown{transition:height .1s ease-out;overflow:hidden}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle{border-top:0;margin-top:0;padding-top:0;padding-bottom:0;font-size:15px;line-height:2rem}.dropdown-wrapper .nav-dropdown .dropdown-item>a{font-size:15px;line-height:2rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem{font-size:14px;padding-left:1rem}}@media (min-width:720px){.dropdown-wrapper{height:1.8rem}.dropdown-wrapper.open .nav-dropdown,.dropdown-wrapper:hover .nav-dropdown{display:block!important}.dropdown-wrapper.open:blur{display:none}.dropdown-wrapper .nav-dropdown{display:none;height:auto!important;box-sizing:border-box;max-height:calc(100vh - 2.7rem);overflow-y:auto;position:absolute;top:100%;right:0;background-color:var(--c-bg-navbar);padding:.6rem 0;border:1px solid var(--c-border);border-bottom-color:var(--c-border-dark);text-align:left;border-radius:.25rem;white-space:nowrap;margin:0}}.dropdown-enter-from,.dropdown-leave-to{height:0!important}.home{padding:var(--navbar-height) 2rem 0;max-width:var(--homepage-width);margin:0 auto;display:block}.home .hero{text-align:center}.home .hero img{max-width:100%;max-height:280px;display:block;margin:3rem auto 1.5rem}.home .hero h1{font-size:3rem}.home .hero .actions,.home .hero .description,.home .hero h1{margin:1.8rem auto}.home .hero .actions{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center}.home .hero .description{max-width:35rem;font-size:1.6rem;line-height:1.3;color:var(--c-text-lightest)}.home .hero .action-button{display:inline-block;font-size:1.2rem;padding:.8rem 1.6rem;border-width:2px;border-style:solid;border-radius:4px;transition:background-color var(--t-color);box-sizing:border-box}.home .hero .action-button.primary{color:var(--c-bg);background-color:var(--c-brand);border-color:var(--c-brand)}.home .hero .action-button.primary:hover{background-color:var(--c-brand-light)}.home .hero .action-button.secondary{color:var(--c-brand);background-color:var(--c-bg);border-color:var(--c-brand)}.home .hero .action-button.secondary:hover{color:var(--c-bg);background-color:var(--c-brand-light)}.home .features{border-top:1px solid var(--c-border);transition:border-color var(--t-color);padding:1.2rem 0;margin-top:2.5rem;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:stretch;justify-content:space-between}.home .feature{flex-grow:1;flex-basis:30%;max-width:30%}.home .feature h2{font-size:1.4rem;font-weight:500;border-bottom:none;padding-bottom:0;color:var(--c-text-light)}.home .feature p,.home .footer{color:var(--c-text-lighter)}.home .footer{padding:2.5rem;border-top:1px solid var(--c-border);text-align:center;transition:border-color var(--t-color)}@media (max-width:719px){.home .features{flex-direction:column}.home .feature{max-width:100%;padding:0 2.5rem}}@media (max-width:419px){.home{padding-left:1.5rem;padding-right:1.5rem}.home .hero img{max-height:210px;margin:2rem auto 1.2rem}.home .hero h1{font-size:2rem}.home .hero .actions,.home .hero .description,.home .hero h1{margin:1.2rem auto}.home .hero .description{font-size:1.2rem}.home .hero .action-button{font-size:1rem;padding:.6rem 1.2rem}.home .feature h2{font-size:1.25rem}}.theme-default-content:not(.custom){max-width:var(--content-width);margin:0 auto;padding:2rem 2.5rem}@media (max-width:959px){.theme-default-content:not(.custom){padding:2rem}}@media (max-width:419px){.theme-default-content:not(.custom){padding:1.5rem}}.page{padding-top:var(--navbar-height);padding-left:var(--sidebar-width)}.navbar,.sidebar{position:fixed;left:0;box-sizing:border-box}.navbar{z-index:20;top:0;right:0;height:var(--navbar-height);border-bottom:1px solid var(--c-border);background-color:var(--c-bg-navbar);transition:background-color var(--t-color),border-color var(--t-color)}.sidebar{font-size:16px;width:var(--sidebar-width);z-index:10;margin:0;top:var(--navbar-height);bottom:0;border-right:1px solid var(--c-border);overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--c-brand) var(--c-border);background-color:var(--c-bg-sidebar);transition:transform var(--t-transform),background-color var(--t-color),border-color var(--t-color)}.sidebar::-webkit-scrollbar{width:7px}.sidebar::-webkit-scrollbar-track{background-color:var(--c-border)}.sidebar::-webkit-scrollbar-thumb{background-color:var(--c-brand)}.sidebar-mask{position:fixed;z-index:9;top:0;left:0;width:100vw;height:100vh;display:none}.theme-container.sidebar-open .sidebar-mask{display:block}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(1){transform:rotate(45deg) translate3d(5.5px,5.5px,0)}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(2){transform:scale3d(0,1,1)}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(3){transform:rotate(-45deg) translate3d(6px,-6px,0)}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(1),.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(3){transform-origin:center}.theme-container.no-navbar .theme-default-content:not(.custom)>h1,.theme-container.no-navbar h2,.theme-container.no-navbar h3,.theme-container.no-navbar h4,.theme-container.no-navbar h5,.theme-container.no-navbar h6{margin-top:1.5rem;padding-top:0}.theme-container.no-navbar .page{padding-top:0}.theme-container.no-navbar .sidebar{top:0}@media (min-width:720px){.theme-container.no-sidebar .sidebar{display:none}.theme-container.no-sidebar .page{padding-left:0}}.theme-default-content:not(.custom)>h1,.theme-default-content:not(.custom)>h2,.theme-default-content:not(.custom)>h3,.theme-default-content:not(.custom)>h4,.theme-default-content:not(.custom)>h5,.theme-default-content:not(.custom)>h6{margin-top:calc(.5rem - var(--navbar-height));padding-top:calc(1rem + var(--navbar-height));margin-bottom:0}.theme-default-content:not(.custom)>h1:first-child,.theme-default-content:not(.custom)>h2:first-child,.theme-default-content:not(.custom)>h3:first-child,.theme-default-content:not(.custom)>h4:first-child,.theme-default-content:not(.custom)>h5:first-child,.theme-default-content:not(.custom)>h6:first-child{margin-bottom:1rem}.theme-default-content:not(.custom)>h1:first-child+.custom-container,.theme-default-content:not(.custom)>h1:first-child+p,.theme-default-content:not(.custom)>h1:first-child+pre,.theme-default-content:not(.custom)>h2:first-child+.custom-container,.theme-default-content:not(.custom)>h2:first-child+p,.theme-default-content:not(.custom)>h2:first-child+pre,.theme-default-content:not(.custom)>h3:first-child+.custom-container,.theme-default-content:not(.custom)>h3:first-child+p,.theme-default-content:not(.custom)>h3:first-child+pre,.theme-default-content:not(.custom)>h4:first-child+.custom-container,.theme-default-content:not(.custom)>h4:first-child+p,.theme-default-content:not(.custom)>h4:first-child+pre,.theme-default-content:not(.custom)>h5:first-child+.custom-container,.theme-default-content:not(.custom)>h5:first-child+p,.theme-default-content:not(.custom)>h5:first-child+pre,.theme-default-content:not(.custom)>h6:first-child+.custom-container,.theme-default-content:not(.custom)>h6:first-child+p,.theme-default-content:not(.custom)>h6:first-child+pre{margin-top:2rem}.theme-default-content:not(.custom){padding-top:0}.theme-default-content:not(.custom) a:hover{text-decoration:underline}.theme-default-content:not(.custom) img{max-width:100%}.theme-default-content.custom{padding:0;margin:0}.theme-default-content.custom img{max-width:100%}@media (max-width:959px){.sidebar{font-size:15px;width:var(--sidebar-width-mobile)}.page{padding-left:var(--sidebar-width-mobile)}}@media (max-width:719px){.sidebar{top:0;padding-top:var(--navbar-height);transform:translateX(-100%)}.page{padding-left:0}.theme-container.sidebar-open .sidebar{transform:translateX(0)}.theme-container.no-navbar .sidebar{padding-top:0}}@media (max-width:419px){h1{font-size:1.9rem}}.navbar{--navbar-line-height:calc( var(--navbar-height) - 2 * var(--navbar-padding-v) );padding:var(--navbar-padding-v) var(--navbar-padding-h);line-height:var(--navbar-line-height)}.navbar .logo{height:var(--navbar-line-height);margin-right:var(--navbar-padding-v);vertical-align:top}.navbar .site-name{font-size:1.3rem;font-weight:600;color:var(--c-text);position:relative}.navbar .navbar-links-wrapper{display:flex;position:absolute;box-sizing:border-box;top:var(--navbar-padding-v);right:var(--navbar-padding-h);height:var(--navbar-line-height);padding-left:var(--navbar-padding-h);white-space:nowrap;font-size:.9rem}.navbar .navbar-links-wrapper .search-box{flex:0 0 auto;vertical-align:top}@media (max-width:719px){.navbar{padding-left:4rem}.navbar .can-hide{display:none}.navbar .site-name{width:calc(100vw - 9.4rem);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}.navbar-links,.navbar-links a{display:inline-block}.navbar-links a{line-height:1.4rem;color:inherit}.navbar-links .navbar-links-item{position:relative;display:inline-block;margin-left:1.5rem;line-height:var(--navbar-line-height)}.navbar-links .navbar-links-item:first-child{margin-left:0}@media (max-width:719px){.navbar-links .navbar-links-item{margin-left:0}}@media (min-width:719px){.navbar-links a.router-link-active,.navbar-links a:hover{color:var(--c-text)}.navbar-links-item>a:not(.external).router-link-active,.navbar-links-item>a:not(.external):hover{margin-bottom:-2px;border-bottom:2px solid var(--c-text-accent)}}.toggle-sidebar-button{position:absolute;top:.6rem;left:1rem;display:none;padding:.6rem;cursor:pointer}.toggle-sidebar-button .icon{display:flex;flex-direction:column;justify-content:center;align-items:center;width:1.25rem;height:1.25rem;cursor:inherit}.toggle-sidebar-button .icon span{display:inline-block;width:100%;height:2px;border-radius:2px;background-color:var(--c-text);transition:transform var(--t-transform)}.toggle-sidebar-button .icon span:nth-child(2){margin:6px 0}@media screen and (max-width:719px){.toggle-sidebar-button{display:block}}.toggle-dark-button{display:flex;margin:auto;margin-left:1rem;border:0;background:0 0;color:var(--c-text);opacity:.8;cursor:pointer}.toggle-dark-button:hover{opacity:1}.toggle-dark-button .icon{width:1.25rem;height:1.25rem}.page-meta,.page-nav{max-width:var(--content-width);margin:0 auto;padding:2rem 2.5rem}@media (max-width:959px){.page-meta,.page-nav{padding:2rem}}@media (max-width:419px){.page-meta,.page-nav{padding:1.5rem}}.page{padding-bottom:2rem;display:block}.page-meta{padding-top:1rem;padding-bottom:1rem;overflow:auto}.page-meta .meta-item{cursor:default;margin-top:.8rem}.page-meta .meta-item .meta-item-label{font-weight:500;color:var(--c-text-lighter)}.page-meta .meta-item .meta-item-info{font-weight:400;color:var(--c-text-quote)}.page-meta .edit-link{display:inline-block;margin-right:.25rem}.page-meta .last-updated{float:right}@media (max-width:719px){.page-meta .last-updated{font-size:.8em;float:none}.page-meta .contributors{font-size:.8em}}.page-nav{padding-top:1rem;padding-bottom:0}.page-nav .inner{min-height:2rem;margin-top:0;border-top:1px solid var(--c-border);transition:border-color var(--t-color);padding-top:1rem;overflow:auto}.page-nav .next{float:right}.sidebar ul{padding:0;margin:0;list-style-type:none}.sidebar a{display:inline-block}.sidebar .navbar-links{display:none;border-bottom:1px solid var(--c-border);transition:border-color var(--t-color);padding:.5rem 0 .75rem}.sidebar .navbar-links a{font-weight:600}.sidebar .navbar-links .navbar-links-item{display:block;line-height:1.25rem;font-size:1.1em;padding:.5rem 0 .5rem 1.5rem}.sidebar .sidebar-links{padding:1.5rem 0}.sidebar .sidebar-links>li:not(:first-child),.sidebar-links>.sidebar-item:not(.sidebar-heading):not(:first-child){margin-top:.75rem}.sidebar .sidebar-links .sidebar-sub-items{padding-left:1rem;font-size:.95em}@media (max-width:719px){.sidebar .navbar-links{display:block}.sidebar .navbar-links .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{top:calc(1rem - 2px)}.sidebar .sidebar-links{padding:1rem 0}}.sidebar-heading{color:var(--c-text);transition:color .15s ease;font-size:1.1em;font-weight:700;padding:.35rem 1.5rem .35rem 1.25rem;width:100%;box-sizing:border-box;margin:0;border-left:.25rem solid transparent}.sidebar-heading .arrow{position:relative;top:-.12em;left:.5em}.sidebar-item:not(.sidebar-heading){font-size:1em;font-weight:400;display:inline-block;color:var(--c-text);border-left:.25rem solid transparent;margin:0;padding:.35rem 1rem .35rem 2rem;line-height:1.4;width:100%;box-sizing:border-box}.sidebar-sub-items .sidebar-item:not(.sidebar-heading){padding:.25rem 1rem .25rem 1.75rem}.sidebar-item{cursor:default}a.sidebar-item{cursor:pointer}a.sidebar-item.active,a.sidebar-item:hover{color:var(--c-text-accent)}a.sidebar-item.active{font-weight:600;border-left-color:var(--c-text-accent)}a.sidebar-item.sidebar-heading.active{font-weight:700;border-left-color:transparent}.sidebar-sub-items a.sidebar-item.active{font-weight:500;border-left-color:transparent}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table-of-contents .badge{vertical-align:middle}.fade-slide-y-enter-active{transition:all .3s ease}.fade-slide-y-leave-active{transition:all .3s cubic-bezier(1,.5,.8,1)}.fade-slide-y-enter-from,.fade-slide-y-leave-to{transform:translateY(10px);opacity:0}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/theme-default/lib/client/styles/vars.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/vars-dark.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/normalize.scss","<no source>","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/badge.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/arrow.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/code.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/code-group.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/custom-container.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/dropdown.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/home.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/_wrapper.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/layout.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/navbar.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/page.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/sidebar.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/sr-only.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/toc.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/transitions.scss"],"names":[],"mappings":"AAAA,MAEE,iBAAA,CACA,uBAAA,CAGA,cAAA,CACA,oBAAA,CACA,sBAAA,CACA,yBAAA,CACA,0BAAA,CACA,oBAAA,CAGA,gBAAA,CACA,8BAAA,CACA,sBAAA,CACA,wBAAA,CACA,yBAAA,CACA,sBAAA,CAGA,kBAAA,CACA,uBAAA,CAGA,eAAA,CACA,4BAAA,CACA,2BAAA,CACA,0BAAA,CACA,wCAAA,CACA,mBAAA,CACA,sBAAA,CACA,yBAAA,CACA,wBAAA,CACA,qCAAA,CACA,kBAAA,CACA,qBAAA,CACA,wBAAA,CACA,uBAAA,CACA,oCAAA,CACA,sBAAA,CAGA,0BAAA,CACA,kCAAA,CACA,gCAAA,CAGA,mBAAA,CACA,uBAAA,CAGA,uBAAA,CACA,sCAAA,CACA,uBAAA,CACA,8BAAA,CAGA,uJAAA,CAEA,4EAAA,CAGA,sBAAA,CACA,yBAAA,CACA,yBAAA,CACA,qBAAA,CACA,wDAAA,CACA,qBAAA,CACA,sBAAA,CAIF,aACE,kCAAA,CACA,8CAAA,CAIF,WACE,wCAAA,CACA,oCAAA,CACA,0CAAA,CACA,2CAAA,CACA,qDAAA,CACA,8CAAA,CACA,oDAAA,CACA,kDAAA,CACA,2DAAA,CACA,yCAAA,CACA,wCAAA,CACA,sCAAA,CACA,uDAAA,CACA,yCAAA,CAIF,qBACE,kCAAA,CAIF,WACE,gCAAA,CAIF,WACE,oCAAA,CACA,gCAAA,CACA,uCAAA,CACA,4CAAA,CACA,sCAAA,CACA,uCAAA,CACA,mDAAA,CAIF,YACE,6BAAA,CACA,oCAAA,CACA,iCAAA,CACA,qCAAA,CAEA,8CAAA,CACA,8CAAA,CC9HF,UAEE,iBAAA,CACA,uBAAA,CAGA,cAAA,CACA,oBAAA,CACA,sBAAA,CAGA,gBAAA,CACA,sBAAA,CACA,wBAAA,CACA,yBAAA,CAGA,kBAAA,CACA,uBAAA,CAGA,eAAA,CACA,mBAAA,CACA,sBAAA,CACA,yBAAA,CACA,wBAAA,CACA,kBAAA,CACA,qBAAA,CACA,wBAAA,CACA,uBAAA,CACA,sBAAA,CAGA,0BAAA,CCxBA,iBDwBA,CAIF,qBACE,oCAAA,CACA,uEAAA,CACA,0GAAA,CAEA,mEAAA,CACA,iGAAA,CC3CF,UAEE,SAAA,CACA,QAAA,CACA,4BAAA,CACA,0CAAA,CAOF,KACE,8BAAA,CACA,kCAAA,CACA,iCAAA,CACA,cAAA,CACA,mBAAA,CCjBF,WD6BE,yBAAA,EC7BF,ADoBA,EACE,eAAA,CAGA,wBAAA,CAGF,SACE,eACA,CC7BF,SD0CE,kCAAA,EC1CF,ADgCA,IAEE,8BAAA,CACA,wCAAA,CACA,+CAAA,CACA,oBAAA,CACA,eAAA,CAGF,KAEE,2BAAA,CACA,oBAAA,CAEA,eAAA,CACA,kCAAA,CACA,iBAAA,CACA,wBAAA,CACA,+DAAA,CAGF,WAEE,yBAAA,CACA,4CAAA,CACA,aAAA,CACA,4BAAA,CAEA,kBACE,QAAA,CAIJ,MAEE,kBAAA,CAGF,OACE,eAAA,CAGF,kBAME,eAAA,CACA,gBAAA,CAEA,gJACE,SAAA,CAIJ,GACE,gBAAA,CAGF,GACE,iBAAA,CACA,oBAAA,CACA,uCAAA,CACA,sCAAA,CAGF,GACE,iBAAA,CAGF,GACE,iBAAA,CAGF,GACE,iBAAA,CAGF,cACE,cAAA,CAGF,gBACE,eAAA,CACA,UAAA,CACA,kBAAA,CACA,mBAAA,CACA,iBAAA,CACA,SAAA,CAEA,wBACE,oBAAA,CAGF,8BACE,SAAA,CAIJ,QAGE,eAAA,CAGF,GACE,QAAA,CACA,oCAAA,CAGF,MACE,wBAAA,CACA,aAAA,CACA,aAAA,CACA,eAAA,CAGF,GACE,yCAAA,CAEA,iBACE,kCAAA,CAIJ,MAEE,qCAAA,CACA,gBAAA,CCjKF,cCCE,mBAAA,EDDF,AEAA,OAEE,OAAA,CACA,QAAA,CFHF,sBEeM,iCAAA,CACA,iCAAA,EFhBN,AEKE,UAII,yCAAA,CAIJ,YAII,sCAAA,CFjBN,yBE+BM,gCAAA,CACA,kCAAA,EFhCN,AEqBE,aAII,uCAAA,CAIJ,YAII,wCAAA,CDjCN,OAEE,cAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,+DAAA,CAEA,WACE,mCAAA,CAGF,eACE,uCAAA,CAGF,cACE,sCAAA,CAOF,cACE,eAAA,CEvBJ,6CAEE,UAAA,CACA,cAAA,CACA,mCAAA,CACA,aAAA,CACA,eAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,eAAA,CAEA,eAAA,CACA,aAAA,CACA,UAAA,CAEA,oBAAA,CAEA,gBAAA,CACA,YAAA,CAIF,sBACE,WAAA,CACA,aAAA,CACA,aAAA,CAGF,uDAEE,kBAAA,CAIF,iCACE,YAAA,CACA,kBAAA,CACA,kBAAA,CAGF,8EAKE,UAAA,CAGF,mBACE,UAAA,CAGF,4DAIE,aAAA,CAGF,qBACE,aAAA,CAGF,6CAGE,aAAA,CAGF,gEAIE,aAAA,CAGF,6EAKE,aAAA,CAGF,yEAKE,aAAA,CAGF,yCAGE,aAAA,CAGF,6BAEE,eAAA,CAEF,cACE,iBAAA,CAGF,cACE,WAAA,CAGF,gBACE,aAAA,CAMA,wEAEE,eAAA,CACA,sBAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CAEA,kFACE,UAAA,CACA,SAAA,CACA,4BAAA,CACA,eAAA,CACA,mBAAA,CACA,2BAAA,CACA,4BAAA,CAIJ,oCACE,mCAAA,CAIJ,sBACE,iBAAA,CACA,qCAAA,CACA,iBAAA,CAEA,8BACE,iBAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,gBAAA,CACA,0BAAA,CAGF,sEAGE,wBAAA,CACA,iBAAA,CACA,SAAA,CAGF,uCACE,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CACA,kBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,eAAA,CAEA,uDACE,wCAAA,CAKF,4DACE,YAAA,CAKF,yEACE,iBAAA,CAEA,iFACE,WAAA,CACA,iBAAA,CACA,SAAA,CACA,MAAA,CACA,KAAA,CACA,aAAA,CACA,kCAAA,CACA,WAAA,CAIJ,4CACE,wCAAA,CACA,iBAAA,CACA,qBAAA,CAGF,sDACE,iBAAA,CACA,KAAA,CACA,kCAAA,CACA,iBAAA,CACA,0BAAA,CACA,mBAAA,CACA,eAAA,CAEA,4HACE,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAGF,mEACE,iBAAA,CACA,SAAA,CAEA,eAAA,CAIJ,+CACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,kCAAA,CACA,WAAA,CACA,yBAAA,CACA,8CAAA,CAOF,mCACE,WAAA,CADF,qCACE,aAAA,CADF,oCACE,YAAA,CADF,qCACE,aAAA,CADF,sCACE,cAAA,CADF,wCACE,gBAAA,CADF,oCACE,YAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,0CACE,kBAAA,CADF,oCACE,YAAA,CADF,qCACE,aAAA,CADF,oCACE,YAAA,CADF,oCACE,YAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,qCACE,aAAA,CADF,qCACE,aAAA,CAMN,yBAEI,6CACE,qBAAA,CACA,eAAA,CAAA,CC9PN,iBACE,iBAAA,CAEA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,gBAAA,CACA,0BAAA,CACA,2BAAA,CACA,qCAAA,CAGF,gBACE,aAAA,CACA,cAAA,CACA,mBAAA,CACA,eAAA,CAGF,qBACE,QAAA,CACA,WAAA,CACA,cAAA,CACA,4BAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CACA,eAAA,CAGF,2BACE,SAAA,CAGF,mCACE,sCAAA,CAGF,4BACE,sCAAA,CAGF,yBACE,iBACE,mBAAA,CACA,oBAAA,CACA,eAAA,CAAA,CAOJ,+GACE,YAAA,CAGF,yBACE,aAAA,CAGF,qBACE,uBAAA,CCnEF,kBACE,2FAAA,CAGA,0CACE,eAAA,CACA,oBAAA,CAGF,yEAGE,oBAAA,CACA,uBAAA,CACA,uBAAA,CACA,aAAA,CAGF,sBACE,yBAAA,CACA,gCAAA,CACA,uBAAA,CAEA,8CACE,wBAAA,CAGF,wBACE,8BAAA,CAIJ,0BACE,6BAAA,CACA,oCAAA,CACA,2BAAA,CAEA,kDACE,4BAAA,CAGF,4BACE,kCAAA,CAIJ,yBACE,4BAAA,CACA,mCAAA,CACA,0BAAA,CAEA,iDACE,2BAAA,CAGF,2BACE,iCAAA,CAIJ,0BACE,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,aAAA,CACA,oCAAA,CAEA,6BACE,YAAA,CAKA,mFACE,eAAA,CACA,gBAAA,CAIJ,kCACE,SAAA,CACA,cAAA,CChFN,kBACE,cAAA,CAEA,2EACE,aAAA,CACA,eAAA,CACA,mBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,QAAA,CACA,eAAA,CACA,mBAAA,CAVF,yCAyBE,YAAA,CACA,eAAA,CACA,iBAjBA,CAEA,uFACE,wBAAA,CAGF,yFACE,qBAAA,CACA,eAAA,CACA,iBAAA,CASF,+CACE,0BAAA,CAKF,+CACE,aAAA,CACA,kBAAA,CAEA,kEACE,iBAAA,CACA,oCAAA,CACA,qBAAA,CACA,eAAA,CAEA,uEACE,0BAAA,CAGF,oEACE,mBAAA,CASJ,yEACE,SAAA,CACA,eAAA,CAEA,2FACE,cAAA,CAIJ,iDACE,aAAA,CACA,kBAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CAEA,oLACE,0BAAA,CAMA,2EACE,UAAA,CACA,OAAA,CACA,QAAA,CACA,0CAAA,CACA,gCAAA,CACA,mCAAA,CACA,iBAAA,CACA,mBAAA,CACA,QAAA,CAKN,8EACE,YAAA,CACA,aAAA,CACA,YAAA,CAMR,yBAEI,qFACE,mBAAA,CAGF,kCACE,YAAA,CAGF,yCACE,aAAA,CAGF,gCACE,8BAAA,CACA,eAAA,CAGE,kEACE,YAAA,CACA,YAAA,CACA,aAAA,CACA,gBAAA,CAKA,cAAA,CACA,eAAA,CANA,CAGF,iDAEE,cAAA,CACA,gBAAA,CAGF,iEACE,cAAA,CACA,iBAAA,CAAA,CAOV,yBACE,kBACE,aAAA,CAEA,2EAGE,uBAAA,CAGF,4BACE,YAAA,CAGF,gCACE,YAAA,CAEA,qBAAA,CACA,qBAAA,CACA,+BAAA,CACA,eAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,mCAAA,CACA,eAAA,CACA,gCAAA,CACA,wCAAA,CACA,eAAA,CACA,oBAAA,CACA,kBAAA,CACA,QAAA,CAAA,CAQN,wCAEE,kBAAA,CC/LF,MACE,mCAAA,CACA,+BAAA,CACA,aAAA,CACA,aAAA,CAEA,YACE,iBAAA,CAEA,gBACE,cAAA,CACA,gBAAA,CACA,aAAA,CACA,uBAAA,CAGF,eACE,cAAA,CAGF,6DAGE,kBAAA,CAGF,qBACE,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CAGF,yBACE,eAAA,CACA,gBAAA,CACA,eAAA,CACA,4BAAA,CAGF,2BACE,oBAAA,CACA,gBAAA,CACA,oBAAA,CACA,gBAAA,CACA,kBAAA,CACA,iBAAA,CACA,0CAAA,CACA,qBAAA,CAEA,mCACE,iBAAA,CACA,+BAAA,CACA,2BAAA,CACA,yCACE,qCAAA,CAIJ,qCACE,oBAAA,CACA,4BAAA,CACA,2BAAA,CACA,2CACE,iBAAA,CACA,qCAAA,CAMR,gBACE,oCAAA,CACA,sCAAA,CACA,gBAAA,CACA,iBAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CACA,qBAAA,CACA,6BAAA,CAGF,eACE,WAAA,CACA,cAAA,CACA,aAAA,CAEA,kBACE,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,yBAAA,CAGF,+BACE,2BAAA,CAIJ,cACE,cAAA,CACA,oCAAA,CACA,iBAAA,CAEA,sCAAA,CAIJ,yBAEI,gBACE,qBAAA,CAGF,eACE,cAAA,CACA,gBAAA,CAAA,CAKN,yBACE,MACE,mBAAA,CACA,oBAAA,CAGE,gBACE,gBAAA,CACA,uBAAA,CAGF,eACE,cAAA,CAGF,6DAGE,kBAAA,CAGF,yBACE,gBAAA,CAGF,2BACE,cAAA,CACA,oBAAA,CAKF,kBACE,iBAAA,CAAA,CC5JR,oCACE,8BAAA,CACA,aAAA,CACA,mBAAA,CAEA,yBALF,oCAMI,YAAA,CAAA,CAGF,yBATF,oCAUI,cAAA,CAAA,CCTJ,MACE,gCAAA,CACA,iCAAA,CTLF,iBSwBE,cAAA,CAIA,MAAA,CAEA,oBAAA,ET9BF,ASQA,QAEE,UAAA,CACA,KAAA,CAEA,OAAA,CACA,2BAAA,CAEA,uCAAA,CACA,mCAAA,CACA,sEAAA,CAGF,SACE,cAAA,CACA,0BAAA,CAEA,UAAA,CACA,QAAA,CACA,wBAAA,CAEA,QAAA,CAEA,sCAAA,CACA,eAAA,CACA,oBAAA,CACA,8CAAA,CACA,oCAAA,CACA,mGAAA,CAEA,4BACE,SAAA,CAEF,kCACE,gCAAA,CAEF,kCACE,+BAAA,CAIJ,cACE,cAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,YAAA,CAKE,4CACE,aAAA,CAKE,qFACE,kDAAA,CAGF,qFACE,wBAAA,CAGF,qFACE,gDAAA,CAGF,0KAEE,uBAAA,CAON,wNAME,iBAAA,CACA,aAAA,CAGF,iCACE,aAAA,CAGF,oCACE,KAAA,CAKN,yBAEI,qCACE,YAAA,CAGF,kCACE,cAAA,CAAA,CAWJ,0OACE,6CAAA,CACA,6CAAA,CACA,eAAA,CAEA,kTACE,kBAAA,CAEA,siCAGE,eAAA,CAMR,oCAGE,aAAA,CAEA,4CACE,yBAAA,CAGF,wCACE,cAAA,CAIJ,8BACE,SAAA,CACA,QAAA,CAEA,kCACE,cAAA,CAKJ,yBACE,SACE,cAAA,CACA,iCAAA,CAGF,MACE,wCAAA,CAAA,CAKJ,yBACE,SACE,KAAA,CACA,gCAAA,CACA,2BAAA,CAGF,MACE,cAAA,CAKE,uCACE,uBAAA,CAKF,oCACE,aAAA,CAAA,CAOR,yBACE,GACE,gBAAA,CAAA,CC9MJ,QACE,+EAAA,CAIA,uDAAA,CACA,qCAAA,CAEA,cACE,gCAAA,CACA,oCAAA,CACA,kBAAA,CAGF,mBACE,gBAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CAGF,8BACE,YAAA,CACA,iBAAA,CACA,qBAAA,CACA,2BAAA,CACA,6BAAA,CACA,gCAAA,CACA,oCAAA,CACA,kBAAA,CACA,eAAA,CAEA,0CACE,aAAA,CACA,kBAAA,CAKN,yBACE,QACE,iBAAA,CAEA,kBACE,YAAA,CAGF,mBACE,0BAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAAA,CAQN,8BACE,oBAAA,CAEA,gBAEE,kBAAA,CACA,aAAA,CAQF,iCACE,iBAAA,CACA,oBAAA,CACA,kBAAA,CACA,qCAAA,CAEA,6CACE,aAAA,CAKN,yBAEI,iCACE,aAAA,CAAA,CAKN,yBAEI,yDAEE,mBAAA,CAKF,iGAEE,kBAAA,CACA,4CAAA,CAAA,CAQN,uBACE,iBAAA,CACA,SAAA,CACA,SAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CAGF,6BACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CACA,cAAA,CAEA,kCACE,oBAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,8BAAA,CACA,uCAAA,CAEA,+CACE,YAAA,CAKN,oCACE,uBACE,aAAA,CAAA,CAOJ,oBACE,YAAA,CACA,WAAA,CACA,gBAAA,CACA,QAAA,CACA,cAAA,CACA,mBAAA,CACA,UAAA,CACA,cAAA,CACA,0BACE,SAAA,CAEF,0BACE,aAAA,CACA,cAAA,CFxKJ,qBACE,8BAAA,CACA,aAAA,CACA,mBAAA,CAEA,yBALF,qBAMI,YAAA,CAAA,CAGF,yBATF,qBAUI,cAAA,CAAA,CGTJ,MACE,mBAAA,CACA,aAAA,CAGF,WAEE,gBAAA,CACA,mBAAA,CACA,aAAA,CAEA,sBACE,cAAA,CACA,gBAAA,CAEA,uCACE,eAAA,CACA,2BAAA,CAGF,sCACE,eAAA,CACA,yBAAA,CAIJ,sBACE,oBAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CAIJ,yBAEI,yBACE,cAAA,CACA,UAAA,CAGF,yBACE,cAAA,CAAA,CAKN,UAEE,gBAAA,CACA,gBAAA,CAEA,iBACE,eAAA,CACA,YAAA,CACA,oCAAA,CACA,sCAAA,CACA,gBAAA,CACA,aAAA,CAGF,gBACE,WAAA,CChEF,YACE,SAAA,CACA,QAAA,CACA,oBAAA,CAGF,WACE,oBAAA,CAGF,uBACE,YAAA,CACA,uCAAA,CACA,sCAAA,CACA,sBAAA,CAEA,yBACE,eAAA,CAGF,0CACE,aAAA,CACA,mBAAA,CACA,eAAA,CACA,4BAAA,CAIJ,wBACE,gBAAA,CAEA,kHACE,iBAAA,CAGF,2CACE,iBAAA,CACA,eAAA,CAKN,yBAEI,uBACE,aAAA,CAEA,kGAIE,oBAAA,CAIJ,wBACE,cAAA,CAAA,CAKN,iBACE,mBAAA,CACA,0BAAA,CACA,eAAA,CACA,eAAA,CACA,oCAAA,CACA,UAAA,CACA,qBAAA,CACA,QAAA,CACA,oCAAA,CAEA,wBACE,iBAAA,CACA,UAAA,CACA,SAAA,CAIJ,oCACE,aAAA,CACA,eAAA,CACA,oBAAA,CACA,mBAAA,CACA,oCAAA,CACA,QAAA,CACA,+BAAA,CACA,eAAA,CACA,UAAA,CACA,qBAAA,CAMA,uDACE,kCAAA,CAIJ,cACE,cAAA,CAGF,eACE,cAAA,CAEA,2CACE,0BAAA,CAGF,sBACE,eAAA,CAEA,sCAAA,CAGF,sCACE,eAAA,CACA,6BAAA,CAGF,yCACE,eAAA,CACA,6BAAA,CC/HJ,SACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CACA,WAAA,CACA,eAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CCTA,0BACE,qBAAA,CCFJ,2BACE,uBAAA,CAGF,2BACE,0CAAA,CAGF,gDAEE,0BAAA,CACA,SAAA","sourcesContent":[":root {\n  // brand colors\n  --c-brand: #3eaf7c;\n  --c-brand-light: #4abf8a;\n\n  // background colors\n  --c-bg: #ffffff;\n  --c-bg-light: #f3f4f5;\n  --c-bg-lighter: #eeeeee;\n  --c-bg-navbar: var(--c-bg);\n  --c-bg-sidebar: var(--c-bg);\n  --c-bg-arrow: #cccccc;\n\n  // text colors\n  --c-text: #2c3e50;\n  --c-text-accent: var(--c-brand);\n  --c-text-light: #3a5169;\n  --c-text-lighter: #4e6e8e;\n  --c-text-lightest: #6a8bad;\n  --c-text-quote: #999999;\n\n  // border colors\n  --c-border: #eaecef;\n  --c-border-dark: #dfe2e5;\n\n  // custom container colors\n  --c-tip: #42b983;\n  --c-tip-bg: var(--c-bg-light);\n  --c-tip-title: var(--c-text);\n  --c-tip-text: var(--c-text);\n  --c-tip-text-accent: var(--c-text-accent);\n  --c-warning: #e7c000;\n  --c-warning-bg: #fffae3;\n  --c-warning-title: #ad9000;\n  --c-warning-text: #746000;\n  --c-warning-text-accent: var(--c-text);\n  --c-danger: #cc0000;\n  --c-danger-bg: #ffe0e0;\n  --c-danger-title: #990000;\n  --c-danger-text: #660000;\n  --c-danger-text-accent: var(--c-text);\n  --c-details-bg: #eeeeee;\n\n  // badge component colors\n  --c-badge-tip: var(--c-tip);\n  --c-badge-warning: var(--c-warning);\n  --c-badge-danger: var(--c-danger);\n\n  // transition vars\n  --t-color: 0.3s ease;\n  --t-transform: 0.3s ease;\n\n  // code blocks vars\n  --code-bg-color: #282c34;\n  --code-hl-bg-color: rgba(0, 0, 0, 0.66);\n  --code-ln-color: #9e9e9e;\n  --code-ln-wrapper-width: 3.5rem;\n\n  // font vars\n  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  --font-family-code: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\n  // layout vars\n  --navbar-height: 3.6rem;\n  --navbar-padding-v: 0.7rem;\n  --navbar-padding-h: 1.5rem;\n  --sidebar-width: 20rem;\n  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);\n  --content-width: 740px;\n  --homepage-width: 960px;\n}\n\n// plugin-back-to-top\n.back-to-top {\n  --back-to-top-color: var(--c-brand);\n  --back-to-top-color-hover: var(--c-brand-light);\n}\n\n// plugin-docsearch\n.DocSearch {\n  --docsearch-primary-color: var(--c-brand);\n  --docsearch-text-color: var(--c-text);\n  --docsearch-highlight-color: var(--c-brand);\n  --docsearch-muted-color: var(--c-text-quote);\n  --docsearch-container-background: rgba(9, 10, 17, 0.8);\n  --docsearch-modal-background: var(--c-bg-light);\n  --docsearch-searchbox-background: var(--c-bg-lighter);\n  --docsearch-searchbox-focus-background: var(--c-bg);\n  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);\n  --docsearch-hit-color: var(--c-text-light);\n  --docsearch-hit-active-color: var(--c-bg);\n  --docsearch-hit-background: var(--c-bg);\n  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);\n  --docsearch-footer-background: var(--c-bg);\n}\n\n// plugin-medium-zoom\n.medium-zoom-overlay {\n  --medium-zoom-bg-color: var(--c-bg);\n}\n\n// plugin-nprogress\n#nprogress {\n  --nprogress-color: var(--c-brand);\n}\n\n// plugin-pwa-popup\n.pwa-popup {\n  --pwa-popup-text-color: var(--c-text);\n  --pwa-popup-bg-color: var(--c-bg);\n  --pwa-popup-border-color: var(--c-brand);\n  --pwa-popup-shadow: 0 4px 16px var(--c-brand);\n  --pwa-popup-btn-text-color: var(--c-bg);\n  --pwa-popup-btn-bg-color: var(--c-brand);\n  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);\n}\n\n// plugin-search\n.search-box {\n  --search-bg-color: var(--c-bg);\n  --search-accent-color: var(--c-brand);\n  --search-text-color: var(--c-text);\n  --search-border-color: var(--c-border);\n\n  --search-item-text-color: var(--c-text-lighter);\n  --search-item-focus-bg-color: var(--c-bg-light);\n}\n","html.dark {\n  // brand colors\n  --c-brand: #3aa675;\n  --c-brand-light: #349469;\n\n  // background colors\n  --c-bg: #22272e;\n  --c-bg-light: #2b313a;\n  --c-bg-lighter: #262c34;\n\n  // text colors\n  --c-text: #adbac7;\n  --c-text-light: #96a7b7;\n  --c-text-lighter: #8b9eb0;\n  --c-text-lightest: #8094a8;\n\n  // border colors\n  --c-border: #3e4c5a;\n  --c-border-dark: #34404c;\n\n  // custom container colors\n  --c-tip: #318a62;\n  --c-warning: #ceab00;\n  --c-warning-bg: #7e755b;\n  --c-warning-title: #ceac03;\n  --c-warning-text: #362e00;\n  --c-danger: #940000;\n  --c-danger-bg: #806161;\n  --c-danger-title: #610000;\n  --c-danger-text: #3a0000;\n  --c-details-bg: #323843;\n\n  // code blocks vars\n  --code-hl-bg-color: #363b46;\n}\n\n// plugin-docsearch\nhtml.dark .DocSearch {\n  --docsearch-logo-color: var(--c-text);\n  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;\n  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,\n    0 2px 2px 0 rgba(3, 4, 9, 0.3);\n  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);\n  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),\n    0 -4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n","html,\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: var(--c-bg);\n  transition: background-color var(--t-color);\n}\n\nhtml.dark {\n  color-scheme: dark;\n}\n\nbody {\n  font-family: var(--font-family);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px;\n  color: var(--c-text);\n}\n\na {\n  font-weight: 500;\n  color: var(--c-text-accent);\n  text-decoration: none;\n  overflow-wrap: break-word;\n}\n\np a code {\n  font-weight: 400;\n  color: var(--c-text-accent);\n}\n\nkbd {\n  font-family: var(--font-family-code);\n  background: var(--c-bg-lighter);\n  border: solid 0.15rem var(--c-border-dark);\n  border-bottom: solid 0.25rem var(--c-border-dark);\n  border-radius: 0.15rem;\n  padding: 0 0.15em;\n}\n\ncode {\n  font-family: var(--font-family-code);\n  color: var(--c-text-lighter);\n  padding: 0.25rem 0.5rem;\n  margin: 0;\n  font-size: 0.85em;\n  background-color: var(--c-bg-light);\n  border-radius: 3px;\n  overflow-wrap: break-word;\n  transition: background-color var(--t-color), color var(--t-color);\n}\n\nblockquote {\n  font-size: 1rem;\n  color: var(--c-text-quote);\n  border-left: 0.2rem solid var(--c-border-dark);\n  margin: 1rem 0;\n  padding: 0.25rem 0 0.25rem 1rem;\n\n  & > p {\n    margin: 0;\n  }\n}\n\nul,\nol {\n  padding-left: 1.2em;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  line-height: 1.25;\n\n  &:hover .header-anchor {\n    opacity: 1;\n  }\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nh2 {\n  font-size: 1.65rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n}\n\nh3 {\n  font-size: 1.35rem;\n}\n\nh4 {\n  font-size: 1.15rem;\n}\n\nh5 {\n  font-size: 1.05rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\na.header-anchor {\n  font-size: 0.85em;\n  float: left;\n  margin-left: -0.87em;\n  padding-right: 0.23em;\n  margin-top: 0.125em;\n  opacity: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    opacity: 1;\n  }\n}\n\np,\nul,\nol {\n  line-height: 1.7;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid var(--c-border);\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1rem 0;\n  display: block;\n  overflow-x: auto;\n}\n\ntr {\n  border-top: 1px solid var(--c-border-dark);\n\n  &:nth-child(2n) {\n    background-color: var(--c-bg-light);\n  }\n}\n\nth,\ntd {\n  border: 1px solid var(--c-border-dark);\n  padding: 0.6em 1em;\n}\n",null,".badge {\n  display: inline-block;\n  font-size: 14px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 3px;\n  padding: 0 6px;\n  color: var(--c-bg);\n  vertical-align: top;\n  transition: color var(--t-color), background-color var(--t-color);\n\n  &.tip {\n    background-color: var(--c-badge-tip);\n  }\n\n  &.warning {\n    background-color: var(--c-badge-warning);\n  }\n\n  &.danger {\n    background-color: var(--c-badge-danger);\n  }\n\n  .table-of-contents & {\n    vertical-align: middle;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n}\n",".arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n\n  &.up {\n    border: {\n      left: 4px solid transparent;\n      right: 4px solid transparent;\n      bottom: 6px solid var(--c-bg-arrow);\n    }\n  }\n\n  &.down {\n    border: {\n      left: 4px solid transparent;\n      right: 4px solid transparent;\n      top: 6px solid var(--c-bg-arrow);\n    }\n  }\n\n  &.right {\n    border: {\n      top: 4px solid transparent;\n      bottom: 4px solid transparent;\n      left: 6px solid var(--c-bg-arrow);\n    }\n  }\n\n  &.left {\n    border: {\n      top: 4px solid transparent;\n      bottom: 4px solid transparent;\n      right: 6px solid var(--c-bg-arrow);\n    }\n  }\n}\n","@import '_variables';\n\n// ===============================\n// Forked and modified from prismjs/themes/prism-tomorrow.css\n\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #ccc;\n  background: none;\n  font-family: var(--font-family-code);\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #999;\n}\n\n.token.punctuation {\n  color: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n  color: #ec5975;\n}\n\n.token.function-name {\n  color: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n  color: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n  color: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n  color: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n  color: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n  color: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.inserted {\n  color: #3eaf7c;\n}\n\n// ===============================\n\n.theme-default-content {\n  pre,\n  pre[class*='language-'] {\n    line-height: 1.4;\n    padding: 1.25rem 1.5rem;\n    margin: 0.85rem 0;\n    border-radius: 6px;\n    overflow: auto;\n\n    code {\n      color: #fff;\n      padding: 0;\n      background-color: transparent;\n      border-radius: 0;\n      overflow-wrap: unset;\n      -webkit-font-smoothing: auto;\n      -moz-osx-font-smoothing: auto;\n    }\n  }\n\n  .line-number {\n    font-family: var(--font-family-code);\n  }\n}\n\ndiv[class*='language-'] {\n  position: relative;\n  background-color: var(--code-bg-color);\n  border-radius: 6px;\n\n  &::before {\n    position: absolute;\n    z-index: 3;\n    top: 0.8em;\n    right: 1em;\n    font-size: 0.75rem;\n    color: var(--code-ln-color);\n  }\n\n  pre,\n  pre[class*='language-'] {\n    // force override the background color to be compatible with shiki\n    background: transparent !important;\n    position: relative;\n    z-index: 1;\n  }\n\n  .highlight-lines {\n    user-select: none;\n    padding-top: 1.3rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    line-height: 1.4;\n\n    .highlight-line {\n      background-color: var(--code-hl-bg-color);\n    }\n  }\n\n  &:not(.line-numbers-mode) {\n    .line-numbers {\n      display: none;\n    }\n  }\n\n  &.line-numbers-mode {\n    .highlight-lines .highlight-line {\n      position: relative;\n\n      &::before {\n        content: ' ';\n        position: absolute;\n        z-index: 2;\n        left: 0;\n        top: 0;\n        display: block;\n        width: var(--code-ln-wrapper-width);\n        height: 100%;\n      }\n    }\n\n    pre {\n      margin-left: var(--code-ln-wrapper-width);\n      padding-left: 1rem;\n      vertical-align: middle;\n    }\n\n    .line-numbers {\n      position: absolute;\n      top: 0;\n      width: var(--code-ln-wrapper-width);\n      text-align: center;\n      color: var(--code-ln-color);\n      padding-top: 1.25rem;\n      line-height: 1.4;\n\n      br {\n        user-select: none;\n      }\n\n      .line-number {\n        position: relative;\n        z-index: 3;\n        user-select: none;\n        font-size: 0.85em;\n      }\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: var(--code-ln-wrapper-width);\n      height: 100%;\n      border-radius: 6px 0 0 6px;\n      border-right: 1px solid var(--code-hl-bg-color);\n    }\n  }\n}\n\n@each $lang in $codeLang {\n  div[class*='language-'].ext-#{$lang} {\n    &:before {\n      content: '' + $lang;\n    }\n  }\n}\n\n// narrow mobile\n@media (max-width: $MQMobileNarrow) {\n  .theme-default-content {\n    div[class*='language-'] {\n      margin: 0.85rem -1.5rem;\n      border-radius: 0;\n    }\n  }\n}\n","@import '_variables';\n\n/**\n * code-group\n */\n.code-group__nav {\n  margin-top: 0.85rem;\n  // 2 * margin + border-radius of <pre> tag\n  margin-bottom: calc(-1.7rem - 6px);\n  padding-bottom: calc(1.7rem - 6px);\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: var(--code-bg-color);\n}\n\n.code-group__ul {\n  margin: auto 0;\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n}\n\n.code-group__nav-tab {\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: 0.85em;\n  line-height: 1.4;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.code-group__nav-tab:focus {\n  outline: none;\n}\n\n.code-group__nav-tab:focus-visible {\n  outline: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.code-group__nav-tab-active {\n  border-bottom: var(--c-brand) 1px solid;\n}\n\n@media (max-width: $MQMobileNarrow) {\n  .code-group__nav {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    border-radius: 0;\n  }\n}\n\n/**\n * code-group-item\n */\n.code-group-item {\n  display: none;\n}\n\n.code-group-item__active {\n  display: block;\n}\n\n.code-group-item > pre {\n  background-color: orange;\n}\n",".custom-container {\n  transition: color var(--t-color), border-color var(--t-color),\n    background-color var(--t-color);\n\n  .custom-container-title {\n    font-weight: 600;\n    margin-bottom: -0.4rem;\n  }\n\n  &.tip,\n  &.warning,\n  &.danger {\n    padding: 0.1rem 1.5rem;\n    border-left-width: 0.5rem;\n    border-left-style: solid;\n    margin: 1rem 0;\n  }\n\n  &.tip {\n    border-color: var(--c-tip);\n    background-color: var(--c-tip-bg);\n    color: var(--c-tip-text);\n\n    .custom-container-title {\n      color: var(--c-tip-title);\n    }\n\n    a {\n      color: var(--c-tip-text-accent);\n    }\n  }\n\n  &.warning {\n    border-color: var(--c-warning);\n    background-color: var(--c-warning-bg);\n    color: var(--c-warning-text);\n\n    .custom-container-title {\n      color: var(--c-warning-title);\n    }\n\n    a {\n      color: var(--c-warning-text-accent);\n    }\n  }\n\n  &.danger {\n    border-color: var(--c-danger);\n    background-color: var(--c-danger-bg);\n    color: var(--c-danger-text);\n\n    .custom-container-title {\n      color: var(--c-danger-title);\n    }\n\n    a {\n      color: var(--c-danger-text-accent);\n    }\n  }\n\n  &.details {\n    display: block;\n    position: relative;\n    border-radius: 2px;\n    margin: 1.6em 0;\n    padding: 1.6em;\n    background-color: var(--c-details-bg);\n\n    h4 {\n      margin-top: 0;\n    }\n\n    figure,\n    p {\n      &:last-child {\n        margin-bottom: 0;\n        padding-bottom: 0;\n      }\n    }\n\n    summary {\n      outline: none;\n      cursor: pointer;\n    }\n  }\n}\n","@import '_variables';\n\n.dropdown-wrapper {\n  cursor: pointer;\n\n  .dropdown-title {\n    display: block;\n    font-size: 0.9rem;\n    font-family: inherit;\n    cursor: inherit;\n    padding: inherit;\n    line-height: 1.4rem;\n    background: transparent;\n    border: none;\n    font-weight: 500;\n    color: var(--c-text);\n\n    &:hover {\n      border-color: transparent;\n    }\n\n    .arrow {\n      vertical-align: middle;\n      margin-top: -1px;\n      margin-left: 0.4rem;\n    }\n  }\n\n  .mobile-dropdown-title {\n    @extend .dropdown-title;\n    display: none;\n    font-weight: 600;\n    font-size: inherit;\n    &:hover {\n      color: var(--c-text-accent);\n    }\n  }\n\n  .nav-dropdown {\n    .dropdown-item {\n      color: inherit;\n      line-height: 1.7rem;\n\n      .dropdown-subtitle {\n        margin: 0.45rem 0 0;\n        border-top: 1px solid var(--c-border);\n        padding: 1rem 0 0.45rem 0;\n        font-size: 0.9rem;\n\n        & > span {\n          padding: 0 1.5rem 0 1.25rem;\n        }\n\n        & > a {\n          font-weight: inherit;\n          &.router-link-active {\n            &::after {\n              display: none;\n            }\n          }\n        }\n      }\n\n      .dropdown-subitem-wrapper {\n        padding: 0;\n        list-style: none;\n\n        .dropdown-subitem {\n          font-size: 0.9em;\n        }\n      }\n\n      a {\n        display: block;\n        line-height: 1.7rem;\n        position: relative;\n        border-bottom: none;\n        font-weight: 400;\n        margin-bottom: 0;\n        padding: 0 1.5rem 0 1.25rem;\n\n        &:hover {\n          color: var(--c-text-accent);\n        }\n\n        &.router-link-active {\n          color: var(--c-text-accent);\n\n          &::after {\n            content: '';\n            width: 0;\n            height: 0;\n            border-left: 5px solid var(--c-text-accent);\n            border-top: 3px solid transparent;\n            border-bottom: 3px solid transparent;\n            position: absolute;\n            top: calc(50% - 2px);\n            left: 9px;\n          }\n        }\n      }\n\n      &:first-child .dropdown-subtitle {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: 0;\n      }\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .dropdown-wrapper {\n    &.open .dropdown-title {\n      margin-bottom: 0.5rem;\n    }\n\n    .dropdown-title {\n      display: none;\n    }\n\n    .mobile-dropdown-title {\n      display: block;\n    }\n\n    .nav-dropdown {\n      transition: height 0.1s ease-out;\n      overflow: hidden;\n\n      .dropdown-item {\n        .dropdown-subtitle {\n          border-top: 0;\n          margin-top: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n\n        .dropdown-subtitle,\n        & > a {\n          font-size: 15px;\n          line-height: 2rem;\n        }\n\n        .dropdown-subitem {\n          font-size: 14px;\n          padding-left: 1rem;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: ($MQMobile + 1)) {\n  .dropdown-wrapper {\n    height: 1.8rem;\n\n    &:hover .nav-dropdown,\n    &.open .nav-dropdown {\n      // override the inline style.\n      display: block !important;\n    }\n\n    &.open:blur {\n      display: none;\n    }\n\n    .nav-dropdown {\n      display: none;\n      // Avoid height shaked by clicking\n      height: auto !important;\n      box-sizing: border-box;\n      max-height: calc(100vh - 2.7rem);\n      overflow-y: auto;\n      position: absolute;\n      top: 100%;\n      right: 0;\n      background-color: var(--c-bg-navbar);\n      padding: 0.6rem 0;\n      border: 1px solid var(--c-border);\n      border-bottom-color: var(--c-border-dark);\n      text-align: left;\n      border-radius: 0.25rem;\n      white-space: nowrap;\n      margin: 0;\n    }\n  }\n}\n\n/**\n * transition\n */\n.dropdown-enter-from,\n.dropdown-leave-to {\n  height: 0 !important;\n}\n","@import '_variables';\n\n.home {\n  padding: var(--navbar-height) 2rem 0;\n  max-width: var(--homepage-width);\n  margin: 0px auto;\n  display: block;\n\n  .hero {\n    text-align: center;\n\n    img {\n      max-width: 100%;\n      max-height: 280px;\n      display: block;\n      margin: 3rem auto 1.5rem;\n    }\n\n    h1 {\n      font-size: 3rem;\n    }\n\n    h1,\n    .description,\n    .actions {\n      margin: 1.8rem auto;\n    }\n\n    .actions {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 1rem;\n      justify-content: center;\n    }\n\n    .description {\n      max-width: 35rem;\n      font-size: 1.6rem;\n      line-height: 1.3;\n      color: var(--c-text-lightest);\n    }\n\n    .action-button {\n      display: inline-block;\n      font-size: 1.2rem;\n      padding: 0.8rem 1.6rem;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 4px;\n      transition: background-color var(--t-color);\n      box-sizing: border-box;\n\n      &.primary {\n        color: var(--c-bg);\n        background-color: var(--c-brand);\n        border-color: var(--c-brand);\n        &:hover {\n          background-color: var(--c-brand-light);\n        }\n      }\n\n      &.secondary {\n        color: var(--c-brand);\n        background-color: var(--c-bg);\n        border-color: var(--c-brand);\n        &:hover {\n          color: var(--c-bg);\n          background-color: var(--c-brand-light);\n        }\n      }\n    }\n  }\n\n  .features {\n    border-top: 1px solid var(--c-border);\n    transition: border-color var(--t-color);\n    padding: 1.2rem 0;\n    margin-top: 2.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    align-content: stretch;\n    justify-content: space-between;\n  }\n\n  .feature {\n    flex-grow: 1;\n    flex-basis: 30%;\n    max-width: 30%;\n\n    h2 {\n      font-size: 1.4rem;\n      font-weight: 500;\n      border-bottom: none;\n      padding-bottom: 0;\n      color: var(--c-text-light);\n    }\n\n    p {\n      color: var(--c-text-lighter);\n    }\n  }\n\n  .footer {\n    padding: 2.5rem;\n    border-top: 1px solid var(--c-border);\n    text-align: center;\n    color: var(--c-text-lighter);\n    transition: border-color var(--t-color);\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .home {\n    .features {\n      flex-direction: column;\n    }\n\n    .feature {\n      max-width: 100%;\n      padding: 0 2.5rem;\n    }\n  }\n}\n\n@media (max-width: $MQMobileNarrow) {\n  .home {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n\n    .hero {\n      img {\n        max-height: 210px;\n        margin: 2rem auto 1.2rem;\n      }\n\n      h1 {\n        font-size: 2rem;\n      }\n\n      h1,\n      .description,\n      .actions {\n        margin: 1.2rem auto;\n      }\n\n      .description {\n        font-size: 1.2rem;\n      }\n\n      .action-button {\n        font-size: 1rem;\n        padding: 0.6rem 1.2rem;\n      }\n    }\n\n    .feature {\n      h2 {\n        font-size: 1.25rem;\n      }\n    }\n  }\n}\n","@import '_variables';\n\n%wrapper {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n\n  @media (max-width: $MQNarrow) {\n    padding: 2rem;\n  }\n\n  @media (max-width: $MQMobileNarrow) {\n    padding: 1.5rem;\n  }\n}\n","@import '_variables';\n@import '_wrapper';\n\n.page {\n  padding-top: var(--navbar-height);\n  padding-left: var(--sidebar-width);\n}\n\n.navbar {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: var(--navbar-height);\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--c-border);\n  background-color: var(--c-bg-navbar);\n  transition: background-color var(--t-color), border-color var(--t-color);\n}\n\n.sidebar {\n  font-size: 16px;\n  width: var(--sidebar-width);\n  position: fixed;\n  z-index: 10;\n  margin: 0;\n  top: var(--navbar-height);\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  border-right: 1px solid var(--c-border);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--c-brand) var(--c-border);\n  background-color: var(--c-bg-sidebar);\n  transition: transform var(--t-transform), background-color var(--t-color),\n    border-color var(--t-color);\n  &::-webkit-scrollbar {\n    width: 7px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: var(--c-border);\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: var(--c-brand);\n  }\n}\n\n.sidebar-mask {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n}\n\n.theme-container {\n  &.sidebar-open {\n    .sidebar-mask {\n      display: block;\n    }\n\n    .navbar > .toggle-sidebar-button .icon {\n      span {\n        &:nth-child(1) {\n          transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);\n        }\n\n        &:nth-child(2) {\n          transform: scale3d(0, 1, 1);\n        }\n\n        &:nth-child(3) {\n          transform: rotate(-45deg) translate3d(6px, -6px, 0);\n        }\n\n        &:nth-child(1),\n        &:nth-child(3) {\n          transform-origin: center;\n        }\n      }\n    }\n  }\n\n  &.no-navbar {\n    .theme-default-content:not(.custom) > h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 1.5rem;\n      padding-top: 0;\n    }\n\n    .page {\n      padding-top: 0;\n    }\n\n    .sidebar {\n      top: 0;\n    }\n  }\n}\n\n@media (min-width: ($MQMobile + 1px)) {\n  .theme-container.no-sidebar {\n    .sidebar {\n      display: none;\n    }\n\n    .page {\n      padding-left: 0;\n    }\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  .theme-default-content:not(.custom) > & {\n    margin-top: calc(0.5rem - var(--navbar-height));\n    padding-top: calc(1rem + var(--navbar-height));\n    margin-bottom: 0;\n\n    &:first-child {\n      margin-bottom: 1rem;\n\n      + p,\n      + pre,\n      + .custom-container {\n        margin-top: 2rem;\n      }\n    }\n  }\n}\n\n.theme-default-content:not(.custom) {\n  @extend %wrapper;\n\n  padding-top: 0;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  img {\n    max-width: 100%;\n  }\n}\n\n.theme-default-content.custom {\n  padding: 0;\n  margin: 0;\n\n  img {\n    max-width: 100%;\n  }\n}\n\n// narrow desktop / iPad\n@media (max-width: $MQNarrow) {\n  .sidebar {\n    font-size: 15px;\n    width: var(--sidebar-width-mobile);\n  }\n\n  .page {\n    padding-left: var(--sidebar-width-mobile);\n  }\n}\n\n// wide mobile\n@media (max-width: $MQMobile) {\n  .sidebar {\n    top: 0;\n    padding-top: var(--navbar-height);\n    transform: translateX(-100%);\n  }\n\n  .page {\n    padding-left: 0;\n  }\n\n  .theme-container {\n    &.sidebar-open {\n      .sidebar {\n        transform: translateX(0);\n      }\n    }\n\n    &.no-navbar {\n      .sidebar {\n        padding-top: 0;\n      }\n    }\n  }\n}\n\n// narrow mobile\n@media (max-width: $MQMobileNarrow) {\n  h1 {\n    font-size: 1.9rem;\n  }\n}\n","@import '_variables';\n\n.navbar {\n  --navbar-line-height: calc(\n    var(--navbar-height) - 2 * var(--navbar-padding-v)\n  );\n\n  padding: var(--navbar-padding-v) var(--navbar-padding-h);\n  line-height: var(--navbar-line-height);\n\n  .logo {\n    height: var(--navbar-line-height);\n    margin-right: var(--navbar-padding-v);\n    vertical-align: top;\n  }\n\n  .site-name {\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: var(--c-text);\n    position: relative;\n  }\n\n  .navbar-links-wrapper {\n    display: flex;\n    position: absolute;\n    box-sizing: border-box;\n    top: var(--navbar-padding-v);\n    right: var(--navbar-padding-h);\n    height: var(--navbar-line-height);\n    padding-left: var(--navbar-padding-h);\n    white-space: nowrap;\n    font-size: 0.9rem;\n\n    .search-box {\n      flex: 0 0 auto;\n      vertical-align: top;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .navbar {\n    padding-left: 4rem;\n\n    .can-hide {\n      display: none;\n    }\n\n    .site-name {\n      width: calc(100vw - 9.4rem);\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n}\n\n/**\n * navbar-links\n */\n.navbar-links {\n  display: inline-block;\n\n  a {\n    display: inline-block;\n    line-height: 1.4rem;\n    color: inherit;\n\n    &:hover,\n    &.router-link-active {\n      color: var(--c-text-accent);\n    }\n  }\n\n  .navbar-links-item {\n    position: relative;\n    display: inline-block;\n    margin-left: 1.5rem;\n    line-height: var(--navbar-line-height);\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .navbar-links {\n    .navbar-links-item {\n      margin-left: 0;\n    }\n  }\n}\n\n@media (min-width: $MQMobile) {\n  .navbar-links a {\n    &:hover,\n    &.router-link-active {\n      color: var(--c-text);\n    }\n  }\n\n  .navbar-links-item > a:not(.external) {\n    &:hover,\n    &.router-link-active {\n      margin-bottom: -2px;\n      border-bottom: 2px solid var(--c-text-accent);\n    }\n  }\n}\n\n/**\n * toggle sidebar button\n */\n.toggle-sidebar-button {\n  position: absolute;\n  top: 0.6rem;\n  left: 1rem;\n  display: none;\n  padding: 0.6rem;\n  cursor: pointer;\n}\n\n.toggle-sidebar-button .icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  cursor: inherit;\n\n  span {\n    display: inline-block;\n    width: 100%;\n    height: 2px;\n    border-radius: 2px;\n    background-color: var(--c-text);\n    transition: transform var(--t-transform);\n\n    &:nth-child(2) {\n      margin: 6px 0;\n    }\n  }\n}\n\n@media screen and (max-width: $MQMobile) {\n  .toggle-sidebar-button {\n    display: block;\n  }\n}\n\n/**\n * toggle dark button\n */\n.toggle-dark-button {\n  display: flex;\n  margin: auto;\n  margin-left: 1rem;\n  border: 0;\n  background: none;\n  color: var(--c-text);\n  opacity: 0.8;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  .icon {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n}\n","@import '_variables';\n@import '_wrapper';\n\n.page {\n  padding-bottom: 2rem;\n  display: block;\n}\n\n.page-meta {\n  @extend %wrapper;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow: auto;\n\n  .meta-item {\n    cursor: default;\n    margin-top: 0.8rem;\n\n    .meta-item-label {\n      font-weight: 500;\n      color: var(--c-text-lighter);\n    }\n\n    .meta-item-info {\n      font-weight: 400;\n      color: var(--c-text-quote);\n    }\n  }\n\n  .edit-link {\n    display: inline-block;\n    margin-right: 0.25rem;\n  }\n\n  .last-updated {\n    float: right;\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .page-meta {\n    .last-updated {\n      font-size: 0.8em;\n      float: none;\n    }\n\n    .contributors {\n      font-size: 0.8em;\n    }\n  }\n}\n\n.page-nav {\n  @extend %wrapper;\n  padding-top: 1rem;\n  padding-bottom: 0;\n\n  .inner {\n    min-height: 2rem;\n    margin-top: 0;\n    border-top: 1px solid var(--c-border);\n    transition: border-color var(--t-color);\n    padding-top: 1rem;\n    overflow: auto;\n  }\n\n  .next {\n    float: right;\n  }\n}\n","@import '_variables';\n\n.sidebar {\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n  }\n\n  a {\n    display: inline-block;\n  }\n\n  .navbar-links {\n    display: none;\n    border-bottom: 1px solid var(--c-border);\n    transition: border-color var(--t-color);\n    padding: 0.5rem 0 0.75rem 0;\n\n    a {\n      font-weight: 600;\n    }\n\n    .navbar-links-item {\n      display: block;\n      line-height: 1.25rem;\n      font-size: 1.1em;\n      padding: 0.5rem 0 0.5rem 1.5rem;\n    }\n  }\n\n  .sidebar-links {\n    padding: 1.5rem 0;\n\n    > li:not(:first-child) {\n      margin-top: 0.75rem;\n    }\n\n    .sidebar-sub-items {\n      padding-left: 1rem;\n      font-size: 0.95em;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .sidebar {\n    .navbar-links {\n      display: block;\n\n      .dropdown-wrapper\n        .nav-dropdown\n        .dropdown-item\n        a.router-link-active::after {\n        top: calc(1rem - 2px);\n      }\n    }\n\n    .sidebar-links {\n      padding: 1rem 0;\n    }\n  }\n}\n\n.sidebar-heading {\n  color: var(--c-text);\n  transition: color 0.15s ease;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding: 0.35rem 1.5rem 0.35rem 1.25rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  border-left: 0.25rem solid transparent;\n\n  .arrow {\n    position: relative;\n    top: -0.12em;\n    left: 0.5em;\n  }\n}\n\n.sidebar-item:not(.sidebar-heading) {\n  font-size: 1em;\n  font-weight: 400;\n  display: inline-block;\n  color: var(--c-text);\n  border-left: 0.25rem solid transparent;\n  margin: 0;\n  padding: 0.35rem 1rem 0.35rem 2rem;\n  line-height: 1.4;\n  width: 100%;\n  box-sizing: border-box;\n\n  .sidebar-links > &:not(:first-child) {\n    margin-top: 0.75rem;\n  }\n\n  .sidebar-sub-items & {\n    padding: 0.25rem 1rem 0.25rem 1.75rem;\n  }\n}\n\n.sidebar-item {\n  cursor: default;\n}\n\na.sidebar-item {\n  cursor: pointer;\n\n  &:hover {\n    color: var(--c-text-accent);\n  }\n\n  &.active {\n    font-weight: 600;\n    color: var(--c-text-accent);\n    border-left-color: var(--c-text-accent);\n  }\n\n  &.sidebar-heading.active {\n    font-weight: bold;\n    border-left-color: transparent;\n  }\n\n  .sidebar-sub-items &.active {\n    font-weight: 500;\n    border-left-color: transparent;\n  }\n}\n",".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n  user-select: none;\n}\n",".table-of-contents {\n  .badge {\n    vertical-align: middle;\n  }\n}\n",".fade-slide-y-enter-active {\n  transition: all 0.3s ease;\n}\n\n.fade-slide-y-leave-active {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.fade-slide-y-enter-from,\n.fade-slide-y-leave-to {\n  transform: translateY(10px);\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 3645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 7537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 2467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ pagesComponents)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1666);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const pagesComponents = {
  // path: /
  "v-8daa1a0e": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8daa1a0e */ 2509).then(__webpack_require__.bind(__webpack_require__, 2152))),
  // path: /config/
  "v-ba934fd8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-ba934fd8 */ 5605).then(__webpack_require__.bind(__webpack_require__, 3143))),
  // path: /guide/
  "v-fffb8e28": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-fffb8e28 */ 9807).then(__webpack_require__.bind(__webpack_require__, 7754))),
  // path: /guide/using-vue.html
  "v-79e93bb0": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-79e93bb0 */ 2787).then(__webpack_require__.bind(__webpack_require__, 3492))),
  // path: /packages/console/
  "v-e4256a7e": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-e4256a7e */ 3685).then(__webpack_require__.bind(__webpack_require__, 6713))),
  // path: /packages/console-colors/
  "v-2e04e120": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2e04e120 */ 9027).then(__webpack_require__.bind(__webpack_require__, 9436))),
  // path: /packages/console-input/
  "v-6683a124": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-6683a124 */ 5972).then(__webpack_require__.bind(__webpack_require__, 9959))),
  // path: /packages/console-input/getting-started.html
  "v-03ab9c05": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-03ab9c05 */ 9141).then(__webpack_require__.bind(__webpack_require__, 7059))),
  // path: /packages/console-output/
  "v-990410a2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-990410a2 */ 6727).then(__webpack_require__.bind(__webpack_require__, 7608))),
  // path: /packages/core/
  "v-2a0ff7f2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2a0ff7f2 */ 6549).then(__webpack_require__.bind(__webpack_require__, 6733))),
  // path: /packages/multi-package-json-manager/
  "v-5e8b1ae3": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-5e8b1ae3 */ 3200).then(__webpack_require__.bind(__webpack_require__, 298))),
  // path: /packages/shared/
  "v-4e901641": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4e901641 */ 8398).then(__webpack_require__.bind(__webpack_require__, 9093))),
  // path: /packages/console-colors/api/
  "v-1ec5cb16": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-1ec5cb16 */ 6222).then(__webpack_require__.bind(__webpack_require__, 8641))),
  // path: /packages/console-input/api/
  "v-4bf43879": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4bf43879 */ 2449).then(__webpack_require__.bind(__webpack_require__, 8054))),
  // path: /packages/console-output/api/
  "v-4f7a5184": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4f7a5184 */ 6223).then(__webpack_require__.bind(__webpack_require__, 6332))),
  // path: /packages/core/api/
  "v-30331c48": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-30331c48 */ 4174).then(__webpack_require__.bind(__webpack_require__, 8522))),
  // path: /packages/multi-package-json-manager/api/
  "v-c7ca8a90": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-c7ca8a90 */ 2998).then(__webpack_require__.bind(__webpack_require__, 4596))),
  // path: /packages/console-colors/api/classes/Colors.html
  "v-098e3c4b": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-098e3c4b */ 6869).then(__webpack_require__.bind(__webpack_require__, 5571))),
  // path: /packages/console-colors/api/classes/Parser.html
  "v-b63eda08": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-b63eda08 */ 9006).then(__webpack_require__.bind(__webpack_require__, 584))),
  // path: /packages/console-colors/api/interfaces/AnsiRgbColors.html
  "v-4ce40c1f": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4ce40c1f */ 3049).then(__webpack_require__.bind(__webpack_require__, 3500))),
  // path: /packages/console-colors/api/interfaces/ParserParsedTag.html
  "v-45bbd64f": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-45bbd64f */ 4304).then(__webpack_require__.bind(__webpack_require__, 1302))),
  // path: /packages/console-input/api/classes/Input.html
  "v-35a6a531": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-35a6a531 */ 735).then(__webpack_require__.bind(__webpack_require__, 5081))),
  // path: /packages/console-input/api/interfaces/AutocompleteQuestion.html
  "v-41364e0f": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-41364e0f */ 3248).then(__webpack_require__.bind(__webpack_require__, 9732))),
  // path: /packages/console-input/api/interfaces/AutocompleteQuestionOptions.html
  "v-552d69b6": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-552d69b6 */ 1614).then(__webpack_require__.bind(__webpack_require__, 2379))),
  // path: /packages/console-input/api/interfaces/ColorQuestion.html
  "v-c10353a8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-c10353a8 */ 2173).then(__webpack_require__.bind(__webpack_require__, 5193))),
  // path: /packages/console-input/api/interfaces/ColorQuestionOptions.html
  "v-240a5868": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-240a5868 */ 5144).then(__webpack_require__.bind(__webpack_require__, 4182))),
  // path: /packages/console-input/api/interfaces/DatepickerQuestion.html
  "v-62b7bc8a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-62b7bc8a */ 3633).then(__webpack_require__.bind(__webpack_require__, 1365))),
  // path: /packages/console-input/api/interfaces/DatepickerQuestionOptions.html
  "v-26a23df9": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-26a23df9 */ 8202).then(__webpack_require__.bind(__webpack_require__, 1483))),
  // path: /packages/console-input/api/interfaces/DirectoryQuestion.html
  "v-7e0b8d3c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-7e0b8d3c */ 4284).then(__webpack_require__.bind(__webpack_require__, 6346))),
  // path: /packages/console-input/api/interfaces/DirectoryQuestionOptions.html
  "v-06788c72": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-06788c72 */ 9380).then(__webpack_require__.bind(__webpack_require__, 2013))),
  // path: /packages/console-input/api/interfaces/FileFolderQuestion.html
  "v-8a3f05a6": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8a3f05a6 */ 2959).then(__webpack_require__.bind(__webpack_require__, 6546))),
  // path: /packages/console-input/api/interfaces/FilePathQuestion.html
  "v-6308ae54": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-6308ae54 */ 5751).then(__webpack_require__.bind(__webpack_require__, 6022))),
  // path: /packages/console-input/api/interfaces/FileSelectorQuestion.html
  "v-760b935c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-760b935c */ 3699).then(__webpack_require__.bind(__webpack_require__, 2684))),
  // path: /packages/console-input/api/interfaces/FileSelectorQuestionOptions.html
  "v-66c6e538": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-66c6e538 */ 3117).then(__webpack_require__.bind(__webpack_require__, 1326))),
  // path: /packages/console-input/api/interfaces/FileTreeSelectionQuestion.html
  "v-43f3387d": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-43f3387d */ 550).then(__webpack_require__.bind(__webpack_require__, 3829))),
  // path: /packages/console-input/api/interfaces/FileTreeSelectionQuestionOptions.html
  "v-061b2e12": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-061b2e12 */ 2519).then(__webpack_require__.bind(__webpack_require__, 3510))),
  // path: /packages/console-input/api/interfaces/FuzzypathQuestion.html
  "v-fdc3a440": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-fdc3a440 */ 7245).then(__webpack_require__.bind(__webpack_require__, 124))),
  // path: /packages/console-input/api/interfaces/MaxinputQuestion.html
  "v-3b94abd1": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3b94abd1 */ 8984).then(__webpack_require__.bind(__webpack_require__, 4716))),
  // path: /packages/console-input/api/interfaces/MaxinputQuestionOptions.html
  "v-c98761ba": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-c98761ba */ 3433).then(__webpack_require__.bind(__webpack_require__, 8315))),
  // path: /packages/console-input/api/interfaces/MyQuestionMap.html
  "v-85e83e2a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-85e83e2a */ 2485).then(__webpack_require__.bind(__webpack_require__, 9644))),
  // path: /packages/console-input/api/interfaces/PathQuestion.html
  "v-e2c3ee1c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-e2c3ee1c */ 5529).then(__webpack_require__.bind(__webpack_require__, 9533))),
  // path: /packages/console-input/api/interfaces/PathQuestionOptions.html
  "v-a531ca3c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-a531ca3c */ 1369).then(__webpack_require__.bind(__webpack_require__, 2352))),
  // path: /packages/console-input/api/interfaces/SuggestQuestion.html
  "v-591106aa": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-591106aa */ 2262).then(__webpack_require__.bind(__webpack_require__, 6109))),
  // path: /packages/console-input/api/interfaces/SuggestQuestionOptions.html
  "v-2b4fb509": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2b4fb509 */ 7037).then(__webpack_require__.bind(__webpack_require__, 4829))),
  // path: /packages/console-input/api/interfaces/TableQuestion.html
  "v-2347e0be": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2347e0be */ 8509).then(__webpack_require__.bind(__webpack_require__, 178))),
  // path: /packages/console-input/api/interfaces/TableQuestionOptions.html
  "v-05e40153": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-05e40153 */ 4062).then(__webpack_require__.bind(__webpack_require__, 769))),
  // path: /packages/console-input/api/interfaces/TreeItem.html
  "v-43af7e0c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-43af7e0c */ 7649).then(__webpack_require__.bind(__webpack_require__, 3808))),
  // path: /packages/console-input/api/interfaces/TreeQuestion.html
  "v-3afeb3ce": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3afeb3ce */ 7664).then(__webpack_require__.bind(__webpack_require__, 3232))),
  // path: /packages/console-input/api/interfaces/TreeQuestionOptions.html
  "v-f9d0984a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-f9d0984a */ 773).then(__webpack_require__.bind(__webpack_require__, 8728))),
  // path: /packages/console-output/api/classes/Colors.html
  "v-531b34dc": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-531b34dc */ 3838).then(__webpack_require__.bind(__webpack_require__, 324))),
  // path: /packages/console-output/api/classes/Erase.html
  "v-03dfe020": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-03dfe020 */ 1980).then(__webpack_require__.bind(__webpack_require__, 8699))),
  // path: /packages/console-output/api/classes/FiguresParser.html
  "v-799303b8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-799303b8 */ 746).then(__webpack_require__.bind(__webpack_require__, 6303))),
  // path: /packages/console-output/api/classes/GeneratedIcon.html
  "v-91aa8744": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-91aa8744 */ 5511).then(__webpack_require__.bind(__webpack_require__, 2529))),
  // path: /packages/console-output/api/classes/IconGenerator.html
  "v-741aafec": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-741aafec */ 620).then(__webpack_require__.bind(__webpack_require__, 5785))),
  // path: /packages/console-output/api/classes/IterableManager.html
  "v-2ed058cb": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2ed058cb */ 483).then(__webpack_require__.bind(__webpack_require__, 5384))),
  // path: /packages/console-output/api/classes/Move.html
  "v-541dcbdb": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-541dcbdb */ 5267).then(__webpack_require__.bind(__webpack_require__, 981))),
  // path: /packages/console-output/api/classes/Output.html
  "v-9c0f282a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-9c0f282a */ 9585).then(__webpack_require__.bind(__webpack_require__, 224))),
  // path: /packages/console-output/api/classes/OutputUtil.html
  "v-10e37409": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-10e37409 */ 1162).then(__webpack_require__.bind(__webpack_require__, 4035))),
  // path: /packages/console-output/api/classes/ProgressBar.html
  "v-b1d33340": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-b1d33340 */ 2746).then(__webpack_require__.bind(__webpack_require__, 7949))),
  // path: /packages/console-output/api/classes/StyleManager.html
  "v-22c2e260": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-22c2e260 */ 741).then(__webpack_require__.bind(__webpack_require__, 336))),
  // path: /packages/console-output/api/classes/StyleParser.html
  "v-579033d4": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-579033d4 */ 573).then(__webpack_require__.bind(__webpack_require__, 6616))),
  // path: /packages/console-output/api/classes/Text.html
  "v-52d38802": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-52d38802 */ 3778).then(__webpack_require__.bind(__webpack_require__, 6903))),
  // path: /packages/console-output/api/classes/Ui.html
  "v-18b0abb8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-18b0abb8 */ 9762).then(__webpack_require__.bind(__webpack_require__, 6711))),
  // path: /packages/console-output/api/classes/UiBase.html
  "v-2ceed7e7": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2ceed7e7 */ 8638).then(__webpack_require__.bind(__webpack_require__, 7867))),
  // path: /packages/console-output/api/interfaces/AnsiRgbColors.html
  "v-0bb77920": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-0bb77920 */ 3101).then(__webpack_require__.bind(__webpack_require__, 9396))),
  // path: /packages/console-output/api/interfaces/ChalkFunction.html
  "v-65a860d2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-65a860d2 */ 2276).then(__webpack_require__.bind(__webpack_require__, 3051))),
  // path: /packages/console-output/api/interfaces/ColorsParserParsedTag.html
  "v-d97663a0": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-d97663a0 */ 8713).then(__webpack_require__.bind(__webpack_require__, 1425))),
  // path: /packages/console-output/api/interfaces/ColumnsOptions.html
  "v-5a9a96b2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-5a9a96b2 */ 8593).then(__webpack_require__.bind(__webpack_require__, 4256))),
  // path: /packages/console-output/api/interfaces/Erasers.html
  "v-22383cfa": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-22383cfa */ 6550).then(__webpack_require__.bind(__webpack_require__, 191))),
  // path: /packages/console-output/api/interfaces/Figures.html
  "v-338b07db": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-338b07db */ 500).then(__webpack_require__.bind(__webpack_require__, 5582))),
  // path: /packages/console-output/api/interfaces/GenerateOptions.html
  "v-56dc75c1": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-56dc75c1 */ 6519).then(__webpack_require__.bind(__webpack_require__, 7507))),
  // path: /packages/console-output/api/interfaces/IParser.html
  "v-a01e38bc": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-a01e38bc */ 4439).then(__webpack_require__.bind(__webpack_require__, 9670))),
  // path: /packages/console-output/api/interfaces/IParserConstructor.html
  "v-2302e254": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2302e254 */ 822).then(__webpack_require__.bind(__webpack_require__, 3326))),
  // path: /packages/console-output/api/interfaces/IconData.html
  "v-193eb565": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-193eb565 */ 8415).then(__webpack_require__.bind(__webpack_require__, 3698))),
  // path: /packages/console-output/api/interfaces/IconsOptions.html
  "v-20697c24": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-20697c24 */ 4763).then(__webpack_require__.bind(__webpack_require__, 5326))),
  // path: /packages/console-output/api/interfaces/MacroProxy.html
  "v-0bbf62c6": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-0bbf62c6 */ 4871).then(__webpack_require__.bind(__webpack_require__, 9906))),
  // path: /packages/console-output/api/interfaces/ManagerMacroProxy.html
  "v-239d2b1b": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-239d2b1b */ 1158).then(__webpack_require__.bind(__webpack_require__, 652))),
  // path: /packages/console-output/api/interfaces/Movers.html
  "v-af2bcf14": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-af2bcf14 */ 3991).then(__webpack_require__.bind(__webpack_require__, 916))),
  // path: /packages/console-output/api/interfaces/Options.html
  "v-b7f656a8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-b7f656a8 */ 6923).then(__webpack_require__.bind(__webpack_require__, 2212))),
  // path: /packages/console-output/api/interfaces/OutputConfig.html
  "v-e1a4ebf6": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-e1a4ebf6 */ 7825).then(__webpack_require__.bind(__webpack_require__, 5414))),
  // path: /packages/console-output/api/interfaces/OutputOptions.html
  "v-125c7f8d": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-125c7f8d */ 703).then(__webpack_require__.bind(__webpack_require__, 1575))),
  // path: /packages/console-output/api/interfaces/OutputOptionsTableStyle.html
  "v-0ccc5dca": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-0ccc5dca */ 9245).then(__webpack_require__.bind(__webpack_require__, 7832))),
  // path: /packages/console-output/api/interfaces/OutputOptionsTableStyles.html
  "v-0171dd16": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-0171dd16 */ 3168).then(__webpack_require__.bind(__webpack_require__, 5708))),
  // path: /packages/console-output/api/interfaces/OutputSpinners.html
  "v-554d8b4d": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-554d8b4d */ 8148).then(__webpack_require__.bind(__webpack_require__, 7962))),
  // path: /packages/console-output/api/interfaces/OutputStylesConfig.html
  "v-7bf0057a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-7bf0057a */ 6510).then(__webpack_require__.bind(__webpack_require__, 3441))),
  // path: /packages/console-output/api/interfaces/Palette.html
  "v-2bda26ef": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2bda26ef */ 1457).then(__webpack_require__.bind(__webpack_require__, 863))),
  // path: /packages/console-output/api/interfaces/ProgressBarOptions.html
  "v-304a7e70": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-304a7e70 */ 9694).then(__webpack_require__.bind(__webpack_require__, 3356))),
  // path: /packages/console-output/api/interfaces/Styles.html
  "v-610bf934": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-610bf934 */ 2323).then(__webpack_require__.bind(__webpack_require__, 2027))),
  // path: /packages/console-output/api/interfaces/TreeData.html
  "v-64c4b7e0": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-64c4b7e0 */ 9319).then(__webpack_require__.bind(__webpack_require__, 3954))),
  // path: /packages/console-output/api/interfaces/TreeOptions.html
  "v-5e3a422c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-5e3a422c */ 8704).then(__webpack_require__.bind(__webpack_require__, 4439))),
  // path: /packages/console-output/api/interfaces/Trucolor.html
  "v-3d2bcebc": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3d2bcebc */ 4437).then(__webpack_require__.bind(__webpack_require__, 8599))),
  // path: /packages/console-output/api/interfaces/TruncateOptions.html
  "v-ebb5679c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-ebb5679c */ 5567).then(__webpack_require__.bind(__webpack_require__, 3553))),
  // path: /packages/console-output/api/interfaces/WrapOptions.html
  "v-2dc29996": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2dc29996 */ 2678).then(__webpack_require__.bind(__webpack_require__, 4875))),
  // path: /packages/console-output/api/interfaces/macros.MacroDefinition.html
  "v-005e8bd0": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-005e8bd0 */ 8412).then(__webpack_require__.bind(__webpack_require__, 8987))),
  // path: /packages/console-output/api/modules/macros.html
  "v-5da42c86": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-5da42c86 */ 5160).then(__webpack_require__.bind(__webpack_require__, 6979))),
  // path: /packages/core/api/classes/Application.html
  "v-7e0b0a4e": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-7e0b0a4e */ 2278).then(__webpack_require__.bind(__webpack_require__, 7203))),
  // path: /packages/core/api/classes/ArrayCollection.html
  "v-32393fa7": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-32393fa7 */ 920).then(__webpack_require__.bind(__webpack_require__, 9302))),
  // path: /packages/core/api/classes/CacheManager.html
  "v-2c0761c9": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2c0761c9 */ 8474).then(__webpack_require__.bind(__webpack_require__, 7404))),
  // path: /packages/core/api/classes/CacheServiceProvider.html
  "v-c74abf60": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-c74abf60 */ 1631).then(__webpack_require__.bind(__webpack_require__, 2012))),
  // path: /packages/core/api/classes/Collection.html
  "v-977c48d4": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-977c48d4 */ 6966).then(__webpack_require__.bind(__webpack_require__, 131))),
  // path: /packages/core/api/classes/ConfigRepository.html
  "v-2059baf0": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2059baf0 */ 3306).then(__webpack_require__.bind(__webpack_require__, 1586))),
  // path: /packages/core/api/classes/CoreServiceProvider.html
  "v-440f7252": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-440f7252 */ 6018).then(__webpack_require__.bind(__webpack_require__, 7113))),
  // path: /packages/core/api/classes/DirectoryStorage.html
  "v-5ba07eb4": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-5ba07eb4 */ 7222).then(__webpack_require__.bind(__webpack_require__, 637))),
  // path: /packages/core/api/classes/Dispatcher.html
  "v-01fc8d2d": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-01fc8d2d */ 6403).then(__webpack_require__.bind(__webpack_require__, 9260))),
  // path: /packages/core/api/classes/DispatcherMixin.html
  "v-8254fd78": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8254fd78 */ 9973).then(__webpack_require__.bind(__webpack_require__, 8534))),
  // path: /packages/core/api/classes/FileCacheAdapter.html
  "v-c030606a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-c030606a */ 6373).then(__webpack_require__.bind(__webpack_require__, 215))),
  // path: /packages/core/api/classes/Manager.html
  "v-8e63c6de": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8e63c6de */ 6104).then(__webpack_require__.bind(__webpack_require__, 1799))),
  // path: /packages/core/api/classes/PATH.html
  "v-6c3b8a62": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-6c3b8a62 */ 788).then(__webpack_require__.bind(__webpack_require__, 6714))),
  // path: /packages/core/api/classes/Process.html
  "v-332211e2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-332211e2 */ 1365).then(__webpack_require__.bind(__webpack_require__, 8358))),
  // path: /packages/core/api/classes/ProcessManager.html
  "v-73576b14": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-73576b14 */ 1991).then(__webpack_require__.bind(__webpack_require__, 7689))),
  // path: /packages/core/api/classes/Repository.html
  "v-14e48b2c": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-14e48b2c */ 929).then(__webpack_require__.bind(__webpack_require__, 5633))),
  // path: /packages/core/api/classes/Service.html
  "v-f5d6eaee": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-f5d6eaee */ 2882).then(__webpack_require__.bind(__webpack_require__, 7443))),
  // path: /packages/core/api/classes/ServiceManager.html
  "v-2222b9bc": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2222b9bc */ 153).then(__webpack_require__.bind(__webpack_require__, 1173))),
  // path: /packages/core/api/classes/SystemServiceProvider.html
  "v-59004427": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-59004427 */ 4525).then(__webpack_require__.bind(__webpack_require__, 1602))),
  // path: /packages/core/api/classes/TypeDefinitionBuilder.html
  "v-fb8b8520": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-fb8b8520 */ 7905).then(__webpack_require__.bind(__webpack_require__, 3106))),
  // path: /packages/core/api/enums/ExitCode.html
  "v-0334c855": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-0334c855 */ 4348).then(__webpack_require__.bind(__webpack_require__, 4433))),
  // path: /packages/core/api/enums/ProxyFlags.html
  "v-717ceec7": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-717ceec7 */ 2898).then(__webpack_require__.bind(__webpack_require__, 2795))),
  // path: /packages/core/api/enums/ServiceStatus.html
  "v-794249cb": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-794249cb */ 7047).then(__webpack_require__.bind(__webpack_require__, 956))),
  // path: /packages/core/api/interfaces/Bindings.html
  "v-54106dd2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-54106dd2 */ 4574).then(__webpack_require__.bind(__webpack_require__, 8249))),
  // path: /packages/core/api/interfaces/CacheAdapter.html
  "v-6aa75a5a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-6aa75a5a */ 1123).then(__webpack_require__.bind(__webpack_require__, 2499))),
  // path: /packages/core/api/interfaces/CacheConfiguration.html
  "v-409d1ecc": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-409d1ecc */ 7309).then(__webpack_require__.bind(__webpack_require__, 5131))),
  // path: /packages/core/api/interfaces/ConfigPart.html
  "v-15e5d4ab": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-15e5d4ab */ 1436).then(__webpack_require__.bind(__webpack_require__, 3740))),
  // path: /packages/core/api/interfaces/DirectoryStorage.JsonOptions.html
  "v-6d52e60a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-6d52e60a */ 6747).then(__webpack_require__.bind(__webpack_require__, 2371))),
  // path: /packages/core/api/interfaces/DirectoryStorageOptions.html
  "v-18fbe5c2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-18fbe5c2 */ 8746).then(__webpack_require__.bind(__webpack_require__, 8382))),
  // path: /packages/core/api/interfaces/DispatcherEvents.html
  "v-23d48600": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-23d48600 */ 3526).then(__webpack_require__.bind(__webpack_require__, 528))),
  // path: /packages/core/api/interfaces/EnvPaths.html
  "v-4cf76782": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4cf76782 */ 4272).then(__webpack_require__.bind(__webpack_require__, 7411))),
  // path: /packages/core/api/interfaces/EnvPathsOptions.html
  "v-bd8c1216": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-bd8c1216 */ 1434).then(__webpack_require__.bind(__webpack_require__, 6839))),
  // path: /packages/core/api/interfaces/FileCacheAdapterOptions.html
  "v-217072fd": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-217072fd */ 1666).then(__webpack_require__.bind(__webpack_require__, 3997))),
  // path: /packages/core/api/interfaces/Hooks.html
  "v-387ec5c2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-387ec5c2 */ 7362).then(__webpack_require__.bind(__webpack_require__, 7602))),
  // path: /packages/core/api/interfaces/ListenerFn.html
  "v-4fe122c4": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4fe122c4 */ 5136).then(__webpack_require__.bind(__webpack_require__, 3666))),
  // path: /packages/core/api/interfaces/PathSearchOptions.html
  "v-ef46963e": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-ef46963e */ 9875).then(__webpack_require__.bind(__webpack_require__, 4791))),
  // path: /packages/core/api/interfaces/Paths.html
  "v-27bf6b44": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-27bf6b44 */ 3648).then(__webpack_require__.bind(__webpack_require__, 3462))),
  // path: /packages/core/api/interfaces/ProcessManagerData.html
  "v-4431ecd8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-4431ecd8 */ 8884).then(__webpack_require__.bind(__webpack_require__, 307))),
  // path: /packages/core/api/interfaces/SystemConfiguration.html
  "v-287205ea": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-287205ea */ 553).then(__webpack_require__.bind(__webpack_require__, 5409))),
  // path: /packages/core/api/modules/DirectoryStorage.html
  "v-54158147": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-54158147 */ 4385).then(__webpack_require__.bind(__webpack_require__, 5626))),
  // path: /packages/core/api/modules/ServiceStatus.html
  "v-86ab1e94": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-86ab1e94 */ 6659).then(__webpack_require__.bind(__webpack_require__, 5424))),
  // path: /packages/multi-package-json-manager/api/classes/JsonFileHandler.html
  "v-41bef194": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-41bef194 */ 8191).then(__webpack_require__.bind(__webpack_require__, 2717))),
  // path: /packages/multi-package-json-manager/api/classes/Manager.html
  "v-23815f6d": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-23815f6d */ 559).then(__webpack_require__.bind(__webpack_require__, 4461))),
  // path: /packages/multi-package-json-manager/api/interfaces/Change.html
  "v-70e638e8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-70e638e8 */ 2756).then(__webpack_require__.bind(__webpack_require__, 6505))),
  // path: /packages/multi-package-json-manager/api/interfaces/FilePackageDetails.html
  "v-2b7ea7f8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2b7ea7f8 */ 3581).then(__webpack_require__.bind(__webpack_require__, 4236))),
  // path: /packages/multi-package-json-manager/api/interfaces/PackageJson.html
  "v-71fa5cc8": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-71fa5cc8 */ 2403).then(__webpack_require__.bind(__webpack_require__, 1930))),
  // path: /404.html
  "v-3706649a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 2779))),
}


/***/ }),

/***/ 5809:
/***/ ((module) => {

module.exports = require("@vue/server-renderer");

/***/ }),

/***/ 1666:
/***/ ((module) => {

module.exports = require("vue");

/***/ }),

/***/ 2253:
/***/ ((module) => {

module.exports = require("vue-router");

/***/ }),

/***/ 4498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5809);
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrInterpolate")) __webpack_require__.d(__webpack_exports__, { "ssrInterpolate": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrInterpolate; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderAttr")) __webpack_require__.d(__webpack_exports__, { "ssrRenderAttr": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderAttr; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderAttrs")) __webpack_require__.d(__webpack_exports__, { "ssrRenderAttrs": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderAttrs; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderClass")) __webpack_require__.d(__webpack_exports__, { "ssrRenderClass": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderClass; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderComponent")) __webpack_require__.d(__webpack_exports__, { "ssrRenderComponent": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderComponent; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderList")) __webpack_require__.d(__webpack_exports__, { "ssrRenderList": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderList; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderSlot")) __webpack_require__.d(__webpack_exports__, { "ssrRenderSlot": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderSlot; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__, "ssrRenderStyle")) __webpack_require__.d(__webpack_exports__, { "ssrRenderStyle": function() { return _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderStyle; } });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			2143: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(4705);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map