'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import ufunc from 'ufunc';


const Comment = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-comment',
    props.primary ? 'uk-comment-primary' : null,
    props.classes,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'avatar',
    'body',
    'children',
    'classes',
    'items',
    'kitid',
    'meta',
    'primary',
    'title',
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);


  // Elements
  const avatar = ufunc.maybeIf(
    <img
      className='uk-comment-avatar'
      src={props.avatar ? props.avatar.src : null}
      alt={props.avatar ? props.avatar.alt : null }
    />
  )(props.avatar);


  const title = ufunc.maybeIf(
    <h4 className='uk-comment-title'>
      {props.title}
    </h4>
  )(props.title);


  const meta = ufunc.maybeIf(
    <div className='uk-comment-meta'>
      {props.meta}
    </div>
  )(props.meta);


  const header = <header
    className='uk-comment-header'
  >
    {avatar}
    {title}
    {meta}
  </header>;


  const body = <div
    className='uk-comment-body'>
    {props.body}
    {props.children}
  </div>;


  // Return Component
  return <article
    {...cleanProps}
    {...events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {header}
    {body}
  </article>;
};


Comment.propTypes = {
  avatar    : React.PropTypes.object,
  body      : React.PropTypes.string,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  items     : React.PropTypes.object,
  kitid     : React.PropTypes.string,
  meta      : React.PropTypes.any,
  primary   : React.PropTypes.bool,
  title     : React.PropTypes.string
};


export default base(Comment);
