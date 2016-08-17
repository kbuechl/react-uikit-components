'use strict';
import test from 'tape';
import Icons from '../lib/icons';
import React from 'react';
import renderElement from './helpers/renderElement';
import {
  htmlToString,
  reactToDom,
  reactToString
} from './helpers/renderElement';


test('icon Component:', nested => {
  nested.test('Renders icon component:',
    assert => {
      const icons = reactToString(
        <Icons
        kitid='i1'
        icon='cog'
        />
      );


      const actual = icons;
      const expect = htmlToString(`
        <i class="uk-icon-cog" data-kitid="i1"></i>
      `);

      assert.equals(actual, expect,
        'Correctly renders icon element');


      assert.end();
    });


  nested.test('link prop:',
    assert => {
      const icons = reactToString(
        <Icons
          link={{
            href: '#'
          }}
          kitid='i1'
          icon='cog'
        />
      );


      const actual = icons;
      const expect = htmlToString(`
        <a href="#" data-kitid="i1">
          <i class="uk-icon-hover uk-icon-cog"></i>
        </a>
      `);

      assert.equals(actual, expect,
        'Correctly renders icon element as link');


      assert.end();
    });



  // nested.test('link type=button prop:',
  //   assert => {
  //     const icons = reactToString(
  //       <Icons
  //         link={{
  //           href: '#',
  //           type: 'button'
  //         }}
  //         kitid='i1'
  //         icon='cog'
  //       />
  //     );
  //
  //
  //     const actual = icons;
  //     const expect = htmlToString(`
  //       <a href="#" data-kitid="i1">
  //         <i class="uk-icon-button uk-icon-cog"></i>
  //       </a>
  //     `);
  //
  //     assert.equals(actual, expect,
  //       'Correctly renders icon element as link');
  //
  //
  //     assert.end();
  //   });
  //
  //
  // nested.test('size=small prop:',
  //   assert => {
  //     const icons = reactToDom(
  //       <Icons size='small' icon='cog' />
  //     ).dom('i');
  //
  //     const actual = icons.hasClass('uk-icon-small');
  //
  //     assert.ok(actual, 'Adds size small class to icon element as link');
  //
  //
  //     assert.end();
  //   });
  //
  //
  // nested.test('size=medium prop:',
  //   assert => {
  //     const icons = reactToDom(
  //       <Icons size='medium' icon='cog' />
  //     ).dom('i');
  //
  //     const actual = icons.hasClass('uk-icon-medium');
  //
  //     assert.ok(actual, 'Adds size medium class to icon element as link');
  //
  //
  //     assert.end();
  //   });
  //
  //
  //
  // nested.test('size=large prop:',
  //   assert => {
  //     const icons = reactToDom(
  //       <Icons size='large' icon='cog' />
  //     ).dom('i');
  //
  //     const actual = icons.hasClass('uk-icon-large');
  //
  //     assert.ok(actual, 'Adds size large class to icon element as link');
  //
  //
  //     assert.end();
  //   });
  //
  //
  //
  // nested.test('spin prop:',
  //   assert => {
  //     const icons = reactToDom(
  //       <Icons spin icon='cog' />
  //     ).dom('i');
  //
  //     const actual = icons.hasClass('uk-icon-spin');
  //
  //     assert.ok(actual, 'Adds spin class to icon element as link');
  //
  //
  //     assert.end();
  //   });
  //
  //
  // nested.test('justify prop:',
  //   assert => {
  //     const icons = reactToDom(
  //       <Icons justify icon='cog' />
  //     ).dom('i');
  //
  //     const actual = icons.hasClass('uk-icon-justify');
  //
  //     assert.ok(actual, 'Adds justify class to icon element as link');
  //
  //
  //     assert.end();
  //   });


});
