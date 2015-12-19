'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Img from '../../react-uikit-img/lib/img';


class Thumbnail extends React.Component {
  static propTypes = {
    imgid    : React.PropTypes.string,
    imgProps : React.PropTypes.object,
    size     : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini', 'expand']),
    type     : React.PropTypes.oneOf(['block', 'figure', 'link'])
  }

  render () {
    const $props = this.props;


    // CSS classes
    const size = {
      large : 'uk-thumbnail-large',
      medium: 'uk-thumbnail-medium',
      small : 'uk-thumbnail-small',
      mini  : 'uk-thumbnail-mini',
      expand: 'uk-thumbnail-expand'
    };


    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-thumbnail',
      $props.classes,
      $props.className,
      size[$props.size] || null
    ]);


    // Elements
    const img = <Img
      {...$props.imgProps}
      kitid={$props.imgid}
      src={$props.src}
      width={$props.width}
      heigh={$props.heigh}
      small={$props.small}
      medium={$props.medium}
      large={$props.large}
      xlarge ={$props.xlarge}
    />;


    const figcaption = <figcaption
      className='uk-thumbnail-caption'
    >
      {$props.children}
    </figcaption>;

    const caption = <div className='uk-thumbnail-caption'>
      {$props.children}
    </div>;


    const children = ufunc.maybeIf(
      ufunc.either(
        figcaption,
        caption
      )($props.type === 'figure')
    )($props.children);

    const ignoreProps = ['height', 'src', 'width'];

    const type = {
      block: <div {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        data-kitid={$props.kitid}
       >
        {img}
        {children}
      </div>,

      figure: <figure {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        data-kitid={$props.kitid}
       >
        {img}
        {children}

      </figure>,

      link: <a {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        href={$props.href}
        data-kitid={$props.kitid}
       >
        {img}
        {children}
      </a>
    };

    // Return Component
    return type[$props.type] || type['block'];

  }
}


export default uikit.base(Thumbnail);
