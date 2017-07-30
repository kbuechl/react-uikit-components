import React from 'react';
import Note from 'react-uikit-note';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';
import * as examples from './block-examples';

const name = 'Block';
const npmName = 'react-uikit-block';
const summary = 'Separate content sections by bundling them in blocks with different styles.';
const propTuples = [
  { Prop: "context", Type: "oneOf: 'default' / 'muted' / 'primary' / 'secondary'" },
  { Prop: "contrast", Type: "bool" },
  { Prop: "large", Type: "bool" },
];

const BlockDocs = () => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
      <DocExample { ...examples.mutedExample} />
      <DocExample
        name="Block Container"
        description={<span>To put the Block in to a container use the <code>container</code> prop.</span>}
        { ...examples.containerExample}
      />
      <DocExample
        name="Block Context"
        description={<span>To apply different background colors, add one of the following values for the <code>context</code> prop.</span>}
        table={examples.contextTable}
        scroll="text"
        trailingNote={<Note>To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.</Note>}
        { ...examples.contextExample}
      />
      <DocExample
        name="Block large"
        description={<span>To add the body in a container use the <code>container</code> prop.</span>}
        {...examples.largeExample}
      />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default BlockDocs;
