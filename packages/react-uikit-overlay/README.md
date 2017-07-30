# React Uikit Overlay



## Usage

    npm install react-uikit-overlay --save;

    // ES6
    import Overlay from 'react-uikit-overlay';

    // ES5
    var Overlay = require('react-uikit-overlay');



## Example



### Code

      <Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
        <h3>Title</h3>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
      </Overlay>

## Overlay background

<span>Overlay can be given a background by adding the `background` prop.</span>


### Code

      <Overlay background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
        <h3>Title</h3>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
      </Overlay>

## Overlay icon



### Code

    <Overlay icon background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />

## Overlay image



### Code

    <Overlay image='docs/images/placeholder_600x400_2.svg' width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />

## Overlay Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">alt</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">background</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">flex</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">height</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">icon</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">image</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">large</td>

<td>object {`{width, height, url}`}</td>

</tr>

<tr>

<td colspan="1">medium</td>

<td>object {`{width, height, url}`}</td>

</tr>

<tr>

<td colspan="1">small</td>

<td>object {`{width, height, url}`}</td>

</tr>

<tr>

<td colspan="1">src</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">width</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">xlarge</td>

<td>object {`{width, height, url}`}</td>

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