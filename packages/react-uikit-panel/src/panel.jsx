'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Badge from '../../react-uikit-badge/lib/badge';


class Panel extends React.Component {
  static propTypes = {
    badge  : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    box    : React.PropTypes.bool,
    context: React.PropTypes.oneOf(['primary', 'secondary']),
    divider: React.PropTypes.bool,
    header : React.PropTypes.bool,
    hover  : React.PropTypes.bool,
    icon   : React.PropTypes.string,
    link   : React.PropTypes.string,
    space  : React.PropTypes.bool,
    teaser : React.PropTypes.object,
    title  : React.PropTypes.string,
    type: React.PropTypes.oneOf(['link', 'list', 'block'])
  };


  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-panel',
      $props.classes,
      $props.box ? 'uk-panel-box' : null,
      $props.context ? `uk-panel-box-${$props.context}` : null,
      $props.divider ? 'uk-panel-divider' : null,
      $props.header ? 'uk-panel-header' : null,
      $props.hover ? 'uk-panel-hover' : null,
      $props.space ? 'uk-panel-space' : null,
      $props.className
    ]);


    // Elements
    const ignoreProps = ['type', 'title'];

    const badge = ufunc.maybeIf(
      ufunc.either(
        <Badge>{$props.badge}</Badge>,

        <Badge context={$props.badge ? $props.badge.context : null}>
          {$props.badge ? $props.badge.body : 'Note'}
        </Badge>,

      )(typeof $props.badge === 'string')
    )($props.badge);


    const icon = ufunc.maybeIf(
      <i className={`uk-icon-${$props.icon}`}></i>
    )($props.icon);


    const teaser = ufunc.maybeIf(
      <div className='uk-panel-teaser'>
       <img src={$props.teaser ? $props.teaser.src : null } alt={$props.teaser ? $props.teaser.alt : null} />
     </div>
   )($props.teaser);

   const title = ufunc.maybeIf(
     <h3 className='uk-panel-title'>{icon} {$props.title}</h3>
   )($props.title);


    const block = <div
      {...uikit.helpers.cleanProps($props, ignoreProps)}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
     {teaser}
     {badge}
     {title}
     {$props.children}
    </div>;


    const type = {
      block: block,

      list: <li
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        data-kitid={$props.kitid}
      >
        {teaser}
        {badge}
        {title}
        {$props.children}
      </li>,

      link: <a
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        href={$props.link}
        data-kitid={$props.kitid}
      >
          {block}
      </a>
    };


    // Return Component
    return type[$props.type] || type['block'];
  }
}


export default uikit.base(Panel);
