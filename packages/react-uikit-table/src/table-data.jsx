'use strict';

import React from 'react';
import ufunc from 'ufunc';


const TableData = (props) => {
  const item = props.item;

  return item.map((val, index) => {
    let col;

    const isUndefined = ufunc.maybe(0);

    const item1 = val[2];
    const item2 = isUndefined(item[index + 1]);
    const item1PlusOne = item1 + 1;
    const item1PlusItem2 = item1 + isUndefined(item2[2]);
    const item2MinusItem1 = isUndefined(item2[2]) - item1;


    // sets colspan
    if (item1PlusOne !== item1PlusItem2 + 1) {
      col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;
    }


    return <td
      colSpan={col}
      key={index}
      data-kitid={`tabledata-[${props.index}, ${index}]-${props.kitid}`}>
      {val[1]}
    </td>;
  });
};

TableData.propTypes = {
  item : React.PropTypes.array,
  index: React.PropTypes.number,
  kitid: React.PropTypes.string
};

export default TableData;
