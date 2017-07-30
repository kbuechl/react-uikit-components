import React from 'react';
import Note from '../lib/note';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Note';
const npmName = 'react-uikit-note';
const summary = 'Easily add notes to content.';
const propTuples = [{
    Prop: "badge",
    Type: "string or object. See Badge component for props."
  }, {
    Prop: "body",
    Type: "string"
}];

const loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const basicExample = (
  <div>
    <Note>{loremIpsumString}</Note>
    <Note badge='EXAMPLE'>{loremIpsumString}</Note>
  </div>
);
const basicSnippet = `
  <div>
    <Note>${loremIpsumString}</Note>
    <Note badge='EXAMPLE'>${loremIpsumString}</Note>
  </div>`;

const contextExample = (
  <div>
    <Note badge={{body: 'Success', context:'success'}}>Lorem ipsum dolor sit amet</Note>
    <Note badge={{body: 'Warning', context:'warning'}}>Lorem ipsum dolor sit amet</Note>
    <Note badge={{body: 'Danger', context:'danger'}}>Lorem ipsum dolor sit amet</Note>
  </div>
);
const contextSnippet = `
  <div>
    <Note badge={{body: 'Success', context:'success'}}>Lorem ipsum dolor sit amet</Note>
    <Note badge={{body: 'Warning', context:'warning'}}>Lorem ipsum dolor sit amet</Note>
    <Note badge={{body: 'Danger', context:'danger'}}>Lorem ipsum dolor sit amet</Note>
  </div>`;

const NoteDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={<span>The Note component consists of a paragraph with a prefixed bagde. To create a Note component add a label for the badge prop <code>badge='NOTE'</code> and either add text as a child or to the <code>body</code> prop. If no bagde is provided the default badge is 'Note'</span>}
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Note context"
      description={<span>Note badges can be given context using the badge prop and setting the context property</span>}
      jsx={contextExample}
      snippet={contextSnippet}
    />
    <DocExample
      name="Note Props"
      description={<span>See Badge component from more information</span>}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default NoteDoc;
