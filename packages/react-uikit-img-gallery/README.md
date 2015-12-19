<div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css"/><section><h1>Img Gallery</h1><p class="uk-article-lead">Create galery of imiages.</p></section><section><h2>Usage</h2><p><code>npm install react-uikit-img-gallery --save;</code></p><p>ES6 <br/><code>import ImgGallery from &#x27;react-uikit-img-gallery&#x27;;</code><br/></p><p>ES5 <br/><code>var ImgGallery = require(&#x27;react-uikit-img-gallery&#x27;);</code></p><p><span class="uk-badge  uk-badge-danger">Note</span>  UIkit css is not included. You can get it from <a href="http://getuikit.com/">getuikit.com</a>. This has been tested with UIKit version 2.24.2.</p><hr class="uk-article-divider"/><h3 class="example">Example</h3><div><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljl00000qmddo5txqg9"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljn00010qmdixz2wnie"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljn00020qmdv2oha8x0"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljo00030qmdixhlul5e"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljo00040qmd5gwiado0"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljp00050qmdcvy9kp7x"/></div><h4 class="code">Code</h4><pre class="xml"><code class="xml">&lt;ImgGroup
items={[
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;}
]}
/&gt;
</code></pre></section><section><h2>Img props</h2><p>props can be passed to the image by adding <code>props</code> property to to an item.</p><h3 class="example">Example</h3><div><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljt00060qmdkgvvj21c" class="uk-margin-bottom uk-margin-right"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljt00070qmd7cy6vh0u" class="uk-margin-bottom uk-margin-right"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7lju00080qmdjtdihyfc" class="uk-margin-bottom uk-margin-right"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljv00090qmd548g48dm" class="uk-margin-bottom uk-margin-right"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljv000a0qmdt2pan8d3" class="uk-margin-bottom uk-margin-right"/><img src="docs/images/placeholder_200x150_2.svg" data-kitid="ciidl7ljw000b0qmdp9hx1amc" class="uk-margin-bottom uk-margin-right"/></div><h4 class="code">Code</h4><pre class="xml"><code class="xml">&lt;ImgGroup
items={[
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}},
  {src: &#x27;docs/images/placeholder_200x150_2.svg&#x27;, props: {margin: &#x27;bottom right&#x27;}}
]}
/&gt;
</code></pre></section><section><h2>Img gallery props</h2><p><code>&lt;Img&gt;</code> props and their types.</p><p>See <a href="https://github.com/otissv/react-uikit-base">base</a> for additional props. For items props see <a href="https://github.com/otissv/react-uikit-img">Img</a> component props.</p><table class="uk-table"><thead><tr><th class="uk-text-left">Prop</th><th class="uk-text-left">Type</th></tr></thead><tbody><tr><td class="uk-text-left"><code>items</code></td><td class="uk-text-left">array of objects.<br/>{
                alt,
                src,
                height,
                large,
                medium,
                props,
                small,
                width,
                xlarge
              }</td></tr></tbody></table></section><section><h2>Tests</h2><p><code>npm run test</code> to run tests with minimal output.<br/><code>npm run test:spec</code> to run tests with detailed output.<br/><code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br/></p></section><section><h2>Build</h2><p><code>npm run build</code> to build files fro distribution.<br/><code>npm run build:watch</code> watches src directory and builds files on changes.<br/></p></section><section><h2>Lint</h2><p><code>npm run lint</code> lints scripts in src directory.<br/><code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br/></p></section><section><h2>License</h2><p>MIT</p></section></div>