'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';

class Block extends React.Component {
  static propTypes = {
    context  : React.PropTypes.oneOf(['default', 'muted', 'primary', 'secondary']),
    container: React.PropTypes.bool,
    large    : React.PropTypes.bool
  }


  render () {
    const $props = this.props;


    // CSS classes
    const contailerCSS = $props.container ? 'uk-container' : null;

    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-block',
      $props.classes,
      $props.context ? `uk-block-${$props.context}` : null,
      $props.contrast ? 'uk-contrast' : null,
      $props.large ? 'uk-block-large' : null,
      $props.className
    ]);


    // Elements
    const block = <div
        {...$props}
        className={cssClassNames}
        data-kitid={$props.kitid}
      >
        {$props.children}
      </div>;


    const container = <div
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      <div
        className={contailerCSS}
      >
        {$props.children}
      </div>
    </div>;


    // Return Component
    const isContainer = ufunc.either(container, block);
    return isContainer($props.container);

  }
}


export default uikit.base(Block);
