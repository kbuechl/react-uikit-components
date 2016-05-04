'use strict';
import test from 'tape';
import Table from '../lib/table';
import React from 'react';
import {
  htmlToString,
  reactToDom,
  reactToString
} from './helpers/renderElement';


const data = [
  {d1: 'data1', d2: 'data2'},
  {d1: 'data1', d2: 'data2'}
];

const head = [
  'Heading',
  'Heading',
];


test('panel Component', nested => {
  nested.test('Renders table:',
    assert => {
      const actual = reactToString(<Table kitid='tbl1' caption='Generated table.' head={head} body={data}/>);

      const expect = htmlToString(`
        <table class="uk-table" data-kitid="tbl1">
          <caption>Generated table.</caption>
          <thead>
            <tr>
              <th>Heading</th>
              <th>Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr data-kitid="tablerow-0-tbl1">
              <td data-kitid="tabledata-[0, 0]-tbl1">data1</td>
              <td data-kitid="tabledata-[0, 1]-tbl1">data2</td>
            </tr>
            <tr data-kitid="tablerow-1-tbl1">
              <td data-kitid="tabledata-[1, 0]-tbl1">data1</td>
              <td data-kitid="tabledata-[1, 1]-tbl1">data2</td>
            </tr>
          </tbody>
        </table>
      `);

      assert.equals(actual, expect,
        'Correctly renders table element.');

      assert.end();
    });


  nested.test('Renders Table component with overflow:',
    assert => {
      const actual = reactToString(<Table kitid='tbl1' overflow body={data} head={head} />);

      const expect = htmlToString(`
        <div class="uk-overflow-container">
          <table class="uk-table" data-kitid="tbl1">
            <thead>
              <tr>
                <th>Heading</th>
                <th>Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr data-kitid="tablerow-0-tbl1">
                <td data-kitid="tabledata-[0, 0]-tbl1">data1</td>
                <td data-kitid="tabledata-[0, 1]-tbl1">data2</td>
              </tr>
                <tr data-kitid="tablerow-1-tbl1">
                <td data-kitid="tabledata-[1, 0]-tbl1">data1</td>
                <td data-kitid="tabledata-[1, 1]-tbl1">data2</td>
                </tr>
            </tbody>
          </table>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders table element with scrollbars');

      assert.end();
    });


  nested.test('condensed prop:',
    assert => {
      const alert = reactToDom(<Table condensed/>).dom('table.uk-table');
      const actual = alert.hasClass('uk-table-condensed');

      assert.ok(actual, 'Adds condensed class to table element');

      assert.end();
    });


  nested.test('hover prop:',
    assert => {
      const alert = reactToDom(<Table hover/>).dom('table.uk-table');
      const actual = alert.hasClass('uk-table-hover');

      assert.ok(actual, 'Adds hover class to table element');

      assert.end();
    });


  nested.test('striped prop:',
    assert => {
      const alert = reactToDom(<Table striped/>).dom('table.uk-table');
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
  //     const table = reactToDom(Component).dom();
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

      const actual = reactToString(<Table kitid='tbl1' head='*' body={items} />);

      const expect = htmlToString(`
        <table class="uk-table" data-kitid="tbl1">
          <thead>
            <tr>
              <th>name</th>
              <th>score</th>
              <th>height</th>
            </tr>
          </thead>
          <tbody>
          <tr data-kitid="tablerow-0-tbl1">
            <td colspan="1" data-kitid="tabledata-[0, 0]-tbl1">OTIS</td>
            <td colspan="1" data-kitid="tabledata-[0, 1]-tbl1">39</td>
            <td data-kitid="tabledata-[0, 2]-tbl1">5.6</td>
          </tr>
          <tr data-kitid="tablerow-1-tbl1">
            <td colspan="1" data-kitid="tabledata-[1, 0]-tbl1">Ania</td>
            <td colspan="1" data-kitid="tabledata-[1, 1]-tbl1">-50</td>
            <td data-kitid="tabledata-[1, 2]-tbl1">6.1</td>
          </tr>
          <tr data-kitid="tablerow-2-tbl1">
            <td colspan="1" data-kitid="tabledata-[2, 0]-tbl1">jocelyn</td>
            <td colspan="1" data-kitid="tabledata-[2, 1]-tbl1">65</td>
            <td data-kitid="tabledata-[2, 2]-tbl1">4.8</td>
          </tr>
        </tbody>
      </table>`);

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

      const actual = reactToString(<Table kitid='tbl1' sort={['name', '-height', 'score']} head={'*'} body={items} />);

      const expect = htmlToString(`
        <table class="uk-table" data-kitid="tbl1">
          <thead>
            <tr>
              <th>name</th>
              <th>score</th>
              <th>height</th>
            </tr>
          </thead>
          <tbody>
          <tr data-kitid="tablerow-0-tbl1">
            <td colspan="1" data-kitid="tabledata-[0, 0]-tbl1">Ania</td>
            <td colspan="1" data-kitid="tabledata-[0, 1]-tbl1">1</td>
            <td data-kitid="tabledata-[0, 2]-tbl1">9</td>
          </tr>
          <tr data-kitid="tablerow-1-tbl1">
            <td colspan="1" data-kitid="tabledata-[1, 0]-tbl1">OTIS</td>
            <td colspan="1" data-kitid="tabledata-[1, 1]-tbl1">39</td>
            <td data-kitid="tabledata-[1, 2]-tbl1">4</td>
          </tr>
          <tr data-kitid="tablerow-2-tbl1">
            <td colspan="1" data-kitid="tabledata-[2, 0]-tbl1">jocelyn</td>
            <td colspan="1" data-kitid="tabledata-[2, 1]-tbl1">-50</td>
            <td data-kitid="tabledata-[2, 2]-tbl1">5</td>
          </tr>
          <tr data-kitid="tablerow-3-tbl1">
            <td colspan="1" data-kitid="tabledata-[3, 0]-tbl1">jocelyn</td>
            <td colspan="1" data-kitid="tabledata-[3, 1]-tbl1">1</td>
            <td data-kitid="tabledata-[3, 2]-tbl1">4</td>
          </tr>
          <tr data-kitid="tablerow-4-tbl1">
            <td colspan="1" data-kitid="tabledata-[4, 0]-tbl1">jocelyn</td>
            <td colspan="1" data-kitid="tabledata-[4, 1]-tbl1">2</td>
            <td data-kitid="tabledata-[4, 2]-tbl1">4</td>
          </tr>
        </tbody>
      </table>`);

      assert.equals(actual, expect,
        'Correctly renders sorted table element');

      assert.end();
    });

});
