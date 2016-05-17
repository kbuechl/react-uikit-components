'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';
import ufunc from 'ufunc';
import FormInputHelp from './form-input-help';
import FormInputControl from './form-input-control';
import Icons from 'react-uikit-icons';


const FormInput = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    props.context ? `uk-form-${props.context}` : null,
    props.size ? `uk-form-${props.size}` : null,
    props.width ? `uk-form-width-${props.width}` : null,
    props.blank ? 'uk-form-blank' : null,
    props.classes,
    props.className
  ]);


  const ignoreProps = ['width', 'label', 'type'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);


  // Elements
  const label = ufunc.maybeIf(
    <label
      className='uk-form-label'
      {...props.label}
      data-kitid={`label-${props.kitid}`}
    >
      {props.label}
    </label>)(props.label);


  const input = <input
    {...cleanProps}
    className={cssClassNames}
    data-kitid={props.kitid}
    type={props.type || 'text'}
    onChange={(e) => props.onChange(e)}
  />;


  const help = ufunc.maybeIf(
    <FormInputHelp
      help={props.help}
      kitid={`help-${props.kitid}`}
    />
  )(props.help);


  const formInputControl = <FormInputControl {...props.control} input={input} />;


  const icon = <div className='uk-form-icon'>
    <Icons
      icon={props.icon}
      kitid={`icon-${props.kitid}`}
    />
    {input}
  </div>;


  const row = <div
    className='uk-form-row'
  >
    {label}
    {ufunc.either(formInputControl,input)(props.control)}
    {help}
  </div>;


  let component;
  if (props.label || props.help ||  props.row) {
    component = row;

  } else if (props.control) {

    component = formInputControl;

  } else if (props.icon) {
    component = icon;

  } else {
    component = input;
  }


  // Return Component
  return component;
};


FormInput.propTypes = {
  blank      : React.PropTypes.bool,
  context    : React.PropTypes.oneOf(['danger', 'success']),
  control    : React.PropTypes.oneOfType([
                 React.PropTypes.bool,
                 React.PropTypes.object
               ]),
  disabled   : React.PropTypes.bool,
  help       : React.PropTypes.oneOfType([
                 React.PropTypes.string,
                 React.PropTypes.object
               ]),
  kitid      : React.PropTypes.string,
  onChange   : React.PropTypes.func,
  placeholder: React.PropTypes.string,
  row        : React.PropTypes.bool,
  size       : React.PropTypes.oneOf(['large', 'small']),
  value      : React.PropTypes.string,
  width      : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini']),
  type       : React.PropTypes.string
};


export default uikit.base(FormInput);
