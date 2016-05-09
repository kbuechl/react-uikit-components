'use strict';


import React from 'react';
import Badge from 'react-uikit-badge';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';


const BadgeDoc = (props) => (
  <div>
    <section>
      <h1>Badge</h1>
        <p className='uk-article-lead'>
          Easily create nicely looking badges to label and highlight your content.
        </p>
        <p>
          <a href='https://github.com/otissv/react-uikit-badge'>react-uikit-badge</a> on github.
        </p>
      </section>


      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-badge --save;

// ES6
mport Badge from 'react-uikit-badge';

// ES5
var Badge = require;('react-uikit-badge').default;`}
      </Codeblock>

      <hr className="uk-article-divider" />

      <p>
        By default badges are <code>&lt;span&gt;</code> but they can also be <code>&lt;div&gt;</code>.
      </p>
      <p>
        Add the <code>block</code> prop to create a <code>&lt;div&gt;</code> instead
        of a <code>&lt;span&gt;</code>.
      </p>

      <p>
        Text can be added either as children <code>&lt;Badge&gt;Awesome&lt;/Badge&gt;</code> or
        by setting the <code>body</code> prop <code>&lt;Badge body='Awesome'/&gt;</code>.
      </p>

      <h3 className='example'>Example</h3>
      <Badge>Info</Badge> <Badge>New</Badge> <Badge>Free</Badge>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Badge>Info</Badge>
<Badge>New</Badge>
<Badge>Free</Badge>`}
      </Codeblock>
    </section>


    <section>
      <h2>Badge notifications</h2>
      <p>
        Use the <code>notification</code> prop to indicate that the badge is a notification.
        Typically it is used with numbers.
      </p>

      <h3 className='example'>Example</h3>
      <Badge notification>3</Badge> <Badge notification>20</Badge> <Badge notification>100</Badge>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Badge notification>3</Badge>
<Badge notification>20</Badge>
<Badge notification>100</Badge>`}
      </Codeblock>
    </section>


    <section>
      <h2>Badge contexts</h2>
      <p>
        Add the <code>context='success'</code> or <code>context='warning'</code> or <code>context='danger'</code> prop
          for additional context.
      </p>

      <h3 className='example'>Example</h3>
      <Badge context='success'>success</Badge> <Badge context='warning'>warning</Badge> <Badge context='danger'>danger</Badge><br />
      <Badge notification context='success'>1</Badge> <Badge notification context='warning'>10</Badge> <Badge notification context='danger'>99+</Badge>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
        {
`<Badge context='success'>success</Badge>
<Badge context='warning'>warning</Badge>
<Badge context='danger'>danger</Badge><br />

<Badge notification context='success'>1</Badge>
<Badge notification context='warning'>10</Badge>
<Badge notification context='danger'>99+</Badge>`}
      </Codeblock>
    </section>


    <section>
      <h2>Badge Props</h2>

      <p>
        See Base for additional utility props.
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
              context
            </td>
            <td className='uk-text-left'>oneOf <br />success, warning, danger</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              block
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              body
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              notification
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
        </tbody>
      </Table>
    </section>
  </div>
);

export default BadgeDoc;
