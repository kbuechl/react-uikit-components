'use strict';
import test from 'tape';
import Table from '../lib/table';
import React from 'react';
import renderElement from './helpers/renderElement';

const data = [
  {d1: 'data1', d2: 'data2'},
  {d1: 'data1', d2: 'data2'}
];


test('panel Component', nested => {
  nested.test('Renders table:',
    assert => {
      const Component = <Table condensed hover striped caption='Table caption' body={data}/>;
      const table = renderElement(Component).dom();

      const actual = table.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<table class="uk-table  uk-table-condensed uk-table-hover uk-table-striped">' +
        '<caption>Table caption</caption>' +
        '<tbody>' +
          '<tr><td>data1</td><td>data2</td></tr>' +
          '<tr><td>data1</td><td>data2</td></tr>' +
        '</tbody>' +
      '</table>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders table element.');

      assert.end();
    });


  nested.test('Renders Table component with overflow:',
    assert => {
      const Component = <Table condensed hover striped overflow body={data} />;
      const table = renderElement(Component).dom();

      const actual = table.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<div class="uk-overflow-container">' +
        '<table class="uk-table  uk-table-condensed uk-table-hover uk-table-striped">' +
          '<tbody>' +
            '<tr><td>data1</td><td>data2</td></tr>' +
            '<tr><td>data1</td><td>data2</td></tr>' +
          '</tbody>' +
        '</table>' +
      '</div>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders table element with scrollbars');

      assert.end();
    });


  nested.test('condensed prop:',
    assert => {
      const alert = renderElement(<Table condensed/>).dom('table.uk-table');
      const actual = alert.hasClass('uk-table-condensed');

      assert.ok(actual, 'Adds condensed class to table element');

      assert.end();
    });


  nested.test('hover prop:',
    assert => {
      const alert = renderElement(<Table hover/>).dom('table.uk-table');
      const actual = alert.hasClass('uk-table-hover');

      assert.ok(actual, 'Adds hover class to table element');

      assert.end();
    });


  nested.test('striped prop:',
    assert => {
      const alert = renderElement(<Table striped/>).dom('table.uk-table');
      const actual = alert.hasClass('uk-table-striped');

      assert.ok(actual, 'Adds striped class to table element');

      assert.end();
    });


  // nested.test('span column:',
  //   assert => {
  //     const items = [
  //       {
  //         name: 'OTIS',
  //         score: 39,
  //         height: 5.6
  //       }, {
  //         name: 'Ania',
  //         height: 6.10
  //       }, {
  //         name: 'jocelyn',
  //         score: 65,
  //         height: 4.8
  //       }
  //     ];
  //
  //     const Component = <Table head='*' body={items} />;
  //
  //     const table = renderElement(Component).dom();
  //
  //     const actual = table.html();
  //
  //     /* eslint-disable smells/no-complex-string-concat */
  //     const expect = '<table class="uk-table"><thead><tr><th>name</th><th>score</th><th>height</th></tr></thead><tbody><tr><td>OTIS</td><td>39</td><td>5.6</td></tr><tr><td colspan="2">Ania</td><td>6.1</td></tr><tr><td>jocelyn</td><td>65</td><td>4.8</td></tr></tbody></table>';
  //     /* eslint-enable no-complex-string-concat */
  //
  //     assert.equals(actual, expect,
  //       'Correctly spans columns when data is missing ');
  //
  //     assert.end();
  //   });


  nested.test('Renders headings from body:',
    assert => {
      const items = [
        {
          name: 'OTIS',
          score: 39,
          height: 5.6
        }, {
          name: 'Ania',
          score: -50,
          height: 6.10
        }, {
          name: 'jocelyn',
          score: 65,
          height: 4.8
        }
      ];

      const Component = <Table head='*' body={items} />;

      const table = renderElement(Component).dom();

      const actual = table.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<table class="uk-table"><thead><tr><th>name</th><th>score</th><th>height</th></tr></thead><tbody><tr><td>OTIS</td><td>39</td><td>5.6</td></tr><tr><td>Ania</td><td>-50</td><td>6.1</td></tr><tr><td>jocelyn</td><td>65</td><td>4.8</td></tr></tbody></table>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders headings from body keys');

      assert.end();
    });


  nested.test('sort prop:',
    assert => {
      const items = [
        {
          name: 'OTIS',
          score: 39,
          height: 4
        }, {
          name: 'jocelyn',
          score: -50,
          height: 5
        }, {
          name: 'jocelyn',
          score: 2,
          height: 4
        }, {
          name: 'jocelyn',
          score: 1,
          height: 4
        }, {
          name: 'Ania',
          score: 1,
          height: 9
        }
      ];

      const Component = <Table sort={['name', '-height', 'score']} head={'*'} body={items} />;

      const table = renderElement(Component).dom();

      const actual = table.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<table class="uk-table"><thead><tr><th>name</th><th>score</th><th>height</th></tr></thead><tbody><tr><td>Ania</td><td>1</td><td>9</td></tr><tr><td>OTIS</td><td>39</td><td>4</td></tr><tr><td>jocelyn</td><td>-50</td><td>5</td></tr><tr><td>jocelyn</td><td>1</td><td>4</td></tr><tr><td>jocelyn</td><td>2</td><td>4</td></tr></tbody></table>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders table element');

      assert.end();
    });

});
