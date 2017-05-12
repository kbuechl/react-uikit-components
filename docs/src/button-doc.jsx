'use strict';


import React from 'react';
import Button from 'react-uikit-button';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';


const ButtonDoc = (props) => {
  return <div>
    <section>
      <h1>Button</h1>
      <p>
        Easily create nice looking buttons, which come in different styles.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-button'>react-uikit-button</a> on github.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <Codeblock>
{`npm install react-uikit-button --save;

// ES6
<code>import Button from 'react-uikit-button';

// ES5
var Button = require('react-uikit-button').default;`}
      </Codeblock>


      <hr/>

      <p>
        The Button component creates either a button,
        link, submit or a close button by setting the <code>type</code>.
      </p>

      <p>
        By defualt the Button component will create a button if no type is provided.
      </p>

      <h3 className='example'>Example</h3>
      <Button body='Button' margin='bottom right'/>
      <Button body='Link' type='link' margin='bottom right'/>
      <Button body='Submit' type='submit' margin='bottom right'/>
      <Button body='Disabled' disabled margin='bottom right'/>
      <Button type='close'/>

      <h3 className='code'>Code</h3>
      <Codeblock>
{`<Button body='Link' type='link' margin='bottom right'/>
<Button body='Button' margin='bottom right'/>
<Button body='Disabled' disabled margin='bottom right'/>
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
              De-emphasizes to look like a link while maintaining button behavior.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>
      <Button context='primary' body='Primary' margin='bottom right'/>
      <Button context='success' body='Success' margin='bottom right'/>
      <Button context='danger' body='Danger' margin='bottom right'/>
      <Button context='link' body='Link' type='link'/>


      <h3 className='code'>Code</h3>
      <Codeblock>
{`<Button context='primary' body='Primary' margin='bottom right'/>
<Button context='success' body='Success' margin='bottom right'/>
<Button context='danger' body='Danger' margin='bottom right'/>
<Button context='link' body='Link' type='link'/>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Button sizes</h2>
      <p>
        To change the size of a Button set the <code>size</code> prop
        to mini, small, or large.
      </p>

      <h3 className='example'>Example</h3>
      <Button size='mini' body='Mini button' margin='right bottom'/>
      <Button size='mini' body='Mini button' context='primary' margin='bottom'/><br />

      <Button size='small' body='Small button' margin='right bottom'/>
      <Button size='small' body='Small button' context='primary' margin='bottom'/><br />

      <Button body='Default button' margin='right bottom'/>
      <Button body='Default button' context='primary' margin='bottom'/><br />

      <Button size='large' body='Large button' margin='right bottom'/>
      <Button size='large' body='Large button' context='primary' margin='bottom'/><br />


      <h3 className='code'>Code</h3>
      <Codeblock>
{`<Button size='mini' body='Mini button' margin='right bottom'/>
<Button size='mini' body='Mini button' context='primary' margin='bottom'/><br />

<Button size='small' body='Small button' margin='right bottom'/>
<Button size='small' body='Small button' context='primary' margin='bottom'/><br />

<Button body='Default button' margin='right bottom'/>
<Button body='Default button' context='primary' margin='bottom'/><br />

<Button size='large' body='Large button' margin='right bottom'/>
<Button size='large' body='Large button' context='primary' margin='bottom'/><br />
`}
      </Codeblock>
    </section>


    <section>
      <h2>Button blocks</h2>
      <p>
        To create a full width button add the <code>block</code> prop
        to the buttton component.
      </p>

      <h3 className='example'>Example</h3>
      <Button block body='Button' margin='smallBottom' />
      <Button block body='Button' context='primary'/>

      <h3 className='code'>Code</h3>
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
        Buttons can also be used to trigger a dropdown.
        See button dropdown in Dropdown component for more details.
      </p>

    </section>


    <section>
      <h2>Button Props</h2>
      <p>
        See Base for additional utility props.
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
              body
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              block
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              context
            </td>
            <td>oneOf <br /> primary, success, danger or link</td>
          </tr>
          <tr>
            <td>
              disabled
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              size
            </td>
            <td>oneOf <br /> mini small or large</td>
          </tr>
          <tr>
            <td>
              type
            </td>
            <td>oneOf <br /> button close or link</td>
          </tr>
        </tbody>
      </Table>
    </section>
  </div>;
};


export default ButtonDoc;
