'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Panel from '../../react-uikit-panel/lib/panel';
import Table from '../../react-uikit-table/lib/table';
import Flex from '../../react-uikit-flex/lib/flex';
import Note from '../../react-uikit-note/lib/note';


const FlexDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Flex</h1>
      <p className='uk-article-lead'>
        Utilize the power of Flexbox to create a wide range of layouts.
      </p>
      <p>
        Flex component uses flexbox, a concept that is still quite new but
        extremely powerful for creating layouts. To order Flex items
        see <a href='/https://github.com/otissv/react-uikit-base'>order</a> prop.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-base --save;</code>
        </p>
      <p>
        ES6 <br />
      <code>import Flex from 'react-uikit-flex';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Flex = require&#40;'react-uikit-flex'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <h3 className='example'>Example</h3>
      <Flex>
          <Panel col='1-3' box>
            Box
          </Panel>
          <Panel margin='left'col='1-3'box>
            Box
          </Panel>
          <Panel margin='left' col='1-3'box>
            Box
          </Panel>
      </Flex>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
`
<Flex>
    <Panel col='1-3' box>
      Box
    </Panel>
    <Panel margin='left'col='1-3'box>
      Box
    </Panel>
    <Panel margin='left' col='1-3'box>
      Box
    </Panel>
</Flex>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Flex alignment</h2>
      <p>
        These props define the horizontal and vertical alignment of Flex items
        and distribute the space between them.
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
            <td className='uk-text-left'><code>center</code></td>
            <td className='uk-text-left'>Add this prop to center Flex items horizontally.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>right</code></td>
            <td className='uk-text-left'>Add this prop to align Flex items to the right.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>top</code></td>
            <td className='uk-text-left'>Add this prop to align Flex items to the top.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>middle</code></td>
            <td className='uk-text-left'>Add this prop to align Flex items to the middle.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>bottom</code></td>
            <td className='uk-text-left'>Add this prop to align Flex items to the bottom</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>between</code></td>
            <td className='uk-text-left'>Add this prop to distribute items evenly, with the first
              item at the beginning and last item at the end of the main axis.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>around</code></td>
            <td className='uk-text-left'>Add this prop to distribute items evenly with equal space
              on both sides of each item.</td>
          </tr>
        </tbody>
      </Table>


      <h3 className='example'>Example</h3>
      <Flex middle between >
        <Panel col='1-3' box style={{height: '50px'}}>
          Box
        </Panel>
        <Panel margin='left' col='1-3' box style={{height: '70px'}}>
          Box
        </Panel>
        <Panel margin='left' col='1-3' box style={{height: '100px'}}>
          Box
        </Panel>
      </Flex>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
` <Flex middle between >
  <Panel col='1-3' box style={{height: '50px'}}>
    Box
  </Panel>
  <Panel margin='left' col='1-3' box style={{height: '70px'}}>
    Box
  </Panel>
  <Panel margin='left' col='1-3' box style={{height: '100px'}}>
    Box
  </Panel>
