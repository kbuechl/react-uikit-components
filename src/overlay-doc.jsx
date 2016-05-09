'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Overlay from 'react-uikit-overlay';
import Table from 'react-uikit-table';


export default class OverlayHandler extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Overlay</h1>
        <p className='uk-article-lead'>
          Create an image overlay. Useful for galleries or preview links.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-overlay'>react-uikit-overlay</a> on github.
        </p>
      </section>


      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-overlay --save;

// ES6
import Overlay from 'react-uikit-overlay';

// ES5
var Overlay = require('react-uikit-overlay').default;`}
        </Codeblock>

        <hr className="uk-article-divider" />

          <p>
            Overlays are imahes that other elemets can be placed on top of.
          </p>


        <h3 className='example'>Example</h3>
        <Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
          <h3>Title</h3>
          <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
        </Overlay>


        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
  <h3>Title</h3>
  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
</Overlay>
  `}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay background</h1>
        <p>
          Overlay can be given a background by adding the <code>background</code> prop.
        </p>

        <h3 className='example'>Example</h3>
        <Overlay background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
          <h3>Title</h3>
          <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
        </Overlay>


        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Overlay background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
  <h3>Title</h3>
  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
</Overlay>`}
        </Codeblock>
      </section>


      {/* <section>
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
      </section> */}


      <section>
        <h1>Overlay icon</h1>
        <p>

        </p>

        <h3 className='example'>Example</h3>
        <Overlay icon background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
  {
  `<Overlay icon background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />
  `}
        </Codeblock>
      </section>


      <section>
        <h1>Overlay image</h1>
        <p>

        </p>

        <h3 className='example'>Example</h3>
        <Overlay
          image='docs/images/placeholder_600x400_2.svg'
          width='300px'
          height='250px'
          src='docs/images/placeholder_600x400.svg'
        />

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Overlay
  image='docs/images/placeholder_600x400_2.svg'
  width='300px'
  height='250px'
  src='docs/images/placeholder_600x400.svg'
/>
`}
        </Codeblock>
      </section>


      {/* <section>
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

      {/*  <section>
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
      </section> */}


      <section>
        <h2>Overlay Props</h2>
        <p>
          See base component for additional utility props.
        </p>

        <Table>
          <thead>
            <tr>
              <th className='uk-text-left'>Prop</th>
              <th className='uk-text-left'>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='uk-text-left'>
                alt
              </td>
              <td className='uk-text-left'>string</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                background
              </td>
              <td colSpan='2'>bool</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                flex
              </td>
              <td colSpan='2'>bool</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                height
              </td>
              <td className='uk-text-left'>string</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                icon
              </td>
              <td colSpan='2'>bool</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                image
              </td>
              <td colSpan='2'>string</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                large
              </td>
              <td className='uk-text-left'>Obj<br /> {`{width, height, url}`}</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                medium
              </td>
              <td className='uk-text-left'>object<br /> {`{width, height, url}`}</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                small
              </td>
              <td className='uk-text-left'>object<br /> {`{width, height, url}`}</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                src
              </td>
              <td className='uk-text-left'>string</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                width
              </td>
              <td className='uk-text-left'>Sstring</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                xlarge
              </td>
              <td className='uk-text-left'>object<br /> {`{width, height, url}`}</td>
            </tr>
          </tbody>
        </Table>
      </section>

    </div>;
  }
}
