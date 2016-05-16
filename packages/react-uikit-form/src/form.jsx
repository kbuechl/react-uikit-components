'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';
import ufunc from 'ufunc';


const Form = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-form',
    props.classes,
    props.context ? `$uk-form-{props.context}` : null,
    props.size ? `$uk-form-{props.size}` : null,
    props.width ? `$uk-form-width-{props.width}` : null,
    props.blank ? 'uk-form-blank' : null,
    props.className
  ]);


  // Elements
  const csrfToken = ufunc.maybeIf(<input type='hidden' id='_csrf' value={props.csrf} />);

  // Return Component
  return <form
    {...props}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {csrfToken(props.csrf)}
    {props.children}
  </form>;
};


Form.propTypes = {
  blank     : React.PropTypes.bool,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  items     : React.PropTypes.object,
  context   : React.PropTypes.oneOf(['danger', 'success']),
  csrf      : React.PropTypes.string,
  size      : React.PropTypes.oneOf(['large', 'small']),
  width     : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini'])
};


export default uikit.base(Form);
