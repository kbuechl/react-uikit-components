'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


class Text extends React.Component {
  static propTypes = {
    bold    : React.PropTypes.bool,
    context : React.PropTypes.oneOf(['muted', 'primary', 'success', 'warning', 'danger', 'contrast']),
    heading : React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size    : React.PropTypes.oneOf(['small', 'large']),
    type    : React.PropTypes.oneOf([
      'a',
      'abbr',
      'code',
      'del',
      'dfn',
      'em',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hr',
      'ins',
      'mark',
      'q',
      'p',
      'small',
      'span',
      'strong'
    ])
  }

  render () {
    const $props = this.props;

    // CSS classes
    const heading = {
      h1: 'uk-h1',
      h2: 'uk-h2',
      h3: 'uk-h3',
      h4: 'uk-h4',
      h5: 'uk-h5',
      h6: 'uk-h6'
    };

    const cssClassNames = uikit.helpers.cleanClasses([
      $props.classes,
      $props.bold ? `uk-text-bold` : null,
      $props.context ? `uk-text-${$props.context}` : null,
      $props.heading ? heading[$props.heading] : null,
      $props.size ? `uk-text-${$props.size}` : null
    ]);


    // Elements
    const type = {
      a: <a href ='' {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </a>,

      abbr: <abbr {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </abbr>,

      code  : <code {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </code>,

      del: <del {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </del>,

      dfn: <dfn {...$props} className={cssClassNames} title={$props.title} data-kitid={$props.kitid}>
        {$props.children}
      </dfn>,

      em: <em {...$props} className={cssClassNames}>
        {$props.children}
      </em>,

      h1: <h1 {...$props} className={cssClassNames}>
        {$props.children}
      </h1>,

      h2: <h2 {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </h2>,

      h3: <h3 {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </h3>,

      h4: <h4 {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </h4>,

      h5: <h5 {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </h5>,

      h6: <h6 {...$props} className={cssClassNames}> data-kitid={$props.kitid}
        {$props.children}
      </h6>,

      hr: <hr {...$props} className={`uk-article-divider ${cssClassNames}`} data-kitid={$props.kitid}/>,

      ins: <ins {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </ins>,

      mark : <mark {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </mark>,

      q: <q {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </q>,

      p: <p {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
        </p>,

      small: <small {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </small>,

      span: <span {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </span>,

      strong: <strong {...$props} className={cssClassNames} data-kitid={$props.kitid}>
        {$props.children}
      </strong>
    };


    // Return Component
    return type[$props.type] || type['p'];

  }
}


export default uikit.base(Text);
