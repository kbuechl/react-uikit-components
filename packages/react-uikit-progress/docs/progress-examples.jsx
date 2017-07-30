import React from 'react';

import Progress from '../lib/progress';

const sizesExample = (
  <div>
    <Progress bar={50} />
    <Progress bar={60} size='small' />
    <Progress bar={70} size='mini' />
  </div>
);
const sizesSnippet = `
  <Progress bar={50} />
  <Progress bar={60} size='small' />
  <Progress bar={70} size='mini' />`;

const contextExample = (
  <div>
    <Progress bar={70} context='success' />
    <Progress bar={60} context='warning' />
    <Progress bar={50} context='danger' />
  </div>
);
const contextSnippet = `
  <Progress bar={70} context='success' />
  <Progress bar={60} context='warning' />
  <Progress bar={50} context='danger' />`;

const stripedExample = (
  <div>
    <Progress bar={60} striped />
    <Progress bar={80} striped active />
  </div>
);
const stripedSnippet = `
  <Progress bar={60} striped />
  <Progress bar={80} striped active />`;

export default {
  sizesExample,
  sizesSnippet,
  contextExample,
  contextSnippet,
  stripedExample,
  stripedSnippet,
};
