'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import Badge from 'react-uikit-badge';
import { either } from 'ufunc';


const Note = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'badge',
    'body' ,
    'children',
    'classes',
    'kitid'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);

  // Elements
  const badge = either(
    <Badge>{props.badge}</Badge>,

    <Badge kitid={`badge-${props.kitid}`} context={props.badge ? props.badge.context : null}>
      {props.badge ? props.badge.body : 'Note'}
    </Badge>,
  )(typeof props.badge === 'string');


  // Return Component
  return <p
    {...cleanProps}
    {...events(props)}
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


export default base(Note);
