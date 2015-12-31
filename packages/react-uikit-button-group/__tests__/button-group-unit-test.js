'use strict';
import test from 'tape';
import ButtonGroup from '../lib/button-group';
import React from 'react';
import renderElement from './helpers/renderElement';


test('block Component', nested => {
  nested.test('context prop = primary:',
    assert => {
      const buttonGroup = renderElement(<ButtonGroup kitid='b1'/>).dom();

      const actual = buttonGroup.html();
      const expect = '<div class="uk-button-group" data-kitid="b1"></div>';

      assert.equals(actual, expect,
        'Adds button primary class to button element');

      assert.end();
    });

});
