'use strict';
import test from 'tape';
import Form from '../lib/form';
import FormInput from '../lib/form-input';
import React from 'react';
import { htmlToString, reactToString } from './helpers/renderElement';


test('form Component.', nested => {
  nested.test('Renders form component:',
    assert => {

      const actual = reactToString(
        <Form kitid='f1'/>
      );

      const expect = '<form class="uk-form" data-kitid="f1"></form>';

      assert.equals(actual, expect,
        'Correctly renders form component');

      assert.end();
    });


  nested.test('layout=stacked prop:',
    assert => {

      const actual = reactToString(
        <Form kitid='f1' layout='stacked'>
          <FormInput
            label='This a label'
            kitid='f1'
          />
          <FormInput
            label='This a label'
            kitid='f2'
          />
        </Form>
      );

      const expect = htmlToString(`
        <form class="uk-form uk-form-stacked" data-kitid="f1">
          <div class="uk-form-row">
            <label class="uk-form-label" for="f1" data-kitid="label-f1">This a label&#xA0;</label>
            <div class="uk-form-controls">
              <input type="text" id="f1" data-kitid="f1">
            </div>
          </div>
          <div class="uk-form-row">
            <label class="uk-form-label" for="f2" data-kitid="label-f2">This a label&#xA0;</label>
            <div class="uk-form-controls">
              <input type="text" id="f2" data-kitid="f2">
            </div>
          </div>
        </form>
      `);

      assert.equals(actual, expect,
        'Adds stacked class to form component');

      assert.end();
    });


  nested.test('layout=horizontal prop:',
    assert => {

      const actual = reactToString(
        <Form kitid='f1' layout='horizontal'>
          <FormInput
            label='This a label'
            kitid='f1'
          />
        </Form>
      );

      const expect = htmlToString(`
        <form class="uk-form uk-form-horizontal" data-kitid="f1">
          <div class="uk-form-row">
            <label class="uk-form-label" for="f1" data-kitid="label-f1">This a label&#xA0;</label>
            <div class="uk-form-controls">
              <input type="text" id="f1" data-kitid="f1">
            </div>
          </div>
        </form>
      `);

      assert.equals(actual, expect,
        'Adds horizontal class to form component');

      assert.end();
    });
});
