<div><section><h1>Article</h1><p>Create articles within your page.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-article --save;</code></p><p>ES6 <br/><code>import Article from &#x27;react-uikit-article&#x27;;</code><br/></p><p>ES5 <br/><code>var Article = require(&#x27;react-uikit-article&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note:</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><hr/><p>The article component constists of the article itself, a title a lead and meta data.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td>Creates an article title.</td></tr><tr><td><code>meta</code></td><td>Adds meta data about the article.</td></tr><tr><td><code>lead</code></td><td>Highlights opening paragraph of the article</td></tr></tbody></table><h3>Example</h3><pre class="uk-scrollable-text xml"><code class="xml">  &lt;Article
  title=&#x27;Article title&#x27;
  meta=&#x27;Written by Super User on 12 April 2012. Posted in Blog&#x27;
  lead=&#x27;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.&#x27; &gt;

  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;

  &lt;hr className=&quot;uk-article-divider&quot; /&gt;

  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;a href=&quot;#&quot;&gt;Read more&lt;/a&gt;
&lt;/Article&gt;
</code></pre><p><span class="uk-badge">Note:</span>  To create seperate sections in the article use <code>&lt;hr className=&quot;uk-article-divider&quot; /&gt;</code></p></section><section><h2>Artilce Props</h2><p><code>&lt;Artilce&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>lead</code></td><td>string</td></tr><tr><td><code>meta</code></td><td>string</td></tr><tr><td><code>onClose</code></td><td>func</td></tr><tr><td><code>title</code></td><td>string</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>