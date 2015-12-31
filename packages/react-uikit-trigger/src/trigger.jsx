'use strict';

import React from 'react';
import ufunc from 'ufunc';
import uikit from 'react-uikit-base';
import Button from 'react-uikit-button';


const Trigger = (props) => {
  const icon = ufunc.maybeIf(<i className={`uk-icon-${props.icon}`}/>)(props.icon);

  const type = {
    button: <Button
      {...props}
      block
      kitid={props.kitid}
      body={props.body}
    >
      {props.children} {icon}
    </Button>,

    link: <Button
      {...props}
      block
      kitid={props.kitid}
      type='link'
      body={props.body}
    >
      {props.children} {icon}
    </Button>,

    span : <span
      {...props}
      col='1-1'
      data-kitid={props.kitid}
    >
      {props.body}
      {props.children} {icon}
    </span>,

    div: <div
    {...props}
      col='1-1'
      data-kitid={props.kitid}
    >
      {props.body}
      {props.children} {icon}
    </div>
  };


  return ufunc.either(type[props.type], type['button'])(props.type);
};


Trigger.propTypes = {
  body      : React.PropTypes.any,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  onClick   : React.PropTypes.func,
  opened    : React.PropTypes.bool,
  type      : React.PropTypes.oneOf(['button', 'link', 'span', 'div'])
};

export default uikit.base(Trigger);
