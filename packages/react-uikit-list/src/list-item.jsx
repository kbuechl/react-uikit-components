'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Badge from 'react-uikit-badge';


class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  getItemDetails (element) {

    const kitid = element.dataset.kitid;
    const index = kitid.match(/-(.*?)-/)[1];

    return {
      component: this,
      index    : index,
      kitid    : this.props.kitid
    };
  }


  handleClick (e) {
    e.preventDefault();
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=true);

    const element = e.currentTarget;

    if (this.props.onClick) {
      this.props.onClick({
        event: e,
        item: this.getItemDetails(element)
      });
    }
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
      if (this.props.selectable && this.props.selectable.checked) {
        const { checked } = this.props.selectable;

        return ufunc.maybeIf(
          ufunc.either(
            () => checked.on,
            () => checked.off
          )(props.checked)
        )(props.selectable);
      }
    };


    const attr = {
      ...props,
      ...uikit.events(props),
      'data-kitid': props.kitid,
      className   : cssClassNames,
      onClick     : this.handleClick
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
}


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
  selectable  : React.PropTypes.oneOfType([
                  React.PropTypes.bool,
                  React.PropTypes.object
                ])
};


export default uikit.base(ListItem);
