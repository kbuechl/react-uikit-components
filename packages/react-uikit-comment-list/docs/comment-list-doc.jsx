import React from 'react';
import Comment from 'react-uikit-comment';
import CommentList from '../lib/comment-list';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Comment List';
const npmName = 'react-uikit-comment-list';
const summary = 'For lists of comments.';

const loremIpsumString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const avatar = { src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' };


const basicSnippet = `<CommentList>
  <li>
    <Comment title='Author' meta='12 days ago | Profile | #' avatar={{src: ${avatar.src}, alt: ${avatar.alt}}}>
      <p>${loremIpsumString}</p>
    </Comment>
    <CommentList>
      <li>
        <Comment title='Author' meta='12 days ago | Profile | #' avatar={{src: ${avatar.src}, alt: ${avatar.alt}}}>
          <p>${loremIpsumString}</p>
        </Comment>
      </li>
    </CommentList>
  </li>
</CommentList>
`;
const basicExample = (
  <CommentList>
    <li>
      <Comment title='Author' meta='12 days ago | Profile | #' avatar={avatar}>
        <p>{loremIpsumString}</p>
      </Comment>
      <CommentList>
        <li>
          <Comment title='Author' meta='12 days ago | Profile | #' avatar={avatar}>
            <p>{loremIpsumString}</p>
          </Comment>
        </li>
      </CommentList>
    </li>
  </CommentList>
);

const CommentListDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      description="The CommentList component enables the creation of comment lists. It also supports nested comments."
      jsx={basicExample}
      snippet={basicSnippet}
      scroll
    />
    <DocFooter { ...{ name }} />
  </div>
);

export default CommentListDoc;
