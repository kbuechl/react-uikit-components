import React from 'react';
import Alert from '../lib/alert';

import Button from 'react-uikit-button';
import uikit from 'react-uikit-base';

let velocity;
if (process.env.NODE_ENV !== 'mdGenerator') {
  velocity = require('velocity-animate');
} else {
  velocity = () => {};
}

const loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// action functions:
const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);
  velocity(element, { opacity: [1, 0.5], translateX: [0, -300] }, {display: 'block'});
};
const handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(element, { opacity: [0, 1], translateX: [-300, 0] },  {display: 'block'});
};
// action function snippets:
const alertOpenString = `const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(element, { opacity: [1, 0.5], translateX: [0, -300] }, {display: 'block'});
};`;
const alertCloseString = `handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(element, { opacity: [0, 1], translateX: [-300, 0] },  {display: 'block'});
};`;

const basicExample = (
  <div>
    <Button body='Open Alert' onClick={(e, kitid) => handleAlertOpen(e, 'alert1')} />
    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>{loremIpsumString}</Alert>
  </div>
);
const basicSnippet = `${alertOpenString}\n${alertCloseString}\n
  ...
  <div>
    <Button body='Open Alert' onClick={(e, kitid) => handleAlertOpen(e, 'alert1')} />
    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>{loremIpsumString}</Alert>
  </div>`;

const contextExample = (
  <div>
    <Alert show context='success'>To indicate success or a positive message add the <code>context='success'</code> prop.</Alert>
    <Alert show context='warning'>To indicate a message containing a warning add the <code>context='warning'</code> prop.</Alert>
    <Alert show context='danger'>To indicate an important message add the <code>context='danger'</code> prop.</Alert>
  </div>
);
const contextSnippet = `
  <div>
    <Alert show context='success'>To indicate success or a positive message add the <code>context='success'</code> prop.</Alert>
    <Alert show context='warning'>To indicate a message containing a warning add the <code>context='warning'</code> prop.</Alert>
    <Alert show context='danger'>To indicate an important message add the <code>context='danger'</code> prop.</Alert>
  </div>`;

const sizeExample = <Alert show large ><h1>Important notice</h1>{loremIpsumString}</Alert>;
const sizeSnippet = `<Alert show large>\n  <h1>Important notice</h1>\n  ${loremIpsumString}\n</Alert>`;

export { basicExample, basicSnippet, contextExample, contextSnippet, sizeExample, sizeSnippet };
