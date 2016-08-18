'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


const CommentList = (props) => {

  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-comment-list',
    props.classes,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'kitid' 
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Return Component
  return <ul
    {...cleanProps}
    {...events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.children}
  </ul>;

};

CommentList.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string
};

export default base(CommentList);
