'use strict';


import React from 'react';
import Button from 'react-uikit-button';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Modal from '../components/react-uikit-modal';
import velocity from 'velocity-animate';


const animateIn = (modal, dialog) => {
  velocity(modal, {opacity: 1}, {display: 'block'}, 300);
  velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
};

const animateOut = (modal, dialog) => {
  velocity(modal, {opacity:0}, { display: 'none' }, 300);
  velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
};


const blankAnimateIn = (modal, dialog) => {
  velocity(modal, {opacity: 1}, {display: 'block'}, 300);
  velocity(dialog, {translateY: [0, 0], opacity: 1}, {display: 'block'}, 200);
};

const blankAnimateOut = (modal, dialog) => {
  velocity(modal, {opacity:0}, { display: 'none' }, 300);
  velocity(dialog, {translateY: [0, 0], opacity: 0}, { display: 'none' }, 200);
};

const handleOkClick = (e) => {
  alert('prompt value: ' + e.item.value);
};


const ModalDoc = (props) => (
  <div>
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
var Modal = require('react-uikit-modal').default;`}
      </Codeblock>

      <hr className='uk-article-divider' />

    <p>
      The Modal component consists of an overlay, a dialog, a close button and a trigger.
    </p>

      <h3 className='example'>Example</h3>

      <Modal
        close
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => animateIn(modal, dialog),
            out: (modal, dialog) => animateOut(modal, dialog)
          }
        }}
      >
        <h2>Headline</h2>
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
      <Codeblock scroll='text'>
{`const animateIn = (modal, dialog) => {
  velocity(modal, {opacity: 1}, {display: 'block'}, 300);
  velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
};

const animateOut = (modal, dialog) => {
  velocity(modal, {opacity:0}, { display: 'none' }, 300);
  velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
};
...
<Modal
  close
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out: (modal, dialog) => animateOut(modal, dialog)
    }
  }}
>
  <h2>Headline</h2>
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
`}
      </Codeblock>
    </section>


    <section>
      <h2>Modal trigger</h2>
      <p>
        The <code>trigger</code> prop is a JSON object that passes props down to the trigger.
        The <code>body</code> property is the label of the trigger.
      </p>
      <p>
        The animate property takes an object with 2 property
        callbacks <code>in</code> and <code>out</code> that are toggled by the trigger.
        The modal overlay and dialog elements are passed bay to the callbacks.
      </p>
    </section>


    <section>
      <h2>Modal close</h2>
      <p>
        The <code>close</code> prop when present shows a close button. When clicked it will trigger the triggers animate out callback.
      </p>
    </section>


    <section>
      <h2>Modal header and footer</h2>
      <p>
        To add a header or a footer add the <code>header</code> or <code>footer</code> props respectivly.
        Any kind of prop type can be used  for the head or footer.
      </p>

      <h3 className='example'>Example</h3>
        <Modal
          header='Modal with header and footer'
          footer={<Button body='Save' />}
          close
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => animateIn(modal, dialog),
              out: (modal, dialog) => animateOut(modal, dialog)
            }
          }}

        >
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

      <Codeblock scroll='text'>
{`<Modal
  close
  header='Modal with header and footer'
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out: (modal, dialog) => animateOut(modal, dialog)
    }
  }}
  footer={<Button body='Save' />}
>
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
`}
      </Codeblock>
    </section>


    <section>
      <h2>Modal Caption</h2>
      <p>
        A caption can be displayed below the modal by passing a string to the <code>caption</code> prop.
      </p>

      <h3 className='example'>Example</h3>
        <Modal
          caption='This is a caption'
          close
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => animateIn(modal, dialog),
              out: (modal, dialog) => animateOut(modal, dialog)
            }
          }}
        >
          <h2>Modal with caption</h2>
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

      <Codeblock scroll='text'>
{` <Modal
  caption='this is a caption'
  close
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out: (modal, dialog) => animateOut(modal, dialog)
    }
  }}
>
  <h2>With caption</h2>
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
`}
      </Codeblock>
    </section>


    <section>
      <h2>Modal lightbox</h2>
      <p>
        The Modal componet can be used as a lightbox by adding the <code>lightbox</code> prop. Useful for images and videos.
      </p>

      <h3 className='example'>Example</h3>
        <Modal
          lightbox
          close
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => animateIn(modal, dialog),
              out: (modal, dialog) => animateOut(modal, dialog)
            }
          }}
        >
          <img
            src='docs/images/placeholder_600x400.svg'
            alt='Image place holder'
            width="100%"
            height="400"/>
        </Modal>

      <Codeblock scroll='text'>
{`<Modal
  lightbox
  close
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out: (modal, dialog) => animateOut(modal, dialog)
    }
  }}
>
  <img
    src='../docs/images/placeholder_600x400.svg'
    alt='Image place holder'
    width="100%"
    height="400"/>
