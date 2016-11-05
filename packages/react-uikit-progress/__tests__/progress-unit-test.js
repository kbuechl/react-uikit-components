'use strict';
import test from 'tape';
import Progress from '../lib/progress';
import React from 'react';
import {
  htmlToString,
  reactToDom,
  reactToString
} from './helpers/renderElement';


test('Progress Component', nested => {
  nested.test('Renders emtpy bar component:',
    assert => {
      const actual = reactToString(
        <Progress
          kitid='p1'
          bar={0}
          body='0%'
        />
      );


      const expect = htmlToString(`
        <div class="uk-progress" data-kitid="p1">
          <div class="uk-progress-bar" style="width:0%;">0%</div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders empty bar component');

      assert.end();
    });


  nested.test('Renders component:',
    assert => {
      const actual = reactToString(
        <Progress
          kitid='p1'
          bar={40}
          body='40%'
        />
      );


      const expect = htmlToString(`
        <div class="uk-progress" data-kitid="p1">
          <div class="uk-progress-bar" style="width:40%;">40%</div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders component');

      assert.end();
    });


    nested.test('size mini prop:',
      assert => {
        const actual = reactToString(
          <Progress
            kitid='p1'
            bar={30}
            body='30%'
            size='mini'
          />
        );


        const expect = htmlToString(`
          <div class="uk-progress  uk-progress-mini" data-kitid="p1">
            <div class="uk-progress-bar" style="width:30%;">30%</div>
          </div>
        `);


        assert.equals(actual, expect,
          'Correctly renders size mini prop');

        assert.end();
      });


    nested.test('size small prop:',
      assert => {
        const actual = reactToString(
          <Progress
            kitid='p1'
            bar={30}
            body='30%'
            size='small'
          />
        );


        const expect = htmlToString(`
          <div class="uk-progress  uk-progress-small" data-kitid="p1">
            <div class="uk-progress-bar" style="width:30%;">30%</div>
          </div>
        `);


        assert.equals(actual, expect,
          'Correctly renders size small prop');

        assert.end();
      });


  nested.test('context success prop:',
    assert => {
      const actual = reactToString(
        <Progress
          kitid='p1'
          bar={30}
          body='30%'
          context='success'
        />
      );


      const expect = htmlToString(`
        <div class="uk-progress  uk-progress-success" data-kitid="p1">
          <div class="uk-progress-bar" style="width:30%;">30%</div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders context success prop');

      assert.end();
    });


  nested.test('context danger prop:',
    assert => {
      const actual = reactToString(
        <Progress
          kitid='p1'
          bar={30}
          body='30%'
          context='danger'
        />
      );


      const expect = htmlToString(`
        <div class="uk-progress  uk-progress-danger" data-kitid="p1">
          <div class="uk-progress-bar" style="width:30%;">30%</div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders context danger prop');

      assert.end();
    });

  nested.test('context warning prop:',
    assert => {
      const actual = reactToString(
        <Progress
          kitid='p1'
          bar={30}
          body='30%'
          context='warning'
        />
      );


      const expect = htmlToString(`
        <div class="uk-progress  uk-progress-warning" data-kitid="p1">
          <div class="uk-progress-bar" style="width:30%;">30%</div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders context warning prop');

      assert.end();
    });


  nested.test('striped prop:',
    assert => {
      const actual = reactToString(
        <Progress
          kitid='p1'
          bar={30}
          body='30%'
          striped={true}
        />
      );


      const expect = htmlToString(`
        <div class="uk-progress  uk-progress-striped" data-kitid="p1">
          <div class="uk-progress-bar" style="width:30%;">30%</div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders striped prop');

      assert.end();
    });
});
