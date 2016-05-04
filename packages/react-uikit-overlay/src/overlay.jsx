'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Img from '../../react-uikit-img';


const Overlay = (props) => {
  // CSS classes
  const captionCSS = {
    bottom: 'uk-overlay-bottom',
    left: 'uk-overlay-left',
    right: 'uk-overlay-right',
    top: 'uk-overlay-top'
  };


  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-overlay',
    props.image ? 'uk-overlay-hover' : null,
    props.classes
  ]);

  const captionClassNames = uikit.helpers.cleanClasses([
    'uk-overlay-panel',
    props.background ? 'uk-overlay-background' : null,
    props.icon ? 'uk-overlay-icon' : null,
    props.caption ? captionCSS[props.caption] : null
  ]);

  // Elements
  const link = ufunc.maybeIf(<a className='uk-position-cover' href='#'></a>, props.link);


  const img = <Img
    alt={props.alt}
    height={props.height}
    large={props.large}
    medium={props.medium}
    small={props.small}
    src={props.src}
    width={props.width}
    type={props.type}
    xlarge={props.xlarge}
    kitid={`overlay-image-${props.kitid}`}
    className={props.image ? 'uk-overlay-panel uk-overlay-image' : null}
  />;

  const figure = <figure {...props}
    className={cssClassNames}
    data-kitid={`overlay-${props.kitid}`}
  >
    <Img
      alt={props.alt}
      height={props.height}
      large={props.large}
      medium={props.medium}
      small={props.small}
      src={props.image}
      width={props.width}
      type={props.type}
      xlarge={props.xlarge}
      kitid={`overlay-background-image-${props.kitid}`}
    />
      {img}
      {link}
  </figure>;


  const caption = <figcaption
    className={captionClassNames}
    {...props}
    data-kitid={`overlay-caption-${props.kitid}`}
  >
    {props.children}
  </figcaption>;


  const linkCaption = <div
    className={cssClassNames}
    {...props}
    data-kitid={`overlay-link-${props.kitid}`}
  >
    {props.children}
  </div>;


  const figureCaption = <figure
    className={cssClassNames}
    {...props}
    data-data-kitid={`overlay-${props.kitid}`}
  >
    {img}
    {ufunc.either(linkCaption, caption)(props.link)}
    {link}
  </figure>;


  // Return Component
  const component = ufunc.either(figure, figureCaption);
  return component(props.image);
};


Overlay.propTypes = {
  alt        : React.PropTypes.string,
  background : React.PropTypes.bool,
  flex       : React.PropTypes.bool,
  height     : React.PropTypes.string,
  icon       : React.PropTypes.bool,
  image      : React.PropTypes.string,
  large      : React.PropTypes.object,
  medium     : React.PropTypes.object,
  // does not render Correctly
  caption    : React.PropTypes.string,
  small      : React.PropTypes.object,
  src        : React.PropTypes.string,
  width      : React.PropTypes.string,
  xlarge     : React.PropTypes.object
};


export default uikit.base(Overlay);
