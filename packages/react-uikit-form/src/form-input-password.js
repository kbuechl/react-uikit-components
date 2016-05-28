import React from 'react';
import FormInputMain from './form-input-main';
import Icons from 'react-uikit-icons';


const FormInputPassword = (props) => {
  const icon = props.icon
    ? <Icons
        icon={props.icon || 'caret-down'}
        kitid={`icon-${props.kitid}`}
      />
    : null;

  return <div className='uk-form-password'>
          <FormInputMain {...props.input} type={props.type || 'password'}/>
          <a
            className='uk-form-password-toggle'
            onClick={props.onClick}
            data-kitid={`toggle-${props.kitid}`}
          >
            {props.body} {icon}
          </a>
        </div>;
};


FormInputPassword.propTypes = {
  body   : React.PropTypes.string,
  kitid  : React.PropTypes.string,
  icon   : React.PropTypes.string,
  input  : React.PropTypes.object,
  onClick: React.PropTypes.func,
  show   : React.PropTypes.bool,
  type   : React.PropTypes.string
};

export default FormInputPassword;
