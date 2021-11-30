"use strict";
exports.id = 3200;
exports.ids = [3200];
exports.modules = {

/***/ 298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/packages/multi-package-json-manager/index.html.vue?vue&type=template&id=55b7f27c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="multi-package-json-manager" tabindex="-1"><a class="header-anchor" href="#multi-package-json-manager" aria-hidden="true">#</a> Multi Package Json Manager</h1><p>Manage multiple package.json files. Usefull for <strong>monorepos</strong> and other stuff.</p><h2 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example usage</h2><h3 id="creating-an-instance-and-providing-options" tabindex="-1"><a class="header-anchor" href="#creating-an-instance-and-providing-options" aria-hidden="true">#</a> Creating an instance and providing options</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> rootPath <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span>rootPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// add packages by using a glob file string, relative to rootPath</span>
manager<span class="token punctuation">.</span><span class="token function">addPackageJsons</span><span class="token punctuation">(</span><span class="token string">&#39;packages/*/package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// you can enable a test run and provide a output dir to write all JSON files to a test directory</span>
manager<span class="token punctuation">.</span><span class="token function">enableTestRun</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsonTestOutput&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// You can set key order priority as well as spaces/indent to use for the formatted output</span>
manager<span class="token punctuation">.</span><span class="token function">setIndent</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
manager<span class="token punctuation">.</span><span class="token function">setKeyOrder</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;private&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;version&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;license&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;types&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;typings&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;homepage&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;scripts&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;dependencies&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;devDependencies&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;optionalDependencies&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;peerDependencies&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keywords&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="using-variables" tabindex="-1"><a class="header-anchor" href="#using-variables" aria-hidden="true">#</a> Using variables</h3><p>You can add variables that can be used when setting package.json values, as is shown <a href="#managing-packagejson">below</a></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>manager<span class="token punctuation">.</span><span class="token function">addVariables</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    email <span class="token operator">:</span> <span class="token string">&#39;awesome@foo.com&#39;</span><span class="token punctuation">,</span>
    name  <span class="token operator">:</span> <span class="token string">&#39;Robin Radic&#39;</span><span class="token punctuation">,</span>
    github<span class="token operator">:</span> <span class="token punctuation">{</span>
        urls      <span class="token operator">:</span> <span class="token punctuation">{</span>
            organisation  <span class="token operator">:</span> <span class="token string">&#39;https://github.com/robinradic&#39;</span><span class="token punctuation">,</span>
            organisationIO<span class="token operator">:</span> <span class="token string">&#39;https://robinradic.github.io&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        repository<span class="token operator">:</span> <span class="token string">&#39;npm-packages&#39;</span><span class="token punctuation">,</span>
        owner     <span class="token operator">:</span> <span class="token string">&#39;robinradic&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="managing-package-json-s" tabindex="-1"><a class="header-anchor" href="#managing-package-json-s" aria-hidden="true">#</a> Managing package.json&#39;s</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>manager
<span class="token comment">// set(path:string, value:any, fileFilter?: FileFilterCallback)</span>
<span class="token comment">// is without any typechecking and can be a dot-notated path</span>
<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    email<span class="token operator">:</span> <span class="token string">&#39;{{email}}&#39;</span><span class="token punctuation">,</span>
    name <span class="token operator">:</span> <span class="token string">&#39;{{name}}&#39;</span><span class="token punctuation">,</span>
    url  <span class="token operator">:</span> <span class="token string">&#39;{{github.urls.organisation}}&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// setKey&lt;K extends keyof PackageJson&gt;(key: K, value: T[K], fileFilter?: FileFilterCallback)</span>
<span class="token comment">// Uses type checking for both key and value and provides code-completion</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;bugs&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    email<span class="token operator">:</span> <span class="token string">&#39;rradic@hotmail.com&#39;</span><span class="token punctuation">,</span>
    url  <span class="token operator">:</span> <span class="token string">&#39;{{github.urls.organisation}}/{{github.repository}}/issues&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// merge(value: PackageJson, fileFilter?: FileFilterCallback)</span>
<span class="token comment">// Uses type checking for both key and value and provides code-completion</span>
<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    homepage<span class="token operator">:</span> <span class="token string">&#39;{{github.urls.organisationIO}}/{{github.repository}}/packages/{{dirName}}&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;license&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MIT&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;engines&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    node<span class="token operator">:</span> <span class="token string">&#39;&gt;=12&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token string">&#39;linux&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;darwin&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>details<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tuxOnlyPackages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;@radic/console&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;package-b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> details<span class="token punctuation">.</span>pkg<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tuxOnlyPackages<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;private&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;publishConfig&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    access<span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;repository&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type     <span class="token operator">:</span> <span class="token string">&#39;git&#39;</span><span class="token punctuation">,</span>
    url      <span class="token operator">:</span> <span class="token string">&#39;{{github.urls.organisation}}.git&#39;</span><span class="token punctuation">,</span>
    directory<span class="token operator">:</span> <span class="token string">&#39;packages/{{dirName}}&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="filter-a-change" tabindex="-1"><a class="header-anchor" href="#filter-a-change" aria-hidden="true">#</a> Filter a change</h3><p>Each of these methods have a last <strong>optional</strong> <code>fileFilter?: FileFilterCallback</code> parameter that you can provide with a filter callback</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>manager<span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token string">&#39;linux&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;darwin&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>details<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tuxOnlyPackages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;@radic/console&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;package-b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> details<span class="token punctuation">.</span>pkg<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tuxOnlyPackages<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The callback and it&#39;s details parameter:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FileFilterCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fileDetails<span class="token operator">:</span> FilePackageDetails<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FilePackageDetails</span> <span class="token punctuation">{</span>
    absoluteFilePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    relativeFilePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    dirName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    pkg<span class="token operator">:</span> PackageJson<span class="token punctuation">;</span>
    names<span class="token operator">:</span> <span class="token punctuation">{</span>
        hasScope<span class="token operator">:</span><span class="token builtin">boolean</span>
        <span class="token doc-comment comment">/** <span class="token keyword">@example</span> @company/my-package */</span>
        full<span class="token operator">:</span><span class="token builtin">string</span>
        <span class="token doc-comment comment">/** <span class="token keyword">@example</span> @company */</span>
        scope<span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token doc-comment comment">/** <span class="token keyword">@example</span> company */</span>
        scopeName<span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token doc-comment comment">/** <span class="token keyword">@example</span> my-package */</span>
        withoutScope<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="applying-all-changes" tabindex="-1"><a class="header-anchor" href="#applying-all-changes" aria-hidden="true">#</a> Applying all changes</h3><p>The hardest part is to run the manager</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>manager<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/packages/multi-package-json-manager/index.html.vue

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

/***/ 5366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5e8b1ae3",
  "path": "/packages/multi-package-json-manager/",
  "title": "Multi Package Json Manager",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Example usage",
      "slug": "example-usage",
      "children": [
        {
          "level": 3,
          "title": "Creating an instance and providing options",
          "slug": "creating-an-instance-and-providing-options",
          "children": []
        },
        {
          "level": 3,
          "title": "Using variables",
          "slug": "using-variables",
          "children": []
        },
        {
          "level": 3,
          "title": "Managing package.json's",
          "slug": "managing-package-json-s",
          "children": []
        },
        {
          "level": 3,
          "title": "Filter a change",
          "slug": "filter-a-change",
          "children": []
        },
        {
          "level": 3,
          "title": "Applying all changes",
          "slug": "applying-all-changes",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "packages/multi-package-json-manager/README.md"
}


/***/ })

};
;
//# sourceMappingURL=3200.app.js.map