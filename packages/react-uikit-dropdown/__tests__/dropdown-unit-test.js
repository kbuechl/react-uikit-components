'use strict';
import test from 'tape';
import Dropdown from '../lib/dropdown';
import React from 'react';
import renderElement from './helpers/renderElement';


test('dropdown Component', nested => {
  nested.test('Renders dropdown component:',
    assert => {
      const Component = <Dropdown kitid='drop1' trigger={{body:'dropdown'}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom();

      const actual = dropdown.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<div aria-haspopup="true" aria-expanded="false" data-kitid="dropContainer-drop1">' +
        '<button data-kitid="dropTrigger-drop1" class="uk-button  uk-width-1-1" type="button">' +
          'dropdown <i class="uk-icon-caret-down"></i>' +
          '</button>' +
        '<div data-kitid="dropbody-drop1" class="uk-dropdown">' +
        'this is a drop down</div>' +
      '</div>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders dropdown component.');

      assert.end();
    });
    

  nested.test('blank prop:',
    assert => {
      const Component = <Dropdown
        blank
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('div.uk-dropdown-blank');

      const actual = dropdown.hasClass('uk-dropdown-blank');

      assert.ok(actual, 'Adds blank dropdown class dropdown to dropdown element.');

      assert.end();
    });


  nested.test('small prop:',
    assert => {
      const Component = <Dropdown
        small
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('div.uk-dropdown');

      const actual = dropdown.hasClass('uk-dropdown-small');

      assert.ok(actual, 'Adds dropdown small class dropdown to dropdown element.');

      assert.end();
    });


  nested.test('scrollable prop:',
    assert => {
      const Component = <Dropdown
        scrollable
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('div.uk-dropdown');

      const actual = dropdown.hasClass('uk-dropdown-scrollable');

      assert.ok(actual, 'Adds dropdown scrollable class dropdown to dropdown element.');

      assert.end();
    });


  nested.test('type prop = button:',
    assert => {
      const Component = <Dropdown
        type='button'
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('div');

      const actual = dropdown.hasClass('uk-button-dropdown');

      assert.ok(actual, 'Adds dropdown button class to dropdown container element.');

      assert.end();
    });


  nested.test('type prop = button-group:',
    assert => {
      const Component = <Dropdown
        type='button-group'
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('div');

      const actual = dropdown.hasClass('uk-button-group');

      assert.ok(actual, 'Adds dropdown button class to dropdown container element.');

      assert.end();
    });


  nested.test('type prop = navbar:',
    assert => {
      const Component = <Dropdown
        type='navbar'
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('li');

      const actual = dropdown.hasClass('uk-parent');

      assert.ok(actual, 'Adds parennt class to dropdown container element.');

      assert.end();
    });


  nested.test('grid prop:',
    assert => {
      const Component = <Dropdown
        type='navbar'
        kitid='drop1'
        trigger={{body:'dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }}}>
        this is a drop down
      </Dropdown>;

      const dropdown = renderElement(Component).dom('li');

      const actual = dropdown.hasClass('uk-parent');

      assert.ok(actual, 'Adds parennt class to dropdown container element.');

      assert.end();
    });


});
