'use strict';

import React from 'react';
import ufunc from 'ufunc';


const breakpoints = () => {
  const media = {
    small : 767,
    medium: 768,
    large : 960,
    xlarge: 1200
  };

  const screen = {
    small : (window.innerWidth <= media.small),
    medium: (window.innerWidth >= media.medium && window.innerWidth < media.large),
    large : (window.innerWidth >= media.large && window.innerWidth < media.xlarge),
    xlarge: (window.innerWidth >= media.xlarge)
  };

  return {
    media,
    screen
  };

};


const stringToClasses = (str, cssClasses) => {
  let classes = str.split(' ').map(item => {
    return cssClasses[item];
  });

  return classes.join('');
};


const getClasses = (str, cssClasses) => {
  return typeof str === 'string' ? stringToClasses(str, cssClasses) : '';
};


const getClass = (str, cssClasses) => {
  return cssClasses[str] ? cssClasses[str] : '';
};


const closeClass = (alt) => {
  return alt ? 'uk-close-alt' : ' uk-close';
};


const colSpan = [
  '1-1',
  '1-2',
  '1-3', '2-3',
  '1-4', '2-4', '3-4',
  '1-5', '2-5', ' 3-5', '4-5',
  '1-6', '2-6', ' 3-6', '4-6', '5-6',
  '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
];


const helpers = {
  breakpoints,
  getClasses,
  getClass,
  closeClass,
  colSpan
};


const utilityKeys = (attr) => {
  let obj = utilityCss[attr];

  return Object.keys(obj).map(key => {
    return key;
  });
};


const utilityCss = {
  align: {
    left       : 'uk-align-left',
    right      : 'uk-align-right',
    middleLeft : 'uk-align-medium-left',
    middleRight: 'uk-align-medium-right',
    center     : 'uk-align-center'
  },


  borderRadius: {
    rounded: 'uk-border-rounded',
    circle : 'uk-border-circle'
  },


  clear:  {
    fix: 'uk-clearfix',
    nbfc: 'uk-nbfc',
    alt: 'uk-nbfc-alt'
  },


  display: {
    block      : 'uk-display-block',
    inline     : 'uk-display-inline',
    inlineBlock: 'uk-display-inline-block'
  },


  'float': {
    left : 'uk-float-left',
    right: 'uk-float-right',
    clear: 'uk-clearfix'
  },


  hidden: {
    all      : 'uk-hidden',
    invisible: 'uk-invisible',
    large  : 'uk-hidden-large',
    small  : 'uk-hidden-small',
    medium : 'uk-hidden-medium',
    touch  : 'uk-hidden-touch'
  },


  margin: {
    top          : 'uk-margin-top',
    left         : 'uk-margin-left',
    bottom       : 'uk-margin-bottom',
    right        : 'uk-margin-right',
    smallTop     : 'uk-margin-small-top',
    smallLeft    : 'uk-margin-small-left',
    smallBottom  : 'uk-margin-small-bottom',
    smallRight   : 'uk-margin-small-right',
    largeTop     : 'uk-margin-large-top',
    largeLeft    : 'uk-margin-large-left',
    largeBottom  : 'uk-margin-large-bottom',
    largeRight   : 'uk-margin-large-right',
    remove       : 'uk-margin-remove',
    removeTop    : 'uk-margin-top-remove',
    removeBottom : 'uk-margin-bottom-remove'
  },


  padding: {
    top           : 'uk-padding-top',
    left          : 'uk-padding-left',
    bottom        : 'uk-padding-bottom',
    right         : 'uk-padding-right',
    smallTop      : 'uk-padding-small-top',
    smallLeft     : 'uk-padding-small-left',
    smallBottom   : 'uk-padding-small-bottom',
    smallRight    : 'uk-padding-small-right',
    largeTop      : 'uk-padding-large-top',
    largeLeft     : 'uk-padding-large-left',
    largeBottom   : 'uk-padding-large-bottom',
    largeRight    : 'uk-padding-large-right',
    remove        : 'uk-padding-remove',
    removeTop     : 'uk-padding-top-remove',
    removeBottom  : 'uk-padding-bottom-remove',
    removeVertical: 'uk-padding-vertical-remove'
  },


  position: {
    top        : 'uk-position-top',
    topLeft    : 'uk-position-top-left',
    topRight   : 'uk-position-top-right',
    bottom     : 'uk-position-bottom',
    bottomLeft : 'uk-position-bottom-left',
    bottomRight: 'uk-position-bottom-right',
    cover      : 'uk-position-cover',
    relative   : 'uk-position-relative',
    zIndex     : 'uk-position-z-index'
  },


  responsive: {
    width : 'uk-responsive-width',
    height: 'uk-responsive-height'
  },


  scroll: {
    auto: 'uk-overflow-container',
    box : 'uk-scrollable-box',
    text: 'uk-scrollable-text'
  },


  textAlign: {
    center      : 'uk-text-center',
    centerSmall : 'uk-text-center-small',
    centerMedium: 'uk-text-center-medium',
    left        : 'uk-text-left',
    leftSmall   : 'uk-text-left-small',
    leftMedium  : 'uk-text-left-medium',
    justify     : 'uk-text-justify',
    right       : 'uk-text-right'
  },


  textVerticle: {
    top   : 'uk-text-top',
    middle: 'uk-text-middle',
    bottom: 'uk-text-bottom'
  },


  textWrap: {
    truncate : 'uk-text-truncate',
    'break'  : 'uk-text-break',
    nowrap   : 'uk-text-nowrap'
  },


  vertical: {
    parent: 'uk-vertical-align',
    middle: 'uk-vertical-align-middle',
    bottom: 'uk-vertical-align-bottom'
  },


  visible: {
    hover      : 'uk-visible-hover',
    hoverInline: 'uk-visible-hover-inline',
    large      : 'uk-visible-large',
    small      : 'uk-visible-small',
    touch      : 'uk-visible-touch'
  }
};


