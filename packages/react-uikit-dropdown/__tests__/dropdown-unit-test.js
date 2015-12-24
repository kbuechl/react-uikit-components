'use strict';
import test from 'tape';
import Dropdown from '../lib/dropdown';
import React from 'react';
import renderElement from './helpers/renderElement';


test('dropdown Component', nested => {
  nested.test('Renders dropdown component:',
    assert => {
      const Component = <Dropdown kitid='drop1' trigger={{body:'dropdown'}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom();

      const actual = dropdown.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = 'vvv';
      /* eslint-enable no-complex-string-concat */


      assert.equals(actual, expect,
        'Correctly renders dropdown component.');

      assert.end();
    });


});
