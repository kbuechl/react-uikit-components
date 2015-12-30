'use strict';
import test from 'tape';
import Block from '../lib/block';
import React from 'react';
import renderElement from './helpers/renderElement';


test('block Component', nested => {
  nested.test('container prop:',
    assert => {
      const block = renderElement(<Block kitid='blk' container>This is a block</Block>).dom();

      const actual = block.html();
      const expect = '<div class="uk-block" data-kitid="blk"><div class="uk-container">This is a block</div></div>';
      assert.equals(actual, expect,
        'Adds corrrect tag for container');

      assert.end();
    });


  nested.test('context prop = default:',
    assert => {
      const block = renderElement(<Block context='default'/>).dom('div.uk-block');
      const actual = block.hasClass('uk-block-default');
      assert.ok(actual, 'Adds block default class to block element');

      assert.end();
    });


  nested.test('context prop = muted:',
    assert => {
      const block = renderElement(<Block context='muted'/>).dom('div.uk-block');
      const actual = block.hasClass('uk-block-muted');
      assert.ok(actual, 'Adds block muted class to block element');

      assert.end();
    });


  nested.test('context prop = primary:',
    assert => {
      const block = renderElement(<Block context='primary'/>).dom('div.uk-block');
      const actual = block.hasClass('uk-block-primary');
      assert.ok(actual, 'Adds block primary class to block element');

      assert.end();
    });


  nested.test('context prop = secondary:',
    assert => {
      const block = renderElement(<Block context='secondary'/>).dom('div.uk-block');
      const actual = block.hasClass('uk-block-secondary');
      assert.ok(actual, 'Adds block secondary class to block element');

      assert.end();
    });


  nested.test('large prop:',
    assert => {
      const block = renderElement(<Block large/>).dom('div.uk-block');
      const actual = block.hasClass('uk-block-large');
      assert.ok(actual, 'Adds block large class to block element');

      assert.end();
    });

});
