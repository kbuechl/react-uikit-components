'use strict';

import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Offcanvas from '../components/react-uikit-offcanvas';


const OffcanvasDoc = (props) => (
  <div>
    <section>
      <h1>Offcanvas</h1>
      <p>
        Creates a smooth off-canvas sidebar that slides in and out of the page.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-offcanvas'>react-uikit-offcanvas</a> on github.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <Codeblock lang='xml'>
      {`npm install react-uikit-offcanvas --save;

      // ES6
      import Offcanvas from 'react-uikit-offcanvas';

      // ES5
      var Offcanvas = require('react-uikit-offcanvas').default`}
      </Codeblock>

      <hr className="uk-article-divider" />

      <h3 className='example'>Example</h3>
      <Offcanvas>
        This is an offcanvas component
      </Offcanvas>

      <Codeblock lang='xml'>
{`
`}
      </Codeblock>

    </section>


    <section>
      <h2>Offcanvas Props</h2>
      <p>
        See Base for additional utility props.
      </p>
    </section>

  </div>
);


export default OffcanvasDoc;
