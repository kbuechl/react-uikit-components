import React from 'react';
import uikit from '../../../base';
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

   // Elements
  const type = {
    icon: <FormIcons
            {...props}
            className={cssClassNames}
            icon={props.icon}
            display={display}
            kitid={props.kitid}
          >
            <FormInputMain {...props}
              className={cssClassNames}
            />
          </FormIcons>,

    input: <FormInputMain
             {...props}
             className={cssClassNames}
           />,

    file: <FormInputFile {...props.button} />,

    passwordToggle: <FormInputPassword
                      className={cssClassNames}
                      input={cleanProps}
                      {...props.toggle}
                      kitid={props.kitid}
                    />,

    select: <FormInputSelect
              className={cssClassNames}
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
  container : React.PropTypes.object,
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