</Flex>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Flex direction</h2>
      <p>
        These props define the axis flex items placed on and their direction.
        By default, items run horizontally from left to right.
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
            <td className='uk-text-left'><code>direction='rowReverse'</code></td>
            <td className='uk-text-left'>Add this props to lay out Flex items from right to left.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>direction='column'</code></td>
            <td className='uk-text-left'>Add this props to lay out Flex items as vertical columns.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>direction='columnReverse'</code></td>
            <td className='uk-text-left'>Add this props to lay out Flex items from bottom to top.</td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>
      <Flex direction='columnReverse'>
        <Panel col='1-3' box>
          1
        </Panel>
        <Panel margin='bottom' col='1-3' box>
          2
        </Panel>
        <Panel margin='bottom' col='1-3' box>
          3
        </Panel>
      </Flex>

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
`<Flex direction='columnReverse'>
  <Panel col='1-3' box>
    1
  </Panel>
  <Panel margin='bottom' col='1-3' box>
    2
  </Panel>
  <Panel margin='bottom' col='1-3' box>
    3
  </Panel>
</Flex>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Flex row wrap</h2>
      <p>
        By default, Flex items fit themselves into one row. Add
        the <code>row='wrap'</code> prop, so that the items wrap into another row when
        they no longer fit the viewport. To change the items' direction so
        that they run from right to left, add the <code>reverse</code> prop.
        The following props modify the alignment of wrapping Fex items.
        To force the flex items into one row, just add the <code>nowrap</code> prop.
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
            <td className='uk-text-left'><code>row='wrap'</code></td>
            <td className='uk-text-left'>Add this prop to for wrap Flex items on multiple rows.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='top'</code></td>
            <td className='uk-text-left'>Add this prop to align multirow Flex items to the top.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='middle'</code></td>
            <td className='uk-text-left'>Add this prop to vertically center multirow Flex items.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='bottom'</code></td>
            <td className='uk-text-left'>Add this prop to align multiline Flex items to the bottom.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='between'</code></td>
            <td className='uk-text-left'>
              Add this prop to distribute Flex item rows evenly, with the first
              row at the top and last row at the bottom of the container.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='around'</code></td>
            <td className='uk-text-left'>
              Add this prop to distribute Flex rows evenly with equal space at the
              top and bottom of each row.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='reverse'</code></td>
            <td className='uk-text-left'>
              Add this prop to change the direction of the Flex items from
              right to left.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>row='nowrap'</code></td>
            <td className='uk-text-left'>
              Add this prop to remove row wrapping.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>
      <Flex row='wrap reverse around'>
        <Panel col='1-3' margin='bottom right' box>
          1
        </Panel>
        <Panel margin='bottom right' col='1-2' box>
          2
        </Panel>
        <Panel margin='bottom right' col='1-3' box>
          3
        </Panel>
        <Panel margin='bottom right' col='1-3' box>
          4
        </Panel>
        <Panel box>
          5
        </Panel>
        <Panel margin='bottom right' col='1-3' box>
          6
        </Panel>
      </Flex>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{
`<Flex row='wrap reverse around'>
  <Panel col='1-3' margin='bottom right' box>
    1
  </Panel>
  <Panel margin='bottom right' col='1-2' box>
    2
  </Panel>
  <Panel margin='bottom right' col='1-3' box>
    3
  </Panel>
  <Panel margin='bottom right' col='1-3' box>
    4
  </Panel>
  <Panel box>
    5
  </Panel>
  <Panel margin='bottom right' col='1-3' box>
    6
  </Panel>
</Flex>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Flex and grid</h2>
      The Flex component can be combined with a grid from
      the <a href='/grid'>Grid</a> component by adding
      <code>grid</code> prop.

      <h4 className='example'>Example</h4>
      <Flex grid >
        <Panel col='1-3'>
          <img src='docs/images/placeholder_400x250.svg' alt='Placeholder image' />
        </Panel>
        <Panel flexAlign='middle' col='2-3'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </Panel>
      </Flex>

      <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{
`<Flex grid >
  <Panel col='1-3'>
    <img src='docs/images/placeholder_400x250.svg' alt='Placeholder image' />
  </Panel>
  <Panel flexAlign='middle' col='2-3'>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    </p>
  </Panel>
</Flex>
`}
        </Codeblock>
    </section>


    <section>
      <h2>Flex Props</h2>
      <p>
        <code>&lt;Flex&gt;</code> props and their types.
      </p>

      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
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
              <code>around</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>center</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>bottom</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>between</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>direction</code>
            </td>
            <td className='uk-text-left'>oneOf<br />rowRevers, column or columnReverse</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>grid</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>middle</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>right</code>
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              <code>row</code>
            </td>
            <td className='uk-text-left'>string<br />wrap, bottom, middle, top, between, around, reverse and nowrap</td>
          </tr><tr>
            <td className='uk-text-left'>
              <code>top</code>
            </td>
            <td className='uk-text-left'>bool</td>
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
        <h2>License</h2>
          <p>MIT</p>
      </section>

  </div>
);

export default FlexDoc;
