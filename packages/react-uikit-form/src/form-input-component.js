import React from 'react';


const FormInputComponent = (props) => (
  <input
    id={props.kitid}
    name={props.name}
    {...props}
    data-kitid={props.kitid}
    type={props.type || 'text'}
    onChange={props.onChange}
  />
);

FormInputComponent.propTypes = {
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
  value     : React.PropTypes.string
};

export default FormInputComponent;
