'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Grid from 'react-uikit-grid';
import Panel from 'react-uikit-panel';
import Table from 'react-uikit-table';
import Text from 'react-uikit-text';


export default class TextdDoc extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Text</h1>
          <p>
            <a href='https://github.com/otissv/react-uikit-text'>react-uikit-text</a> on github.
          </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-text --save;

ES6
import Text from 'react-uikit-text';

ES5
var Text = require(react-uikit-text').default;`}
        </Codeblock>


      </section>

      <section>
        <h2>Text Types</h2>
        <p>
          The Text component creates a number of various Text components. <br />
          The default type is <code>p</code> which creates a paragraph.
        </p>

        <Table>
          <thead>
            <tr>
              <th className='uk-text-left'>Prop</th>
              <th className='uk-text-left'>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>type='p'</code></td>
            <td className='uk-text-left'>Define a paragraph using the <Text type='p' display='inline'>p type.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='a'</code></td>
              <td className='uk-text-left'>Turn text into hypertext using the <Text type='a'>a type.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='em'</code></td>
              <td className='uk-text-left'>Emphasize text using the <Text type='em'>em element</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='strong'</code></td>
              <td className='uk-text-left'>Impliy any extra importance using the <Text type='strong'>strong type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='code'</code></td>
              <td className='uk-text-left'>Define inline code snippets using the <Text type='code'>code type.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='ins'</code></td>
              <td className='uk-text-left'>Mark document changes as inserted text using the <Text type='ins'>ins type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='mark'</code></td>
              <td className='uk-text-left'>Highlight text with no semantic meaning using the <Text type='mark'>mark type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='q'</code></td>
              <td className='uk-text-left'>Define inline quotations using <Text type='q'> q type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='abbr'</code></td>
              <td className='uk-text-left'>
                Define an abbreviation using the <Text type='abbr' title='Abbreviation Element'>abbr type</Text> with a <code>title=''</code> prop.<br />
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='del'</code></td>
              <td className='uk-text-left'>Mark document changes as deleted text using the <Text type='del'>del type</Text> with a <code>title=''</code> prop.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='dfn'</code></td>
              <td className='uk-text-left'>Define a definition term using the <Text type='dfn' title='Defines a definition term'>dfn type</Text> with a <code>title=''</code> prop.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='small'</code></td>
              <td className='uk-text-left'>De-emphasize text for small print using the <Text type='small'>small</Text> type.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='h1'</code></td>
            <td className='uk-text-left'>Define a h1 heading using the <Text type='h1' display='inline'>h1 type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='h2'</code></td>
            <td className='uk-text-left'>Define a h2 heading using the <Text type='h2' display='inline'>h2 type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='h3'</code></td>
            <td className='uk-text-left'>Define a h3 heading using the <Text type='h3' display='inline'>h3 type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='h4'</code></td>
            <td className='uk-text-left'>Define a h4 heading using the <Text type='h4' display='inline'>h4 type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='h5'</code></td>
            <td className='uk-text-left'>Define a h5 heading using the <Text type='h5' display='inline'>h5 type</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='h6'</code></td>
            <td className='uk-text-left'>Define a h6 heading using the <Text type='h6' display='inline'>h6 type</Text>.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>type='span'</code></td>
              <td className='uk-text-left'>
                Define parts of inline text with the <Text type='span' display='inline'>span type</Text>.< br />
                Use when no other component or HTML element is suitable.
              </td>
            </tr>

            <tr>
              <td className='uk-text-left'><code>type='hr'</code></td>
            <td className='uk-text-left'>Create a horizontal rule by using the <code>hr type</code>.</td>
            </tr>
          </tbody>
        </Table>
      </section>


      <section>
        <h2>Text headings</h2>
        <p>
          Use <code>heading</code> prop to alter any of the Text component types to a heading.
        </p>

        <Table>
          <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>heading='h1'</code></td>
              <td className='uk-text-left'>Changes the size of text to h1</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>heading='h2'</code></td>
              <td className='uk-text-left'>Changes the size of text to h2</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>heading='h3'</code></td>
              <td className='uk-text-left'>Changes the size of text to h3</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>heading='h4'</code></td>
              <td className='uk-text-left'>Changes the size of text to h4</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>heading='h5'</code></td>
              <td className='uk-text-left'>Changes the size of text to h5</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>heading='h6'</code></td>
              <td className='uk-text-left'>Changes the size of text to h6</td>
            </tr>
          </tbody>
        </Table>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
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
          Add the <code>bold</code> prop to create bold text.
        </p>

        <h3 className='example'>Example</h3>
        <p>
          This is <Text bold type='span'>bold text</Text>.
        </p>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
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
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>size='small'</code></td>
              <td className='uk-text-left'>
                Add the <code>size='small'</code> prop to <Text type='span' size='small'>decrease the font size.</Text>
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>large</code></td>
              <td className='uk-text-left'>
                Add the <code>size='large'</code> prop to <Text type='span' size='large'>increase the font size.</Text>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>


      <section>
        <h2>Text context</h2>
        <p>
          The text context prop can be used to give text context.
        </p>

        <Table>
          <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>context='muted'</code></td>
            <td className='uk-text-left'><Text context='muted'>Add the muted prop to mute text.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>context='primary'</code></td>
            <td className='uk-text-left'><Text context='primary'>Add the primary prop to highlight additional information.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>context='success'</code></td>
            <td className='uk-text-left'><Text context='success'>Add the success prop to indicate success.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>context='warning'</code></td>
            <td className='uk-text-left'><Text context='warning'>Add the warning prop to indicate warning.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>context='danger'</code></td>
            <td className='uk-text-left'><Text context='danger'>Add the danger prop to indicate danger.</Text></td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>context='contrast'</code></td>
            <td className='uk-text-left'><Text>Add the contrast prop to make the text context readable on flat context areas or pictures. It's usualy white.</Text></td>
            </tr>

          </tbody>
        </Table>


        <h4 className='code'>Code</h4>

        <Codeblock syntax='xml'>
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
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>textAlign='left'</code></td>
              <td className='uk-text-left'>Aligns text to the left.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='leftSmall'</code></td>
              <td className='uk-text-left'>Aligns text to the left only on small devices.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='leftMedium'</code></td>
              <td className='uk-text-left'>Aligns text to the left on medium and small devices.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='right'</code></td>
              <td className='uk-text-left'>Aligns text to the right.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='center'</code></td>
              <td className='uk-text-left'>Centers text horizontally.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='centerSmall'</code></td>
              <td className='uk-text-left'>Centers text horizontally only on small devices.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='centerMedium'</code></td>
              <td className='uk-text-left'>Centers text horizontally on medium and small devices.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textAlign='justify'</code></td>
              <td className='uk-text-left'>Justifies text.</td>
            </tr>

          </tbody>
        </Table>

        <h3 className='exmaple'>Example</h3>
        <Grid gutter='small' indent>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='left'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='leftSmall'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-small'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='leftMedium'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-medium'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='right'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='center'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='centerSmall'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-small'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='centerMedium'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-medium'</code>
            </Text>
          </Panel>
          <Panel box margin='bottom' col='1-2'>
            <Text textAlign='justify'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code>
            </Text>
          </Panel>
        </Grid>

        <h4 className='code'>Code</h4>
        <Codeblock scroll='text'>
{`<Grid gutter='small' indent>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='left'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='leftSmall'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='leftSmall'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='leftMedium'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='leftMedium'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='right'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='center'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='centerSmall'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='centerSmall'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='centerMedium'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='centerMedium'</code>
    </Text>
  </Panel>
  <Panel box margin='bottom' col='1-2'>
    <Text textAlign='justify'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code>
    </Text>
  </Panel>
</Grid>`}
        </Codeblock>
      </section>


      <section>
        <h2>Text vertical</h2>
        <p>
          The textVertical prop vertically aligns text to an object.
        </p>
        <Table>
          <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>textVertical='top'</code></td>
              <td className='uk-text-left'>Aligns text to the top.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textVertical='middle'</code></td>
              <td className='uk-text-left'>Centers text vertically.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textVertical='bottom'</code></td>
              <td className='uk-text-left'>Aligns text to the bottom.</td>
            </tr>

          </tbody>
        </Table>

        <p>
          As React adds additional spans around text you will need
          to manually add a few lines of css to your style file.
        </p>

        <h3 className='example'>Example</h3>
        <Grid gutter='small'>
          <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
            <img src='docs/images/placeholder_avatar.svg' width='50' height='50' />
            <Text textVertical='top' type='span'>
              Lorem ipsum <code>textVerticle='top'</code>
            </Text>
          </Panel>
          <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
            <img src='docs/images/placeholder_avatar.svg' width='50' height='50' />
            <Text textVertical='middle' type='span'>
              Lorem ipsum <code>textVerticle='middle'</code>
            </Text>
          </Panel>
          <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
            <img src='docs/images/placeholder_avatar.svg' width='50' height='50' />
            <Text textVertical='bottom' type='span'>
              Lorem ipsum <code>textVerticle='bottom'</code>
            </Text>
          </Panel>
        </Grid>


        <h4 className='code'>Code</h4>

        <h5>style.css</h5>
        <Codeblock>
{`.uk-text-top > * {
  vertical-align: top;
}
`}
        </Codeblock>

        <h5>script.js</h5>
        <Codeblock scroll='text'>
{`<Grid gutter='small'>
  <Panel colMedium='1-2' colLarge='1-3'>
    <img src='docs/images/placeholder_avatar.svg' width='50' height='50' />
    <Text textVertical='top' type='span'>
      Lorem ipsum <code>textVerticle='top'</code>
    </Text>
  </Panel>
  <Panel colMedium='1-2' colLarge='1-3'>
    <img src='docs/images/placeholder_avatar.svg' width='50' height='50' />
    <Text textVertical='middle' type='span'>
      Lorem ipsum <code>textVerticle='middle'</code>
    </Text>
  </Panel>
  <Panel colMedium='1-2' colLarge='1-3'>
    <img src='docs/images/placeholder_avatar.svg' width='50' height='50' />
    <Text textVertical='bottom' type='span'>
      Lorem ipsum <code>textVerticle='bottom'</code>
    </Text>
  </Panel>
</Grid>
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
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td className='uk-text-left'><code>textWrap='truncate'</code></td>
              <td className='uk-text-left'>Prevents text from wrapping into multiple lines, truncating it instead.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textWrap='break'</code></td>
              <td className='uk-text-left'>Breaks strings if their length exceeds the width of their container.</td>
            </tr>
            <tr>
              <td className='uk-text-left'><code>textWrap='nowrap'</code></td>
              <td className='uk-text-left'>Breaks strings if their length exceeds the width of their container.</td>
            </tr>

          </tbody>
        </Table>

        <h3 className='exmaple'>Example</h3>
        <Grid gutter='small' indent>
          <Panel col='1-3' box >
            <Text textWrap='truncate'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='truncate'</code>
            </Text>
          </Panel>
          <Panel col='1-3' box>
            <Text textWrap='break'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='break'</code>
            </Text>
        </Panel>
          <Panel col='1-3' box >
            <Text textWrap='nowrap'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='nowrap'</code>
            </Text>
          </Panel>
        </Grid>


        <Codeblock scroll='text'>
{`<Grid gutter='small' indent>
  <Panel col='1-3' box >
    <Text textWrap='truncate'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='truncate'</code>
    </Text>
  </Panel>
  <Panel col='1-3' box>
    <Text textWrap='break'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='break'</code>
    </Text>
</Panel>
  <Panel col='1-3' box >
    <Text textWrap='nowrap'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap='nowrap'</code>
    </Text>
  </Panel>
</Grid>
`}
      </Codeblock>
      </section>


      <section>
        <h2>Text Props</h2>
        <p>
          See base component for additional utility props.
        </p>


        <Table>
          <thead>
            <tr>
              <td className='uk-text-left'>Prop</td>
              <td className='uk-text-left'>Type</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='uk-text-left'>
                bold
              </td>
              <td className='uk-text-left'>bool</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                context
              </td>
              <td className='uk-text-left'>
                oneOf<br/>
                muted, primary, success, warning, danger, contrast
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                heading
              </td>
              <td className='uk-text-left'>
                oneOf<br/>
                h1, h2, h3, h4, h5, h6
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                href
              </td>
              <td className='uk-text-left'>
                string<br/>
                for a type only.
              </td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                size
              </td>
              <td className='uk-text-left'>oneOf<br /> small or large</td>
            </tr>
            <tr>
              <td className='uk-text-left'>
                type
              </td>
              <td className='uk-text-left'>oneOf<br/>
              a abbr, code, del, dfn, em, h1, h2, h3, h4, h5, h6, hr,
              ins, mark, q, p (default), small, span, strong.
              </td>
            </tr>


          </tbody>
        </Table>
      </section>
    </div>;
  }
}
