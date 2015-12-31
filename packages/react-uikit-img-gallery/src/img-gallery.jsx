'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Img from 'react-uikit-img';


const ImgGroup = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    props.classes,
    props.className
  ]);


  // Elements
  //
  // component = props.component
  const mapItems = () => {
    return props.items.map((item, index) => {
      return <Img
        key={index}
        {...item}
      />;
    });
  };


  const items = ufunc.maybeIf(mapItems())(props.items);

  // Return Component
  return <div
    {...props}
    {...uikit.events(props)}
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
  items: React.PropTypes.array,
  kitid     : React.PropTypes.string
};


export default uikit.base(ImgGroup);
