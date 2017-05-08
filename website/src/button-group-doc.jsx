'use strict';

import React from 'react';
import Button from 'react-uikit-button';
import ButtonGroup from 'react-uikit-button-group';
import Codeblock from 'react-uikit-codeblock';


const ButtonGroupDoc = (props) => (
  <div>
    <section>
      <h1>Button Group</h1>
      <p>
        Easily create nice looking group buttons.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-button-group'>react-uikit-button-group</a> on github.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <Codeblock>
{`npm install react-uikit-button-group --save;

// ES6
import ButtonGroup from 'react-uikit-button-group';

// ES5
var ButtonGroup = require('react-uikit-button-group').default;`}
      </Codeblock>
    </section>


    <section>
      <h2>Button group</h2>
      <p>
        To create a Button group place the Buttons inside a <code>ButtonGroup</code> component.
      </p>

      <h3>Example</h3>
        <ButtonGroup display='block' margin='smallBottom'>
          <Button body='Link' type='link' />
          <Button body='Button'/>
          <Button body='Button'/>
        </ButtonGroup>

        <ButtonGroup display='block' margin='smallBottom'>
          <Button body='Link' context='primary' type='link' />
          <Button body='Button' context='primary'/>
          <Button body='Button' context='primary'/>
        </ButtonGroup>

        <ButtonGroup display='block' margin='smallBottom'>
          <Button body='Link' context='success' type='link' />
          <Button body='Button' context='success'/>
          <Button body='Button' context='success'/>
        </ButtonGroup>

        <ButtonGroup display='block' margin='smallBottom'>
          <Button body='Link' context='danger' type='link' />
          <Button body='Button' context='danger'/>
          <Button body='Button' context='danger'/>
        </ButtonGroup>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<ButtonGroup display='block' margin='smallBottom'>
  <Button body='Link' type='link' />
  <Button body='Button'/>
  <Button body='Button'/>
</ButtonGroup>

<ButtonGroup display='block' margin='smallBottom'>
  <Button body='Link' context='primary' type='link' />
  <Button body='Button' context='primary'/>
  <Button body='Button' context='primary'/>
</ButtonGroup>

<ButtonGroup display='block' margin='smallBottom'>
  <Button body='Link' context='success' type='link' />
  <Button body='Button' context='success'/>
  <Button body='Button' context='success'/>
</ButtonGroup>

<ButtonGroup display='block' margin='smallBottom'>
  <Button body='Link' context='danger' type='link' />
  <Button body='Button' context='danger'/>
  <Button body='Button' context='danger'/>
</ButtonGroup>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Button dropdown</h2>
      <p>
        Buttons groups can also be used to create split buttons where one button handles
        the standard action while the other toggles a dropdown.
        See button dropdown in Dropdown component for more details.
      </p>

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

  </div>
);


export default ButtonGroupDoc;
