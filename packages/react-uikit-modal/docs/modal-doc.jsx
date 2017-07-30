import React, { PropTypes } from 'react';

import Button from 'react-uikit-button';
import Table from 'react-uikit-table';
import Modal from '../lib/modal';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

let velocity;
if (process.env.NODE_ENV !== 'mdGenerator') {
  velocity = require('velocity-animate');
} else {
  velocity = () => {};
}

const name = 'Modal';
const npmName = 'react-uikit-modal';
const summary = 'Displays dialogs prompts';
const propTuples = [
  { Props: 'blank', Type: 'bool' },
  { Props: 'cancel', Type: 'object' },
  { Props: 'close', Type: 'bool' },
  { Props: 'confirm', Type: 'object' },
  { Props: 'dialog', Type: 'object' },
  { Props: 'footer', Type: 'any' },
  { Props: 'header', Type: 'any' },
  { Props: 'lightbox', Type: 'bool' },
  { Props: 'ok', Type: 'object' },
  { Props: 'large', Type: 'bool' },
  { Props: 'show', Type: 'bool' },
  { Props: 'trigger', Type: 'object' },
  { Props: 'type', Type: 'oneOf block, alert, prompt' }
];

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const animateSnippet = `animate: {\n  in: this.animateIn,\n  out: this.animateOut\n}`;
const blankAnimateSnippet = `animate: {\n  in: this.blankAnimateIn,\n  out: this.blankAnimateOut\n}`;

const basicExample = ({ animate, show }) => (
  <Modal close show={show} trigger={{ body: 'Open', animate }}>
    <h2>Headline</h2>
    <p>{loremIpsumString}</p>
  </Modal>
);
basicExample.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const basicSnippet = `
  <Modal close show={this.state.show} trigger={{ body: 'Open', ${animateSnippet} }}>
    <h2>Headline</h2>
    <p>{loremIpsumString}</p>
  </Modal>`;

const headerAndFooterExaple = ({ animate, show }) => (
  <Modal show={show} header='Modal with header and footer' footer={<Button body='Save' />} close trigger={{ body: 'Open', animate }}>
    <p>{loremIpsumString}</p>
  </Modal>
);
headerAndFooterExaple.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const headerAndFooterSnippet = `
  <Modal show={this.state.show} header='Modal with header and footer' footer={<Button body='Save' />} close trigger={{ body: 'Open', ${animateSnippet} }}>
    <p>${loremIpsumString}</p>
  </Modal>`;

const captionExaple = ({ animate, show }) => (
  <Modal show={show} caption='This is a caption' close trigger={{body: 'Open',animate}}>
    <h2>Modal with caption</h2>
    <p>{loremIpsumString}</p>
  </Modal>
);
captionExaple.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const captionSnippet = `
  <Modal show={show} caption='This is a caption' close trigger={{ body: 'Open', ${animateSnippet} }}>
    <h2>Modal with caption</h2>
    <p>${loremIpsumString}</p>
  </Modal>`;

const lightboxExaple = ({ animate, show }) => (
    <Modal show={show} lightbox close trigger={{ body: 'Open', animate }}>
      <img src='docs/images/placeholder_600x400.svg' alt='Image place holder' width="100%" height="400"/>
    </Modal>
);
lightboxExaple.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const lightboxSnippet = `
  <Modal show={this.state.show} lightbox close trigger={{ body: 'Open', ${animateSnippet} }}>
    <img src='docs/images/placeholder_600x400.svg' alt='Image place holder' width="100%" height="400"/>
  </Modal>`;

const blankExample = ({ animate, show }) => (
  <Modal show={show} blank close trigger={{ body: 'Open', animate }}>
    <h2>Blank modal</h2>
    <p>{loremIpsumString}</p>
  </Modal>
);
blankExample.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const blankSnippet = `
  <Modal show={this.state.show} blank close trigger={{ body: 'Open', ${blankAnimateSnippet} }}>
    <h2>Blank modal</h2>
    <p>${loremIpsumString}</p>
  </Modal>`;

