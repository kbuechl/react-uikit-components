'use strict';

import test from 'tape';
import Grid from '../lib/grid';
import React from 'react';
import renderElement from './helpers/renderElement';


test('Grid Component', nested => {
  nested.test('Renders component:',
    assert => {
      const grid = renderElement(<Grid />).dom();

      const actual = grid.html();
      const expect = '<div class="uk-grid"></div>';
      assert.equals(actual, expect,
        'Correctly renders grid element');

      assert.end();
    });


  nested.test('type prop = block:',
    assert => {
      const grid = renderElement(<Grid type='block'/>).dom();

      const actual = grid.html();
      const expect = '<div class="uk-grid"></div>';
      assert.equals(actual, expect,
        'Correctly renders grid element');

      assert.end();
    });


  nested.test('type prop = list:',
    assert => {
      const grid = renderElement(<Grid type='list'/>).dom();

      const actual = grid.html();
      const expect = '<ul class="uk-grid"></ul>';
      assert.equals(actual, expect,
        'Correctly renders grid element');

      assert.end();
    });


  nested.test('divider prop:',
    assert => {
      const grid = renderElement(<Grid divider />).dom('div.uk-grid');
      const actual = grid.hasClass('uk-grid-divider');
      assert.ok(actual, 'Adds divider grid class to grid element');

      assert.end();
    });


  nested.test('gutter prop = small:',
    assert => {
      const grid = renderElement(<Grid gutter='small' />).dom('div.uk-grid');
      const actual = grid.hasClass('uk-grid-small');
      assert.ok(actual, 'Adds small grid gutter class to grid element');

      assert.end();
    });


  nested.test('gutter prop = medium:',
    assert => {
      const grid = renderElement(<Grid gutter='medium' />).dom('div.uk-grid');
      const actual = grid.hasClass('uk-grid-medium');

      assert.ok(actual, 'Adds medium grid gutter class to grid element');

      assert.end();
    });


  nested.test('gutter prop = collapse:',
    assert => {
      const grid = renderElement(<Grid gutter='collapse' />).dom('div.uk-grid');
      const actual = grid.hasClass('uk-grid-collapse');

      assert.ok(actual, 'Adds collapse grid gutter class to grid element');


      assert.end();
    });


  nested.test('large prop:',
    assert => {
      const grid = renderElement(<Grid large='2-3' />).dom('div.uk-grid');

      const actual = grid.hasClass('uk-grid-width-large-2-3');
      assert.ok(actual, 'Adds large grid class to grid element');

      const notOk = grid.hasClass('uk-grid-width-large-9-2');
      assert.notOk(notOk, 'Does not add invalid large width grid class to grid element');

      assert.end();
    });


  nested.test('match prop:',
    assert => {
      const grid = renderElement(<Grid match />).dom('div.uk-grid');
      const actual = grid.hasClass('uk-grid-match');

      assert.ok(actual, 'Adds large grid class to grid element');

      assert.end();
    });


  nested.test('medium prop:',
    assert => {
      const grid = renderElement(<Grid medium='2-3' />).dom('div.uk-grid');

      const actual = grid.hasClass('uk-grid-width-medium-2-3');
      assert.ok(actual, 'Adds large grid class to grid element');

      const notOk = grid.hasClass('uk-grid-width-medium-9-2');
      assert.notOk(notOk, 'Does not add invalid medium width grid class to grid element');


      assert.end();
    });


  nested.test('small prop:',
    assert => {
      const grid = renderElement(<Grid small='2-3' />).dom('div.uk-grid');

      const actual = grid.hasClass('uk-grid-width-small-2-3');
      assert.ok(actual, 'Adds large grid class to grid element');

      const notOk = grid.hasClass('uk-grid-width-small-9-2');
      assert.notOk(notOk, 'Does not add invalid small width grid class to grid element');


      assert.end();
    });


  nested.test('widths prop:',
    assert => {
      const grid = renderElement(<Grid widths='1-2' />).dom('div.uk-grid');

      const actual = grid.hasClass('uk-grid-width-1-2');
      assert.ok(actual, 'Adds widths grid class to grid element');

      const notOk = grid.hasClass('uk-grid-width-9-2');
      assert.notOk(notOk, 'Does not add invalid widths grid class to grid element');


      assert.end();
    });


  nested.test('xlarge prop:',
    assert => {
      const grid = renderElement(<Grid xlarge='2-3' />).dom('div.uk-grid');

      const actual = grid.hasClass('uk-grid-width-xlarge-2-3');
      assert.ok(actual, 'Adds large grid class to grid element');

      const notOk = grid.hasClass('uk-grid-width-xlarge-9-2');
      assert.notOk(notOk, 'Does not add invalid xlarge width grid class to grid element');


      assert.end();
    });

  nested.test('indent prop:',
    assert => {
      const grid = renderElement(<Grid indent/>).dom();

      const actual = grid.html();
      const expect = '<div style="margin-left:0px;" class="uk-grid"></div>';
      assert.equals(actual, expect,
        'indent grid');

      assert.end();
    });

});
