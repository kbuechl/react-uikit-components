'use strict';

import React from 'react';
import {
  base,
  helpers
} from 'react-uikit-base';


const Dropbody = (props) => {
  const ignoreProps = [
    'children',
    'classes',
    'kitid'
  ];
  const cleanProps = helpers.cleanProps(ignoreProps)(props);

  return <div {...cleanProps} >
    {props.children}
  </div>;
};


Dropbody.propTypes = {
  children: React.PropTypes.any,
  classes : React.PropTypes.array,
  kitid   : React.PropTypes.string,
};

export default base(Dropbody);
