# React Uikit Img



## Usage

    npm install react-uikit-img --save;

    // ES6
    import Img from 'react-uikit-img';

    // ES5
    var Img = require('react-uikit-img');



### Code

    <Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />

## Responsive image

<span>The Image component can provide different images for various viewport widths. Enable responsive behavior by adding one or all of the responsive props `small`, `medium`, `large` or `xlarge`.  
Each responsive size takes a JSON object</span>

<table class="uk-table">

<thead>

<tr>

<th>JSON key</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">width</td>

<td>The width of the image. The default width is 100% if no width is specified</td>

</tr>

<tr>

<td colspan="1">height</td>

<td>The height of the image. The default height is auto if no height is specified</td>

</tr>

<tr>

<td colspan="1">src</td>

<td>The src url for the image</td>

</tr>

</tbody>

</table>



### Code

      <Img
        small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
        medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
        large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
        xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
      />

## Cover images

<span>The `cover` prop allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image cover.</span>

<table class="uk-table">

<thead>

<tr>

<th>JSON key</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">width</td>

<td>The width of the image. The default width is 100% if no width is specified</td>

</tr>

<tr>

<td colspan="1">height</td>

<td>The height of the image. The default height is auto if no height is specified</td>

</tr>

<tr>

<td colspan="1">src</td>

<td>The src url for the image</td>

</tr>

</tbody>

</table>



### Code

      <Img cover
        small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
        medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
        large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
        xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
      >
        <h1>Cover image</h1>
      </Img>

## Img Props



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

<td colspan="1">cover</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">height</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">large</td>

<td>object: {`{width, height, src}`}</td>

</tr>

<tr>

<td colspan="1">medium</td>

<td>object: {`{width, height, src}`}</td>

</tr>

<tr>

<td colspan="1">small</td>

<td>object: {`{width, height, src}`}</td>

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

<td>object: {`{width, height, src}`}</td>

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