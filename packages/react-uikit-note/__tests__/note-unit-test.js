'use strict';
import test from 'tape';
import Note from '../lib/note';
import React from 'react';
import renderElement from './helpers/renderElement';


test('note Component', nested => {
  nested.test('Renders note component.',
    assert => {
      const alert = renderElement(<Note kitid='n1'>This is a note</Note>).dom();

      const actual = alert.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<p data-kitid="n1">' +
        '<span class="uk-badge" data-kitid="badge-n1">Note</span>  This is a note' +
      '</p>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders alert component.');

      assert.end();
    });


  nested.test('Renders note component.',
    assert => {
      const alert = renderElement(<Note kitid='n1' badge={{body: 'EXAMPLE', context:'danger'}}>This is a note</Note>).dom();

      const actual = alert.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<p data-kitid="n1">' +
        '<span class="uk-badge  uk-badge-danger" data-kitid="badge-n1">EXAMPLE</span>  This is a note' +
      '</p>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders alert component.');

      assert.end();
    });
});
