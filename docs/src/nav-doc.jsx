'use strict';


import React from 'react';
import velocity from 'velocity-animate';
import Codeblock from 'react-uikit-codeblock';
import Grid from 'react-uikit-grid';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import Table from 'react-uikit-table';
import uikit from 'react-uikit-base';
import Droppdown from 'react-uikit-dropdown';

export default class NavDoc extends React.Component {
  constructor(props) {
    super(props);

    this.handelParentClick = this.handelParentClick.bind(this);
  }

  animateIn (element) {
    velocity(element, { opacity: 1 }, {visibility: 'visible'}, 200);
  }


  animateOut (element) {

  }


  handelParentClick(e) {
    e.preventDefault();
    const element = uikit.helpers.getElement('sub');

    velocity(
      element, { height: '100%' },
      {
        // display: 'none',
        visibility: 'visible'
      },
      200
    );
  }


  render () {
    return <div>
      <section>
        <h1>Nav</h1>
        <p className='uk-Nav-lead'>
        Defines different styles for list navigations.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-nav'>react-uikit-nav</a> on github.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-nav --save;</code>

// ES6
Nav uikit from 'react-uikit-nav';
NavItem uikit from 'react-uikit-nav/lib/na-vitem';

// ES5
var Nav = require('react-uikit-nav').default;
var NavItem = require('react-uikit-nav/lib/nav-item').default;
`}
        </Codeblock>

        <hr className="uk-article-divider" />

        <h2>Nav</h2>
        <p>
          Navigation consists of two components the <code>&lt;Nav&gt;</code> container and <code>&lt;NavItem&gt;</code>.
          The Nav component displays a list of links for various types of Navs.
        </p>

        <p>
          To choose which type of Nav the <code>type</code> prop must be added to the Nav component.
          If no type is provided defaults to <code>type-'side'</code>.
        </p>

      </section>


      <section>
        <h2>Nav side</h2>

        <p>
          Add the <code>type="side"</code> prop to place a nav inside your sidebar,
          panels or anywhere else in your content.
        </p>

        <h3 className='example'>Example</h3>

        <Grid indent>
          <Nav type='side' cols='1-4' >
            <NavItem body='Active' href='#' active />
            <NavItem body='Item' href='#' />
            <NavItem body='Item' href='#' />
          </Nav>
        </Grid>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Grid indent>
  <Nav type='side' cols='1-4'>
    <NavItem body='Active' href='#' active />
    <NavItem body='Item' href='#' />
    <NavItem body='Item' href='#' />
  </Nav>
</Grid>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Navs nested</h2>
        <p>
        Navs can easily be nested inside of each other by using the
          Nav <code>parent</code> and <code>sub</code> props along with
          the NavItems <code>parent</code> prop.
        </p>

        <h3 className='example'>Example</h3>
        <Grid indent>
          <Nav parent type='side' cols='1-4'>
            <NavItem body='Active' href='#' active />
            <NavItem parent body='Item' href='#' onClick={this.handelParentClick}>
              <Nav type='sub' kitid='sub'>
                <NavItem body='Sub item' href='#' />
                <NavItem body='Sub item' href='#' />
              </Nav>
            </NavItem>
            <NavItem body='Item' href='#' />
          </Nav>
        </Grid>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Grid indent>
  <Nav parent type='side' cols='1-4'>
    <NavItem body='Active' href='#' active />
    <NavItem parent body='Item' href='#' onClick={}>
      <Nav type='sub'>
        <NavItem body='Sub item' href='#' />
        <NavItem body='Sub item' href='#' />
      </Nav>
    </NavItem>
    <NavItem body='Item' href='#' />
  </Nav>
</Grid>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Nav dropdown</h2>
        <p>
          Nav compnents can be placed into a Dropdown component by setting
          <code>type='dropdown'</code>.
        </p>
        <p>
          Props can be passed to the Dropdown in the form of JSON object via the <code>dropdown</code> prop.
          See Droppdown component props for more details.
        </p>

        <h3 className='example'>Example</h3>
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

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Droppdown trigger={{
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
  `}
        </Codeblock>
      </section>


