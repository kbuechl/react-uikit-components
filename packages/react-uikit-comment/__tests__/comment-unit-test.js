'use strict';
import test from 'tape';
import Comment from '../lib/comment';
import React from 'react';
import renderElement from './helpers/renderElement';


test('block Component', nested => {
  nested.test('Renders comment component:',
    assert => {
      const Component = <Comment
        kitid='com1'
        title='Author'
        meta='12 days ago | Profile | #'
        avatar={{src:'images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}
      >
        This is a comment
      </Comment>;

      const comment = renderElement(Component).dom();
      const actual = comment.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<article class="uk-comment" data-kitid="com1"><header class="uk-comment-header"><img class="uk-comment-avatar" src="images/placeholder_avatar.svg" alt="Avatar placeholder"><h4 class="uk-comment-title">Author</h4><div class="uk-comment-meta">12 days ago | Profile | #</div></header><div class="uk-comment-body">This is a comment</div></article>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders comment element');


      assert.end();
    });


  nested.test('primary prop:',
    assert => {
      const comment = renderElement(<Comment primary />).dom('article.uk-comment');
      const actual = comment.hasClass('uk-comment-primary');
      assert.ok(actual, 'Adds comment primary class to comment element');

      assert.end();
    });
});
