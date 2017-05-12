'use strict';

import React from 'react';
import {
  either,
  pipe
} from 'ufunc';
import posOffset from './posOffset';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import Trigger from 'react-uikit-trigger';
import Dropbody from './dropbody';
import Button from 'react-uikit-button';


class Dropdown extends React.Component {
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
    return (element) => {
      const animateIn = () => {
        trigger.animate.in(element, state);
      };

      const animateOut = () => {
        trigger.animate.out(element, state);
      };

      either(animateIn, animateOut)(state);
    };
  }


  getDropbody (dataId) {
    return this.getElement(`dropbody-${dataId}`);
  }


  getElement (dataId) {
    return helpers.getElement(dataId);
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

        if (this.props.opened) {
          this.animate(false, this.props.trigger)(dropbody);
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

        this.animate(!this.props.opened, this.props.trigger)(dropbody);
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

    pipe(toHidden, justify, getPosition, this.animate(!this.props.opened, props.trigger))(dropbody);

  }


  render () {
    const props = this.props;
    const kitid = either(props.kitid, props.kitid)(props.kitid);


    // CSS classes
    const type = {
      button        : 'uk-button-dropdown',
      'button-group': 'uk-button-group',
      dropdown      : null,
      navbar        : 'uk-parent'
    };


    const cssClassNames = helpers.cleanClasses([
      type[props.type] || type['dropdown'],
      props.classes,
      props.className
    ]);


    const cssDropClassNames = helpers.cleanClasses([
      !props.blank ? 'uk-dropdown' : 'uk-dropdown-blank',
      props.grid ? `uk-dropdown-width-${props.grid}` : null,
      props.scrollable ? 'uk-dropdown-scrollable' : null,
      props.small ? 'uk-dropdown-small' : null,
      props.type === 'navbar' ? 'uk-dropdown-navbar' : null
    ]);


    // Remove non valid html attributes
    const ignoreProps = [
      'blank',
      'boundary',
      'dropbody',
      'children',
      'className',
      'classes',
      'grid',
      'hover',
      'items',
      'justify',
      'kitid',
      'navbar',
      'noflip',
      'opened',
      'parent',
      'pos',
      'scrollable',
      'small',
      'standard',
      'trigger',
      'type'
    ];

    const cleanProps = helpers.cleanProps(ignoreProps)(props);

    const attr = {
      'aria-haspopup': 'true',
      'aria-expanded': this.props.opened ? 'true' : 'false',
      'data-kitid': `dropContainer-${kitid}`,
      className: cssClassNames,
      ...cleanProps,
      ...events(props)
    };

    const dropbodyProps = Object.assign(
      {
        style: props.justify ? {width: posOffset.dim(this)} : null,
        'data-kitid': `dropbody-${kitid}`,
        ...events(props),
        className: cssDropClassNames
      },
      props.dropbody ? props.dropbody : {}
    );

    const grid = <div className='uk-grid uk-dropdown-grid'>{props.children}</div>;

    const dropbody = <Dropbody {...dropbodyProps}>
      {
        either(
        () => grid,
        () => props.children
        )(props.grid)
      }
    </Dropbody>;


    const trigger = (mode) => <Trigger
      {...props.trigger}
      icon={props.icon || 'caret-down'}
      kitid={`dropTrigger-${kitid}`}
      onClick={(e) => this.handleTriggerClick(e)}
      onMouseEnter={(e) => this.handleTriggerHover(e)}
      onMouseLeave={(e) => this.handleTriggerHover(e)}
    />;


    const component = {
      dropdown: <div
        {...attr}
      >
        {trigger()}
        {dropbody}
      </div>,

      'button-group': <div
        {...attr}
      >
        <Button {...props.standard}>{props.children}</Button>
        <div>
          {trigger('link')}
          {dropbody}
        </div>
      </div>,

      navbar: <li
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
  opened     : React.PropTypes.bool,
  parent     : React.PropTypes.bool,
  pos        : React.PropTypes.string,
  scrollable : React.PropTypes.bool,
  small      : React.PropTypes.bool,
  standard   : React.PropTypes.object,
  trigger    : React.PropTypes.object,
  type       : React.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'navbar'])
};

export default base(Dropdown);
