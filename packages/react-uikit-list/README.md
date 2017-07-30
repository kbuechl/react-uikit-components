# React Uikit List



## Usage

    npm install react-uikit-list --save;

    // ES6
    import List from 'react-uikit-list';

    // ES5
    var List = require('react-uikit-list');

## List types



## Unordered list



### Code

    <List items={['item', 'item', 'item']} />

## Description list



### Code

    <List type='description'>
      <dt>Description lists</dt>
      <dd>A description list defines terms and their corresponding descriptions.</dd>
      <dt>Lorem ipsum</dt>
      <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
      <dt>A long term is truncated</dt>
      <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
    </List>

## List with lines

<span>The `line` prop separates list items with lines.</span>


### Code

    <List line>
      <ListItem body='Item' />
      <ListItem body='Item' />
      <ListItem body='Item' />
    </List>

## Striped items

<span>The `striped` prop adds zebra-striping to list items</span>


### Code

    <List striped>
      <ListItem body='Item' />
      <ListItem body='Item' />
      <ListItem body='Item' />
    </List>

## Space items

<span>The `space` prop increases the spacing between list items</span>


### Code

    <List space>
      <ListItem body='Item' />
      <ListItem body='Item' />
      <ListItem body='Item' />
    </List>

## List link items

<span>To turn a ListItem into a link item, use the `href` prop.</span>


### Code

    <List space>
      <ListItem href='#' kitId='list-group-1.1' body='Active item' badge={{body: '2', notification: true}} />
      <ListItem href='#' kitId='list-group-1.2' body='Normal item' />
      <ListItem href='#' kitId='list-group-1.3' />
      <ListItem href='#' kitId='list-group-1.4' body='Normal item' badge={{body: '10', context: 'danger', notification: true}} />
    </List>

## Selectable list

<span>Link list can be made selectable by adding the `selectable` prop. Optional `checked` and `mulit` can also be added.</span>

<table class="uk-table"><caption>Selectable props</caption>

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">checked=on</td>

<td>Takes an element to be displayed when the items checked prop is true.</td>

</tr>

<tr>

<td colspan="1">checked=off</td>

<td>Takes an element to be displayed when the items checked prop is false.</td>

</tr>

</tbody>

</table>



### Code

    const items = [
      {href: '#', kitId: 'list-group-1.1', body: 'Item 1', checked: true},
      {href: '#', kitId: 'list-group-1.2', body: 'Item 2'},
      {href: '#', kitId: 'list-group-1.3', body: 'Item 3'},
      {href: '#', kitId: 'list-group-1.4', body: 'Item 4'}
    ];
    ...
    <List
      line
      selectable={{
        checked: {
          on:  <i className={'uk-icon-check-circle'}></i>,
          off: <i className={'uk-icon-circle-o'}></i>
        }
      }}
      onClick={(e) => this.handleClick(e)}
      items={this.state.items}/>
    ...

## Horizontal description list

Displays the terms and descriptions side by side


### Code

    <List type='description' horizontal>
      <dt>Description lists</dt>
      <dd>A description list defines terms and their corresponding descriptions.</dd>
      <dt>Lorem ipsum</dt>
      <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
      <dt>A long term is truncated</dt>
      <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
    </List>

## Dynamic list items

<span>List items can be dynamically created by setting the `items` prop to a collection of items.</span>


### Code

    <List line items={[
      {href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: {body: '2', notification: true}},
      {href: '#', kitId: 'list-group-1.2', body: 'Normal item'},
      {href: '#', kitId: 'list-group-1.3', body: 'Disabled item'},
      {href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: {body: '10', context: 'danger', notification: true}}
    ]}/>

## Click and select events

<span>List item has an `onClick` prop which returns an object containing all the properties from the triggered event. There is also an addtional `item` property added for convinience.</span>

<table class="uk-table">

<thead>

<tr>

<th>property</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="2">component</td>

<td>Items' component</td>

</tr>

<tr>

<td colspan="2">index</td>

<td>Items' index</td>

</tr>

<tr>

<td colspan="2">kitid</td>

<td>Items' id</td>

</tr>

</tbody>

</table>

## List Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`items`</td>

<td>array</td>

</tr>

<tr>

<td colspan="1">`horizontal`</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">`line`</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">`striped`</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">`space`</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">`type`</td>

<td>oneOf: 'description' | 'unordered'. Default is unordered</td>

</tr>

</tbody>

</table>

## List item Props



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

<td>object</td>

</tr>

<tr>

<td colspan="1">body</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">href</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">onClick</td>

<td>func</td>

</tr>

<tr>

<td colspan="1">onSelect</td>

<td>func</td>

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