import React from 'react';
import uikit from '../../../base';

const FormInputControl = (props) => {
  const cssControlClassNames = uikit.helpers.cleanClasses([
    'uk-form-controls',
    props.display ? `uk-display-${props.display}` : null
  ]);

  return <div className={cssControlClassNames}>
    {props.input}
  </div>;
};

FormInputControl.propTypes = {
  className: React.PropTypes.string,
  input    : React.PropTypes.any,
  display  : React.PropTypes.string
};


export default FormInputControl;
