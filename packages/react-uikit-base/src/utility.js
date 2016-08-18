'use strict';


export const utilityKeys = (attr) => {
  let obj = utilityCss[attr];

  return Object.keys(obj).map(key => {
    return key;
  });
};


export const utilityCss = {
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
    large    : 'uk-hidden-large',
    small    : 'uk-hidden-small',
    medium   : 'uk-hidden-medium',
    touch    : 'uk-hidden-touch',
    notouch  : 'uk-hidden-notouch'
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

  order: {
    first      : 'uk-flex-order-first',
    firstSmall : 'uk-flex-order-first-small',
    firstMedium: 'uk-flex-order-first-medium',
    firstLarge : 'uk-flex-order-first-large',
    firstXlarge: 'uk-flex-order-first-xlarge',
    last       : 'uk-flex-order-last',
    lastSmall  : 'uk-flex-order-last-small',
    lastMedium : 'uk-flex-order-last-medium',
    lastLarge  : 'uk-flex-order-last-large',
    lastXlarge : 'uk-flex-order-last-xlarge'
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
    auto   : 'uk-overflow-container',
    box    : 'uk-scrollable-box',
    hidden : 'uk-nbfc',
    text   : 'uk-scrollable-text'
  },


  tall: 'uk-height-1-1',


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


  textVertical: {
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
    medium     : 'uk-visible-medium',
    small      : 'uk-visible-small',
    touch      : 'uk-visible-touch'
  },

  wide: 'uk-width-1-1'
};

export default {
  utilityKeys,
  utilityCss
};
