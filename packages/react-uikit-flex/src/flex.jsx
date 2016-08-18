'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const Flex = (props) => {
  // CSS classes
  const direction = {
    rowReverse   : 'uk-flex-row-reverse',
    column       : 'uk-flex-column',
    columnReverse: 'uk-flex-column uk-flex-column-reverse'
  };


  const row = {
    wrap   : 'uk-flex-wrap',
    bottom : 'uk-flex-wrap-bottom',
    middle : 'uk-flex-wrap-middle',
    top    : 'uk-flex-wrap-top',
    between: 'uk-flex-wrap-space-between',
    around : 'uk-flex-wrap-space-around',
    reverse: 'uk-flex-wrap-reverse',
    nowrap : 'uk-flex-nowrap'
  };


  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-flex',
    props.around ? 'uk-flex-space-around' : null,
    props.center ? 'uk-flex-center' : null,
    props.direction ? direction[props.direction] : null,
    props.bottom ? 'uk-flex-bottom' : null,
    props.between ? 'uk-flex-space-between' : null,
    props.middle ? 'uk-flex-middle' : null,
    props.grid ? 'uk-grid' : null,
    props.right ? 'uk-flex-right' : null,
    props.top ? 'uk-flex-top' : null,
    props.row ? uikit.helpers.stringToClasses(props.row, row) : null,
    props.classes,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'around',
    'children',
    'className',
    'classes',
    'center',
    'bottom',
    'between',
    'direction',
    'grid',
    'kitid',
    'middle',
    'right',
    'row',
    'top'
  ];

  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);


  // Return Component
  return <div
     {...cleanProps}
     {...uikit.events(props)}
     className={cssClassNames}
     data-kitid={props.kitid}
  >
    {props.children}
  </div>;
};


Flex.propTypes = {
  around    : React.PropTypes.bool,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  center    : React.PropTypes.bool,
  bottom    : React.PropTypes.bool,
  between   : React.PropTypes.bool,
  direction : React.PropTypes.oneOf(['rowReverse', 'column', 'columnReverse']),
  grid      : React.PropTypes.bool,
  kitid     : React.PropTypes.string,
  middle    : React.PropTypes.bool,
  right     : React.PropTypes.bool,
  row       : React.PropTypes.string,
  top       : React.PropTypes.bool
};


export default uikit.base(Flex);
