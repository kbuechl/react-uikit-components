# React Uikit Comment



## Usage

    npm install react-uikit-comment --save;

    // ES6
    import Comment from 'react-uikit-comment';

    // ES5
    var Comment = require('react-uikit-comment');

The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`avatar`</td>

<td>Add avatar prop to create an avatar for the comment author.</td>

</tr>

<tr>

<td colspan="1">`title`</td>

<td>Add tilte prop to createCreates a comment title.</td>

</tr>

<tr>

<td colspan="1">`meta`</td>

<td>Add meta prop to add meta data about the comment.</td>

</tr>

<tr>

<td colspan="1">`body`</td>

<td>Add body prop to add text comment body. Body is overridden if comment has children.</td>

</tr>

</tbody>

</table>



### Code

      const meta = <div>
        <Button type='link' context='link' size='mini' body='12 days ago'/> |
        <Button type='link' context='link' size='mini' body='Profile'/> |
        <Button type='link' context='link' size='mini' body='#'/>
      </div>;

      ...
      <Comment title='Author' meta={meta} avatar={{src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Comment>
      ...

## Comment Color

To style a comment differently, for example to highlight it as the admin's comment, just add the primary prop.


### Code

      const meta = <div>
        <Button type='link' context='link' size='mini' body='12 days ago'/> |
        <Button type='link' context='link' size='mini' body='Profile'/> |
        <Button type='link' context='link' size='mini' body='#'/>
      </div>;

      ...
      <Comment primary title='Author' meta={meta} avatar={{src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Comment>
      ...

## Comment Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">avatar</td>

<td>object `{src, alt}`</td>

</tr>

<tr>

<td colspan="1">body</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">meta</td>

<td>any</td>

</tr>

<tr>

<td colspan="1">primary</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">title</td>

<td>string</td>

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