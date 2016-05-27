import React from 'react';
import uikit from '../../react-uikit-base';
import FormIcons from './form-input-icon.js';
import FormInputBase from './form-input-base';
import FormInputSelect from './form-input-select';


const FormInput = (props) => {
  return <input
    id={props.kitid}
    name={props.name}
    {...props}
    data-kitid={props.kitid}
    type={props.type || 'text'}
    onChange={props.onChange}
  />;
};

FormInput.propTypes = {
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


const FormInputContainer = (props) => {
  const cssClassNames = uikit.helpers.cleanClasses([
    props.context ? `uk-form-${props.context}` : null,
    props.size ? `uk-form-${props.size}` : null,
    props.width ? `uk-form-width-${props.width}` : null,
    props.blank ? 'uk-form-blank' : null,
    props.classes,
    props.className
  ]);

  const ignoreProps = ['display', 'label', 'width', 'classes'];
  const cleanProps = { ...uikit.helpers.cleanProps(ignoreProps)(props), className: cssClassNames };

  const type = {
    icon: <FormIcons
      icon={props.icon}
      display={props.display }
      kitid={props.kitid}
    >
      <FormInput {...cleanProps} />
    </FormIcons>,

    input: <FormInput {...cleanProps} className={cssClassNames} />,

    file: <div className='uk-form-file'>
            <button className='uk-button'>...</button>
            <input type='file' />
          </div>,

    passwordToggle: <div className='uk-form-password'>
                      <FormInput {...cleanProps} />
                      <a href='#' className='uk-form-password-toggle' data-uk-form-password>...</a>
                    </div>,

    select: <FormInputSelect
              {...cleanProps}
            />
  };

  return <FormInputBase
    {...props}
    input={type[props.type] || (props.icon ? type.icon : type.input)}
  />;
};

export default uikit.base(FormInputContainer);


FormInputContainer.propTypes = {
  blank     : React.PropTypes.bool,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  context   : React.PropTypes.oneOf(['danger', 'success']),
  display   : React.PropTypes.string,
  icon      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  onChange  : React.PropTypes.func,
  options   : React.PropTypes.array,
  size      : React.PropTypes.oneOf(['large', 'small']),
  type      : React.PropTypes.string,
  width     : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini'])
};
