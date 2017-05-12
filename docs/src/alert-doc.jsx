import React from 'react';
import Alert from 'react-uikit-alert';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Button from 'react-uikit-button';
import uikit from 'react-uikit-base';
import velocity from 'velocity-animate';


const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [1, 0.5],
      translateX: [0, -300]
    },
    {display: 'block'}
  );
};


const handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [0, 1],
      translateX: [-300, 0]
    },
    {display: 'block'}
  );
};


const AlertDoc = (props) => (
  <div>
    <section>
      <h1>Alert</h1>
      <p className='uk-article-lead'>
        Defines styles for success, warning and error messages.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-alert'>react-uikit-alert</a> on github.
      </p>
    </section>


    <section>
      <h2>Usage</h2>
      <Codeblock>
{`npm install react-uikit-alert --save;

// ES6
import Alert from 'react-uikit-alert';

// ES5
var Alert = require('react-uikit-alert').default;
`}
      </Codeblock>


      <p>
        The alert component creates an alert box.
      </p>

      <p>
        To add a close button add the <code>close</code> prop with a callback.
        The kitid as well as the event will be passed to the callback alllowing for things such as animations.
      </p>
      <p>
        By default Alert components are set to display none. Add the <code>show</code> to
        make the component visible.
      </p>
      <h3 className='example'>Example</h3>

      <Button
        body='Open Alert'
        onClick={(e, kitid) => handleAlertOpen(e, 'alert1')}
      />

    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Alert>


      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [1, 0.5],
      translateX: [0, -300]
    },
    {display: 'block'}
  );
};

const handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [0, 1],
      translateX: [-300, 0]
    },
    {display: 'block'}
  );
};

...

<Button
  body='Open Alert'
  onClick={(e, kitid) => handleAlertOpen(e, 'alert1')}
/>

<Alert show close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Alert>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Alert contexts</h2>
      <p>
        To change the context of an alert add <code>context='success'</code>, <code>context='warning'</code>,
        or <code>context='danger'</code> prop.
      </p>

      <h3 className='example'>Example</h3>
      <Alert show context='success'>
        To indicate success or a positive message add the <code>context='success'</code> prop.
      </Alert>
      <Alert show context='warning'>
        To indicate a message containing a warning add the <code>context='warning'</code> prop.
      </Alert>
      <Alert show context='danger'>
        To indicate an important message add the <code>context='danger'</code> prop.
      </Alert>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Alert show context='success'>
To indicate success or a positive message add the <code>context='success'</code> prop.
</Alert>
<Alert show context='warning'>
To indicate a message containing a warning add the <code>context='warning'</code> prop.
</Alert>
<Alert show context='danger'>
To indicate an important message add the <code>context='danger'</code> prop.
</Alert>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Alert size</h2>
      <p>
        To increase the spacing in an alert add the <code>large</code> prop to the alert component.
      </p>

      <h3 className='example'>Example</h3>
      <Alert show large >
        <h1>Important notice</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Alert>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Alert show large >
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
</Alert>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Alert Props</h2>

      <p>
        See Base for additional utility props.
      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td className='uk-text-left'>
              close
            </td>
            <td className='uk-text-left'>func</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              context
            </td>
            <td className='uk-text-left'>
              oneOf <br />
              success, warning or danger
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              large
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              show
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);


export default AlertDoc;
