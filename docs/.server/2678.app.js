"use strict";
exports.id = 2678;
exports.ids = [2678];
exports.modules = {

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WrapOptions_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/packages/console-output/api/interfaces/WrapOptions.html.vue?vue&type=template&id=7a01ffef



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/console-output/api/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`@radic/console-output`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("@radic/console-output")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` / WrapOptions</p><h1 id="interface-wrapoptions" tabindex="-1"><a class="header-anchor" href="#interface-wrapoptions" aria-hidden="true">#</a> Interface: WrapOptions</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/console-output/api/interfaces/WrapOptions.html#hard" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`hard`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("hard")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/console-output/api/interfaces/WrapOptions.html#trim" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`trim`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("trim")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/console-output/api/interfaces/WrapOptions.html#wordwrap" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`wordWrap`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("wordWrap")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="hard" tabindex="-1"><a class="header-anchor" href="#hard" aria-hidden="true">#</a> hard</h3><p>• <code>Optional</code> <strong>hard</strong>: <code>boolean</code></p><p>By default the wrap is soft, meaning long words may extend past the column width. Setting this to true will make it hard wrap at the column width. default: false</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L47" target="_blank" rel="noopener noreferrer">packages/console-output/src/interfaces.ts:47`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h3 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h3><p>• <code>Optional</code> <strong>trim</strong>: <code>boolean</code></p><p>Whitespace on all lines is removed by default. Set this option to false if you don&#39;t want to trim. default: true</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L58" target="_blank" rel="noopener noreferrer">packages/console-output/src/interfaces.ts:58`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h3 id="wordwrap" tabindex="-1"><a class="header-anchor" href="#wordwrap" aria-hidden="true">#</a> wordWrap</h3><p>• <code>Optional</code> <strong>wordWrap</strong>: <code>boolean</code></p><p>By default, an attempt is made to split words at spaces, ensuring that they don&#39;t extend past the configured columns. If wordWrap is false, each column will instead be completely filled splitting words as necessary. default: true</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L53" target="_blank" rel="noopener noreferrer">packages/console-output/src/interfaces.ts:53`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/console-output/api/interfaces/WrapOptions.html.vue?vue&type=template&id=7a01ffef

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/console-output/api/interfaces/WrapOptions.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const WrapOptions_html = (__exports__);

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

/***/ 686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2dc29996",
  "path": "/packages/console-output/api/interfaces/WrapOptions.html",
  "title": "Interface: WrapOptions",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Table of contents",
      "slug": "table-of-contents",
      "children": [
        {
          "level": 3,
          "title": "Properties",
          "slug": "properties",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Properties",
      "slug": "properties-1",
      "children": [
        {
          "level": 3,
          "title": "hard",
          "slug": "hard",
          "children": []
        },
        {
          "level": 3,
          "title": "trim",
          "slug": "trim",
          "children": []
        },
        {
          "level": 3,
          "title": "wordWrap",
          "slug": "wordwrap",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "packages/console-output/api/interfaces/WrapOptions.md"
}


/***/ })

};
;
//# sourceMappingURL=2678.app.js.map