'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import ListItem from './list-item';


class List extends React.Component {

  getItemId (index) {
    return `item-${index}-${this.props.kitid}`;
  }


  render () {
    const props = this.props;

    // Remove non valid html attributes
    const ignoreProps = [
      'children',
      'className',
      'classes',
      'description',
      'items',
      'horizontal',
      'kitid',
      'line',
      'striped',
      'selectable',
      'space',
      'type'
    ];

    const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);

    // CSS classes
    const isLine = ufunc.either('uk-list-line', 'uk-description-list-line');
    const isHor = ufunc.maybeIf('uk-description-list-horizontal')(props.type === 'description');

    const cssClassNames = uikit.helpers.cleanClasses([
      props.type !== 'description' ? 'uk-list' : null,
      props.horizontal ? isHor : null,
      !props.line ? null : isLine(props.type !== 'description'),
      props.striped ? 'uk-list-striped' : null,
      props.space ? 'uk-list-space' : null,
      props.classes,
      props.className
    ]);


    // Elements
    const link = (item, index) => <ListItem
      key={index}
      {...item}
      kitid={this.getItemId(index)}
      selectable={props.selectable}
      onClick={props.onClick}
    />;


    const text = (item, index) => <ListItem
      key={index}
      body={item}
      kitid={this.getItemId(index)}
    />;


    let items;
    if (props.items) {
      items = props.items.map((item, index) => {
        return ufunc.either(
          link(item, index),
          text(item, index)
        )(item.href);
      });
    }

    const attr = {
      ...cleanProps,
      ...uikit.events(cleanProps),
      'data-kitid': props.kitid,
      className   :cssClassNames
    };

    const type = {
      unorderd: <ul {...attr}>
        {items}
        {props.children}
      </ul>,

      ordered: <ol {...attr}
      >
        {items}
        {props.children}
      </ol>,

      description: <dl {...attr}>
        {props.children}
      </dl>
    };


    // Return Component
    return type[props.type] || type['unorderd'];
  }
}

List.propTypes = {
  children    : React.PropTypes.any,
  className   : React.PropTypes.string,
  classes     : React.PropTypes.array,
  description : React.PropTypes.string,
  items       : React.PropTypes.array,
  horizontal  : React.PropTypes.bool,
  kitid       : React.PropTypes.string,
  line        : React.PropTypes.bool,
  striped     : React.PropTypes.bool,
  selectable  : React.PropTypes.oneOfType([
                  React.PropTypes.bool,
                  React.PropTypes.object
                ]),
  space       : React.PropTypes.bool,
  type        : React.PropTypes.oneOf(['description', 'ordered', 'unorderd'])
};


export default uikit.base(List);
