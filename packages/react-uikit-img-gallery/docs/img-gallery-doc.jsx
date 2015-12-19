'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import ImgGroup from '../lib/img-gallery';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';


const ImgGalleryDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Img Gallery</h1>
      <p className='uk-article-lead'>
        Create galery of imiages.
      </p>
    </section>

    <section>
    <h2>Usage</h2>
    <p>
      <code>npm install react-uikit-img-gallery --save;</code>
    </p>
    <p>
      ES6 <br />
    <code>import ImgGallery from 'react-uikit-img-gallery';</code><br />
    </p>

    <p>
      ES5 <br />
    <code>var ImgGallery = require&#40;'react-uikit-img-gallery'&#41;;</code>
    </p>

    <Note badge={{context: 'danger', body: 'Note'}}>
      UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
      This has been tested with UIKit version 2.24.2.
    </Note>

    <hr className="uk-article-divider" />

    <h3 className='example'>Example</h3>
    <ImgGroup
      items={[
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'}
      ]}
    />


    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`<ImgGroup
items={[
  {src: 'docs/images/placeholder_200x150_2.svg'},
  {src: 'docs/images/placeholder_200x150_2.svg'},
  {src: 'docs/images/placeholder_200x150_2.svg'},
  {src: 'docs/images/placeholder_200x150_2.svg'},
  {src: 'docs/images/placeholder_200x150_2.svg'},
  {src: 'docs/images/placeholder_200x150_2.svg'}
]}
/>
`}
    </Codeblock>
  </section>


  <section>
    <h2>Img props</h2>
    <p>
      props can be passed to the image by adding <code>props</code> property to to an item.
    </p>
    <h3 className='example'>Example</h3>
    <ImgGroup
      items={[
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}}
      ]}
    />


    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`<ImgGroup
items={[
  {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
  {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
  {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
  {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
  {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}},
  {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}}
]}
/>
`}
    </Codeblock>
  </section>


    <section>
      <h2>Img gallery props</h2>
      <p>
        <code>&lt;Img&gt;</code> props and their types.
      </p>
      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
        For items props see <a href='https://github.com/otissv/react-uikit-img'>Img</a> component props.
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
              <code>items</code>
            </td>
            <td className='uk-text-left'>
              array of objects.<br/>
              {`{
                alt,
                src,
                height,
                large,
                medium,
                props,
                small,
                width,
                xlarge
              }`}
            </td>
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

export default ImgGalleryDoc;
