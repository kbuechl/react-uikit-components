'use strict';


import React from 'react';
import Button from '../../react-uikit-button/lib/button';
import ButtonGroup from '../../react-uikit-button-group/lib/button-group';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';

const ButtonGroupDoc = (props) => (
  <div>
    <section>
      <h1>Button Group</h1>
      <p>
        Easily create nicely looking group buttons.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <p>
        <code>npm install react-uikit-button-group --save;</code>
      </p>
      <p>
        ES6 <br />
      <code>import ButtonGroup from 'react-uikit-button-group';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var ButtonGroup = require&#40;'react-uikit-button-group'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <p>
        See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
      </p>

      <hr/>
    </section>


    <section>
      <h2>Button group</h2>
      <p>
        To create a Button group place the Buttons inside a <code>ButtonGroup</code> compoment
        to the buttton component.
      </p>

      <h3>Example</h3>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<ButtonGroup display='block' margin='smallBottom'>
<Button body='Link' type='link' />
<Button body='Button'/>
<Button body='Button'/>
</ButtonGroup>

<ButtonGroup display='block' margin='smallBottom'>
<Button body='Link'   context='primary' type='link' />
<Button body='Button' context='primary'/>
<Button body='Button' context='primary'/>
</ButtonGroup>

<ButtonGroup display='block' margin='smallBottom'>
<Button body='Link'   context='success' type='link' />
<Button body='Button' context='success'/>
<Button body='Button' context='success'/>
</ButtonGroup>

<ButtonGroup  display='block' margin='smallBottom'>
<Button body='Link'   context='danger' type='link' />
<Button body='Button' context='danger'/>
<Button body='Button' context='danger'/>
</ButtonGroup>
`}
      </Codeblock>
    </section>

    <section>
      <h2>checkbox button</h2>
      <p>
        Coming soon...
      </p>

    </section>

    <section>
      <h2>Radio buttons</h2>
      <p>
        Coming soon...
      </p>

    </section>


    <section>
      <h2>Button Group Props</h2>
      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
      </p>

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


export default ButtonGroupDoc;
