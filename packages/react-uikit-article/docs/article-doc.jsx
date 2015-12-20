'use strict';


import React from 'react';
import Article from '../../react-uikit-article/lib/article';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';


const ArticleDoc = (props) => (
  <div>
    <section>
      <h1>Article</h1>
      <p>
        Create articles within your page.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-article --save;</code>
        </p>
      <p>
        ES6 <br />
      <code>import Article from 'react-uikit-article';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Article = require&#40;'react-uikit-article'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note:'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <hr/>

      <p>
        The article component constists of the article itself, a title a lead and meta data.
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
            <td><code>title</code></td>
            <td>Creates an article title.</td>
          </tr>
          <tr>
            <td><code>meta</code></td>
            <td>Adds meta data about the article.</td>
          </tr>
          <tr>
            <td><code>lead</code></td>
            <td>Highlights opening paragraph of the article</td>
          </tr>
        </tbody>
      </Table>

      <h3>Example</h3>

      <Codeblock scroll='text' syntax='xml'>
{
`  <Article
  title='Article title'
  meta='Written by Super User on 12 April 2012. Posted in Blog'
  lead='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.' >

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>

  <hr className="uk-article-divider" />

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <a href="#">Read more</a>
</Article>
`}
      </Codeblock>

      <Note badge='Note:'>
        To create seperate sections in the article use <code>&lt;hr className="uk-article-divider" &#47;&gt;</code>
      </Note>
    </section>


    <section>
      <h2>Artilce Props</h2>
      <p>
        <code>&lt;Artilce&gt;</code> props and their types.
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
              <code>lead</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>meta</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>onClose</code>
            </td>
            <td>func</td>
          </tr>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>string</td>
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

export default ArticleDoc;
