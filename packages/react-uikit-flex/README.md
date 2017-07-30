# React Uikit Flex



## Usage

    npm install react-uikit-flex --save;

    // ES6
    import Flex from 'react-uikit-flex';

    // ES5
    var Flex = require('react-uikit-flex');

## Basic

Flex component uses flexbox, a concept that is still quite new but extremely powerful for creating layouts.


### Code

    <Flex>
      <Panel col='1-3' box>
        Box
      </Panel>
      <Panel col='1-3' box margin='left'>
        Box
      </Panel>
      <Panel col='1-3' box margin='left'>
        Box
      </Panel>
    </Flex>

## Flex alignment

These props define the horizontal and vertical alignment of Flex items and distribute the space between them.

<table class="uk-table">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`center`</td>

<td>Add this prop to center Flex items horizontally.</td>

</tr>

<tr>

<td colspan="1">`right`</td>

<td>Add this prop to align Flex items to the right.</td>

</tr>

<tr>

<td colspan="1">`top`</td>

<td>Add this prop to align Flex items to the top.</td>

</tr>

<tr>

<td colspan="1">`middle`</td>

<td>Add this prop to align Flex items to the middle.</td>

</tr>

<tr>

<td colspan="1">`bottom`</td>

<td>Add this prop to align Flex items to the bottom.</td>

</tr>

<tr>

<td colspan="1">`between`</td>

<td>Add this prop to distribute items evenly, with the first item at the beginning and last item at the end of the main axis.</td>

</tr>

<tr>

<td colspan="1">`around`</td>

<td>Add this prop to distribute items evenly with equal space on both sides of each item.</td>

</tr>

</tbody>

</table>



### Code

    <Flex bottom middle>
      <Panel col='1-3' box style={[object Object]}>
        Box
      </Panel>
      <Panel col='1-3' box margin='left' style={[object Object]}>
        Box
      </Panel>
      <Panel col='1-3' box margin='left' style={[object Object]}>
        Box
      </Panel>
    </Flex>

## Flex direction

Directon props define the axis flex items placed on and their direction. By default, items run horizontally from left to right.

<table class="uk-table">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`rowReverse`</td>

<td>Add this prop to lay out Flex items from right to left.</td>

</tr>

<tr>

<td colspan="1">`column`</td>

<td>Add this prop to lay out Flex items as vertical columns.</td>

</tr>

<tr>

<td colspan="1">`columnReverse`</td>

<td>Add this prop to lay out Flex items from bottom to top.</td>

</tr>

</tbody>

</table>



### Code

    <Flex direction='columnReverse'>
      <Panel col='1-3' box>
        1
      </Panel>
      <Panel col='1-3' box margin='bottom'>
        2
      </Panel>
      <Panel col='1-3' box margin='bottom'>
        3
      </Panel>
    </Flex>

## Flex row wrap

By default, Flex items fit themselves into one row. Add the row='wrap' prop so that the items wrap into another row when they no longer fit into the viewport. To change the items' direction so that they run from right to left, add the reverse prop. The following props modify the alignment of wrapping Flex items. To force the Flex items into one row, just add the nowrap prop.

<table class="uk-table">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`row='wrap'`</td>

<td>Add this prop to for wrap Flex items on multiple rows.</td>

</tr>

<tr>

<td colspan="1">`row='top'`</td>

<td>Add this prop to align multirow Flex items to the top.</td>

</tr>

<tr>

<td colspan="1">`row='middle'`</td>

<td>Add this prop to vertically center multirow Flex items.</td>

</tr>

<tr>

<td colspan="1">`row='bottom'`</td>

<td>Add this prop to align multiline Flex items to the bottom.</td>

</tr>

<tr>

<td colspan="1">`row='between'`</td>

<td>Add this prop to distribute Flex item rows evenly, with the first row at the top and last row at the bottom of the container.</td>

</tr>

<tr>

<td colspan="1">`row='around'`</td>

<td>Add this prop to distribute Flex rows evenly with equal space at the top and bottom of each row.</td>

</tr>

<tr>

<td colspan="1">`row='reverse'`</td>

<td>Add this prop to change the direction of the Flex items from right to left.</td>

</tr>

<tr>

<td colspan="1">`row='nowrap'`</td>

<td>Add this prop to remove row wrapping.</td>

</tr>

</tbody>

</table>



### Code

    <Flex>
      <Panel col='1-3' box margin='bottom right'>
        1
      </Panel>
      <Panel col='1-2' box margin='bottom right'>
        2
      </Panel>
      <Panel col='1-3' box margin='bottom right'>
        3
      </Panel>
      <Panel col='1-3' box margin='bottom right'>
        4
      </Panel>
      <Panel box>
        5
      </Panel>
      <Panel col='1-3' box margin='bottom right'>
        6
      </Panel>
    </Flex>

## Flex and grid

The Flex component can be combined with a grid from the Grid component by adding <code>grid</code> prop


### Code

    <Flex grid>
      <Panel col='1-3'>
        [object Object]
      </Panel>
      <Panel col='2-3' flexAlign=middle>
        [object Object]
      </Panel>
    </Flex>

## Flex order

To see how to order Flex items see <code>order</code> prop in the Base component under Utiliy props.

## Flex Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">around</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">bottom</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">between</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">center</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">direction</td>

<td>oneOf: 'rowReverse' | 'column' | 'columnReverse'</td>

</tr>

<tr>

<td colspan="1">grid</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">middle</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">right</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">row</td>

<td>oneOf: 'wrap' | 'bottom' | 'middle' | 'top' | 'between' | 'around' | 'reverse' | 'nowrap'</td>

</tr>

<tr>

<td colspan="1">top</td>

<td>bool</td>

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