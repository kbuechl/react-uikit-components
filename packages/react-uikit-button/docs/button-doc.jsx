'use strict';


import React from 'react';
import Button from '../../react-uikit-button/lib/button';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Panel from '../../react-uikit-panel/lib/panel';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';

const ButtonDoc = (props) => (
  <div>
    <section>
      <h1>Button</h1>
      <p>
        Easily create nicely looking buttons, which come in different styles.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <p>
        <code>npm install react-uikit-button --save;</code>
        </p>
      <p>
        ES6 <br />
      <code>import Button from 'react-uikit-button';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Button = require&#40;'react-uikit-button'&#41;;</code>
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
        The Button component creates either a <code>button</code>,
        a <code>link</code> or a <code>close</code> button by settiing the<code>type</code>.
      </p>

      <p>
        By defualt the Button component will create a button if no type is provided.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Button body='Button' margin='right' margin='right'/>
<Button body='Disabled' disabled  margin='right'/>
<Button type='close'/>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Button contexts</h2>
      <p>
        The color of the button can be easily changed by adding a context to the context prop
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
            <td>
              <code>context='primary'</code>
            </td>
            <td>
              Emphasizes to identify the primary action in a set of buttons.
            </td>
          </tr>
          <tr>
            <td>
              <code>context='success'</code>
            </td>
            <td>
              Indicates a successful or positive action.
            </td>
          </tr>
          <tr>
            <td>
              <code>context='danger'</code>
            </td>
            <td>
                Indicates a dangerous or negative action.
            </td>
          </tr>
          <tr>
            <td>
              <code>context='link'</code>
            </td>
            <td>
              Deemphasizes to look like a link while maintaining button behavior.
            </td>
          </tr>
        </tbody>
      </Table>

      <h4>Code</h4>
      <Codeblock>
{`<Button context='primary' body='Primary' />
<Button context='success' body='Success' />
<Button context='danger'  body='Danger' />
<Button context='link'    body='Link' type='link'    />
`}
      </Codeblock>
    </section>

    <section>
      <h2>Button sizes</h2>
      <p>
        To change the size of a Button set the <code>size</code> prop
        to <code>mini</code>, <code>small</code> or <code>large</code>.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Button size='mini' body='Mini button' margin='right'/>
<Button size='mini' body='Mini button' context='primary'/><br />

<Button size='small' body='Small button' margin='right'/>
<Button size='small' body='Small button' context='primary'/><br />

<Button body='Default button'/>
<Button body='Default button' context='primary'/><br />

<Button size='large' body='Large button' margin='right'/>
<Button size='large' body='Large button' context='primary'/><br />
`}
      </Codeblock>
    </section>


    <section>
      <h2>Button sizes</h2>
      <p>
        Tto change the size of a Button set the <code>size</code> prop
        to <code>mini</code>, <code>small</code> or <code>large</code>.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Button size='mini' body='Mini button' margin='right'/>
<Button size='mini' body='Mini button' context='primary'/><br />

<Button size='small' body='Small button' margin='right'/>
<Button size='small' body='Small button' context='primary'/><br />

<Button body='Default button'/>
<Button body='Default button' context='primary'/><br />

<Button size='large' body='Large button' margin='right'/>
<Button size='large' body='Large button' context='primary'/><br />

`}
      </Codeblock>
    </section>


    <section>
      <h2>Button blocks</h2>
      <p>
        To create a full witth Button add the <code>block</code> prop
        to the buttton component.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`
<Button block body='Button' margin='smallBottom' />
<Button block body='Button' context='primary'/>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Button dropdown</h2>
      <p>
        Coming soon...
      </p>

    </section>


    <section>
      <h2>Button Props</h2>
      <p>
        <code>&lt;Button&gt;</code> props and their types.
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
              <code>body</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>block</code>
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              <code>context</code>
            </td>
            <td>oneOf <br /> primary, success, danger or link</td>
          </tr>
          <tr>
            <td>
              <code>disabled</code>
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              <code>onClick</code>
            </td>
            <td>func</td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>oneOf <br /> mini small or large</td>
          </tr>
          <tr>
            <td>
              <code>type</code>
            </td>
            <td>oneOf <br /> button close or link</td>
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


export default ButtonDoc;
