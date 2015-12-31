'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';


class CommentList extends React.Component {
  render () {
    const props = this.props;

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
  }
}

export default uikit.base(CommentList);
