
'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const icon = (props) => {

  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    props.link ? props.link.type === 'button' ? 'uk-icon-button' : 'uk-icon-hover' : null,
    props.spin ? 'uk-icon-spin' : null,
    props.justify ? 'uk-icon-justify' : null,
    props.icon ? `uk-icon-${props.icon}` : null,
    props.size ? `uk-icon-${props.size}` : null,
    props.classes,
    props.className
  ]);


  const cleanProps = uikit.helpers.cleanProps(['icon', 'type'])(props);

  const cleanLinkProps = () => uikit.helpers.cleanProps(['type'])(props.link);


  const component = {
    icon: <i
      {...cleanProps}
      {...uikit.events(props)}
      className={cssClassNames}
      data-kitid={props.kitid}
     />,

    link: <a 
      {...props.link ? cleanLinkProps() :  null}
      data-kitid={props.kitid}
    >
      <i
        {...cleanProps}
        {...uikit.events(props)}
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


export default uikit.base(icon);
