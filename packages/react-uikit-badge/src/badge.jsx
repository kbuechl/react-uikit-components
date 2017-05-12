'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import { either } from 'ufunc';


const Badge = (props) => {
  // CSS classes
  const context = {
    success : `uk-badge-${props.context}`,
    warning : `uk-badge-${props.context}`,
    danger  : `uk-badge-${props.context}`
  };


  const cssClassNames = helpers.cleanClasses([
    'uk-badge',
    props.classes,
    context[props.context] || null,
    props.notification ? 'uk-badge-notification' : null,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'context',
    'block',
    'body',
    'kitid',
    'notification'
  ];
  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Elements
  const block = <div
    {...cleanProps}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.body}
    {props.children}
  </div>;


  const inline = <span
    {...cleanProps}
    {...events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.body}
    {props.children}
  </span>;


  // Return Component
  const component = either(block, inline);

  return component(props.block);
};

Badge.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  context     : React.PropTypes.oneOf(['success', 'warning', 'danger']),
  block       : React.PropTypes.bool,
  body        : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  notification: React.PropTypes.bool
};


export default base(Badge);
