'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import columns from './keysToListUq';
import TableRows from './table-rows';
import TableHead from './table-head';


const Table = (props) => {

  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-table',
    props.classes,
    props.condensed ? 'uk-table-condensed' : null,
    props.hover ? 'uk-table-hover' : null,
    props.striped ? 'uk-table-striped' : null,
    props.className
  ]);


  // Elements
  let thead;

  if (props.head) {
    thead = <TableHead head={props.head} body={props.body} />;
  };


  let tbody;

  if (props.body) {
    tbody = <tbody>
      {TableRows(props, columns(props.body))}
    </tbody>;
  }

  const caption = ufunc.maybeIf(<caption>{props.caption}</caption>)(props.caption);


  const table = <table
    {...props}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {caption}
    {thead}
    {tbody}
    {props.children}
  </table>;


  const overflow = <div
    {...props}
    className='uk-overflow-container'
    data-kitid={props.kitid}
  >
    {table}
  </div>;


  // Return Component
  const component = ufunc.either(overflow, table);
  return component(props.overflow);
};


Table.propTypes = {
  body      : React.PropTypes.array,
  caption   : React.PropTypes.string,
  classes   : React.PropTypes.array,
  className : React.PropTypes.string,
  condensed : React.PropTypes.bool,
  hover     : React.PropTypes.bool,
  head      : React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ]),
  kitid     : React.PropTypes.string,
  overflow  : React.PropTypes.bool,
  sort      : React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ]),
  striped   : React.PropTypes.bool
};


export default uikit.base(Table);
