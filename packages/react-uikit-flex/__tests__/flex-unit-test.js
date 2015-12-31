'use strict';
import test from 'tape';
import Flex from '../lib/flex';
import React from 'react';
import renderElement from './helpers/renderElement';


test('flex Component', nested => {
  nested.test('Renders flex component.',
    assert => {
      const flex = renderElement(<Flex kitid="flex1">This is a flexbox</Flex>).dom();

      const actualText = flex.html();
      const expectedText = '<div class="uk-flex" data-kitid="flex1">This is a flexbox</div>';
      assert.equals(actualText, expectedText,
        'Correctly renders flex element');

      assert.end();
    });


  nested.test('around prop.',
    assert => {
      const flex = renderElement(<Flex around />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-space-around');
      assert.ok(actual, 'Adds flex space around class to flex element');

      assert.end();
    });


  nested.test('center prop.',
    assert => {
      const flex = renderElement(<Flex center />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-center');
      assert.ok(actual, 'Adds flex center class to flex element');

      assert.end();
    });


  nested.test('direction = rowReverse.',
    assert => {
      const flex = renderElement(<Flex direction='rowReverse' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-row-reverse');
      assert.ok(actual, 'Adds flex direction row reverse class to flex element');

      assert.end();
    });


  nested.test('direction prop = column.',
    assert => {
      const flex = renderElement(<Flex direction='column' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-column');
      assert.ok(actual, 'Adds flex direction column class to flex element');

      assert.end();
    });


  nested.test('direction prop = columnReverse.',
    assert => {
      const flex = renderElement(<Flex direction='columnReverse' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-column uk-flex-column-reverse');
      assert.ok(actual, 'Adds flex direction column reverse class to flex element');

      assert.end();
    });


  nested.test('bottom prop.',
    assert => {
      const flex = renderElement(<Flex bottom />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-bottom');
      assert.ok(actual, 'Adds flex bottom class to flex element');

      assert.end();
    });


  nested.test('between prop.',
    assert => {
      const flex = renderElement(<Flex between />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-space-between');
      assert.ok(actual, 'Adds flex space between class to flex element');

      assert.end();
    });


  nested.test('middle prop.',
    assert => {
      const flex = renderElement(<Flex middle />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-middle');
      assert.ok(actual, 'Adds flex middle class to flex element');

      assert.end();
    });


  nested.test('grid prop.',
    assert => {
      const flex = renderElement(<Flex grid />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-grid');
      assert.ok(actual, 'Adds flex grid class to flex element');

      assert.end();
    });


  nested.test('right prop.',
    assert => {
      const flex = renderElement(<Flex right />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-right');
      assert.ok(actual, 'Adds flex right class to flex element');

      assert.end();
    });


  nested.test('top prop.',
    assert => {
      const flex = renderElement(<Flex top />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-top');
      assert.ok(actual, 'Adds flex top class to flex element');

      assert.end();
    });


  nested.test('row prop = wrap.',
    assert => {
      const flex = renderElement(<Flex row='wrap' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap');
      assert.ok(actual, 'Adds flex wrap class to flex element');

      assert.end();
    });


  nested.test('row prop = bottom.',
    assert => {
      const flex = renderElement(<Flex row='bottom' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap-bottom');
      assert.ok(actual, 'Adds flex wrap bottom class to flex element');

      assert.end();
    });


  nested.test('row prop = wrap.',
    assert => {
      const flex = renderElement(<Flex row='middle' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap-middle');
      assert.ok(actual, 'Adds flex wrap middle class to flex element');

      assert.end();
    });


  nested.test('row prop = top.',
    assert => {
      const flex = renderElement(<Flex row='top' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap-top');
      assert.ok(actual, 'Adds flex wrap top class to flex element');

      assert.end();
    });


  nested.test('row prop = between.',
    assert => {
      const flex = renderElement(<Flex row='between' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap-space-between');
      assert.ok(actual, 'Adds flex wrap space between class to flex element');

      assert.end();
    });


  nested.test('row prop = around.',
    assert => {
      const flex = renderElement(<Flex row='around' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap-space-around');
      assert.ok(actual, 'Adds flex wrap space around class to flex element');

      assert.end();
    });


  nested.test('row prop = reverse.',
    assert => {
      const flex = renderElement(<Flex row='reverse' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-wrap-reverse');
      assert.ok(actual, 'Adds flex wrap reverse class to flex element');

      assert.end();
    });


  nested.test('row prop = nowrap.',
    assert => {
      const flex = renderElement(<Flex row='nowrap' />).dom('div.uk-flex');
      const actual = flex.hasClass('uk-flex-nowrap');
      assert.ok(actual, 'Adds flex nowrap class to flex element');

      assert.end();
    });


  nested.test('row prop = nowrap.',
    assert => {
      const flex = renderElement(<Flex row='reverse around' />).dom();
      const actual = flex.html();
      const expect = '';

      assert.ok(actual, expect,
        'Adds flex nowrap class to flex element');

      assert.end();
    });

});