const typeTable = (
  <Table caption='Modal types' head="*" body={[
    {Prop: 'block', Description: 'Default type, which dispalys an empty modal'},
    {Prop: 'alert', Description: 'Displays an alert style modal with an OK button'},
    {Prop: 'prompt', Description: 'Dispalys a prompt style modal with a text input, cancel and OK buttons'},
    {Prop: 'confirm', Description: 'Dispalys a modal with cancel and OK buttons. When OK is clicked a confirm style modal is displayed with a cancel and OK buttton'}
  ]} />
);
const blockExample = ({ animate, show }) => (
  <Modal show={show} ok={{context: 'primary'}} type='alert' trigger={{ body: 'Open', animate }}>
    <p>This is a block modal.</p>
  </Modal>
);
blockExample.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const blockSnippet = `
  <Modal show={this.state.show} ok={{context: 'primary'}} type='alert' trigger={{ body: 'Open', ${animateSnippet} }}>
    <p>This is a block modal.</p>
  </Modal>`;
const alertExample = ({ animate, show }) => (
  <Modal show={show} type='alert' ok={{context: 'primary'}} trigger={{ body: 'Open', animate }}>
    <p>This is an alert modal.</p>
  </Modal>
);
alertExample.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const alertSnippet = `
  <Modal show={this.state.show} type='alert' ok={{context: 'primary'}} trigger={{ body: 'Open', ${animateSnippet} }}>
    <p>This is an alert modal.</p>
  </Modal>`;
const promptExample = ({ animate, show, okClick }) => (
  <Modal show={show} type='prompt' ok={{context: 'primary', onClick: okClick}} trigger={{ body: 'Open', animate }}>
    <p>This is an prompt modal</p>
  </Modal>
);
promptExample.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
  okClick: PropTypes.func,
};
const promptSnippet = `
  <Modal show={this.state.show} type='prompt' ok={{context: 'primary', onClick: this.handleOkClick}} trigger={{ body: 'Open', ${animateSnippet} }}>
    <p>This is an prompt modal</p>
  </Modal>`;
const confirmExample = ({ animate, confirm, show, handleConfirmOkClick }) => (
  <Modal show={show} type='confirm' confirm={confirm} ok={{context: 'primary', onClick: handleConfirmOkClick}} trigger={{body: 'Open', animate: animate}}>
    <p>Are you sure?</p>
  </Modal>
);
confirmExample.propTypes = {
  animate: PropTypes.object,
  confirm: PropTypes.object,
  show: PropTypes.bool,
  handleConfirmOkClick: PropTypes.func,
};
const confirmSnippet = `
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
  const confirm = {
    context: 'danger',
    show: confirm,
    dialog: (<p>This is an comfirm modal</p>),
    body: 'Confirm',
    onClick: this.handleConfirmClick,
    animate: { in: this.comfirmAnimateIn, out: this.animateOut }
  };
  ...
  <Modal show={this.state.show} type='confirm' confirm={confirm} ok={{context: 'primary', onClick: handleConfirmOkClick}} trigger={{body: 'Open', animate: ${animateSnippet}}}>
    <p>Are you sure?</p>
  </Modal>`;

