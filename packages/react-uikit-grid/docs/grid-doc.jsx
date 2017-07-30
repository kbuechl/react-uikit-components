import React from 'react';

import Grid from '../lib/grid.js';
import Note from 'react-uikit-note';
import Panel from 'react-uikit-panel';
import Table from 'react-uikit-table';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Grid';
const npmName = 'react-uikit-grid';
const summary = `Create a fully responsive, fluid and nestable grid layout.
The grid system of UIkit follows the mobile-first approach and
accomodates up to 10 grid columns. It uses units with predefined classes
inside each grid, which define the column col. It is also possible to
combine the grid with the Flex component, although it
works only in modern browsers.
`;

const propTuples = [{
    Prop: "divider",
    Type: "bool"
  }, {
    Prop: "gutter",
    Type: "oneOf: 'small' / 'medium' / 'collapsed'"
  }, {
    Prop: "indent",
    Type: "oneOf: 'col' / 'values'"
  }, {
    Prop: "match",
    Type: "bool"
  }, {
    Prop: "medium",
    Type: "oneOf: 'col' / 'values'"
  }, {
    Prop: "small",
    Type: "oneOf: 'col' / 'values'"
  }, {
    Prop: "type",
    Type: "oneOf: 'block' / 'list'"
  }, {
    Prop: "widths",
    Type: "oneOf: 'col' / 'values'"
  }, {
    Prop: "xlarge",
    Type: "oneOf: 'col' / 'values'"
  }
];

const basicExample = (
  <Grid textAlign='center'>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-2' box>Col</Panel>
    <Panel col='1-2' box>Col</Panel>
    <Panel col='3-10' box>Col</Panel>
    <Panel col='7-10' box>Col</Panel>
  </Grid>
);
const basicSnippet = `
<Grid textAlign='center'>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-2' box>Col</Panel>
  <Panel col='1-2' box>Col</Panel>
  <Panel col='3-10' box>Col</Panel>
  <Panel col='7-10' box>Col</Panel>
</Grid>`;

const gridGutterExample = (
  <Grid textAlign='center'>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
  </Grid>
);
const gridGutterSnippet = `
<Grid textAlign='center'>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
</Grid>`;

const mediumGutterExample = (
  <Grid gutter='medium'>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
  </Grid>
);
const mediumGutterSnippet = `
<Grid gutter='medium'>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
</Grid>`;

const smallGutterExample = (
  <Grid gutter='small'>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
  </Grid>
);
const smallGutterSnippet = `
<Grid gutter='small'>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
</Grid>`;

const collapseGutterExample = (
  <Grid gutter='collapse'>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
  </Grid>
);
const collapseGutterSnippet = `
<Grid gutter='collapse'>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
  <Panel col='1-3' box>Col</Panel>
</Grid>`;

const dividerExample = (
  <div>
    <Grid gutter='center' divider>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>
    <hr className="uk-grid-divider"/>
    <Grid gutter='center' divider>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>
  </div>
);
const dividerSnippet = `
<div>
  <Grid gutter='center' divider>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
  </Grid>
  <hr className="uk-grid-divider"/>
  <Grid gutter='center' divider>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
    <Panel col='1-3' box>Col</Panel>
  </Grid>
</div>`;

const matchColumnHeightJsx = (
  <Grid match>
    <Panel col='1-3' box>Lorem ipsum dolor sit amet.</Panel>
    <Panel col='1-3'box>Lorem ipsum dolor sit amet.</Panel>
    <Panel col='1-3'box>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Panel>
  </Grid>
);
const matchColumnHeightSnippet = `
<Grid match>
  <Panel col='1-3' box>Lorem ipsum dolor sit amet.</Panel>
  <Panel col='1-3'box>Lorem ipsum dolor sit amet.</Panel>
  <Panel col='1-3'box>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Panel>
</Grid>`;

const evenGridColumnJsx = (
  <Grid widths='1-6' type='list'>
    <Panel margin='top bottom' list box>Col</Panel>
    <Panel margin='top bottom' list box>Col</Panel>
    <Panel margin='top bottom' list box>Col</Panel>
    <Panel margin='top bottom' list box>Col</Panel>
    <Panel margin='top bottom' list box>Col</Panel>
    <Panel margin='top bottom' list box>Col</Panel>
  </Grid>
);
const evenGridColumnSnippet = `
<Grid widths='1-6' type='list'>
  <Panel margin='top bottom' list box>Col</Panel>
  <Panel margin='top bottom' list box>Col</Panel>
  <Panel margin='top bottom' list box>Col</Panel>
  <Panel margin='top bottom' list box>Col</Panel>
  <Panel margin='top bottom' list box>Col</Panel>
  <Panel margin='top bottom' list box>Col</Panel>
</Grid>`;

