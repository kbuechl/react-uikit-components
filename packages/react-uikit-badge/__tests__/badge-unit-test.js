'use strict';
import test from 'tape';
import Badge from '../lib/badge';
import React from 'react';
import renderElement from '../../../common/helpers/renderElement';


test('Badge Component', nested => {
  nested.test('Renders badge component.',
    assert => {
      const badge = renderElement(<Badge kitid='bdg'>This is a badge</Badge>).dom();

      const actual = badge.html();
      const expect = '<span class="uk-badge" data-kitid="bdg">This is a badge</span>';
      assert.equals(actual, expect,
        'Correctly renders article component.');

      assert.end();
    });


  nested.test('block prop:',
    assert => {
      const badge = renderElement(<Badge kitid='bdg' block>This is a badge block</Badge>).dom();

      const actual = badge.html();
      const expect = '<div class="uk-badge" data-kitid="bdg">This is a badge block</div>';
      assert.equals(actual, expect,
        'Renders badge as a block');

      assert.end();
    });


  nested.test('context prop = success:',
    assert => {
      const badge = renderElement(<Badge context='success'/>).dom('span.uk-badge');
      const actual = badge.hasClass('uk-badge-success');
      assert.ok(actual, 'Adds badge success class to badge element');

      assert.end();
    });


  nested.test('context prop = warning:',
    assert => {
      const badge = renderElement(<Badge context='warning'/>).dom('span.uk-badge');
      const actual = badge.hasClass('uk-badge-warning');
      assert.ok(actual, 'Adds badge warning class to badge element');

      assert.end();
    });


  nested.test('context prop = danger:',
    assert => {
      const badge = renderElement(<Badge context='danger'/>).dom('span.uk-badge');
      const actual = badge.hasClass('uk-badge-danger');
      assert.ok(actual, 'Adds badge danger class to badge element');

      assert.end();
    });


  nested.test('notification prop:',
    assert => {
      const badge = renderElement(<Badge notification/>).dom('span.uk-badge.uk-badge');
      const actual = badge.hasClass('uk-badge-notification');
      assert.ok(actual, 'Adds badge notification class to badge element');

      assert.end();
    });

});
