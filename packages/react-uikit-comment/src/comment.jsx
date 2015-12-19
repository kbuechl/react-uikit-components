'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';


class Comment extends React.Component {
  static propTypes = {
    body  : React.PropTypes.string,
    items   : React.PropTypes.object,
    avatar : React.PropTypes.object,
    title  : React.PropTypes.string,
    meta   : React.PropTypes.string,
    primary: React.PropTypes.bool
  }


  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-comment',
      $props.primary ? 'uk-comment-primary' : null,
      $props.classes,
      $props.className
    ]);


    // Elements
    const avatar = ufunc.maybeIf(
      <img
        className='uk-comment-avatar'
        src={$props.avatar ? $props.avatar.src : null}
        alt={$props.avatar ? $props.avatar.alt : null }
      />
    )($props.avatar);


    const title = ufunc.maybeIf(
      <h4 className='uk-comment-title'>
        {$props.title}
      </h4>
    )($props.title);


    const meta = ufunc.maybeIf(
      <div className='uk-comment-meta'>
        {$props.meta}
      </div>
    )($props.meta);


    const header = <header
      className='uk-comment-header'
    >
      {avatar}
      {title}
      {meta}
    </header>;


    const body = <div
      className='uk-comment-body'>
      {$props.body}
      {$props.children}
    </div>;


    // Return Component
    return <article
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      {header}
      {body}
    </article>;
  }
}


export default uikit.base(Comment);
