'use strict';

import React from 'react';
import Button from 'react-uikit-button';
import Notify from 'react-uikit-notify';
import velocity from 'velocity-animate';
import uikit from 'react-uikit-base';
import cuid from 'cuid';
import Codeblock from 'react-uikit-codeblock';
import Note from 'react-uikit-note';
import Table from 'react-uikit-table';


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
    this.updateState({ message: <div><i className='uk-icon-check'></i> Message with an icon...</div> })
  }

  handleStickyClick (e) {
    this.updateState({ message: 'Stiky message...', timeout: 0 })
  }

  handleContextDanger (e) {
    this.updateState({ message: 'Info meassage...', context:'danger' });
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
    return <div>
      <section>
        <h1>Notify</h1>
        <p>
          Toggleable notifications that can be animated and postioned on various edges of the screen.
        </p>
        <p>
          <a href='https://github.com/otissv/react-uikit-notify'>react-uikit-notify</a> on github.
        </p>
        </section>

        <section>
          <h2>Usage</h2>
          <Codeblock>
{`npm install react-uikit-notify --save;

// ES6
<code>import Button from 'react-uikit-notify';

// ES5
var Button = require('react-uikit-notify').default;`}
          </Codeblock>

          <Notify
            kitid='notify1'
            pos={this.state.pos}
            messages={this.state.messages}
          />

          <hr className="uk-article-divider" />
        <p>
          The Notify component takes a collection of notifications and displays them on the screen.
        </p>

        <p>
          For inline code use the html element <code>&lt;code&gt;</code>.
        </p>

        <h3 className='example'>Example</h3>
        <Button body='Click me' onClick={this.handleExapmleClick}/>
        <h3 className='code'>Code</h3>
        <Codeblock>
{`<Notify
  kitid='notify1'
  pos='top-center'
  messages={[{
    message: 'Message...',
    kitid:  'message_0',
    timeout: 3000,
    context: 'info',
    animate: {
      in : kitid => this.handleNotifyIn(kitid),
      out: kitid => this.handleNotifyOut(kitid)
    },
    onClick: e => this.handleClose(e),
  }]}
/>
`}
        </Codeblock>

        <Note body='Messages can be linked to state to be updated dynamically as new messages are received.'/>
      </section>

      <section>
        <h2>Animation</h2>
        <p>
          To place a message in and out of view, methods can be set to
          the the <code>animate.in</code> and <code>animate.in</code> properties of a message.
        </p>
        <p>
          This is also allows any logic to run before and after notification.
        </p>
      </section>

      <section>
        <h2>Custom message</h2>
        <p>
          The <code>messag</code> property can be a string, jsx or another react component, like an icon element.
        </p>

        <h3 className='example'>Example</h3>
        <Button body='With icon' onClick={this.handleWithElementClick}/>

        <h3 className='code'>Code</h3>
        <Codeblock>
{`{
  message: <div><i className='uk-icon-check'></i> Message with an icon...</div>
}
`}
        </Codeblock>
      </section>


      <section>
        <h2>Delay and sticky</h2>
        <p>
          The <code>timeout</code> property sets the amount of time in milliseconds a message is visible.
          You can also create a sticky message by setting the timeout to zero or omitting
          the <code>timeout</code> property completly.
        </p>

        <h3 className='example'>Example</h3>
        <Button body='Sticky' onClick={this.handleStickyClick}/>
        <h3 className='code'>Code</h3>
        <Codeblock>
{`{
  message: 'Stiky message...', timeout: 0
}
`}
        </Codeblock>
      </section>



      <section>
        <h2>Message context</h2>
        <p>
          A notification can be given a context to indicate an info, success, warning or a danger status.
          The default context is info;
        </p>

        <h3 className='example'>Example</h3>

        <Table caption='Notification message context table.' head={['Status', 'Code', 'Example']} body={[
          {status: 'Info',    code: `{ context: 'info' }`,    example: <Button block body='Info' onClick={this.handleContextInfo}/>},
          {status: 'Success', code: `{ context: 'success' }`, example: <Button block body='Success' onClick={this.handleContextSuccess}/>},
          {status: 'Warning', code: `{ context: 'warning' }`, example: <Button block body='Warning' onClick={this.handleContextWarning}/>},
          {status: 'Danger',  code: `{ context: 'danger' }`,  example: <Button block body='Danger' onClick={this.handleContextDanger}/>}
        ]}/>
      </section>

      <section>
        <h2>Positions</h2>
        <p>
         Notification's position can be adjusted to locations of the screens
         edges by changing the notifications <code>pos</code> property.
         The default postion is s <code>top-left</code> .
        </p>

        <h3 className='example'>Example</h3>
        <Table caption='Notification message context table.' head={['Position', 'Code', 'Example']} body={[
          {Position: 'top-center',    code: `{ pos: 'top-center' }`,    example: <Button block body='Top Center' onClick={this.handleTopCenter}/>},
          {Position: 'top-left',      code: `{ pos: 'top-left' }`,      example: <Button block body='Top Left' onClick={this.handleTopLeft}/>},
          {Position: 'top-right',     code: `{ pos: 'top-right' }`,     example: <Button block body='Top Right' onClick={this.handleTopRight}/>},
          {Position: 'bottom-center', code: `{ pos: 'bottom-center' }`, example: <Button block body='Bottom Center' onClick={this.handleBottomCenter}/>},
          {Position: 'bottom-left',   code: `{ pos: 'bottom-left' }`,   example: <Button block body='Bottom Left' onClick={this.handleBottomLeft}/>},
          {Position: 'bottom-right',  code: `{ pos: 'bottom-right' }`,  example: <Button block body='Bottom Right' onClick={this.handleBottomRight}/>}
        ]}/>
      </section>

      <section>
        <h2>Notify Props</h2>
        <p>
          See Base for additional utility props.
        </p>

        <Table caption='Notification message context table.' head={['Prop', 'Type']} body={[
          {prop: 'message',  type: 'array'},
          {prop: 'pos',  type: <div>One of<br/>
            top-center,
            top-left,
            top-right,
            bottom-center,
            bottom-left,
            bottom-right
          </div>},
        ]}/>
      </section>

    </div>;
  }
}


export default NotifyDoc;
