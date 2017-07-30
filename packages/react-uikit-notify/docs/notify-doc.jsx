import React, { PropTypes } from 'react';

import Button from 'react-uikit-button';
import Note from 'react-uikit-note';
import Table from 'react-uikit-table';
import uikit from 'react-uikit-base';

import cuid from 'cuid';

import Notify from '../lib/notify';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

let velocity;
if (process.env.NODE_ENV !== 'mdGenerator') {
  velocity = require('velocity-animate');
} else {
  velocity = () => {};
}

const name = 'Notify';
const npmName = 'react-uikit-notify';
const summary = 'Toggleable notifications that can be animated and postioned on various edges of the screen';
const propTuples = [
  {Prop: 'message', Type: 'array'},
  {Prop: 'pos', Type: "oneOf: 'top-center' / 'top-left' / 'top-right' / 'bottom-center' 'bottom-left' / 'bottom-right'"},
];

const basicExample = ({ handleExapmleClick, messages, pos }) => (
  <div>
    <Notify kitid='notify1' pos={pos} messages={messages} />
    <Button body='Click me' onClick={handleExapmleClick}/>
  </div>
);
basicExample.propTypes = {
  handleExapmleClick: PropTypes.func,
  messages: PropTypes.array,
  pos: PropTypes.string,
};
const basicSnippet = `
  <Notify kitid='notify1' pos='top-center' messages={[{ message: 'Message...', kitid:  'message_0', timeout: 3000, context: 'info',
      animate: {\n in : kitid => this.handleNotifyIn(kitid),\n out: kitid => this.handleNotifyOut(kitid)\n },
      onClick: e => this.handleClose(e),
    }]}
  />`;

const contextTable = ({ handleContextInfo, handleContextSuccess, handleContextWarning, handleContextDanger }) => (
  <Table caption='Notification message context table.' head={['Status', 'Code', 'Example']} body={[
    {status: 'Info',    code: `{ context: 'info' }`,    example: <Button block body='Info' onClick={handleContextInfo}/>},
    {status: 'Success', code: `{ context: 'success' }`, example: <Button block body='Success' onClick={handleContextSuccess}/>},
    {status: 'Warning', code: `{ context: 'warning' }`, example: <Button block body='Warning' onClick={handleContextWarning}/>},
    {status: 'Danger',  code: `{ context: 'danger' }`,  example: <Button block body='Danger' onClick={handleContextDanger}/>}
  ]}/>
);
contextTable.propTypes = {
  handleContextInfo: PropTypes.func,
  handleContextSuccess: PropTypes.func,
  handleContextWarning: PropTypes.func,
  handleContextDanger: PropTypes.func,
};

const positionTable = ({ handleTopCenter, handleTopLeft, handleTopRight, handleBottomCenter, handleBottomLeft, handleBottomRight }) => (
  <Table caption='Notification message context table.' head={['Position', 'Code', 'Example']} body={[
    {Position: 'top-center',    code: `{ pos: 'top-center' }`,    example: <Button block body='Top Center' onClick={handleTopCenter}/>},
    {Position: 'top-left',      code: `{ pos: 'top-left' }`,      example: <Button block body='Top Left' onClick={handleTopLeft}/>},
    {Position: 'top-right',     code: `{ pos: 'top-right' }`,     example: <Button block body='Top Right' onClick={handleTopRight}/>},
    {Position: 'bottom-center', code: `{ pos: 'bottom-center' }`, example: <Button block body='Bottom Center' onClick={handleBottomCenter}/>},
    {Position: 'bottom-left',   code: `{ pos: 'bottom-left' }`,   example: <Button block body='Bottom Left' onClick={handleBottomLeft}/>},
    {Position: 'bottom-right',  code: `{ pos: 'bottom-right' }`,  example: <Button block body='Bottom Right' onClick={handleBottomRight}/>}
  ]}/>
);
positionTable.propTypes = {
  handleTopCenter: PropTypes.func,
  handleTopLeft: PropTypes.func,
  handleTopRight: PropTypes.func,
  handleBottomCenter: PropTypes.func,
  handleBottomLeft: PropTypes.func,
  handleBottomRight: PropTypes.func,
};

