import React from 'react';

import Progress from '../lib/progress';
import examples from './progress-examples';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Progress';
const npmName = 'react-uikit-progress';
const summary = 'Defines different styles for progress bars.';
const propTuples = [
  { Props: 'active', Type: 'bool' },
  { Props: 'bar', Type: 'number' },
  { Props: 'body', Type: 'string' },
  { Props: 'size', Type: "oneOf: 'mini' / 'small'" },
  { Props: 'context', Type: "oneOf: 'success' / 'warning' / 'danger'" },
  { Props: 'striped', Type: 'bool' }
];

const ProgressDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Progress"
      description={<p>To create a Progress component set a number to the <code>bar</code> prop representing the percentage of the progress. Optionaly, text can be added to the bar my assigning the <code>body</code> prop.</p>}
      jsx={<Progress bar={40} body='40%'/>}
      snippet={`<Progress bar={40} body='40%'/>`}
    />
    <DocExample
      name="Progress sizes"
      description={<p>To change the size of the progress bar assign the <code>size</code> prop to either small or mini.</p>}
      jsx={examples.sizesExample}
      snippet={examples.sizesSnippet}
    />
    <DocExample
      name="Progress context"
      description={<p>A context can be given to a progess bar by assigning the context to success, warning or danger.</p>}
      jsx={examples.contextExample}
      snippet={examples.contextSnippet}
    />
    <DocExample
      name="Striped"
      description={<p>The Progress component can be striped by adding the <code>striped</code> prop. You can also add the <code>active</code> prop animate the stripes.</p>}
      jsx={examples.stripedExample}
      snippet={examples.stripedSnippet}
    />
    <DocExample
      name="Combined"
      jsx={<Progress bar={80} striped active size='small' context='danger'/>}
      snippet={`<Progress bar={80} striped active size='small' context='danger'/>`}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ProgressDoc;
