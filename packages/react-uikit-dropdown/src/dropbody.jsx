'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';


const Dropbody = (props) => {
  return <div {...props} >
    {props.children}
  </div>;
};


Dropbody.propTypes = {
  children: React.PropTypes.any
};

export default uikit.base(Dropbody);
