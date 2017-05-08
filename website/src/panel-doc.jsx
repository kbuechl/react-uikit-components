'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Grid from 'react-uikit-grid';
import Panel from 'react-uikit-panel';
import Table from 'react-uikit-table';


const PanelDoc = (props) => (
  <div>
    <section>
      <h1>Panel</h1>
        <p className='uk-article-lead'>
          Create layout boxes with different styles.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-panel'>react-uikit-panel</a> on github.
        </p>
      </section>


      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-panel --save;

// ES6
mport Panel from 'react-uikit-panel';

// ES5
var Panel = require('react-uikit-panel').default;`}
        </Codeblock>

        <hr className="uk-article-divider" />
      <p>
        The Panel component consists of the panel itself, the panel title and a
        panel badge. To prevent redundant white space, top and bottom margins are
        removed from the panel's content.
      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='uk-text-left'><code>tilte</code></td>
            <td className='uk-text-left'>Add <code>title</code> prop to add the panel title.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>badge</code></td>
            <td className='uk-text-left'>
              Add the <code>badge</code> prop to add a panel badge.<br /><br />

              Add <code>badge='value'</code> to set the body of the badge to the value of the string.<br /><br />

              Add <code>badge=&#123;&#123;body: 'value', context: 'danger'&#125;&#125;</code>
              to set the body and the context of the badge. <br />
              Badge context can be success, warning or danger.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>
      <Grid medium='1-3' large='1-3'>
        <Panel title='Title' badge={{body: 'hot', context: 'danger'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`Grid medium='1-3' large='1-3'>
  <Panel title='Title' badge={{body: 'hot', context: 'danger'}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Panel types</h2>
      <p>

      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='uk-text-left'><code>block</code></td>
            <td className='uk-text-left'>
              Renders the panel as a block.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>link</code></td>
            <td className='uk-text-left'>
              Renders the panel inside of a block. The <code>link='url/path'</code> is required to set the link\'s address.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>
      <Grid>
        <Panel colMedium='1-3' margin='bottom' box title='Block panel' type='block'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>

        <Panel colMedium='1-3' box title='Link panel' type='link' link=''>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid>
  <Panel colMedium='1-3' margin='bottom' box title='Block panel' type='block'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>

  <Panel colMedium='1-3' box title='Link panel' type='link' link=''>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Panel box</h2>
      <p>
        By default the Panel has no styling. The panel box places a box around a panel.
      </p>

      <h3 className='example'>Example</h3>
      <Grid medium='1-3' large='1-3' indent>
        <Panel box title='Title' badge={{body: 'hot', context: 'danger'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid medium='1-3' large='1-3' indent>
  <Panel box title='Title' badge={{body: 'hot', context: 'danger'}}>
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

      <h3 className='example'>Example</h3>
      <Grid>
        <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>

        <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel colMedium='1-3' box title='Title' context='primary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid>
  <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>

  <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel colMedium='1-3' box title='Title' context='primary'>
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

      <h3 className='example'>Example</h3>
        <Grid>
          <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Panel>

          <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Panel>
          <Panel colMedium='1-3' box title='Title' context='secondary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Panel>
        </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid>
  <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>

  <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel colMedium='1-3' box title='Title' context='secondary'>
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
        This comes in handy when using the panel as a link.
      </p>

      <h3 className='example'>Example</h3>
      <Grid indent>
        <Panel margin='bottom' title='Title' link='#' hover>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel margin='bottom' title='Title' link='#' hover>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel title='Title' link='#' hover>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid indent>
  <Panel margin='bottom' title='Title' link='#' hover>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel margin='bottom' title='Title' link='#' hover>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel title='Title' link='#' hover>
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

      <h3 className='example'>Example</h3>
      <Grid>
        <Panel header colMedium='1-3' title='Title' margin='bottom' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel header colMedium='1-3' title='Title' margin='bottom' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel header colMedium='1-3' title='Title' margin='bottom' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid>
  <Panel header colMedium='1-3' title='Title' margin='bottom' >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel header colMedium='1-3' title='Title' margin='bottom' >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel header colMedium='1-3' title='Title' margin='bottom' >
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
        Add the <code>space</code> prop to increase the spacing around the panel content.
      </p>

      <h3 className='example'>Example</h3>
      <Grid>
        <Panel space box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel space box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel space box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>
      <Grid>
        <Panel space box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel space box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel space box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
        {
`<Grid>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
</Grid>
<Grid>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>
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
        without any spacing, just add the <code>teaser=&#123;&#123;src: , alt: &#125;&#125;</code> prop.
      </p>

      <h3 className='example'>Example</h3>
      <Grid>
        <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}}
          box colMedium='1-3' title='Title' margin='bottom'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}}
          box colMedium='1-3' title='Title' margin='bottom'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}}
          box colMedium='1-3' title='Title' margin='bottom'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid>
  <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}}
    box colMedium='1-3' title='Title' margin='bottom'
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}}
    box colMedium='1-3' title='Title' margin='bottom'
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}}
    box colMedium='1-3' title='Title' margin='bottom'
  >
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
        Easily apply an icon from UIkit <a href='http://getuikit.com/docs/icon.html'>Icon</a> to your panel by
        adding <code>icon='icon-name'</code>.
      </p>

      <h3 className='example'>Example</h3>
      <Grid medium='1-3' large='1-3'>
        <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
        <Panel icon='user' box colMedium='1-3' title='Title'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid medium='1-3' large='1-3'>
  <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Panel>
  <Panel icon='user' box colMedium='1-3' title='Title'>
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
        See base component for additional utility props.
      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              badge
            </td>
            <td className='uk-text-left'>string or object <br />{`{body , context}`}</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              box
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              context
            </td>
            <td className='uk-text-left'>oneOf<br /> primary or secondary</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              header
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              hover
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              icon
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              link
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              space
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              teaser
            </td>
            <td className='uk-text-left'>object<br /> {`{src, alt}`}</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              type
            </td>
            <td className='uk-text-left'>oneOf<br />block (default) or link</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default PanelDoc;
