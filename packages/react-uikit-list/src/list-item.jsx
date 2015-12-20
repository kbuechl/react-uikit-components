'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Badge from '../../react-uikit-badge/lib/badge';


class ListItem extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    badge: React.PropTypes.object,
    body: React.PropTypes.string,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    selectable: React.PropTypes.bool
  }

  handelLinkClick (e) {
    e.preventDefault(e);
    this.props.onClick({event:e, kitid: this.props.kitid});
  }

  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      $props.active ? 'uk-active' : null,
      $props.classes,
      $props.className
    ]);


    // Elements
    const badge = ufunc.maybeIf(
      <Badge
        floats='right'
        body={$props.badge ? $props.badge.body : null}
        context={$props.badge ? $props.badge.context : null}
        notification={$props.badge ? $props.badge.notification : null}
      />
    )($props.badge);


    const link = <li
      {...$props}
      className={cssClassNames}>

      <a
        data-kitid={$props.kitid}
        href={$props.href}
        className={$props.active ? 'uk-active' : null}
        onClick={(e) => this.handelLinkClick(e)}
      >
        {$props.selectable} {$props.body} {badge}
      </a>

    </li>;


    const text = <li
      {...$props}
      className={cssClassNames}
      onClick={$props.onClick}
      data-kitid={$props.kitid}
    >

     {$props.selectable} {$props.body}

   </li>;


    // Return Component
    const component = ufunc.either(link, text);
    return component($props.href);

  }
}


export default uikit.base(ListItem);
