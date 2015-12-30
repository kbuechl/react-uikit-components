'use strict';
import test from 'tape';
import React from 'react';
import uikit from '../lib/uikit';
import ufunc from 'ufunc';
import renderElement from './helpers/renderElement';


class Component extends React.Component {
  render () {
    const props = this.props;

    const cssClassNames = uikit.helpers.cleanClasses([
      props.classes
    ]);

    return <div className={ufunc.maybe(null)(cssClassNames)}>
      {props.children}
    </div>;
  }
}


test('UIkit Component', nested => {
  nested.test('Renders component:',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent>Hello, world</TestComponent>).dom('div');

      const actual = element.text();
      const expect = 'Hello, world';

      assert.equals(actual, expect, 'Correctly renders base component.');

      assert.end();
    });


  // align
  nested.test('align prop = left:',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent align='left'/>).dom('div');

      const actual = element.hasClass('uk-align-left');

      assert.ok(actual, 'Adds left align class.');

      assert.end();
    });


  nested.test('align prop = right:',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent align='right'/>).dom('div');

      const actual = element.hasClass('uk-align-right');

      assert.ok(actual, 'Adds right align class.');

      assert.end();
    });


  nested.test('align prop = middle left.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent align='middleLeft'/>).dom('div');

      const actual = element.hasClass('uk-align-medium-left');

      assert.ok(actual, 'Adds middle left align class.');

      assert.end();
    });


  nested.test('align prop = middle right.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent align='middleRight'/>).dom('div');

      const actual = element.hasClass('uk-align-medium-right');

      assert.ok(actual, 'Adds middle right align class.');

      assert.end();
    });


  nested.test('align prop = center.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent align='center'/>).dom('div');

      const actual = element.hasClass('uk-align-center');

      assert.ok(actual, 'Adds center align class.');

      assert.end();
    });


  // borderRadius
  nested.test('borderRadius prop = rounded.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent borderRadius='rounded'/>).dom('div');

      const actual = element.hasClass('uk-border-rounded');

      assert.ok(actual, 'Adds rounded border radius class.');

      assert.end();
    });


  nested.test('borderRadius prop = circle.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent borderRadius='circle'/>).dom('div');

      const actual = element.hasClass('uk-border-circle');

      assert.ok(actual, 'Adds circle border radius class.');

      assert.end();
    });


  // Clear
  nested.test('clear prop = fix.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent clear='fix'/>).dom('div');

      const actual = element.hasClass('uk-clearfix');

      assert.ok(actual, 'Adds clearfix class.');

      assert.end();
    });


  nested.test('clear prop = nbfc.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent clear='nbfc'/>).dom('div');

      const actual = element.hasClass('uk-nbfc');

      assert.ok(actual, 'Adds nbfc class.');

      assert.end();
    });


  nested.test('clear prop = alt.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent clear='alt'/>).dom('div');

      const actual = element.hasClass('uk-nbfc-alt');

      assert.ok(actual, 'Adds nbfc alt class.');

      assert.end();
    });


  // center
  nested.test('center prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent center/>).dom('div');

      const actual = element.hasClass('uk-container-center');

      assert.ok(actual, 'Adds center container class.');

      assert.end();
    });


  // col
  nested.test('col prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent col='1-6' padding='left'/>).dom('div');

      const actual = element.hasClass('uk-width-1-6');

      assert.ok(actual, 'Adds order last xlarge class to grid element');

      assert.end();
    });


  // col small
  nested.test('colSmall prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent colSmall='1-6'/>).dom('div');

      const actual = element.hasClass('uk-width-small-1-6');

      assert.ok(actual, 'Adds correct small width class.');

      assert.end();
    });


  // col medium
  nested.test('colMedium prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent colMedium='1-6'/>).dom('div');

      const actual = element.hasClass('uk-width-medium-1-6');

      assert.ok(actual, 'Adds correct medium width class.');

      assert.end();
    });


  // col large
  nested.test('colLarge prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent colLarge='1-6'/>).dom('div');

      const actual = element.hasClass('uk-width-large-1-6');

      assert.ok(actual, 'Adds correct large width class.');

      assert.end();
    });


  // contrast
  nested.test('contrast prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent contrast/>).dom('div');

      const actual = element.hasClass('uk-contrast');

      assert.ok(actual, 'Adds contrast class.');

      assert.end();
    });


  // display
  nested.test('display prop = block.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent display='block'/>).dom('div');

      const actual = element.hasClass('uk-display-block');

      assert.ok(actual, 'Adds block display class.');

      assert.end();
    });


  nested.test('display prop = inline.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent display='inline'/>).dom('div');

      const actual = element.hasClass('uk-display-inline');

      assert.ok(actual, 'Adds inline display class.');

      assert.end();
    });


  nested.test('display prop = inlineBlock.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent display='inlineBlock'/>).dom('div');

      const actual = element.hasClass('uk-display-inline-block');

      assert.ok(actual, 'Adds inlineBlock display class.');

      assert.end();
    });


  // float
  nested.test('float prop = left.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent float='left'/>).dom('div');

      const actual = element.hasClass('uk-float-left');

      assert.ok(actual, 'Adds left float class.');

      assert.end();
    });


  nested.test('float prop = right.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent float='right'/>).dom('div');

      const actual = element.hasClass('uk-float-right');

      assert.ok(actual, 'Adds right float class.');

      assert.end();
    });


  nested.test('float prop = clear.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent float='clear'/>).dom('div');

      const actual = element.hasClass('uk-clearfix');

      assert.ok(actual, 'Adds clearfix class.');

      assert.end();
    });


  // hidden
  nested.test('hidden prop = all.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent hidden='all'/>).dom('div');

      const actual = element.hasClass('uk-hidden');

      assert.ok(actual, 'Adds hidden class.');
      assert.end();
    });


  nested.test('hidden prop = invisible.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent hidden='invisible'/>).dom('div');

      const actual = element.hasClass('uk-invisible');

      assert.ok(actual, 'Adds invisible class.');

      assert.end();
    });


  nested.test('hidden prop = small.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent hidden='small'/>).dom('div');
      const actual = element.hasClass('uk-hidden-small');

      assert.ok(actual, 'Adds small hidden class.');

      assert.end();
    });


  nested.test('hidden prop = large.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent hidden='large'/>).dom('div');
      const actual = element.hasClass('uk-hidden-large');

      assert.ok(actual, 'Adds large hidden class.');

      assert.end();
    });


  nested.test('hidden prop = medium.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent hidden='medium'/>).dom('div');
      const actual = element.hasClass('uk-hidden-medium');

      assert.ok(actual, 'Adds medium hidden class.');

      assert.end();
    });


  nested.test('hidden prop = touch.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent hidden='touch'/>).dom('div');

      const actual = element.hasClass('uk-hidden-touch');

      assert.ok(actual, 'Adds touch hidden class.');

      assert.end();
    });


  // list
  nested.test('list prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent list col='1-6'/>).dom();

      const actual = element.html();
      const expect = '<li class="uk-width-1-6"><div></div></li>';

      assert.equals(actual, expect,
        'Wraps element in a li element');

      assert.end();
    });


  // margin
  nested.test('margin prop = top.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='top'/>).dom('div');

      const actual = element.hasClass('uk-margin-top');

      assert.ok(actual, 'Adds top margin class.');

      assert.end();
    });


  nested.test('margin prop = top.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='top'/>).dom('div');

      const actual = element.hasClass('uk-margin-top');

      assert.ok(actual, 'Adds top margin class.');

      assert.end();
    });


  nested.test('margin prop = left.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='left'/>).dom('div');

      const actual = element.hasClass('uk-margin-left');

      assert.ok(actual, 'Adds left margin class.');

      assert.end();
    });


  nested.test('margin prop = bottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='bottom'/>).dom('div');

      const actual = element.hasClass('uk-margin-bottom');

      assert.ok(actual, 'Adds bottom margin class.');

      assert.end();
    });


  nested.test('margin prop = right.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='right'/>).dom('div');

      const actual = element.hasClass('uk-margin-right');

      assert.ok(actual, 'Adds right margin class.');

      assert.end();
    });


  nested.test('margin prop = smallTop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='smallTop'/>).dom('div');

      const actual = element.hasClass('uk-margin-small-top');

      assert.ok(actual, 'Adds small top margin class.');

      assert.end();
    });


  nested.test('margin prop = smallLeft.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='smallLeft'/>).dom('div');

      const actual = element.hasClass('uk-margin-small-left');

      assert.ok(actual, 'Adds small left margin class.');

      assert.end();
    });


  nested.test('margin prop = smallBottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='smallBottom'/>).dom('div');

      const actual = element.hasClass('uk-margin-small-bottom');

      assert.ok(actual, 'Adds small bottom margin class.');

      assert.end();
    });


  nested.test('margin prop = smallRight.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='smallRight'/>).dom('div');

      const actual = element.hasClass('uk-margin-small-right');

      assert.ok(actual, 'Adds small right margin class.');

      assert.end();
    });


  nested.test('margin prop = largeTop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='largeTop'/>).dom('div');

      const actual = element.hasClass('uk-margin-large-top');

      assert.ok(actual, 'Adds large top margin class.');

      assert.end();
    });


  nested.test('margin prop = largeLeft.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='largeLeft'/>).dom('div');

      const actual = element.hasClass('uk-margin-large-left');

      assert.ok(actual, 'Adds large left margin class.');

      assert.end();
    });


  nested.test('margin prop = largeBottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='largeBottom'/>).dom('div');

      const actual = element.hasClass('uk-margin-large-bottom');

      assert.ok(actual, 'Adds large bottom margin class.');

      assert.end();
    });


  nested.test('margin prop = largeRight.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='largeRight'/>).dom('div');

      const actual = element.hasClass('uk-margin-large-right');

      assert.ok(actual, 'Adds large right margin class.');

      assert.end();
    });


  nested.test('margin prop = remove.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='remove'/>).dom('div');

      const actual = element.hasClass('uk-margin-remove');

      assert.ok(actual, 'Adds remove margin class.');

      assert.end();
    });


  nested.test('margin prop = removeTop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='removeTop'/>).dom('div');

      const actual = element.hasClass('uk-margin-top-remove');

      assert.ok(actual, 'Adds removeTop margin class.');

      assert.end();
    });


  nested.test('margin prop = removeBottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent margin='removeBottom'/>).dom('div');

      const actual = element.hasClass('uk-margin-bottom-remove');

      assert.ok(actual, 'Adds remove bottom margin class.');

      assert.end();
    });


  // padding
  nested.test('padding prop = top.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='top'/>).dom('div');

      const actual = element.hasClass('uk-padding-top');

      assert.ok(actual, 'Adds top padding class.');

      assert.end();
    });


  nested.test('padding prop = top.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='top'/>).dom('div');

      const actual = element.hasClass('uk-padding-top');

      assert.ok(actual, 'Adds top padding class.');

      assert.end();
    });


  nested.test('padding prop = left.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='left'/>).dom('div');

      const actual = element.hasClass('uk-padding-left');

      assert.ok(actual, 'Adds left padding class.');

      assert.end();
    });


  nested.test('padding prop = bottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='bottom'/>).dom('div');

      const actual = element.hasClass('uk-padding-bottom');

      assert.ok(actual, 'Adds bottom padding class.');

      assert.end();
    });


  nested.test('padding prop = right.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='right'/>).dom('div');

      const actual = element.hasClass('uk-padding-right');

      assert.ok(actual, 'Adds right padding class.');

      assert.end();
    });


  nested.test('padding prop = smallTop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='smallTop'/>).dom('div');

      const actual = element.hasClass('uk-padding-small-top');

      assert.ok(actual, 'Adds small top padding class.');

      assert.end();
    });


  nested.test('padding prop = smallLeft.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='smallLeft'/>).dom('div');

      const actual = element.hasClass('uk-padding-small-left');

      assert.ok(actual, 'Adds small left padding class.');

      assert.end();
    });


  nested.test('padding prop = smallBottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='smallBottom'/>).dom('div');

      const actual = element.hasClass('uk-padding-small-bottom');

      assert.ok(actual, 'Adds small bottom padding class.');

      assert.end();
    });


  nested.test('padding prop = smallRight.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='smallRight'/>).dom('div');

      const actual = element.hasClass('uk-padding-small-right');

      assert.ok(actual, 'Adds small right padding class.');

      assert.end();
    });


  nested.test('padding prop = largeTop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='largeTop'/>).dom('div');

      const actual = element.hasClass('uk-padding-large-top');

      assert.ok(actual, 'Adds large top padding class.');

      assert.end();
    });


  nested.test('padding prop = largeLeft.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='largeLeft'/>).dom('div');

      const actual = element.hasClass('uk-padding-large-left');

      assert.ok(actual, 'Adds large left padding class.');

      assert.end();
    });


  nested.test('padding prop = largeBottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='largeBottom'/>).dom('div');

      const actual = element.hasClass('uk-padding-large-bottom');

      assert.ok(actual, 'Adds large bottom padding class.');

      assert.end();
    });


  nested.test('padding prop = largeRight.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='largeRight'/>).dom('div');

      const actual = element.hasClass('uk-padding-large-right');

      assert.ok(actual, 'Adds large right padding class.');

      assert.end();
    });


  nested.test('padding prop = remove.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='remove'/>).dom('div');

      const actual = element.hasClass('uk-padding-remove');

      assert.ok(actual, 'Adds remove padding class.');

      assert.end();
    });


  nested.test('padding prop = removeTop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='removeTop'/>).dom('div');

      const actual = element.hasClass('uk-padding-top-remove');

      assert.ok(actual, 'Adds top remove padding class.');

      assert.end();
    });


  nested.test('padding prop = removeBottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent padding='removeBottom'/>).dom('div');

      const actual = element.hasClass('uk-padding-bottom-remove');

      assert.ok(actual, 'Adds remove bottom padding class.');

      assert.end();
    });


  // position
  nested.test('position prop = top.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='top'/>).dom('div');

      const actual = element.hasClass('uk-position-top');

      assert.ok(actual, 'Adds top position class.');

      assert.end();
    });


  nested.test('position prop = topLeft.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='topLeft'/>).dom('div');

      const actual = element.hasClass('uk-position-top-left');

      assert.ok(actual, 'Adds top left position class.');

      assert.end();
    });


  nested.test('position prop = topRight.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='topRight'/>).dom('div');

      const actual = element.hasClass('uk-position-top-right');

      assert.ok(actual, 'Adds top right position class.');

      assert.end();
    });


  nested.test('position prop = bottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='bottom'/>).dom('div');

      const actual = element.hasClass('uk-position-bottom');

      assert.ok(actual, 'Adds bottom position class.');

      assert.end();
    });


  nested.test('position prop = bottomLeft.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='bottomLeft'/>).dom('div');

      const actual = element.hasClass('uk-position-bottom-left');

      assert.ok(actual, 'Adds bottom left position class.');

      assert.end();
    });


  nested.test('position prop = bottom right.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='bottomRight'/>).dom('div');

      const actual = element.hasClass('uk-position-bottom-right');

      assert.ok(actual, 'Adds bottom right position class.');

      assert.end();
    });


  nested.test('position prop = cover.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='cover'/>).dom('div');

      const actual = element.hasClass('uk-position-cover');

      assert.ok(actual, 'Adds cover position class.');

      assert.end();
    });


  nested.test('position prop = relative.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='relative'/>).dom('div');

      const actual = element.hasClass('uk-position-relative');

      assert.ok(actual, 'Adds relative position class.');

      assert.end();
    });


  nested.test('position prop = zIndex.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent position='zIndex'/>).dom('div');

      const actual = element.hasClass('uk-position-z-index');

      assert.ok(actual, 'Adds z index position class.');

      assert.end();
    });


  nested.test('responsive prop.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent responsive='width height'/>).dom('div');

      const actual = element.hasClass('uk-responsive-width uk-responsive-height');

      assert.ok(actual, 'Adds responsive classes to base component.');

      assert.end();
    });


  // responsive
  nested.test('scroll prop = auto.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent scroll='auto'/>).dom('div');

      const actual = element.hasClass('uk-overflow-container');

      assert.ok(actual, 'Adds overflow container class to base component.');

      assert.end();
    });


  nested.test('scroll prop = box.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent scroll='box'/>).dom('div');

      const actual = element.hasClass('uk-scrollable-box');

      assert.ok(actual, 'Adds box scrollable class to base component.');

      assert.end();
    });

  nested.test('scroll prop = text.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent scroll='text'/>).dom('div');

      const actual = element.hasClass('uk-scrollable-text');

      assert.ok(actual, 'Adds text scrollable class to base component.');

      assert.end();
    });


  // textAlign
  nested.test('textAlign prop = center.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='center'/>).dom('div');

      const actual = element.hasClass('uk-text-center');

      assert.ok(actual, 'Adds center text class to base component.');

      assert.end();
    });


  nested.test('textAlign prop = centerSmall.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='centerSmall'/>).dom('div');

      const actual = element.hasClass('uk-text-center-small');

      assert.ok(actual, 'Adds small center text class to base component.');

      assert.end();
    });


  nested.test('textAlign prop = centerMedium.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='centerMedium'/>).dom('div');

      const actual = element.hasClass('uk-text-center-medium');

      assert.ok(actual, 'Adds medium center text class to base component.');

      assert.end();
    });


  nested.test('textAlign prop = left.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='left'/>).dom('div');

      const actual = element.hasClass('uk-text-left');

      assert.ok(actual, 'Adds center text class to base component.');

      assert.end();
    });


  nested.test('textAlign prop = leftSmall.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='leftSmall'/>).dom('div');

      const actual = element.hasClass('uk-text-left-small');

      assert.ok(actual, 'Adds small left text class to base component.');

      assert.end();
    });


  nested.test('textAlign prop = leftMedium.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='leftMedium'/>).dom('div');

      const actual = element.hasClass('uk-text-left-medium');

      assert.ok(actual, 'Adds medium left text class to base component.');

      assert.end();
    });


  nested.test('textAlign prop = justify.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textAlign='justify'/>).dom('div');

      const actual = element.hasClass('uk-text-justify');

      assert.ok(actual, 'Adds justify text class to base component.');

      assert.end();
    });


  // textVertical
  nested.test('textVertical prop = top.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textVertical='top'/>).dom('div');

      const actual = element.hasClass('uk-text-top');

      assert.ok(actual, 'Adds top text class to base component.');

      assert.end();
    });


  nested.test('textVertical prop = middle.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textVertical='middle'/>).dom('div');

      const actual = element.hasClass('uk-text-middle');

      assert.ok(actual, 'Adds middle text class to base component.');

      assert.end();
    });


  nested.test('textVertical prop = bottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textVertical='bottom'/>).dom('div');

      const actual = element.hasClass('uk-text-bottom');

      assert.ok(actual, 'Adds bottom text class to base component.');

      assert.end();
    });


  // textWrap
  nested.test('textWrap prop = truncate.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textWrap='truncate'/>).dom('div');

      const actual = element.hasClass('uk-text-truncate');

      assert.ok(actual, 'Adds truncate text class to base component.');

      assert.end();
    });


  nested.test('textWraptextWrap prop = break.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent textWrap='break'/>).dom('div');

      const actual = element.hasClass('uk-text-break');

      assert.ok(actual, 'Adds break text class to base component.');

      assert.end();
    });


  nested.test('textWrap prop = nowrap.',
    assert => {
      const TestComponent = uikit.base(Component);

      const element = renderElement(<TestComponent textWrap='nowrap'/>).dom('div');


      const actual = element.hasClass('uk-text-nowrap');

      assert.ok(actual, 'Adds nowrap text class to base component.');

      assert.end();
    });


  // vertical
  nested.test('vertical prop = parent.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent vertical='parent'/>).dom('div');

      const actual = element.hasClass('uk-vertical-align');

      assert.ok(actual, 'Adds align vertical to parent class to base component.');

      assert.end();
    });


  nested.test('vertical prop = break.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent vertical='middle'/>).dom('div');

      const actual = element.hasClass('uk-vertical-align-middle');

      assert.ok(actual, 'Adds middle vertical class to base component.');

      assert.end();
    });


  nested.test('vertical prop = bottom.',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent vertical='bottom'/>).dom('div');

      const actual = element.hasClass('uk-vertical-align-bottom');

      assert.ok(actual, 'Adds bottom vertical class to base component.');

      assert.end();
    });


  // viewport
  nested.test('visible prop',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent visible='hover'/>).dom('div');

      const actual = element.hasClass('uk-visible-hover');

      assert.ok(actual, 'Adds hover visible class to base component.');

      assert.end();
    });


  nested.test('visible prop = hoverInline',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent visible='hoverInline'/>).dom('div');

      const actual = element.hasClass('uk-visible-hover-inline');

      assert.ok(actual, 'Adds inline hover visible class to base component.');

      assert.end();
    });


  nested.test('visible prop = large',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent visible='large'/>).dom('div');

      const actual = element.hasClass('uk-visible-large');

      assert.ok(actual, 'Adds inline large visible class to base component.');

      assert.end();
    });


  nested.test('visible prop = small:',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent visible='small'/>).dom('div');

      const actual = element.hasClass('uk-visible-small');

      assert.ok(actual, 'Adds inline small visible class to base component.');

      assert.end();
    });


  nested.test('visible prop = touch',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent visible='touch'/>).dom('div');

      const actual = element.hasClass('uk-visible-touch');
      assert.ok(actual, 'Adds hover visible touch class to base component.');
      assert.end();
    });


  // order
  nested.test('order = first',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='first'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-first');
      assert.ok(actual, 'Adds order first flex class to base component');

      assert.end();
    });


  nested.test('order = firstSmall',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='firstSmall'/>).dom('div');
      const actual = element.hasClass('uk-flex-order-first-small');
      assert.ok(actual, 'Adds order first small flex class to base component');

      assert.end();
    });


  nested.test('order = firstMedium',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='firstMedium'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-first-medium');
      assert.ok(actual, 'Adds order first medium flex class to base component');

      assert.end();
    });


  nested.test('order = firstLarge',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='firstLarge'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-first-large');
      assert.ok(actual, 'Adds order first large flex class to base component');

      assert.end();
    });


  nested.test('order = firstXlarge',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='firstXlarge'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-first-xlarge');
      assert.ok(actual, 'Adds order first first large class to base component');

      assert.end();
    });


  nested.test('order = last',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='last'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-last');
      assert.ok(actual, 'Adds order last class to base component');

      assert.end();
    });


  nested.test('order = lastSmall',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='lastSmall'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-last-small');
      assert.ok(actual, 'Adds order last small class to base component');

      assert.end();
    });


  nested.test('order = lastMedium',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='lastMedium'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-last-medium');
      assert.ok(actual, 'Adds order last medium class to base component');

      assert.end();
    });


  nested.test('order = lastLarge',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='lastLarge'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-last-large');
      assert.ok(actual, 'Adds order last large class to base component');

      assert.end();
    });


  nested.test('order = lastXlarge',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent order='lastXlarge'/>).dom('div');

      const actual = element.hasClass('uk-flex-order-last-xlarge');
      assert.ok(actual, 'Adds order last xlarge class to base component');

      assert.end();
    });


  nested.test('Takes muiliple props:',
    assert => {
      const TestComponent = uikit.base(Component);
      const element = renderElement(<TestComponent visible='touch small' margin='top left' padding='bottom right'/>).dom();

      const actual = element.html();
      const expect = '<div class="uk-margin-top uk-margin-left uk-padding-bottom uk-padding-right uk-visible-touch uk-visible-small"></div>';

      assert.equals(actual, expect, 'Adds mulitiple classes to base component.');

      assert.end();
    });

});
