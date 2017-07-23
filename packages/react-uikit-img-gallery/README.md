# React Uikit Img Gallery



## Usage

    npm install react-uikit-img-gallery --save;

    // ES6
    import Img Gallery from 'react-uikit-img-gallery';

    // ES5
    var Img Gallery = require('react-uikit-img-gallery');

## Basic



### Code

    <ImgGroup items={[{
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }]}/>

## Img gallery items

<span>The `items` is an array which takes a collection of JSON objects. JSON object properties can be any of the props fom the Img component.</span>


### Code

    <ImgGroup items={[{
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }]}/>

## Img Gallery Props



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

<td>array of objects; See Img component for props.</td>

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