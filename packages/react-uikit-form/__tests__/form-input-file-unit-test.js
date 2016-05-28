'use strict';
import test from 'tape';
import FormInput from '../lib/form-input';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('Form input file component.', nested => {
  nested.test('Renders form input file:',
    assert => {

      const actual = reactToString(
        <FormInput row type='file' file={{ body: 'Select' }} />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <div class="uk-form-file">
            <button class="uk-button">Select</button>
            <input type="file">
          </div>
        </div>
      `);

      assert.equals(actual, expect,
        'Correctly renders form select file.');

      assert.end();
    });


  nested.test('type=button prop:',
    assert => {

      const actual = reactToString(
        <FormInput row type='file' file={{ body: 'Select' }} />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <div class="uk-form-file">
            <button class="uk-button">Select</button>
            <input type="file">
          </div>
        </div>
      `);

      assert.equals(actual, expect,
        'Renders prop type button as form select file.');

      assert.end();
    });

  nested.test('type=link prop:',
    assert => {

      const actual = reactToString(
        <FormInput row type='file' file={{ body: 'Select', type: 'link' }} />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <div class="uk-form-file">
            <a>Select</a>
            <input type="file">
          </div>
        </div>
      `);

      assert.equals(actual, expect,
        'Renders prop type link as form select file.');

      assert.end();
    });


  nested.test('type=span prop:',
    assert => {

      const actual = reactToString(
        <FormInput row type='file' file={{ body: 'Select', type: 'span' }} />
      );

      const expect = htmlToString(`
        <div class="uk-form-row">
          <div class="uk-form-file">
            <span>Select</span>
            <input type="file">
          </div>
        </div>
      `);

      assert.equals(actual, expect,
        'Renders prop type span as form select file.');

      assert.end();
    });
});
