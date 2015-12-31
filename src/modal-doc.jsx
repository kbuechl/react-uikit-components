'use strict';


import React from 'react';
import Button from '.react-uikit-button';
import Codeblock from '.react-uikit-codeblock';
import Table from '.react-uikit-table';
import Modal from '.react-uikit-modal';
import velocity from 'velocity-animate';


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
      <section>
        <h1>Modal</h1>
        <p className='uk-article-lead'>
          Displays dialogs prompts.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-modal'>react-uikit-modal</a> on github.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-modal --save;
// ES6
import Modal from 'react-uikit-modal';

// ES5
var Modal = require('react-uikit-modal');`}
        </Codeblock>

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
