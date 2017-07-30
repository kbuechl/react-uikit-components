import React from 'react';
import Note from 'react-uikit-note';

import examples from './article-examples';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Article';
const npmName = 'react-uikit-article';
const summary = 'Create articles within your page.';
const propTuples = [
  { Prop: "lead", Type: "string" },
  { Prop: "meta", Type: "string" },
  { Prop: "title", Type: "string" },
];

const ArticleDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description="The article component consists of the article itself, a title, a lead and meta data"
      table={examples.basicTable}
      jsx={examples.basicExample}
      snippet={examples.basicSnippet}
      trailingNote={<Note>To create separate sections in an article use <code>&lt;hr className="uk-article-divider" &#47;&gt;</code>.</Note>}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ArticleDoc;