const largeExample = ({ animate, show }) => (
  <Modal show={show} large close trigger={{ body: 'Open', animate }}>
    <h2>Large modal</h2>
    <p>{loremIpsumString}</p>
  </Modal>
);
largeExample.propTypes = {
  animate: PropTypes.object,
  show: PropTypes.bool,
};
const largeSnippet = `
  <Modal show={this.state.show} large close trigger={{ body: 'Open', ${blankAnimateSnippet} }}>
    <h2>Large modal</h2>
    <p>${loremIpsumString}</p>
  </Modal>`;

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
    const animate = {
      in: (modal, dialog) => this.animateIn(modal, dialog),
      out: (modal, dialog) => this.animateOut(modal, dialog)
    };
    const blankAnimate = {
      in: (modal, dialog) => this.blankAnimateIn(modal, dialog),
      out: (modal, dialog) => this.blankAnimateOut(modal, dialog)
    };
    const { show } = this.state;
    const confirm = {
      context: 'danger',
      show: confirm,
      dialog: (<p>This is an comfirm modal</p>),
      body: 'Confirm',
      onClick: this.handleConfirmClick,
      animate: { in: this.comfirmAnimateIn, out: this.animateOut }
    };

    return (
      <div data-markdown-omit-wrapper="true">
        <DocHeader {... { name, npmName, summary }} />
        <DocExample
          description={
            <div>
              <p>The Modal component consists of an overlay, a dialog, a close button and a trigger. The Modal componet does not contain any state for show the dialog and therefore must be passed via the <code>show</code> prop.</p>
              <p>The Modal componet does not contain any state for show the dialog and therefore must be passed via the <code>show</code> prop.</p>
            </div>
          }
          jsx={basicExample({ animate, show })}
          snippet={basicSnippet}
        />
        <DocExample
          name="Modal trigger"
          description={
            <div>
              <p>The <code>trigger</code> prop is a JSON object that passes props down to the trigger. The <code>body</code> property is the label of the trigger.</p>
              <p>The animate property takes an object with 2 property callbacks <code>in</code> and <code>out</code> that are toggled by the trigger. The modal overlay and dialog elements are passed to the callbacks.</p>
            </div>
          }
        />
        <DocExample
          name="Modal close"
          description={<span>The <code>close</code> prop when present shows a close button. When clicked it will trigger the triggers animate out callback.</span>}
        />
        <DocExample
          name="Modal header and footer"
          description={<span>To add a header or a footer add the <code>header</code> or <code>footer</code> props respectively. Any kind of prop type can be used for the header or footer.</span>}
          jsx={headerAndFooterExaple({ animate, show })}
          snippet={headerAndFooterSnippet}
        />
        <DocExample
          name="Modal caption"
          description={<span>A caption can be displayed below the modal by passing a string to the <code>caption</code> prop.</span>}
          jsx={captionExaple({ animate, show })}
          snippet={captionSnippet}
        />
        <DocExample
          name="Modal lightbox"
          description={<span>The Modal component can be used as a lightbox by adding the <code>lightbox</code> prop. Useful for images and videos.</span>}
          jsx={lightboxExaple({ animate, show })}
          snippet={lightboxSnippet}
        />
        <DocExample
          name="Modal blank"
          description={<span>The styling of the Modal can be reset, e.g removing the padding and margin by adding the <code>blank</code> prop. This has the effect of creating a full screen modal.</span>}
          jsx={blankExample({ animate: blankAnimate, show })}
          snippet={blankSnippet}
        />
        <DocExample
          name="Modal types"
          description={<span>The Modal component can be set to <code>block</code>, <code>alert</code>, or <code>prompt</code></span>}
          table={typeTable}
        />
        <DocExample
          name="Modal buttons"
          description={<div>
            <p>Props can be passed to the cancel, OK and confirm buttons by using the <code>cancel</code>, <code>OK</code> and <code>confirm</code> props respectively.</p>
            <p>The alret OK button by default will trigger the animate out and the onClick method if present. The same behaviour is true for the propmt cancel and confirm buttons.</p>
            <p>If a callback is provied for a button an object will be returned with the event properties with an additional item property which will contain the kitid. If the modal is a propmt the item property will also include the input value.</p>
          </div>}
        />
        <DocExample
          name="Block"
          jsx={blockExample({ animate: blankAnimate, show })}
          snippet={blockSnippet}
        />
        <DocExample
          name="Alert"
          jsx={alertExample({ animate, show })}
          snippet={alertSnippet}
        />
        <DocExample
          name="Prompt"
          jsx={promptExample({ animate, show, okClick: this.handleOkClick })}
          snippet={promptSnippet}
        />
        <DocExample
          name="Confirm"
          jsx={confirmExample({ animate, confirm, show, handleConfirmOkClick: this.handleConfirmOkClick })}
          snippet={confirmSnippet}
        />
        <DocExample
          name="Modal large"
          description={<span>To fit the modal to the width of the site container add the <code>large</code> props.</span>}
          jsx={largeExample({ animate: blankAnimate, show })}
          snippet={largeSnippet}
        />
        <DocFooter { ...{ name, propTuples }} />
      </div>
    );
  }
}

export default ModalDoc;
