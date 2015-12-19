'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


class Button extends React.Component {
  static propTypes = {
    body     : React.PropTypes.string,
    block    : React.PropTypes.bool,
    dropdown : React.PropTypes.bool,
    context  : React.PropTypes.oneOf(['primary', 'success', 'danger', 'link']),
    disabled : React.PropTypes.bool,
    size     : React.PropTypes.oneOf(['mini', 'small', 'large']),
    type     : React.PropTypes.oneOf(['button', 'close', 'link'])
  }


  render () {
    const $props = this.props;

    // CSS classes
    const context = {
      primary: ' uk-button-primary',
      success: ' uk-button-success',
      danger : ' uk-button-danger',
      link   : ' uk-button-link'
    };

    const size = {
      mini: ' uk-button-mini',
      small: ' uk-button-small',
      large: ' uk-button-large'
    };


    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-button',
      $props.classes,
      $props.block ? 'uk-width-1-1' : null,
      $props.context ? context[$props.context] : null,
      $props.size ? size[$props.size] : null,
      $props.className
    ]);


    // Elements
    const ignoreProps = ['type'];


    const type = {
      button: <button
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        type='button'
        onClick={$props.onClick}
        disabled={$props.disabled}
        data-kitid={$props.kitid}
      >
       {$props.body}{$props.children}
     </button>,

      close: <a
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={`uk-close ${cssClassNames}`}
        href='#'
        onClick={$props.onClick}
        data-kitid={$props.kitid}
      />,

      link: <a
        {...uikit.helpers.cleanProps($props, ignoreProps)}
        className={cssClassNames}
        href='#'
        role='button'
        onClick={$props.onClick}
        data-kitid={$props.kitid}
      >
        {$props.body}{$props.children}
      </a>
    };


    // Return Component
    const button = type[$props.type] || type['button'];


    // const dropdown = ufunc.maybeIf(
    //   <div
    //   className="uk-button-dropdown"
    //   >
    //     {button}
    //
    //     <div className="uk-dropdown uk-dropdown-small">
    //         <ul className="uk-nav uk-nav-dropdown">
    //           {
    //             $props.dropdown.map((item, index) => {
    //               <li key={index}>
    //                 <a href=''></a>
    //               </li>;
    //             })
    //           }
    //         </ul>
    //     </div>
    //
    //   </div>
    // )($props.dropdown);


    // const component = ufunc.either(dropdown, button);

    return button;
  }

}


export default uikit.base(Button);
