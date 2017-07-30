import React from 'react';
import Table from 'react-uikit-table';

import Img from '../lib/img';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Img';
const npmName = 'react-uikit-img';
const summary = 'Easily create responsive images.';
const propTuples = [{
    Prop: "alt",
    Type: "string",
  }, {
    Prop: "cover",
    Type: "bool",
  }, {
    Prop: "height",
    Type: "string",
  }, {
    Prop: "large",
    Type: "object: {`{width, height, src}`}",
  }, {
    Prop: "medium",
    Type: "object: {`{width, height, src}`}",
  }, {
    Prop: "small",
    Type: "object: {`{width, height, src}`}",
  }, {
    Prop: "src",
    Type: "string",
  }, {
    Prop: "width",
    Type: "string",
  }, {
    Prop: "xlarge",
    Type: "object: {`{width, height, src}`}",
  }
];

const responsiveTable = (
  <Table
    head={['JSON key', 'Description']}
    body={[{
      "JSON key": "width",
      Description: "The width of the image. The default width is 100% if no width is specified",
      }, {
      "JSON key": "height",
      Description: "The height of the image. The default height is auto if no height is specified",
      }, {
      "JSON key": "src",
      Description: "The src url for the image",
    }
  ]} />
);

const responsiveExample = (
  <Img
    small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
    medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
    large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
    xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
  />
);
const responsiveSnippet = `
  <Img
    small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
    medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
    large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
    xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
  />`;

const coverExample = (
  <Img cover
    small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
    medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
    large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
    xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
  >
    <h1>Cover image</h1>
  </Img>
);
const coverSnippet = `
  <Img cover
    small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
    medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
    large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
    xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
  >
    <h1>Cover image</h1>
  </Img>`;

const ImgDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      jsx={<Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />}
      snippet={`<Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />`}
    />
    <DocExample
      name="Responsive image"
      description={<span>The Image component can provide different images for various viewport widths. Enable responsive behavior by adding one or all of the responsive props <code>small</code>, <code>medium</code>, <code>large</code> or <code>xlarge</code>.<br /> Each responsive size takes a JSON object</span>}
      table={responsiveTable}
      jsx={responsiveExample}
      snippet={responsiveSnippet}
    />
    <DocExample
      name="Cover images"
      description={<span>The <code>cover</code> prop allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image cover.</span>}
      table={responsiveTable}
      jsx={coverExample}
      snippet={coverSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ImgDoc;
