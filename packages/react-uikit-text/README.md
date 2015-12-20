<div><section><h1>Text</h1><p>A collection of useful text components to style your content.</p><p>Tested with <a href="http://getuikit.com/">UIKit</a> version 2.24.2.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-text --save;</code></p><p>ES6 <br/><code>import Text from &#x27;react-uikit-text&#x27;;</code><br/></p><p>ES5 <br/><code>var Text = require(&#x27;react-uikit-text&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note:</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><p>See <a href="http://otissv.github.io/react-uikit-components">React UIKit Componets</a> for examples and full documentation.</p></section><section><h2>Text Types</h2><p>The Text compoent creates a number of various Text compnents. <br/>The default type is <code>p</code> which creates a paragraph.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>type=&#x27;p&#x27;</code></td><td>Define a paragraph with the <p type="p" class="uk-display-inline">p type.</p></td></tr><tr><td><code>type=&#x27;a&#x27;</code></td><td>Turn text into hypertext using the <a href="" type="a">a type.</a></td></tr><tr><td><code>type=&#x27;em&#x27;</code></td><td>Emphasize text using the <em type="em">em element</em>.</td></tr><tr><td><code>type=&#x27;strong&#x27;</code></td><td>Imply any extra importance using the <strong type="strong">strong type</strong>.</td></tr><tr><td><code>type=&#x27;code&#x27;</code></td><td>Define inline code snippets using the <code type="code">code type.</code></td></tr><tr><td><code>type=&#x27;ins&#x27;</code></td><td>Mark document changes as inserted text using the <ins type="ins">ins type</ins>.</td></tr><tr><td><code>type=&#x27;mark&#x27;</code></td><td>Highlight text with no semantic meaning using the <mark type="mark">mark type</mark>.</td></tr><tr><td><code>type=&#x27;q&#x27;</code></td><td>Define inline quotations using <q type="q">q element inside a q type</q>.</td></tr><tr><td><code>type=&#x27;abbr&#x27;</code></td><td>Define an abbreviation using the <abbr type="abbr" title="Abbreviation Element">abbr type</abbr> with a <code>title=&#x27;&#x27;</code> prop.<br/></td></tr><tr><td><code>type=&#x27;del&#x27;</code></td><td>Mark document changes as deleted text using the <del type="del">del type</del> with a <code>title=&#x27;&#x27;</code> prop.</td></tr><tr><td><code>type=&#x27;dfn&#x27;</code></td><td>Define a definition term using the <dfn type="dfn" title="Defines a definition term">dfn type</dfn> with a <code>title=&#x27;&#x27;</code> prop.</td></tr><tr><td><code>type=&#x27;small&#x27;</code></td><td>De-emphasize text for small print using the <small type="small">small</small> type.</td></tr><tr><td><code>type=&#x27;h1&#x27;</code></td><td>Define a h1 heading using the <h1 type="h1" class="uk-display-inline">h1 type</h1>.</td></tr><tr><td><code>type=&#x27;h2&#x27;</code></td><td>Define a h2 heading using the <h2 type="h2" class="uk-display-inline">h2 type</h2>.</td></tr><tr><td><code>type=&#x27;h3&#x27;</code></td><td>Define a h3 heading using the <h3 type="h3" class="uk-display-inline">h3 type</h3>.</td></tr><tr><td><code>type=&#x27;h4&#x27;</code></td><td>Define a h4 heading using the <h4 type="h4" class="uk-display-inline">h4 type</h4>.</td></tr><tr><td><code>type=&#x27;h5&#x27;</code></td><td>Define a h5 heading using the <h5 type="h5" class="uk-display-inline">h5 type</h5></td></tr><tr><td><code>type=&#x27;h6&#x27;</code></td><td>Define a h6 heading using the <h6 type="h6" class="uk-display-inline">h6 type</h6>.</td></tr><tr><td><code>type=&#x27;span&#x27;</code></td><td>Define parts of inline text with the <span type="span" class="uk-display-inline">span type</span>.<br/>Use when no other component or HTML element is suitable.</td></tr><tr><td><code>type=&#x27;hr&#x27;</code></td><td>Create a horizontal rule by using the <code>hr type</code>.</td></tr></tbody></table></section><section><h2>Text headings</h2><p>Use <code>heading</code> prop alter any of the Text component types.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>heading=&#x27;h1&#x27;</code></td><td>Changes the size of text to h2</td></tr><tr><td><code>heading=&#x27;h3&#x27;</code></td><td>Changes the size of text to h4</td></tr><tr><td><code>heading=&#x27;h3&#x27;</code></td><td>Changes the size of text to h4</td></tr><tr><td><code>heading=&#x27;h4&#x27;</code></td><td>Changes the size of text to h5</td></tr><tr><td><code>heading=&#x27;h5&#x27;</code></td><td>Changes the size of text to h5</td></tr></tbody></table><h4 class="code">Code</h4><pre><code>&lt;Text heading=&#x27;h1&#x27;&gt;...&lt;/Text&gt;
&lt;Text heading=&#x27;h2&#x27;&gt;...&lt;/Text&gt;
&lt;Text heading=&#x27;h3&#x27;&gt;...&lt;/Text&gt;
&lt;Text heading=&#x27;h4&#x27;&gt;...&lt;/Text&gt;
&lt;Text heading=&#x27;h5&#x27;&gt;...&lt;/Text&gt;
&lt;Text heading=&#x27;h6&#x27;&gt;...&lt;/Text&gt;
</code></pre></section><section><h2>Text bold</h2><p>Add the <code>bold</code> props to create bold text.</p><h3 class="example">Example</h3><p>This is <span type="span" class="uk-text-bold">bold text</span>.</p><h4 class="code">Code</h4><pre><code>&lt;Text bold type=&#x27;span&#x27;&gt;bold text&lt;/Text&gt;
</code></pre></section><section><h2>Text size</h2><p>Text size can be changed by using one of the <code>size=&#x27;&#x27;</code> props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>size=&#x27;small&#x27;</code></td><td>Add the <code>size=&#x27;small&#x27;</code> prop to decrease the font size.</td></tr><tr><td><code>large</code></td><td>Add the <code>size=&#x27;large&#x27;</code> prop to increase the font size.</td></tr></tbody></table><pre><code>&lt;Text type=&#x27;span&#x27; size=&#x27;small&#x27;&gt;Decreases the font size.&lt;/Text&gt;

