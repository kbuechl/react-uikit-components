'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Dropdown from '../lib/dropdown';
import Table from 'react-uikit-table';
import velocity from 'velocity-animate';


const animateIn = (element) => {
  velocity(element, {opacity: 1}, {display: 'block'}, 200);
};


const animateOut = (element) => {
  velocity(element, {opacity: 0}, { display: 'none' }, 200);
};


export default class TriggerDoc extends React.Component {
  render () {
    return <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.3/css/uikit.almost-flat.min.css" />
      <section>
        <h1>React Uikit Trigger</h1>
        <p className='uk-article-lead'>
          Defines different styles for list dropdownigations.
        </p>
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

        <hr className="uk-article-divider" />

      </section>


      <section>
        <Dropdown
          kitid='drop1'
          trigger={{
            body:'dropdown',
            animate: {in: animateIn, out: animateOut}
          }}
        >
          this is a drop down
        </Dropdown>
      </section>


    </div>;
  }
}
