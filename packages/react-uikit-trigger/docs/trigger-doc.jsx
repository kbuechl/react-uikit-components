'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';


export default class TriggerDoc extends React.Component {
  render () {
    return <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.3/css/uikit.almost-flat.min.css" />
      <section>
        <h1>React Uikit Trigger</h1>
        <p>
          <a href='http://otissv.github.io/react-uikit-components/'>http://otissv.github.io/react-uikit-components</a> for docs.
        </p>
      </section>

      <section>
        <h2>Usage</h2>

        <Codeblock>
{`npm install react-uikit-trigger --save;

// ES6
import uikit from 'react-uikit-trigger';

// ES5
var Dropdown = require('react-uikit-trigger');
`}
        </Codeblock>

      </section>


    </div>;
  }
}