</Modal>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Modal blank</h2>
      <p>
        The styling of the Mobal can be reset. e.g removing the padding and margin by adding the <code>blank</code> prop.
        This has the effect of creating a full screen modal.
      </p>

      <h3 className='example'>Example</h3>
        <Modal
          blank
          close
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => blankAnimateIn(modal, dialog),
              out: (modal, dialog) => blankAnimateOut(modal, dialog)
            }
          }}
        >
          <h2>Blank modal</h2>
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

      <Codeblock scroll='text'>
{`<Modal
  blank
  close
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => blankAnimateIn(modal, dialog),
      out: (modal, dialog) => blankAnimateOut(modal, dialog)
    }
  }}
>
  <h2>Blank modal</h2>
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
`}
      </Codeblock>
    </section>


    <section>
      <h2>Modal types</h2>
      <p>
        The Modal component can be set to <code>block</code>, <code>alert</code>, or <code>prompt</code>.
      </p>

      <Table caption='Modal types' head={['Props', 'Description']} body={[
        {
          prop: 'block',
          description: 'Default type, which dispalys an empty modal'
        }, {
          prop: 'alert',
          description: 'Displays an alert style modal with an OK button'
        }, {
          prop: 'prompt',
          description: 'Dispalys a prompt style modal with a text input, cancel and OK buttons'
        }
      ]}
    />

  <h3>Modal buttons</h3>
    <p>
      Props can be passed to the cancel and ok buttons by using the <code>cancel</code> and <code>OK</code> respectivly.
    </p>
    <p>
      The arlet OK  button by default will trigger the animate out if no onClick method is present.
      The same behaviour is true for th propmt cancel button.
    </p>
    <p>
      For prompt Ok button an onClick method is required or
      an <em>Uncaught TypeError: props.ok.onClick</em> is not a function will be thrown.
      The callback will return the event properties with an additional
      item property which will contain the kitid and the value of the input.
    </p>

      <h3>Block</h3>
      <h4 className='example'>Example</h4>
        <Modal
          ok={{context: 'primary'}}
          type='alert'
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => animateIn(modal, dialog),
              out : (modal, dialog) => animateOut(modal, dialog)
            }
          }}
        >
          <p>
            This is a block modal.
          </p>
        </Modal>

      <Codeblock>
{`<Modal
  ok={{context: 'primary'}}
  type='alert'
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out : (modal, dialog) => animateOut(modal, dialog)
    }
  }}
>
  <p>
    This is a block modal.
  </p>
</Modal>
`}
      </Codeblock>


      <h3>Alert</h3>
      <h4 className='example'>Example</h4>
        <Modal
          type='alert'
          ok={{context: 'primary'}}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => animateIn(modal, dialog),
              out : (modal, dialog) => animateOut(modal, dialog)
            }
          }}
        >
          <p>
            This is an alert modal.
          </p>
        </Modal>

      <Codeblock>
{`<Modal
  type='alert'
  ok={{context: 'primary'}}
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out : (modal, dialog) => animateOut(modal, dialog)
    }
  }}
>
  <p>
    This is an alert modal.
  </p>
</Modal>
`}
      </Codeblock>


      <h3>Prompt</h3>
      <h4 className='example'>Example</h4>
        <Modal
          type='prompt'
          ok={{
            context: 'primary',
            onClick: (e) => handleOkClick(e)
          }}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => animateIn(modal, dialog),
              out : (modal, dialog) => animateOut(modal, dialog)
            }
          }}
        >
          <p>
            This is an prompt modal:
          </p>
        </Modal>

      <Codeblock>
{`<Modal
  type='prompt'
  ok={{
    context: 'primary',
    onClick: (e) => handleOkClick(e)
  }}
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => animateIn(modal, dialog),
      out : (modal, dialog) => animateOut(modal, dialog)
    }
  }}
>
  <p>
    This is an prompt modal:
  </p>
</Modal>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Modal large</h2>
      <p>
        To fit the modal to the width of the site container add the <code>large</code> props.
      </p>

      <h3 className='example'>Example</h3>
        <Modal
          large
          close
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => blankAnimateIn(modal, dialog),
              out: (modal, dialog) => blankAnimateOut(modal, dialog)
            }
          }}
        >
          <h2>Large modal</h2>
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

      <Codeblock scroll='text'>
{`const handleOkClick = (e) => {
  alert('prompt value: ' + e.item.value);
};
...
<Modal
  large
  close
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => blankAnimateIn(modal, dialog),
      out: (modal, dialog) => blankAnimateOut(modal, dialog)
    }
  }}
>
  <h2>Blank modal</h2>
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

      <Table caption='Modal Props' head={['Props', 'Type']} body={[
        {
          props: 'blank',
          type: 'bool'
        }, {
          props: 'cancel',
          type: 'object'
        }, {
          props: 'close',
          type: 'bool'
        }, {
          props: 'dialog',
          type: 'object'
        }, {
          props: 'footer',
          type: 'any'
        }, {
          props: 'header',
          type: 'any'
        }, {
          props: 'lightbox',
          type: 'bool'
        }, {
          props: 'ok',
          type: 'object'
        }, {
          props: 'large',
          type: 'bool'
        }, {
          props: 'trigger',
          type: 'object'
        }, {
          props: 'type',
          type: 'oneOf block, alert, prompt'
        }
      ]}/>
    </section>


  </div>
);

export default ModalDoc;
