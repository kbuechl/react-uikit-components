# React Uikit Grid



## Usage

    npm install react-uikit-grid --save;

    // ES6
    import Grid from 'react-uikit-grid';

    // ES5
    var Grid = require('react-uikit-grid');

## Basic

To create the grid container, use the <code>&lt;Grid&gt;</code> component. A <code>&lt;ul&gt;</code> grid can be created by adding <code>list</code> prop. Columns can be added by adding the <code>col</code> prop to any react uikit component.<br />


### Code

    <Grid textAlign='center'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-2' box>Col</Panel>
      <Panel col='1-2' box>Col</Panel>
      <Panel col='3-10' box>Col</Panel>
      <Panel col='7-10' box>Col</Panel>
    </Grid>

## Grid Gutter

Grids automatically create a horizontal gutter between columns and a vertical one between two succeeding grids. By default, the grid gutter is wider on large screens.


### Code

    <Grid textAlign='center'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Medium Gutter

To apply a medium-sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.


### Code

    <Grid gutter='medium'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Small Gutter

To apply a medium-sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.


### Code

    <Grid gutter='small'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Collapse Gutter

To remove the gutter entirely, just add the <code>gutter='collapse'</code> prop.


### Code

    <Grid gutter='collapse'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Grid Divider

Add the <code>divider</code> prop to separate grid columns with lines. To separate grids with a horizontal line, just add the class to a &lt;hr&gt; or &lt;div&gt; element.


### Code

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



## Match column heights

To match grid column heights add the <code>match</code> prop.


### Code

    <Grid match>
      <Panel col='1-3' box>Lorem ipsum dolor sit amet.</Panel>
      <Panel col='1-3'box>Lorem ipsum dolor sit amet.</Panel>
      <Panel col='1-3'box>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Panel>
    </Grid>



## Even grid columns

To create a grid whose child elements are evenly split, no need to apply the same prop to each child component. Just add one of the <code>widths</code> prop to the grid itself. Widths use the same values as the prop <code>col</code> from Base component utility props. For responsive widths, instead of the <code>widths</code> you can use <code>small</code>, <code>medium</code> and <code>large</code> respectively.


### Code

    <Grid widths='1-6' type='list'>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
    </Grid>

## Responsive grid widths

Responsive grid properties can be applied to all direct children of the <code>Grid</code> components by adding one of the width props to the grid itself. This will maintain evenly sized grid columns, regardless of the device.

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="-1">`widths='value'`</td>

<td>Affects direct children elements on all device.</td>

</tr>

<tr>

<td colspan="-1">`small='value'`</td>

<td>Affects direct children elements on 480px and higher devices.</td>

</tr>

<tr>

<td colspan="-1">`medium='value'`</td>

<td>Affects direct children elements on 768px and higher devices.</td>

</tr>

<tr>

<td colspan="-1">`large='value`</td>

<td>Affects direct children elements on 960px and higher devices.</td>

</tr>

<tr>

<td colspan="-1">`xlarge='value'`</td>

<td>Affects direct children elements on 1220px and higher devices.</td>

</tr>

</tbody>

</table>




### Code

    <Grid type='list' widths='1-2' medium='1-3' large='1-6'>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
    </Grid>

## Indent grid

To indent the left grid margin add the <code>indent</code> prop to the Grid component.

## Grid Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">divider</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">gutter</td>

<td>oneOf: 'small' | 'medium' | 'collapsed'</td>

</tr>

<tr>

<td colspan="1">indent</td>

<td>oneOf: 'col' | 'values'</td>

</tr>

<tr>

<td colspan="1">match</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">medium</td>

<td>oneOf: 'col' | 'values'</td>

</tr>

<tr>

<td colspan="1">small</td>

<td>oneOf: 'col' | 'values'</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'block' | 'list'</td>

</tr>

<tr>

<td colspan="1">widths</td>

<td>oneOf: 'col' | 'values'</td>

</tr>

<tr>

<td colspan="1">xlarge</td>

<td>oneOf: 'col' | 'values'</td>

</tr>

</tbody>

</table>

## Tests

`npm run test` to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.  

## Build
`npm run build` to build files from distribution.  
`npm run build:watch` watches src directory and builds files on changes.  

## Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.  

## License
MIT