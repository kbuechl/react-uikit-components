'use strict';
import test from 'tape';
import List from '../lib/list';
import React from 'react';
import renderElement from './helpers/renderElement';


test('List Component', nested => {
  nested.test('Renders list component:',
    assert => {
      const Compoent = <List kitid='list#' items={['item', 'item', 'item']} />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ul data-kitid="list#" class="uk-list">' +
        '<li data-kitid="item-0-list#"> item </li>' +
        '<li data-kitid="item-1-list#"> item </li>' +
        '<li data-kitid="item-2-list#"> item </li>' +
      '</ul>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a list');

      assert.end();
    });


  nested.test('Renders description list component:',
    assert => {
      const Compoent = <List kitid='list#' type='description' />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<dl data-kitid="list#"></dl>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a description list ');

      assert.end();
    });


  nested.test('Renders unorderd list component:',
    assert => {
      const Compoent = <List kitid='list#' type='unorderd' items={['item', 'item', 'item']} />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ul data-kitid="list#" class="uk-list">' +
        '<li data-kitid="item-0-list#"> item </li>' +
        '<li data-kitid="item-1-list#"> item </li>' +
        '<li data-kitid="item-2-list#"> item </li>' +
      '</ul>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders an unorderd list');

      assert.end();
    });


  nested.test('Renders ordered list component:',
    assert => {
      const Compoent = <List kitid='list#' type='ordered' items={['item', 'item', 'item']} />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ol data-kitid="list#" class="uk-list">' +
        '<li data-kitid="item-0-list#"> item </li>' +
        '<li data-kitid="item-1-list#"> item </li>' +
        '<li data-kitid="item-2-list#"> item </li>' +
      '</ol>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders an ordered list');

      assert.end();
    });


  nested.test('line prop:',
    assert => {
      const listGroup = renderElement(<List line/>).dom('ul.uk-list');

      const actual = listGroup.hasClass('uk-list-line');

      assert.ok(actual,
        'Adds line class to list element');

      assert.end();
    });


  nested.test('striped prop:',
    assert => {
      const listGroup = renderElement(<List striped/>).dom('ul.uk-list');

      const actual = listGroup.hasClass('uk-list-striped');

      assert.ok(actual,
        'Adds striped class to list element');

      assert.end();
    });


  nested.test('space prop:',
    assert => {
      const listGroup = renderElement(<List space/>).dom('ul.uk-list');

      const actual = listGroup.hasClass('uk-list-space');

      assert.ok(actual,
        'Adds space class to list element');

      assert.end();
    });


  nested.test('description line prop:',
    assert => {
      const listGroup = renderElement(<List type='description' line/>).dom('dl');

      const actual = listGroup.hasClass('uk-description-list-line');

      assert.ok(actual,
        'Adds line class to description list element');

      assert.end();
    });


  nested.test('horizontal prop:',
    assert => {
      const listGroup = renderElement(<List type='description' horizontal />).dom('dl');

      const actual = listGroup.hasClass('uk-description-list-horizontal');

      assert.ok(actual,
        'Adds horizontal class to list element');

      assert.end();
    });
});
