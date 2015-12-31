'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Badge from 'react-uikit-badge';


const Panel = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
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


  // Elements
  const ignoreProps = ['type', 'title'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);


  const badge = ufunc.maybeIf(
    ufunc.either(
      <Badge className='uk-panel-badge' kitid={props.kitid}>{props.badge}</Badge>,

      <Badge className='uk-panel-badge' kitid={props.kitid} context={props.badge ? props.badge.context : null}>
        {props.badge ? props.badge.body : 'Note'}
      </Badge>,

    )(typeof props.badge === 'string')
  )(props.badge);


  const icon = ufunc.maybeIf(
    <i className={`uk-icon-${props.icon}`}></i>
  )(props.icon);


  const teaser = ufunc.maybeIf(
    <div className='uk-panel-teaser'>
     <img src={props.teaser ? props.teaser.src : null } alt={props.teaser ? props.teaser.alt : null} />
    </div>
  )(props.teaser);


  const title = ufunc.maybeIf(
   <h3 className='uk-panel-title'>{icon} {props.title}</h3>
  )(props.title);

  const attr = {
    ...cleanProps,
    ...{...uikit.events(props)},
    'data-kitid': props.kitid
  };


  const block = <div
    {...attr}
    className={cssClassNames}
  >
    {teaser}
    {badge}
    {title}
    {props.children}
  </div>;


  const type = {
    block: block,

    list: <li
      {...attr}
      className={cssClassNames}
    >
      {teaser}
      {badge}
      {title}
      {props.children}
    </li>,

    link: <a {...attr}>
        {block}
    </a>
  };


  // Return Component
  return type[props.type] || type['block'];
};


Panel.propTypes = {
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

export default uikit.base(Panel);
