import React from 'react';
import cleanProps from './cleanProps';


const FormInputMain = (props) => {
  return <input
    id={props.kitid}
    name={props.name}
    {...cleanProps(props)}
    data-kitid={props.kitid}
    type={props.type || 'text'}
    onChange={props.onChange}
  />;
};

FormInputMain.propTypes = {
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  disabled  : React.PropTypes.bool,
  display   : React.PropTypes.string,
  icon      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  name      : React.PropTypes.string,
  onChange  : React.PropTypes.func,
  required  : React.PropTypes.bool,
  type      : React.PropTypes.string,
  value     : React.PropTypes.any
};

export default FormInputMain;
