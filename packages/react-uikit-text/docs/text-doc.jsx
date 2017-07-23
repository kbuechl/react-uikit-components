import React from 'react';

import Text from '../lib/text';
import examples from './text-examples';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';


const name = 'Text';
const npmName = 'react-uikit-text';
const propTuples = [
  { Prop: "bold", Type: "bool" },
  { Prop: "context", Type: "oneOf: 'muted' / 'primary' / 'success' / 'warning' / 'danger' / 'contrast'", },
  { Prop: "heading", Type: "oneOf: 'h1' / 'h2' / 'h3' / 'h4' / 'h5' / 'h6'", },
  { Prop: "href", Type: "string for a type only.", },
  { Prop: "size", Type: "oneOf: 'small' / 'large'", },
  { Prop: "type", Type: "oneOf: 'a' / 'abbr' / 'code' / 'del' / 'dfn' / 'em' / 'h1' / 'h2' / 'h3' / 'h4' / 'h5' / 'h6' / 'hr' / 'ins' / 'mark' / 'q' / 'p' (default) | 'small' / 'span' / 'strong'" }
];

const TextDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName }} />
    <DocExample
      name="Text Types"
      description={<span>The Text component creates a number of various Text components. The default type is <code>p</code> which creates a paragraph.</span>}
      table={examples.textTypeTable}
    />
    <DocExample
      name="Text headings"
      description={<span>Use <code>heading</code> prop to alter any of the Text component types to a heading.</span>}
      table={examples.headingsTable}
      snippet={`<Text heading='h1'>...</Text>\n<Text heading='h2'>...</Text>\n<Text heading='h3'>...</Text>\n<Text heading='h4'>...</Text>\n<Text heading='h5'>...</Text>\n<Text heading='h6'>...</Text>`}
    />
    <DocExample
      name="Text bold"
      description={<span>Add the <code>bold</code> prop to create bold text.</span>}
      jsx={<p>This is <Text bold type='span'>bold text</Text>.</p>}
      snippet={`<Text bold type='span'>bold text</Text>`}
    />
    <DocExample
      name="Text size"
      description={<span>Text size can be changed by using one of the <code>size=''</code> props.</span>}
      table={examples.sizeTable}
    />
    <DocExample
      name="Text context"
      description={<span>The text context prop can be used to give text context.</span>}
      table={examples.contextTable}
      snippet={examples.contextSnippet}
    />
    <DocExample
      name="Text align"
      description={<span>The textAlign prop horizontally aligns text.</span>}
      table={examples.alignTable}
      jsx={examples.alignExample}
      snippet={examples.alignSnippet}
    />
    <DocExample
      name="Text vertical"
      description={<span>The textVertical prop vertically aligns text to an object.</span>}
      table={examples.verticalTable}
      jsx={examples.verticalExample}
      snippet={examples.verticalSnippet}
    />
    <DocExample
      name="Text wrap"
      description={<span>The textWrap prop wraps text.</span>}
      table={examples.textWrapTable}
      jsx={examples.textWrapExample}
      snippet={examples.textWrapSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default TextDoc;
