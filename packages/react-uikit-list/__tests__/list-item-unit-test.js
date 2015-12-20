'use strict';
import test from 'tape';
import ListItem from '../lib/list-item';
import React from 'react';
import renderElement from './helpers/renderElement';


test('list-group Component', nested => {
  nested.test('Renders list item component:',
    assert => {
      const Compoent = <ListItem body='Item' />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<li> Item</li>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a list item element.');

      assert.end();
    });


  nested.test('Renders list link item component with badge:',
    assert => {
      const Compoent = <ListItem
        body='Item'
        badge={{body: '2', notification: true}}
        href='#'
      />;

      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<li href="#">' +
        '<a href="#"> Item <span class="uk-badge  uk-badge-notification">2</span></a>' +
      '</li>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a list item element.');

      assert.end();
    });


  nested.test('active prop:',
    assert => {
      const listItem = renderElement(<ListItem active>This is a badge block</ListItem>).dom('li');

      const actual = listItem.hasClass('uk-active');

      assert.ok(actual,
        'Adds active class to list item element.');

      assert.end();
    });
});
