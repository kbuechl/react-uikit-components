'use strict';
import test from 'tape';
import Notify from '../lib/notify';
import React from 'react';
import {
  htmlToString,
  reactToDom,
  reactToString
} from './helpers/renderElement';

const message = {
  message: 'Message...',
  kitid:  'message_0',
  timeout: 3000,
  context: 'info',
  animate: {
    in : kitid => kitid,
    out: kitid => kitid
  },
  onClick: e => e
};

test('Notify Component', nested => {
  nested.test('Renders component:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders component');

      assert.end();
    });


  nested.test('message property:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'
        messages={[{
          ...message,
          message: <div><i className='uk-icon-check'></i> Message with an icon...</div>
        }]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          <div><i class='uk-icon-check'></i> Message with an icon...</div>
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders message with element');

      assert.end();
    });


  nested.test('message timeout prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'

        messages={[{ ...message, timeout: 0}]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders timeout prop');

      assert.end();
    });


  nested.test('context success prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'

        messages={[{ ...message, context: 'success'}]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-success">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders context successs prop');

      assert.end();
    });


  nested.test('context warning prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'

        messages={[{ ...message, context: 'warning'}]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-warning">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders context warning prop');

      assert.end();
    });


  nested.test('position top-left prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'

        messages={[{ ...message, context: 'danger'}]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-danger">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders context danger prop');

      assert.end();
    });


  nested.test('position top-left prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-left'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-left" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly positions notifications, top left');

      assert.end();
    });

  nested.test('position top-center prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-center'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly positions notifications, top center');

      assert.end();
    });


  nested.test('position top-right prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='top-right'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-top-right" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly positions notifications, top right');

      assert.end();
    });


  nested.test('position bottom-left prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='bottom-left'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-bottom-left" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly positions notifications, bottom left');

      assert.end();
    });

  nested.test('position bottom-center prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='bottom-center'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-bottom-center" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly positions notifications, bottom center');

      assert.end();
    });


  nested.test('position bottom-right prop:',
    assert => {
      const actual = reactToString(
        <Notify
        kitid='notify1'
        pos='bottom-right'
        messages={[message]}
      />
      );

      const expect = htmlToString(`
        <div class="uk-notify  uk-notify-bottom-right" data-kitid="notify1">
          <div data-kitid="message_0" class="uk-notify-message uk-notify-message-info">
          <a class="uk-close"></a>
          Message...
        </div>
      </div>
      `);

      assert.equals(actual, expect,
        'Correctly positions notifications, bottom right');

      assert.end();
    });
});
