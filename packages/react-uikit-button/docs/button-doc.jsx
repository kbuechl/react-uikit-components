import React from 'react';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';
import examples from './button-examples';

const name = 'Button';
const npmName = 'react-uikit-button';
const summary = 'Easily create nice looking buttons, which come in different styles.';

const propTuples = [
  { Prop: 'body', Type: 'string' },
  { Prop: 'block', Type: 'bool' },
  { Prop: 'context', Type: 'oneOf active, link, or disabled' },
  { Prop: 'disabled', Type: 'bool' },
  { Prop: 'size', Type: 'oneOf mini, small, or large' },
  { Prop: 'type', Type: 'oneOf button, close, or link' },
];

const ButtonDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Types"
      description={<span>
        The Button component creates either a button, link, submit or a close button by setting the <code>type</code>.
        By defualt the Button component will create a button if no type is provided.
        </span>
      }
      jsx={examples.basicExample}
      snippet={examples.basicSnippet}
    />
    <DocExample
      name="Button Contexts"
      description={<span>The color of the button can be easily changed by adding a context to the context prop.</span>}
      jsx={examples.contextExample}
      table={examples.contextTable}
      snippet={examples.contextSnippet}
    />
    <DocExample
      name="Button Sizes"
      description={<span>To change the size of a Button set the <code>size</code> prop to mini, small, or large.</span>}
      jsx={examples.sizeExample}
      snippet={examples.sizeSnippet}
    />
    <DocExample
      name="Button Blocks"
      description={<span>To create a full width button add the <code>block</code> prop to the buttton component.</span>}
      jsx={examples.blockExample}
      snippet={examples.blockSnippet}
    />
    <DocExample
      name="Button dropdown"
      description={<span>Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.</span>}
    />
    <DocFooter {...{ name, propTuples }} />
  </div>
);

export default ButtonDoc;
