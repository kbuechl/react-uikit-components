'use strict';

import React from 'react';
import Codeblock from 'react-uikit-codeblock';


const CodeblockDoc = (props) => (
  <div>
    <section>
      <h1>Codeblock</h1>
      <p>
        Displays code inside of a block.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-codeblock'>react-uikit-codeblock</a> on github.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock lang='xml'>
{`npm install react-uikit-codeblock --save;
// ES6
import Codeblock from 'react-uikit-codeblock';
// ES5
var Codeblock = require('react-uikit-codeblock').default`}
        </Codeblock>

        <hr className="uk-article-divider" />
      <p>
        To use Codeblock component place backticks inside of braces and
        place the code inside of the backticks.
      </p>

      <p>
        For inline code use the html element <code>&lt;code&gt;</code>.
      </p>

      <h3 className='example'>Example</h3>

      <Codeblock lang='xml'>
{`<Codeblock>
{\`<div>...<div>\`};
</Codeblock>`}
      </Codeblock>


      <p>
        The <code>scroll</code> prop can be added to create a scrollable Codeblock.
      </p>

    </section>


    <section>
      <h2>Codeblock Props</h2>
      <p>
        See Base for additional utility props.
      </p>
    </section>

  </div>
);


export default CodeblockDoc;
