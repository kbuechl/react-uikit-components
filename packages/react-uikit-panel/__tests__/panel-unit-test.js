'use strict';
import test from 'tape';
import Panel from '../lib/panel';
import React from 'react';
import {
  htmlToString,
  reactToDom,
  reactToString
} from '../../../common/helpers/renderElement';


test('panel Component', nested => {
  nested.test('Renders panel component:',
    assert => {
      const actual = reactToString(<Panel
        kitid='pan1'
        box
        title='Title'
        header
        space
        badge={{body: 'hot', context: 'danger'}}
      >
        This is a panel
      </Panel>);

      /* eslint-disable smells/no-complex-string-concat */
      const expect = htmlToString(
        `<div data-kitid="pan1" class="uk-panel  uk-panel-box uk-panel-header uk-panel-space">
          <span class="uk-badge  uk-badge-danger uk-panel-badge" data-kitid="pan1">hot</span>
          <h3 class="uk-panel-title"> Title</h3>
          This is a panel
        </div>
      `);

      /* eslint-enable no-complex-string-concat */


      assert.equals(actual, expect,
        'Correctly renders panel element.');

      assert.end();
    });


  nested.test('Renders panel component as link:',
    assert => {
      const actual = reactToString(<Panel
        kitid='pan1'
        box
        title='Link panel'
        type='link'
        link=''
        header
        space
        badge={{body: 'hot', context: 'danger'}}
      >
        This is a panel
      </Panel>);

      /* eslint-disable smells/no-complex-string-concat */
      const expect = htmlToString(
        `<a data-kitid="pan1" href=""><span class="uk-badge  uk-badge-danger uk-panel-badge" data-kitid="pan1">hot</span><h3 class="uk-panel-title"> Link panel</h3>This is a panel</a>`
      );
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders panel element.');

      assert.end();
    });


  nested.test('box prop:',
    assert => {
      const panel = reactToDom(<Panel box/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-box');
      assert.ok(actual, 'Adds box class to panel element');

      assert.end();
    });


  nested.test('context prop = primary:',
    assert => {
      const panel = reactToDom(<Panel context='primary'/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-box-primary');
      assert.ok(actual, 'Adds panel primary class to panel element');

      assert.end();
    });


  nested.test('context prop = primary:',
    assert => {
      const panel = reactToDom(<Panel context='secondary'/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-box-secondary');
      assert.ok(actual, 'Adds panel secondary class to alepanelrt element');

      assert.end();
    });


  nested.test('divider prop:',
    assert => {
      const panel = reactToDom(<Panel divider/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-divider');
      assert.ok(actual, 'Adds divider class to panel element');

      assert.end();
    });


  nested.test('header prop:',
    assert => {
      const panel = reactToDom(<Panel header/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-header');
      assert.ok(actual, 'Adds header class to panel element');

      assert.end();
    });


  nested.test('hover prop:',
    assert => {
      const panel = reactToDom(<Panel hover/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-hover');
      assert.ok(actual, 'Adds header class to panel element');

      assert.end();
    });


  nested.test('space prop:',
    assert => {
      const panel = reactToDom(<Panel space/>).dom('div.uk-panel');
      const actual = panel.hasClass('uk-panel-space');
      assert.ok(actual, 'Adds space class to panel element');

      assert.end();
    });

});
