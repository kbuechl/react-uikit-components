import React from 'react';
import uikit from '../../react-uikit-base';
import FormIcons from './form-input-icon.js';
import FormInputBase from './form-input-base';

const FormInput = (props) => {
  const cssClassNames = uikit.helpers.cleanClasses([
    props.context ? `uk-form-${props.context}` : null,
    props.size ? `uk-form-${props.size}` : null,
    props.width ? `uk-form-width-${props.width}` : null,
    props.blank ? 'uk-form-blank' : null,
    props.classes,
    props.className
  ]);


  const ignoreProps = ['display', 'label', 'type', 'width'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);


  const input = <input
    id={props.kitid}
    name={props.name}
    {...cleanProps}
    className={cssClassNames}
    data-kitid={props.kitid}
    type={props.type || 'text'}
    onChange={(e) => props.onChange(e)}
  />;


  return <FormInputBase {...props} input={input}/>;
};

export default uikit.base(FormInput);

FormInput.propTypes = {
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid      : React.PropTypes.string,
  name       : React.PropTypes.string,
  onChange   : React.PropTypes.func,
  required   : React.PropTypes.bool,
  type       : React.PropTypes.string
};
