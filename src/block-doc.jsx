'use strict';

import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Note from 'react-uikit-note';
import Table from 'react-uikit-table';
import Block from 'react-uikit-block';
import Grid from 'react-uikit-grid';
import Panel from 'react-uikit-panel';


const BlockDoc = (props) => (
  <div>
    <section>
      <h1>Block</h1>
      <p>
        Separate content sections by bundling them in blocks.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-block'>react-uikit-block</a> on github.
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <Codeblock>
{`npm install react-uikit-block --save;

// ES6
import Block from 'react-uikit-block';

// ES5
var Block = require('react-uikit-block').default;`}
      </Codeblock>

      <hr className="uk-article-divider" />

      <h3 className='example'>Example</h3>
      <Block context='muted'>
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
      </Block>

      <h3 className='code'>Code</h3>
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
        To put the Block in to a container use the <code>container</code> prop.
      </p>

      <h3 className='example'>Example</h3>

        <Block context='muted' container >
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
        </Block>


      <h3 className='code'>Code</h3>
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

      <h3 className='example'>Example</h3>
      <Block context='default' container>
      <h4>Default</h4>
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
      </Block>

      <Block context='muted' container>
      <h4>Muted</h4>
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
      </Block>

      <Block context='primary' container contrast >
      <h4>Primary</h4>
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
      </Block>

      <Block context='secondary' container contrast >
      <h4>Secondary</h4>
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
      </Block>

      <h3 className='code'>Code</h3>
      <Codeblock scroll='text'>
{`<Block context='default' container>
<h4>Default</h4>
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
</Block>

<Block context='muted' container>
<h4>Muted</h4>
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
</Block>

<Block context='primary' container contrast >
<h4>Primary</h4>
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
</Block>

<Block context='secondary' container contrast >
<h4>Secondary</h4>
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

      <Note badge='NOTE'>
        To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.
      </Note>
    </section>


    <section>
      <h2>Block large</h2>
      <p>
        To add the body in a container use the <code>container</code> prop.
      </p>

      <h3 className='example'>Example</h3>
        <Block context='secondary' container contrast large >
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
        </Block>

      <h3 className='code'>Code</h3>
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
              context
            </td>
            <td>enums</td>
          </tr>
          <tr>
            <td>
              container
            </td>
            <td colSpan='2'>oneOf <br />
            default, muted, primary, secondary</td>
          </tr>
          <tr>
            <td>
              contrast
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              large
            </td>
            <td>bool</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);


export default BlockDoc;
