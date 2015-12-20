<div><section><h1>Img Gallery</h1><p>Create galery of imiages.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-img-gallery --save;</code></p><p>ES6 <br/><code>import ImgGallery from &#x27;react-uikit-img-gallery&#x27;;</code><br/></p><p>ES5 <br/><code>var ImgGallery = require(&#x27;react-uikit-img-gallery&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><p>See <a href="http://otissv.github.io/react-uikit-components">React UIKit Componets</a> for examples and full documentation.</p><hr/><h3>Example</h3><pre class="xml"><code class="xml">&lt;ImgGroup
items={[
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;}
]}
/&gt;
</code></pre></section><section><h2>Img props</h2><p>props can be passed to the image by adding <code>props</code> property to to an item.</p><h3>Example</h3><pre class="xml"><code class="xml">&lt;ImgGroup
items={[
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}}
]}
/&gt;
</code></pre></section><section><h2>Img gallery props</h2><p><code>&lt;Img&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props. For items props see <a href="https://github.com/otissv/react-uikit-img">Img</a> component props.</p><table class="uk-table"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody><tr><td><code>items</code></td><td>array of objects</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>