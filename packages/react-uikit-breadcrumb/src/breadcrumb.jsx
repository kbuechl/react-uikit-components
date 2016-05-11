'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import BreadcrumbItem from './breadcrumb-item';
import cuid from 'cuid';

const Breadcrumb = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-breadcrumb',
    props.classes,
    props.className
  ]);


  // Elements
  const items = props.items
    ? props.items.map((item) => <BreadcrumbItem
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


Breadcrumb.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  items     : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  type      : React.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])
};


export default uikit.base(Breadcrumb);
