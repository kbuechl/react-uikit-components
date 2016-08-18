'use strict';

import React from 'react';
import {
  base,
  events,
  helpers } from 'react-uikit-base';


const Button = (props) => {
  // CSS classes
  const context = {
    primary: ' uk-button-primary',
    success: ' uk-button-success',
    danger : ' uk-button-danger',
    link   : ' uk-button-link'
  };

  const size = {
    mini: ' uk-button-mini',
    small: ' uk-button-small',
    large: ' uk-button-large'
  };


  const cssClassNames = helpers.cleanClasses([
    'uk-button',
    props.classes,
    props.block ? 'uk-width-1-1' : null,
    props.context ? context[props.context] : null,
    props.size ? size[props.size] : null,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'body',
    'block',
    'children',
    'classes',
    'context',
    'kitid',
    'size',
    'type'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Elements
  const attr = {
    ...cleanProps,
    ...events(props),
    'data-kitid': props.kitid
  };


  const type = {
    button: <button
      {...attr}
      className={cssClassNames}
      type={props.type || 'button'}
      disabled={props.disabled}
    >
     {props.body}{props.children}
   </button>,

    close: <a
      {...attr}
      className={`uk-close ${cssClassNames}`}
      href='#'
    />,

    link: <a
      {...attr}
      className={cssClassNames}
      href='#'
      role='button'
    >
      {props.body}{props.children}
    </a>
  };


  // Return Component
  return type.submit ? type['button'] : type[props.type] || type['button'];
};


Button.propTypes = {
  body     : React.PropTypes.string,
  block    : React.PropTypes.bool,
  children : React.PropTypes.any,
  classes  : React.PropTypes.array,
  className : React.PropTypes.string,
  context  : React.PropTypes.oneOf(['primary', 'success', 'danger', 'link']),
  disabled : React.PropTypes.bool,
  kitid    : React.PropTypes.string,
  size     : React.PropTypes.oneOf(['mini', 'small', 'large']),
  type     : React.PropTypes.oneOf(['button', 'close', 'link', 'submit'])
};


export default base(Button);
