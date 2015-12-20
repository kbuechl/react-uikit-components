'use strict';
import test from 'tape';
import List from '../lib/list';
import React from 'react';
import renderElement from './helpers/renderElement';


test.skip('List Component', nested => {
  nested.test('Renders list component:',
    assert => {
      const Compoent = <List items={['item', 'item', 'item']} />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ul class="uk-list">' +
        '<li> item</li>' +
        '<li> item</li>' +
        '<li> item</li>' +
      '</ul>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a list');

      assert.end();
    });


  nested.test('Renders description list component:',
    assert => {
      const Compoent = <List type='description' />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<dl></dl>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a description list ');

      assert.end();
    });


  nested.test('Renders unorderd list component:',
    assert => {
      const Compoent = <List type='unorderd' items={['item', 'item', 'item']} />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ul class="uk-list">' +
        '<li> item</li>' +
        '<li> item</li>' +
        '<li> item</li>' +
      '</ul>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders an unorderd list');

      assert.end();
    });


  nested.test('Renders ordered list component:',
    assert => {
      const Compoent = <List type='ordered' items={['item', 'item', 'item']} />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ol class="uk-list">' +
        '<li> item</li>' +
        '<li> item</li>' +
        '<li> item</li>' +
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
