'use strict';

import React from 'react';
import {
  base,
  helpers,
  events
} from 'react-uikit-base';
import { maybeIf } from 'ufunc';
import Img from 'react-uikit-img';


const ImgGroup = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'className',
    'items',
    'kitid'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Elements

  // component = props.component
  const mapItems = () => {
    return props.items.map((item, index) => {
      return <Img
        key={index}
        {...item}
      />;
    });
  };


  const items = maybeIf(mapItems())(props.items);

  // Return Component
  return <div
    {...cleanProps}
    {...events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {items}
    {props.children}
  </div>;
};

ImgGroup.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  items     : React.PropTypes.array,
  kitid     : React.PropTypes.string
};


export default base(ImgGroup);