const base = (Cmpt) => {
  class UIKitBase extends React.Component {
    static propTypes = {
      align       : React.PropTypes.oneOf(utilityKeys('align')),
      children    : React.PropTypes.any,
      className   : React.PropTypes.string,
      borderRadius: React.PropTypes.oneOf(utilityKeys('borderRadius')),
      clear       : React.PropTypes.oneOf(utilityKeys('clear')),
      center      : React.PropTypes.bool,
      close       : React.PropTypes.bool,
      col         : React.PropTypes.oneOf(helpers.colSpan),
      colsSmall   : React.PropTypes.oneOf(helpers.colSpan),
      colsMedium  : React.PropTypes.oneOf(helpers.colSpan),
      colsLarge   : React.PropTypes.oneOf(helpers.colSpan),
      contrast    : React.PropTypes.bool,
      display     : React.PropTypes.oneOf(utilityKeys('display')),
      float       : React.PropTypes.oneOf(utilityKeys('float')),
      hidden      : React.PropTypes.string,
      itemtype    : React.PropTypes.string,
      itemprop    : React.PropTypes.string,
      kitid       : React.PropTypes.string,
      margin      : React.PropTypes.string,
      padding     : React.PropTypes.oneOf(utilityKeys('padding')),
      position    : React.PropTypes.oneOf(utilityKeys('position')),
      responsive  : React.PropTypes.oneOf(utilityKeys('responsive')),
      scroll      : React.PropTypes.oneOf(utilityKeys('scroll')),
      textAlign   : React.PropTypes.oneOf(utilityKeys('textAlign')),
      textVerticle: React.PropTypes.oneOf(utilityKeys('textVerticle')),
      textWrap    : React.PropTypes.oneOf(utilityKeys('textWrap')),
      vertical    : React.PropTypes.oneOf(utilityKeys('vertical')),
      viewport    : React.PropTypes.bool,
      visible     : React.PropTypes.string
    };position


    render () {
      const $props = this.props;
      const classes = [
        $props.align ? helpers.getClass($props.align, utilityCss.align) : null,
        $props.borderRadius ? helpers.getClass($props.borderRadius, utilityCss.borderRadius) : null,
        $props.center ? 'uk-container-center' : null,
        $props.clear ? helpers.getClass($props.clear, utilityCss.clear) : null,
        $props.close ? 'uk-close' : null,
        $props.col ? `uk-width-${$props.col}` : null,
        $props.colsSmall ? `uk-width-small-${$props.colsSmall}` : null,
        $props.colsMedium ? `uk-width-medium-${$props.colsMedium}` : null,
        $props.colsLarge ? `uk-width-large-${$props.colsLarge}` : null,
        $props.contrast ? 'uk-contrast' : null,
        $props.display ? helpers.getClass($props.display, utilityCss.display) : null,
        $props.float ? helpers.getClass($props.float, utilityCss.float) : null,
        $props.hidden ? helpers.getClasses($props.hidden, utilityCss.hidden) : null,
        $props.margin ? helpers.getClasses($props.margin, utilityCss.margin) : null,
        $props.padding ? helpers.getClasses($props.padding, utilityCss.padding) : null,
        $props.position ? helpers.getClasses($props.position, utilityCss.position) : null,
        $props.responsive ? helpers.getClasses($props.responsive, utilityCss.responsive) : null,
        $props.scroll ? helpers.getClass($props.scroll, utilityCss.scroll) : null,
        $props.textAlign ? helpers.getClasses($props.textAlign, utilityCss.textAlign) : null,
        $props.textVerticle ? helpers.getClasses($props.textVerticle, utilityCss.textVerticle) : null,
        $props.textWrap ? helpers.getClasses($props.textWrap, utilityCss.textWrap) : null,
        $props.vertical ? helpers.getClass($props.vertical, utilityCss.vertical) : null,
        $props.viewport ? ' uk-height-viewport' : null,
        $props.visible ? helpers.getClasses($props.visible, utilityCss.visible) : null
      ];

      return <Cmpt {...this.props} helpers={{...helpers}} classes={ufunc.cleanAll(classes)}/>;
    }
  }

  return UIKitBase;
};


export default {
  base,
  helpers
};
