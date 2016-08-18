'use strict';

import React from 'react';
import TableData from './table-data';
import sortIt from 'sort-it';


// Convert object to array with index column position
const bodyToArray = (body, columns) => {

  return body.map(item => {
    return Object.keys(item).map(k => {
      const pos = columns.map(i =>  {

        return i.toLowerCase();
      }).indexOf(k.toLowerCase());

      return [k, item[k], pos];
    });
  });
};


// Sorts a collection of data
const sort = (data, critera) => {
  if (!critera) return data;
  return sortIt(data, critera);
};

const numbered = (index) => (
  <td>
    {index + 1}
  </td>
);


const TableRows = (props, columns) => {
  return bodyToArray(sort(props.body, props.sort), columns).map((item, index) => {
    return <tr key={index} data-kitid={`tablerow-${index}-${props.kitid}`}>
      {props.numbered ? numbered(index) : null}
      {TableData({
        columns,
        item,
        index,
        kitid: props.kitid
      })}
    </tr>;
  });
};


TableRows.propTypes = {
  body    : React.PropTypes.array,
  kitid   : React.PropTypes.string,
  numbered: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  sort    : React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ])
};


export default TableRows;
