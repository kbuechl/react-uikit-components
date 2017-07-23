import React, { PropTypes } from 'react';
import Droppdown from 'react-uikit-dropdown';
import { helpers } from 'react-uikit-base';
import Grid from 'react-uikit-grid';
import Table from 'react-uikit-table';

import Nav from '../lib/nav';
import NavItem from '../lib/nav-item';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

let velocity;
if (process.env.NODE_ENV !== 'mdGenerator') {
  velocity = require('velocity-animate');
} else {
  velocity = () => {};
}

const name = 'Nav';
const npmName = 'react-uikit-nav';
const secondaryName = 'NavItem';
const secondaryPath = 'react-uikit-nav/lib/nav-item';
const summary = 'Defines different styles for list navigations.';
const propTuples = [{
    Prop: "body",
    Type: "string",
  }, {
    Prop: "href",
    Type: "string",
  }, {
    Prop: "active",
    Type: "bool",
  }, {
    Prop: "subtitle",
    Type: "string",
  }, {
    Prop: "type",
    Type: "oneOf: 'link' / 'header' / 'body' / 'divider'",
}];

const handleParentClick = (e) => {
  e.preventDefault();
  const element = helpers.getElement('sub');

  velocity(
    element, { height: '100%' },
    {
      // display: 'none',
      visibility: 'visible'
    },
    200
  );
};

const generateCodeSnippet = ({ parent }) =>
`<Grid>
  <Nav ${parent ? " parent": ""}type='side' cols='1-4'>
    <NavItem label='Active' href='#' active />
    ${parent ?
      "<NavItem label='Item' href='#' />":
      `<NavItem parent label='Item' href='#' >
        <Nav type='sub'>
          <NavItem label='Sub item' href='#' />
          <NavItem label='Sub item' href='#' />
        </Nav>
      </NavItem>`
    }
    <NavItem label='Item' href='#' />
    <NavItem label='Item' href='#' />
  </Nav>
</Grid>`;

const generateExampleJSX = ({ parent }) => (
  <Grid>
    <Nav parent={parent} type='side' cols='1-4'>
      <NavItem label='Active' href='#' active />
      <NavItem label='Item' href='#'>
        { parent &&
          <Nav type='sub'>
            <NavItem label='Sub item' href='#' />
            <NavItem label='Sub item' href='#' />
          </Nav>
        }
      </NavItem>
      <NavItem label='Item' href='#' />
    </Nav>
  </Grid>
);
generateExampleJSX.propTypes = {
  parent: PropTypes.bool,
};

const sideExample = generateExampleJSX({ parent: false });
const sideSnippet = generateCodeSnippet({ parent: false });

const navsNestedExample = generateExampleJSX({ parent: true });
const navsNestedSnippet = generateCodeSnippet({ parent: true });

const dropdownExample = (
  <Droppdown trigger={{
    body: 'Nav dropdown',
    animate: {
      in: (element) => this.animateIn(element),
      out: (element) => this.animateOut(element)
    }
  }}>
    <Nav parent type='dropdown' cols='1-4'>
      <NavItem body='Item' href='#' />
      <NavItem body='Another item' href='#' />
      <NavItem type='header' body='Header'/>
      <NavItem body='Item' href='#' />
      <NavItem body='Another item' href='#' />
    </Nav>
  </Droppdown>
);
const dropdownSnippet = `
<Droppdown trigger={{
  body: 'Nav dropdown',
  animate: {
    in: (element) => this.animateIn(element),
    out: (element) => this.animateOut(element)
  }
}}>
  <Nav parent type='dropdown' cols='1-4'>
    <NavItem body='Item' href='#' />
    <NavItem body='Another item' href='#' />
    <NavItem type='header' body='Header'/>
    <NavItem body='Item' href='#' />
    <NavItem body='Another item' href='#' />
  </Nav>
</Droppdown>`;

