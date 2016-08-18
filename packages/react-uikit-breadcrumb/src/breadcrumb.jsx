'use strict';

import React from 'react';
import {
  base,
  helpers
} from 'react-uikit-base';
import BreadcrumbItem from './breadcrumb-item';
import cuid from 'cuid';

const Breadcrumb = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-breadcrumb',
    props.classes,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'items',
    'kitid',
    'type'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Elements
  const items = props.items
    ? props.items.map((item) => <BreadcrumbItem
      {...item} key={item.kitid || cuid()}/>
      )
    : props.items;


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


Breadcrumb.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  items     : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  type      : React.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])
};


export default base(Breadcrumb);
