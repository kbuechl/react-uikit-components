'use strict';
import test from 'tape';
import React from 'react';
import { element } from '../lib/uikit';
import renderElement from './helpers/renderElement';




test('UIkit Element', assert => {
  const TestComponent = element;
  const component = renderElement(<TestComponent visible='touch small' margin='top left' padding='bottom right'/>).dom();

  const actual = component.html();
  const expect = '<div class="uk-margin-top uk-margin-left uk-padding-bottom uk-padding-right uk-visible-touch uk-visible-small"></div>';

  assert.equals(actual, expect, 'creates a gerneic uikit element');

  assert.end();
});
