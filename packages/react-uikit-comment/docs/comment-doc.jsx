'use strict';


import React from 'react';
import Commnet from '../../react-uikit-comment/lib/comment';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';

const CommentDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Commnet</h1>
      <p>
        Create comments, for example about articles.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-comment --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Commnet from 'react-uikit-comment';</code><br />
        </p>
        <p>
          ES5 <br />
        <code>var Commnet = require&#40;'react-uikit-comment'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <p>
          See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
        </p>

        <hr />
      <p>
        The Comment component consists of a comment header, including an
        avatar, a title and meta data, and a comment body.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>avatar</code></td>
            <td>Add avatar prop to create an avatar for the comment author</td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>Add tilte prop to createCreates a comment title.</td>
          </tr>
          <tr>
            <td><code>meta</code></td>
            <td>Add meta prop to add meta data about the comment.</td>
          </tr>
          <tr>
            <td><code>body</code></td>
            <td>
              Add body prop to add text comment body. Body is overridden
              if commet has children.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3>Example</h3>

      <Codeblock syntax='xml'>
{
`<Commnet title='Author' meta='12 days ago | Profile | #'
  avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    erat, sed diam voluptua.
  </p>
</Commnet>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Comment Color</h2>
      <p>
        To style a comment differently, for example to highlight it as the
        admin's comment, just add the <code>primary</code> prop.
      </p>

      <h3>Example</h3>
    
      <Codeblock syntax='xml'>
{
`<Commnet primary title='Author' meta='12 days ago | Profile | #'
  avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    erat, sed diam voluptua.
  </p>
</Commnet>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Commnet Props</h2>
      <p>
        <code>&lt;Commnet&gt;</code> props and their types.
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
              <code>avatar</code>
            </td>
            <td>Object {`{src, alt }`}</td>
          </tr>
          <tr>
            <td>
              <code>body</code>
            </td>
            <td>String</td>
          </tr>
          <tr>
            <td>
              <code>meta</code>
            </td>
            <td>String</td>
          </tr>
          <tr>
            <td>
              <code>primary</code>
            </td>
            <td>Bool</td>
          </tr>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>String</td>
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

export default CommentDoc;
