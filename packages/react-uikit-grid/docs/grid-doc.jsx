'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Grid from '../../react-uikit-grid/lib/grid';
import Note from '../../react-uikit-note/lib/note';
import Panel from '../../react-uikit-panel/lib/panel';
import Table from '../../react-uikit-table/lib/table';


const GridHandler = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Grid</h1>
      <p className='uk-article-lead'>
        Create a fully responsive, fluid and nestable grid layout.
      </p>
      <p>
        The grid system of UIkit follows the mobile-first approach and
        accomodates up to 10 grid columns. It uses units with predefined classes
        inside each grid, which define the column col. It is also possible to
        combine the grid with classes from the Flex component, although it
        works only in modern browsers.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          ES6 <br />
        <code>import Grid from 'react-uikit-grid';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Grid = require&#40;'react-uikit-grid'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <hr className="uk-article-divider" />
      <p>
        To create the grid container, use the <code>&lt;Grid&gt;</code> component.
        A <code>&lt;ul&gt;</code> grid be creaed by adding <code>list</code> prop.
      </p>

      <p>
        Columns can be added by adding the <code>col</code> prop to any react uikit component.<br />
        See <a href='/https://github.com/otissv/react-uikit-base'>react uikit base</a>col values
      </p>

      <h3 className='example'>Example</h3>
      <Grid textAlign='center'>
        <Panel col='1-3' box>
          Col
        </Panel>
        <Panel col='1-3' box>
          Col
        </Panel>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-2' box>
          Col
        </Panel>
        <Panel col='1-2' box>
          Col
        </Panel>
        <Panel col='3-10' box>
          Col
        </Panel>
        <Panel col='7-10' box>
          Col
        </Panel>
      </Grid>


      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid textAlign='center'>
<Panel col='1-3' box>
  Col
</Panel>
<Panel col='1-3' box>
  Col
</Panel>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-2' box>
  Col
</Panel>
<Panel col='1-2' box>
  Col
</Panel>
<Panel col='3-10' box>
  Col
</Panel>
<Panel col='7-10' box>
  Col
</Panel>
</Grid>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Grid gutter</h2>
      <p>
        Grids automatically create a horizontal gutter between columns and a
        vertical one between two succeeding grids. By default, the grid gutter
        is wider on large screens.
      </p>

      <h3 className='example'>Example</h3>
      <Grid textAlign='center'>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid textAlign='center'>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>
</Grid>
`}
      </Codeblock>


      <hr className="uk-grid-divider"/>


      <h3>Medium gutter</h3>
      <p>
        To apply a medium sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.
      </p>

      <h4 className='example'>Example</h4>
      <Grid gutter='medium'>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>
      </Grid>
      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid gutter='medium'>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>
</Grid>
`}
      </Codeblock>


      <hr className="uk-grid-divider"/>


      <h3>Small gutter</h3>
      <p>
        To apply a small sized gutter between grid columns, just add the <code>gutter='small'</code> prop.
      </p>

      <h4 className='example'>Example</h4>
      <Grid gutter='small'>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>
    </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid gutter='small'>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>
</Grid>
`}
      </Codeblock>


      <hr className="uk-grid-divider"/>


      <h3>Collapse gutter</h3>
      <p>
        To remove the gutter entirely, just add the <code>gutter='collapse'</code> prop.
      </p>

      <h4 className='example'>Example</h4>
      <Grid gutter='collapse'>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid gutter='collapse'>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>
</Grid>

`}
      </Codeblock>
    </section>


    <section>
      <h2>Grid divider</h2>
      <p>
        Add the <code>divider</code> prop to separate grid columns with lines.
        To separate grids with a horizontal line, just add the class to a &lt;hr&gt; or &lt;div&gt;  element.
      </p>

      <h3 className='example'>Example</h3>
      <Grid textAlign='center' divider>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>
      </Grid>

      <hr className="uk-grid-divider"/>

      <Grid textAlign='center' divider>
        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>

        <Panel col='1-3' box>
          Col
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
        {
`<Grid textAlign='center' divider>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>
</Grid>

<hr className="uk-grid-divider"/>

<Grid textAlign='center' divider>
<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>

<Panel col='1-3' box>
  Col
</Panel>
</Grid>
`}
      </Codeblock>

      <Note badge='NOTE'>
        For horizontal divider use <code>&lt;hr class="uk-grid-divider" /&gt;</code> can be used between grids.
      </Note>

    </section>


    <section>
      <h2>Match column heights</h2>
      <p>
        To match grid colum heights add the <code>match</code> prop.
      </p>

      <h3 className='example'>Example</h3>
      <Grid match>
        <Panel box>
          Lorem ipsum dolor sit amet.
        </Panel>
        <Panel col='1-3'box>
          Lorem ipsum dolor sit amet.
        </Panel>
        <Panel col='1-3'box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam.
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Grid match>
<Panel box>
  Lorem ipsum dolor sit amet.
