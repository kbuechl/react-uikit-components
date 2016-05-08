'use strict';
import test from 'tape';
import Nav from '../lib/nav';
import React from 'react';
import renderElement from './helpers/renderElement';


test('nav Component', nested => {
  nested.test('Renders nav items:',
    assert => {
      const Component = <Nav type='side' items={[
        {
          label: 'Home',
          href: '#',
          active: true
        },
        {
          label: 'About',
          href: '#'
        }
      ]} />;

      const nav = renderElement(Component).dom();

      const actual = nav.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<ul class="uk-nav  uk-nav-side">' +
        '<li label="Home" href="#" class="uk-active"><a href="#">Home</a></li>' +
        '<li label="About" href="#"><a href="#">About</a></li>' +
      '</ul>';
      /* eslint-enable no-complex-string-concat */


      assert.equals(actual, expect,
        'Correctly renders nav items.');

      assert.end();
    });


  nested.test('type prop = dropdown:',
    assert => {
      const Component = <Nav type='dropdown' />;

      const nav = renderElement(Component).dom();

      const actual = nav.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<div class="uk-dropdown"><ul class="uk-nav uk-nav-dropdown"></ul></div>';
      /* eslint-enable no-complex-string-concat */


      assert.equals(actual, expect,
        'Correctly renders nav items.');

      assert.end();
    });


});
