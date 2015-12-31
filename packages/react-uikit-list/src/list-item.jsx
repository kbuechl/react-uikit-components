'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Badge from 'react-uikit-badge';


class ListItem extends React.Component {
  getItemDetails (index) {
    let idx;

    if (index.charAt && index.charAt(0) === '.') {
      idx = index.match(/\$(.+)$/)[1];
    } else {
      idx = index;
    }

    return {
      component: this,
      element: uikit.helpers.getElement(this.props.kitid),
      index: idx,
      kitid: this.props.kitid
    };
  }


  handleClick (e, index) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.onClick) {
      this.props.onClick(Object.assign(
        {item: this.getItemDetails(index)},
        e
      ));
    }
  }


  handleSelect (e, index) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onSelect(Object.assign(
      {item: this.getItemDetails(index)},
      e
    ));
  }


  render () {
    const props = this.props;

    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      props.active ? 'uk-active' : null,
      props.classes,
      props.className
    ]);


    // Elements
    const badge = ufunc.maybeIf(
      <Badge
        kitid={`badge-${props.kitid}`}
        floats='right'
        body={props.badge ? props.badge.body : null}
        context={props.badge ? props.badge.context : null}
        notification={props.badge ? props.badge.notification : null}
      />
    )(props.badge);

    const selectable = (index) => {
      return ufunc.maybeIf(
        <input
          type="checkbox"
          className='close'
          checked={props.checked}
          data-kitid={`input-${props.kitid}`}
          onSelect={(e, index) => this.handleSelect(e, index)}
        />
      )(props.selectable);
    };

    const attr = {
      ...props,
      ...uikit.events(props),
      'data-kitid': props.kitid,
      className   :cssClassNames,
      onClick: (e, index) => this.handleClick(e, index)
    };


    const link = <li
      {...attr}
      className={cssClassNames}>

      <a style={{display: 'block'}}
        href={props.href}
        className={props.active ? 'uk-active' : null}
      >
        {selectable()} {props.body} {badge}
      </a>

    </li>;


    const text = <li
      {...attr}

    >
     {props.selectable} {props.body} {props.children}
   </li>;


    // Return Component
    const component = ufunc.either(link, text);
    return component(props.href);
  }
};


ListItem.propTypes = {
  active      : React.PropTypes.bool,
  badge       : React.PropTypes.object,
  body        : React.PropTypes.string,
  children    : React.PropTypes.any,
  className   : React.PropTypes.string,
  classes     : React.PropTypes.array,
  description : React.PropTypes.string,
  href        : React.PropTypes.string,
  kitid       : React.PropTypes.string,
  onClick     : React.PropTypes.func,
  onSelect    : React.PropTypes.func,
  selectable  : React.PropTypes.bool
};


export default uikit.base(ListItem);
