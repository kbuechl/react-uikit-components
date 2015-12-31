'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import Badge from 'react-uikit-badge';
import ufunc from 'ufunc';


const Note = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    props.classes,
    props.className
  ]);


  // Elements
  const badge = ufunc.either(
    <Badge>{props.badge}</Badge>,

    <Badge kitid={`badge-${props.kitid}`} context={props.badge ? props.badge.context : null}>
      {props.badge ? props.badge.body : 'Note'}
    </Badge>,
  )(typeof props.badge === 'string');


  // Return Component
  return <p
    {...props}
    {...uikit.events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {badge} {props.body} {props.children}
  </p>;
};


Note.propTypes = {
  badge  : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  body : React.PropTypes.string,
  children    : React.PropTypes.any,
  className   : React.PropTypes.string,
  classes     : React.PropTypes.array,
  kitid       : React.PropTypes.string
};


export default uikit.base(Note);
