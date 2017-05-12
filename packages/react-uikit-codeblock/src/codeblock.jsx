
'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


const Codeblock = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.lang,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'kitid',
    'lang',
    'syntax',
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Return Component
  return <pre
    {...cleanProps}
    {...events(props)}
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
  lang      : React.PropTypes.string,
  syntax    : React.PropTypes.string
};


export default base(Codeblock);
