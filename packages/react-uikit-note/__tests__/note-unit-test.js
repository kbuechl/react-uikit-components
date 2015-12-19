'use strict';
import test from 'tape';
import Note from '../lib/note';
import React from 'react';
import renderElement from './helpers/renderElement';


test('note Component', nested => {
  nested.test('Renders note component.',
    assert => {
      const alert = renderElement(<Note>This is a note</Note>).dom();

      const actual = alert.html();
      const expect = '<p><span class="uk-badge">Note</span>  This is a note</p>';

      assert.equals(actual, expect,
        'Correctly renders alert component.');

      assert.end();
    });


  nested.test('Renders note component.',
    assert => {
      const alert = renderElement(<Note badge={{body: 'EXAMPLE', context:'danger'}}>This is a note</Note>).dom();

      const actual = alert.html();
      const expect = '<p><span class="uk-badge  uk-badge-danger">EXAMPLE</span>  This is a note</p>';

      assert.equals(actual, expect,
        'Correctly renders alert component.');

      assert.end();
    });
});
