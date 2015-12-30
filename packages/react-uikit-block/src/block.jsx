'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';
import ufunc from 'ufunc';


const Block = (props) => {
  // CSS classes
  const contailerCSS = props.container ? 'uk-container' : null;


  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-block',
    props.classes,
    props.context ? `uk-block-${props.context}` : null,
    props.contrast ? 'uk-contrast' : null,
    props.large ? 'uk-block-large' : null,
    props.className
  ]);


  // Elements
  const attr = {
    ...props,
    ...uikit.events(props),
    className: cssClassNames,
    'data-kitid': props.kitid
  };


  const block = <div {...attr}>
      {props.children}
    </div>;


  const container = <div {...attr}>
    <div className={contailerCSS} >
      {props.children}
    </div>
  </div>;


  // Return Component
  const isContainer = ufunc.either(container, block);
  return isContainer(props.container);


};

Block.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  context   : React.PropTypes.oneOf(['default', 'muted', 'primary', 'secondary']),
  container : React.PropTypes.bool,
  kitid     : React.PropTypes.string,
  large     : React.PropTypes.bool
};


export default uikit.base(Block);
