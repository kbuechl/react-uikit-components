import React from 'react';
import ufunc from 'ufunc';


const FormLabel = (props) => {
  if (props.label) {
    const body = props.label.body || props.label;
    let labelBody;
    if (props.label.pos == 'right') {
      labelBody = '\u00A0' + body;

    } else {
      labelBody = body + '\u00A0';
    }

    return ufunc.either(
      ufunc.maybeIf(
        <label
          className={props.display != null ? `uk-display-${props.display} uk-form-label` : 'uk-form-label'}
          {...props.label}
          htmlFor={props.kitid}
          data-kitid={`label-${props.kitid}`}
        >
          {labelBody}
        </label>)(props.label),
      null
    )(props.label);
  }
};

export default FormLabel;
