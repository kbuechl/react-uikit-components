
'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


const Placeholder = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-placeholder',
    props.large ? 'uk-placeholder-large' : null,
    props.classes,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'body',
    'children',
    'classes',
    'kitid',
    'large'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Return Component
  return <div
    {...cleanProps}
    {...events(props)}
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


export default base(Placeholder);
