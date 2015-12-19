'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import cuid from 'cuid';


const handleClose = (e) => {
  e.preventDefault();

  this.props.close(this.dataId);
};


const Alert = (props) => {
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
  const close = ufunc.maybeIf(<a href='#' onClose={(e) => handleClose(e)} className='uk-alert-close uk-close'></a>)(props.close);


  // Return Component
  return <div
    {...props}
    data-kitid={props.kitid || cuid()}
    className={cssClassNames}
  >
    {close}
    {props.children}
  </div>;
};


Alert.propTypes = {
  children : React.PropTypes.any,
  className  : React.PropTypes.string,
  classes  : React.PropTypes.array,
  close      : React.PropTypes.func,
  context    : React.PropTypes.oneOf(['success', 'warning', 'danger']),
  kitid  : React.PropTypes.string,
  large      : React.PropTypes.bool,
  onClose    : React.PropTypes.func
};

export default uikit.base(Alert);
