"use strict";
exports.id = 6549;
exports.ids = [6549];
exports.modules = {

/***/ 6733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/packages/core/index.html.vue?vue&type=template&id=aeb8590e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="console" tabindex="-1"><a class="header-anchor" href="#console" aria-hidden="true">#</a> Console</h1><p>Create class based commands with Yargs using decorators.</p><p><strong>index.ts</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> yargs <span class="token keyword">from</span> <span class="token string">&#39;yargs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>enableYargsClassCommands<span class="token punctuation">,</span> addCommandDirs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@radic/console&#39;</span>

<span class="token function">addCommandDirs</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">&#39;path/*/to/*/somewhere&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;another/**/path&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// glob patterns to command directories</span>
    <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;!.d.ts&#39;</span><span class="token punctuation">]</span> <span class="token comment">// allow .js and .ts. Ignore .d.ts files</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">enableYargsClassCommands</span><span class="token punctuation">(</span>yargs<span class="token punctuation">)</span><span class="token punctuation">;</span>

yargs<span class="token punctuation">.</span><span class="token function">help</span><span class="token punctuation">(</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;help&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">showHelpOnFail</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> args <span class="token operator">=</span> yargs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span> args<span class="token punctuation">[</span> <span class="token string">&#39;help&#39;</span> <span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    yargs<span class="token punctuation">.</span><span class="token function">showHelp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>commands/TestCommand</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> arg<span class="token punctuation">,</span> command<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> option <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../decorators&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Output <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@radic/console-output&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">command</span></span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Testing this&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TestCommand</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">option</span></span><span class="token punctuation">(</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    write<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">option</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>


    <span class="token decorator"><span class="token at operator">@</span><span class="token function">handler</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">arg</span></span><span class="token punctuation">.</span>required<span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&#39;The path to write to&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> path<span class="token operator">:</span> <span class="token builtin">string</span>
                 <span class="token decorator"><span class="token at operator">@</span><span class="token function">arg</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>description<span class="token operator">:</span><span class="token string">&#39;another way&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> count<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Writing to path </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Counting to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Showing your </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">wait</span><span class="token punctuation">(</span>ms<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> cycles<span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cycles<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> txt<span class="token operator">=</span><span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Finished timeout (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cycles<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/core/index.html.vue

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

/***/ 5984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2a0ff7f2",
  "path": "/packages/core/",
  "title": "Console",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "packages/core/README.md"
}


/***/ })

};
;
//# sourceMappingURL=6549.app.js.map