'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Placeholder from 'react-uikit-placeholder';
import Table from 'react-uikit-table';
import Note from 'react-uikit-note';

const PlaceholderDoc = (props) => (
  <div>
    <section>
      <h1>Placeholder</h1>
        <p className='uk-article-lead'>
          Create a placeholder space that can be used for uploading files via drag and drop.
        </p>

        <Note badge='note'>
          Placeholder component does not include any drag and drop functionality
        </Note>

        <p>
          <a href='https://github.com/otissv/react-uikit-placeholder'>react-uikit-placeholder</a> on github.
        </p>
      </section>


      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-placeholder --save;

// ES6
mport Placeholder from 'react-uikit-placeholder';

// ES5
var Placeholder = require('react-uikit-placeholder').default;`}
        </Codeblock>

        <hr className="uk-article-divider" />

      <h3 className='example'>Example</h3>
        <Placeholder body='Placeholder' textAlign='center'/>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Placeholder  body='Placeholder' textAlign='center'/>`}
      </Codeblock>
    </section>


    <section>
      <h2>Large placeholder</h2>


      <h3 className='example'>Example</h3>
      <Placeholder large  body='Large placeholder' textAlign='center'/>


      <h4 className='code'>Code</h4>

      <Codeblock syntax='xml'>
{`<Placeholder large  body='Large placeholder' textAlign='center' />`}
      </Codeblock>
    </section>


    <section>
      <h2>Placeholder Props</h2>
      <p>
        See base component for additional utility props.
      </p>

      <Table head={['Prop', 'Type']} body={
        [{ prop: 'large', type: 'bool' }] }
      />
    </section>

  </div>
);

export default PlaceholderDoc;
