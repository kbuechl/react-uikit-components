'use strict';

import React from 'react';
import uikit from '../../react-uikit-base';


const Text = (props) => {
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
    props.classes,
    props.bold ? `uk-text-bold` : null,
    props.context ? `uk-text-${props.context}` : null,
    props.heading ? heading[props.heading] : null,
    props.size ? `uk-text-${props.size}` : null
  ]);

  const cleanProps = uikit.helpers.cleanProps(['type', 'href'])(props);
  const cleanLinkProps = uikit.helpers.cleanProps(['type'])(props);

  const attr = {
    ...uikit.events(props),
    className   : cssClassNames,
    'data-kitid': props.kitid
  };


  // Elements
  const type = {
    a: <a href ='' {...attr} {...cleanLinkProps}>
      {props.children}
    </a>,

    abbr: <abbr {...attr} {...cleanProps}>
      {props.children}
    </abbr>,

    code  : <code {...attr} {...cleanProps}>
      {props.children}
    </code>,

    del: <del {...attr} {...cleanProps}>
      {props.children}
    </del>,

    dfn: <dfn {...attr} {...cleanProps} title={props.title}>
      {props.children}
    </dfn>,

    em: <em {...attr} {...cleanProps}>
      {props.children}
    </em>,

    h1: <h1 {...attr} {...cleanProps}>
      {props.children}
    </h1>,

    h2: <h2 {...attr} {...cleanProps}>
      {props.children}
    </h2>,

    h3: <h3 {...attr} {...cleanProps}>
      {props.children}
    </h3>,

    h4: <h4 {...attr} {...cleanProps}>
      {props.children}
    </h4>,

    h5: <h5 {...attr} {...cleanProps}>
      {props.children}
    </h5>,

    h6: <h6 {...attr} {...cleanProps}>
      {props.children}
    </h6>,

    hr: <hr {...attr} className={`uk-article-divider ${cssClassNames}`} />,

    ins: <ins {...attr} {...cleanProps}>
      {props.children}
    </ins>,

    mark : <mark {...attr} {...cleanProps}>
      {props.children}
    </mark>,

    q: <q {...attr} {...cleanProps}>
      {props.children}
    </q>,

    p: <p {...attr} {...cleanProps}>
      {props.children}
      </p>,

    small: <small {...attr} {...cleanProps}>
      {props.children}
    </small>,

    span: <span {...attr} {...cleanProps}>
      {props.children}
    </span>,

    strong: <strong {...attr} {...cleanProps}>
      {props.children}
    </strong>
  };


  // Return Component
  return type[props.type] || type['p'];


};


Text.propTypes = {
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
};


export default uikit.base(Text);
