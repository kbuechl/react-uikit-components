'use strict';
import test from 'tape';
import FormInput from '../lib/form-input';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('Form input password component.', nested => {
  nested.test('Renders form input password:',
    assert => {

      const state = {
        showPassword: true,
        hidePassword: false
      };

      const actualShow = reactToString(
        <FormInput
          kitid='p1'
          type='passwordToggle'
          toggle={{
            body   : state.showPassword ? 'Hide' : 'Show',
            icon   : state.showPassword ? 'eye' : 'eye-slash',
            type   : state.showPassword ? 'text' : 'password'
          }}
          placeholder='Password input'
        />
      );

      const expectShow = htmlToString(`
        <div class="uk-form-password">
          <input type="text" id="p1" placeholder="Password input" data-kitid="p1">
          <a class="uk-form-password-toggle" data-kitid="toggle-p1">Hide <i class="uk-icon-eye" data-kitid="icon-p1"></i></a>
        </div>
      `);

      assert.equals(actualShow, expectShow,
        'Correctly renders form input password.');


      const actualHide = reactToString(
        <FormInput
          kitid='p1'
          type='passwordToggle'
          toggle={{
            body   : state.hidePassword ? 'Hide' : 'Show',
            icon   : state.hidePassword ? 'eye' : 'eye-slash',
            type   : state.hidePassword ? 'text' : 'password'
          }}
          placeholder='Password input'
        />
      );

      const expectHide = htmlToString(`
        <div class="uk-form-password">
          <input type="password" id="p1" placeholder="Password input" data-kitid="p1">
          <a class="uk-form-password-toggle" data-kitid="toggle-p1">Show <i class="uk-icon-eye-slash" data-kitid="icon-p1"></i></a>
        </div>
      `);

      assert.equals(actualHide, expectHide,
        'Correctly renders form input password.');

      assert.end();
    });
});
