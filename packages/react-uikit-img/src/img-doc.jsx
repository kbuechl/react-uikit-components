'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Img from '../lib/img';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';


const ImgDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Img</h1>
      <p className='uk-article-lead'>
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

      <Note badge={{context: 'danger', body: 'Note'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <hr className="uk-article-divider" />

      <h3 className='example'>Example</h3>
      <Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
`<Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />
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
          <th className='uk-text-left'>JSON key</th>
          <th className='uk-text-left'>Descrition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='uk-text-left'>width</td>
          <td className='uk-text-left'>The width of the image. The defualt width is 100% if no width is specified</td>
        </tr>
        <tr>
          <td className='uk-text-left'>height</td>
          <td className='uk-text-left'>The height of the image. The defualt height is auto if no height is specified</td>
        </tr>
        <tr>
          <td className='uk-text-left'>src</td>
          <td className='uk-text-left'>The src url for the image</td>
        </tr>
      </tbody>
    </Table>

    <p>
      For non-responsive images use the html <code>img</code> tag.
    </p>

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`<Img
small={  {height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
medium={ {height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
large={  {height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
xlarge={ {height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} } />
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

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`<Img cover
small={  {height: '200px', src: 'docs/images/placeholder_200x150_1.svg'} }
medium={ {height: '320px', src: 'docs/images/placeholder_200x150_2.svg'} }
large={  {height: '480px', src: 'docs/images/placeholder_200x150_3.svg'} }
xlarge={ {height: '640px', src: 'docs/images/placeholder_200x150_4.svg'} } >

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
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              <code>alt</code>
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>cover</code>
            </td>
            <td colSpan='2'>Bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>height</code>
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>large</code>
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
            <td className='uk-text-left'></td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>medium</code>
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>small</code>
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>src</code>
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>width</code>
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>xlarge</code>
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
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
