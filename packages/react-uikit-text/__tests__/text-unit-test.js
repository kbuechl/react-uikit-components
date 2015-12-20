'use strict';
import test from 'tape';
import Text from '../lib/text';
import React from 'react';
import renderElement from './helpers/renderElement';


test('text Component', nested => {
  nested.test('Renders text component.',
    assert => {
      // const alert = renderElement(<Text>An alert box</Text>).dom('div.uk-text');

      assert.end();
    });
});
