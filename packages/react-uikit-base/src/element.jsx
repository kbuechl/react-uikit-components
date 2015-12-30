'use strict';
import React from 'react';
import base from './base';


const Element = (props) => (
  <div {...props}>
    {props.children}
  </div>
);

Element.propTypes = {
  classes   : React.PropTypes.array,
  children  : React.PropTypes.any
};

export default base(Element);
