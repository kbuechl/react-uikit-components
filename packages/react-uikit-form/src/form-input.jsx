'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';
import ufunc from 'ufunc';


const FormInput = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-form-row',
    props.context ? `uk-form-${props.context}` : null,
    props.classes,
    props.className
  ]);


  // Elements
  const label = ufunc.maybeIf(
    <label
      data-kitid={props.kitId}
    >
      {props.label}
    </label>,
    props.label
  );


  // Return Component
  return <div
    {...props}
    {...uikit.events(props)}

    className={cssClassNames}
  >
      {label}
      <input
        data-kitid={props.kitId}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled ? true : null}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
  </div>;
};


FormInput.propTypes = {
  context    : React.PropTypes.oneOf(['danger', 'success']),
  disabled   : React.PropTypes.bool,
  kitid      : React.PropTypes.string,
  onChange   : React.PropTypes.func,
  type       : React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value      : React.PropTypes.string
};


export default uikit.base(FormInput);
