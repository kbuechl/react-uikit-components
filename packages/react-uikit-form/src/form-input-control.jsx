import React from 'react';
import uikit from '../../react-uikit-base';

const FormInputControl = (props) => {
  const cssControlClassNames = uikit.helpers.cleanClasses([
    'uk-form-controls',
    props.text ? 'uk-form-controls-text' :  null,
    props.display ? `uk-display-${props.display}` : null
  ]);

  return <div className={cssControlClassNames}>
    {props.input}
  </div>;
};

FormInputControl.propTypes = {
  text     : React.PropTypes.bool,
  input    : React.PropTypes.any,
  display  : React.PropTypes.bool
};


export default FormInputControl;
