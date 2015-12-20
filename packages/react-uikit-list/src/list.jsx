'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import ListItem from './list-item';


class List extends React.Component {
  static propTypes = {
    items        : React.PropTypes.array,
    horizontal   : React.PropTypes.bool,
    line         : React.PropTypes.bool,
    striped      : React.PropTypes.bool,
    onSelectMode : React.PropTypes.func,
    space        : React.PropTypes.bool,
    type         : React.PropTypes.oneOf(['description', 'ordered', 'unorderd'])
  }


  render () {
    const $props = this.props;


    // CSS classes
    const isLine = ufunc.either('uk-list-line', 'uk-description-list-line');
    const isHor = ufunc.maybeIf('uk-description-list-horizontal')($props.type === 'description');

    const cssClassNames = uikit.helpers.cleanClasses([
      $props.type !== 'description' ? 'uk-list' : null,
      $props.horizontal ? isHor : null,
      !$props.line ? null : isLine($props.type !== 'description'),
      $props.striped ? 'uk-list-striped' : null,
      $props.space ? 'uk-list-space' : null,
      $props.classes,
      $props.className
    ]);


    // Elements
    const selectable = ufunc.maybeIf(
      <input type="checkbox" className='close' onClick={ (e) => $props.onSelectMode(e) }/>
    )($props.selectable);


    const link = (item, index) => <ListItem
      active={item.active}
      description={$props.description}
      badge={item.badge}
      body={item.body }
      href={item.href}
      key={index}
      kitId={item.kitId}
      onClick={item.onClick}
      onSelectMode={selectable}
    />;


    const text = (item, index) => <ListItem
      body={item}
      key={index}
      kitId={item.kitId}
      onClick={item.onClick}
      selectable={selectable}
    />;


    let items;
    if ($props.items) {
      items = $props.items.map((item, index) => {
        return ufunc.either(
          link(item, index),
          text(item, index)
        )(item.href);
      });
    }


    const ignoreProps = ['type'];

    
    const type = {
      unorderd: <ul
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
      >
        {items}
        {$props.children}
      </ul>,

      ordered: <ol
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
      >
        {items}
        {$props.children}
      </ol>,

      description: <dl
      {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
      >
        {$props.children}
      </dl>
    };


    // Return Component
    return type[$props.type] || type['unorderd'];
  }
}


export default uikit.base(List);
