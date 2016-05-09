'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Note from 'react-uikit-note';
import Table from 'react-uikit-table';


export default class NoteHandler extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Note</h1>
        <p className='uk-article-lead'>
          Easily add notes to content.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-note'>react-uikit-note</a> on github.
        </p>
      </section>


      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-note --save;
// ES6
import Note from 'react-uikit-note';

// ES5
var Note = require&('react-uikit-note').default`}
        </Codeblock>

        <hr className="uk-article-divider" />

        <p>
          The Note component consists of a paragraph with a prefixed bagde.
          To create a Note component add a label for the badge
          prop <code>badge='NOTE'</code> and either add
          text as a child or to the <code>body</code> prop.
          If no bagde is provided the default badge is 'Note'
        </p>

        <h3 className='example'>Example</h3>
        <Note>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Note>

        <Note badge='EXAMPLE'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Note>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Note>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Note>

<Note badge='EXAMPLE'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Note>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Note context</h2>
        <p>
          Note badges can be given context using the badge prop and setting the context property.
        </p>

        <h3 className='example'>Example</h3>
        <Note badge={{body: 'Success', context:'success'}}>
          Lorem ipsum dolor sit amet
        </Note>

        <Note badge={{body: 'Warning', context:'warning'}}>
          Lorem ipsum dolor sit amet
        </Note>

        <Note badge={{body: 'Danger', context:'danger'}}>
          Lorem ipsum dolor sit amet
        </Note>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Note badge={{body: 'Success', context:'success'}}>
  Lorem ipsum dolor sit amet
</Note>

<Note badge={{body: 'Warning', context:'warning'}}>
  Lorem ipsum dolor sit amet
</Note>

<Note badge={{body: 'Danger', context:'danger'}}>
  Lorem ipsum dolor sit amet
</Note>`}
        </Codeblock>
      </section>


      <section>
        <h2>Note Props</h2>
        <p>
          See Badge component from more information.
        </p>
      </section>


      <section>
        <h2>Badge Props</h2>
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
              <td className='uk-text-left'>string or object<br /> See Badge component for props.</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                body
              </td>
              <td className='uk-text-left'>string</td>
            </tr>
          </tbody>
        </Table>
      </section>

    </div>;
  }
}
