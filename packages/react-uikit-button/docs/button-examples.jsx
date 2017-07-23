import React, { PropTypes } from 'react';
import Table from 'react-uikit-table';

import Button from '../lib/button';

const generateExampleJSX = ({ body, block, context, disabled, margin, type }) =>
  <Button {...{ body, block, context, disabled, margin, type }} />;

generateExampleJSX.propTypes = {
  body: PropTypes.string,
  block: PropTypes.bool,
  context: PropTypes.string,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  type: PropTypes.string,
};

const generateCodeSnippet = ({ body, block, context, disabled, margin, size, type }) =>
  `<Button${body ? `body="${body}"`: ""}${context ? `context="${context}"`: ""}${margin ? `margin="${margin}"`: ""}${size ? `size="${size}"`: ""}${type ? `type="${type}"`: ""}${disabled ? " disabled": ""}${block ? " block": ""} />`;

// An abstraction to save the same snippet being written multiple times
const exampleAbstraction = (argsArray) =>
  <div>{argsArray.map((arg) => <div>{generateExampleJSX(arg)}</div>)}</div>;

const basicArgs = [
  { body: 'Button', margin: 'bottom right' },
  { body: 'Link', margin: 'bottom right', type: 'link' },
  { body: 'Submit', margin: 'bottom right', type: 'submit' },
  { body: 'Disabled', margin: 'bottom right', disabled: true },
  { type: 'close' },
];
const contextArgs = [
  { body: 'Primary', context: 'primary', margin: 'bottom right' },
  { body: 'Success', context: 'success', margin: 'bottom right' },
  { body: 'Danger', context: 'danger', margin: 'bottom right' },
  { body: 'Link', context: 'link', type: 'Link' },
];
const sizeArgs = [
  { body: 'Mini Button', size: 'mini', margin: 'bottom right' },
  { body: 'Mini Button', size: 'mini', margin: 'bottom', context: 'primary' },
  { body: 'Small Button', size: 'small', margin: 'bottom right' },
  { body: 'Small Button', size: 'small', margin: 'bottom', context: 'primary' },
  { body: 'Default Button', margin: 'bottom right' },
  { body: 'Default Button', margin: 'bottom', context: 'primary' },
  { body: 'Large Button', size: 'large', margin: 'bottom right' },
  { body: 'Large Button', size: 'large', margin: 'bottom', context: 'primary' },
];
const blockArgs = [
  { body: 'Button', margin: 'small bottom', block: true },
  { body: 'Button', context: 'primary', block: true },
];

const basicExample = exampleAbstraction(basicArgs);
const basicSnippet = basicArgs.map((arg) => generateCodeSnippet(arg)).join('\n');
const contextExample = exampleAbstraction(contextArgs);
const contextSnippet = contextArgs.map((arg) => generateCodeSnippet(arg)).join('\n');
const contextTable = (
  <Table head={['Prop', 'Description']} body={[
    {
      type: <code>context='primary'</code>,
      description: 'Emphasizes to identify the primary action in a set of buttons.'
    }, {
      type: <code>context='success'</code>,
      description: 'Indicates a successful or positive action.'
    }, {
      type: <code>context='danger'</code>,
      description: 'Indicates a dangerous or negative action.'
    }, {
      type: <code>context='link'</code>,
      description: 'De-emphasizes to look like a link while maintaining button behavior.'
    }
  ]} />
);
const sizeExample = exampleAbstraction(sizeArgs);
const sizeSnippet = sizeArgs.map((arg) => generateCodeSnippet(arg)).join('\n');
const blockExample = exampleAbstraction(blockArgs);
const blockSnippet = blockArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

export default {
  basicExample,
  basicSnippet,
  blockExample,
  blockSnippet,
  contextExample,
  contextSnippet,
  contextTable,
  sizeExample,
  sizeSnippet,
};
