import React from 'react';
import {
  either,
  maybeIf
} from '../../../../ufunc';

import cleanProps from './cleanProps';

const FormLabel = (props) => {
  if (props.label) {

    const body = props.label.body || props.label;
    let labelBody;
    if (props.label.pos == 'right') {
      labelBody = '\u00A0' + body;

    } else {
      labelBody = body + '\u00A0';
    }

    return either(
      maybeIf(
        <label
          className={props.display != null ? `uk-display-${props.display} uk-form-label` : 'uk-form-label'}
          {...cleanProps(props.label)}
          htmlFor={props.kitid}
          data-kitid={`label-${props.kitid}`}
        >
          {labelBody}
        </label>)(props.label),
      null
    )(props.label);
  }
};


FormLabel.propTypes = {
  display    : React.PropTypes.string,
  label      : React.PropTypes.oneOfType([
                 React.PropTypes.string,
                 React.PropTypes.object
               ]),
  kitid      : React.PropTypes.string
};

export default FormLabel;
