'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Note from '../../react-uikit-note/lib/note';
import Table from '../../react-uikit-table/lib/table';


export default class BlockHandler extends React.Component {
  render () {
    return <div>

      <section>
        <h1>Block</h1>
        <p>
          Separate content sections by bundling them in blocks with different styles.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-base --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Block from 'react-uikit-block';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Block = require&#40;'react-uikit-block'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note:'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <p>
          See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
        </p>

          <hr className="uk-article-divider" />

        <h3>Example</h3>

        <Codeblock scroll='text'>
{`<Block context='muted'>
  <h4>Block</h4>
  <Grid widths='1-3'>
    <Panel>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
  </Grid>
</Block>`}
        </Codeblock>
      </section>

      <section>
        <h2>Block container</h2>
        <p>
          To add the body in a container use the <code>container</code> prop.
        </p>

        <h3>Example</h3>

        <Codeblock scroll='text'>
{`<Block context='muted' container >
  <h4>Block</h4>
  <Grid widths='1-3'>
    <Panel>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
  </Grid>
</Block>`}
        </Codeblock>
      </section>


      <section>
        <h2>Block Context</h2>
        <p>
          To apply different background colors, add one of the following values
          for the <code>context</code> prop.
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
              <td><code>default</code></td>
              <td>Add the default background color, usually white or similar.</td>
            </tr>
            <tr>
              <td><code>muted</code></td>
              <td>Adds a light background color.</td>
            </tr>
            <tr>
              <td><code>primary</code></td>
              <td>Adds a primary background color.</td>
            </tr>
            <tr>
              <td><code>secondary</code></td>
              <td>Adds a another background color, usually a dark one.</td>
            </tr>
          </tbody>
        </Table>

        <h3>Example</h3>

        <Codeblock scroll='text'>
{`<Block context='primary' container contrast >
  <h4>Block</h4>
  <Grid widths='1-3'>
    <Panel>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
  </Grid>
</Block>`}
        </Codeblock>

        <Note badge='NOTE:'>
          To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.
        </Note>
      </section>


      <section>
        <h2>Block large</h2>
        <p>
          To add the body in a container use the <code>container</code> prop.
        </p>

        <h3>Example</h3>

        <h3>Code</h3>
        <Codeblock scroll='text'>
{`<Block context='secondary' container contrast large >
  <h4>Block</h4>
  <Grid widths='1-3'>
    <Panel>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>

    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
  </Grid>
</Block>`}
        </Codeblock>
      </section>

      <section>
        <h2>Block Props</h2>
        <p>
          <code>&lt;Block&gt;</code> props and their types.
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
                <code>context</code>
              </td>
              <td>enums</td>
            </tr>
            <tr>
              <td>
                <code>container</code>
              </td>
              <td colSpan='2'>oneOf <br />
              default, muted, primary, secondary</td>
            </tr>
            <tr>
              <td>
                <code>contrast</code>
              </td>
              <td>bool</td>
            </tr>
            <tr>
              <td>
                <code>large</code>
              </td>
              <td>bool</td>
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

    </div>;
  }
}
