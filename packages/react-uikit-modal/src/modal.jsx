'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import { either } from 'ufunc';
import Dialog from './dialog';
import Trigger from 'react-uikit-trigger';


const bodyStyle = (pading, overflow) => {
  const body = document.getElementsByTagName('body');
  body[0].style.paddingRight = pading;
  body[0].style.overflow = overflow;
};

const getModalElement = (kitid) => {
  return {
    modal: uikit.helpers.getElement(`modal-${kitid}`),
    dialog: uikit.helpers.getElement(`dialog-${kitid}`)
  };
};

class Modal extends React.Component {
  constructor (props) {
    super(props);

    this.handleOkClick = this.handleOkClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
  }


  handleOkClick (e) {
    const props = this.props;
    const { modal, dialog } = getModalElement(props.kitid);

    if (props.ok && props.ok.onClick) {
      const value = props.type === 'prompt' ? uikit.helpers.getElement(`input-${props.kitid}`).value : null;

      props.ok.onClick({
        event: e,
        item: {
          kitid: props.kitid,
          value
        }
      });
    }

    if (props.confirm && !props.confirm.show) {
      props.confirm.animate.in(modal, dialog);
    }
    else {
      props.trigger.animate.out(modal, dialog);
      setTimeout(() => bodyStyle('', ''), 200);
    }
  }


  handleConfirmClick (e) {
    e && e.preventDefault();

    const props = this.props;
    const { modal, dialog } = getModalElement(props.kitid);

    if (props.confirm && props.confirm.onClick) {
      props.confirm.onClick({
        event: e,
        item: { kitid: props.kitid }
      });
    }


    props.confirm.animate.out(modal, dialog);
    setTimeout(() => bodyStyle('', ''), 200);
  }


  handleCloseClick (e) {
    e && e.preventDefault();

    const props = this.props;
    const { modal, dialog } = getModalElement(props.kitid);

    props.trigger.animate.out(modal, dialog);
    setTimeout(() => bodyStyle('', ''), 200);


  }


  handleToggleClick (e) {
    const props = this.props;
    const { modal, dialog } = getModalElement(props.kitid);

    const show = () => {
      bodyStyle('16px', 'hidden');
      props.trigger.animate.in(modal, dialog);
    };

    const hide = () => {
      const kitid = (e.target.dataset ? e.target.dataset.kitid : undefined);


      if (typeof kitid !== 'undefined') {
        const prefix = kitid.substr(0, kitid.indexOf('-'));

        if (prefix === 'modal') {
          this.handleCloseClick(e);
        }
      }
    };

    either(show, hide)(!this.props.show);
  }


  render () {
    const props = this.props;

    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-modal',
      props.classes,
      props.className
    ]);

    const ignoreProps = [
      'blank',
      'cancel',
      'caption',
      'children',
      'className',
      'classes',
      'close',
      'confirm',
      'dialog',
      'footer',
      'header',
      'kitid',
      'lightbox',
      'ok',
      'large',
      'show',
      'trigger',
      'type'
    ];


    const cleanProps = uikit.helpers.cleanProps(ignoreProps)({
      ...props,
      confirm: null,
      ok: null,
      show: null,
      trigger: null,
    });


    // Return Component
    return <div>
      <Trigger {...props.trigger} kitid={`trigger-${props.kitid}`} onClick={this.handleToggleClick}/>

      <div {...cleanProps}
        className={cssClassNames}
        data-kitid={`modal-${props.kitid}`}
        onClick={this.handleToggleClick}
      >
        <Dialog
          {...props.dialog}
          blank={props.blank}
          cancel={Object.assign(
            {
              kitid: `ok-${props.kitid}`,
              onClick: this.handleCloseClick
            },
            props.cancel
          )}
          caption={props.caption}
          confirm={{
            ...props.confirm,
            ...{
              kitid: `confirm-${props.kitid}`,
              onClick: this.handleConfirmClick
            }
          }}
          footer={props.footer}
          header={props.header}
          kitid={props.kitid}
          large={props.large}
          lightbox={props.lightbox}
          ok={Object.assign(
            {},
            props.ok,
            {
              kitid: `ok-${props.kitid}`,
              onClick: this.handleOkClick
            }
          )}
          onClose={props.close ? this.handleCloseClick: null}
          spinner={props.spinner}
          type={props.type}
        >
          {props.children}
        </Dialog>
      </div>

    </div>;

  }
}


Modal.propTypes = {
  blank     : React.PropTypes.bool,
  cancel    : React.PropTypes.object,
  caption   : React.PropTypes.node,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  close     : React.PropTypes.bool,
  confirm   : React.PropTypes.object,
  dialog    : React.PropTypes.object,
  footer    : React.PropTypes.any,
  header    : React.PropTypes.any,
  kitid     : React.PropTypes.string,
  lightbox  : React.PropTypes.bool,
  ok        : React.PropTypes.object,
  large     : React.PropTypes.bool,
  show      : React.PropTypes.bool,
  trigger   : React.PropTypes.object,
  type      : React.PropTypes.oneOf(['block', 'alert', 'prompt', 'confirm'])
};


export default uikit.base(Modal);
