'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import NavItem from './nav-item';
import cuid from 'cuid';

const Nav = (props) => {
  // CSS classes
  let type = {
    bar      : 'uk-nav-navbar',
    dropdown : 'uk-nav-dropdown',
    offcanvas: 'uk-nav-offcanvas',
    side     : 'uk-nav-side',
    sub      : 'uk-nav-sub',
    thumbnail: 'uk-thumbnav'
  };

  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-nav',
    props.classes,
    type[props.type] || type['side'],
    props.parent ? 'uk-nav-parent-icon' : null,
    props.className
  ]);


  // Elements
  const items = props.items
    ? props.items.map((item) => <NavItem
      {...item} key={item.kitid || cuid()}/>
      )
    : props.items;

  const cleanProps = uikit.helpers.cleanProps(['type'])(props);

  // Return Component
  return <ul
    {...cleanProps}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {items}
    {props.children}
  </ul>;
};


Nav.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  items     : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  parent    : React.PropTypes.bool,
  type      : React.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])
};


export default uikit.base(Nav);
