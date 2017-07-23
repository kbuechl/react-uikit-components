import React from 'react';

import { basicExample, basicSnippet, contextExample, contextSnippet, sizeExample, sizeSnippet } from './alert-example';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Alert';
const npmName = 'react-uikit-alert';
const summary = 'Defines styles for success, warning and error messages.';
const propTuples = [
  { Prop: "close", Type: "func" },
  { Prop: "context", Type: "oneOf: 'success' / 'warning' / 'danger'" },
  { Prop: "large", Type: "bool" },
  { Prop: "show", Type: "bool" }
];

const AlertDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={<div>
        <p>The alert component creates an alert box.</p>
        <p>To add a close button add the <code>close</code> prop with a callback. The kitid as well as the event will be passed to the callback alllowing for things such as animations.</p>
        <p>By default Alert components are set to display none. Add the <code>show</code> to make the component visible.</p>
      </div>}
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Alert contexts"
      description={<span>To change the context of an alert add <code>context='success'</code>, <code>context='warning'</code>, or <code>context='danger'</code> prop.</span>}
      jsx={contextExample}
      snippet={contextSnippet}
    />
    <DocExample
      name="Alert size"
      description={<span>To increase the spacing in an alert add the <code>large</code> prop to the alert component.</span>}
      jsx={sizeExample}
      snippet={sizeSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);


export default AlertDoc;
