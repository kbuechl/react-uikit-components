'use strict';
import test from 'tape';
import FormInput from '../lib/form-input';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('Form input select component.', nested => {
  nested.test('Renders form input select:',
    assert => {

      const actual = reactToString(
        <FormInput
          kitid='f1'
          label='Select'
          button={{ body: 'Option 1', type: 'button' }}
          type='select'
          options={[
            { value: 1, body: 'Option 1' },
            { value: 2, body: 'Option 2' },
            { value: 3, body: 'Option 3' }
          ]}
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <label class="uk-form-label" for="f1" data-kitid="label-f1">Select&#xA0;</label>
          <div class="uk-button uk-form-select" data-kitid="f1">
            <span>Option 1 <i class="uk-icon-caret-down" data-kitid="icon-f1"></i></span>
            <select type="select">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders form select input.');

      assert.end();
    });


  nested.test('link prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          kitid='f1'
          label='Select'
          button={{ body: 'Option 1', type: 'link' }}
          type='select'
          options={[
            { value: 1, body: 'Option 1' },
            { value: 2, body: 'Option 2' },
            { value: 3, body: 'Option 3' }
          ]}
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <label class="uk-form-label" for="f1" data-kitid="label-f1">Select&#xA0;</label>
          <div class="uk-form-select" data-kitid="f1">
            <a>Option 1 <i class="uk-icon-caret-down" data-kitid="icon-f1"></i></a>
            <select type="select">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders form select input.');

      assert.end();
    });

  nested.test('buttun prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          kitid='f1'
          label='Select'
          button={{ body: 'Option 1', type: 'button' }}
          type='select'
          icon='cog'
          options={[
            { value: 1, body: 'Option 1' },
            { value: 2, body: 'Option 2' },
            { value: 3, body: 'Option 3' }
          ]}
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <label class="uk-form-label" for="f1" data-kitid="label-f1">Select&#xA0;</label>
          <div class="uk-button uk-form-select" data-kitid="f1">
            <span>Option 1 <i class="uk-icon-cog" data-kitid="icon-f1"></i></span>
            <select type="select">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              </select>
            </div>
          </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders form select input.');

      assert.end();
    });


  nested.test('Renders form input select',
    assert => {

      const actual = reactToString(
        <FormInput
          kitid='f1'
          label='Select'
          button={{ body: 'Option 1', type: 'span' }}
          type='select'
          icon='cog'
          options={[
            { value: 1, body: 'Option 1' },
            { value: 2, body: 'Option 2' },
            { value: 3, body: 'Option 3' }
          ]}
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <label class="uk-form-label" for="f1" data-kitid="label-f1">Select&#xA0;</label>
          <div class="uk-form-select" data-kitid="f1">
            <span>Option 1 <i class="uk-icon-cog" data-kitid="icon-f1"></i></span>
            <select type="select">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              </select>
            </div>
          </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders form select input.');

      assert.end();
    });
});
