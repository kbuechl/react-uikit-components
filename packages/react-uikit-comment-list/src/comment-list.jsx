'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const CommentList = (props) => {

  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-comment-list',
    props.classes,
    props.className
  ]);


  // Return Component
  return <ul
    {...props}
    {...uikit.events(props)}
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

export default uikit.base(CommentList);
