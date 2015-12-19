'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';


class Badge extends React.Component {
  static propTypes = {
    context     : React.PropTypes.oneOf(['success', 'warning', 'danger']),
    block       : React.PropTypes.bool,
    body        : React.PropTypes.string,
    notification: React.PropTypes.bool
  }

  render () {
    const $props = this.props;


    // CSS classes
    const context = {
      success : `uk-badge-${$props.context}`,
      warning : `uk-badge-${$props.context}`,
      danger  : `uk-badge-${$props.context}`
    };

    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-badge',
      $props.classes,
      context[$props.context] || null,
      $props.notification ? 'uk-badge-notification' : null,
      $props.className
    ]);


    // Elements
    const block = <div
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      {$props.body}
      {$props.children}
    </div>;


    const inline = <span
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      {$props.body}
      {$props.children}
    </span>;


    // Return Component
    const component = ufunc.either(block, inline);
    return component($props.block);
  }
}


export default uikit.base(Badge);
