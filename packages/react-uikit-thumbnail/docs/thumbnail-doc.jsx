'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';

const ThumbnailDoc = (props) => (
  <div>
    <section>
      <h1>Thumbnail</h1>
      <p>
        Create different thumbnail images, which come in various styles and sizes.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-article --save;</code>
        </p>
      <p>
        ES6 <br />
      <code>import Article from 'react-uikit-article';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Article = require&#40;'react-uikit-article'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note:'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <p>
        See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
      </p>

      <hr />

      <p>
        Thumbnail compenent creates a thumbnail around the Img compenent.
      </p>
      <p>
        There are three types of thumblnail, block, link and figure. Block is
        the defualt type. To change the type of thumbnail added
        the <code>type</code> prop and the respective type.
      </p>

      <h3 className='example'>Example</h3>

      <Codeblock syntax='xml'>
{`<Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
<Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
<Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />
`}
      </Codeblock>
    </section>

    <section>
      <h2>Thumbnail caption</h2>
      <p>
        To add a caption, simply add it as a child of the thumbnail.
      </p>

      <h3 className='example'>Example</h3>

      <Codeblock syntax='xml'>
{`<Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>
Caption <code>div</code>
</Thumbnail>
<Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>
Caption <code>link</code>
</Thumbnail>
<Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>
Caption <code>figure</code>
</Thumbnail>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Thumbnail sizes</h2>
      <p>

      </p>

      <hr />
      <p>

      </p>

      <h3 className='example'>Example</h3>

      <Codeblock syntax='xml'>
{`<Thumbnail size='large' src='docs/images/placeholder_600x400.svg'>
<code>large</code>
</Thumbnail>
<Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'>
<code>medium</code>
</Thumbnail>
<Thumbnail size='small' src='docs/images/placeholder_600x400.svg'>
<code>small</code>
</Thumbnail>
<Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'>
<code>mini</code>
</Thumbnail>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Thumbnail Props</h2>
      <p>
        <code>&lt;Thumbnail&gt;</code> props and their types.
      </p>
      <p>
        See <a href='/https://github.com/otissv/react-uikit-img'>Img</a> and <a href='/https://github.com/otissv/react-uikit-base'>base</a> componets
        addtional props.
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
              <code>imgid</code>
            </td>
            <td>
              string<br/>
              Identifier for Img component. If none provided one will be generateded.
            </td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>
              oneOf<br />
             large, medium, small, mini or expand
            </td>
          </tr>
          <tr>
            <td>
              <code>type</code>
            </td>
            <td>
              oneOf<br />
              block, figure or link.
              Default is block.
            </td>
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

export default ThumbnailDoc;
