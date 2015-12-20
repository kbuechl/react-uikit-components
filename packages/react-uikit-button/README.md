<div><section><h1>Button</h1><p>Easily create nicely looking buttons, which come in different styles.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-button --save;</code></p><p>ES6 <br/><code>import Button from &#x27;react-uikit-button&#x27;;</code><br/></p><p>ES5 <br/><code>var Button = require(&#x27;react-uikit-button&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><p>See <a href="http://otissv.github.io/react-uikit-components">React UIKit Componets</a> for examples and full documentation.</p><hr/><p>The Button component creates either a <code>button</code>, a <code>link</code> or a <code>close</code> button by settiing the<code>type</code>.</p><p>By defualt the Button component will create a button if no type is provided.</p><h3>Example</h3><pre><code>&lt;Button body=&#x27;Button&#x27; margin=&#x27;right&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button body=&#x27;Disabled&#x27; disabled  margin=&#x27;right&#x27;/&gt;
&lt;Button type=&#x27;close&#x27;/&gt;
</code></pre></section><section><h2>Button contexts</h2><p>The color of the button can be easily changed by adding a context to the context prop</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>context=&#x27;primary&#x27;</code></td><td>Emphasizes to identify the primary action in a set of buttons.</td></tr><tr><td><code>context=&#x27;success&#x27;</code></td><td>Indicates a successful or positive action.</td></tr><tr><td><code>context=&#x27;danger&#x27;</code></td><td>Indicates a dangerous or negative action.</td></tr><tr><td><code>context=&#x27;link&#x27;</code></td><td>Deemphasizes to look like a link while maintaining button behavior.</td></tr></tbody></table><h4>Code</h4><pre><code>&lt;Button context=&#x27;primary&#x27; body=&#x27;Primary&#x27; /&gt;
&lt;Button context=&#x27;success&#x27; body=&#x27;Success&#x27; /&gt;
&lt;Button context=&#x27;danger&#x27;  body=&#x27;Danger&#x27; /&gt;
&lt;Button context=&#x27;link&#x27;    body=&#x27;Link&#x27; type=&#x27;link&#x27;    /&gt;
</code></pre></section><section><h2>Button sizes</h2><p>To change the size of a Button set the <code>size</code> prop to <code>mini</code>, <code>small</code> or <code>large</code>.</p><h3>Example</h3><pre><code>&lt;Button size=&#x27;mini&#x27; body=&#x27;Mini button&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button size=&#x27;mini&#x27; body=&#x27;Mini button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

&lt;Button size=&#x27;small&#x27; body=&#x27;Small button&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button size=&#x27;small&#x27; body=&#x27;Small button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

&lt;Button body=&#x27;Default button&#x27;/&gt;
&lt;Button body=&#x27;Default button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

&lt;Button size=&#x27;large&#x27; body=&#x27;Large button&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button size=&#x27;large&#x27; body=&#x27;Large button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;
</code></pre></section><section><h2>Button sizes</h2><p>Tto change the size of a Button set the <code>size</code> prop to <code>mini</code>, <code>small</code> or <code>large</code>.</p><h3>Example</h3><pre><code>&lt;Button size=&#x27;mini&#x27; body=&#x27;Mini button&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button size=&#x27;mini&#x27; body=&#x27;Mini button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

&lt;Button size=&#x27;small&#x27; body=&#x27;Small button&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button size=&#x27;small&#x27; body=&#x27;Small button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

&lt;Button body=&#x27;Default button&#x27;/&gt;
&lt;Button body=&#x27;Default button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

&lt;Button size=&#x27;large&#x27; body=&#x27;Large button&#x27; margin=&#x27;right&#x27;/&gt;
&lt;Button size=&#x27;large&#x27; body=&#x27;Large button&#x27; context=&#x27;primary&#x27;/&gt;&lt;br /&gt;

</code></pre></section><section><h2>Button blocks</h2><p>To create a full witth Button add the <code>block</code> prop to the buttton component.</p><h3>Example</h3><pre><code>
&lt;Button block body=&#x27;Button&#x27; margin=&#x27;smallBottom&#x27; /&gt;
&lt;Button block body=&#x27;Button&#x27; context=&#x27;primary&#x27;/&gt;
</code></pre></section><section><h2>Button dropdown</h2><p>Coming soon...</p></section><section><h2>Button Props</h2><p><code>&lt;Button&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>body</code></td><td>string</td></tr><tr><td><code>block</code></td><td>bool</td></tr><tr><td><code>context</code></td><td>oneOf <br/> primary, success, danger or link</td></tr><tr><td><code>disabled</code></td><td>bool</td></tr><tr><td><code>onClick</code></td><td>func</td></tr><tr><td><code>size</code></td><td>oneOf <br/> mini small or large</td></tr><tr><td><code>type</code></td><td>oneOf <br/> button close or link</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>