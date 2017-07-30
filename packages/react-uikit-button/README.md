# React Uikit Button



## Usage

    npm install react-uikit-button --save;

    // ES6
    import Button from 'react-uikit-button';

    // ES5
    var Button = require('react-uikit-button');

## Types

<span>The Button component creates either a button, link, submit or a close button by setting the `type`. By defualt the Button component will create a button if no type is provided.</span>


### Code

    <Buttonbody="Button"margin="bottom right" />
    <Buttonbody="Link"margin="bottom right"type="link" />
    <Buttonbody="Submit"margin="bottom right"type="submit" />
    <Buttonbody="Disabled"margin="bottom right" disabled />
    <Buttontype="close" />

## Button Contexts

<span>The color of the button can be easily changed by adding a context to the context prop.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="2">`context='primary'`</td>

<td>Emphasizes to identify the primary action in a set of buttons.</td>

</tr>

<tr>

<td colspan="2">`context='success'`</td>

<td>Indicates a successful or positive action.</td>

</tr>

<tr>

<td colspan="2">`context='danger'`</td>

<td>Indicates a dangerous or negative action.</td>

</tr>

<tr>

<td colspan="2">`context='link'`</td>

<td>De-emphasizes to look like a link while maintaining button behavior.</td>

</tr>

</tbody>

</table>



### Code

    <Buttonbody="Primary"context="primary"margin="bottom right" />
    <Buttonbody="Success"context="success"margin="bottom right" />
    <Buttonbody="Danger"context="danger"margin="bottom right" />
    <Buttonbody="Link"context="link"type="Link" />

## Button Sizes

<span>To change the size of a Button set the `size` prop to mini, small, or large.</span>


### Code

    <Buttonbody="Mini Button"margin="bottom right"size="mini" />
    <Buttonbody="Mini Button"context="primary"margin="bottom"size="mini" />
    <Buttonbody="Small Button"margin="bottom right"size="small" />
    <Buttonbody="Small Button"context="primary"margin="bottom"size="small" />
    <Buttonbody="Default Button"margin="bottom right" />
    <Buttonbody="Default Button"context="primary"margin="bottom" />
    <Buttonbody="Large Button"margin="bottom right"size="large" />
    <Buttonbody="Large Button"context="primary"margin="bottom"size="large" />

## Button Blocks

<span>To create a full width button add the `block` prop to the buttton component.</span>


### Code

    <Buttonbody="Button"margin="small bottom" block />
    <Buttonbody="Button"context="primary" block />

## Button dropdown

<span>Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.</span>

## Button Props



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

<td colspan="1">block</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">context</td>

<td>oneOf active, link, or disabled</td>

</tr>

<tr>

<td colspan="1">disabled</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">size</td>

<td>oneOf mini, small, or large</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf button, close, or link</td>

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