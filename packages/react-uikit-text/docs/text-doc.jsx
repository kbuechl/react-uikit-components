'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Text from '../../react-uikit-text/lib/text';
import Note from '../../react-uikit-note/lib/note';


export default class TextdHandler extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Text</h1>
        <p>
          A collection of useful text components to style your content.
        </p>
        <p>
          Tested with <a href='http://getuikit.com/'>UIKit</a> version 2.24.2.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-text --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import Text from 'react-uikit-text';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var Text = require&#40;'react-uikit-text'&#41;;</code>
        </p>

        <Note badge={{context: 'danger', body: 'Note:'}}>
          UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
          This has been tested with UIKit version 2.24.2.
        </Note>

        <p>
          See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
        </p>
      </section>

      <section>
        <h2>Text Types</h2>
        <p>
          The Text compoent creates a number of various Text compnents. <br />
          The default type is <code>p</code> which creates a paragraph.
        </p>

        <Table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>type='p'</code></td>
            <td>Define a paragraph with the <Text type='p' display='inline'>p type.</Text></td>
            </tr>
            <tr>
              <td><code>type='a'</code></td>
              <td>Turn text into hypertext using the <Text type='a'>a type.</Text></td>
            </tr>
            <tr>
              <td><code>type='em'</code></td>
              <td>Emphasize text using the <Text type='em'>em element</Text>.</td>
            </tr>
            <tr>
              <td><code>type='strong'</code></td>
              <td>Imply any extra importance using the <Text type='strong'>strong type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='code'</code></td>
              <td>Define inline code snippets using the <Text type='code'>code type.</Text></td>
            </tr>
            <tr>
              <td><code>type='ins'</code></td>
              <td>Mark document changes as inserted text using the <Text type='ins'>ins type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='mark'</code></td>
              <td>Highlight text with no semantic meaning using the <Text type='mark'>mark type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='q'</code></td>
              <td>Define inline quotations using <Text type='q'>q element inside a q type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='abbr'</code></td>
              <td>
                Define an abbreviation using the <Text type='abbr' title='Abbreviation Element'>abbr type</Text> with a <code>title=''</code> prop.<br />
              </td>
            </tr>
            <tr>
              <td><code>type='del'</code></td>
              <td>Mark document changes as deleted text using the <Text type='del'>del type</Text> with a <code>title=''</code> prop.</td>
            </tr>
            <tr>
              <td><code>type='dfn'</code></td>
              <td>Define a definition term using the <Text type='dfn' title='Defines a definition term'>dfn type</Text> with a <code>title=''</code> prop.</td>
            </tr>
            <tr>
              <td><code>type='small'</code></td>
              <td>De-emphasize text for small print using the <Text type='small'>small</Text> type.</td>
            </tr>
            <tr>
              <td><code>type='h1'</code></td>
            <td>Define a h1 heading using the <Text type='h1' display='inline'>h1 type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='h2'</code></td>
            <td>Define a h2 heading using the <Text type='h2' display='inline'>h2 type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='h3'</code></td>
            <td>Define a h3 heading using the <Text type='h3' display='inline'>h3 type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='h4'</code></td>
            <td>Define a h4 heading using the <Text type='h4' display='inline'>h4 type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='h5'</code></td>
            <td>Define a h5 heading using the <Text type='h5' display='inline'>h5 type</Text></td>
            </tr>
            <tr>
              <td><code>type='h6'</code></td>
            <td>Define a h6 heading using the <Text type='h6' display='inline'>h6 type</Text>.</td>
            </tr>
            <tr>
              <td><code>type='span'</code></td>
              <td>
                Define parts of inline text with the <Text type='span' display='inline'>span type</Text>.< br />
                Use when no other component or HTML element is suitable.
              </td>
            </tr>

            <tr>
              <td><code>type='hr'</code></td>
            <td>Create a horizontal rule by using the <code>hr type</code>.</td>
            </tr>
          </tbody>
        </Table>
      </section>


      <section>
        <h2>Text headings</h2>
        <p>
          Use <code>heading</code> prop alter any of the Text component types.
        </p>

        <Table>
          <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>heading='h1'</code></td>
              <td>Changes the size of text to h2</td>
            </tr>
            <tr>
              <td><code>heading='h3'</code></td>
              <td>Changes the size of text to h4</td>
            </tr>
            <tr>
              <td><code>heading='h3'</code></td>
              <td>Changes the size of text to h4</td>
            </tr>
            <tr>
              <td><code>heading='h4'</code></td>
              <td>Changes the size of text to h5</td>
            </tr>
            <tr>
              <td><code>heading='h5'</code></td>
              <td>Changes the size of text to h5</td>
            </tr>
          </tbody>
        </Table>

        <h4 className='code'>Code</h4>
        <Codeblock>
{`<Text heading='h1'>...</Text>
<Text heading='h2'>...</Text>
<Text heading='h3'>...</Text>
<Text heading='h4'>...</Text>
<Text heading='h5'>...</Text>
<Text heading='h6'>...</Text>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Text bold</h2>
        <p>
          Add the <code>bold</code> props to create bold text.
        </p>

        <h3 className='example'>Example</h3>
        <p>
          This is <Text bold type='span'>bold text</Text>.
        </p>

        <h4 className='code'>Code</h4>
        <Codeblock>
{`<Text bold type='span'>bold text</Text>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Text size</h2>
        <p>
          Text size can be changed by using one of the <code>size=''</code> props.
        </p>

        <Table>
          <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>size='small'</code></td>
              <td>
                Add the <code>size='small'</code> prop to decrease the font size.
              </td>
            </tr>
            <tr>
              <td><code>large</code></td>
              <td>
                Add the <code>size='large'</code> prop to increase the font size.
                </td>
            </tr>
          </tbody>
        </Table>


        <Codeblock>
{`<Text type='span' size='small'>Decreases the font size.</Text>

<Text type='span' size='large'>Increases the font size.</Text>

  `}
        </Codeblock>
      </section>


      <section>
        <h2>Text context</h2>
        <p>
          The text context prop can be used to give text context.
        </p>


        <Codeblock>
{`<Text context='muted'>Add the muted props for text.</Text>
<Text context='primary'>Add the primary props to text context.</Text>
<Text context='success'>Add the success props to  your to text context.</Text>
<Text context='warning'>Addthe  warning props to  your to text context.</Text>
<Text context='danger'>Add the danger props to  your to text context.</Text>
<Text context='contrast'>Add the contrast props to make the text context readable on flat context areas or pictures. It's often white.</Text>
  `}
        </Codeblock>
      </section>


      <section>
        <h2>Text align</h2>
        <p>
          The textAlign prop horizontally aligns text.
        </p>
        <Table>
          <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>textAlign='left'</code></td>
              <td>Aligns text to the left.</td>
            </tr>
            <tr>
              <td><code>textAlign='left-small'</code></td>
              <td>Aligns text to the left only on small devices.</td>
            </tr>
            <tr>
              <td><code>textAlign='left-medium'</code></td>
              <td>Aligns text to the left on medium and small devices.</td>
            </tr>
            <tr>
              <td><code>textAlign='right'</code></td>
              <td>Aligns text to the right.</td>
            </tr>
            <tr>
              <td><code>textAlign='center'</code></td>
              <td>Centers text horizontally.</td>
            </tr>
            <tr>
              <td><code>textAlign='center-small'</code></td>
              <td>Centers text horizontally only on small devices.</td>
            </tr>
            <tr>
              <td><code>textAlign='center-medium'</code></td>
              <td>Centers text horizontally on medium and small devices.</td>
            </tr>
            <tr>
              <td><code>textAlign='justify'</code></td>
              <td>Justifies text.</td>
            </tr>

          </tbody>
        </Table>

        <h3 className='exmaple'>Example</h3>

        <Codeblock>
{`<Text textAlign='left'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code>
</Text>

<Text textAlign='leftSmall'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-small'</code>
</Text>

<Text textAlign='leftMedium'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-medium'</code>
</Text>

<Text textAlign='right'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code>
</Text>

<Text textAlign='center'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code>
</Text>

<Text textAlign='centerSmall'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-small'</code>
</Text>

<Text textAlign='centerMedium'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-medium'</code>
</Text>

<Text textAlign='justify'>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code>
</Text>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Text verticle</h2>
        <p>
          The textVerticle prop  vertically aligns text to an object.
        </p>


        <h3 className='exmaple'>Example</h3>

        <Codeblock>
{`
<Text textVerticle='top' type='span'>
  Lorem ipsum <code>textAlign='left'</code>
</Text>

<Text textVerticle='middle' type='span'>
  Lorem ipsum  <code>textAlign='left'</code>
</Text>
<Text textVerticle='bottom' type='span'>
  Lorem ipsum <code>textAlign='left'</code>
</Text>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Text wrap</h2>
        <p>
          The textWrap prop wraps text.
        </p>
        <Table>
          <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>textWrap='truncate'</code></td>
              <td>Prevents text from wrapping into multiple lines, truncating it instead.</td>
            </tr>
            <tr>
              <td><code>textWrap='break'</code></td>
              <td>Breaks strings if their length exceeds the width of their container.</td>
            </tr>
            <tr>
              <td><code>textWrap='nowrap'</code></td>
              <td>Breaks strings if their length exceeds the width of their container.</td>
            </tr>

          </tbody>
        </Table>

        <h3 className='exmaple'>Example</h3>

        <Codeblock>
{`<Text textWrap='truncate'>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='truncate'</code>
</Text>
</Panel>

<Text textWrap='break'>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit  <code>textWrap='break'</code>
</Text>

<Text textWrap='nowrap'>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='nowrap'</code>
</Text>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Text Props</h2>
        <p>
          <code>&lt;Text&gt;</code> props and their types.
        </p>
        <p>
          See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
        </p>


        <Table>
          <thead>
            <tr>
              <td>Prop</td>
              <td>Type</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code></code>
              </td>
              <td></td>
              <td></td>
            </tr>

          </tbody>
        </Table>
      </section>


      <section>
        <h2>Tests</h2>
        <p>
          <code>npm run test</code> to run tests with minimal output.<br />
          <code>npm run test:spec</code> to run tests with detailed output.<br />
          <code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br />
        </p>
      </section>

      <section>
        <h2>Build</h2>
        <p>
          <code>npm run build</code> to build files fro distribution.<br />
          <code>npm run build:watch</code> watches src directory and builds files on changes.<br />
        </p>
      </section>


      <section>
        <h2>Lint</h2>
        <p>
          <code>npm run lint</code> lints scripts in src directory.<br />
          <code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br />
        </p>
      </section>


      <section>
        <h2>Tests</h2>
        <p>
          <code>npm run test</code> to run tests with minimal output.<br />
          <code>npm run test:spec</code> to run tests with detailed output.<br />
          <code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br />
        </p>
      </section>

      <section>
        <h2>Build</h2>
        <p>
          <code>npm run build</code> to build files fro distribution.<br />
          <code>npm run build:watch</code> watches src directory and builds files on changes.<br />
        </p>
      </section>


      <section>
        <h2>Lint</h2>
        <p>
          <code>npm run lint</code> lints scripts in src directory.<br />
          <code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br />
        </p>
      </section>

      <section>
        <h2>License</h2>
          <p>MIT</p>
      </section>

    </div>;
  }
}
