'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Img from '../../react-uikit-img/lib/img';


class ImgGroup extends React.Component {
  static propTypes = {
    items: React.PropTypes.array
  }

  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      $props.classes,
      $props.className
    ]);


    // Elements
    const mapItems = () => {
      return $props.items.map((item, index) => {
        return <Img key={index}
          {...item.props}
          alt={item.alt}
          height={item.height}
          large={item.large}
          medium={item.medium}
          small={item.small}
          src={item.src}
          width={item.width}
          xlarge={item.xlarge}
          kitid={item.kitid}
        />;
      });
    };


    const items = ufunc.maybeIf(mapItems())($props.items);

    // Return Component
    return <div
      {...$props}

      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      {items}
      {$props.children}
    </div>;

  }
}


export default uikit.base(ImgGroup);
