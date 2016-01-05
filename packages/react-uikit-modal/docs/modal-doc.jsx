'use strict';


import React from 'react';
import Button from '../../react-uikit-button/lib/button';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Modal from '../../react-uikit-modal/lib/modal';
import velocity from 'velocity-animate';
import Note from '../../react-uikit-note/lib/note';

export default class ModalHandler extends React.Component {
  animateIn (modal, dialog) {
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: 100, opacity: 1}, {display: 'block'}, 200);
  }

  animateOut (modal, dialog) {
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
  }

  render () {
    return <div>
      <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
      <section>
        <h1>React Uikit Modal</h1>
        <p className='uk-article-lead'>
          Displays dialogs propmts.
        </p>
        <p>
          <a href='http://otissv.github.io/react-uikit-components/'>http://otissv.github.io/react-uikit-components</a> for docs.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-modal --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Modal from 'react-uikit-modal';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Modal = require&#40;'react-uikit-modal'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <hr className='uk-article-divider' />

        <h3 className='example'>Example</h3>

        <Modal
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
          footer={<Button body='Save' />} >
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Modal>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`
`}
        </Codeblock>
      </section>


      <section>
        <h2></h2>
        <p>

        </p>

        <h3 className='example'>Example</h3>

        <Codeblock syntax='xml'>
{`
  `}
        </Codeblock>
      </section>

      <section>
        <h2>Modal Props</h2>
        <p>
          <code>&lt;Modal&gt;</code> props and their types.
        </p>
        <p>
          See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
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


      <section>
        <h2>Tests</h2>
        <p>
          <code>npm run test</code> to run tests with minimal output.<br />
          <code>npm run test:spec</code> to run tests with detailed output.<br />
          <code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br />
        </p>
      </section>

      <section>
        <h2>Build</h2>
        <p>
          <code>npm run build</code> to build files fro distribution.<br />
          <code>npm run build:watch</code> watches src directory and builds files on changes.<br />
        </p>
      </section>


      <section>
        <h2>Lint</h2>
        <p>
          <code>npm run lint</code> lints scripts in src directory.<br />
          <code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br />
        </p>
      </section>


      <section>
        <h2>License</h2>
          <p>MIT</p>
      </section>

    </div>;
  }
}
