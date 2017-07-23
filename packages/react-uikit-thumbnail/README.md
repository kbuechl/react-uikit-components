# React Uikit Thumbnail



## Usage

    npm install react-uikit-thumbnail --save;

    // ES6
    import Thumbnail from 'react-uikit-thumbnail';

    // ES5
    var Thumbnail = require('react-uikit-thumbnail');




### Code

      <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
      <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
      <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />

## Thumbnail caption

<span>To add a caption, simply add it as a child of the thumbnail.</span>


### Code

      <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>div</code></Thumbnail>
      <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>link</code></Thumbnail>
      <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>figure</code></Thumbnail>

## Thumbnail sizes

<span>Thumbnails can be resized using the `size` prop.</span>


### Code

      <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'><code>large</code></Thumbnail>
      <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'><code>medium</code></Thumbnail>
      <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'><code>small</code></Thumbnail>
      <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'><code>mini</code></Thumbnail>
      <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'><code>expand</code></Thumbnail>

## Img Props

<span>Props can be passed to the Img component by using the `img` prop. See Img compoent for further details.</span>

## Thumbnail Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">height</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">img</td>

<td>object: See Img component props</td>

</tr>

<tr>

<td colspan="1">medium</td>

<td>object: See Img component props</td>

</tr>

<tr>

<td colspan="1">large</td>

<td>object: See Img component props</td>

</tr>

<tr>

<td colspan="1">small</td>

<td>object: See Img component props</td>

</tr>

<tr>

<td colspan="1">src</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">size</td>

<td>oneOf: 'large' | 'medium' | 'small' | 'mini' | 'expand'</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'block' | 'figure' | 'link'. (Default is block)</td>

</tr>

<tr>

<td colspan="1">width</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">xlarge</td>

<td>object: See Img component props</td>

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