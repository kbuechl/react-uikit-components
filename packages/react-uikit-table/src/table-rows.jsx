'use strict';

import React from 'react';
import TableData from './table-data';
import sortIt from 'sort-it';
import columns from './keysToListUq';

// Convert object to array with index column position
const bodyToArray = (body, columns) => {
  return body.map(item => {
    return Object.keys(item).map(k => {
      const pos = columns.indexOf(k);
      return [k, item[k], pos];
    });
  });
};


// Sorts a collection of data
const sort = (data, critera) => {
  if (!critera) return data;
  return sortIt(data, critera);
};


const TableRows = (props, columns) => {
  return bodyToArray(sort(props.body, props.sort), columns).map((item, index) => {
    return <tr key={index}>
      {TableData(item)}
    </tr>;
  });
};


TableRows.propTypes = {
  body : React.PropTypes.array,
  sort : React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ])
};


export default TableRows;
