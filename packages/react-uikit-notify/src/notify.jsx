
'use strict';

import React from 'react';
import {
  base,
  events,
  helpers
} from 'react-uikit-base';
import cuid from 'cuid';

class NotifyMessage extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
  }

  componentDidMount () {
    this.props.animate.in(this.props.kitid);
  }


  handleClick (e) {
    this.props.onClick(e, this.props.kitid);
  }


  handleTimeout (duration, kitid) {
    if (duration) {
      setTimeout(() => {
        this.props.animate.out(this.props.kitid);
      }, duration);
    }
  }


  render () {
    const props = this.props;
    // CSS classes
    const cssClassNames =  helpers.cleanClasses([
      'uk-notify-message',
      props.context ? `uk-notify-message-${props.context}` : null
    ]);

    // Remove non valid html attributes
    const ignoreProps = [
      'children',
      'classes',
      'context',
      'kitid',
      'message',
      'status',
      'timeout'
    ];

    const cleanProps = helpers.cleanProps(ignoreProps)({
      ...props,
      timeout: null,
      message: null
    });

    // set timeout
    if (props.timeout) {
      this.handleTimeout(props.timeout, props.kitid);
    }

    return <div
      {...cleanProps}
      data-kitid={props.kitid ? props.kitid :  `${cuid()}`}
      className={cssClassNames}
    >
    <a className="uk-close"></a>
      {props.message}
    </div>;
  }
}

NotifyMessage.propTypes = {
  animate  : React.PropTypes.object,
  children  : React.PropTypes.any,
  classes   : React.PropTypes.array,
  className : React.PropTypes.string,
  context   : React.PropTypes.oneOf(['danger', 'info', 'success', 'warning']),
  kitid     : React.PropTypes.string,
  message   : React.PropTypes.any,
  onClick   : React.PropTypes.func,
  timeout   : React.PropTypes.number
};


const Notify = (props) => {
  // CSS classes
  const cssClassNames = helpers.cleanClasses([
    'uk-notify',
    props.classes,
    props.pos ? `uk-notify-${props.pos}` : null,
    props.className
  ]);

  // Remove non valid html attributes
  const ignoreProps = [
    'children',
    'classes',
    'context',
    'items',
    'messages',
    'pos',
    'kitid'
  ];

  const cleanProps = helpers.cleanProps(ignoreProps)(props);

  let items = props.messages.map((item, index) => {
    const id = item.kitid || cuid();

    return <NotifyMessage
      key={id}
      message={item.message}
      context={item.context}
      pos={item.pos}
      kitid={id}
      timeout={item.timeout}
      animate={item.animate}
      onClick={item.onClick}
    />;
  }).reverse();

  // Return Component
  return <div
    {...cleanProps}
    {...events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {items}
  </div>;
};


Notify.propTypes = {
  children  : React.PropTypes.any,
  classes   : React.PropTypes.array,
  className : React.PropTypes.string,
  items     : React.PropTypes.object,
  kitid     : React.PropTypes.string,
  pos       : React.PropTypes.oneOf([
    'bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right'
  ]),
  messages  : React.PropTypes.array
};


export default base(Notify);
