'use strict';

import React from 'react';

import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import {
  either
} from 'ufunc';


class Img extends React.Component {
  constructor (props) {
    super(props);
    this.updateImg = this.updateImg.bind(this);
    this.element = null;
  }


  componentDidMount () {
    this.element = helpers.getElement(this.props.kitid);
    this.updateImg(this.element);
    window.addEventListener('resize', this.updateImg);
  }


  componentWillUnmount () {
    window.removeEventListener('resize', this.updateImg);
  }


  updateImg () {
    const props = this.props;
    const element = this.element;

    let screen = helpers.breakpoints().screen;
    let locked = false;

    if (!locked) {
      const updateElement = (media) => {
        if (props.cover) {
          element.style.backgroundImage = props[media].src ? `url(${props[media].src})` : `url(${props.src})`;
        } else {
          element.src = props[media].src || props.src;
          element.alt = props[media].alt || props.alt;
        }

        element.style.width = props[media].width || props.width;
        element.style.height = props[media].height || props.height;
      };


      if (props.small || props.medium || props.large || props.xlarge) {
        if (screen.small) {
          updateElement('small');

        } else if (screen.medium) {
          updateElement('medium');

        } else if (screen.large) {
          updateElement('large');

        } else if (screen.xlarge) {
          updateElement('xlarge');
        }
      }
    }
  }


  render () {
    const props = this.props;

    // CSS classes
    const cssClassNames = helpers.cleanClasses([
      props.cover ? 'uk-cover-background' : null,
      props.classes,
      props.className
    ]);


    // Remove non valid html attributes
    const ignoreProps = [
      'children',
      'className',
      'classes',
      'cover',
      'kitid',
      'large',
      'medium',
      'small',
      'xlarg'
    ];

    const ignoreImgProps = [
      ...ignoreProps,
      'alt',
      'height',
      'src',
      'width'
    ];

    // Elements
    const attr = {
      ...events(props),
      className   : cssClassNames,
      'data-kitid': props.kitid
    };

    const img = <img
      {...helpers.cleanProps(ignoreProps)(props)}
      {...attr}
    />;


    const cover = <div
      {...helpers.cleanProps(ignoreImgProps)(props)}
      {...attr}
    >
        {props.children}
    </div>;


    // Return Component
    const component = either(cover, img);
    return component(props.cover);

  }
}


Img.propTypes = {
  alt       : React.PropTypes.string,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  cover     : React.PropTypes.bool,
  height    : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  large     : React.PropTypes.object,
  medium    : React.PropTypes.object,
  small     : React.PropTypes.object,
  src       : React.PropTypes.string,
  width     : React.PropTypes.string,
  xlarge    : React.PropTypes.object
};

export default base(Img);
