"use strict";
exports.id = 4272;
exports.ids = [4272];
exports.modules = {

/***/ 7411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EnvPaths_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/packages/core/api/interfaces/EnvPaths.html.vue?vue&type=template&id=0bd95d70



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/core/api/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`@radic/core`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("@radic/core")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` / EnvPaths</p><h1 id="interface-envpaths" tabindex="-1"><a class="header-anchor" href="#interface-envpaths" aria-hidden="true">#</a> Interface: EnvPaths</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/core/api/interfaces/EnvPaths.html#cache" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`cache`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("cache")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/core/api/interfaces/EnvPaths.html#config" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`config`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("config")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/core/api/interfaces/EnvPaths.html#data" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`data`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("data")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/core/api/interfaces/EnvPaths.html#log" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`log`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("log")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/packages/core/api/interfaces/EnvPaths.html#temp" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`temp`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("temp")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3><p>• <code>Readonly</code> <strong>cache</strong>: <code>string</code></p><p>Directory for non-essential data files. Example locations (with the default <code>nodejs</code> suffix):</p><ul><li>macOS: <code>~/Library/Caches/MyApp-nodejs</code></li><li>Windows: <code>%LOCALAPPDATA%\\MyApp-nodejs\\Cache</code> (for example, <code>C:\\Users\\USERNAME\\AppData\\Local\\MyApp-nodejs\\Cache</code>)</li><li>Linux: <code>~/.cache/MyApp-nodejs</code> (or <code>\$XDG_CACHE_HOME/MyApp-nodejs</code>)</li></ul><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/envPaths.ts#L121" target="_blank" rel="noopener noreferrer">packages/core/src/Support/envPaths.ts:121`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>• <code>Readonly</code> <strong>config</strong>: <code>string</code></p><p>Directory for data files. Example locations (with the default <code>nodejs</code> suffix):</p><ul><li>macOS: <code>~/Library/Preferences/MyApp-nodejs</code></li><li>Windows: <code>%APPDATA%\\MyApp-nodejs\\Config</code> (for example, <code>C:\\Users\\USERNAME\\AppData\\Roaming\\MyApp-nodejs\\Config</code>)</li><li>Linux: <code>~/.config/MyApp-nodejs</code> (or <code>\$XDG_CONFIG_HOME/MyApp-nodejs</code>)</li></ul><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/envPaths.ts#L112" target="_blank" rel="noopener noreferrer">packages/core/src/Support/envPaths.ts:112`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>• <code>Readonly</code> <strong>data</strong>: <code>string</code></p><p>Directory for data files. Example locations (with the default <code>nodejs</code> suffix):</p><ul><li>macOS: <code>~/Library/Application Support/MyApp-nodejs</code></li><li>Windows: <code>%LOCALAPPDATA%\\MyApp-nodejs\\Data</code> (for example, <code>C:\\Users\\USERNAME\\AppData\\Local\\MyApp-nodejs\\Data</code>)</li><li>Linux: <code>~/.local/share/MyApp-nodejs</code> (or <code>\$XDG_DATA_HOME/MyApp-nodejs</code>)</li></ul><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/envPaths.ts#L103" target="_blank" rel="noopener noreferrer">packages/core/src/Support/envPaths.ts:103`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h3 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> log</h3><p>• <code>Readonly</code> <strong>log</strong>: <code>string</code></p><p>Directory for log files. Example locations (with the default <code>nodejs</code> suffix):</p><ul><li>macOS: <code>~/Library/Logs/MyApp-nodejs</code></li><li>Windows: <code>%LOCALAPPDATA%\\MyApp-nodejs\\Log</code> (for example, <code>C:\\Users\\USERNAME\\AppData\\Local\\MyApp-nodejs\\Log</code>)</li><li>Linux: <code>~/.local/state/MyApp-nodejs</code> (or <code>\$XDG_STATE_HOME/MyApp-nodejs</code>)</li></ul><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/envPaths.ts#L130" target="_blank" rel="noopener noreferrer">packages/core/src/Support/envPaths.ts:130`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h3 id="temp" tabindex="-1"><a class="header-anchor" href="#temp" aria-hidden="true">#</a> temp</h3><p>• <code>Readonly</code> <strong>temp</strong>: <code>string</code></p><p>Directory for temporary files. Example locations (with the default <code>nodejs</code> suffix):</p><ul><li>macOS: <code>/var/folders/jf/f2twvvvs5jl_m49tf034ffpw0000gn/T/MyApp-nodejs</code></li><li>Windows: <code>%LOCALAPPDATA%\\Temp\\MyApp-nodejs</code> (for example, <code>C:\\Users\\USERNAME\\AppData\\Local\\Temp\\MyApp-nodejs</code>)</li><li>Linux: <code>/tmp/USERNAME/MyApp-nodejs</code></li></ul><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p><a href="https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/envPaths.ts#L139" target="_blank" rel="noopener noreferrer">packages/core/src/Support/envPaths.ts:139`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/core/api/interfaces/EnvPaths.html.vue?vue&type=template&id=0bd95d70

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/core/api/interfaces/EnvPaths.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const EnvPaths_html = (__exports__);

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

/***/ 8642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4cf76782",
  "path": "/packages/core/api/interfaces/EnvPaths.html",
  "title": "Interface: EnvPaths",
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
          "title": "cache",
          "slug": "cache",
          "children": []
        },
        {
          "level": 3,
          "title": "config",
          "slug": "config",
          "children": []
        },
        {
          "level": 3,
          "title": "data",
          "slug": "data",
          "children": []
        },
        {
          "level": 3,
          "title": "log",
          "slug": "log",
          "children": []
        },
        {
          "level": 3,
          "title": "temp",
          "slug": "temp",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "packages/core/api/interfaces/EnvPaths.md"
}


/***/ })

};
;
//# sourceMappingURL=4272.app.js.map