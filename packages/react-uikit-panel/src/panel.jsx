'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import {
  either,
  maybeIf
} from 'ufunc';
import Badge from 'react-uikit-badge';


const Panel = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-panel',
    props.classes,
    props.box ? 'uk-panel-box' : null,
    props.context ? `uk-panel-box-${props.context}` : null,
    props.divider ? 'uk-panel-divider' : null,
    props.header ? 'uk-panel-header' : null,
    props.hover ? 'uk-panel-hover' : null,
    props.space ? 'uk-panel-space' : null,
    props.className
  ]);


  // Remove non valid html attributes
  const ignoreProps = [
    'badge',
    'box',
    'classes',
    'context',
    'divider',
    'header',
    'hover',
    'icon',
    'kitid',
    'link',
    'space',
    'teaser',
    'title',
    'type'
  ];
  const cleanProps = helpers.cleanProps(ignoreProps)(props);

  // Elements
  const badge = maybeIf(
    either(
      <Badge className='uk-panel-badge' kitid={props.kitid}>{props.badge}</Badge>,

      <Badge className='uk-panel-badge' kitid={props.kitid} context={props.badge ? props.badge.context : null}>
        {props.badge ? props.badge.body : 'Note'}
      </Badge>,

    )(typeof props.badge === 'string')
  )(props.badge);


  const icon = maybeIf(
    <i className={`uk-icon-${props.icon}`}></i>
  )(props.icon);


  const teaser = maybeIf(
    <div className='uk-panel-teaser'>
     <img src={props.teaser ? props.teaser.src : null } alt={props.teaser ? props.teaser.alt : null} />
    </div>
  )(props.teaser);


  const title = maybeIf(
   <h3 className='uk-panel-title'>{icon} {props.title}</h3>
  )(props.title);


  const attr = {
    ...cleanProps,
    ...{...events(props)},
    'data-kitid': props.kitid
  };


  const type = {
    block: <div
      {...attr}
      className={cssClassNames}
    >
      {teaser}
      {badge}
      {title}
      {props.children}
    </div>,

    list: <li
      {...attr}
      className={cssClassNames}
    >
      {teaser}
      {badge}
      {title}
      {props.children}
    </li>,

    link: <a
      data-kitid={props.kitid}
      href={props.link}
    >
      {teaser}
      {badge}
      {title}
      {props.children}
    </a>
  };


  // Return Component
  return type[props.type] || type['block'];
};


Panel.propTypes = {
  badge   : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  box     : React.PropTypes.bool,
  children: React.PropTypes.any,
  classes : React.PropTypes.array,
  context : React.PropTypes.oneOf(['primary', 'secondary']),
  divider : React.PropTypes.bool,
  header  : React.PropTypes.bool,
  hover   : React.PropTypes.bool,
  icon    : React.PropTypes.string,
  kitid   : React.PropTypes.string,
  link    : React.PropTypes.string,
  space   : React.PropTypes.bool,
  teaser  : React.PropTypes.object,
  title   : React.PropTypes.string,
  type    : React.PropTypes.oneOf(['link', 'list', 'block'])
};

export default base(Panel);
