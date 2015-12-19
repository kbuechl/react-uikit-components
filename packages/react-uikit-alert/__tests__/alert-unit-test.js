'use strict';
import test from 'tape';
import Alert from '../lib/alert';
import React from 'react';
import renderElement from './helpers/renderElement';


test('Alert Component', nested => {
  nested.test('Renders alert component:',
    assert => {
      const alert = renderElement(<Alert kitid='alert1'>An alert box</Alert>).dom();

      const actual = alert.html();
      const expect = '<div data-kitid="alert1" class="uk-alert">An alert box</div>';

      assert.equals(actual, expect,
        'Correctly renders alert component.');

      assert.end();
    });


  nested.test('Renders alert component with close button:',
    assert => {
      const alert = renderElement(<Alert kitid='alert2' close={() => {}}>An alert box</Alert>).dom();

      const actual = alert.html();
      const expect = '<div data-kitid="alert2" class="uk-alert"><a href="#" class="uk-alert-close uk-close"></a>An alert box</div>';

      assert.equals(actual, expect,
        'Correctly renders alert with close.');

      assert.end();
    });


  nested.test('context prop = success:',
    assert => {
      const alert = renderElement(<Alert context='success'/>).dom('div.uk-alert');
      const actual = alert.hasClass('uk-alert-success');
      assert.ok(actual, 'Adds alert success class to alert element');

      assert.end();
    });


  nested.test('context prop = warning:',
    assert => {
      const alert = renderElement(<Alert context='warning'/>).dom('div.uk-alert');
      const actual = alert.hasClass('uk-alert-warning');
      assert.ok(actual, 'Adds alert warning class to alert element');

      assert.end();
    });


  nested.test('context prop = danger:',
    assert => {
      const alert = renderElement(<Alert context='danger'/>).dom('div.uk-alert');
      const actual = alert.hasClass('uk-alert-danger');
      assert.ok(actual, 'Adds alert danger class to alert element');

      assert.end();
    });


  nested.test('context prop = large:',
    assert => {
      const alert = renderElement(<Alert large/>).dom('div.uk-alert');
      const actual = alert.hasClass('uk-alert-large');
      assert.ok(actual, 'Adds alert large class to alert element');

      assert.end();
    });
});
