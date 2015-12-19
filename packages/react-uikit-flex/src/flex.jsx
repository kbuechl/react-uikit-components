'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


class Flex extends React.Component {
  static propTypes = {
    around    : React.PropTypes.bool,
    center    : React.PropTypes.bool,
    bottom    : React.PropTypes.bool,
    between   : React.PropTypes.bool,
    direction : React.PropTypes.oneOf(['rowReverse', 'column', 'columnReverse']),
    grid      : React.PropTypes.bool,
    middle    : React.PropTypes.bool,
    right     : React.PropTypes.bool,
    row       : React.PropTypes.string,
    top       : React.PropTypes.bool
  }


  render () {
    const $props = this.props;


    // CSS classes
    const direction = {
      rowReverse   : 'uk-flex-row-reverse',
      column       : 'uk-flex-column',
      columnReverse: 'uk-flex-column uk-flex-column-reverse'
    };


    const row = {
      wrap   : 'uk-flex-wrap',
      bottom : 'uk-flex-wrap-bottom',
      middle : 'uk-flex-wrap-middle',
      top    : 'uk-flex-wrap-top',
      between: 'uk-flex-wrap-space-between',
      around : 'uk-flex-wrap-space-around',
      reverse: 'uk-flex-wrap-reverse',
      nowrap : 'uk-flex-nowrap'
    };


    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-flex',
      $props.classes,
      $props.around ? 'uk-flex-space-around' : null,
      $props.center ? 'uk-flex-center' : null,
      $props.direction ? direction[$props.direction] : null,
      $props.bottom ? 'uk-flex-bottom' : null,
      $props.between ? 'uk-flex-space-between' : null,
      $props.middle ? 'uk-flex-middle' : null,
      $props.grid ? 'uk-grid' : null,
      $props.right ? 'uk-flex-right' : null,
      $props.top ? 'uk-flex-top' : null,
      $props.row ? uikit.helpers.stringToClasses($props.row, row) : null,
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


export default uikit.base(Flex);
