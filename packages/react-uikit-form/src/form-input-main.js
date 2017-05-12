import React from 'react';
import cleanProps from './cleanProps';
import { helpers } from 'react-uikit-base';

const FormInputMain = (props) => {
  const cssClassNames = helpers.cleanClasses([
    props.context ? `uk-form-${props.context}` : null,
    props.size ? `uk-form-${props.size}` : null,
    props.width ? `uk-form-width-${props.width}` : null,
    props.blank ? 'uk-form-blank' : null,
    props.wide ? 'uk-width-1-1' : null,
    props.className
  ]);

  return <input
    id={props.kitid}
    name={props.name}
    {...cleanProps(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
    type={props.type || 'text'}
    onChange={props.onChange}
  />;
};

FormInputMain.propTypes = {
  blank     : React.PropTypes.bool,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  context   : React.PropTypes.oneOf(['danger', 'success']),
  disabled  : React.PropTypes.bool,
  display   : React.PropTypes.string,
  icon      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  name      : React.PropTypes.string,
  onChange  : React.PropTypes.func,
  required  : React.PropTypes.bool,
  size      : React.PropTypes.oneOf(['large', 'small']),
  type      : React.PropTypes.string,
  value     : React.PropTypes.any,
  wide      : React.PropTypes.bool,
  width     : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini'])
};

export default FormInputMain;
