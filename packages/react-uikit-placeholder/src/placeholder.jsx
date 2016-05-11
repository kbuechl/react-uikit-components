
'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const Placeholder = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-placeholder',
    props.large ? 'uk-placeholder-large' : null,
    props.classes,
    props.className
  ]);


  // Return Component
  return <div
    {...props}
    {...uikit.events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.body}
    {props.children}
  </div>;
};


Placeholder.propTypes = {
  body      : React.PropTypes.string,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  large     : React.PropTypes.bool
};


export default uikit.base(Placeholder);
