<div><section><h1>List Group</h1><p>Dynamicly create lists.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-list --save;</code></p><p>ES6 <br/><code>import List from &#x27;react-uikit-list&#x27;;</code><br/><code>import Listitem from &#x27;react-uikit-list/lib/ListItem&#x27;;</code></p><p>ES5 <br/><code>var List = require(&#x27;react-uikit-list&#x27;);</code><br/><code>var Listitem = require(&#x27;react-uikit-list/lib/ListItem&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><p>See <a href="http://otissv.github.io/react-uikit-components">React UIKit Componets</a> for examples and full documentation.</p></section><section><h2>List types</h2><p>List can be either unorderd or description.<br/>List are unordered by default. To create a description list add <code>type=&#x27;description&#x27;</code> prop.</p><p><span class="uk-badge">Note</span>  ListItem component and the items prop does not work with description lists. Also on narrower viewports the style will change back to the default stacked description list.</p><h3>Example</h3><pre><code>&lt;List items={[&#x27;item&#x27;, &#x27;item&#x27;, &#x27;item&#x27;]} /&gt;

&lt;List type=&#x27;description&#x27; horizontal&gt;
  &lt;dt&gt;Description lists&lt;/dt&gt;
  &lt;dd&gt;A description list defines terms and their corresponding descriptions.&lt;/dd&gt;
  &lt;dt&gt;Lorem ipsum&lt;/dt&gt;
  &lt;dd&gt;Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/dd&gt;
  &lt;dt&gt;A long term is truncated&lt;/dt&gt;
  &lt;dd&gt;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&lt;/dd&gt;
&lt;/List&gt;
</code></pre></section><section><h2>List with lines</h2><p>The <code>line</code> prop separates list items with lines.</p><h3>Example</h3><pre><code>
  &lt;List line&gt;
    &lt;ListItem body=&#x27;Item&#x27; /&gt;
    &lt;ListItem body=&#x27;Item&#x27; /&gt;
    &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;/List&gt;
</code></pre></section><section><h2>Striped items</h2><p>The <code>striped</code> prop adds zebra-striping to list items.</p><h3>Example</h3><pre><code>&lt;List striped&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
&lt;/List&gt;
</code></pre></section><section><h2>Space items</h2><p>The <code>space</code> prop increases the spacing between list items.</p><h3>Example</h3><pre><code>&lt;List space&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
&lt;/List&gt;
</code></pre></section><section><h2>List link items</h2><p>The <code>space</code> prop increases the spacing between list items.</p><h3>Example</h3><pre><code>&lt;List space&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
  &lt;ListItem body=&#x27;Item&#x27; /&gt;
&lt;/List&gt;
</code></pre></section><section><h2>Horizontal description list</h2><p>Displays the terms and descriptions side by side.</p><h3>Example</h3><pre><code>&lt;List type=&#x27;description horizontal&#x27;&gt;
  &lt;dt&gt;Description lists&lt;/dt&gt;
  &lt;dd&gt;A description list defines terms and their corresponding descriptions.&lt;/dd&gt;
  &lt;dt&gt;Lorem ipsum&lt;/dt&gt;
  &lt;dd&gt;Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/dd&gt;
  &lt;dt&gt;A long term is truncated&lt;/dt&gt;
  &lt;dd&gt;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&lt;/dd&gt;
&lt;/List&gt;
</code></pre></section><section><h2>Dynamic list items</h2><p>List items can be dynamicly created by setting the <code>items</code> prop to a collection of items.</p><h3>Example</h3><pre><code>&lt;List items={[&#x27;item&#x27;, &#x27;item&#x27;, &#x27;item&#x27;]} /&gt;

&lt;List line items={[
  {href: &#x27;#&#x27;, kitId: &#x27;list-group-1.1&#x27;, body: &#x27;Active item&#x27;, badge: {body: &#x27;2&#x27;, notification: true}, active: true},
  {href: &#x27;#&#x27;, kitId: &#x27;list-group-1.2&#x27;, body: &#x27;Normal item&#x27;},
  {href: &#x27;#&#x27;, kitId: &#x27;list-group-1.3&#x27;, body: &#x27;Disabled item&#x27;, disabled: true},
  {href: &#x27;#&#x27;, kitId: &#x27;list-group-1.4&#x27;, body: &#x27;Normal item&#x27;, badge: {body: &#x27;10&#x27;, context: &#x27;danger&#x27;, notification: true}}
]}/&gt;
</code></pre></section><section><h2>List props</h2><p><code>&lt;List&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>items</code></td><td>array</td></tr><tr><td><code>horizontal</code></td><td>bool</td></tr><tr><td><code>line</code></td><td>bool</td></tr><tr><td><code>striped</code></td><td>bool</td></tr><tr><td><code>space</code></td><td>bool</td></tr><tr><td><code>type</code></td><td>oneOf<br/>description or unorderd. Default is unorderd.</td></tr></tbody></table></section><section><h2>List item props</h2><p><code>&lt;ListItem&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>active</code></td><td>bool</td></tr><tr><td><code>badge</code></td><td>object</td></tr><tr><td><code>body</code></td><td>string</td></tr><tr><td><code>href</code></td><td>string</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>