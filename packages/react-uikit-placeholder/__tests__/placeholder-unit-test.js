'use strict';
import test from 'tape';
import Placeholder from '../lib/placeholder';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('placeholder Component', nested => {
  nested.test('Renders placeholder component.',
    assert => {
      const actual = reactToString(<Placeholder kitid='p1' />);

      const expect = htmlToString(`
        <div class="uk-placeholder" data-kitid="p1"></div>
      `);

      assert.equals(actual, expect,
        'Correctly renders placeholder element');


      assert.end();
    });
});
