'use strict';
import test from 'tape';
import Text from '../lib/text';
import React from 'react';
import { htmlToString, reactToString } from './helpers/renderElement';


test('text Component', nested => {
  nested.test('Renders text component:',
    assert => {
      const actual = reactToString(<Text kitid='t1'>Hello</Text>);

      const expect = htmlToString(`<p data-kitid="t1">Hello</p>`);

      assert.equals(actual, expect,
        'Correctly renders text component.');

      assert.end();
    });


    nested.test('type=p prop:',
      assert => {
        const actual = reactToString(<Text kitid='t1' type='p'>Hello</Text>);

        const expect = htmlToString(`<p data-kitid="t1">Hello</p>`);

        assert.equals(actual, expect,
          'Correctly renders p type prop for text component.');

        assert.end();
      });


      nested.test('type=a prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='a'  href='#'>Hello</Text>);

          const expect = htmlToString(`<a href="#" data-kitid="t1">Hello</a>`);

          assert.equals(actual, expect,
            'Correctly renders a type prop for text component.');

          assert.end();
        });


      nested.test('type=em prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='em'>Hello</Text>);

          const expect = htmlToString(`<em data-kitid="t1">Hello</em>`);

          assert.equals(actual, expect,
            'Correctly renders em type prop for text component.');

          assert.end();
        });


      nested.test('type=strong prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='strong'>Hello</Text>);

          const expect = htmlToString(`<strong data-kitid="t1">Hello</strong>`);

          assert.equals(actual, expect,
            'Correctly renders strong type prop for text component.');

          assert.end();
        });


      nested.test('type=code prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='code'>Hello</Text>);

          const expect = htmlToString(`<code data-kitid="t1">Hello</code>`);

          assert.equals(actual, expect,
            'Correctly renders code type prop for text component.');

          assert.end();
        });


      nested.test('type=ins prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='ins'>Hello</Text>);

          const expect = htmlToString(`<ins data-kitid="t1">Hello</ins>`);

          assert.equals(actual, expect,
            'Correctly renders ins type prop for text component.');

          assert.end();
        });


      nested.test('type=mark prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='mark'>Hello</Text>);

          const expect = htmlToString(`<mark data-kitid="t1">Hello</mark>`);

          assert.equals(actual, expect,
            'Correctly renders mark type prop for text component.');

          assert.end();
        });


      nested.test('type=q prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='q'>Hello</Text>);

          const expect = htmlToString(`<q data-kitid="t1">Hello</q>`);

          assert.equals(actual, expect,
            'Correctly renders q type prop for text component.');

          assert.end();
        });


      nested.test('type=abbr prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='abbr'>Hello</Text>);

          const expect = htmlToString(`<abbr data-kitid="t1">Hello</abbr>`);

          assert.equals(actual, expect,
            'Correctly renders abbr type prop for text component.');

          assert.end();
        });


      nested.test('type=del prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='del'>Hello</Text>);

          const expect = htmlToString(`<del data-kitid="t1">Hello</del>`);

          assert.equals(actual, expect,
            'Correctly renders del type prop for text component.');

          assert.end();
        });


      nested.test('type=dfn prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='dfn'>Hello</Text>);

          const expect = htmlToString(`<dfn data-kitid="t1">Hello</dfn>`);

          assert.equals(actual, expect,
            'Correctly renders dfn type prop for text component.');

          assert.end();
        });


      nested.test('type=small prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='small'>Hello</Text>);

          const expect = htmlToString(`<small data-kitid="t1">Hello</small>`);

          assert.equals(actual, expect,
            'Correctly renders small type prop for text component.');

          assert.end();
        });


      nested.test('type=h1 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='h1'>Hello</Text>);

          const expect = htmlToString(`<h1 data-kitid="t1">Hello</h1>`);

          assert.equals(actual, expect,
            'Correctly renders h1 type prop for text component.');

          assert.end();
        });


      nested.test('type=h2 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='h2'>Hello</Text>);

          const expect = htmlToString(`<h2 data-kitid="t1">Hello</h2>`);

          assert.equals(actual, expect,
            'Correctly renders h2 type prop for text component.');

          assert.end();
        });


      nested.test('type=h3 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='h3'>Hello</Text>);

          const expect = htmlToString(`<h3 data-kitid="t1">Hello</h3>`);

          assert.equals(actual, expect,
            'Correctly renders h3 type prop for text component.');

          assert.end();
        });


      nested.test('type=h4 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='h4'>Hello</Text>);

          const expect = htmlToString(`<h4 data-kitid="t1">Hello</h4>`);

          assert.equals(actual, expect,
            'Correctly renders h4 type prop for text component.');

          assert.end();
        });


      nested.test('type=h5 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='h5'>Hello</Text>);

          const expect = htmlToString(`<h5 data-kitid="t1">Hello</h5>`);

          assert.equals(actual, expect,
            'Correctly renders h5 type prop for text component.');

          assert.end();
        });


      nested.test('type=h6 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='h6'>Hello</Text>);

          const expect = htmlToString(`<h6 data-kitid="t1">Hello</h6>`);

          assert.equals(actual, expect,
            'Correctly renders h6 type prop for text component.');

          assert.end();
        });


      nested.test('type=span prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='span'>Hello</Text>);

          const expect = htmlToString(`<span data-kitid="t1">Hello</span>`);

          assert.equals(actual, expect,
            'Correctly renders span type prop for text component.');

          assert.end();
        });


      nested.test('type=hr prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' type='hr' />);

          const expect = htmlToString(`<hr class="uk-article-divider null" data-kitid="t1">`);

          assert.equals(actual, expect,
            'Correctly renders hr type prop for text component.');

          assert.end();
        });


      nested.test('heading=h1 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' heading='h1'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-h1" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders h1 heading prop for text component.');

          assert.end();
        });


      nested.test('heading=h2 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' heading='h2'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-h2" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders h2 heading prop for text component.');

          assert.end();
        });


      nested.test('heading=h3 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' heading='h3'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-h3" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders h3 heading prop for text component.');

          assert.end();
        });


      nested.test('heading=h4 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' heading='h4'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-h4" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders h4 heading prop for text component.');

          assert.end();
        });


      nested.test('heading=h5 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' heading='h5'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-h5" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders h5 heading prop for text component.');

          assert.end();
        });


      nested.test('heading=h6 prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' heading='h6'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-h6" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders h6 heading prop for text component.');

          assert.end();
        });


      nested.test('bold prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' bold>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-bold" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders bold prop for text component.');

          assert.end();
        });


      nested.test('size=large prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' size='large'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-large" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders size large prop for text component.');

          assert.end();
        });


      nested.test('size=small prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' size='large'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-large" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders size small prop for text component.');

          assert.end();
        });


      nested.test('context=muted prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' context='muted'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-muted" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders context muted prop for text component.');

          assert.end();
        });


      nested.test('context=primary prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' context='primary'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-primary" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders context primary prop for text component.');

          assert.end();
        });


      nested.test('context=success prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' context='success'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-success" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders context success prop for text component.');

          assert.end();
        });


      nested.test('context=warning prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' context='warning'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-warning" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders context warning prop for text component.');

          assert.end();
        });


      nested.test('context=danger prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' context='danger'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-danger" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders context danger prop for text component.');

          assert.end();
        });


      nested.test('context=contrast prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' context='contrast'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-contrast" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders context contrast prop for text component.');

          assert.end();
        });


      nested.test('textAlign=left prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='left'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-left" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign left prop for text component.');

          assert.end();
        });


      nested.test('textAlign=lleftSmall prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='leftSmall'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-left-small" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign leftSmall prop for text component.');

          assert.end();
        });


      nested.test('textAlign=leftMedium prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='leftMedium'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-left-medium" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign leftMedium prop for text component.');

          assert.end();
        });


      nested.test('textAlign=center prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='center'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-center" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign center prop for text component.');

          assert.end();
        });


      nested.test('textAlign=centerSmall prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='centerSmall'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-center-small" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign centerSmall prop for text component.');

          assert.end();
        });


      nested.test('textAlign=centerMedium prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='centerMedium'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-center-medium" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign centerMedium prop for text component.');

          assert.end();
        });


      nested.test('textAlign=justify prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textAlign='justify'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-justify" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textAlign justify prop for text component.');

          assert.end();
        });


      nested.test('textWrap=truncate prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textWrap='truncate'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-truncate" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textWrap truncate prop for text component.');

          assert.end();
        });


      nested.test('textWrap=break prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textWrap='break'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-break" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textWrap break prop for text component.');

          assert.end();
        });


      nested.test('textWrap=nowrap prop:',
        assert => {
          const actual = reactToString(<Text kitid='t1' textWrap='nowrap'>Hello</Text>);

          const expect = htmlToString(`<p class="uk-text-nowrap" data-kitid="t1">Hello</p>`);

          assert.equals(actual, expect,
            'Correctly renders textWrap nowrap prop for text component.');

          assert.end();
        });




});
