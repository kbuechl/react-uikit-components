import React from 'react';

import Overlay from '../lib/overlay';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Overlay';
const npmName = 'react-uikit-overlay';
const summary = 'Create an image overlay. Useful for galleries or preview links.';
const propTuples =  [{
    Prop: "alt",
    Type: "string"
  }, {
    Prop: "background",
    Type: "bool"
  }, {
    Prop: "flex",
    Type: "bool"
  }, {
    Prop: "height",
    Type: "string"
  }, {
    Prop: "icon",
    Type: "bool"
  }, {
    Prop: "image",
    Type: "string"
  }, {
    Prop: "large",
    Type: "object {`{width, height, url}`}"
  }, {
    Prop: "medium",
    Type: "object {`{width, height, url}`}"
  }, {
    Prop: "small",
    Type: "object {`{width, height, url}`}"
  }, {
    Prop: "src",
    Type: "string"
  }, {
    Prop: "width",
    Type: "string"
  }, {
    Prop: "xlarge",
    Type: "object {`{width, height, url}`}"
}];

const basicExample = (
  <Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
  </Overlay>
);
const basicSnippet = `
  <Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
  </Overlay>`;

const overlayExample = (
  <Overlay background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
  </Overlay>
);
const overlaySnippet = `
  <Overlay background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
  </Overlay>`;

const OverlayDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <p>Overlays are images that other elemets can be placed on top of.</p>
    <DocExample
      name="Example"
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Overlay background"
      description={<span>Overlay can be given a background by adding the <code>background</code> prop.</span>}
      jsx={overlayExample}
      snippet={overlaySnippet}
    />
    <DocExample
      name="Overlay icon"
      jsx={<Overlay icon background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />}
      snippet={`<Overlay icon background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />`}
    />
    <DocExample
      name="Overlay image"
      jsx={<Overlay image='docs/images/placeholder_600x400_2.svg' width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />}
      snippet={`<Overlay image='docs/images/placeholder_600x400_2.svg' width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />`}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

// TODO: docs that we're commented out, perhaps revise this and implement:
/*
  <section>
  <h1>Overlay caption</h1>
  <p>

  </p>

  <h3 className='example'>Example</h3>
  <Grid >
    <Overlay cols='1-2'caption='top' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' margin='bottom'>
      Lorem ipsum dolor sit amet.
    </Overlay>

    <Overlay cols='1-2'caption='bottom' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' margin='bottom'>
      Lorem ipsum dolor sit amet.
    </Overlay>
    <Overlay cols='1-2'caption='left' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' >
      Lorem ipsum dolor sit amet.
    </Overlay>
    <Overlay cols='1-2'caption='right' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' >
      Lorem ipsum dolor sit amet.
    </Overlay>
  </Grid>


  <h4 className='code'>Code</h4>
  <Codeblock syntax='xml'>
  {
  `<Grid indent>
  <Col cols='1-2'>
  <Overlay caption='top' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' margin='bottom'>
  Lorem ipsum dolor sit amet.
  </Overlay>
  </Col>
  <Col cols='1-2'>
  <Overlay caption='bottom' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' margin='bottom'>
  Lorem ipsum dolor sit amet.
  </Overlay>
  </Col>
  <Col cols='1-2'>
  <Overlay caption='left' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' >
  Lorem ipsum dolor sit amet.
  </Overlay>
  </Col>
  <Col cols='1-2'>
  <Overlay caption='right' background width='300px' height='200px' src='docs/images/placeholder_600x400.svg' >
  Lorem ipsum dolor sit amet.
  </Overlay>
  </Col>
  </Grid>
  `}
    </Codeblock>
  </section>
  <section>
  <h1>Overlay and flex</h1>
  <p>
    Coming soon...
  </p>

  <h3 className='example'>Example</h3>
  <Overlay flex
    width='300px' height='250px' src='docs/images/placeholder_600x400.svg'/>

  <h4 className='code'>Code</h4>
  <Codeblock syntax='xml'>
  {
  `<Overlay icon background  width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />
  `}
    </Codeblock>
  </section>

  {<section>
    <h1>Overlay anchor</h1>
    <p>
      Coming soon...
    </p>

    <h3 className='example'>Example</h3>
    <Overlay link
      width='300px' height='250px' src='docs/images/placeholder_600x400.svg'/>

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
  {
  `<Overlay link icon background  width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />
  `}
    </Codeblock>
  </section>
*/

export default OverlayDoc;