const responsiveGridTable = (
  <div>
    <Table
      head={['Prop', 'Description']}
      body={[{
        Prop: <code>widths='value'</code>,
        Type: "Affects direct children elements on all device."
      }, {
        Prop: <code>small='value'</code>,
        Type: "Affects direct children elements on 480px and higher devices."
      }, {
        Prop: <code>medium='value'</code>,
        Type: "Affects direct children elements on 768px and higher devices."
      }, {
        Prop: <code>large='value</code>,
        Type: "Affects direct children elements on 960px and higher devices."
      }, {
        Prop: <code>xlarge='value'</code>,
        Type: "Affects direct children elements on 1220px and higher devices."
      }]} />
    <p>Responsive grid widths take the same values as col values. See base componmt for col values.</p>
  </div>
);

const responsiveGridJsx = (
  <Grid type='list' widths='1-2' medium='1-3' large='1-6'>
    <Panel list box>Col</Panel>
    <Panel list box>Col</Panel>
    <Panel list box>Col</Panel>
    <Panel list box>Col</Panel>
    <Panel list box>Col</Panel>
    <Panel list box>Col</Panel>
  </Grid>
);

const responsiveGridSnippet = `
<Grid type='list' widths='1-2' medium='1-3' large='1-6'>
  <Panel list box>Col</Panel>
  <Panel list box>Col</Panel>
  <Panel list box>Col</Panel>
  <Panel list box>Col</Panel>
  <Panel list box>Col</Panel>
  <Panel list box>Col</Panel>
</Grid>`;


const GridHandler = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      description={`To create the grid container, use the <code>&lt;Grid&gt;</code> component. A <code>&lt;ul&gt;</code> grid can be created by adding <code>list</code> prop.
        Columns can be added by adding the <code>col</code> prop to any react uikit component.<br />`
      }
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Grid Gutter"
      description="Grids automatically create a horizontal gutter between columns and a vertical one between two succeeding grids. By default, the grid gutter is wider on large screens."
      jsx={gridGutterExample}
      snippet={gridGutterSnippet}
    />
    <DocExample
      name="Medium Gutter"
      description={`To apply a medium-sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.`}
      jsx={mediumGutterExample}
      snippet={mediumGutterSnippet}
    />
    <DocExample
      name="Small Gutter"
      description={`To apply a medium-sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.`}
      jsx={smallGutterExample}
      snippet={smallGutterSnippet}
    />
    <DocExample
      name="Collapse Gutter"
      description={`To remove the gutter entirely, just add the <code>gutter='collapse'</code> prop.`}
      jsx={collapseGutterExample}
      snippet={collapseGutterSnippet}
    />
    <DocExample
      name="Grid Divider"
      description={`Add the <code>divider</code> prop to separate grid columns with lines.
        To separate grids with a horizontal line, just add the class to a &lt;hr&gt; or &lt;div&gt;  element.`}
      jsx={dividerExample}
      snippet={dividerSnippet}
      trailingNote={<Note>For horizontal divider use <code>&lt;hr class="uk-grid-divider" /&gt;</code> can be used between grids.</Note>}
    />

    <DocExample
      name="Match column heights"
      description={`To match grid column heights add the <code>match</code> prop.`}
      jsx={matchColumnHeightJsx}
      snippet={matchColumnHeightSnippet}
      trailingNote={<Note>If grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.</Note>}
    />
    <DocExample
      name="Even grid columns"
      description={`To create a grid whose child elements are evenly split, no need to apply the same prop to each child component. Just add one of
        the <code>widths</code> prop to the grid itself. Widths use the same values as the prop <code>col</code> from Base component utility props.
        For responsive widths, instead of the <code>widths</code> you can use <code>small</code>, <code>medium</code> and <code>large</code> respectively.`}
      jsx={evenGridColumnJsx}
      snippet={evenGridColumnSnippet}
    />
    <DocExample
      name="Responsive grid widths"
      description={`Responsive grid properties can be applied to all direct children of the <code>Grid</code> components by adding one of the width props to the grid itself.
        This will maintain evenly sized grid columns, regardless of the device.`}
      table={responsiveGridTable}
      jsx={responsiveGridJsx}
      snippet={responsiveGridSnippet}
    />
    <DocExample
      name="Indent grid"
      description={`To indent the left grid margin add the <code>indent</code> prop to the Grid component.`}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default GridHandler;
