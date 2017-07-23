import React from 'react';

import List from '../lib/list';
import ListItem from '../lib/list-item';
import Table from 'react-uikit-table';
import Note from 'react-uikit-note';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const items = [
  {href: '#', kitId: 'list-group-1.1', body: 'Item 1', checked: true},
  {href: '#', kitId: 'list-group-1.2', body: 'Item 2'},
  {href: '#', kitId: 'list-group-1.3', body: 'Item 3'},
  {href: '#', kitId: 'list-group-1.4', body: 'Item 4'}
];

const name = 'List';
const npmName = 'react-uikit-list';
const secondaryName = 'Listitem';
const secondaryPath = 'react-uikit-list/lib/ListItem';
const summary = 'Dynamically creates lists.';
const listPropTuples = [{
    Prop: <code>items</code>,
    Type: "array",
  }, {
    Prop: <code>horizontal</code>,
    Type: "bool",
  }, {
    Prop: <code>line</code>,
    Type: "bool",
  }, {
    Prop: <code>striped</code>,
    Type: "bool",
  }, {
    Prop: <code>space</code>,
    Type: "bool",
  }, {
    Prop: <code>type</code>,
    Type: "oneOf: 'description' / 'unordered'. Default is unordered",
}];
const listItemPropTuples = [{
    Prop: "badge",
    Type: "object",
  }, {
    Prop: "body",
    Type: "string",
  }, {
    Prop: "href",
    Type: "string",
  }, {
    Prop: "onClick",
    Type: "func",
  }, {
    Prop: "onSelect",
    Type: "func",
}];


const descriptionListExample = (
  <List type='description'>
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>Lorem ipsum</dt>
    <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>A long term is truncated</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
  </List>
);
const descriptionListSnippet = `
<List type='description'>
  <dt>Description lists</dt>
  <dd>A description list defines terms and their corresponding descriptions.</dd>
  <dt>Lorem ipsum</dt>
  <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
  <dt>A long term is truncated</dt>
  <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</List>`;

const listWithLinesExample = (
  <List line>
    <ListItem body='Item' />
    <ListItem body='Item' />
    <ListItem body='Item' />
  </List>
);
const listWithLinesSnippet = `
<List line>
  <ListItem body='Item' />
  <ListItem body='Item' />
  <ListItem body='Item' />
</List>`;

const stripedItemsExample = (
  <List striped>
    <ListItem body='Item' />
    <ListItem body='Item' />
    <ListItem body='Item' />
  </List>
);
const stripedItemsSnippet = `
<List striped>
  <ListItem body='Item' />
  <ListItem body='Item' />
  <ListItem body='Item' />
</List>`;

const spaceItemExample = (
  <List space>
    <ListItem body='Item' />
    <ListItem body='Item' />
    <ListItem body='Item' />
  </List>
);
const spaceItemSnippet = `
<List space>
  <ListItem body='Item' />
  <ListItem body='Item' />
  <ListItem body='Item' />
</List>`;

const listLinkExample = (
  <List space>
    <ListItem href='#' kitId='list-group-1.1' body='Active item' badge={{body: '2', notification: true}} />
    <ListItem href='#' kitId='list-group-1.2' body='Normal item' />
    <ListItem href='#' kitId='list-group-1.3' />
    <ListItem href='#' kitId='list-group-1.4' body='Normal item' badge={{body: '10', context: 'danger', notification: true}} />
  </List>
);
const listLinkSnippet = `
<List space>
  <ListItem href='#' kitId='list-group-1.1' body='Active item' badge={{body: '2', notification: true}} />
  <ListItem href='#' kitId='list-group-1.2' body='Normal item' />
  <ListItem href='#' kitId='list-group-1.3' />
  <ListItem href='#' kitId='list-group-1.4' body='Normal item' badge={{body: '10', context: 'danger', notification: true}} />
</List>`;

const selectableListTable = (
  <Table
  caption='Selectable props'
  head={['Prop', 'Description']}
  body={[
    { prop: 'checked=on' , description: 'Takes an element to be displayed when the items checked prop is true.' },
    { prop: 'checked=off', description: 'Takes an element to be displayed when the items checked prop is false.' }
  ]}
  />
);
const selectableListExample = (
  <List line
    selectable={{ checked: {on:  <i className={'uk-icon-check-circle'}></i>, off: <i className={'uk-icon-circle-o'}></i>} }}
    onClick={(e) => this.handleClick(e)}
    items={items}/>
);
const selectableListSnippet = `
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
...`;

