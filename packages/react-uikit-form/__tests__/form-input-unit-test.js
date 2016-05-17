'use strict';
import test from 'tape';
import FormInput from '../lib/form-input';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('form input Component.', nested => {
  nested.test('Renders form input component:',
    assert => {

      const actual = reactToString(
        <FormInput kitid='f1'/>
      );

      const expect = htmlToString(`
          <input type="text"  data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Correctly renders form input component');

      assert.end();
    });


  nested.test('row prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          kitid='f1'
          row
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <input type="text"  data-kitid="f1">
        </div>
      `);

      assert.equals(actual, expect,
        'Places input inside a form row.');

      assert.end();
    });


  nested.test('placeholder prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          placeholder='this is a placeholder'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" placeholder="this is a placeholder" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds a placeholder to form input component.');

      assert.end();
    });


  nested.test('disabled prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          disabled
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" disabled data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Disables form input component.');

      assert.end();
    });


  nested.test('context prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          context='danger'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-danger" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds context a to form input component.');

      assert.end();
    });


  nested.test('size=small prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          size='small'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-small" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds small size a to form input component.');

      assert.end();
    });


  nested.test('size=large prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          size='large'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-large" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds large size a to form input component.');

      assert.end();
    });


  nested.test('width=large prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          width='large'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-width-large" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds large width a to form input component.');

      assert.end();
    });


  nested.test('width=medium prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          width='medium'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-width-medium" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds medium width a to form input component.');

      assert.end();
    });


  nested.test('width=small prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          width='small'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-width-small" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds small width a to form input component.');

      assert.end();
    });


  nested.test('width=mini prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          width='mini'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-width-mini" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds mini width a to form input component.');

      assert.end();
    });


  nested.test('blank prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          blank
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <input type="text" class="uk-form-blank" data-kitid="f1">
      `);

      assert.equals(actual, expect,
        'Adds blank class a to form input component.');

      assert.end();
    });


  nested.test('label prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          label='This a label'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <label class="uk-form-label" data-kitid="label-f1">This a label</label>
          <input type="text" data-kitid="f1">
        </div>
      `);

      assert.equals(actual, expect,
        'Adds a label a to form input component.');

      assert.end();
    });


  nested.test('help=block prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          help={{
            type: 'block',
            text: 'This is help text'
          }}
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <input type="text" data-kitid="f1">
          <p class="uk-form-help-block" data-kitid="help-f1">This is help text</p>
        </div>
      `);

      assert.equals(actual, expect,
        'Adds help block type a to form input component.');

      assert.end();
    });


  nested.test('help=inline prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          help={{
            type: 'inline',
            text: 'This is help text'
          }}
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <input type="text" data-kitid="f1">
          <span class="uk-form-help-inline">This is help text</span>
        </div>
      `);

      assert.equals(actual, expect,
        'Adds help inline type a to form input component.');

      assert.end();
    });


  nested.test('help=inline prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          help={{
            type: 'inline',
            text: 'This is help text'
          }}
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <input type="text" data-kitid="f1">
          <span class="uk-form-help-inline">This is help text</span>
        </div>
      `);

      assert.equals(actual, expect,
        'Adds help inline type a to form input component.');

      assert.end();
    });


  nested.test('control prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          control
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-controls">
          <input type="text" data-kitid="f1">
        </div>
      `);

      assert.equals(actual, expect,
        'Places input inside a form control.');

      assert.end();
    });


  nested.test('control=text prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          control={{
            text: true
          }}
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-controls uk-form-controls-text">
          <input type="text" data-kitid="f1">
        </div>
      `);

      assert.equals(actual, expect,
        'Places input inside a form control text.');

      assert.end();
    });


  nested.test('icon prop:',
    assert => {

      const actual = reactToString(
        <FormInput
          icon='calendar'
          kitid='f1'
        />
      );

      const expect = htmlToString(`
        <div class="uk-form-icon">
          <i class="uk-icon-calendar" data-kitid="icon-f1"></i>
          <input type="text" icon="calendar" data-kitid="f1">
        </div>
      `);

      assert.equals(actual, expect,
        'Places input inside a form control icon.');

      assert.end();
    });

});
