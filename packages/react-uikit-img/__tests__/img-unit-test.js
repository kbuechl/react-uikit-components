'use strict';
import test from 'tape';
import Img from '../lib/img';
import React from 'react';
import renderElement from './helpers/renderElement';


const Component = <Img
  alt='Image decription'
  src='http://animageurl.jpg'
  height='100px'
  width='300px'
  kitid='img1'
/>;


test('img Component', nested => {
  nested.test('Renders component:',
    assert => {
      const img = renderElement(Component).dom();
      const actual = img.html();
      const expect = '<img alt="Image decription" src="http://animageurl.jpg" height="100px" width="300px" data-kitid="img1">';

      assert.equals(actual, expect,
        'Correctly renders img element');

      assert.end();
    });

  nested.test('cover prop:',
    assert => {
      const Cover = <Img
        cover
        alt='Image decription'
        src='http://animageurl.jpg'
        height='100px'
        kitid='cover1'
      />;

      const img = renderElement(Cover).dom();

      const actual = img.html();
      const expect = '<div height="100px" class="uk-cover-background" data-kitid="cover1"></div>';

      assert.equals(actual, expect,
        'Adds img default class to img element');

      assert.end();
    });

  /* Todo
  *  responsive tests
  *  cover renders background-image
  * */
});
