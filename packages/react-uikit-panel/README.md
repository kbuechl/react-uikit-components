<div><section><h1>Panel</h1><p class="uk-article-lead">Create layout boxes with different styles.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-panel --save;</code></p><p>ES6 <br/><code>import Panel from &#x27;react-uikit-panel&#x27;;</code><br/></p><p>ES5 <br/><code>var Panel = require(&#x27;react-uikit-panel&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note:</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><hr/><p>The Panel component consists of the panel itself, the panel title and a panel badge. To prevent redundant white space, top and bottom margins are removed from the panel&#x27;s content.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>tilte</code></td><td>Add this prop to a heading to create the panel title.</td></tr><tr><td><code>badge</code></td><td>Add this prop to create a panel badge.<br/><br/><code>badge=&#x27;value&#x27;</code>will set the body of the badge to the value of the string.<br/><br/>Add <code>badge={{body: &#x27;value&#x27;, context: &#x27;danger&#x27;}}</code>to set the body and the context of the badge. Badge context can be success, warning or danger.</td></tr></tbody></table><h3>Example</h3><pre><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;3-10&#x27; box title=&#x27;Title&#x27; badge={{body: &#x27;hot&#x27;, context: &#x27;danger&#x27;}}&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre><p><span class="uk-badge">NOTE:</span>  By default, a panel is blank and has no styling. That is why it is important to add a modifier props, which gives the panel some styling. In the examples the <code>&lt;Panel box&gt;</code> is used.</p></section><section><h2>Panel types</h2><p></p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>block</code></td><td>Renders the panel as a block.</td></tr><tr><td><code>link</code></td><td>Renders the panel inside of a block. The <code>link=&#x27;url/path&#x27;</code> is requiured to set the links address.</td></tr></tbody></table><h3>Example</h3><pre><code>&lt;Grid indent&gt;
    &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Block panel&#x27; type=&#x27;block&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/Panel&gt;
    &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Link panel&#x27; type=&#x27;link&#x27; link=&#x27;&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;/Panel&gt;
    &lt;/Grid&gt;
    </code></pre></section><section><h2>Panel box primary</h2><p>Add the <code>context=&#x27;primary&#x27;</code> prop to modify the box panel to emphasize it by using a different color.</p><h3>Example</h3><pre><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; context=&#x27;primary&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; context=&#x27;primary&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; context=&#x27;primary&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel box secondary</h2><p>Add the <code>context=&#x27;secondary&#x27;</code> prop to modify the box panel which will give it a white background.</p><h3>Example</h3><pre><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; context=&#x27;secondary&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; context=&#x27;secondary&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; context=&#x27;secondary&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel hover</h2><p>Add the <code>hover</code> prop to add a hover effect to the panel. This comes in handy when using the panel as an anchor.</p><h3>Example</h3><pre><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; link=&#x27;#&#x27; hover&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; link=&#x27;#&#x27; hover&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; link=&#x27;#&#x27; hover&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel header</h2><p>Add the <code>header</code> prop to separate the panel title and content with a horizontal line.</p><h3>Example</h3><pre><code>
&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; header&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; header&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; header&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel space</h2><p>Add the <code>header</code> prop increase the spacing around the panel content.</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; space&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; space&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; space&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; space&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; space&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; title=&#x27;Title&#x27; space&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel divider</h2><p>Add the <code>divider</code> prop to separate vertically stacked panels with lines.</p><h3>Example</h3><pre><code>Grid&gt;
&lt;Panel margin=&#x27;bottom&#x27; title=&#x27;Title&#x27; divider&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/Panel&gt;
&lt;Panel margin=&#x27;bottom&#x27; title=&#x27;Title&#x27; divider&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/Panel&gt;
&lt;Panel margin=&#x27;bottom&#x27; title=&#x27;Title&#x27; divider&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/Panel&gt;
&lt;Panel margin=&#x27;bottom&#x27; title=&#x27;Title&#x27; divider&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel box with teaser</h2><p>To display an image inside a panel box that is attached to the border of the panel without any spacing, just add the <code>teaser={{src: &#x27;&#x27;, alt: &#x27;&#x27;}}</code> prop.</p><h3>Example</h3><pre><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; teaser={{src: &#x27;../images/placeholder_600x400.svg&#x27;, alt: &#x27;placeholder image&#x27;}}&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; teaser={{src: &#x27;../images/placeholder_600x400.svg&#x27;, alt: &#x27;placeholder image&#x27;}}&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; teaser={{src: &#x27;../images/placeholder_600x400.svg&#x27;, alt: &#x27;placeholder image&#x27;}}&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel with icons</h2><p>Easily apply an icon from our <a href="/icon">Icon component&#x27;</a> to your panel by adding <code>icon=&#x27;*&#x27;</code>.</p><h3>Example</h3><pre><code>&lt;Grid indent&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; icon=&#x27;user&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; icon=&#x27;home&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box title=&#x27;Title&#x27; icon=&#x27;bookmark&#x27;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Panel Props</h2><p><code>&lt;Panel&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>badge</code></td><td>string or object {body , context}</td></tr><tr><td><code>box</code></td><td>bool</td></tr><tr><td><code>context</code></td><td>oneOf &quot;primary&quot; or &quot;secondary&quot;</td></tr><tr><td><code>divider</code></td><td>bool</td></tr><tr><td><code>header</code></td><td>bool</td></tr><tr><td><code>hover</code></td><td>bool</td></tr><tr><td><code>icon</code></td><td>string</td></tr><tr><td><code>link</code></td><td>string</td></tr><tr><td><code>space</code></td><td>bool</td></tr><tr><td><code>teaser</code></td><td>object {src, alt}</td></tr><tr><td><code>type</code></td><td>oneOf &quot;block&quot; (default) or &quot;link&quot;</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>