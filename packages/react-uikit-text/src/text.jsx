'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';


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

  const cssClassNames = helpers.cleanClasses([
    props.classes,
    props.bold ? `uk-text-bold` : null,
    props.context ? `uk-text-${props.context}` : null,
    props.heading ? heading[props.heading] : null,
    props.size ? `uk-text-${props.size}` : null
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'bold',
    'classes',
    'context',
    'heading',
    'href',
    'kitid',
    'size',
    'type'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);

  const attr = {
    ...cleanProps,
    ...events(props),
    className   : cssClassNames,
    'data-kitid': props.kitid
  };


  // Elements
  const type = {
    a: <a href ={props.href} {...attr}>
      {props.children}
    </a>,

    abbr: <abbr {...attr}>
      {props.children}
    </abbr>,

    code  : <code {...attr}>
      {props.children}
    </code>,

    del: <del {...attr}>
      {props.children}
    </del>,

    dfn: <dfn {...attr} title={props.title}>
      {props.children}
    </dfn>,

    em: <em {...attr}>
      {props.children}
    </em>,

    h1: <h1 {...attr}>
      {props.children}
    </h1>,

    h2: <h2 {...attr}>
      {props.children}
    </h2>,

    h3: <h3 {...attr}>
      {props.children}
    </h3>,

    h4: <h4 {...attr}>
      {props.children}
    </h4>,

    h5: <h5 {...attr}>
      {props.children}
    </h5>,

    h6: <h6 {...attr}>
      {props.children}
    </h6>,

    hr: <hr {...attr} className={`uk-article-divider ${cssClassNames}`} />,

    ins: <ins {...attr}>
      {props.children}
    </ins>,

    mark : <mark {...attr}>
      {props.children}
    </mark>,

    q: <q {...attr}>
      {props.children}
    </q>,

    p: <p {...attr}>
      {props.children}
      </p>,

    small: <small {...attr}>
      {props.children}
    </small>,

    span: <span {...attr}>
      {props.children}
    </span>,

    strong: <strong {...attr}>
      {props.children}
    </strong>
  };


  // Return Component
  return type[props.type] || type['p'];


};


Text.propTypes = {
  bold    : React.PropTypes.bool,
  classes : React.PropTypes.array,
  context : React.PropTypes.oneOf(['muted', 'primary', 'success', 'warning', 'danger', 'contrast']),
  heading : React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  href    : React.PropTypes.string,
  kitid   : React.PropTypes.string,
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


export default base(Text);
