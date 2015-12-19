'use strict';

import React from 'react';
import cuid from 'cuid';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';

class Img extends React.Component {
  static propTypes = {
    alt    : React.PropTypes.string,
    cover  : React.PropTypes.bool,
    height : React.PropTypes.string,
    kitid  : React.PropTypes.string,
    large  : React.PropTypes.object,
    src    : React.PropTypes.string,
    width  : React.PropTypes.string,
    xlarge : React.PropTypes.object
  };

  constructor (props) {
    super(props);
    this.updateImg = this.updateImg.bind(this);
    this.element = null;
    this.dataId = props.kitid || cuid();
  }


  componentDidMount () {
    this.element = uikit.helpers.queryData(this.dataId);
    this.updateImg(this.element);
    window.addEventListener('resize', this.updateImg);
  }


  componentWillUnmount () {
    window.removeEventListener('resize', this.updateImg);
  }


  updateImg () {
    const $props = this.props;
    const $element = this.element;

    let screen = uikit.helpers.breakpoints().screen;
    let locked = false;

    if (!locked) {
      const updateElement = (media) => {
        if ($props.cover) {
          $element.style.backgroundImage = $props[media].src ? `url(${$props[media].src})` : `url(${$props.src})`;
        } else {
          $element.src = $props[media].src || $props.src;
          $element.alt = $props[media].alt || $props.alt;
        }

        $element.style.width = $props[media].width || $props.width;
        $element.style.height = $props[media].height || $props.height;
      };


      if ($props.small || $props.medium || $props.large || $props.xlarge) {
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
    const $props = this.props;

    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      $props.cover ? 'uk-cover-background' : null,
      $props.classes,
      $props.className
    ]);


    // Elements
    const ignoreProps = ['src'];


    const img = <img
      {...$props}
      data-kitid={$props.kitid ? $props.kitid : this.dataId}
      className={cssClassNames}
    />;


    const cover = <div
      {...uikit.helpers.cleanProps(ignoreProps)}
      data-kitid={$props.kitid ? $props.kitid : this.dataId}
      className={cssClassNames}
    >
        {$props.children}
    </div>;


    // Return Component
    const component = ufunc.either(cover, img);
    return component($props.cover);

  }
}


export default uikit.base(Img);
