'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock.js';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';


const AlertDoc = (props) => (
  <div>
    <section>
      <h1>Alert</h1>
      <p>
        Defines styles for success, warning and error messages.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <p>
        <code>npm install react-uikit-alert --save;</code>
      </p>
      <p>
        ES6 <br />
        <code>import Alert from 'react-uikit-alert';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Alert = require&#40;'react-uikit-alert'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note:'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <p>
        See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
      </p>

      <hr className='uk-article-divider' />

      <p>
        The alert component creates an alert box.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Alert>
Lorem ipsum dolor sit amet, consectetur adipisicing elit
</Alert>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Alert close button</h2>
      <p>
        To add a close button add the<code>close</code> prop to the Alert component.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Alert close={someFunction}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Alert contexts</h2>
      <p>
        To chage the context of the Alert add <code>context='success'</code>, <code>context='warning'</code>,
        or <code>context='danger'</code> prop.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Alert context='success'>
To indicate success or a positive message add the <code>context='success'</code> prop.
</Alert>
<Alert context='warning'>
To indicate a message containing a warning add the <code>context='warning'</code> prop.
</Alert>
<Alert context='danger'>
To indicate an important message add the <code>context='danger'</code> prop.
</Alert>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Alert size</h2>
      <p>
        To increase the spacing in an Alert add the <code>large</code> prop to the Alert component.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Alert large >
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
</Alert>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Alert Props</h2>
      <p>
        <code>&lt;Alert&gt;</code> props and their types.
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
          <tr >
            <td>
              <code>close</code>
            </td>
            <td>func</td>
          </tr>
          <tr>
            <td>
              <code>context</code>
            </td>
            <td>
              oneOf <br />
              success, warning ordanger"
            </td>
          </tr>
          <tr>
            <td>
              <code>large</code>
            </td>
            <td>Bool</td>
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


export default AlertDoc;