        <section>
          <h2>Nav Items</h2>
            <p>
              The NavItem component creates a Nav item which can either be a link, header or a divider.
              This can be specified using the <code>type</code> prop. The default type is link.
            </p>

            <Table>
              <thead>
                <tr>
                  <th className='uk-text-left'>Props</th>
                  <th className='uk-text-left'>Description</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td><code>body</code></td>
                <td>
                  Provides a body for a link.<br />
                </td>
              </tr>
              <tr>
                <td><code>href</code></td>
                <td>Provides a URL for a link.<br /></td>
              </tr>
              <tr>
                <td><code>active</code></td>
                <td>Shows the item as active.<br /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><code>subtitle</code></td>
                <td>Creates a subtitle.</td>
              </tr>
                <tr>
                  <td className='uk-text-left'><code>type='link'</code></td>
                  <td className='uk-text-left'>
                    Creates a link NavItem<br />
                  </td>
                </tr>
                <tr>
                  <td className='uk-text-left'><code>type='header'</code></td>
                  <td className='uk-text-left'>
                    Creates a header NavItem.<br />
                  </td>
                </tr>
                <tr>
                  <td className='uk-text-left'><code>type='body'</code></td>
                  <td className='uk-text-left'>
                    Creates a body a link.
                  </td>
                </tr>
                <tr>
                  <td className='uk-text-left'><code>type='divider'</code></td>
                  <td className='uk-text-left'>Creates a divider NavItem for separating menu items.</td>
                </tr>
              </tbody>
            </Table>

            <h3 className='example'>Example</h3>

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

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
{
`<Grid indent>
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
`}
          </Codeblock>
        </section>

        <section>
          <h2> Nav Item collections</h2>

          <p>
            An array of objects can be passed to the <code>items</code> prop of a Nav to generate NavItems.
          </p>

          <h3 className='example'>Example</h3>
          <Grid indent>
            <Nav cols='1-4' type='side' items={[
              {
                body: 'Home',
                href: '#',
                active: true
              },
              {
                body: 'About',
                href: '#'
              }
            ]} />
          </Grid>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
{
`<Grid indent>
  <Nav cols='1-4' type='side' items={[
    {
      body: 'Home',
      href: '#',
      active: true
    },
    {
      body: 'About',
      href: '#'
    }
  ]} />
</Grid>
`}
          </Codeblock>
        </section>


        <section>
          <h2>React Router</h2>
          <p>
            NavItem can be used with <a href='http://rackt.github.io/react-router/'>React Router</a> by
            adding <code>&lt;Link&gt;</code> as a child of <code>&lt;NavItem&gt;</code>.
          </p>

          <p>
            See <a href='http://rackt.github.io/react-router/'>React Router</a> for router configuration.
          </p>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
{
`<Nav type='side'>
  <NavItem><Link to="app">Home</Link></NavItem>
</Nav>
`}
          </Codeblock>
        </section>


      <section>
        <h2>Nav Props</h2>
        <p>

        See base component for additional utility props.
        </p>

        <Table head={['Prop', 'Type']} body={[
          {
            prop: 'parent',
            type: 'bool'
          },
          {
            prop: 'type',
            type: 'oneOf dropdown, side or sub'
          }
        ]}>

        </Table>
      </section>


      <section>
        <h2>Nav Item Props</h2>
        <p>

        See base component for additional utility props.
        </p>

        <Table head={['Prop', 'Type']} body={[
          {
            prop: 'body',
            type: 'string'
          },
          {
            prop: 'href',
            type: 'string'
          },
          {
            prop: 'active',
            type: 'bool'
          },
          {
            prop: 'subtitle',
            type: 'string'
          },
          {
            prop: 'type',
            type: 'oneOf link, header, body or divider'
          }
        ]}>

        </Table>
      </section>

    </div>;
  }
}
