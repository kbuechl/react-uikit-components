# React Uikit Panel



## Usage

    npm install react-uikit-panel --save;

    // ES6
    import Panel from 'react-uikit-panel';

    // ES5
    var Panel = require('react-uikit-panel');

## Basic

The Panel component consists of the panel itself, the panel title and a panel badge. To prevent redundant white space, top and bottom margins are removed from the panel's content..

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`tilte`</td>

<td><span>Add `title` prop to add the panel title.</span></td>

</tr>

<tr>

<td colspan="1">`badge`</td>

<td></td>

</tr>

</tbody>

</table>



### Code

    <Grid medium='1-3' large='1-3'>
      <Panel title='Title' badge={{body: 'hot', context: 'danger'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel Types

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`block`</td>

<td>Renders the panel as a block.</td>

</tr>

<tr>

<td colspan="1">`link`</td>

<td><span>Renders the panel inside of a block. The `link='url/path'` is required to set the link\'s address.</span></td>

</tr>

</tbody>

</table>



### Code

    <Grid>
      <Panel colMedium='1-3' margin='bottom' box title='Block panel' type='block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel colMedium='1-3' box title='Link panel' type='link' link=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel box

By default the Panel has no styling. The panel box places a box around a panel.


### Code

    <Grid medium='1-3' large='1-3' indent>
      <Panel box title='Title' badge={{body: 'hot', context: 'danger'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel box primary

<span>Add the `context='primary'` prop to modify the box panel to emphasize it by using a different color.</span>


### Code

    <Grid>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel colMedium='1-3' box title='Title' context='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel box secondary

<span>Add the `context='secondary'` prop to modify the box panel which will give it a white background.</span>


### Code

    <Grid>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel colMedium='1-3' box title='Title' context='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
    </Grid>

## Panel hover

<span>Add the `hover` prop to add a hover effect to the panel. This comes in handy when using the panel as a link.</span>


### Code

    <Grid indent>
      <Panel margin='bottom' title='Title' link='#' hover>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel margin='bottom' title='Title' link='#' hover>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel title='Title' link='#' hover>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
    </Grid>

## Panel header

<span>Add the `header` prop to separate the panel title and content with a horizontal line.</span>


### Code

    <Grid>
      <Panel header colMedium='1-3' title='Title' margin='bottom' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel header colMedium='1-3' title='Title' margin='bottom' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel header colMedium='1-3' title='Title' margin='bottom' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
    </Grid>

## Panel space

<span>Add the `space` prop to increase the spacing around the panel content.</span>


### Code

    <Grid>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
    </Grid>
    <Grid>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
    </Grid>

## Panel box with teaser

<span>To display an image inside a panel box that is attached to the border of the panel without any spacing, just add the `teaser={{src: , alt: }}` prop..</span>


### Code

    <Grid>
      <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
      <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
      <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
    </Grid>

## Panel with icons

<span>Easily apply an icon from UIkit [Icon](http://getuikit.com/docs/icon.html) to your panel by adding `icon='icon-name'`.</span>


### Code

    <Grid>
      <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel icon='user' box colMedium='1-3' title='Title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">badge</td>

<td>string or object: {`{body , context}`}</td>

</tr>

<tr>

<td colspan="1">box</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">context</td>

<td>oneOf: 'primary' | 'secondary'</td>

</tr>

<tr>

<td colspan="1">header</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">hover</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">icon</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">space</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">teaser</td>

<td>objectOf: {`{src, alt}`}</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'block' (default) | 'link'</td>

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