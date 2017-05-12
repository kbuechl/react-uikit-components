'use strict';


import React from 'react';
import Button from 'react-uikit-button';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Modal from 'react-uikit-modal';
import velocity from 'velocity-animate';


class ModalDoc extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      show: false,
      confirm: false
    };
    this.animateIn =  this.animateIn.bind(this);
    this.animateOut = this.animateOut.bind(this);
    this.blankAnimateIn = this.blankAnimateIn.bind(this);
    this.blankAnimateOut = this.blankAnimateOut.bind(this);
    this.comfirmAnimateIn = this.comfirmAnimateIn.bind(this);
    this.comfirmAnimateOut = this.comfirmAnimateOut.bind(this);
    this.handleOkClick = this.handleOkClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleConfirmOkClick = this.handleConfirmOkClick.bind(this);
    this.handleConfirmCancelClick = this.handleConfirmCancelClick.bind(this);
  }

  animateIn (modal, dialog) {
    this.setState({show: true});
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
  }


  animateOut (modal, dialog) {
    this.setState({show: false});
    this.setState({confirm: false});
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
  }


  blankAnimateIn (modal, dialog) {
    this.setState({show: true});
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: [0, 0], opacity: 1}, {display: 'block'}, 200);
  }


  blankAnimateOut (modal, dialog) {
    this.setState({show: false});
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: [0, 0], opacity: 0}, { display: 'none' }, 200);
  }


  comfirmAnimateIn (modal, dialog) {
    this.setState({confirm: true});
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
  }


  comfirmAnimateOut (modal, dialog) {
    this.setState({show: false});
    this.setState({confirm: false});
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
  }


  handleOkClick (e) {
    alert('prompt value: ' + e.item.value);
  }

  handleConfirmOkClick (e) {
    alert('confrim modal OK clicked');
  }

  handleConfirmCancelClick (e) {
    // this.setState({show: false});
    // this.setState({confirm: false});
  }


  handleConfirmClick (e) {
    alert('modal confirmed');
    setTimeout(() =>  this.setState({confirm: false}), 500);
  }


  render() {
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
  var Modal = require('react-uikit-modal').default;`}
        </Codeblock>

        <hr className='uk-article-divider' />

      <p>
        The Modal component consists of an overlay, a dialog, a close button and a trigger.
        The Modal componet does not contain any state for show the dialog and therefore
        must be passed via the <code>show</code> prop.
      </p>

      <p>
        The Modal componet does not contain any state for show the dialog and therefore
        must be passed via the <code>show</code> prop.
      </p>

        <h3 className='example'>Example</h3>

        <Modal
          close
          show={this.state.show}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
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
  {`class Container extends React.Component {
      constructor (props) {
        super(props);

        this.state = {
          show: false
        };
      }

      animateIn (modal, dialog) {
        this.setState({show: true});
        velocity(modal, {opacity: 1}, {display: 'block'}, 300);
        velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
      }

      animateOut (modal, dialog) {
        this.setState({show: false});
        velocity(modal, {opacity:0}, { display: 'none' }, 300);
        velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
      }

      render() {
        <Modal
          close
          show={this.state.show}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
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
      }
    }
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
          The modal overlay and dialog elements are passed to the callbacks.
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
          To add a header or a footer add the <code>header</code> or <code>footer</code> props respectively.
          Any kind of prop type can be used for the header or footer.
        </p>

        <h3 className='example'>Example</h3>
          <Modal
            show={this.state.show}
            header='Modal with header and footer'
            footer={<Button body='Save' />}
            close
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out: (modal, dialog) => this.animateOut(modal, dialog)
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
    show={this.state.show}
    header='Modal with header and footer'
    footer={<Button body='Save' />}
    close
    trigger={{
      body: 'Open',
      animate: {
        'in': (modal, dialog) => this.animateIn(modal, dialog),
        out: (modal, dialog) => this.animateOut(modal, dialog)
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
            show={this.state.show}
            caption='This is a caption'
            close
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out: (modal, dialog) => this.animateOut(modal, dialog)
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
  {`<Modal
    show={this.state.show}
    caption='This is a caption'
    close
    trigger={{
      body: 'Open',
      animate: {
        'in': (modal, dialog) => this.animateIn(modal, dialog),
        out: (modal, dialog) => this.animateOut(modal, dialog)
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
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Modal lightbox</h2>
        <p>
          The Modal component can be used as a lightbox by adding the <code>lightbox</code> prop. Useful for images and videos.
        </p>

        <h3 className='example'>Example</h3>
          <Modal
            show={this.state.show}
            lightbox
            close
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out: (modal, dialog) => this.animateOut(modal, dialog)
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
    show={this.state.show}
    lightbox
    close
    trigger={{
      body: 'Open',
      animate: {
        'in': (modal, dialog) => this.animateIn(modal, dialog),
        out: (modal, dialog) => this.animateOut(modal, dialog)
      }
    }}
  >
    <img
      src='docs/images/placeholder_600x400.svg'
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
          The styling of the Modal can be reset, e.g removing the padding and margin by adding the <code>blank</code> prop.
          This has the effect of creating a full screen modal.
        </p>

        <h3 className='example'>Example</h3>
          <Modal
            show={this.state.show}
            blank
            close
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.blankAnimateIn(modal, dialog),
                out: (modal, dialog) => this.blankAnimateOut(modal, dialog)
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
    show={this.state.show}
    blank
    close
    trigger={{
      body: 'Open',
      animate: {
        'in': (modal, dialog) => this.blankAnimateIn(modal, dialog),
        out: (modal, dialog) => this.blankAnimateOut(modal, dialog)
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
          }, {
            prop: 'confirm',
            description: 'Dispalys a modal with cancel and OK buttons. When OK is clicked a confirm style modal is displayed with a cancel and OK buttton'
          }
        ]}
      />

    <h3>Modal buttons</h3>
      <p>
        Props can be passed to the cancel, OK and confirm buttons by using the <code>cancel</code>, <code>OK</code> and <code>confirm</code> props respectively.
      </p>
      <p>
        The alret OK button by default will trigger the animate out and the onClick method if present.
        The same behaviour is true for the propmt cancel and confirm buttons.
      </p>
      <p>
        If a callback is provied for a button an object will be returned with the event properties with an additional
        item property which will contain the kitid. If the modal is a propmt the item property will also include the input value.
      </p>

        <h3>Block</h3>
        <h4 className='example'>Example</h4>
          <Modal
            show={this.state.show}
            ok={{context: 'primary'}}
            type='alert'
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out : (modal, dialog) => this.animateOut(modal, dialog)
              }
            }}
          >
            <p>
              This is a block modal.
            </p>
          </Modal>

        <Codeblock scroll='text'>
  {`<Modal
  show={this.state.show}
  ok={{context: 'primary'}}
  type='alert'
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => this.animateIn(modal, dialog),
      out : (modal, dialog) => this.animateOut(modal, dialog)
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
            show={this.state.show}
            type='alert'
            ok={{context: 'primary'}}
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out : (modal, dialog) => this.animateOut(modal, dialog)
              }
            }}
          >
            <p>
              This is an alert modal.
            </p>
          </Modal>

        <Codeblock scroll='text'>
  {`<Modal
  show={this.state.show}
  type='alert'
  ok={{context: 'primary'}}
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => this.animateIn(modal, dialog),
      out : (modal, dialog) => this.animateOut(modal, dialog)
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
            show={this.state.show}
            type='prompt'
            ok={{
              context: 'primary',
              onClick: this.handleOkClick
            }}
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out : (modal, dialog) => this.animateOut(modal, dialog)
              }
            }}
          >
            <p>
              This is an prompt modal:
            </p>
          </Modal>

        <Codeblock scroll='text'>
  {` ...
handleOkClick (e) {
  alert('prompt value: ' + e.item.value);
}
...

  <Modal
    show={this.state.show}
    type='prompt'
    ok={{
      context: 'primary',
      onClick: this.handleOkClick
    }}
    trigger={{
      body: 'Open',
      animate: {
        'in': (modal, dialog) => this.animateIn(modal, dialog),
        out : (modal, dialog) => this.animateOut(modal, dialog)
      }
    }}
  >
    <p>
      This is an prompt modal:
    </p>
  </Modal>
  `}
        </Codeblock>


        <h3>Confirm</h3>
        <h4 className='example'>Example</h4>
          <Modal
            show={this.state.show}
            type='confirm'
            confirm={{
              context: 'danger',
              show: this.state.confirm,
              dialog: <p>This is an comfirm modal</p>,
              body: 'Confirm',
              onClick: this.handleConfirmClick,
              animate: {
                'in': this.comfirmAnimateIn,
                out: this.animateOut
              }
            }}
            ok={{
              context: 'primary',
              onClick: this.handleConfirmOkClick
            }}
            trigger={{
              body: 'Open',
              animate: {
                'in': this.animateIn,
                out : this.animateOut
              }
            }}
          >
            <p>
              Are you sure?
            </p>
          </Modal>

        <Codeblock scroll='text'>
  {` ...
handleOkClick (e) {
  alert('prompt value: ' + e.item.value);
}

animateIn (modal, dialog) {
  this.setState({show: true});

  velocity(modal, {opacity: 1}, {display: 'block'}, 300);
  velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
}

animateOut (modal, dialog) {
  this.setState({show: false});

  this.setState({confirm: false});
  velocity(modal, {opacity:0}, { display: 'none' }, 300);
  velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
}

comfirmAnimateIn (modal, dialog) {
  this.setState({confirm: true});

  velocity(modal, {opacity: 1}, {display: 'block'}, 300);
  velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
}

comfirmAnimateOut (modal, dialog) {
  this.setState({show: false});
  this.setState({confirm: false});

  velocity(modal, {opacity:0}, { display: 'none' }, 300);
  velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
}

handleConfirmClick (e) {
  alert('modal confirmed');
  setTimeout(() =>  this.setState({confirm: false}), 500);
}
...
  <Modal
    show={this.state.show}
    type='confirm'
    confirm={{
      context: 'danger',
      show: this.state.confirm,
      dialog: <p>This is an comfirm modal</p>,
      body: 'Confirm',
      onClick: this.handleConfirmClick,
      animate: {
        'in': this.comfirmAnimateIn,
        out: this.comfirmAnimateOut
      }
    }}
    ok={{
      context: 'primary',
      onClick: this.handleConfirmOkClick
    }}


    trigger={{
      body: 'Open',
      animate: {
        'in': this.animateIn,
        out : this.animateOut
      }
    }}
  >
    <p>
      Are you sure?
    </p>
  </Modal>
...
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
            show={this.state.show}
            large
            close
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.blankAnimateIn(modal, dialog),
                out: (modal, dialog) => this.blankAnimateOut(modal, dialog)
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
  {`<Modal
    show={this.state.show}
  large
  close
  trigger={{
    body: 'Open',
    animate: {
      'in': (modal, dialog) => this.blankAnimateIn(modal, dialog),
      out: (modal, dialog) => this.blankAnimateOut(modal, dialog)
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
            props: 'confirm',
            type: 'object'
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
            props: 'show',
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
    </div>;
  }
}

export default ModalDoc;
