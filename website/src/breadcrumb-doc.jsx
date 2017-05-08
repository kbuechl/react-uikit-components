'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Breadcrumb from 'react-uikit-breadcrumb';
import BreadcrumbItem from 'react-uikit-breadcrumb/lib/breadcrumb-item';
import Table from 'react-uikit-table';


export default class BreadcrumbDoc extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Breadcrumb</h1>
        <p>
        Create breadcrumbs to show users their location within a website.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-breadcrumb'>react-uikit-breadcrumb</a> on github.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-breadcrumb --save;</code>

// ES6
Breadcrumb uikit from 'react-uikit-breadcrumb';
BreadcrumbItem uikit from 'react-uikit-breadcrumb/lib/na-vitem';

// ES5
var Breadcrumb = require('react-uikit-breadcrumb').default;
var BreadcrumbItem = require('react-uikit-breadcrumb/lib/breadcrumb-item').default;
`}
        </Codeblock>

        <hr className="uk-article-divider" />

        <h2>Breadcrumb</h2>
        <p>
          The Breadcrumb component consists of links which are aligned side by side and separated by a divider.
        </p>

        <Table head={['Type', 'Description']} body={[
          {
            type: 'link',
            description: 'Creates breadcrumb item as a Link'
          }, {
            type: 'acive',
            description: 'Shows the breadcrumb item as active'
          }, {
            type: 'disabled',
            description: 'Disables the breadcrumb Item'
          }
        ]} />

        <h3 className='example'>Example</h3>

        <Breadcrumb kitid='bread'>
          <BreadcrumbItem kitid='1' body='Home'/>
          <BreadcrumbItem kitid='4' type='link' body='link'/>
          <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
          <BreadcrumbItem kitid='2' type='active' body='Post'/>
        </Breadcrumb>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Breadcrumb kitid='bread'>
  <BreadcrumbItem kitid='1' body='Home'/>
  <BreadcrumbItem kitid='4' type='link' body='link'/>
  <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
  <BreadcrumbItem kitid='2' type='active' body='Post'/>
</Breadcrumb>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Breadcrumb Props</h2>
        <p>

        See base component for additional utility props.
        </p>

        <Table head={['Prop', 'Type']} body={[
          {
            prop: 'items',
            type: 'array'
          },
          {
            prop: 'type',
            type: 'oneOf active, link, or disabled'
          }
        ]}>

        </Table>
      </section>


      <section>
        <h2>Breadcrumb Item Props</h2>
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
            prop: 'type',
            type: 'oneOf active, link, or disabled'
          }
        ]}>

        </Table>
      </section>

    </div>;
  }
}
