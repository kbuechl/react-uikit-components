'use strict';
import test from 'tape';
import Panel from '../lib/panel';
import React from 'react';
import renderElement from './helpers/renderElement';


test('panel Component', nested => {
  nested.test('Renders panel component:',
    assert => {
      const Component = <Panel
        box
        title='Title'
        header
        space
        badge={{body: 'hot', context: 'danger'}}
      >
        This is a panel
      </Panel>;

      const alert = renderElement(Component).dom();

      const actual = alert.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<div class="uk-panel  uk-panel-box uk-panel-header uk-panel-space">' +
        '<span class="uk-badge  uk-badge-danger">hot</span>' +
        '<h3 class="uk-panel-title"> Title</h3>' +
        'This is a panel' +
      '</div>';
      /* eslint-enable no-complex-string-concat */


      assert.equals(actual, expect,
        'Correctly renders panel element.');

      assert.end();
    });


  nested.test('Renders panel component as link:',
    assert => {
      const Component = <Panel
        box
        title='Link panel'
        type='link'
        link=''
        header
        space
        badge={{body: 'hot', context: 'danger'}}
      >
        This is a panel
      </Panel>;

      const alert = renderElement(Component).dom();

      const actual = alert.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<a href="">' +
        '<div class="uk-panel  uk-panel-box uk-panel-header uk-panel-space">' +
          '<span class="uk-badge  uk-badge-danger">hot</span>' +
          '<h3 class="uk-panel-title"> Link panel</h3>' +
          'This is a panel' +
        '</div>' +
      '</a>';
      /* eslint-enable no-complex-string-concat */


      assert.equals(actual, expect,
        'Correctly renders panel element.');

      assert.end();
    });


  nested.test('box prop:',
    assert => {
      const alert = renderElement(<Panel box/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-box');
      assert.ok(actual, 'Adds box class to panel element');

      assert.end();
    });


  nested.test('context prop = primary:',
    assert => {
      const alert = renderElement(<Panel context='primary'/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-box-primary');
      assert.ok(actual, 'Adds panel primary class to panel element');

      assert.end();
    });


  nested.test('context prop = primary:',
    assert => {
      const alert = renderElement(<Panel context='secondary'/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-box-secondary');
      assert.ok(actual, 'Adds panel secondary class to alepanelrt element');

      assert.end();
    });


  nested.test('divider prop:',
    assert => {
      const alert = renderElement(<Panel divider/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-divider');
      assert.ok(actual, 'Adds divider class to panel element');

      assert.end();
    });


  nested.test('header prop:',
    assert => {
      const alert = renderElement(<Panel header/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-header');
      assert.ok(actual, 'Adds header class to panel element');

      assert.end();
    });


  nested.test('hover prop:',
    assert => {
      const alert = renderElement(<Panel hover/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-hover');
      assert.ok(actual, 'Adds header class to panel element');

      assert.end();
    });


  nested.test('space prop:',
    assert => {
      const alert = renderElement(<Panel space/>).dom('div.uk-panel');
      const actual = alert.hasClass('uk-panel-space');
      assert.ok(actual, 'Adds space class to panel element');

      assert.end();
    });




});
