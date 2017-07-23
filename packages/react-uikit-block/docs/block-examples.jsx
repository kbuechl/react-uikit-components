import React from 'react';
import Table from 'react-uikit-table';

import { generateJsxAndSnippet, BlockExample, BlockSnippet } from './block-example-generators';

// TODO: break this into more examples...
const containerArgs = { context: "muted", container: true, title: 'Muted + Container' };
const contextArgs = [
  { context: "default", container: true, title: 'Default' },
  { context: "muted", container: true, title: 'Muted' },
  { context: "primary", container: true, title: 'Primary' },
  { context: "secondary", container: true, title: 'Secondary' },
];
const largeArgs = { context: "secondary", container: true, title: 'Secondary', contrast: true, large: true };
const mutedArgs = { context: "muted", title: 'Basic' };

const contextTable = (
  <Table head="*" body={[
    { Value: "default", Description : "Add the default background color, usually white or similar." },
    { Value: <code>muted</code>, Description : "Adds a light background color." },
    { Value: <code>primary</code>, Description : "Adds the primary background color." },
    { Value: <code>secondary</code>, Description : "Adds the secondary background color, usually a dark one." }
  ]} />
);

export const mutedExample = generateJsxAndSnippet(mutedArgs);
export const containerExample = generateJsxAndSnippet(containerArgs);
export const largeExample = generateJsxAndSnippet(largeArgs);
export const contextExample = {
  jsx: (<div>{contextArgs.map((example, key) => BlockExample(example, key))}</div>),
  snippet: contextArgs
    .map((example) => BlockSnippet(example))
    .join('\n'),
  table: contextTable,
};