</Panel>
<Panel col='1-3'box>
  Lorem ipsum dolor sit amet.
</Panel>
<Panel col='1-3'box>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam.
</Panel>
</Grid>
`}
      </Codeblock>

      <Note badge='NOTE'>
        If grid columns extend to a col of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.
      </Note>
    </section>


    <section>
      <h2>Even grid columns</h2>
      <p>
        To create a grid whose child elements are evenly split,
        apply the same prop to each child component. Just add one of
        the <code>width</code> prop to the grid itself.
         col one of the col <a href='/col'>values</a>.
      </p>

      <Note badge='Note'>
        For column width values see <a href='https://github.com/otissv/react-uikit-base'>react uikit base</a>.
      </Note>

      <h3 className='example'>Example</h3>
      <Grid width='1-6' type='list'>
        <Panel margin='top bottom' list box>
          Col
        </Panel>
        <Panel margin='top bottom' list box>
          Col
        </Panel>
        <Panel margin='top bottom' list box>
          Col
        </Panel>
        <Panel margin='top bottom' list box>
          Col
        </Panel>
        <Panel margin='top bottom' list box>
          Col
        </Panel>
        <Panel margin='top bottom' list box>
          Col
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid width='1-6' type='list' >
<Panel margin='top bottom' list box>
  Col
</Panel>
<Panel margin='top bottom' list box>
  Col
</Panel>
<Panel margin='top bottom' list box>
  Col
</Panel>
<Panel margin='top bottom' list box>
  Col
</Panel>
<Panel margin='top bottom' list box>
  Col
</Panel>
<Panel margin='top bottom' list box>
  Col
</Panel>
</Grid>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Responsive grid widths</h2>
      <p>
        Responsive grid properties can be applied to all direct children of the <code>Grid</code> components
        by adding one of the width props to the grid itself.
        This will maintain evenly sized grid columns, regardless of the device.
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
            <td className='uk-text-left'><code>widths='value'</code></td>
            <td className='uk-text-left'>Affects direct children elements on all device .</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>small='value'</code></td>
            <td className='uk-text-left'>Affects direct children elements on 480px and higher devices.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>medium='value'</code></td>
            <td className='uk-text-left'>Affects direct children elements on 768px and higher devices.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>large='value</code>'</td>
            <td className='uk-text-left'>Affects direct children elements on 960px and higher devices..</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>xlarge='value'</code></td>
            <td className='uk-text-left'>Affects direct children elements on 1220px and higher devices.</td>
          </tr>
        </tbody>
      </Table>

      <p>
        Responsive grid widths take the same values as col values.
        See <a href='/https://github.com/otissv/react-uikit-base'>react uikit base</a> for col values.
      </p>

      <h3 className='example'>Example</h3>
      <Grid type='list' widths='1-2' medium='1-3' large='1-6'>
        <Panel list box>
          Col
        </Panel>
        <Panel list box>
          Col
        </Panel>
        <Panel list box>
          Col
        </Panel>
        <Panel list box>
          Col
        </Panel>
        <Panel list box>
          Col
        </Panel>
        <Panel list box>
          Col
        </Panel>
      </Grid>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{`<Grid type='list' widths='1-2' medium='1-3' large='1-6'>
  <Panel list box>
    Col
  </Panel>
  <Panel list box>
    Col
  </Panel>
  <Panel list box>
    Col
  </Panel>
  <Panel list box>
    Col
  </Panel>
  <Panel list box>
    Col
  </Panel>
  <Panel list box>
    Col
  </Panel>
</Grid>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Indent grid</h2>
      <p>
        To indent the left grid margin add the<code>indent</code> prop to the Grid compenent.
      </p>
    </section>


    <section>
      <h2>Grid props</h2>
      <p>
        <code>&lt;Grid&gt;</code> props and their types.
      </p>
      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
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
              <code>divider</code>
            </td>
            <td className='uk-text-left'>Bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>gutter</code>
            </td>
            <td className='uk-text-left'>oneOf "small", "medium" or "collapse"</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>large</code>
            </td>
            <td className='uk-text-left'>oneOf col values</td>
        </tr>
          <tr>
            <td className='uk-text-left'>
              <code>match</code>
            </td>
            <td className='uk-text-left'>Bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>medium</code>
            </td>
            <td className='uk-text-left'>oneOf col values</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>small</code>
            </td>
            <td className='uk-text-left'>oneOf col values</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>type</code>
            </td>
            <td className='uk-text-left'>oneOf "block" or "list"</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>widths</code>
            </td>
            <td className='uk-text-left'>oneOf col values</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>xlarge</code>
            </td>
            <td className='uk-text-left'>oneOf col values</td>
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

export default GridHandler;
