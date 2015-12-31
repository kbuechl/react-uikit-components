'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const Grid = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-grid',
    props.classes,
    props.divider ? 'uk-grid-divider' : null,
    props.gutter ? `uk-grid-${props.gutter}` : null,
    props.large ? `uk-grid-width-large-${props.large}` : null,
    props.match ? 'uk-grid-match' : null,
    props.medium ? `uk-grid-width-medium-${props.medium}` : null,
    props.small ? `uk-grid-width-small-${props.small}` : null,
    props.widths ? `uk-grid-width-${props.widths}` : null,
    props.xlarge ? `uk-grid-width-xlarge-${props.xlarge}` : null,
    props.className
  ]);

  // elements
  const ignoreProps = ['type', 'width'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);
  const events = uikit.events(props);

  const type = {
    block: <div
      {...cleanProps}
      {...events}
      style={props.indent ? {marginLeft : '0px'} : null}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.children}
    </div>,

    list: <ul
      {...cleanProps}
      {...events}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.children}
    </ul>
  };


  // Return Component
  return type[props.type] || type['block'];

};


Grid.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  divider   : React.PropTypes.bool,
  gutter    : React.PropTypes.oneOf(['small', 'medium', 'collapse']),
  indent    : React.PropTypes.bool,
  kitid     : React.PropTypes.string,
  large     : React.PropTypes.oneOf(uikit.helpers.colSpan),
  match     : React.PropTypes.bool,
  medium    : React.PropTypes.oneOf(uikit.helpers.colSpan),
  small     : React.PropTypes.oneOf(uikit.helpers.colSpan),
  type      : React.PropTypes.oneOf(['block', 'list']),
  widths    : React.PropTypes.oneOf(uikit.helpers.colSpan),
  xlarge    : React.PropTypes.oneOf(uikit.helpers.colSpan)
};

export default uikit.base(Grid);
