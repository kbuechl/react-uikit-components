import React from 'react';
import uikit from '../../react-uikit-base';
import ufunc from 'ufunc';
import FormInputHelp from './form-input-help';
import FormInputControl from './form-input-control';
import FormLabel from './form-label';
import FormIcons from './form-input-icon.js';


const getLabelPosistion = (label) => {
  if (label) {
    return ufunc.either(
      'left',
      label.pos
    )(label.pos === undefined);
  }
};


const FormInputBase = (props) => {



  // Elements



  const help = ufunc.maybeIf(
    <FormInputHelp
      help={props.help}
      kitid={`help-${props.kitid}`}
    />
  )(props.help);


  const formInputControl = <FormInputControl
    {...props.control}
    display={props.display}
    input={props.input}
  />;


  const formInputIcon = <FormIcons
    icon={props.icon}
    display={props.display }
    kitid={props.kitid}
  >
    {props.input}
  </FormIcons>;


  const row = <div
    className={props.display != null ? `uk-display-${props.display} uk-form-row` : 'uk-form-row'}
  >
    {getLabelPosistion(props.label) === 'left' ? <FormLabel {...props} /> : null}
    {ufunc.either(formInputControl, props.input)(props.control)}
    {getLabelPosistion(props.label) === 'right' ? <FormLabel {...props} /> : null}
    {help}
  </div>;


  let component;
  if (props.label || props.help ||  props.row) {
    component = row;

  } else if (props.control) {
    component = formInputControl;

  } else if (props.icon) {
    component = formInputIcon;

  } else {
    component = props.input;
  }

  // Return Component
  return component;
};


FormInputBase.propTypes = {
  blank      : React.PropTypes.bool,
  context    : React.PropTypes.oneOf(['danger', 'success']),
  control    : React.PropTypes.oneOfType([
                 React.PropTypes.bool,
                 React.PropTypes.object
               ]),
  disabled   : React.PropTypes.bool,
  display    : React.PropTypes.string,
  help       : React.PropTypes.oneOfType([
                 React.PropTypes.string,
                 React.PropTypes.object
               ]),
  icon       : React.PropTypes.string,
  input      : React.PropTypes.node,
  kitid      : React.PropTypes.string,
  label      : React.PropTypes.oneOfType([
                 React.PropTypes.string,
                 React.PropTypes.object
               ]),
  placeholder: React.PropTypes.string,
  row        : React.PropTypes.bool,
  size       : React.PropTypes.oneOf(['large', 'small']),
  value      : React.PropTypes.string,
  width      : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini'])
};


export default FormInputBase;
