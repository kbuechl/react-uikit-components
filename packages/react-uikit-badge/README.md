# React Uikit Badge



## Usage

    npm install react-uikit-badge --save;

    // ES6
    import Badge from 'react-uikit-badge';

    // ES5
    var Badge = require('react-uikit-badge');

## Badge Element

By default badges are <code>span<code> but they can be made <div>s by setting the `block` prop.


### Code

    <Badge>I am a span</Badge>
    <Badge>I am a div</Badge>

## Badge Text

Text can be added either as `children` <Badge>Awesome</Badge> or by setting the `body` prop <Badge body='Awesome'/>.


### Code

    <Badge>Info</Badge>
    <Badge>New</Badge>
    <Badge>Free</Badge>

## Badge notifications

Use the `notification` prop to indicate that the badge is a notification. Typically it is used with numbers.


### Code

    <Badge notification>3</Badge>
    <Badge notification>20</Badge>
    <Badge notification>100</Badge>

## Badge Contexts

Add the `context` process with a value of "success", "warning" or "danger" for additional context.


### Code

    <Badge context="success">success</Badge>
    <Badge context="warning">warning</Badge>
    <Badge context="danger">danger</Badge>
    <Badge context="success" notification>1</Badge>
    <Badge context="warning" notification>10</Badge>
    <Badge context="danger" notification>100+</Badge>

## Badge Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">context</td>

<td>oneOf: 'default' | 'muted' | 'primary' | 'secondary'</td>

</tr>

<tr>

<td colspan="1">block</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">body</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">notification</td>

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