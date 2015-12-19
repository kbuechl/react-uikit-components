'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Note from '../../react-uikit-note/lib/note';
import Table from '../../react-uikit-table/lib/table';


const CodeblockDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Codeblock</h1>
      <p className='uk-article-lead'>
        Displays code inside of a block.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-codeblock --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Codeblock from 'react-uikit-codeblock';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Codeblock = require&#40;'react-uikit-codeblock'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <hr className="uk-article-divider" />
      <p>
        To use Codeblock component place backticks inside of braces and
        place the code inside of the backticks.
      </p>

      <p>
        For inline code use the html element <code>&lt;code&gt;</code>.
      </p>

      <h3 className='example'>Example</h3>
      <Codeblock >{
          `<div>...<div>`
        }</Codeblock>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Codeblock syntax='xml'>
{\`<div>...<div>\`};
</Codeblock>`}
      </Codeblock>

      <p>
        The <code>scroll</code> prop can be added to create a scrollable Codeblock.
      </p>

      <p>
        The <code>syntax</code> prop can be used in conjunction
        with <a href='https://highlightjs.org/'>highlight.js</a> for syntax
        highlighting by specifying a language.
      </p>

      <Note badge='Note'>highlight.js is not included</Note>
    </section>


    <section>
      <h2>Codeblock Props</h2>
      <p>
        <code>&lt;Codeblock&gt;</code> props and their types.
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
              <code>syntax</code>
            </td>
            <td className='uk-text-left'>string</td>
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


export default CodeblockDoc;
