'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


class Codeblock extends React.Component {
  static propTypes = {
    syntax : React.PropTypes.string
  }

  render () {
    const $props = this.props;


    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      $props.classes,
      $props.syntax,
      $props.className
    ]);


    // Return Component
    return <pre
      {...$props}
      className={cssClassNames}
      data-kitid={$props.kitid}
    >
      <code className={$props.syntax}>
        {$props.children}
      </code>
    </pre>;
  }
}


export default uikit.base(Codeblock);
