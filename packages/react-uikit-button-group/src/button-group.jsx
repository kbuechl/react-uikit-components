'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const ButtonGroup = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-button-group',
    props.classes,
    props.className
  ]);


  // Return Component
  return <div
    {...{...props, ...uikit.events(props)}}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.children}
  </div>;

};


ButtonGroup.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'dropdown', 'checkbox', 'radio'])
};

export default uikit.base(ButtonGroup);