const navItemTable = (
<Table
  head={['Prop', 'Description']}
  body={[{
    Prop : <code>body</code>,
    Description : "Provides a body for a link."
  }, {
    Prop : <code>href</code>,
    Description : "Provides a URL for a link."
  }, {
    Prop : <code>active</code>,
    Description : "Shows the item as active."
  }, {
    Prop : <code>subtitle</code>,
    Description : "Creates a subtitle."
  }, {
    Prop : <code>type='link'</code>,
    Description : "Creates a link NavItem."
  }, {
    Prop : <code>type='header'</code>,
    Description : "Creates a header NavItem."
  }, {
    Prop : <code>type='body'</code>,
    Description : "Creates a body a link."
  }, {
    Prop : <code>type='divider'</code>,
    Description : "Creates a divider NavItem for separating menu items."
  }]} />
);
const navItemExample = (
  <Grid indent>
    <Nav type='side' cols='1-4'>
      <NavItem type='header' body='Header'/>
      <NavItem body='Active' href='#' active />
      <NavItem body='Item' href='#' />
      <NavItem body='Item' href='#' subtitle='Subtitle'/>
      <NavItem body='Item' href='#' />
      <NavItem type='divider' />
      <NavItem body='Item' href='#' />
    </Nav>
  </Grid>
);
const navItemSnippet = `
<Grid indent>
  <Nav type='side' cols='1-4'>
    <NavItem type='header' body='Header'/>
    <NavItem body='Active' href='#' active />
    <NavItem body='Item' href='#' />
    <NavItem body='Item' href='#' subtitle='Subtitle'/>
    <NavItem body='Item' href='#' />
    <NavItem type='divider' />
    <NavItem body='Item' href='#' />
  </Nav>
</Grid>`;

const navItemCollectionExample = (
  <Grid indent>
    <Nav cols='1-4' type='side' items={[{body: 'Home', href: '#', active: true}, {body: 'About', href: '#'}]} />
  </Grid>
);
const navItemCollectionSnippet = `
<Grid indent>
  <Nav cols='1-4' type='side' items={[{body: 'Home', href: '#', active: true}, {body: 'About', href: '#'}]} />
</Grid>`;

const navPropsTable = (
  <Table head={['Prop', 'Type']} body={[
    {
      Prop: 'parent',
      Type: 'bool'
    },
    {
      Prop: 'type',
      Type: "oneOf: 'dropdown' / 'side' / 'sub'"
    }
  ]}
/>);

{/* // TODO: could this be done outside of the class with a generated click handler...? */}

const NavDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, secondaryName, secondaryPath, summary }} />
    <DocExample
      name="Nav"
      description={<span>Navigation consists of two components <code>&lt;Nav&gt;</code> and <code>&lt;NavItem&gt;</code>. The Nav component displays a list of links for various types of Navs. To choose a type of Nav the <code>type</code> prop must be added to the Nav component</span>}
    />
    <DocExample
      name="Nav Side"
      description={<span>Add the <code>type="side"</code> prop to place a nav inside your sidebar, panels or anywhere else in your content.</span>}
      jsx={sideExample}
      snippet={sideSnippet}
    />
    <DocExample
      name="Navs Nested"
      description={<span>Navs can easily be nested insde of each other by using the Nav <code>parent</code> and <code>sub</code> props and the NavItems <code>parent</code> prop.</span>}
      jsx={navsNestedExample}
      snippet={navsNestedSnippet}
    />
    <DocExample
      name="Nav Dropdown"
      description={(<div>
        <p>Nav compnents can be placed into a Dropdown component by setting <code>type='dropdown'</code></p>
        <p>Props can be passed to the Dropdown in the form of JSON object via the <code>dropdown</code> prop. See Droppdown component props for more details.</p>
      </div>)}
      jsx={dropdownExample}
      snippet={dropdownSnippet}
    />
    <DocExample
      name="Nav Items"
      description={<span>The NavItem component creates a Nav item which can either be a link, header or a divider. This can be specified using the <code>type</code> prop. The default type is link.</span>}
      table={navItemTable}
      jsx={navItemExample}
      snippet={navItemSnippet}
    />
    <DocExample
      name="Nav Item collections"
      description={<span>An array of objects can be passed to the <code>items</code> prop of a Nav to generate NavItems</span>}
      jsx={navItemCollectionExample}
      snippet={navItemCollectionSnippet}
    />
    <DocExample
      name="React Router"
      description={(
        <div>
          <p>NavItem can be used with <a href='http://rackt.github.io/react-router/'>React Router</a> by adding <code>&lt;Link&gt;</code> as a child of <code>&lt;NavItem&gt;</code></p>
          <p>See <a href='http://rackt.github.io/react-router/'>React Router</a> for router configuration</p>
        </div>)
      }
      snippet={`<Nav type='side'>\n  <NavItem><Link to="app">Home</Link></NavItem>\n</Nav>`}
    />
    <DocExample
      name="Nav Props"
      description="See base component for additional utility props."
      table={navPropsTable}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default NavDoc;
