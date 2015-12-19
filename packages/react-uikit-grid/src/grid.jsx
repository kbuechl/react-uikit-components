'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


class Grid extends React.Component {


  static propTypes = {
    divider: React.PropTypes.bool,
    gutter : React.PropTypes.oneOf(['small', 'medium', 'collapse']),
    large  : React.PropTypes.oneOf(uikit.helpers.colSpan),
    match  : React.PropTypes.bool,
    medium : React.PropTypes.oneOf(uikit.helpers.colSpan),
    small  : React.PropTypes.oneOf(uikit.helpers.colSpan),
    type   : React.PropTypes.oneOf(['block', 'list']),
    widths  : React.PropTypes.oneOf(uikit.helpers.colSpan),
    xlarge  : React.PropTypes.oneOf(uikit.helpers.colSpan)
  };


  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-grid',
      $props.classes,
      $props.divider ? 'uk-grid-divider' : null,
      $props.gutter ? `uk-grid-${$props.gutter}` : null,
      $props.large ? `uk-grid-width-large-${$props.large}` : null,
      $props.match ? 'uk-grid-match' : null,
      $props.medium ? `uk-grid-width-medium-${$props.medium}` : null,
      $props.small ? `uk-grid-width-small-${$props.small}` : null,
      $props.widths ? `uk-grid-width-${$props.widths}` : null,
      $props.xlarge ? `uk-grid-width-xlarge-${$props.xlarge}` : null,
      $props.className
    ]);

    // elements
    const ignoreProps = ['type', 'width'];

    const type = {
      block: <div
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        style={$props.indent ? {marginLeft : '0px'} : null}
        className={cssClassNames}
        data-kitid={$props.kitid}
      >
        {$props.children}
      </div>,

      list: <ul
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        data-kitid={$props.kitid}
      >
        {$props.children}
      </ul>
    };


    // Return Component
    return type[$props.type] || type['block'];
  }
}

export default uikit.base(Grid);
