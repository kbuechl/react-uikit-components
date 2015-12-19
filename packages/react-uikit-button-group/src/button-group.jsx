'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


class ButtonGroup extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['button', 'dropdown', 'checkbox', 'radio'])
  }

  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-button-group',
      $props.classes,
      $props.className
    ]);


    // Return Component
    return <div
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      {$props.children}
    </div>;
  }
}


export default uikit.base(ButtonGroup);
