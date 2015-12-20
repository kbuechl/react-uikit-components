'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';


const ImgDoc = (props) => (
  <div>
    <section>
      <h1>Img</h1>
      <p>
        Easily create responsive images.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <p>
        <code>npm install react-uikit-img --save;</code>
      </p>
      <p>
        ES6 <br />
      <code>import Img from 'react-uikit-img';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Img = require&#40;'react-uikit-img'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note:'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <p>
        See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
      </p>

      <hr/>

      <h3>Example</h3>

      <Codeblock>
{
`<Img
  width='300px'
  height='200px'
  src='docs/images/placeholder_200x150_2.svg'
/>
`}
      </Codeblock>
    </section>

    <section>

    <h2>Responsive image</h2>
    <p>
      The Image component provides different images for various
      viewport widths. To enable responsive behavior by adding one or
       all of the responsive props <code>small</code>, <code>medium</code> <code>large</code> <code>xlarge</code>.
    </p>

    <p>
      Each responsive size takes a JSON object.
    </p>

    <Table>
      <thead>
        <tr>
          <th>JSON key</th>
          <th>Descrition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>width</td>
          <td>The width of the image. The defualt width is 100% if no width is specified</td>
        </tr>
        <tr>
          <td>height</td>
          <td>The height of the image. The defualt height is auto if no height is specified</td>
        </tr>
        <tr>
          <td>src</td>
          <td>The src url for the image</td>
        </tr>
      </tbody>
    </Table>

    <p>
      For non-responsive images use the html <code>img</code> tag.
    </p>

    <h3>Example</h3>
    <Codeblock>
{
`<Img
  small={  {height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
  medium={ {height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
  large={  {height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
  xlarge={ {height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
/>
`}
    </Codeblock>
  </section>


  <section>
    <h1>Cover images</h1>
    <p>
      The <code>cover</code> component allows you to create fullscreen teasers using images. It will always
      be centered vertically and horizontally and cover its container without
      losing its proportions. You can also place additional content, like text
      or images on top of the image by placing it inside of the <code>&lt;Image&gt;</code> component.
    </p>

    <h3>Example</h3>
    <Codeblock>
{
`<Img cover
  small={  {height: '200px', src: 'docs/images/placeholder_200x150_1.svg'} }
  medium={ {height: '320px', src: 'docs/images/placeholder_200x150_2.svg'} }
  large={  {height: '480px', src: 'docs/images/placeholder_200x150_3.svg'} }
  xlarge={ {height: '640px', src: 'docs/images/placeholder_200x150_4.svg'} }
>
  <h1>Cover image</h1>
</Img>
`}
    </Codeblock>
  </section>


    <section>
      <h2>Img Props</h2>
      <p>
        <code>&lt;Img&gt;</code> props and their types.
      </p>
      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>alt</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>cover</code>
            </td>
            <td>Bool</td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>large</code>
            </td>
            <td>object<br />{`{width, height, src}`}</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>object<br />{`{width, height, src}`}</td>
          </tr>
          <tr>
            <td>
              <code>small</code>
            </td>
            <td>object<br />{`{width, height, src}`}</td>
          </tr>
          <tr>
            <td>
              <code>src</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>xlarge</code>
            </td>
            <td>object<br />{`{width, height, src}`}</td>
          </tr>
        </tbody>
      </Table>
    </section>

    <section>
      <h2>Tests</h2>
      <p>
        <code>npm run test</code> to run tests with minimal output.<br />
        <code>npm run test:spec</code> to run tests with detailed output.<br />
        <code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br />
      </p>
    </section>

    <section>
      <h2>Build</h2>
      <p>
        <code>npm run build</code> to build files fro distribution.<br />
        <code>npm run build:watch</code> watches src directory and builds files on changes.<br />
      </p>
    </section>


    <section>
      <h2>Lint</h2>
      <p>
        <code>npm run lint</code> lints scripts in src directory.<br />
        <code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br />
      </p>
    </section>

    <section>
      <h2>License</h2>
        <p>MIT</p>
    </section>

  </div>
);

export default ImgDoc;
