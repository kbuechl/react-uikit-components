'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Grid from '../../react-uikit-grid/lib/grid';
import Overlay from '../../react-uikit-overlay/lib/overlay';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';


export default class OverlayHandler extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Overlay</h1>
        <p className='uk-article-lead'>
          Easily createresponsive images.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-overlay --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Overlay from 'react-uikit-overlay';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Overlay = require&#40;'react-uikit-overlay'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note:'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <p>
          See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
        </p>

        <hr/>

        <h3>Example</h3>

        <Codeblock>
  {
`<Overlay  width='300px' height='250px' src='images/placeholder_600x400.svg' >
  <h3>Title</h3>
  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
</Overlay>
  `}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay background</h1>
        <p>

        </p>

        <h3>Example</h3>

        <Codeblock>
{
`<Overlay background  width='300px' height='250px' src='images/placeholder_600x400.svg' >
  <h3>Title</h3>
  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
</Overlay>
`}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay caption</h1>
        <p>

        </p>

        <h3>Example</h3>

        <Codeblock>
{
`<Overlay cols='1-2' caption='top' background width='300px' height='200px' src='images/placeholder_600x400.svg' margin='bottom'>
  Lorem ipsum dolor sit amet.
</Overlay>
<Overlay cols='1-2' caption='bottom' background width='300px' height='200px' src='images/placeholder_600x400.svg' margin='bottom'>
  Lorem ipsum dolor sit amet.
</Overlay>
<Overlay cols='1-2' caption='left' background width='300px' height='200px' src='images/placeholder_600x400.svg' >
  Lorem ipsum dolor sit amet.
</Overlay>
<Overlay cols='1-2' caption='right' background width='300px' height='200px' src='images/placeholder_600x400.svg' >
  Lorem ipsum dolor sit amet.
</Overlay>
`}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay icon</h1>
        <p>

        </p>

        <h3>Example</h3>

        <Codeblock>
  {
  `<Overlay icon background  width='300px' height='250px' src='images/placeholder_600x400.svg' />
  `}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay image</h1>
        <p>

        </p>

        <h3>Example</h3>

        <Codeblock>
  {
  `<Overlay icon background  width='300px' height='250px' src='images/placeholder_600x400.svg' />
  `}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay and flex</h1>
        <p>
          Coming soon...
        </p>
      </section>


      <section>
        <h1>Overlay anchor</h1>
        <p>
          Coming soon...
        </p>
      </section>


      <section>
        <h2>Overlay Props</h2>
        <p>
          <code>&lt;Overlay&gt;</code> props and their types.
        </p>
        <p>
          See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
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
                <code>alt</code>
              </td>
              <td>string</td>
            </tr>
            <tr>
              <td>
                <code>cover</code>
              </td>
              <td>Bool</td>
            </tr>
            <tr>
              <td>
                <code>height</code>
              </td>
              <td>string</td>
            </tr>
            <tr>
              <td>
                <code>large</code>
              </td>
              <td>object<br /> {`{width, height, src}`}</td>
            </tr>
            <tr>
              <td>
                <code>medium</code>
              </td>
              <td>object<br /> {`{width, height, src}`}</td>
            </tr>
            <tr>
              <td>
                <code>small</code>
              </td>
              <td>object<br /> {`{width, height, src}`}</td>
            </tr>
            <tr>
              <td>
                <code>src</code>
              </td>
              <td>string</td>
            </tr>
            <tr>
              <td>
                <code>width</code>
              </td>
              <td>string</td>
            </tr>
            <tr>
              <td>
                <code>xlarge</code>
              </td>
              <td>object<br /> {`{width, height, src}`}</td>
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
    </div>;
  }
}
