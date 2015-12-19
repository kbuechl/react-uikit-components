'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Badge from '../../react-uikit-badge/lib/badge';


class Note extends React.Component {
  static propTypes = {
    badge  : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    body : React.PropTypes.string
  }

  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      $props.classes,
      $props.className
    ]);


    // Elements
    const badge = ufunc.either(
      <Badge>{$props.badge}</Badge>,

      <Badge context={$props.badge ? $props.badge.context : null}>
        {$props.badge ? $props.badge.body : 'Note'}
      </Badge>,
    )(typeof $props.badge === 'string');


    // Return Component
    return <p
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      {badge} {$props.body} {$props.children}
    </p>;

  }
}


export default uikit.base(Note);
