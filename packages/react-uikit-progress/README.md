# React Uikit Progress



## Usage

    npm install react-uikit-progress --save;

    // ES6
    import Progress from 'react-uikit-progress';

    // ES5
    var Progress = require('react-uikit-progress');

## Progress




### Code

    <Progress bar={40} body='40%'/>

## Progress sizes




### Code

      <Progress bar={50} />
      <Progress bar={60} size='small' />
      <Progress bar={70} size='mini' />

## Progress context




### Code

      <Progress bar={70} context='success' />
      <Progress bar={60} context='warning' />
      <Progress bar={50} context='danger' />

## Striped




### Code

      <Progress bar={60} striped />
      <Progress bar={80} striped active />

## Combined



### Code

    <Progress bar={80} striped active size='small' context='danger'/>

## Progress Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="2">active</td>

<td>bool</td>

</tr>

<tr>

<td colspan="2">bar</td>

<td>number</td>

</tr>

<tr>

<td colspan="2">body</td>

<td>string</td>

</tr>

<tr>

<td colspan="2">size</td>

<td>oneOf: 'mini' | 'small'</td>

</tr>

<tr>

<td colspan="2">context</td>

<td>oneOf: 'success' | 'warning' | 'danger'</td>

</tr>

<tr>

<td colspan="2">striped</td>

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