'use strict';
import test from 'tape';
import ButtonGroup from '../lib/button-group';
import React from 'react';
import renderElement from './helpers/renderElement';


test('block Component', nested => {
  nested.test('context prop = primary:',
    assert => {
      const buttonGroup = renderElement(<ButtonGroup />).dom();

      const actual = buttonGroup.html();
      const expect = '<div class="uk-button-group"></div>';

      assert.equals(actual, expect,
        'Adds button primary class to button element');

      assert.end();
    });

});