&lt;Text type=&#x27;span&#x27; size=&#x27;large&#x27;&gt;Increases the font size.&lt;/Text&gt;

  </code></pre></section><section><h2>Text context</h2><p>The text context prop can be used to give text context.</p><pre><code>&lt;Text context=&#x27;muted&#x27;&gt;Add the muted props for text.&lt;/Text&gt;
&lt;Text context=&#x27;primary&#x27;&gt;Add the primary props to text context.&lt;/Text&gt;
&lt;Text context=&#x27;success&#x27;&gt;Add the success props to  your to text context.&lt;/Text&gt;
&lt;Text context=&#x27;warning&#x27;&gt;Addthe  warning props to  your to text context.&lt;/Text&gt;
&lt;Text context=&#x27;danger&#x27;&gt;Add the danger props to  your to text context.&lt;/Text&gt;
&lt;Text context=&#x27;contrast&#x27;&gt;Add the contrast props to make the text context readable on flat context areas or pictures. It&#x27;s often white.&lt;/Text&gt;
  </code></pre></section><section><h2>Text align</h2><p>The textAlign prop horizontally aligns text.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>textAlign=&#x27;left&#x27;</code></td><td>Aligns text to the left.</td></tr><tr><td><code>textAlign=&#x27;left-small&#x27;</code></td><td>Aligns text to the left only on small devices.</td></tr><tr><td><code>textAlign=&#x27;left-medium&#x27;</code></td><td>Aligns text to the left on medium and small devices.</td></tr><tr><td><code>textAlign=&#x27;right&#x27;</code></td><td>Aligns text to the right.</td></tr><tr><td><code>textAlign=&#x27;center&#x27;</code></td><td>Centers text horizontally.</td></tr><tr><td><code>textAlign=&#x27;center-small&#x27;</code></td><td>Centers text horizontally only on small devices.</td></tr><tr><td><code>textAlign=&#x27;center-medium&#x27;</code></td><td>Centers text horizontally on medium and small devices.</td></tr><tr><td><code>textAlign=&#x27;justify&#x27;</code></td><td>Justifies text.</td></tr></tbody></table><h3 class="exmaple">Example</h3><pre><code>&lt;Text textAlign=&#x27;left&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;left&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;leftSmall&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;left-small&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;leftMedium&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;left-medium&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;right&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;right&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;center&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;center&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;centerSmall&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;center-small&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;centerMedium&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;center-medium&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textAlign=&#x27;justify&#x27;&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. &lt;code&gt;textAlign=&#x27;justify&#x27;&lt;/code&gt;
&lt;/Text&gt;
</code></pre></section><section><h2>Text verticle</h2><p>The textVerticle prop  vertically aligns text to an object.</p><h3 class="exmaple">Example</h3><pre><code>
&lt;Text textVerticle=&#x27;top&#x27; type=&#x27;span&#x27;&gt;
  Lorem ipsum &lt;code&gt;textAlign=&#x27;left&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textVerticle=&#x27;middle&#x27; type=&#x27;span&#x27;&gt;
  Lorem ipsum  &lt;code&gt;textAlign=&#x27;left&#x27;&lt;/code&gt;
&lt;/Text&gt;
&lt;Text textVerticle=&#x27;bottom&#x27; type=&#x27;span&#x27;&gt;
  Lorem ipsum &lt;code&gt;textAlign=&#x27;left&#x27;&lt;/code&gt;
&lt;/Text&gt;
</code></pre></section><section><h2>Text wrap</h2><p>The textWrap prop wraps text.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>textWrap=&#x27;truncate&#x27;</code></td><td>Prevents text from wrapping into multiple lines, truncating it instead.</td></tr><tr><td><code>textWrap=&#x27;break&#x27;</code></td><td>Breaks strings if their length exceeds the width of their container.</td></tr><tr><td><code>textWrap=&#x27;nowrap&#x27;</code></td><td>Breaks strings if their length exceeds the width of their container.</td></tr></tbody></table><h3 class="exmaple">Example</h3><pre><code>&lt;Text textWrap=&#x27;truncate&#x27;&gt;
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit &lt;code&gt;textWrap=&#x27;truncate&#x27;&lt;/code&gt;
&lt;/Text&gt;
&lt;/Panel&gt;

&lt;Text textWrap=&#x27;break&#x27;&gt;
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit  &lt;code&gt;textWrap=&#x27;break&#x27;&lt;/code&gt;
&lt;/Text&gt;

&lt;Text textWrap=&#x27;nowrap&#x27;&gt;
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit &lt;code&gt;textWrap=&#x27;nowrap&#x27;&lt;/code&gt;
&lt;/Text&gt;
</code></pre></section><section><h2>Text Props</h2><p><code>&lt;Text&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><td>Prop</td><td>Type</td></tr></thead><tbody><tr><td><code></code></td><td></td><td></td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>