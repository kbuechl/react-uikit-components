'use strict';

import React from 'react';
import ufunc from 'ufunc';
import columns from './keysToListUq';

// Generate headings from head prop
const headFromProp = (head) => head.map((item, index) => {
  return <th key={index}>
   {item}
  </th>;
});


// Generate headings from collection keys
const headfromBodyKeys = (ary) => {

  return columns(ary).map((k, i) => <th key={i}>
    {k}
  </th>);
};


const TableHead = (props) => (
  <thead>
    <tr>
      {props.numbered ? <th>{props.numbered}</th> : null}
      {ufunc.either(() => headfromBodyKeys(props.body), () => headFromProp(props.head))(props.head === '*')}
    </tr>
  </thead>
);


TableHead.propTypes = {
  body: React.PropTypes.array,
  head: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ]),
  numbered: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ])
};

export default TableHead;
