import test from 'tape';
import Thumbnail from '../lib/thumbnail';
import React from 'react';
import {
  htmlToString,
  reactToDom,
  reactToString
} from '../../../common/helpers/renderElement';


test('thumbnail Component', nested => {
  nested.test('Renders thumbnail component:',
    assert => {
      const actual = reactToString(<Thumbnail
        kitid='THUMB1'
        height='100px'
        src='docs/images/placeholder_200x150_2.svg'
      />);


      const expect = htmlToString(`
        <div class="uk-thumbnail" data-kitid="THUMB1">
          <img src="docs/images/placeholder_200x150_2.svg" height="100px" data-kitid="thumbimg-THUMB1">
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders thumbnail component.');

      assert.end();
    });


  nested.test('Renders thumbnail children:',
    assert => {
      const actual = reactToString(<Thumbnail
        kitid='THUMB1'
        height='100px'
        src='docs/images/placeholder_200x150_2.svg'
      >
        This is a caption
      </Thumbnail>);


      const expect = htmlToString(`<div class="uk-thumbnail" data-kitid="THUMB1">
        <img src="docs/images/placeholder_200x150_2.svg" height="100px" data-kitid="thumbimg-THUMB1">
        <div class="uk-thumbnail-caption">This is a caption</div>
      </div>`);


      assert.equals(actual, expect,
        'Correctly renders thumbnail children.');

      assert.end();
    });


  nested.test('size prop = large:',
    assert => {
      const Component = <Thumbnail size='large'/>;
      const thumbnail = reactToDom(Component).dom('div.uk-thumbnail');

      const actual = thumbnail.hasClass('uk-thumbnail-large');

      assert.ok(actual, 'Adds large size class to thumbnail element');

      assert.end();
    });


  nested.test('size prop = medium:',
    assert => {
      const Component = <Thumbnail size='medium'/>;
      const thumbnail = reactToDom(Component).dom('div.uk-thumbnail');

      const actual = thumbnail.hasClass('uk-thumbnail-medium');

      assert.ok(actual, 'Adds medium size class to thumbnail element');

      assert.end();
    });


  nested.test('size prop = small:',
    assert => {
      const Component = <Thumbnail size='small'/>;
      const thumbnail = reactToDom(Component).dom('div.uk-thumbnail');

      const actual = thumbnail.hasClass('uk-thumbnail-small');

      assert.ok(actual, 'Adds small size class to thumbnail element');

      assert.end();
    });


  nested.test('size prop = mini:',
    assert => {
      const Component = <Thumbnail size='mini'/>;
      const thumbnail = reactToDom(Component).dom('div.uk-thumbnail');

      const actual = thumbnail.hasClass('uk-thumbnail-mini');

      assert.ok(actual, 'Adds mini size class to thumbnail element');

      assert.end();
    });


  nested.test('size prop = expand:',
    assert => {
      const Component = <Thumbnail size='expand'/>;
      const thumbnail = reactToDom(Component).dom('div.uk-thumbnail');

      const actual = thumbnail.hasClass('uk-thumbnail-expand');

      assert.ok(actual, 'Adds expand size class to thumbnail element');

      assert.end();
    });

  nested.test('type prop = block:',
    assert => {
      const actual = reactToString(<Thumbnail
        type='block'
        kitid='THUMB1'
        height='100px'
        src='docs/images/placeholder_200x150_2.svg'
      />);


      const expect =  htmlToString(`<div class="uk-thumbnail" data-kitid="THUMB1">
        <img src="docs/images/placeholder_200x150_2.svg" height="100px" data-kitid="thumbimg-THUMB1">
      </div>`);


      assert.equals(actual, expect,
        'Correctly renders thumbnail type as block.');

      assert.end();
    });


  nested.test('type prop = figure:',
    assert => {
      const actual = reactToString(<Thumbnail
        kitid='THUMB1'
        type='figure'
        imgid='THUMB1'
        height='100px'
        src='docs/images/placeholder_200x150_2.svg'
      >
        This is a caption
      </Thumbnail>);


      const expect =  htmlToString(`
        <figure class="uk-thumbnail" data-kitid="THUMB1">
          <img src="docs/images/placeholder_200x150_2.svg" height="100px" data-kitid="thumbimg-THUMB1">
          <figcaption class="uk-thumbnail-caption">This is a caption</figcaption>
        </figure>
      `);


      assert.equals(actual, expect,
       'Correctly renders thumbnail type as figure.');

      assert.end();
    });


  nested.test('type prop = link:',
    assert => {
      const actual = reactToString(<Thumbnail
        kitid='THUMB1'
        type='link'
        imgid='THUMB1'
        height='100px'
        src='docs/images/placeholder_200x150_2.svg'
        >
        This is a caption
      </Thumbnail>);


      const expect =  htmlToString(`
        <a class="uk-thumbnail" data-kitid="THUMB1">
          <img src="docs/images/placeholder_200x150_2.svg" height="100px" data-kitid="thumbimg-THUMB1">
          <div class="uk-thumbnail-caption">This is a caption</div>
        </a>
      `);


      assert.equals(actual, expect,
        'Correctly renders thumbnail type as link.');

      assert.end();
    });

});
