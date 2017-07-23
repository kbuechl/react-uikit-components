# React Uikit Breadcrumb



## Usage

    npm install react-uikit-breadcrumb --save;

    // ES6
    import Breadcrumb from 'react-uikit-breadcrumb';

    // ES5
    var Breadcrumb = require('react-uikit-breadcrumb');

## Breadcrumb

The Breadcrumb component consists of links which are aligned side by side and separated by a divider.

<table class="uk-table">

<thead>

<tr>

<th>Type</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">link</td>

<td>Creates breadcrumb item as a Link</td>

</tr>

<tr>

<td colspan="1">acive</td>

<td>Shows the breadcrumb item as active</td>

</tr>

<tr>

<td colspan="1">disabled</td>

<td>Disables the breadcrumb Item</td>

</tr>

</tbody>

</table>



### Code

    <Breadcrumb kitid='bread'>
      <BreadcrumbItem kitid='1' body='Home'/>
      <BreadcrumbItem kitid='4' type='link' body='link'/>
      <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
      <BreadcrumbItem kitid='2' type='active' body='Post'/>
    </Breadcrumb>

## Breadcrumb Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">items</td>

<td>array</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'active' | 'link' | 'disabled'</td>

</tr>

</tbody>

</table>

## Breadcrumb Item Props



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

<td>string</td>

</tr>

<tr>

<td colspan="1">href</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'active' | 'link' | 'disabled'</td>

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