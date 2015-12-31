'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';


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


  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-button',
    props.classes,
    props.block ? 'uk-width-1-1' : null,
    props.context ? context[props.context] : null,
    props.size ? size[props.size] : null,
    props.className
  ]);


  // Elements
  const ignoreProps = ['type'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);


  const attr = {
    ...uikit.events(props),
    'data-kitid': props.kitid
  };


  const type = {
    button: <button
      {...cleanProps}
      {...attr}
      className={cssClassNames}
      type='button'
      disabled={props.disabled}
    >
     {props.body}{props.children}
   </button>,

    close: <a
      {...cleanProps}
      {...attr}
      className={`uk-close ${cssClassNames}`}
      href='#'
    />,

    link: <a
      {...cleanProps}
      {...attr}
      className={cssClassNames}
      href='#'
      role='button'
    >
      {props.body}{props.children}
    </a>
  };


  // Return Component
  return type[props.type] || type['button'];
};


Button.propTypes = {
  body     : React.PropTypes.string,
  block    : React.PropTypes.bool,
  context  : React.PropTypes.oneOf(['primary', 'success', 'danger', 'link']),
  disabled : React.PropTypes.bool,
  size     : React.PropTypes.oneOf(['mini', 'small', 'large']),
  type     : React.PropTypes.oneOf(['button', 'close', 'link'])
};


export default uikit.base(Button);
