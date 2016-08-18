'use strict';

import React from 'react';
import {
  base,
  helpers
} from 'react-uikit-base';


const NavItem = (props) => {
  // CSS classes
  let type = {
    divider: 'uk-nav-divider',
    header: 'uk-nav-header'
  };


  // Remove non valid html attributes
  const ignoreProps = [
    'active',
    'body',
    'children',
    'classes',
    'divder',
    'header',
    'href',
    'kitid',
    'parent',
    'subtitle',
    'type'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.active ? 'uk-active' : null,
    type[props.type] ? type[props.type] : null,
    props.parent ? 'uk-parent' : null,
    props.className
  ]);


  // Elements
  const subtitle = props.subtitle ? <div>{props.subtitle}</div> : null;

  const link = <a
    href={props.href}
    data-kitid={props.kitid}
  >
    {props.body}
    {subtitle}
  </a>;


  const component = {
    divider: <li
      {...cleanProps}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
    </li>,

    header: <li
      {...cleanProps}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.body}
    </li>,

    link: <li
      {...cleanProps}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {link}
      {props.children}
    </li>,

    item: <li
      {...cleanProps}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.body}
      {props.children}
    </li>
  };


  // Return Component
  return component[props.type] || component['link'];

};


NavItem.propTypes = {
  active    : React.PropTypes.bool,
  body      : React.PropTypes.string,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  divder    : React.PropTypes.bool,
  header    : React.PropTypes.bool,
  href      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  parent    : React.PropTypes.bool,
  subtitle  : React.PropTypes.string,
  type      : React.PropTypes.oneOf(['divider', 'link', 'header', 'item'])
};


export default base(NavItem);
