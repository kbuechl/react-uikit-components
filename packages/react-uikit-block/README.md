<div><section><h1>Block</h1><p class="uk-article-lead">Separate content sections by bundling them in blocks with different styles.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-base --save;</code></p><p>ES6 <br/><code>import Block from &#x27;react-uikit-block&#x27;;</code><br/></p><p>ES5 <br/><code>var Block = require(&#x27;react-uikit-block&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note:</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><p>See <a href="http://otissv.github.io/react-uikit-components">React UIKit Componets</a> for examples and full documentation.</p><hr class="uk-article-divider"/><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Block context=&#x27;muted&#x27;&gt;
  &lt;h4&gt;Block&lt;/h4&gt;
  &lt;Grid widths=&#x27;1-3&#x27;&gt;
    &lt;Panel&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
  &lt;/Grid&gt;
&lt;/Block&gt;</code></pre></section><section><h2>Block container</h2><p>To add the body in a container use the <code>container</code> prop.</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Block context=&#x27;muted&#x27; container &gt;
  &lt;h4&gt;Block&lt;/h4&gt;
  &lt;Grid widths=&#x27;1-3&#x27;&gt;
    &lt;Panel&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
  &lt;/Grid&gt;
&lt;/Block&gt;</code></pre></section><section><h2>Block Context</h2><p>To apply different background colors, add one of the following values for the <code>context</code> prop.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Add the default background color, usually white or similar.</td></tr><tr><td><code>muted</code></td><td>Adds a light background color.</td></tr><tr><td><code>primary</code></td><td>Adds a primary background color.</td></tr><tr><td><code>secondary</code></td><td>Adds a another background color, usually a dark one.</td></tr></tbody></table><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Block context=&#x27;primary&#x27; container contrast &gt;
  &lt;h4&gt;Block&lt;/h4&gt;
  &lt;Grid widths=&#x27;1-3&#x27;&gt;
    &lt;Panel&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
  &lt;/Grid&gt;
&lt;/Block&gt;</code></pre><p><span class="uk-badge">NOTE:</span>  To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.</p></section><section><h2>Block large</h2><p>To add the body in a container use the <code>container</code> prop.</p><h3>Example</h3><h3>Code</h3><pre class="uk-scrollable-text"><code>&lt;Block context=&#x27;secondary&#x27; container contrast large &gt;
  &lt;h4&gt;Block&lt;/h4&gt;
  &lt;Grid widths=&#x27;1-3&#x27;&gt;
    &lt;Panel&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;

    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
    &lt;Panel &gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    &lt;/Panel&gt;
  &lt;/Grid&gt;
&lt;/Block&gt;</code></pre></section><section><h2>Block Props</h2><p><code>&lt;Block&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>context</code></td><td>enums</td></tr><tr><td><code>container</code></td><td colspan="2">oneOf <br/>default, muted, primary, secondary</td></tr><tr><td><code>contrast</code></td><td>bool</td></tr><tr><td><code>large</code></td><td>bool</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section></div>