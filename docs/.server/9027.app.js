"use strict";
exports.id = 9027;
exports.ids = [9027];
exports.modules = {

/***/ 9436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/packages/console-colors/index.html.vue?vue&type=template&id=de8ca50c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="console-colors" tabindex="-1"><a class="header-anchor" href="#console-colors" aria-hidden="true">#</a> Console Colors</h1><p><a href="https://robin.radic.nl/npm-packages" target="_blank" rel="noopener noreferrer">Documentation`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @radic/console-colors
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>parser<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@radic/console-colors&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
{bold.red.underline}This is bold, red and underlined.{/red} But we dropped the red.{reset} And just resetted the rest.
{green.bgBlue.bold}We can also mix openers and closers{/bgBlue.bgYellow./bold./green.blue}And make it really silly.
{f(#333)}If support for 256 colors is present, you can use the RGB 0 - 6  values. Also, you can provide a fallback{f(#eee).bold.underline}

Fairly advanced things are possible
{b(green).f(red).bold.underline}Some text{/f.green./underline}greeen stuff{reset}    
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/console-colors/index.html.vue?vue&type=template&id=de8ca50c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/console-colors/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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

/***/ 7459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2e04e120",
  "path": "/packages/console-colors/",
  "title": "Console Colors",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Install",
      "slug": "install",
      "children": []
    },
    {
      "level": 2,
      "title": "Usage",
      "slug": "usage",
      "children": []
    }
  ],
  "filePathRelative": "packages/console-colors/README.md"
}


/***/ })

};
;
//# sourceMappingURL=9027.app.js.map