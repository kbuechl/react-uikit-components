'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


const ButtonGroup = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-button-group',
    props.classes,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'kitid',
    'type'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Return Component
  return <div
    {...cleanProps}
    {...events(props)}
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

export default base(ButtonGroup);
