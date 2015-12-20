<div><section><h1>Grid</h1><p>Create a fully responsive, fluid and nestable grid layout.</p><p>The grid system of UIkit follows the mobile-first approach and accomodates up to 10 grid columns. It uses units with predefined classes inside each grid, which define the column col. It is also possible to combine the grid with classes from the Flex component, although it works only in modern browsers.</p></section><section><h2>Usage</h2><p>ES6 <br/><code>import Grid from &#x27;react-uikit-grid&#x27;;</code><br/></p><p>ES5 <br/><code>var Grid = require(&#x27;react-uikit-grid&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><p>See <a href="http://otissv.github.io/react-uikit-components">React UIKit Componets</a> for examples and full documentation.</p><hr/><p>To create the grid container, use the <code>&lt;Grid&gt;</code> component. A <code>&lt;ul&gt;</code> grid be creaed by adding <code>list</code> prop.</p><p>Columns can be added by adding the <code>col</code> prop to any react uikit component.<br/>See <a href="/https://github.com/otissv/react-uikit-base">react uikit base</a>col values</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Grid textAlign=&#x27;center&#x27;&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-2&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel col=&#x27;1-2&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel col=&#x27;3-10&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel col=&#x27;7-10&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Grid gutter</h2><p>Grids automatically create a horizontal gutter between columns and a vertical one between two succeeding grids. By default, the grid gutter is wider on large screens.</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Grid textAlign=&#x27;center&#x27;&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre><hr/><h3>Medium gutter</h3><p>To apply a medium sized gutter between grid columns, just add the <code>gutter=&#x27;medium&#x27;</code> prop.</p><h4>Example</h4><h4 class="code">Code</h4><pre class="uk-scrollable-text"><code>&lt;Grid gutter=&#x27;medium&#x27;&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre><hr/><h3>Small gutter</h3><p>To apply a small sized gutter between grid columns, just add the <code>gutter=&#x27;small&#x27;</code> prop.</p><h4>Example</h4><pre class="uk-scrollable-text"><code>&lt;Grid gutter=&#x27;small&#x27;&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre><hr/><h3>Collapse gutter</h3><p>To remove the gutter entirely, just add the <code>gutter=&#x27;collapse&#x27;</code> prop.</p><h4>Example</h4><pre class="uk-scrollable-text"><code>&lt;Grid gutter=&#x27;collapse&#x27;&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;

</code></pre></section><section><h2>Grid divider</h2><p>Add the <code>divider</code> prop to separate grid columns with lines. To separate grids with a horizontal line, just add the class to a &lt;hr&gt; or &lt;div&gt;  element.</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Grid textAlign=&#x27;center&#x27; divider&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;

&lt;hr/&gt;

&lt;Grid textAlign=&#x27;center&#x27; divider&gt;
&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;

&lt;Panel col=&#x27;1-3&#x27; box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre><p><span class="uk-badge">NOTE:</span>  For horizontal divider use <code>&lt;hr class=&quot;uk-grid-divider&quot; /&gt;</code> can be used between grids.</p></section><section><h2>Match column heights</h2><p>To match grid colum heights add the <code>match</code> prop.</p><h3>Example</h3><pre><code>&lt;Grid match&gt;
&lt;Panel box&gt;
  Lorem ipsum dolor sit amet.
&lt;/Panel&gt;
&lt;Panel col=&#x27;1-3&#x27;box&gt;
  Lorem ipsum dolor sit amet.
&lt;/Panel&gt;
&lt;Panel col=&#x27;1-3&#x27;box&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam.
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre><p><span class="uk-badge">NOTE:</span>  If grid columns extend to a col of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.</p></section><section><h2>Even grid columns</h2><p>To create a grid whose child elements are evenly split, apply the same prop to each child component. Just add one of the <code>width</code> prop to the grid itself. col one of the col <a href="/col">values</a>.</p><p><span class="uk-badge">Note:</span>  For column width values see <a href="https://github.com/otissv/react-uikit-base">react uikit base</a>.</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Grid width=&#x27;1-6&#x27; type=&#x27;list&#x27; &gt;
&lt;Panel margin=&#x27;top bottom&#x27; list box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel margin=&#x27;top bottom&#x27; list box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel margin=&#x27;top bottom&#x27; list box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel margin=&#x27;top bottom&#x27; list box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel margin=&#x27;top bottom&#x27; list box&gt;
  Col
&lt;/Panel&gt;
&lt;Panel margin=&#x27;top bottom&#x27; list box&gt;
  Col
&lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Responsive grid widths</h2><p>Responsive grid properties can be applied to all direct children of the <code>Grid</code> components by adding one of the width props to the grid itself. This will maintain evenly sized grid columns, regardless of the device.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>widths=&#x27;value&#x27;</code></td><td>Affects direct children elements on all device .</td></tr><tr><td><code>small=&#x27;value&#x27;</code></td><td>Affects direct children elements on 480px and higher devices.</td></tr><tr><td><code>medium=&#x27;value&#x27;</code></td><td>Affects direct children elements on 768px and higher devices.</td></tr><tr><td><code>large=&#x27;value</code>&#x27;</td><td>Affects direct children elements on 960px and higher devices..</td></tr><tr><td><code>xlarge=&#x27;value&#x27;</code></td><td>Affects direct children elements on 1220px and higher devices.</td></tr></tbody></table><p>Responsive grid widths take the same values as col values. See <a href="/https://github.com/otissv/react-uikit-base">react uikit base</a> for col values.</p><h3>Example</h3><pre class="uk-scrollable-text"><code>&lt;Grid type=&#x27;list&#x27; widths=&#x27;1-2&#x27; medium=&#x27;1-3&#x27; large=&#x27;1-6&#x27;&gt;
  &lt;Panel list box&gt;
    Col
  &lt;/Panel&gt;
  &lt;Panel list box&gt;
    Col
  &lt;/Panel&gt;
  &lt;Panel list box&gt;
    Col
  &lt;/Panel&gt;
  &lt;Panel list box&gt;
    Col
  &lt;/Panel&gt;
  &lt;Panel list box&gt;
    Col
  &lt;/Panel&gt;
  &lt;Panel list box&gt;
    Col
  &lt;/Panel&gt;
&lt;/Grid&gt;
</code></pre></section><section><h2>Indent grid</h2><p>To indent the left grid margin add the<code>indent</code> prop to the Grid compenent.</p></section><section><h2>Grid props</h2><p><code>&lt;Grid&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>divider</code></td><td>Bool</td></tr><tr><td><code>gutter</code></td><td>oneOf <br/>small, medium&quot; or collapse</td></tr><tr><td><code>large</code></td><td>oneOf col values</td></tr><tr><td><code>match</code></td><td>Bool</td></tr><tr><td><code>medium</code></td><td>oneOf col values</td></tr><tr><td><code>small</code></td><td>oneOf col values</td></tr><tr><td><code>type</code></td><td>oneOf<br/> block or list</td></tr><tr><td><code>widths</code></td><td>oneOf col values</td></tr><tr><td><code>xlarge</code></td><td>oneOf col values</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>