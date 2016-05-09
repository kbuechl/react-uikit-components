'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Panel from 'react-uikit-panel';
import Flex from 'react-uikit-flex';


const FlexDoc = (props) => (
  <div>
    <section>
      <h1>Flex</h1>
      <p>
        Utilise the power of Flexbox to create a wide range of layouts.
      </p>

      <p>
        <a href='https://github.com/otissv/react-uikit-flex'>react-uikit-flex</a> on github.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-flex --save;

// ES6
>import Flex from 'react-uikit-flex';

// ES5
var Flex = require('react-uikit-flex').default;`}
      </Codeblock>

      <p>
        Flex component uses flexbox, a concept that is still quite new but
        extremely powerful for creating layouts.
      </p>

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

      <h3 className='code'>Code</h3>
      <Codeblock>
{
`<Flex>
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
            <th>Prop</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>center</code></td>
            <td>Add this prop to center Flex items horizontally.</td>
          </tr>
          <tr>
            <td><code>right</code></td>
            <td>Add this prop to align Flex items to the right.</td>
          </tr>
          <tr>
            <td><code>top</code></td>
            <td>Add this prop to align Flex items to the top.</td>
          </tr>
          <tr>
            <td><code>middle</code></td>
            <td>Add this prop to align Flex items to the middle.</td>
          </tr>
          <tr>
            <td><code>bottom</code></td>
            <td>Add this prop to align Flex items to the bottom.</td>
          </tr>
          <tr>
            <td><code>between</code></td>
            <td>Add this prop to distribute items evenly, with the first
              item at the beginning and last item at the end of the main axis.</td>
          </tr>
          <tr>
            <td><code>around</code></td>
            <td>Add this prop to distribute items evenly with equal space
              on both sides of each item.</td>
          </tr>
        </tbody>
      </Table>


      <h3 className='example'>Example</h3>

        <Flex middle between>
          <Panel col='1-4' box style={{height: '50px'}}>
            Box
          </Panel>
          <Panel margin='left' col='1-4' box style={{height: '70px'}}>
            Box
          </Panel>
          <Panel margin='left' col='1-4' box style={{height: '100px'}}>
            Box
          </Panel>
        </Flex>

      <h3 className='code'>Code</h3>
      <Codeblock>
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
        Directon props define the axis flex items placed on and their direction.
        By default, items run horizontally from left to right.
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
            <td><code>direction='rowReverse'</code></td>
            <td>Add this prop to lay out Flex items from right to left.</td>
          </tr>
          <tr>
            <td><code>direction='column'</code></td>
            <td>Add this prop to lay out Flex items as vertical columns.</td>
          </tr>
          <tr>
            <td><code>direction='columnReverse'</code></td>
            <td>Add this prop to lay out Flex items from bottom to top.</td>
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


      <h3 className='code'>Code</h3>
      <Codeblock>
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
        the <code>row='wrap'</code> prop so that the items wrap into another row when
        they no longer fit into the viewport. To change the items' direction so
        that they run from right to left, add the <code>reverse</code> prop.
        The following props modify the alignment of wrapping Flex items.
        To force the Flex items into one row, just add the <code>nowrap</code> prop.
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
            <td><code>row='wrap'</code></td>
            <td>Add this prop to for wrap Flex items on multiple rows.</td>
          </tr>
          <tr>
            <td><code>row='top'</code></td>
            <td>Add this prop to align multirow Flex items to the top.</td>
          </tr>
          <tr>
            <td><code>row='middle'</code></td>
            <td>Add this prop to vertically center multirow Flex items.</td>
          </tr>
          <tr>
            <td><code>row='bottom'</code></td>
            <td>Add this prop to align multiline Flex items to the bottom.</td>
          </tr>
          <tr>
            <td><code>row='between'</code></td>
            <td>
              Add this prop to distribute Flex item rows evenly, with the first
              row at the top and last row at the bottom of the container.
            </td>
          </tr>
          <tr>
            <td><code>row='around'</code></td>
            <td>
              Add this prop to distribute Flex rows evenly with equal space at the
              top and bottom of each row.
            </td>
          </tr>
          <tr>
            <td><code>row='reverse'</code></td>
            <td>
              Add this prop to change the direction of the Flex items from
              right to left.
            </td>
          </tr>
          <tr>
            <td><code>row='nowrap'</code></td>
            <td>
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

      <h3 className='code'>Code</h3>
      <Codeblock scroll='text'>
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
      the Grid component by adding <code>grid</code> prop.

        <h3 className='example'>Example</h3>
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

        <h3 className='code'>Code</h3>
        <Codeblock>
{
`<Flex grid>
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
      <h2>Flex order</h2>
        <p>
          To see how to order Flex items see <code>order</code> prop in the Base
          component under Utiliy props.
        </p>
      </section>


    <section>
      <h2>Flex Props</h2>
      <p>
        See Base for additional utility props.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              around
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              center
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              bottom
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              between
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              direction
            </td>
            <td>oneOf<br />rowRevers, column or columnReverse</td>
          </tr>
          <tr>
            <td>
              grid
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              middle
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              right
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              row
            </td>
            <td>string<br />wrap, bottom, middle, top, between, around, reverse and nowrap</td>
          </tr><tr>
            <td>
              top
            </td>
            <td>bool</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default FlexDoc;
