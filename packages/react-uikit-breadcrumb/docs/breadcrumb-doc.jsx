import React from 'react';

import examples from './breadcrumb-examples';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Breadcrumb';
const npmName = 'react-uikit-breadcrumb';
const secondaryName = 'BreadcrumbItem';
const secondaryPath = 'react-uikit-breadcrumb/lib/breadcrumb-item';
const summary = 'Create breadcrumbs to show users their location within a website.';

const breadcrumbTuples = [
  { Prop: 'items', Type: 'array' },
  { Prop: 'type', Type: "oneOf: 'active' / 'link' / 'disabled'" },
];
const breadcrumbItemTuples = [
  { Prop: 'body', Type: 'string' },
  { Prop: 'href', Type: 'string' },
  { Prop: 'type', Type: "oneOf: 'active' / 'link' / 'disabled'" },
];

const BreadcrumbDoc = () => (
  <div>
    <DocHeader {... { name, npmName, secondaryName, secondaryPath, summary }} />
    <DocExample
      name="Breadcrumb"
      description={`The Breadcrumb component consists of links which are aligned side by side and separated by a divider.`}
      table={examples.basicTable}
      jsx={examples.basicJSX}
      snippet={examples.basicSnippet}
    />
    <DocFooter {...{ name, propTuples: breadcrumbTuples }} />
    <DocFooter {...{ name: 'Breadcrumb Item', propTuples: breadcrumbItemTuples }} />
  </div>
);

export default BreadcrumbDoc;
