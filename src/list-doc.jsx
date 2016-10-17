'use strict';

import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import List from 'react-uikit-list';
import ListItem from 'react-uikit-list/lib/list-item';
import Table from 'react-uikit-table';
import Note from 'react-uikit-note';


const items = [
  {href: '#', kitId: 'list-group-1.1', body: 'Item 1', checked: true},
  {href: '#', kitId: 'list-group-1.2', body: 'Item 2'},
  {href: '#', kitId: 'list-group-1.3', body: 'Item 3'},
  {href: '#', kitId: 'list-group-1.4', body: 'Item 4'}
];


class ListDoc extends React.Component {
  constructor (props) {
    super(props);

    this.state = {items: items};
  }


  handleClick (e) {
    const items = {...this.state.items};
    items[e.item.index].checked = items[e.item.index].checked ? !items[e.item.index].checked : true;

    this.setState(items);
  }


  render () {
    return <div>
      <section>
        <h1>List</h1>
        <p className='uk-article-lead'>
          Dynamically creates lists.
        </p>
        <p>
          <a href='https://github.com/otissv/react-uikit-list'>react-uikit-list</a> on github.
        </p>
      </section>


      <section>
        <h2>Usage</h2>
        <Codeblock>
  {`npm install react-uikit-list --save;

  // ES6
  import List from 'react-uikit-list';
  import Listitem from 'react-uikit-list/lib/ListItem';

  // ES5
  var List = require('react-uikit-list').default;
  var Listitem = require('react-uikit-list/lib/ListItem').default`}
        </Codeblock>

      </section>

      <section>
        <h2>List types</h2>
        <p>
          Lists can be either unordered or description.
          Lists are unordered by default if no type is supplied. To create a description
          list add <code>type='description'</code> prop.
        </p>
        <Note>
          ListItem component and the items prop does not work with description lists.
          Also on narrower viewports the style will change back to the default stacked
          description list.
        </Note>


        <h4>Unordered list</h4>
        <h3 className='example'>Example</h3>

        <List items={['item', 'item', 'item']} />

        <h4>Description list</h4>
        <h3 className='example'>Example</h3>

        <List type='description'>
          <dt>Description lists</dt>
          <dd>A description list defines terms and their corresponding descriptions.</dd>
          <dt>Lorem ipsum</dt>
          <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
          <dt>A long term is truncated</dt>
          <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
        </List>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {`<List items={['item', 'item', 'item']} />

  <List type='description' horizontal>
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>Lorem ipsum</dt>
    <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>A long term is truncated</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
  </List>
  `}
        </Codeblock>
      </section>

      <section>
        <h2>List with lines</h2>
        <p>
          The <code>line</code> prop separates list items with lines.
        </p>
        <h3 className='example'>Example</h3>
        <List line>
          <ListItem body='Item' />
          <ListItem body='Item' />
          <ListItem body='Item' />
        </List>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {`
  <List line>
    <ListItem body='Item' />
    <ListItem body='Item' />
    <ListItem body='Item' />
  </List>
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Striped items</h2>
        <p>
            The <code>striped</code> prop adds zebra-striping to list items.
        </p>
        <h3 className='example'>Example</h3>
        <List striped>
          <ListItem body='Item' />
          <ListItem body='Item' />
          <ListItem body='Item' />
        </List>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {`<List striped>
    <ListItem body='Item' />
    <ListItem body='Item' />
    <ListItem body='Item' />
  </List>
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Space items</h2>
        <p>
          The <code>space</code> prop increases the spacing between list items.
        </p>
        <h3 className='example'>Example</h3>
        <List space>
          <ListItem body='Item' />
          <ListItem body='Item' />
          <ListItem body='Item' />
        </List>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {`<List space>
    <ListItem body='Item' />
    <ListItem body='Item' />
    <ListItem body='Item' />
  </List>
  `}
        </Codeblock>
      </section>

      <section>
        <h2>List link items</h2>
        <p>
          To turn a ListItem into a link item, use the <code>href</code> prop.
        </p>
        <h3 className='example'>Example</h3>
        <List space>
          <ListItem href='#' kitId='list-group-1.1' body='Active item' badge={{body: '2', notification: true}} />
          <ListItem href='#' kitId='list-group-1.2' body='Normal item' />
          <ListItem href='#' kitId='list-group-1.3' />
          <ListItem href='#' kitId='list-group-1.4' body='Normal item' badge={{body: '10', context: 'danger', notification: true}} />
        </List>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {`<List space>
    <ListItem href='#' kitId='list-group-1.1' body='Active item' badge={{body: '2', notification: true}} />
    <ListItem href='#' kitId='list-group-1.2' body='Normal item' />
    <ListItem href='#' kitId='list-group-1.3' />
    <ListItem href='#' kitId='list-group-1.4' body='Normal item' badge={{body: '10', context: 'danger', notification: true}} />
  </List>
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Selectable list</h2>
        <p>
          Link list can be made selectable by adding the <code>selectable</code> prop.
          Optional <code>checked</code> and <code>mulit</code> can also be added.
        </p>

        <Table
        caption='Selectable props'
        head={['Prop', 'Description']}
        body={[
          { prop: 'checked=on' , description: 'Takes an element to be displayed when the items checked prop is true.' },
          { prop: 'checked=off', description: 'Takes an element to be displayed when the items checked prop is false.' }
        ]}
        />

        <h3 className='example'>Example</h3>
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


        <Codeblock syntax='xml'>
{`const items = [
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
`}
        </Codeblock>
      </section>


      <section>
        <h2>Horizontal description list</h2>
        <p>
           Displays the terms and descriptions side by side.
        </p>
        <h3 className='example'>Example</h3>
        <List type='description' horizontal>
          <dt>Description lists</dt>
          <dd>A description list defines terms and their corresponding descriptions.</dd>
          <dt>Lorem ipsum</dt>
          <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
          <dt>A long term is truncated</dt>
          <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
        </List>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {`<List type='description horizontal'>
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>Lorem ipsum</dt>
    <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>A long term is truncated</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
  </List>
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Dynamic list items</h2>
        <p>
          List items can be dynamically created by setting
          the <code>items</code> prop to a collection of items.
        </p>

        <h3 className='example'>Example</h3>


        <List items={['item', 'item', 'item']} />

        <List line items={[
          {href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: {body: '2', notification: true}},
          {href: '#', kitId: 'list-group-1.2', body: 'Normal item'},
          {href: '#', kitId: 'list-group-1.3', body: 'Disabled item'},
          {href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: {body: '10', context: 'danger', notification: true}}
        ]}/>


        <Codeblock syntax='xml'>
{`<List items={['item', 'item', 'item']} />

<List line items={[
  {href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: {body: '2', notification: true}},
  {href: '#', kitId: 'list-group-1.2', body: 'Normal item'},
  {href: '#', kitId: 'list-group-1.3', body: 'Disabled item'},
  {href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: {body: '10', context: 'danger', notification: true}}
]}/>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Click and select events</h2>
        <p>
          List item has an <code>onClick</code> prop which returns
          an object containing all the properties from the triggered event.
          There is also an addtional <code>item</code> property added for convinience.
        </p>

        <Table head={['Item property', 'Description']} body={[
          {
            propery: 'component',
            description: 'Items\' component'
          }, {
            propery: 'index',
            description: 'Items\' index'
          }, {
            propery: 'kitid',
            description: 'Items\' id'
          }
        ]}/>
      </section>


      <section>
        <h2>List props</h2>
          <p>
          See base component for additional utility props.
          </p>

        <Table>
          <thead>
            <tr>
              <th className='uk-text-left'>Prop</th>
              <th className='uk-text-left'>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='uk-text-left'>
                <code>items</code>
              </td>
              <td className='uk-text-left'>
                array
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                <code>horizontal</code>
              </td>
              <td className='uk-text-left'>
                bool
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                <code>line</code>
              </td>
              <td className='uk-text-left'>
                bool
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                <code>striped</code>
              </td>
              <td className='uk-text-left'>
                bool
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                <code>space</code>
              </td>
              <td className='uk-text-left'>
                bool
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                <code>type</code>
              </td>
              <td className='uk-text-left'>
                oneOf<br />
              description or unordered. Default is unordered.
              </td>
            </tr>

          </tbody>
        </Table>
      </section>


      <section>
        <h2>List Item props</h2>
        <p>
        See base component for additional utility props.
        </p>

        <Table>
          <thead>
            <tr>
              <th className='uk-text-left'>Prop</th>
              <th className='uk-text-left'>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='uk-text-left'>
                badge
              </td>
              <td className='uk-text-left'>object</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                body
              </td>
              <td className='uk-text-left'>string</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                href
              </td>
              <td className='uk-text-left'>string</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                onClick
              </td>
              <td className='uk-text-left'>func</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                onSelect
              </td>
              <td className='uk-text-left'>func</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>;
  }
}


export default ListDoc;
