'use strict';
import React from 'react';
import base from './base';
import { helpers } from '../lib/uikit';


const Element = (props) => {
  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.className
  ]);


  const cleanProps = helpers.cleanProps([])(props);

  return <div
    className={cssClassNames}
    {...cleanProps}
  >
    {props.children}
  </div>;
};

Element.propTypes = {
  classes   : React.PropTypes.array,
  className : React.PropTypes.string,
  children  : React.PropTypes.any
};

export default base(Element);
