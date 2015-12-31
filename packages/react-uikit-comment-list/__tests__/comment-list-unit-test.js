'use strict';
import test from 'tape';
import CommentList from '../lib/comment-list';
import React from 'react';
import renderElement from './helpers/renderElement';


test('block Component', nested => {
  nested.test('Renders comment list component.',
    assert => {
      const commentList = renderElement(<CommentList kitid='comlist1'/>).dom();

      const actual = commentList.html();
      const expect = '<ul class="uk-comment-list" data-kitid="comlist1"></ul>';

      assert.equals(actual, expect,
        'Correctly renders comment list element');


      assert.end();
    });
});
