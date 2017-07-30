import React from 'react';

import * as examples from './badge-examples';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Badge';
const npmName = 'react-uikit-badge';
const summary = 'Easily create nicely looking badges to label and highlight your content.';
const propTuples = [
  { Prop: "context", Type: "oneOf: 'default' / 'muted' / 'primary' / 'secondary'" },
  { Prop: "block", Type: "bool" },
  { Prop: "body", Type: "string" },
  { Prop: "notification", Type: "bool" },
];

const BadgeDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Badge Element"
      description={<span>By default badges are <code>span</code> but they can be made &lt;div&gt;s by setting the <code>block</code> prop.</span>}
      {...examples.blockExample}
    />
    <DocExample
      name="Badge Text"
      description={<span>Text can be added either as <code>children</code> &lt;Badge&gt;Awesome&lt;/Badge&gt; or by setting the <code>body</code> prop &lt;Badge body='Awesome'/&gt;.</span>}
      {...examples.textExample}
    />
    <DocExample
      name="Badge notifications"
      description={<span>Use the <code>notification</code> prop to indicate that the badge is a notification. Typically it is used with numbers.</span>}
      {...examples.notificationExample}
    />
    <DocExample
      name="Badge Contexts"
      description={<span>Add the <code>context</code> process with a value of "success", "warning" or "danger" for additional context.</span>}
      {...examples.contextExample}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default BadgeDoc;
