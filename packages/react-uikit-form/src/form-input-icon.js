import React from 'react';
import Icons from 'react-uikit-icons';
import { cleanProps } from './cleanProps';
import { helpers } from 'react-uikit-base';


const FormIcon = (props) => {
  const cssClassNames = helpers.cleanClasses([
    'uk-form-icon',
    props.className
  ]);

  return <div {...cleanProps(props)}
    className={cssClassNames}
  >
    <Icons
      icon={props.icon}
      kitid={`icon-${props.kitid}`}
    />
    {props.children}
  </div>;
};

export default FormIcon;

FormIcon.propTypes = {
  children   : React.PropTypes.any,
  className  : React.PropTypes.string,
  container  : React.PropTypes.object,
  display    : React.PropTypes.string,
  icon       : React.PropTypes.string,
  kitid      : React.PropTypes.string
};