class NotifyDoc extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      messages: [],
      pos: 'top-center',
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleExapmleClick = this.handleExapmleClick.bind(this);
    this.handleWithElementClick = this.handleWithElementClick.bind(this);
    this.handleNotifyIn = this.handleNotifyIn.bind(this);
    this.handleNotifyOut = this.handleNotifyOut.bind(this);
    this.handleStickyClick = this.handleStickyClick.bind(this);
    this.updateState = this.updateState.bind(this);

    this.handleContextDanger = this.handleContextDanger.bind(this);
    this.handleContextInfo = this.handleContextInfo.bind(this);
    this.handleContextSuccess = this.handleContextSuccess.bind(this);
    this.handleContextWarning = this.handleContextWarning.bind(this);

    this.handleTopCenter = this.handleTopCenter.bind(this);
    this.handleTopLeft = this.handleTopLeft.bind(this);
    this.handleTopRight = this.handleTopRight.bind(this);
    this.handleBottomCenter = this.handleBottomCenter.bind(this);
    this.handleBottomLeft = this.handleBottomLeft.bind(this);
    this.handleBottomRight = this.handleBottomRight.bind(this);
  }

  handleExapmleClick (e) {
    this.updateState();
  }

  handleWithElementClick (e) {
    this.updateState({ message: <div><i className='uk-icon-check'></i> Message with an icon...</div> });
  }

  handleStickyClick (e) {
    this.updateState({ message: 'Stiky message...', timeout: 0 });
  }

  handleContextDanger (e) {
    this.updateState({ message: 'Danger meassage...', context:'danger' });
  }

  handleContextInfo (e) {
    this.updateState({ message: 'Info meassage...', context:'info' });
  }

  handleContextSuccess (e) {
    this.updateState({ message: 'Success meassage...', context:'success' });
  }

  handleContextWarning (e) {
    this.updateState({ message: 'Warning meassage...', context:'warning' });
  }

  handleTopCenter (e) {
    this.setState({ pos:'top-center' });
    this.updateState();
  }

  handleTopLeft (e) {
    this.setState({ pos:'top-left' });
    this.updateState();
  }

  handleTopRight (e) {
    this.setState({ pos:'top-right' });
    this.updateState();
  }

  handleBottomCenter (e) {
    this.setState({ pos:'bottom-center' });
    this.updateState();
  }

  handleBottomLeft (e) {
    this.setState({ pos:'bottom-left' });
    this.updateState();
  }

  handleBottomRight (e) {
    this.setState({ pos:'bottom-right' });
    this.updateState();
  }

  handleClose (e) {
    this.handleNotifyOut (e.currentTarget.dataset.kitid);
  }

  handleNotifyIn (kitid) {
    const element = uikit.helpers.getElement(kitid);
    velocity(
      element,
      { opacity: [1, 0.5], translateY: [0, -100] },
      { display: 'block', duration: 200 }
    );
  }

  handleNotifyOut (kitid) {
    const element = uikit.helpers.getElement(kitid);
    const timeout = 300;
    const index = this.state.messages.map(mes=> mes.kitid).indexOf(kitid);

    velocity(
      element,
      { opacity: [0, 1], translateY: [-50, 0] },
      { display: 'block', duration: timeout }
    );

    setTimeout(()=> {
      this.setState({
        messages:  Array.from( new Set([
          ...this.state.messages.slice(0, index),
          ...this.state.messages.slice(index + 1)
        ]))
      });
    }, timeout + 10);
  }

  updateState (message) {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          message: 'Message...',
          kitid:  cuid(),
          timeout: 3000,
          animate: {
            in : kitid => this.handleNotifyIn(kitid),
            out: kitid => this.handleNotifyOut(kitid)
          },
          onClick: e => this.handleClose(e),
          ...message,
        }
      ]
    });
  }


  render () {
    const { messages, pos } = this.state;
    return (
      <div>
        <DocHeader {... { name, npmName, summary }} />
        <DocExample
          description={<span>The Notify component takes a collection of notifications and displays them on the screen.</span>}
          jsx={basicExample({ handleExapmleClick: this.handleExapmleClick , messages, pos })}
          snippet={basicSnippet}
          trailingNote={<Note>Messages can be linked to state to be updated dynamically as new messages are received.</Note>}
        />
        <DocExample
          name="Animation"
          description={<div>
            <p>To place a message in and out of view, methods can be set to the the <code>animate.in</code> and <code>animate.in</code> properties of a message.</p>
            <p>This is also allows any logic to run before and after notification.</p>
          </div>}
        />
        <DocExample
          name="Custom message"
          description={<p>The <code>message</code> property can be a string, jsx or another react component, like an icon element.</p>}
          jsx={<Button body='With icon' onClick={this.handleWithElementClick}/>}
          snippet={`{\n  message: <div><i className='uk-icon-check'></i> Message with an icon...</div>\n}`}
        />
        <DocExample
          name="Delay and sticky"
          description={<p>The <code>timeout</code> property sets the amount of time in milliseconds a message is visible. You can also create a sticky message by setting the timeout to zero or omitting the <code>timeout</code> property completly.</p>}
          jsx={<Button body='Sticky' onClick={this.handleStickyClick}/>}
          snippet={`{\n  message: 'Stiky message...', timeout: 0\n}`}
        />
        <DocExample
          name="Message context"
          description={<p>A notification can be given a context to indicate an info, success, warning or a danger status. The default context is info;</p>}
          table={contextTable({ handleContextInfo: this.handleContextInfo, handleContextSuccess: this.handleContextSuccess, handleContextWarning: this.handleContextWarning, handleContextDanger: this.handleContextDanger })}
        />
        <DocExample
          name="Positions"
          description={<p>Notification's position can be adjusted to locations of the screens edges by changing the notifications <code>pos</code> property. The default postion is s <code>top-left</code>.</p>}
          table={positionTable({ handleTopCenter: this.handleTopCenter, handleTopLeft: this.handleTopLeft, handleTopRight: this.handleTopRight, handleBottomCenter: this.handleBottomCenter, handleBottomLeft: this.handleBottomLeft, handleBottomRight: this.handleBottomRight })}
        />
        <DocFooter { ...{ name, propTuples }} />
      </div>
    );
  }
}


export default NotifyDoc;
