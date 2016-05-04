'use strict';

import React from 'react';
import ufunc from 'ufunc';
import posOffset from './posOffset';
import R from 'ramda';
import uikit from 'react-uikit-base';
import Trigger from '../../react-uikit-trigger';
import Dropbody from './dropbody';
import Button from 'react-uikit-button';


class Dropdown extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      opened : false,
      hovered: false
    };
  }


  componentDidMount () {
    if (!this.props.hover) {
      window.addEventListener('click', (e) => this.handleClickListener(e), false);
    }
  }


  componentWillUnmount () {
    if (!this.props.hover) {
      window.removeEventListener('click', (e) => this.handleClickListener(e), false);
    }
  }


  animate (state, trigger) {
    const obj = {};
    const key = Object.keys(state)[0];

    return (element) => {
      obj[key] = true;
      const animateIn = () => {
        this.setState(obj);
        trigger.animate.in(element);
      };


      const animateOut = () => {
        obj[key] = false;
        this.setState(obj);
        trigger.animate.out(element);
      };


      ufunc.either(animateIn, animateOut)(state[key]);
    };
  }


  getDropbody (dataId) {
    return this.getElement(`dropbody-${dataId}`);
  }

  getElement (dataId) {
    return uikit.helpers.getElement(dataId);
  }


  listener (target, dataId) {
    const parent = target.parentNode;
    const kitid = `dropTrigger-${dataId}`;
    const targetId = target.getAttribute('data-kitid');
    const parentId = parent.getAttribute('data-kitid');
    const dropbody = this.getDropbody(dataId);

    return (callback) => {
      callback(targetId, parentId, kitid, dropbody);
    };
  }


  handleClickListener (e) {
    const target = e.target;


    const callback = (targetId, parentId, kitid, dropbody) => {
      if ((targetId !== kitid) && (parentId !== kitid)) {

        if (this.state.opened) {
          this.animate({opened: false}, this.props.trigger)(dropbody);
        }
      }
    };


    this.listener(target, this.props.kitid)(callback);
  }


  handleTriggerHover (e) {
    const target = e.target;

    if (this.props.hover) {
      const callback = (targetId, parentId, kitid, dropbody) => {
        dropbody.style.display = 'block';
        dropbody.style.visibility = 'hidden';

        this.animate({hovered: !this.state.hovered}, this.props.trigger)(dropbody);
      };

      this.listener(target, this.props.kitid)(callback);
    }
  }


  handleTriggerClick (e) {
    e.preventDefault();
    const props = this.props;
    const dropbody = this.getDropbody(props.kitid);
    const trigger = e.currentTarget;


    const toHidden = (element) => {
      element.style.display = 'block';
      element.style.visibility = 'hidden';

      return element;
    };


    const justify = (element) => {
      if (props.justify) {
        const justify = this.getElement(props.justify);
        element.style.width = `${posOffset.dim(justify).width}px`;
      }

      return element;
    };


    const getPosition = (element) => {
      const elementOffset = posOffset.offset({
        target : trigger,
        element: element,
        flip   : !props.noflip,
        boundary: props.boundary
      })(props.pos);

      element.style.top = `${elementOffset.top}px`;

      if (props.type === 'button-group') {
        const buttonGroup = document.querySelector('.uk-button-group');
        const paddingLeft = window.getComputedStyle(buttonGroup, null).getPropertyValue('padding-left');

        element.style.left = paddingLeft;
      } else {
        element.style.left = `${elementOffset.left}px`;
      }

      return element;
    };


    R.pipe(toHidden, justify, getPosition, this.animate({opened: !this.state.opened}, props.trigger))(dropbody);

  }


  render () {
    const props = this.props;
    const kitid = ufunc.either(props.kitid, props.kitid)(props.kitid);


    // CSS classes
    const type = {
      button        : 'uk-button-dropdown',
      'button-group': 'uk-button-group',
      dropdown      : null,
      navbar        : 'uk-parent'
    };


    const cssClassNames = uikit.helpers.cleanClasses([
      type[props.type] || type['dropdown'],
      props.classes,
      props.className
    ]);


    const cssDropClassNames = uikit.helpers.cleanClasses([
      !props.blank ? 'uk-dropdown' : 'uk-dropdown-blank',
      props.grid ? `uk-dropdown-width-${props.grid}` : null,
      props.scrollable ? 'uk-dropdown-scrollable' : null,
      props.small ? 'uk-dropdown-small' : null,
      props.type === 'navbar' ? 'uk-dropdown-navbar' : null
    ]);


    // Elements
    const cleanProps = uikit.helpers.cleanProps(['type'])(props);
    const cleanTriggerProps = ufunc.either(
      uikit.helpers.cleanProps(props.trigger, ['body', 'icon']),
      props.trigger
    )(props.type === 'button-group');


    const attr = {
      'aria-haspopup': 'true',
      'aria-expanded': this.state.opened || this.state.hovered ? 'true' : 'false',
      'data-kitid': `dropContainer-${kitid}`,
      className: cssClassNames,
      kitid: props.kitid,
      ...uikit.events(props)
    };

    const dropbodyProps = Object.assign(
      {
        style: props.justify ? {width: posOffset.dim(this)} : null,
        'data-kitid': `dropbody-${kitid}`,
        ...uikit.events(props),
        className: cssDropClassNames
      },
      props.dropbody ? props.dropbody : {}
    );

    const grid = <div className='uk-grid uk-dropdown-grid'>{props.children}</div>;

    const dropbody = <Dropbody {...dropbodyProps}>
      {
        ufunc.either(
        () => grid,
        () => props.children
        )(props.grid)
      }
    </Dropbody>;


    const trigger = (mode) => <Trigger
      {...cleanTriggerProps}
      icon={props.icon || 'caret-down'}
      kitid={`dropTrigger-${kitid}`}
      onClick={(e) => this.handleTriggerClick(e)}
      onMouseEnter={(e) => this.handleTriggerHover(e)}
      onMouseLeave={(e) => this.handleTriggerHover(e)}
    />;


    const component = {
      dropdown: <div
        {...cleanProps}
        {...attr}
      >
        {trigger()}
        {dropbody}
      </div>,

      'button-group': <div
        {...cleanProps}
        {...attr}
      >
        <Button {...props.standard}>{props.children}</Button>
        <div>
          {trigger('link')}
          {dropbody}
        </div>
      </div>,

      navbar: <li
        {...cleanProps}
        {...attr}
      >
        <Button>{props.children}</Button>
        <div>
          {trigger('link')}
          {dropbody}
        </div>
      </li>
    };


    // Return Component
    return component[props.type] || component['dropdown'];
  }
}


Dropdown.propTypes = {
  blank      : React.PropTypes.bool,
  boundary   : React.PropTypes.string,
  dropbody   : React.PropTypes.object,
  children   : React.PropTypes.any,
  className  : React.PropTypes.string,
  classes    : React.PropTypes.array,
  grid       : React.PropTypes.string,
  hover      : React.PropTypes.bool,
  items      : React.PropTypes.array,
  justify    : React.PropTypes.string,
  kitid      : React.PropTypes.string,
  navbar     : React.PropTypes.bool,
  noflip     : React.PropTypes.bool,
  parent     : React.PropTypes.bool,
  pos        : React.PropTypes.string,
  scrollable : React.PropTypes.bool,
  small      : React.PropTypes.bool,
  standard   : React.PropTypes.object,
  trigger    : React.PropTypes.object,
  type       : React.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'navbar'])
};

export default uikit.base(Dropdown);
