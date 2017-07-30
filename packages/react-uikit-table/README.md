# React Uikit Table



## Usage

    npm install react-uikit-table --save;

    // ES6
    import Table from 'react-uikit-table';

    // ES5
    var Table = require('react-uikit-table');

## Example




### Code

    const data = [
      {d1: 'Data', d2: 'Data', d3: 'Data'},
      {d1: 'Data', d2: 'Data', d3: 'Data'},
      {d1: 'Data', d2: 'Data', d3: 'Data'}
    ];
    ...
    <Table caption='Generated table.' head={['Heading', 'Heading', 'Heading']} body={data}/>
    <Table caption='Table from Children.'>
      <thead>
        <tr>
          <th className='uk-text-left'>Heading</th><th className='uk-text-left'>Heading</th><th className='uk-text-left'>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
        </tr>
      </tbody>
    </Table>
    ...

## Table Head




### Code

    const items = [
      { name: 'OTIS', score: 39, height: 5.6 },
      { name: 'jocelyn', score: 65, height: 4.8 },
      { name: 'Ania', score: -50, height: 6.10 }
    ];
    ...
    <Table caption='Headings from body keys.' condensed head='*' body={items}/>
    <Table caption='Headins from prop.' condensed head={['Heading', 'Heading', 'Heading']} body={items}/>

## Table condensed

<span>To make the table more compact add the `condensed` prop to the Tables props.</span>


### Code

    const items = [
      { name: 'OTIS', score: 39, height: 5.6 },
      { name: 'jocelyn', score: 65, height: 4.8 },
      { name: 'Ania', score: -50, height: 6.10 }
    ];
    ...
    <Table caption='Condensed table' condensed head={['Heading', 'Heading', 'Heading']} body={data}/>

## Table Hover

<span>To highlight a row when it is hovered add the `hover` prop to the Tables props.</span>


### Code

    const items = [
      { name: 'OTIS', score: 39, height: 5.6 },
      { name: 'jocelyn', score: 65, height: 4.8 },
      { name: 'Ania', score: -50, height: 6.10 }
    ];
    ...
    <Table caption='Hoverable table' hover head={['Heading', 'Heading', 'Heading']} body={data}/>

## Table Striped

<span>Add zebra-striping to table by adding the `striped` prop to the Tables props.</span>


### Code

    const items = [
      { name: 'OTIS', score: 39, height: 5.6 },
      { name: 'jocelyn', score: 65, height: 4.8 },
      { name: 'Ania', score: -50, height: 6.10 }
    ];
    ...
    <Table caption='Striped table' striped head={['Heading', 'Heading', 'Heading']} body={data}/>

## Table sort

<span>Generated tables can be sorted by passing key names to the `sort` prop. The sort prop can either be a string to sort by a single key or an array of keys to sort by multiple keys.To reverse the sort on a field put '-' in front of the key name.</span>


### Code

    const items = [
      { name: 'OTIS', score: 39, height: 5.6 },
      { name: 'jocelyn', score: 65, height: 4.8 },
      { name: 'Ania', score: -50, height: 6.10 }
    ];
    ...
    <Table caption='Sortable table' sort={['name', '-height']} head='*' body={items}/>

## Table numbered

<span>Table row can be numbered by using the `numbered` prop. To add a heading for the numbered column simply asign a string like so, `numbered='#'`</span>


### Code

    const items = [
      { name: 'OTIS', score: 39, height: 5.6 },
      { name: 'jocelyn', score: 65, height: 4.8 },
      { name: 'Ania', score: -50, height: 6.10 }
    ];
    ...
    <Table numbered condensed caption='Numbered table.' head={['Heading', 'Heading', 'Heading']} body={data} />
    <Table numbered='#' condensed caption='Numbered table heading.' head={['Heading', 'Heading', 'Heading']} body={data} />

## List item Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">body</td>

<td>array</td>

</tr>

<tr>

<td colspan="1">caption</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">condensed</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">hover</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">head</td>

<td>oneOf: 'array' | 'string'</td>

</tr>

<tr>

<td colspan="1">numbered</td>

<td>oneOf: 'bool' | 'string'</td>

</tr>

<tr>

<td colspan="1">overflow</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">sort</td>

<td>oneOf: 'array' | 'string'</td>

</tr>

<tr>

<td colspan="1">striped</td>

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