'use strict';

import React from 'react';


const TableData = (item) => {
  for (let i = 0; i < item.length; i++) {
    return item.map((p, k) => {
      let col;
      const item1PlusOne = item[i][2] + 1;
      const item1PlusItem2 = item[i][2] + item[i + 1][2];
      const item2MinusItem1 = item[i + 1][2] - item[i][2];

      // sets colspan
      if (item1PlusOne !== item1PlusItem2) {
        col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;
      };

      return <td colSpan={col} key={k}>
        {p[1]}
      </td>;
    });
  }
};


export default TableData;
