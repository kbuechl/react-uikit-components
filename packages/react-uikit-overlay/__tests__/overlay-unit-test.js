'use strict';
import test from 'tape';
import Overlay from '../lib/overlay';
import React from 'react';
import { htmlToString, reactToString } from './helpers/renderElement';


test('Overlay Component', nested => {
  nested.test('Renders overlay component:',
    assert => {
      const alert = reactToString(<Overlay
        kitid='o1'
        width='100px'
        height='100px' src='docs/images/placeholder_600x400.svg'
      >
        <h3>Title</h3>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
      </Overlay>);

      const actual = alert;


      const expect = htmlToString(
        `<figure class="uk-overlay" data-data-kitid="overlay-o1"><img height="100px" src="docs/images/placeholder_600x400.svg" width="100px" data-kitid="overlay-image-o1"><figcaption class="uk-overlay-panel" data-kitid="overlay-caption-o1"><h3>Title</h3><p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p></figcaption></figure>`
      );


      assert.equals(actual, expect,
        'Correctly renders overlay component.');

      assert.end();
    });


    nested.test('background prop:',
      assert => {
        const alert = reactToString(<Overlay
          kitid='o1'
          background
          width='300px'
          height='250px'
          src='docs/images/placeholder_600x400.svg'
        >
          <h3>Title</h3>
          <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
        </Overlay>);

        const actual = alert;


        const expect = htmlToString(
          `<figure class="uk-overlay" data-data-kitid="overlay-o1"><img height="250px" src="docs/images/placeholder_600x400.svg" width="300px" data-kitid="overlay-image-o1"><figcaption class="uk-overlay-panel uk-overlay-background" data-kitid="overlay-caption-o1"><h3>Title</h3><p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p></figcaption></figure>`
        );


        assert.equals(actual, expect,
          'Correctly renders background prop for overlay component.');

        assert.end();
      });


    nested.test('icon prop:',
      assert => {
        const alert = reactToString(<Overlay
          icon
          kitid='o1'
          background
          width='300px'
          height='250px'
          src='docs/images/placeholder_600x400.svg'
        />);

        const actual = alert;


        const expect = htmlToString(
          `<figure class="uk-overlay" data-data-kitid="overlay-o1"><img height="250px" src="docs/images/placeholder_600x400.svg" width="300px" data-kitid="overlay-image-o1"><figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-icon" data-kitid="overlay-caption-o1"></figcaption></figure>`
        );


        assert.equals(actual, expect,
          'Correctly renders icon prop for overlay component.');

        assert.end();
      });


    nested.test('image prop:',
      assert => {
        const alert = reactToString(<Overlay
          kitid='o1'
          image='docs/images/placeholder_600x400_2.svg'
          width='300px'
          height='250px'
          src='docs/images/placeholder_600x400.svg'
        />);

        const actual = alert;


        const expect = htmlToString(
          `<figure class="uk-overlay uk-overlay-hover" data-kitid="overlay-o1"><img height="250px" src="docs/images/placeholder_600x400_2.svg" width="300px" data-kitid="overlay-background-image-o1"><img height="250px" src="docs/images/placeholder_600x400.svg" width="300px" class="uk-overlay-panel uk-overlay-image" data-kitid="overlay-image-o1"></figure>`
        );


        assert.equals(actual, expect,
          'Correctly renders image prop for overlay component.');

        assert.end();
      });
});
