import React from 'react';
import Icons from 'react-uikit-icons';
import { cleanProps } from './cleanProps';

const FormIcon = (props) => (
  <div {...cleanProps(props)}
    className={`uk-form-icon ${props.className}`}
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
  className  : React.PropTypes.string,
  container  : React.PropTypes.object,
  display    : React.PropTypes.string,
  icon       : React.PropTypes.string,
  kitid      : React.PropTypes.string
};
