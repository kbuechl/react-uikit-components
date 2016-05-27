import React from 'react';
import Icons from 'react-uikit-icons';

const FormIcon = (props) => (
  <div
    className={props.display != null ? `uk-display-${props.display} uk-form-icon` : 'uk-form-icon'}
  >
    <Icons
      icon={props.icon}
      kitid={`icon-${props.kitid}`}
    />
    {props.children}
  </div>
);

export default FormIcon;

FormIcon.propTypes = {
  children   : React.PropTypes.any,
  display    : React.PropTypes.string,
  icon       : React.PropTypes.string,
  kitid      : React.PropTypes.string
};
