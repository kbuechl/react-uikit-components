'use strict';

import React from 'react';
import {
  cleanAll,
  maybeIf,
  someTrue
} from 'ufunc';
import {
  cleanClasses,
  colSpan,
  getClass,
  getClasses
} from './helpers';
import {
  utilityCss,
  utilityKeys
} from './utility';
import cuid from 'cuid';


const base = (Cmpt) => {
  class UIKitBase extends React.Component {
    render () {
      const props = this.props;
      const classes = [
        props.align ? getClass(props.align, utilityCss.align) : null,
        props.borderRadius ? getClass(props.borderRadius, utilityCss.borderRadius) : null,
        props.clear ? getClass(props.clear, utilityCss.clear) : null,
        props.contrast ? 'uk-contrast' : null,
        props.col ? 'uk-width-1-1' : null,
        props.colSmall ? 'uk-width-1-1' : null,
        props.colMedium ? 'uk-width-1-1' : null,
        props.colLarge ? 'uk-width-1-1' : null,
        props.display ? getClass(props.display, utilityCss.display) : null,
        props.float ? getClass(props.float, utilityCss.float) : null,
        props.hidden ? getClasses(props.hidden, utilityCss.hidden) : null,
        props.margin ? getClasses(props.margin, utilityCss.margin) : null,
        props.order ? getClass(props.order, utilityCss.order) : null,
        props.padding ? getClasses(props.padding, utilityCss.padding) : null,
        props.position ? getClasses(props.position, utilityCss.position) : null,
        props.responsive ? getClasses(props.responsive, utilityCss.responsive) : null,
        props.scroll ? getClass(props.scroll, utilityCss.scroll) : null,
        props.tall ? props.tall !== 'parent' ? utilityCss.tall : null : null,
        props.textAlign ? getClasses(props.textAlign, utilityCss.textAlign) : null,
        props.textVertical ? getClasses(props.textVertical, utilityCss.textVertical) : null,
        props.textWrap ? getClasses(props.textWrap, utilityCss.textWrap) : null,
        props.vertical ? getClass(props.vertical, utilityCss.vertical) : null,
        props.viewport ? 'uk-height-viewport' : null,
        props.visible ? getClasses(props.visible, utilityCss.visible) : null,
        props.wide ? props.wide !== 'parent' ? utilityCss.tall : null : null
      ];

      const containerClasses = cleanClasses([
        props.center ? 'uk-container-center' : null,
        props.col ? `uk-width-${props.col}` : null,
        props.colSmall ? `uk-width-small-${props.colSmall}` : null,
        props.colMedium ? `uk-width-medium-${props.colMedium}` : null,
        props.colLarge ? `uk-width-large-${props.colLarge}` : null,
        props.vertical ? 'uk-vertical-align' : null,
        props.tall ? props.tall === 'parent' ? utilityCss.tall : null : null,
        props.wide ? props.wide === 'parent' ? utilityCss.tall : null : null
      ]);

      const kitid = props.kitid || cuid();

      // Elementd
      const component = <Cmpt {...this.props} kitid={kitid} classes={cleanAll(classes)}/>;


      const list = maybeIf(<li className={containerClasses}>{component}</li>)(props.list);


      const container = maybeIf(<div className={containerClasses}>
        {component}
      </div>)(someTrue(
        props.center,
        props.col,
        props.colSmall,
        props.colMedium,
        props.colLarge,
        props.vertical
      ));


      // return component
      return list || container || component;
    }
  }

  UIKitBase.propTypes = {
    align       : React.PropTypes.oneOf(utilityKeys('align')),
    children    : React.PropTypes.any,
    className   : React.PropTypes.string,
    borderRadius: React.PropTypes.oneOf(utilityKeys('borderRadius')),
    clear       : React.PropTypes.oneOf(utilityKeys('clear')),
    center      : React.PropTypes.bool,
    col         : React.PropTypes.oneOf(colSpan),
    colSmall    : React.PropTypes.oneOf(colSpan),
    colMedium   : React.PropTypes.oneOf(colSpan),
    colLarge    : React.PropTypes.oneOf(colSpan),
    contrast    : React.PropTypes.bool,
    display     : React.PropTypes.oneOf(utilityKeys('display')),
    float       : React.PropTypes.oneOf(utilityKeys('float')),
    hidden      : React.PropTypes.string,
    kitid       : React.PropTypes.string,
    margin      : React.PropTypes.string,
    order       : React.PropTypes.oneOf(utilityKeys('order')),
    padding     : React.PropTypes.string,
    position    : React.PropTypes.oneOf(utilityKeys('position')),
    responsive  : React.PropTypes.string,
    scroll      : React.PropTypes.oneOf(utilityKeys('scroll')),
    tall        : React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    textAlign   : React.PropTypes.oneOf(utilityKeys('textAlign')),
    textVertical: React.PropTypes.oneOf(utilityKeys('textVertical')),
    textWrap    : React.PropTypes.oneOf(utilityKeys('textWrap')),
    vertical    : React.PropTypes.oneOf(utilityKeys('vertical')),
    viewport    : React.PropTypes.bool,
    visible     : React.PropTypes.string,
    wide        : React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ])
  };

  return UIKitBase;
};

export default base;
