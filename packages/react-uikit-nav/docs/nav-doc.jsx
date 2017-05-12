'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Grid from 'react-uikit-grid';
import Nav from '../lib/nav';
import NavItem from '../lib/nav-item';
import Table from 'react-uikit-table';


export default class NavDoc extends React.Component {
  render () {
    return <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.3/css/uikit.almost-flat.min.css" />
      <section>
        <h1>React Uikit Nav</h1>
        <p className='uk-Nav-lead'>
          Defines different styles for list navigations.
        </p>
        <p>
          <a href='http://otissv.github.io/react-uikit-components/'>http://otissv.github.io/react-uikit-components</a> for docs.
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
var Nav = require('react-uikit-nav');
var NavItem = require('react-uikit-nav/lib/na-vitem');`}
        </Codeblock>

        <hr className="uk-article-divider" />

        <p>
          Navigation consists of two components <code>&lt;Nav&gt;</code> and <code>&lt;NavItem&gt;</code>.
          The Nav component displays a list of links for various types of Navs.
          To choose a type of Nav the <code>type</code> prop must be added to the Nav component.
        </p>

      </section>


      <section>
        <h2>Nav side</h2>

          <p>
            Add the <code>type="side"</code> prop to place a nav inside your sidebar,
            panels or anywhere else in your content.
          </p>

          <h3 className='example'>Example</h3>

          <Grid>
            <Nav type='side' cols='1-4'>
              <NavItem label='Active' href='#' active />
              <NavItem label='Item' href='#' />
              <NavItem label='Item' href='#' />
            </Nav>
          </Grid>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{
`<Grid>
  <Nav type='side' cols='1-4'>
    <NavItem label='Active' href='#' active />
    <NavItem label='Item' href='#' />
    <NavItem label='Item' href='#' />
  </Nav>
</Grid>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Navs nested</h2>
          <p>
            Navs can easily be nested insde of each other by using the
            Nav <code>parent</code> and <code>sub</code> props and
            the NavItems <code>parent</code> prop.
          </p>

          <h3 className='example'>Example</h3>
          <Grid>
            <Nav parent type='side' cols='1-4'>
              <NavItem label='Active' href='#' active />
              <NavItem parent label='Item' href='#' >
                <Nav type='sub'>
                  <NavItem label='Sub item' href='#' />
                  <NavItem label='Sub item' href='#' />
                </Nav>
              </NavItem>
              <NavItem label='Item' href='#' />
            </Nav>
          </Grid>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
  {
`<Grid>
  <Nav parent type='side' cols='1-4'>
    <NavItem label='Active' href='#' active />
    <NavItem parent label='Item' href='#' >
      <Nav type='sub'>
        <NavItem label='Sub item' href='#' />
        <NavItem label='Sub item' href='#' />
      </Nav>
    </NavItem>
    <NavItem label='Item' href='#' />
  </Nav>
</Grid>
`}
          </Codeblock>
        </section>


        <section>
          <h2>Nav dropdown</h2>
          <p>
            Coming soon...
          </p>

          <h3 className='example'>Example</h3>
            <Grid>
              <Nav type='dropdown' items={[
                {
                  label: 'Home',
                  href: '#',
                  active: true
                },
                {
                  label: 'About',
                  href: '#'
                }
              ]}/>
            </Grid>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
  {`
  `}
          </Codeblock>
        </section>


        <section>
          <h2>Nav offcanvas</h2>
          <p>
            Coming soon...
          </p>

          <h3 className='example'>Example</h3>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
  {`
  `}
          </Codeblock>
        </section>


        <section>
          <h2>Nav accordion</h2>
          <p>
            Coming soon...
          </p>

          <h3 className='example'>Example</h3>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
  {`
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
                  <th className='uk-text-left'>Type</th>
                  <th className='uk-text-left'>Descrition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='uk-text-left'><code>link</code></td>
                  <td className='uk-text-left'>
                    Add the link <code>type</code> to create a link<br />
                    Add the <code>label</code> to provide a label for a link.<br />
                    Add the <code>href</code> props to provide a URL for a link.<br />
                    Add the <code>active</code>  prop to show the active as active.<br />
                  Add the <code>subtitle='*'</code> prop to create a subtitle.
                  </td>
                </tr>
                <tr>
                  <td className='uk-text-left'><code>header</code></td>
                  <td className='uk-text-left'>
                    Add the header <code>type</code> to a to create a header.<br />
                    Add the <code>label</code> to provide a label for a link.
                  </td>
                </tr>
                <tr>
                  <td className='uk-text-left'><code>divider</code></td>
                  <td className='uk-text-left'>Add the divider <code>type</code> to create a divider separating menu items.</td>
                </tr>
              </tbody>
            </Table>

            <h3 className='example'>Example</h3>

            <Grid>
              <Nav type='side' cols='1-4'>
                <NavItem type='header' label='Header'/>
                <NavItem label='Active' href='#' active />
                <NavItem label='Item' href='#' />
                <NavItem label='Item' href='#' subtitle='Subtitle'/>
                <NavItem label='Item' href='#' />
                <NavItem type='divider' />
                <NavItem label='Item' href='#' />
              </Nav>
            </Grid>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
{
`<Grid>
  <Nav type='side' cols='1-4'>
    <NavItem type='header' label='Header'/>
    <NavItem label='Active' href='#' active />
    <NavItem label='Item' href='#' />
    <NavItem label='Item' href='#' subtitle='Subtitle'/>
    <NavItem label='Item' href='#' />
    <NavItem type='divider' />
    <NavItem label='Item' href='#' />
  </Nav>
</Grid>
`}
          </Codeblock>
        </section>

        <section>
          <h2> Nav Item collections</h2>
          <h3 className='example'>Example</h3>
          <Grid>
            <Nav cols='1-4' type='side' items={[
              {
                label: 'Home',
                href: '#',
                active: true
              },
              {
                label: 'About',
                href: '#'
              }
            ]} />
          </Grid>

          <h4 className='code'>Code</h4>
          <Codeblock syntax='xml'>
{
`<Grid>
  <Nav cols='1-4' type='side' items={[
    {
      label: 'Home',
      href: '#',
      active: true
    },
    {
      label: 'About',
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

        <Table>
          <thead>
            <tr>
              <th className='uk-text-left'>Prop</th>
              <th className='uk-text-left'>Type</th>
              <th className='uk-text-left'>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='uk-text-left'>
                <code></code>
              </td>
              <td className='uk-text-left'></td>
              <td className='uk-text-left'></td>
            </tr>

          </tbody>
        </Table>
      </section>


    </div>;
  }
}
