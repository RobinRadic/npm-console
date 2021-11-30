"use strict";
exports.id = 2787;
exports.ids = [2787];
exports.modules = {

/***/ 3492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ using_vue_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/guide/using-vue.html.vue?vue&type=template&id=7f31edb0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="using-vue-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-in-markdown" aria-hidden="true">#</a> Using Vue in Markdown</h1><h2 id="browser-api-access-restrictions" tabindex="-1"><a class="header-anchor" href="#browser-api-access-restrictions" aria-hidden="true">#</a> Browser API Access Restrictions</h2><p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html" target="_blank" rel="noopener noreferrer">universal code requirements`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p><p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/guide/using-vue.html.vue?vue&type=template&id=7f31edb0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/guide/using-vue.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const using_vue_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 4964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-79e93bb0",
  "path": "/guide/using-vue.html",
  "title": "Using Vue in Markdown",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Browser API Access Restrictions",
      "slug": "browser-api-access-restrictions",
      "children": []
    },
    {
      "level": 2,
      "title": "",
      "slug": "",
      "children": []
    }
  ],
  "filePathRelative": "guide/using-vue.md"
}


/***/ })

};
;
//# sourceMappingURL=2787.app.js.map