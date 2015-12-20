<div><section><h1>Alert</h1><p>Defines styles for success, warning and error messages.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-alert --save;</code></p><p>ES6 <br/><code>import Alert from &#x27;react-uikit-alert&#x27;;</code><br/></p><p>ES5 <br/><code>var Alert = require(&#x27;react-uikit-alert&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note:</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><hr/><p>The alert component creates an alert box.</p><h3>Example</h3><pre><code>&lt;Alert&gt;
Lorem ipsum dolor sit amet, consectetur adipisicing elit
&lt;/Alert&gt;
</code></pre></section><section><h2>Alert close button</h2><p>To add a close button add the<code>close</code> prop to the Alert component.</p><h3>Example</h3><pre><code>&lt;Alert close={someFunction}&gt;
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
&lt;/Alert&gt;
</code></pre></section><section><h2>Alert contexts</h2><p>To chage the context of the Alert add <code>context=&#x27;success&#x27;</code>, <code>context=&#x27;warning&#x27;</code>, or <code>context=&#x27;danger&#x27;</code> prop.</p><h3>Example</h3><pre><code>&lt;Alert context=&#x27;success&#x27;&gt;
To indicate success or a positive message add the &lt;code&gt;context=&#x27;success&#x27;&lt;/code&gt; prop.
&lt;/Alert&gt;
&lt;Alert context=&#x27;warning&#x27;&gt;
To indicate a message containing a warning add the &lt;code&gt;context=&#x27;warning&#x27;&lt;/code&gt; prop.
&lt;/Alert&gt;
&lt;Alert context=&#x27;danger&#x27;&gt;
To indicate an important message add the &lt;code&gt;context=&#x27;danger&#x27;&lt;/code&gt; prop.
&lt;/Alert&gt;
</code></pre></section><section><h2>Alert size</h2><p>To increase the spacing in an Alert add the <code>large</code> prop to the Alert component.</p><h3>Example</h3><pre><code>&lt;Alert large &gt;
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
&lt;/Alert&gt;
</code></pre></section><section><h2>Alert Props</h2><p><code>&lt;Alert&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>close</code></td><td>func</td></tr><tr><td><code>context</code></td><td>oneOf <br/>success, warning ordanger&quot;</td></tr><tr><td><code>large</code></td><td>Bool</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>