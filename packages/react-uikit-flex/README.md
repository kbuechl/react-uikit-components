<div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css"/><section><h1>Flex</h1><p class="uk-article-lead">Utilize the power of Flexbox to create a wide range of layouts.</p><p>Flex component uses flexbox, a concept that is still quite new but extremely powerful for creating layouts. To order Flex items see <a href="/https://github.com/otissv/react-uikit-base">order</a> prop.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-base --save;</code></p><p>ES6 <br/><code>import Flex from &#x27;react-uikit-flex&#x27;;</code><br/></p><p>ES5 <br/><code>var Flex = require(&#x27;react-uikit-flex&#x27;);</code></p>otis<p><span class="uk-badge  uk-badge-danger">Note</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><h3 class="example">Example</h3><div class="uk-flex"><div class="uk-width-1-3">otis<div class="uk-panel  uk-panel-box"><h3 class="uk-panel-title"> </h3>Box</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-left uk-panel-box"><h3 class="uk-panel-title"> </h3>Box</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-left uk-panel-box"><h3 class="uk-panel-title"> </h3>Box</div></div></div><h4 class="code">Code</h4><pre class="xml"><code class="xml">
&lt;Flex&gt;
    &lt;Panel col=&#x27;1-3&#x27; box&gt;
      Box
    &lt;/Panel&gt;
    &lt;Panel margin=&#x27;left&#x27;col=&#x27;1-3&#x27;box&gt;
      Box
    &lt;/Panel&gt;
    &lt;Panel margin=&#x27;left&#x27; col=&#x27;1-3&#x27;box&gt;
      Box
    &lt;/Panel&gt;
&lt;/Flex&gt;
</code></pre></section><section><h2>Flex alignment</h2><p>These props define the horizontal and vertical alignment of Flex items and distribute the space between them.</p><table class="uk-table"><thead><tr><th class="uk-text-left">Prop</th><th class="uk-text-left">Description</th></tr></thead><tbody><tr><td class="uk-text-left"><code>center</code></td><td class="uk-text-left">Add this prop to center Flex items horizontally.</td></tr><tr><td class="uk-text-left"><code>right</code></td><td class="uk-text-left">Add this prop to align Flex items to the right.</td></tr><tr><td class="uk-text-left"><code>top</code></td><td class="uk-text-left">Add this prop to align Flex items to the top.</td></tr><tr><td class="uk-text-left"><code>middle</code></td><td class="uk-text-left">Add this prop to align Flex items to the middle.</td></tr><tr><td class="uk-text-left"><code>bottom</code></td><td class="uk-text-left">Add this prop to align Flex items to the bottom</td></tr><tr><td class="uk-text-left"><code>between</code></td><td class="uk-text-left">Add this prop to distribute items evenly, with the first item at the beginning and last item at the end of the main axis.</td></tr><tr><td class="uk-text-left"><code>around</code></td><td class="uk-text-left">Add this prop to distribute items evenly with equal space on both sides of each item.</td></tr></tbody></table><h3 class="example">Example</h3><div class="uk-flex  uk-flex-space-between uk-flex-middle"><div class="uk-width-1-3">otis<div class="uk-panel  uk-panel-box"><h3 class="uk-panel-title"> </h3>Box</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-left uk-panel-box"><h3 class="uk-panel-title"> </h3>Box</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-left uk-panel-box"><h3 class="uk-panel-title"> </h3>Box</div></div></div><h4 class="code">Code</h4><pre class="xml"><code class="xml"> &lt;Flex middle between &gt;
  &lt;Panel col=&#x27;1-3&#x27; box style={{height: &#x27;50px&#x27;}}&gt;
    Box
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;left&#x27; col=&#x27;1-3&#x27; box style={{height: &#x27;70px&#x27;}}&gt;
    Box
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;left&#x27; col=&#x27;1-3&#x27; box style={{height: &#x27;100px&#x27;}}&gt;
    Box
  &lt;/Panel&gt;
&lt;/Flex&gt;
</code></pre></section><section><h2>Flex direction</h2><p>These props define the axis flex items placed on and their direction. By default, items run horizontally from left to right.</p><table class="uk-table"><thead><tr><th class="uk-text-left">Prop</th><th class="uk-text-left">Description</th></tr></thead><tbody><tr><td class="uk-text-left"><code>direction=&#x27;rowReverse&#x27;</code></td><td class="uk-text-left">Add this props to lay out Flex items from right to left.</td></tr><tr><td class="uk-text-left"><code>direction=&#x27;column&#x27;</code></td><td class="uk-text-left">Add this props to lay out Flex items as vertical columns.</td></tr><tr><td class="uk-text-left"><code>direction=&#x27;columnReverse&#x27;</code></td><td class="uk-text-left">Add this props to lay out Flex items from bottom to top.</td></tr></tbody></table><h3 class="example">Example</h3><div class="uk-flex  uk-flex-column uk-flex-column-reverse"><div class="uk-width-1-3">otis<div class="uk-panel  uk-panel-box"><h3 class="uk-panel-title"> </h3>1</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-bottom uk-panel-box"><h3 class="uk-panel-title"> </h3>2</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-bottom uk-panel-box"><h3 class="uk-panel-title"> </h3>3</div></div></div><h4 class="code">Code</h4><pre class="xml"><code class="xml">&lt;Flex direction=&#x27;columnReverse&#x27;&gt;
  &lt;Panel col=&#x27;1-3&#x27; box&gt;
    1
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box&gt;
    2
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom&#x27; col=&#x27;1-3&#x27; box&gt;
    3
  &lt;/Panel&gt;
