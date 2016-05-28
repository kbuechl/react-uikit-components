import React from 'react';
import uikit from '../../react-uikit-base';
import FormIcons from './form-input-icon.js';
import FormInputBase from './form-input-base';
import FormInputSelect from './form-input-select';
import FormInputMain from './form-input-main';
import FormInputFile from './form-input-file';
import FormInputPassword from './form-input-password';


const FormInput = (props) => {
  const cssClassNames = uikit.helpers.cleanClasses([
    props.context ? `uk-form-${props.context}` : null,
    props.size ? `uk-form-${props.size}` : null,
    props.width ? `uk-form-width-${props.width}` : null,
    props.blank ? 'uk-form-blank' : null,
    props.classes,
    props.className
  ]);

  const display = props.display === 'inlineBlock' ? 'inline-block' : props.display;


  const ignoreProps = ['display', 'label', 'width', 'classes'];
  const cleanProps = {
    ...uikit.helpers.cleanProps(ignoreProps)(props),
    className: cssClassNames,
    display: display
   };

  const type = {
    icon: <FormIcons
            icon={props.icon}
            display={display}
            kitid={props.kitid}
          >
            <FormInputMain {...cleanProps} />
          </FormIcons>,

    input: <FormInputMain
             {...cleanProps}
             className={cssClassNames}
           />,

    file: <FormInputFile {...props.button} />,

    passwordToggle: <FormInputPassword
                      input={cleanProps}
                      {...props.toggle}
                      kitid={props.kitid}
                    />,

    select: <FormInputSelect
              {...props.button}
              icon={props.icon}
              options={props.options}
              kitid={props.kitid}
            />
  };

  return <FormInputBase
    {...props}
    display={display}
    input={type[props.type] || (props.icon ? type.icon : type.input)}
  />;
};


FormInput.propTypes = {
  blank     : React.PropTypes.bool,
  button    : React.PropTypes.object,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  context   : React.PropTypes.oneOf(['danger', 'success']),
  display   : React.PropTypes.string,
  icon      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  onChange  : React.PropTypes.func,
  options   : React.PropTypes.array,
  size      : React.PropTypes.oneOf(['large', 'small']),
  toggle    : React.PropTypes.object,
  type      : React.PropTypes.string,
  width     : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini'])
};

export default uikit.base(FormInput);
