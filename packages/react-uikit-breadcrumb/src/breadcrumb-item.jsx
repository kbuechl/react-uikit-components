'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const BreadcrumbItem = (props) => {
  const ignoreProps = ['href', 'label', 'type'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);

  const cssClassNames = uikit.helpers.cleanClasses([
    props.classes,
    props.className
  ]);


  // Elements
  const component = {
    active: <li
      {...cleanProps}
      className={`uk-active ${cssClassNames}`}
      data-kitid={props.kitid}
    >
      <span>
        {props.body}
        {props.children}
      </span>
    </li>,

    disabled: <li
      {...cleanProps}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      <span>
        {props.body}
        {props.children}
      </span>
    </li>,

    link: <li
      {...cleanProps}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      <a
        href={props.href}
      >
        {props.body}
        {props.children}
      </a>
    </li>
  };


  // Return Component
  return component[props.type] || component['link'];

};


BreadcrumbItem.propTypes = {
  body      : React.PropTypes.string,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  href      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  type      : React.PropTypes.oneOf([ 'active',  'link', 'disabled' ])
};


export default uikit.base(BreadcrumbItem);
