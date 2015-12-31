'use strict';

import React from 'react';
import ufunc from 'ufunc';
import uikit from 'react-uikit-base';
import Button from 'react-uikit-button';


const Trigger = (props) => {
  const icon = ufunc.maybeIf(<i className={`uk-icon-${props.icon}`}/>)(props.icon);

  const cleanProps = uikit.helpers.cleanProps(['icon'])(props);

  const type = {
    button: <Button
      {...props}
      {...cleanProps}
      block
      kitid={props.kitid}
      body={props.body}
    >
      {props.children} {icon}
    </Button>,

    link: <Button
      {...props}
      {...cleanProps}
      block
      kitid={props.kitid}
      type='link'
      body={props.body}
    >
      {props.children} {icon}
    </Button>,

    span : <span
      {...props}
      {...cleanProps}
      {...uikit.helpers.events}
      col='1-1'
      data-kitid={props.kitid}
    >
      {props.body}
      {props.children} {icon}
    </span>,

    div: <div
      {...props}
      {...cleanProps}
      col='1-1'
      {...uikit.helpers.events}
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
