import React from 'react';
import {
  either,
  maybeIf
} from 'ufunc';
import FormInputHelp from './form-input-help';
import FormInputControl from './form-input-control';
import FormLabel from './form-label';

const getLabelPosistion = (label) => {
  if (label) {
    return either(
      'left',
      label.pos
    )(label.pos === undefined);
  }
};


const FormInputBase = (props) => {

  const help = maybeIf(
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


  const row = <div
    className={props.display != null ? `uk-display-${props.display} uk-form-row` : 'uk-form-row'}
  >
    {getLabelPosistion(props.label) === 'left' ? <FormLabel {...props} /> : null}
    {either(formInputControl, props.input)(props.control)}
    {getLabelPosistion(props.label) === 'right' ? <FormLabel {...props} /> : null}
    {help}
  </div>;


  let component;
  if (props.label || props.help ||  props.row) {
    component = row;

  } else if (props.control) {
    component = formInputControl;

  } else {
    component = props.input;
  }

  // Return Component
  return component;
};


FormInputBase.propTypes = {
  control    : React.PropTypes.oneOfType([
                 React.PropTypes.bool,
                 React.PropTypes.object
               ]),
  display    : React.PropTypes.string,
  help       : React.PropTypes.oneOfType([
                 React.PropTypes.string,
                 React.PropTypes.object
               ]),
  input      : React.PropTypes.node,
  kitid      : React.PropTypes.string,
  label      : React.PropTypes.oneOfType([
                 React.PropTypes.string,
                 React.PropTypes.object
               ]),
  placeholder: React.PropTypes.string,
  row        : React.PropTypes.bool
};


export default FormInputBase;
