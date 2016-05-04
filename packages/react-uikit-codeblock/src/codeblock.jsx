
'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const Codeblock = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    props.classes,
    props.lang,
    props.className
  ]);


  // Return Component
  return <pre
    {...props}
    {...uikit.events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    <code>
    {props.children}
    </code>
  </pre>;
};


Codeblock.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  lang      : React.PropTypes.string
};


export default uikit.base(Codeblock);
