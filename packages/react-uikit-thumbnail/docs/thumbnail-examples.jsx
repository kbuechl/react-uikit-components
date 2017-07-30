import React from 'react';

import Thumbnail from '../lib/thumbnail';

const basicExample = (
  <div>
    <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
    <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
    <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />
  </div>
);
const basicSnippet = `
  <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
  <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
  <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />`;

const captionExample = (
  <div>
    <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>div</code></Thumbnail>
    <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>link</code></Thumbnail>
    <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>figure</code></Thumbnail>
  </div>
);
const captionSnippet = `
  <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>div</code></Thumbnail>
  <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>link</code></Thumbnail>
  <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>figure</code></Thumbnail>`;

const sizeExample = (
  <div>
    <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'><code>large</code></Thumbnail>
    <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'><code>medium</code></Thumbnail>
    <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'><code>small</code></Thumbnail>
    <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'><code>mini</code></Thumbnail>
    <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'><code>expand</code></Thumbnail>
  </div>
);
const sizeSnippet = `
  <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'><code>large</code></Thumbnail>
  <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'><code>medium</code></Thumbnail>
  <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'><code>small</code></Thumbnail>
  <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'><code>mini</code></Thumbnail>
  <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'><code>expand</code></Thumbnail>`;

export default {
  basicExample,
  basicSnippet,
  captionExample,
  captionSnippet,
  sizeExample,
  sizeSnippet,
};