const horizontalDescriptionListExample = (
  <List type='description' horizontal>
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>Lorem ipsum</dt>
    <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>A long term is truncated</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
  </List>
);
const horizontalDescriptionListSnippet = `
<List type='description' horizontal>
  <dt>Description lists</dt>
  <dd>A description list defines terms and their corresponding descriptions.</dd>
  <dt>Lorem ipsum</dt>
  <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
  <dt>A long term is truncated</dt>
  <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</List>`;

const dynamicListExample = (
  <List line items={[
    {href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: {body: '2', notification: true}},
    {href: '#', kitId: 'list-group-1.2', body: 'Normal item'},
    {href: '#', kitId: 'list-group-1.3', body: 'Disabled item'},
    {href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: {body: '10', context: 'danger', notification: true}}
  ]}/>
);
const dynamicListSnippet = `
<List line items={[
  {href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: {body: '2', notification: true}},
  {href: '#', kitId: 'list-group-1.2', body: 'Normal item'},
  {href: '#', kitId: 'list-group-1.3', body: 'Disabled item'},
  {href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: {body: '10', context: 'danger', notification: true}}
]}/>`;

const clickAndSelectTable = (
  <Table head={['property', 'Description']} body={[
    {propery: 'component', description: 'Items\' component'},
    {propery: 'index', description: 'Items\' index'},
    {propery: 'kitid', description: 'Items\' id'}
  ]}/>
);

const ListDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, secondaryName, secondaryPath, summary }} />
    <section>
      <DocExample
        name="List types"
        description={
          (<div>
            <p>Lists can be either unordered or description. Lists are unordered by default if no type is supplied. To create a description list add <code>type='description'</code> prop.</p>
            <Note>ListItem component and the items prop does not work with description lists. Also on narrower viewports the style will change back to the default stacked description list.</Note>
          </div>)
        }
      />
      <DocExample
        name="Unordered list"
        jsx={<List items={['item', 'item', 'item']} />}
        snippet={`<List items={['item', 'item', 'item']} />`}
      />
      <DocExample
        name="Description list"
        jsx={descriptionListExample}
        snippet={descriptionListSnippet}
      />
    </section>
    <DocExample
      name="List with lines"
      description={<span>The <code>line</code> prop separates list items with lines.</span>}
      jsx={listWithLinesExample}
      snippet={listWithLinesSnippet}
    />
    <DocExample
      name="Striped items"
      description={<span>The <code>striped</code> prop adds zebra-striping to list items</span>}
      jsx={stripedItemsExample}
      snippet={stripedItemsSnippet}
    />
    <DocExample
      name="Space items"
      description={<span>The <code>space</code> prop increases the spacing between list items</span>}
      jsx={spaceItemExample}
      snippet={spaceItemSnippet}
    />
    <DocExample
      name="List link items"
      description={<span>To turn a ListItem into a link item, use the <code>href</code> prop.</span>}
      jsx={listLinkExample}
      snippet={listLinkSnippet}
    />
    <DocExample
      name="Selectable list"
      description={<span>Link list can be made selectable by adding the <code>selectable</code> prop. Optional <code>checked</code> and <code>mulit</code> can also be added.</span>}
      table={selectableListTable}
      jsx={selectableListExample}
      snippet={selectableListSnippet}
    />
    <DocExample
      name="Horizontal description list"
      description="Displays the terms and descriptions side by side"
      jsx={horizontalDescriptionListExample}
      snippet={horizontalDescriptionListSnippet}
    />
    <DocExample
      name="Dynamic list items"
      description={<span>List items can be dynamically created by setting the <code>items</code> prop to a collection of items.</span>}
      jsx={dynamicListExample}
      snippet={dynamicListSnippet}
    />
    <DocExample
      name="Click and select events"
      description={<span>  List item has an <code>onClick</code> prop which returns an object containing all the properties from the triggered event. There is also an addtional <code>item</code> property added for convinience.</span>}
      table={clickAndSelectTable}
    />
    <DocFooter { ...{ name, propTuples: listPropTuples }} />
    <DocFooter name="List item" propTuples={listItemPropTuples} />
  </div>
);


export default ListDoc;
