import React from 'react';
import Button from 'react-uikit-button';
import Comment from '../lib/comment';
import Table from 'react-uikit-table';

const loremIpsumString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const meta = (
  <div>
    <Button type='link' context='link' size='mini' body='12 days ago'/> |
    <Button type='link' context='link' size='mini' body='Profile'/> |
    <Button type='link' context='link' size='mini' body='#'/>
  </div>
);

const avatar = { src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' };

const generateExampleJSX = (primary) => (
  <Comment primary title='Author' meta={meta} avatar={avatar}>
    <p>{loremIpsumString}</p>
  </Comment>
);

const generateCodeSnippet = (primary) => `
  const meta = <div>
    <Button type='link' context='link' size='mini' body='12 days ago'/> |
    <Button type='link' context='link' size='mini' body='Profile'/> |
    <Button type='link' context='link' size='mini' body='#'/>
  </div>;
  
  ...
  <Comment ${primary? "primary ": ""}title='Author' meta={meta} avatar={{src: '${avatar.src}', alt: '${avatar.alt}'}}>
    <p>${loremIpsumString}</p>
  </Comment>
  ...`;

const basicTable = (
  <Table head="*" body={[
    { Prop: <code>avatar</code>, Description: "Add avatar prop to create an avatar for the comment author." },
    { Prop: <code>title</code>, Description: "Add tilte prop to createCreates a comment title." },
    { Prop: <code>meta</code>, Description: "Add meta prop to add meta data about the comment." },
    { Prop: <code>body</code>, Description: "Add body prop to add text comment body. Body is overridden if comment has children." }
  ]} />
);

const basicExample = generateExampleJSX();
const basicSnippet = generateCodeSnippet();
const primaryExample = generateExampleJSX(true);
const primarySnippet = generateCodeSnippet(true);


export default {
  basicExample,
  basicSnippet,
  basicTable,
  primaryExample,
  primarySnippet,
};
