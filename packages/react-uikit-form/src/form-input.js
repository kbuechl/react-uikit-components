import React from 'react';
import uikit from '../../react-uikit-base';
import FormIcons from './form-input-icon.js';
import FormInputBase from './form-input-base';
import FormInputSelect from './form-input-select';
import FormInputMain from './form-input-main';
import FormInputFile from './form-input-file';


const FormInput = (props) => {
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
      <FormInputMain {...cleanProps} />
    </FormIcons>,

    input: <FormInputMain {...cleanProps} className={cssClassNames} />,

    file: <FormInputFile {...cleanProps} />,

    passwordToggle: <div className='uk-form-password'>
                      <FormInputMain {...cleanProps} />
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


FormInput.propTypes = {
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

export default uikit.base(FormInput);
