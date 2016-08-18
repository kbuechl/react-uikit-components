'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from '../../../base';
import { maybeIf } from 'ufunc';


class Alert extends React.Component {
  constructor (props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }


  componentDidMount () {
    const element = helpers.getElement(this.props.kitid);

    element.style.display = this.props.show ? 'block' : 'none';
  }


  handleClose (e) {
    e.preventDefault();
    this.props.close(e, this.props.kitid);
  }

  render () {
    const props = this.props;

    // CSS classes
    const context = {
      success: 'uk-alert-success',
      warning: 'uk-alert-warning',
      danger : 'uk-alert-danger'
    };


    const cssClassNames = helpers.cleanClasses([
      'uk-alert',
      props.classes,
      context[props.context] || null,
      props.large ? ' uk-alert-large' : null,
      props.className
    ]);

    // Remove non valid html attributes
    const ignoreProps = [
      'children',
      'className',
      'classes',
      'close',
      'context',
      'kitid',
      'large',
      'show'
    ];

    const cleanProps = helpers.cleanProps(ignoreProps)(props);


    // Elements
    const close = maybeIf(<a
      href='#'
      className='uk-alert-close uk-close'
      data-kitid={props.kitid}
      onClick={this.handleClose}
    />)(props.close);


    // Return Component
    return <div
      {...cleanProps}
      {...events(props)}
      data-kitid={props.kitid}
      className={cssClassNames}
    >
      {close}
      {props.children}
    </div>;
  }
}


Alert.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  close     : React.PropTypes.func,
  context   : React.PropTypes.oneOf(['success', 'warning', 'danger']),
  kitid     : React.PropTypes.string,
  large     : React.PropTypes.bool,
  show      : React.PropTypes.bool
};

export default base(Alert);
