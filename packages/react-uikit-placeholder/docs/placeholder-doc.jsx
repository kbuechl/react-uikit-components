import React from 'react';

import Note from 'react-uikit-note';

import Placeholder from '../lib/placeholder';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Placeholder';
const npmName = 'react-uikit-placeholder';
const summary = 'Create a placeholder space that can be used for uploading files via drag and drop.';
const propTuples = [
  { Prop: 'large', Type: 'bool' },
];

const PlaceholderDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <Note badge='note'>
      Placeholder component does not include any drag and drop functionality
    </Note>
    <DocExample
      jsx={<Placeholder body='Placeholder' textAlign='center'/>}
      snippet={`<Placeholder  body='Placeholder' textAlign='center'/>`}
    />
    <DocExample
      name="Large placeholder"
      jsx={<Placeholder large  body='Large placeholder' textAlign='center'/>}
      snippet={`<Placeholder large  body='Large placeholder' textAlign='center'/>`}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default PlaceholderDoc;
