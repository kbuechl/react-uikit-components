'use strict';

import React from 'react';
import ufunc from 'ufunc';
import helpers from './helpers';
import util from './utility';
import cuid from 'cuid';


const base = (Cmpt) => {
  class UIKitBase extends React.Component {
    render () {
      const props = this.props;
      const classes = [
        props.align ? helpers.getClass(props.align, util.utilityCss.align) : null,
        props.borderRadius ? helpers.getClass(props.borderRadius, util.utilityCss.borderRadius) : null,
        props.clear ? helpers.getClass(props.clear, util.utilityCss.clear) : null,
        props.contrast ? 'uk-contrast' : null,
        props.col ? 'uk-width-1-1' : null,
        props.colSmall ? 'uk-width-1-1' : null,
        props.colMedium ? 'uk-width-1-1' : null,
        props.colLarge ? 'uk-width-1-1' : null,
        props.display ? helpers.getClass(props.display, util.utilityCss.display) : null,
        props.float ? helpers.getClass(props.float, util.utilityCss.float) : null,
        props.hidden ? helpers.getClasses(props.hidden, util.utilityCss.hidden) : null,
        props.margin ? helpers.getClasses(props.margin, util.utilityCss.margin) : null,
        props.order ? helpers.getClass(props.order, util.utilityCss.order) : null,
        props.padding ? helpers.getClasses(props.padding, util.utilityCss.padding) : null,
        props.position ? helpers.getClasses(props.position, util.utilityCss.position) : null,
        props.responsive ? helpers.getClasses(props.responsive, util.utilityCss.responsive) : null,
        props.scroll ? helpers.getClass(props.scroll, util.utilityCss.scroll) : null,
        props.tall ? props.tall !== 'parent' ? util.utilityCss.tall : null : null,
        props.textAlign ? helpers.getClasses(props.textAlign, util.utilityCss.textAlign) : null,
        props.textVertical ? helpers.getClasses(props.textVertical, util.utilityCss.textVertical) : null,
        props.textWrap ? helpers.getClasses(props.textWrap, util.utilityCss.textWrap) : null,
        props.vertical ? helpers.getClass(props.vertical, util.utilityCss.vertical) : null,
        props.viewport ? 'uk-height-viewport' : null,
        props.visible ? helpers.getClasses(props.visible, util.utilityCss.visible) : null,
        props.wide ? props.wide !== 'parent' ? util.utilityCss.tall : null : null
      ];

      const containerClasses = helpers.cleanClasses([
        props.center ? 'uk-container-center' : null,
        props.col ? `uk-width-${props.col}` : null,
        props.colSmall ? `uk-width-small-${props.colSmall}` : null,
        props.colMedium ? `uk-width-medium-${props.colMedium}` : null,
        props.colLarge ? `uk-width-large-${props.colLarge}` : null,
        props.vertical ? 'uk-vertical-align' : null,
        props.tall ? props.tall === 'parent' ? util.utilityCss.tall : null : null,
        props.wide ? props.wide === 'parent' ? util.utilityCss.tall : null : null
      ]);

      const kitid = props.kitid || cuid();

      // Elementd
      const component = <Cmpt {...this.props} kitid={kitid} classes={ufunc.cleanAll(classes)}/>;


      const list = ufunc.maybeIf(<li className={containerClasses}>{component}</li>)(props.list);


      // remove and use unfunc version
      function someTrue () {
        return [...arguments].some(e => Boolean(e));
      }

      const container = ufunc.maybeIf(<div className={containerClasses}>
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
    align       : React.PropTypes.oneOf(util.utilityKeys('align')),
    children    : React.PropTypes.any,
    className   : React.PropTypes.string,
    borderRadius: React.PropTypes.oneOf(util.utilityKeys('borderRadius')),
    clear       : React.PropTypes.oneOf(util.utilityKeys('clear')),
    center      : React.PropTypes.bool,
    col         : React.PropTypes.oneOf(helpers.colSpan),
    colSmall    : React.PropTypes.oneOf(helpers.colSpan),
    colMedium   : React.PropTypes.oneOf(helpers.colSpan),
    colLarge    : React.PropTypes.oneOf(helpers.colSpan),
    contrast    : React.PropTypes.bool,
    display     : React.PropTypes.oneOf(util.utilityKeys('display')),
    float       : React.PropTypes.oneOf(util.utilityKeys('float')),
    hidden      : React.PropTypes.string,
    kitid       : React.PropTypes.string,
    margin      : React.PropTypes.string,
    order       : React.PropTypes.oneOf(util.utilityKeys('order')),
    padding     : React.PropTypes.string,
    position    : React.PropTypes.oneOf(util.utilityKeys('position')),
    responsive  : React.PropTypes.string,
    scroll      : React.PropTypes.oneOf(util.utilityKeys('scroll')),
    textAlign   : React.PropTypes.oneOf(util.utilityKeys('textAlign')),
    textVertical: React.PropTypes.oneOf(util.utilityKeys('textVertical')),
    textWrap    : React.PropTypes.oneOf(util.utilityKeys('textWrap')),
    vertical    : React.PropTypes.oneOf(util.utilityKeys('vertical')),
    viewport    : React.PropTypes.bool,
    visible     : React.PropTypes.string
  };

  return UIKitBase;
};

export default base;
