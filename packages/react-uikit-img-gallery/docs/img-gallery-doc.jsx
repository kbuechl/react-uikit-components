import React from 'react';
import ImgGroup from '../lib/img-gallery';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Img Gallery';
const npmName = 'react-uikit-img-gallery';
const summary = 'Create gallery of images.';
const propTuples = [{
    Prop: "items",
    Type: "array of objects; See Img component for props."
  }
];

const src = 'docs/images/placeholder_200x150_2.svg';
const margin = 'bottom right';

const basicExampleJsx = (
  <ImgGroup items={[
    {src}, {src}, {src}, {src}, {src}, {src} ]}/>
);
const basicExampleSnippet = `<ImgGroup items={[{\n src: ${src} \n}, {\n src: ${src} \n}, {\n src: ${src} \n}, {\n src: ${src} \n}, {\n src: ${src} \n}, {\n src: ${src} \n}]}/>`;

const itemExampleJsx = (
  <ImgGroup items={[
    {src, margin}, {src, margin}, {src, margin}, {src, margin}, {src, margin}, {src, margin} ]}/>
);
const itemExampleSnippet = `<ImgGroup items={[{\n src: ${src}, margin: ${margin} \n}, {\n src: ${src}, margin: ${margin} \n}, {\n src: ${src}, margin: ${margin} \n}, {\n src: ${src}, margin: ${margin} \n}, {\n src: ${src}, margin: ${margin} \n}, {\n src: ${src}, margin: ${margin} \n}]}/>`;

const ImgGalleryDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      jsx={basicExampleJsx}
      snippet={basicExampleSnippet}
    />
    <DocExample
      name="Img gallery items"
      description={<span>The <code>items</code> is an array which takes a collection of JSON objects. JSON object properties can be any of the props fom the Img component.</span>}
      jsx={itemExampleJsx}
      snippet={itemExampleSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ImgGalleryDoc;
