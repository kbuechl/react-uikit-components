import React from 'react';

import examples from './comment-examples';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Comment';
const npmName = 'react-uikit-comment';
const summary = 'Create comments, for example about articles.';
const propTuples = [
  { Prop: 'avatar', Type: 'object \`{src, alt}\`' },
  { Prop: 'body', Type: 'string' },
  { Prop: 'meta', Type: 'any' },
  { Prop: 'primary', Type: 'bool' },
  { Prop: 'title', Type: 'string' }
];

const CommentDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={ `The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.`}
      table={examples.basicTable}
      jsx={examples.basicExample}
      snippet={examples.basicSnippet}
    />
    <DocExample
      name={'Comment Color'}
      description={'To style a comment differently, for example to highlight it as the admin\'s comment, just add the primary prop.'}
      jsx={examples.primaryExample}
      snippet={examples.primarySnippet}
    />
    <DocFooter {...{ name, propTuples }} />
  </div>
);

export default CommentDoc;
