
'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


const icon = (props) => {

  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    props.link ? props.link.type === 'button' ? 'uk-icon-button' : 'uk-icon-hover' : null,
    props.spin ? 'uk-icon-spin' : null,
    props.justify ? 'uk-icon-justify' : null,
    props.icon ? `uk-icon-${props.icon}` : null,
    props.size ? `uk-icon-${props.size}` : null,
    props.classes,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'icon',
    'link',
    'justify',
    'kitid',
    'spin',
    'size'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);

  const cleanLinkProps = ()  => props.link ? helpers.cleanProps(ignoreProps)(props.link) : null;

  const component = {
    icon: <i
      {...cleanProps}
      {...events(props)}
      className={cssClassNames}
      data-kitid={props.kitid}
     />,

    link: <a
      {...cleanLinkProps()}
      data-kitid={props.kitid}
    >
      <i
        {...cleanProps}
        {...events(props)}
        className={cssClassNames}

       />
     </a>
  };


  // Return Component
  return props.link ? component.link : component.icon;
};


icon.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  icon      : React.PropTypes.string,
  link      : React.PropTypes.object,
  justify   : React.PropTypes.bool,
  kitid     : React.PropTypes.string,
  spin      : React.PropTypes.bool,
  size      : React.PropTypes.oneOf(['small', 'medium', 'large'])
};


export default base(icon);
