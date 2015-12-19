'use strict';


import React from 'react';
import Button from '../../react-uikit-button/lib/button';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Panel from '../../react-uikit-panel/lib/panel';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';

const ButtonDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Button</h1>
      <p className='uk-article-lead'>
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

      <hr className='uk-article-divider' />

      <p>
        The Button component creates either a <code>button</code>,
        a <code>link</code> or a <code>close</code> button by settiing the<code>type</code>.
      </p>

      <p>
        By defualt the Button component will create a button if no type is provided.
      </p>

      <h3 className='example'>Example</h3>
      <Panel>
        <Button body='Button' margin='right'/>
        <Button body='Link' type='link' margin='right'/>
        <Button body='Disabled' disabled margin='right'/>
        <Button type='close'/>
      </Panel>
      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
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
            <th className='uk-text-left'>Example</th>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              <Button context='primary' body='Primary' />
            </td>
            <td className='uk-text-left'>
              <code>context='primary'</code>
            </td>
            <td className='uk-text-left'>
              Emphasizes to identify the primary action in a set of buttons.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <Button context='success' body='Success' />
            </td>
            <td className='uk-text-left'>
              <code>context='success'</code>
            </td>
            <td className='uk-text-left'>
              Indicates a successful or positive action.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <Button context='danger' body='Danger' />
            </td>
            <td className='uk-text-left'>
              <code>context='danger'</code>
            </td>
            <td className='uk-text-left'>
                Indicates a dangerous or negative action.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <Button context='link' body='Link'type='link' />
            </td>
            <td className='uk-text-left'>
              <code>context='link'</code>
            </td>
            <td className='uk-text-left'>
              Deemphasizes to look like a link while maintaining button behavior.
            </td>
          </tr>
        </tbody>
      </Table>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
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

      <h3 className='example'>Example</h3>

      <Panel>
        <Button size='mini' body='Mini button' margin='right'/>
        <Button size='mini' body='Mini button' context='primary'/><br />
      </Panel>
      <Panel>
          <Button size='small' body='Small button' margin='right'/>
          <Button size='small' body='Small button' context='primary'/><br />
      </Panel>
      <Panel>
        <Button body='Default button' margin='right'/>
        <Button body='Default button' context='primary'/><br />
      </Panel>
      <Panel>
        <Button size='large' body='Large button' margin='right'/>
        <Button size='large' body='Large button' context='primary'/><br />
      </Panel>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
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

      <h3 className='example'>Example</h3>

      <Panel>
        <Button size='mini' body='Mini button' margin='right'/>
        <Button size='mini' body='Mini button' context='primary'/><br />
      </Panel>
      <Panel>
          <Button size='small' body='Small button' margin='right'/>
          <Button size='small' body='Small button' context='primary'/><br />
      </Panel>
      <Panel>
        <Button body='Default button'/>
        <Button body='Default button' context='primary'/><br />
      </Panel>
      <Panel>
        <Button size='large' body='Large button 'margin='right'/>
        <Button size='large' body='Large button' context='primary'/><br />
      </Panel>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Panel>
<Button size='mini' body='Mini button' margin='right'/>
<Button size='mini' body='Mini button' context='primary'/><br />
</Panel>
<Panel>
  <Button size='small' body='Small button' margin='right'/>
  <Button size='small' body='Small button' context='primary'/><br />
</Panel>
<Panel>
<Button body='Default button'/>
<Button body='Default button' context='primary'/><br />
</Panel>
<Panel>
<Button size='large' body='Large button' margin='right'/>
<Button size='large' body='Large button' context='primary'/><br />
</Panel>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Button blocks</h2>
      <p>
        To create a full witth Button add the <code>block</code> prop
        to the buttton component.
      </p>

      <h3 className='example'>Example</h3>

      <Panel>
        <Button block body='Button' margin='smallBottom' />
        <Button block body='Button' context='primary'/>
      </Panel>
      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
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

      <h3 className='example'>Example</h3>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`
`}
      </Codeblock>
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
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              <code>body</code>
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>block</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>context</code>
            </td>
            <td className='uk-text-left'>oneOf <br /> primary, success, danger or link</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>disabled</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>onClick</code>
            </td>
            <td className='uk-text-left'>func</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>size</code>
            </td>
            <td className='uk-text-left'>oneOf <br /> mini small or large</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>type</code>
            </td>
            <td className='uk-text-left'>oneOf <br /> button close or link</td>
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
