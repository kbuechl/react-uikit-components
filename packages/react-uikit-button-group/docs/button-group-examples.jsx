import React from 'react';

import Button from 'react-uikit-button';
import ButtonGroup from '../lib/button-group';

const generateExampleJSX = (context) => (
  <ButtonGroup display='block' margin='smallBottom'>
    <Button body='Link' type='link' context={context} />
    <Button body='Button' context={context}/>
    <Button body='Button' context={context}/>
  </ButtonGroup>
);

const generateCodeSnippet = (context) =>
  `<ButtonGroup display='block' margin='smallBottom'>
  <Button body='Link' type='link'${context ? ` context="${context}"`: ""}/>
  <Button body='Button${context ? ` context="${context}"`: ""}'/>
  <Button body='Button${context ? ` context="${context}"`: ""}'/>
</ButtonGroup>`;

const contextArgs = [null, 'primary', 'success', 'danger'];

const contextExample = (
  <div>
    {contextArgs.map((arg) => generateExampleJSX(arg))}
  </div>
);

const contextSnippet = contextArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

export default {
  contextExample,
  contextSnippet,
};
