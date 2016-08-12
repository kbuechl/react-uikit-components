'use strict';
import test from 'tape';
import Button from '../lib/button';
import React from 'react';
import renderElement from './helpers/renderElement';


test('button Component', nested => {
  nested.test('type prop = button:',
    assert => {
      const button = renderElement(<Button kitid='butt' type='button'>This is a button</Button>).dom();

      const actualText = button.html();
      const expectedText = '<button data-kitid="butt" class="uk-button" type="button">This is a button</button>';
      assert.equals(actualText, expectedText,
        'Correctly renders button element as button');

      assert.end();
    });


  nested.test('type prop = link:',
    assert => {
      const button = renderElement(<Button kitid='butt' type='link'>This is a button</Button>).dom();

      const actualText = button.html();
      const expectedText = '<a data-kitid="butt" class="uk-button" href="#" role="button">This is a button</a>';
      assert.equals(actualText, expectedText,
        'Correctly renders button element as link.');

      assert.end();
    });


  nested.test('type prop = close:',
    assert => {
      const button = renderElement(<Button kitid='butt' type='close' />).dom();

      const actualText = button.html();
      const expectedText = '<a data-kitid="butt" class="uk-close uk-button" href="#"></a>';
      assert.equals(actualText, expectedText,
        'Correctly renders button element as close.');

      assert.end();
    });


  nested.test('block prop:',
    assert => {
      const button = renderElement(<Button block/>).dom('button.uk-button');
      const actual = button.hasClass('uk-width-1-1');
      assert.ok(actual, 'Adds button block class to button element');

      assert.end();
    });

  nested.test('disabled prop:',
    assert => {
      const button = renderElement(<Button kitid='butt' disabled />).dom();

      const actual = button.html();
      const expect = '<button disabled data-kitid="butt" class="uk-button" type="button"></button>';

      assert.equals(actual, expect,
        'Adds button disabled to button element');

      assert.end();
    });


  nested.test('context prop = primary:',
    assert => {
      const button = renderElement(<Button context='primary'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-primary');
      assert.ok(actual, 'Adds button primary class to button element');

      assert.end();
    });


  nested.test('context prop = success:',
    assert => {
      const button = renderElement(<Button context='success'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-success');
      assert.ok(actual, 'Adds button success class to button element');

      assert.end();
    });


  nested.test('context prop = danger:',
    assert => {
      const button = renderElement(<Button context='danger'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-danger');
      assert.ok(actual, 'Adds button danger class to button element');

      assert.end();
    });


  nested.test('context prop = link:',
    assert => {
      const button = renderElement(<Button context='link'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-link');
      assert.ok(actual, 'Adds button link class to button element');

      assert.end();
    });


  nested.test('size prop = mini:',
    assert => {
      const button = renderElement(<Button size='mini'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-mini');
      assert.ok(actual, 'Adds button mini class to button element');

      assert.end();
    });


  nested.test('size prop = small:',
    assert => {
      const button = renderElement(<Button size='small'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-small');
      assert.ok(actual, 'Adds button small class to button element');

      assert.end();
    });


  nested.test('size prop = large:',
    assert => {
      const button = renderElement(<Button size='large'/>).dom('button.uk-button');
      const actual = button.hasClass('uk-button-large');
      assert.ok(actual, 'Adds button large class to button element');

      assert.end();
    });

});
