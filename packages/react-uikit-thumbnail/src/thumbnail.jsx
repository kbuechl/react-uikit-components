'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Img from 'react-uikit-img';


const Thumbnail = (props) => {
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
    props.classes,
    props.className,
    size[props.size] || null
  ]);


  // Elements
  const img = <Img
    {...props.img}
    kitid={`thumbimg-${props.kitid}`}
    src={props.src}
    width={props.width}
    height={props.height}
    small={props.small}
    medium={props.medium}
    large={props.large}
    xlarge ={props.xlarge}
  />;


  const figcaption = <figcaption
    className='uk-thumbnail-caption'
  >
    {props.children}
  </figcaption>;

  const caption = <div className='uk-thumbnail-caption'>
    {props.children}
  </div>;


  const children = ufunc.maybeIf(
    ufunc.either(
      figcaption,
      caption
    )(props.type === 'figure')
  )(props.children);


  const ignoreProps = ['height', 'src', 'width', 'type'];
  const cleanProps = uikit.helpers.cleanProps(ignoreProps)(props);

  const attr = {
    ...cleanProps,
    ...uikit.events(props),
    className   : cssClassNames,
    'data-kitid': props.kitid
  };

  const type = {
    block: <div {...attr}>
      {img}
      {children}
    </div>,

    figure: <figure {...attr}>
      {img}
      {children}

    </figure>,

    link: <a {...attr} href={props.href}>
      {img}
      {children}
    </a>
  };

  // Return Component
  return type[props.type] || type['block'];
};


Thumbnail.propTypes = {
  height: React.PropTypes.string,
  img  : React.PropTypes.object,
  kitid: React.PropTypes.string,
  medium: React.PropTypes.object,
  large: React.PropTypes.object,
  small: React.PropTypes.object,
  src: React.PropTypes.string,
  size : React.PropTypes.oneOf(['large', 'medium', 'small', 'mini', 'expand']),
  type : React.PropTypes.oneOf(['block', 'figure', 'link']),
  width: React.PropTypes.string,
  xlarg: React.PropTypes.object
};


export default uikit.base(Thumbnail);
