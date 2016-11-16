'use strict';

import React from 'react';
import {
  either,
  maybeIf
} from 'ufunc';
import {
  base,
  helpers
} from 'react-uikit-base';
import Button from 'react-uikit-button';


const Trigger = (props) => {
  const icon = maybeIf(<i className={`uk-icon-${props.icon}`}/>)(props.icon);


  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'body',
    'children',
    'classes',
    'kitid',
    'opened',
    'type'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Element
  const type = {
    button: <Button
      {...props}
      className={cssClassNames}
      block
      kitid={props.kitid}
      body={props.body}
    >
      {props.children} {icon}
    </Button>,

    link: <Button
      {...props}
      className={cssClassNames}
      block
      kitid={props.kitid}
      type='link'
      body={props.body}
    >
      {props.children} {icon}
    </Button>,

    span : <span
      {...cleanProps}
      {...helpers.events}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.body}
      {props.children} {icon}
    </span>,

    div: <div
      {...cleanProps}
      className={cssClassNames}
      {...helpers.events}
      data-kitid={props.kitid}
    >
      {props.body}
      {props.children} {icon}
    </div>
  };
if(props.type === 'span') {

}

  return either(type[props.type], type['button'])(props.type);
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

export default base(Trigger);
