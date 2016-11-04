
'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


const Progress = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-progress',
    props.classes,
    props.context ? `uk-progress-${props.context}` : null,
    props.size ? `uk-progress-${props.size}` : null,
    props.striped ? `uk-progress-striped` : null,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'bar',
    'children',
    'classes',
    'context',
    'kitid',
    'size',
    'striped'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)({
    ...props,
    bar: null
  });

  const bar = props.bar ?`${props.bar}%` : '0%';

  // Return Component
  return <div
    {...cleanProps}
    {...events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    <div
      className="uk-progress-bar"
      style={{...props.style, width: bar}}
    >
      {bar}
    </div>
  </div>;
};


Progress.propTypes = {
  bar       : React.PropTypes.number,
  children  : React.PropTypes.any,
  classes   : React.PropTypes.array,
  className : React.PropTypes.string,
  context   : React.PropTypes.oneOf(['danger', 'success', 'warning']),
  kitid     : React.PropTypes.string,
  size      : React.PropTypes.oneOf(['mini', 'small']),
  striped   : React.PropTypes.bool,
  style     : React.PropTypes.object
};


export default base(Progress);
