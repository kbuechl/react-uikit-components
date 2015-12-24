'use strict';

import React from 'react';
import ufunc from 'ufunc';
import uikit from 'react-uikit-base';
import cuid from 'cuid';
import Button from 'react-uikit-button';


const Trigger = (props) => {

  const type = {
    button: <Button
      body={props.body}
      data-kitid={props.kitid}
      onClick={(e) => props.onclick(e)}
    >
      {props.children}
    </Button>,

    link: <a
      data-kitid={props.kitid}
      href ='#'
      onClick={(e) => props.onclick(e)}
    >
      {props.body}
      {props.children}
    </a>,

    span : <span
      data-kitid={props.kitid}
      onClick={(e) => props.onclick(e)}
    >
      {props.body}
      {props.children}
    </span>,

    div: <div
      data-kitid={props.kitid}
      onClick={(e) => props.onclick(e)}
    >
      {props.body}
      {props.children}
    </div>
  };


  return ufunc.either(type[props.type], type['button'])(props.type);
};


Trigger.propTypes = {
  body      : React.PropTypes.any,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  type      : React.PropTypes.oneOf(['bar', 'dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])
};


class Dropdown extends React.Component {
  constructor (props) {
    super(props);

    this.dataId = cuid();
  }


  static propTypes = {
    children  : React.PropTypes.any,
    className : React.PropTypes.string,
    classes   : React.PropTypes.array,
    click     : React.PropTypes.bool,
    context   : React.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub']),
    items     : React.PropTypes.array,
    kitid     : React.PropTypes.string,
    parent    : React.PropTypes.bool,
    type      : React.PropTypes.oneOf(['bar', 'dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])
  }


  handleTriggerClick (e) {
    const props = this.props;

    e.preventDefault();
    const dropbody = uikit.helpers.queryData(`dropbody-${this.dataId}`);

    if (props.opened) {
      props.trigger.animate.in(dropbody);
    } else {
      props.trigger.animate.out(dropbody);
    }
  }


  render () {
    const props = this.props;

    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      props.classes,
      props.className
    ]);


    // Elements

    // Return Component
    return <div
      data-uk-dropdown={props.click ? '{mode:"click"}' : true}
      className={cssClassNames}
      data-kitid={props.kitid ? props.kitid : `dropdown-${this.dataId}`}
    >
      <Trigger
        {...props.trigger} onClick={(e) => this.handleTriggerClick(e)}
        data-kitid={props.kitid ? props.kitid : 'this.dataId'}
      />

        <div
          data-kitid={props.kitid ? props.kitid : `dropbody-${this.dataId}`}
          className='uk-dropdown'
        >
          {props.children}
        </div>

      </div>;
  }
};


export default uikit.base(Dropdown);
