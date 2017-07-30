import React from 'react';

import examples from './thumbnail-examples';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Thumbnail';
const npmName = 'react-uikit-thumbnail';
const summary = 'Create different thumbnail images, which come in various styles and sizes.';

const propTuples = [
  { Prop: "height", Type: "string" },
  { Prop: "img", Type: "object: See Img component props" },
  { Prop: "medium", Type: "object: See Img component props" },
  { Prop: "large", Type: "object: See Img component props" },
  { Prop: "small", Type: "object: See Img component props" },
  { Prop: "src", Type: "string" },
  { Prop: "size", Type: "oneOf: 'large' / 'medium' / 'small' / 'mini' / 'expand'" },
  { Prop: "type", Type: "oneOf: 'block' / 'figure' / 'link'. (Default is block)" },
  { Prop: "width", Type: "string" },
  { Prop: "xlarge", Type: "object: See Img component props" }
];

const ThumbnailDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={<div>
        <p>Thumbnail component creates a thumbnail around the Img component.</p>
        <p>There are three types of thumbnails: block, link and figure. Block is the defualt type. To change the type of thumbnail add the <code>type</code> prop and the respective type.</p>
      </div>}
      jsx={examples.basicExample}
      snippet={examples.basicSnippet}
    />
    <DocExample
      name="Thumbnail caption"
      description={<span>To add a caption, simply add it as a child of the thumbnail.</span>}
      jsx={examples.captionExample}
      snippet={examples.captionSnippet}
    />
    <DocExample
      name="Thumbnail sizes"
      description={<span>Thumbnails can be resized using the <code>size</code> prop.</span>}
      jsx={examples.sizeExample}
      snippet={examples.sizeSnippet}
    />
    <DocExample
      name="Img Props"
      description={<span>Props can be passed to the Img component by using the <code>img</code> prop. See Img compoent for further details.</span>}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ThumbnailDoc;
