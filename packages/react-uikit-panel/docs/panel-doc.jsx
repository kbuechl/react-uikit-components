'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Note from '../../react-uikit-note/lib/note';
import Table from '../../react-uikit-table/lib/table';


const PanelDoc = (props) => (
  <div>
    <section>
      <h1>Panel</h1>
        <p className='uk-article-lead'>
          Create layout boxes with different styles.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-panel --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Panel from 'react-uikit-panel';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Panel = require&#40;'react-uikit-panel'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note:'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <hr/>
      <p>
        The Panel component consists of the panel itself, the panel title and a
        panel badge. To prevent redundant white space, top and bottom margins are
        removed from the panel's content.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th >Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td ><code>tilte</code></td>
            <td >Add this prop to a heading to create the panel title.</td>
          </tr>
          <tr>
            <td ><code>badge</code></td>
            <td >
              Add this prop to create a panel badge.<br /><br />

              <code>badge='value'</code>will set the body of the badge to the value of the string.<br /><br />

              Add <code>badge=&#123;&#123;body: 'value', context: 'danger'&#125;&#125;</code>
              to set the body and the context of the badge. Badge context can be success, warning or danger.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3>Example</h3>

      <Codeblock>
{`<Grid indent>
  <Panel margin='bottom' col='3-10' box title='Title' badge={{body: 'hot', context: 'danger'}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>

      <Note badge='NOTE:'>
        By default, a panel is blank and has no styling.
        That is why it is important to add a modifier props,
        which gives the panel some styling. In the examples
        the <code>&lt;Panel box&gt;</code> is used.
      </Note>
    </section>


    <section>
      <h2>Panel types</h2>
      <p>

      </p>

      <Table>
        <thead>
          <tr>
            <th >Prop</th>
            <th >Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td ><code>block</code></td>
            <td >
              Renders the panel as a block.
            </td>
          </tr>
          <tr>
            <td ><code>link</code></td>
            <td >
              Renders the panel inside of a block. The <code>link='url/path'</code> is requiured to set the links address.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3>Example</h3>

      <Codeblock>
    {`<Grid indent>
    <Panel margin='bottom' col='1-3' box title='Block panel' type='block'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Panel>
    <Panel margin='bottom' col='1-3' box title='Link panel' type='link' link=''>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Panel>
    </Grid>
    `}
      </Codeblock>
    </section>


    <section>
      <h2>Panel box primary</h2>
      <p>
        Add the <code>context='primary'</code> prop to modify the box panel to
        emphasize it by using a different color.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Grid indent>
  <Panel margin='bottom' col='1-3' box title='Title' context='primary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' context='primary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' context='primary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel box secondary</h2>
      <p>
        Add the <code>context='secondary'</code> prop to modify the box panel
        which will give it a white background.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Grid indent>
  <Panel margin='bottom' col='1-3' box title='Title' context='secondary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' context='secondary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' context='secondary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>





    <section>
      <h2>Panel hover</h2>
      <p>
        Add the <code>hover</code> prop to add a hover effect to the panel.
        This comes in handy when using the panel as an anchor.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Grid indent>
  <Panel margin='bottom' col='1-3' title='Title' link='#' hover>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' title='Title' link='#' hover>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' title='Title' link='#' hover>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Panel header</h2>
      <p>
        Add the <code>header</code> prop to separate the panel title
        and content with a horizontal line.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`
<Grid indent>
  <Panel margin='bottom' col='1-3' title='Title' header>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' title='Title' header>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' title='Title' header>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel space</h2>
      <p>
        Add the <code>header</code> prop increase the spacing around the panel content.
      </p>

      <h3>Example</h3>

      <Codeblock scroll='text'>
        {
`<Grid indent>
  <Panel margin='bottom' col='1-3' box title='Title' space>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' space>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' space>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
<Grid indent>
  <Panel margin='bottom' col='1-3' title='Title' space>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' title='Title' space>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' title='Title' space>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel divider</h2>
      <p>
        Add the <code>divider</code> prop to separate vertically stacked panels with lines.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`Grid>
<Panel margin='bottom' title='Title' divider>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Panel>
<Panel margin='bottom' title='Title' divider>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Panel>
<Panel margin='bottom' title='Title' divider>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Panel>
<Panel margin='bottom' title='Title' divider>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel box with teaser</h2>
      <p>
        To display an image inside a panel box that is attached to the border of the panel
        without any spacing, just add the <code>teaser=&#123;&#123;src: '', alt: ''&#125;&#125;</code> prop.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Grid indent>
  <Panel margin='bottom' col='1-3' box title='Title' teaser={{src: '../images/placeholder_600x400.svg', alt: 'placeholder image'}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' teaser={{src: '../images/placeholder_600x400.svg', alt: 'placeholder image'}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' teaser={{src: '../images/placeholder_600x400.svg', alt: 'placeholder image'}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel with icons</h2>
      <p>
        Easily apply an icon from our <a href='/icon'>Icon component'</a> to your panel by
        adding <code>icon='*'</code>.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Grid indent>
  <Panel margin='bottom' col='1-3' box title='Title' icon='user'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' icon='home'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' col='1-3' box title='Title' icon='bookmark'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel Props</h2>
      <p>
        <code>&lt;Panel&gt;</code> props and their types.
      </p>
      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
      </p>

      <Table>
        <thead>
          <tr>
            <th >Prop</th>
            <th >Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >
              <code>badge</code>
            </td>
            <td >string or object {`{body , context}`}</td>
          </tr>
          <tr>
            <td >
              <code>box</code>
            </td>
            <td >bool</td>
          </tr>
          <tr>
            <td >
              <code>context</code>
            </td>
            <td >oneOf "primary" or "secondary"</td>
          </tr>
          <tr>
            <td >
              <code>divider</code>
            </td>
            <td >bool</td>
          </tr>
          <tr>
            <td >
              <code>header</code>
            </td>
            <td >bool</td>
          </tr>
          <tr>
            <td >
              <code>hover</code>
            </td>
            <td >bool</td>
          </tr>
          <tr>
            <td >
              <code>icon</code>
            </td>
            <td >string</td>
          </tr>
          <tr>
            <td >
              <code>link</code>
            </td>
            <td >string</td>
          </tr>
          <tr>
            <td >
              <code>space</code>
            </td>
            <td >bool</td>
          </tr>
          <tr>
            <td >
              <code>teaser</code>
            </td>
            <td >object {`{src, alt}`}</td>
          </tr>
          <tr>
            <td >
              <code>type</code>
            </td>
            <td >oneOf "block" (default) or "link"</td>
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

export default PanelDoc;
