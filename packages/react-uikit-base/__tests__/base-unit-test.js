'use strict';
import test from 'tape';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import uikit from '../lib/uikit';
import dom from 'cheerio';
import ufunc from 'ufunc';


const renderMarkup = ReactDOMServer.renderToStaticMarkup;


class Component extends React.Component {
  render () {
    const $props = this.props;

    const cssClassNames = ufunc.cleanAll([
      $props.classes
    ]).join(' ');

    return <div className={ufunc.maybe(null)(cssClassNames)}>
      {$props.children}
    </div>;
  }
}


test('UIkit Component', nested => {
  nested.test('Component tag renders.',
    assert => {
      const TestComponent = uikit(Component);
      const element = <TestComponent />;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').get(0).tagName;
      const expect = 'div';

      assert.equals(actual, expect, 'Components Root tag is rendered correctly.');

      assert.end();
    });


  nested.test('Children renders',
    assert => {
      const TestComponent = uikit(Component);
      const element = <TestComponent>
        Hello, world
      </TestComponent>;

      const $ = dom.load(renderMarkup(element));

      const actual = $('div').text();
      const expect = 'Hello, world';

      assert.equals(actual, expect, 'Childern is rendered correctly.');

      assert.end();
    });


  // align
  nested.test('align prop = left.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent align='left'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-align-left');

      assert.ok(actual, 'Adds left align class.');

      assert.end();
    });


  nested.test('align prop = right.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent align='right'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-align-right');

      assert.ok(actual, 'Adds right align class.');

      assert.end();
    });


  nested.test('align prop = middle left.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent align='middleLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-align-medium-left');

      assert.ok(actual, 'Adds middle left align class.');

      assert.end();
    });


  nested.test('align prop = middle right.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent align='middleRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-align-medium-right');

      assert.ok(actual, 'Adds middle right align class.');

      assert.end();
    });


  nested.test('align prop = center.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent align='center'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-align-center');

      assert.ok(actual, 'Adds center align class.');

      assert.end();
    });


  // borderRadius
  nested.test('borderRadius prop = rounded.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent borderRadius='rounded'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-border-rounded');

      assert.ok(actual, 'Adds rounded border radius class.');

      assert.end();
    });


  nested.test('borderRadius prop = circle.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent borderRadius='circle'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-border-circle');

      assert.ok(actual, 'Adds circle border radius class.');

      assert.end();
    });


  // Clear
  nested.test('clear prop = fix.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent clear='fix'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-clearfix');

      assert.ok(actual, 'Adds clearfix class.');

      assert.end();
    });


  nested.test('clear prop = nbfc.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent clear='nbfc'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-nbfc');

      assert.ok(actual, 'Adds nbfc class.');

      assert.end();
    });


  nested.test('clear prop = alt.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent clear='alt'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-nbfc-alt');

      assert.ok(actual, 'Adds nbfc alt class.');

      assert.end();
    });


  // center
  nested.test('center prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent center/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-container-center');

      assert.ok(actual, 'Adds center container class.');

      assert.end();
    });


  // close
  nested.test('close prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent close/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-close');

      assert.ok(actual, 'Adds close class.');

      assert.end();
    });


  // col
  nested.test('col prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent col='1-6'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-width-1-6');

      assert.ok(actual, 'Adds correct width class.');

      assert.end();
    });


  // col small
  nested.test('colsSmall prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent colsSmall='1-6'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-width-small-1-6');

      assert.ok(actual, 'Adds correct small width class.');

      assert.end();
    });


  // col medium
  nested.test('colsMedium prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent colsMedium='1-6'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-width-medium-1-6');

      assert.ok(actual, 'Adds correct medium width class.');

      assert.end();
    });


  // col large
  nested.test('colsLarge prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent colsLarge='1-6'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-width-large-1-6');

      assert.ok(actual, 'Adds correct large width class.');

      assert.end();
    });


  // contrast
  nested.test('contrast prop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent contrast/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-contrast');

      assert.ok(actual, 'Adds contrast class.');

      assert.end();
    });


  // display
  nested.test('display prop = block.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent display='block'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-display-block');

      assert.ok(actual, 'Adds block display class.');

      assert.end();
    });


  nested.test('display prop = inline.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent display='inline'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-display-inline');

      assert.ok(actual, 'Adds inline display class.');

      assert.end();
    });


  nested.test('display prop = inlineBlock.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent display='inlineBlock'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-display-inline-block');

      assert.ok(actual, 'Adds inlineBlock display class.');

      assert.end();
    });


  // float
  nested.test('float prop = left.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent float='left'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-float-left');

      assert.ok(actual, 'Adds left float class.');

      assert.end();
    });


  nested.test('float prop = right.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent float='right'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-float-right');

      assert.ok(actual, 'Adds right float class.');

      assert.end();
    });


  nested.test('float prop = clear.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent float='clear'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-clearfix');

      assert.ok(actual, 'Adds clearfix class.');

      assert.end();
    });


  // hidden
  nested.test('hidden prop = all.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent hidden='all'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-hidden');

      assert.ok(actual, 'Adds hidden class.');

      assert.end();
    });


  nested.test('hidden prop = invisible.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent hidden='invisible'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-invisible');

      assert.ok(actual, 'Adds invisible class.');

      assert.end();
    });


  nested.test('hidden prop = small.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent hidden='small'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-hidden-small');

      assert.ok(actual, 'Adds small hidden class.');

      assert.end();
    });


  nested.test('hidden prop = large.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent hidden='large'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-hidden-large');

      assert.ok(actual, 'Adds large hidden class.');

      assert.end();
    });


  nested.test('hidden prop = medium.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent hidden='medium'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-hidden-medium');

      assert.ok(actual, 'Adds medium hidden class.');

      assert.end();
    });


  nested.test('hidden prop = touch.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent hidden='touch'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-hidden-touch');

      assert.ok(actual, 'Adds touch hidden class.');

      assert.end();
    });


  // margin
  nested.test('margin prop = top.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='top'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-top');

      assert.ok(actual, 'Adds top margin class.');

      assert.end();
    });


  nested.test('margin prop = top.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='top'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-top');

      assert.ok(actual, 'Adds top margin class.');

      assert.end();
    });


  nested.test('margin prop = left.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='left'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-left');

      assert.ok(actual, 'Adds left margin class.');

      assert.end();
    });


  nested.test('margin prop = bottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='bottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-bottom');

      assert.ok(actual, 'Adds bottom margin class.');

      assert.end();
    });


  nested.test('margin prop = right.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='right'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-right');

      assert.ok(actual, 'Adds right margin class.');

      assert.end();
    });


  nested.test('margin prop = smallTop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='smallTop'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-small-top');

      assert.ok(actual, 'Adds small top margin class.');

      assert.end();
    });


  nested.test('margin prop = smallLeft.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='smallLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-small-left');

      assert.ok(actual, 'Adds small left margin class.');

      assert.end();
    });


  nested.test('margin prop = smallBottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='smallBottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-small-bottom');

      assert.ok(actual, 'Adds small bottom margin class.');

      assert.end();
    });


  nested.test('margin prop = smallRight.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='smallRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-small-right');

      assert.ok(actual, 'Adds small right margin class.');

      assert.end();
    });


  nested.test('margin prop = largeTop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='largeTop'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-large-top');

      assert.ok(actual, 'Adds large top margin class.');

      assert.end();
    });


  nested.test('margin prop = largeLeft.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='largeLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-large-left');

      assert.ok(actual, 'Adds large left margin class.');

      assert.end();
    });


  nested.test('margin prop = largeBottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='largeBottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-large-bottom');

      assert.ok(actual, 'Adds large bottom margin class.');

      assert.end();
    });


  nested.test('margin prop = largeRight.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='largeRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-large-right');

      assert.ok(actual, 'Adds large right margin class.');

      assert.end();
    });


  nested.test('margin prop = remove.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='remove'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-remove');

      assert.ok(actual, 'Adds remove margin class.');

      assert.end();
    });


  nested.test('margin prop = removeTop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='removeTop'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-top-remove');

      assert.ok(actual, 'Adds removeTop margin class.');

      assert.end();
    });


  nested.test('margin prop = removeBottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent margin='removeBottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-margin-bottom-remove');

      assert.ok(actual, 'Adds remove bottom margin class.');

      assert.end();
    });


  // padding
  nested.test('padding prop = top.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='top'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-top');

      assert.ok(actual, 'Adds top padding class.');

      assert.end();
    });


  nested.test('padding prop = top.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='top'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-top');

      assert.ok(actual, 'Adds top padding class.');

      assert.end();
    });


  nested.test('padding prop = left.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='left'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-left');

      assert.ok(actual, 'Adds left padding class.');

      assert.end();
    });


  nested.test('padding prop = bottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='bottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-bottom');

      assert.ok(actual, 'Adds bottom padding class.');

      assert.end();
    });


  nested.test('padding prop = right.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='right'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-right');

      assert.ok(actual, 'Adds right padding class.');

      assert.end();
    });


  nested.test('padding prop = smallTop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='smallTop'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-small-top');

      assert.ok(actual, 'Adds small top padding class.');

      assert.end();
    });


  nested.test('padding prop = smallLeft.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='smallLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-small-left');

      assert.ok(actual, 'Adds small left padding class.');

      assert.end();
    });


  nested.test('padding prop = smallBottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='smallBottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-small-bottom');

      assert.ok(actual, 'Adds small bottom padding class.');

      assert.end();
    });


  nested.test('padding prop = smallRight.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='smallRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-small-right');

      assert.ok(actual, 'Adds small right padding class.');

      assert.end();
    });


  nested.test('padding prop = largeTop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='largeTop'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-large-top');

      assert.ok(actual, 'Adds large top padding class.');

      assert.end();
    });


  nested.test('padding prop = largeLeft.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='largeLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-large-left');

      assert.ok(actual, 'Adds large left padding class.');

      assert.end();
    });


  nested.test('padding prop = largeBottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='largeBottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-large-bottom');

      assert.ok(actual, 'Adds large bottom padding class.');

      assert.end();
    });


  nested.test('padding prop = largeRight.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='largeRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-large-right');

      assert.ok(actual, 'Adds large right padding class.');

      assert.end();
    });


  nested.test('padding prop = remove.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='remove'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-remove');

      assert.ok(actual, 'Adds remove padding class.');

      assert.end();
    });


  nested.test('padding prop = removeTop.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='removeTop'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-top-remove');

      assert.ok(actual, 'Adds top remove padding class.');

      assert.end();
    });


  nested.test('padding prop = removeBottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent padding='removeBottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-padding-bottom-remove');

      assert.ok(actual, 'Adds remove bottom padding class.');

      assert.end();
    });


  // position
  nested.test('position prop = top.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='top'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-top');

      assert.ok(actual, 'Adds top position class.');

      assert.end();
    });


  nested.test('position prop = topLeft.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='topLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-top-left');

      assert.ok(actual, 'Adds top left position class.');

      assert.end();
    });


  nested.test('position prop = topRight.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='topRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-top-right');

      assert.ok(actual, 'Adds top right position class.');

      assert.end();
    });


  nested.test('position prop = bottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='bottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-bottom');

      assert.ok(actual, 'Adds bottom position class.');

      assert.end();
    });


  nested.test('position prop = bottomLeft.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='bottomLeft'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-bottom-left');

      assert.ok(actual, 'Adds bottom left position class.');

      assert.end();
    });


  nested.test('position prop = bottom right.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='bottomRight'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-bottom-right');

      assert.ok(actual, 'Adds bottom right position class.');

      assert.end();
    });


  nested.test('position prop = cover.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='cover'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-cover');

      assert.ok(actual, 'Adds cover position class.');

      assert.end();
    });


  nested.test('position prop = relative.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='relative'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-relative');

      assert.ok(actual, 'Adds relative position class.');

      assert.end();
    });


  nested.test('position prop = zIndex.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent position='zIndex'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-position-z-index');

      assert.ok(actual, 'Adds z index position class.');

      assert.end();
    });


  // responsive
  nested.test('scroll prop = auto.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent scroll='auto'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-overflow-container');

      assert.ok(actual, 'Adds overflow container class.');

      assert.end();
    });


  nested.test('scroll prop = box.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent scroll='box'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-scrollable-box');

      assert.ok(actual, 'Adds box scrollable class.');

      assert.end();
    });

  nested.test('scroll prop = text.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent scroll='text'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-scrollable-text');

      assert.ok(actual, 'Adds text scrollable class.');

      assert.end();
    });


  // textAlign
  nested.test('textAlign prop = center.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='center'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-center');

      assert.ok(actual, 'Adds center text class.');

      assert.end();
    });


  nested.test('textAlign prop = centerSmall.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='centerSmall'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-center-small');

      assert.ok(actual, 'Adds small center text class.');

      assert.end();
    });


  nested.test('textAlign prop = centerMedium.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='centerMedium'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-center-medium');

      assert.ok(actual, 'Adds medium center text class.');

      assert.end();
    });


  nested.test('textAlign prop = left.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='left'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-left');

      assert.ok(actual, 'Adds center text class.');

      assert.end();
    });


  nested.test('textAlign prop = leftSmall.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='leftSmall'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-left-small');

      assert.ok(actual, 'Adds small left text class.');

      assert.end();
    });


  nested.test('textAlign prop = leftMedium.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='leftMedium'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-left-medium');

      assert.ok(actual, 'Adds medium left text class.');

      assert.end();
    });


  nested.test('textAlign prop = justify.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textAlign='justify'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-justify');

      assert.ok(actual, 'Adds justify text class.');

      assert.end();
    });


  // textVerticle
  nested.test('textVerticle prop = top.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textVerticle='top'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-top');

      assert.ok(actual, 'Adds top text class.');

      assert.end();
    });


  nested.test('textVerticle prop = middle.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textVerticle='middle'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-middle');

      assert.ok(actual, 'Adds middle text class.');

      assert.end();
    });


  nested.test('textVerticle prop = bottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textVerticle='bottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-bottom');

      assert.ok(actual, 'Adds bottom text class.');

      assert.end();
    });


  // textWrap
  nested.test('textWrap prop = truncate.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textWrap='truncate'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-truncate');

      assert.ok(actual, 'Adds truncate text class.');

      assert.end();
    });


  nested.test('textWraptextWrap prop = break.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textWrap='break'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-break');

      assert.ok(actual, 'Adds break text class.');

      assert.end();
    });


  nested.test('textWrap prop = nowrap.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent textWrap='nowrap'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-text-nowrap');

      assert.ok(actual, 'Adds nowrap text class.');

      assert.end();
    });


  // vertical
  nested.test('vertical prop = parent.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent vertical='parent'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-vertical-align');

      assert.ok(actual, 'Adds align vertical to parent class.');

      assert.end();
    });


  nested.test('vertical prop = break.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent vertical='middle'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-vertical-align-middle');

      assert.ok(actual, 'Adds middle vertical class.');

      assert.end();
    });


  nested.test('vertical prop = bottom.',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent vertical='bottom'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-vertical-align-bottom');

      assert.ok(actual, 'Adds bottom vertical class.');

      assert.end();
    });


  // viewport
  nested.test('visible prop',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent visible='hover'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-visible-hover');

      assert.ok(actual, 'Adds hover visible class.');

      assert.end();
    });


  nested.test('visible prop = hoverInline',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent visible='hoverInline'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-visible-hover-inline');

      assert.ok(actual, 'Adds inline hover visible class.');

      assert.end();
    });


  nested.test('visible prop = large',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent visible='large'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-visible-large');

      assert.ok(actual, 'Adds inline hover visible class.');

      assert.end();
    });


  nested.test('visible prop = small',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent visible='small'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-visible-small');

      assert.ok(actual, 'Adds inline hover visible class.');

      assert.end();
    });


  nested.test('visible prop = touch',
    assert => {
      const TestComponent = uikit(Component);

      const element = <TestComponent visible='touch'/>;
      const $ = dom.load(renderMarkup(element));

      const actual = $('div').hasClass('uk-visible-touch');

      assert.ok(actual, 'Adds hover visible class.');

      assert.end();
    });
});
