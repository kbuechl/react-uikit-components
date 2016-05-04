'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';


const Badge = (props) => {
  // CSS classes
  const context = {
    success : `uk-badge-${props.context}`,
    warning : `uk-badge-${props.context}`,
    danger  : `uk-badge-${props.context}`
  };


  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-badge',
    props.classes,
    context[props.context] || null,
    props.notification ? 'uk-badge-notification' : null,
    props.className
  ]);


  // Elements
  const block = <div
    {...props}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.body}
    {props.children}
  </div>;


  const inline = <span
    {...{...props, ...uikit.events(props)}}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.body}
    {props.children}
  </span>;


  // Return Component
  const component = ufunc.either(block, inline);

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


export default uikit.base(Badge);