&lt;/Flex&gt;
</code></pre></section><section><h2>Flex row wrap</h2><p>By default, Flex items fit themselves into one row. Add the <code>row=&#x27;wrap&#x27;</code> prop, so that the items wrap into another row when they no longer fit the viewport. To change the items&#x27; direction so that they run from right to left, add the <code>reverse</code> prop. The following props modify the alignment of wrapping Fex items. To force the flex items into one row, just add the <code>nowrap</code> prop.</p><table class="uk-table"><thead><tr><th class="uk-text-left">Prop</th><th class="uk-text-left">Description</th></tr></thead><tbody><tr><td class="uk-text-left"><code>row=&#x27;wrap&#x27;</code></td><td class="uk-text-left">Add this prop to for wrap Flex items on multiple rows.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;top&#x27;</code></td><td class="uk-text-left">Add this prop to align multirow Flex items to the top.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;middle&#x27;</code></td><td class="uk-text-left">Add this prop to vertically center multirow Flex items.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;bottom&#x27;</code></td><td class="uk-text-left">Add this prop to align multiline Flex items to the bottom.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;between&#x27;</code></td><td class="uk-text-left">Add this prop to distribute Flex item rows evenly, with the first row at the top and last row at the bottom of the container.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;around&#x27;</code></td><td class="uk-text-left">Add this prop to distribute Flex rows evenly with equal space at the top and bottom of each row.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;reverse&#x27;</code></td><td class="uk-text-left">Add this prop to change the direction of the Flex items from right to left.</td></tr><tr><td class="uk-text-left"><code>row=&#x27;nowrap&#x27;</code></td><td class="uk-text-left">Add this prop to remove row wrapping.</td></tr></tbody></table><h3 class="example">Example</h3><div class="uk-flex  uk-flex-wrap uk-flex-wrap-reverse uk-flex-wrap-space-around"><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-bottom uk-margin-right uk-panel-box"><h3 class="uk-panel-title"> </h3>1</div></div><div class="uk-width-1-2">otis<div class="uk-panel uk-margin-bottom uk-margin-right uk-panel-box"><h3 class="uk-panel-title"> </h3>2</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-bottom uk-margin-right uk-panel-box"><h3 class="uk-panel-title"> </h3>3</div></div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-bottom uk-margin-right uk-panel-box"><h3 class="uk-panel-title"> </h3>4</div></div><div class="uk-panel  uk-panel-box"><h3 class="uk-panel-title"> </h3>5</div><div class="uk-width-1-3">otis<div class="uk-panel uk-margin-bottom uk-margin-right uk-panel-box"><h3 class="uk-panel-title"> </h3>6</div></div></div><h4 class="code">Code</h4><pre class="uk-scrollable-text xml"><code class="xml">&lt;Flex row=&#x27;wrap reverse around&#x27;&gt;
  &lt;Panel col=&#x27;1-3&#x27; margin=&#x27;bottom right&#x27; box&gt;
    1
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom right&#x27; col=&#x27;1-2&#x27; box&gt;
    2
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom right&#x27; col=&#x27;1-3&#x27; box&gt;
    3
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom right&#x27; col=&#x27;1-3&#x27; box&gt;
    4
  &lt;/Panel&gt;
  &lt;Panel box&gt;
    5
  &lt;/Panel&gt;
  &lt;Panel margin=&#x27;bottom right&#x27; col=&#x27;1-3&#x27; box&gt;
    6
  &lt;/Panel&gt;
&lt;/Flex&gt;
</code></pre></section><section><h2>Flex and grid</h2>The Flex component can be combined with a grid from the <a href="/grid">Grid</a> component by adding<code>grid</code> prop.<h4 class="example">Example</h4><div class="uk-flex  uk-grid"><div class="uk-width-1-3">otis<div class="uk-panel"><h3 class="uk-panel-title"> </h3><img src="docs/images/placeholder_400x250.svg" alt="Placeholder image"/></div></div><div class="uk-width-2-3">otis<div class="uk-panel"><h3 class="uk-panel-title"> </h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div></div></div><h4 class="code">Code</h4><pre class="xml"><code class="xml">&lt;Flex grid &gt;
  &lt;Panel col=&#x27;1-3&#x27;&gt;
    &lt;img src=&#x27;docs/images/placeholder_400x250.svg&#x27; alt=&#x27;Placeholder image&#x27; /&gt;
  &lt;/Panel&gt;
  &lt;Panel flexAlign=&#x27;middle&#x27; col=&#x27;2-3&#x27;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    &lt;/p&gt;
  &lt;/Panel&gt;
&lt;/Flex&gt;
</code></pre></section><section><h2>Flex Props</h2><p><code>&lt;Flex&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th class="uk-text-left">Prop</th><th class="uk-text-left">Type</th></tr></thead><tbody><tr><td class="uk-text-left"><code>around</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>center</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>bottom</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>between</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>direction</code></td><td class="uk-text-left">oneOf<br/>rowRevers, column or columnReverse</td></tr><tr><td class="uk-text-left"><code>grid</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>middle</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>right</code></td><td class="uk-text-left">bool</td></tr><tr><td class="uk-text-left"><code>row</code></td><td class="uk-text-left">string<br/>wrap, bottom, middle, top, between, around, reverse and nowrap</td></tr><tr><td class="uk-text-left"><code>top</code></td><td class="uk-text-left">bool</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>