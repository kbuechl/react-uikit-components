'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';
import ufunc from 'ufunc';


class Alert extends React.Component {
  constructor (props) {
    super(props);
  }


  componentDidMount () {
    const element = uikit.helpers.getElement(this.props.kitid);

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


    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-alert',
      props.classes,
      context[props.context] || null,
      props.large ? ' uk-alert-large' : null,
      props.className
    ]);


    // Elements
    const close = ufunc.maybeIf(<a
      href='#'
      className='uk-alert-close uk-close'
      data-kitid={props.kitid}
      onClick={(e) => this.handleClose(e)}
    />)(props.close);


    // Return Component
    return <div
      {...{...props, ...uikit.events(props)}}
      data-kitid={props.kitid}
      className={cssClassNames}
    >
      {close}
      {props.children}
    </div>;
  }
};


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

export default uikit.base(Alert);