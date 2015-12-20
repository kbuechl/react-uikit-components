'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Note from '../../react-uikit-note/lib/note';
import Table from '../../react-uikit-table/lib/table';


export default class NoteHandler extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Note</h1>
        <p>
          Easily add notes.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-note --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Note from 'react-uikit-note';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Note = require&#40;'react-uikit-note'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <p>
          See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
        </p>

        <hr/>

        <p>
          The Note componet consists of a paragrath with a prefixed bagde.
          To create a Note component add a label for the badge
          prop <code>&lt;Note badge='NOTE'&gt;</code> and either add
          text as a child or to the body prop.
        </p>

        <h3>Example</h3>

        <Codeblock syntax='xml'>
{`<Note badge='EXAMPLE'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Note>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Note colors</h2>
        <p>

        </p>

        <h3>Example</h3>

        <Codeblock syntax='xml'>
{`<Note badge={{body: 'EXAMPLE', context:'danger'}}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Note>
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Note Props</h2>
        <p>
          <code>&lt;Note&gt;</code> props and their types.
        </p>
        <p>
          See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props. <br />
        See <a href='https://github.com/otissv/react-uikit-badge'>badge</a> for badge props. <br />
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
                <code>badge</code>
              </td>
              <td>string or object</td>
            </tr>
            <tr>
              <td>
                <code>body</code>
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

    </div>;
  }
}
