'use strict';


import React from 'react';
import Codeblock from '../..//react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';



export default class BlockHandler extends React.Component {
  render () {
    return <div>
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
      <section>
        <h1>UIkit base</h1>
        <p className='uk-article-lead'>
          Create react components for UIKit.
        </p>
        <p>
          Tested with <a href='http://getuikit.com/'>UIKit</a> version 2.24.2.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-base --save;</code>
        </p>
        <p>
          ES6 <br />
        <code>import uikit from 'react-uikit-base';</code><br />
        </p>

        <p>
          ES5 <br />
        <code>var uikit = require&#40;'react-uikit-base'&#41;;</code>
        </p>

        <hr className="uk-article-divider" />

          <p>
            To create a uikit component pass the a component as an argument
            to <code>uikit.base(Component)</code>.
          </p>

        <h3 className='example'>Example</h3>

        <Codeblock>
{`import React from 'react';

  class Component extends React.Component {
    render () {
      const cssClassNames = uikit.helpers.cleanClasses([
        this.props.classes,
        this.props.className
      ]);

      return <div className={cssClassNames}>
        {this.props.children}
      </div>;
    }
  }

uikit.base(Component);
`}
        </Codeblock>
      </section>


      <section>
        <h2>UIkit base props</h2>
          <p>
            Ukit base returns a new component with all the UIkit utility classes as props.
          </p>
        <Table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='uk-text-left>
                <code>align</code>
              </td>
              <td className='uk-text-left>oneOf<br /> left, right, center, middleLeft or middleRight</td>
              <td className='uk-text-left>Aligns elements with spacing between the text and the element.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>children</code>
              </td>
              <td className='uk-text-left>any</td>
              <td className='uk-text-left>Childern elements.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>className</code>
              </td>
              <td className='uk-text-left>string</td>
              <td className='uk-text-left>CSS class names.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>borderRadius</code>
              </td>
              <td className='uk-text-left>oneOf<br /> rounded or circle</td>
              <td className='uk-text-left>Add rounded corners to an element.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>clear</code>
              </td>
              <td className='uk-text-left>oneOf<br />
              fix,
              nbfc
              and alt</td>
              <td className='uk-text-left>Clear floats.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>center</code>
              </td>
              <td className='uk-text-left>bool</td>
              <td className='uk-text-left>Center a container. For any other block element, you additionally need to apply a width.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>col</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                '1-1'<br />
                '1-2'<br />
                '1-3', '2-3'<br />
                '1-4', '2-4', '3-4'<br />
                '1-5', '2-5', ' 3-5', '4-5'<br />
                '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
                '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
            </td>
              <td className='uk-text-left>Adds width base on fraction.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>colsSmall</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                '1-1'<br />
                '1-2'<br />
                '1-3', '2-3'<br />
                '1-4', '2-4', '3-4'<br />
                '1-5', '2-5', ' 3-5', '4-5'<br />
                '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
                '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
              </td>
              <td className='uk-text-left>Adds width base on fraction if device widths is 480px or higher</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>colsMedium</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                '1-1'<br />
                '1-2'<br />
                '1-3', '2-3'<br />
                '1-4', '2-4', '3-4'<br />
                '1-5', '2-5', ' 3-5', '4-5'<br />
                '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
                '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
              </td>
              <td className='uk-text-left>Adds width base on fraction if device widths is 768px or higher</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>colsLarge</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                '1-1'<br />
                '1-2'<br />
                '1-3', '2-3'<br />
                '1-4', '2-4', '3-4'<br />
                '1-5', '2-5', ' 3-5', '4-5'<br />
                '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
                '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
              </td>
              <td className='uk-text-left>Adds width base on fraction if device widths is 960px or higher</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>contrast</code>
              </td>
              <td className='uk-text-left>bool</td>
              <td className='uk-text-left>Changes the color of the element.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>display</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                block,
                inline
                or inlineblock.
              </td>
              <td className='uk-text-left>Changes property of an element</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>float</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                left or right.
              </td>
              <td className='uk-text-left>Floats an element left or right.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>hidden</code>
              </td>
              <td className='uk-text-left>
                string<br />
                all,
                invisible,
                large,
                small,
                medium,
                touch
                and notouch.
              </td>
              <td className='uk-text-left>Hides element on differnt devices.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>kitid</code>
              </td>
              <td className='uk-text-left>string</td>
              <td className='uk-text-left>Adds a data attribute to be used as an idetifier.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>margin</code>
              </td>
              <td className='uk-text-left>
                string<br />
                top,
                left,
                bottom,
                right,
                smallTop,
                smallLeft,
                smallBottom,
                smallRight,
                largeTop,
                largeLeft,
                largeBottom,
                largeRight,
                remove,
                removeTop
                and removeBottom.
              </td>
              <td className='uk-text-left>Adds spacing to block elements</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>order</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                firast,
                firstSmall,
                firstMedium,
                firstLarge,
                firstXlarge,
                last,
                lastSmall,
                lastMedium,
                lastLarge,
                lastXlarge
              </td>
              <td className='uk-text-left>Changes the order of an item if it is a child of a flexbox.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>padding</code>
              </td>
              <td className='uk-text-left>
                string<br />
                top,
                left,
                bottom,
                right,
                smallTop,
                smallLeft,
                smallBottom,
                smallRight,
                largeTop,
                largeLeft,
                largeBottom,
                largeRight,
                remove,
                removeTop,
                removeBottom
                and removeVertical
              </td>
              <td className='uk-text-left>Adds or removes the padding from an element.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>position</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                top,
                topLeft,
                topRight,
                bottom,
                bottomLeft,
                bottomRight,
                cover,
                relative,
                or zIndex.
              </td>
              <td className='uk-text-left>Positions element.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>responsive</code>
              </td>
              <td className='uk-text-left>
                string<br />
                width and height
              </td>
              <td className='uk-text-left>Makes max width and/or height 100%</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>scroll</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                auto,
                box,
                or text.
              </td>
              <td className='uk-text-left></td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>textAlign</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                center,
                centerSmall,
                centerMedium,
                left,
                leftSmall,
                leftMedium,
                justify,
                or right.
              </td>
              <td className='uk-text-left>Aligns text horizontaly.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>textVerticle</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                top,
                middle,
                or bottom.
              </td>
              <td className='uk-text-left>Aligns text verticaly</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>textWrap</code>
              </td>
              <td className='uk-text-left>
                oneOf<br />
                truncate,
                break,
                or nowrap.
              </td>
              <td className='uk-text-left>Wraps or prevents wrapping of text.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>vertical</code>
              </td>
              <td className='uk-text-left>
                parent,
                middle,
                bottom
              </td>
              <td className='uk-text-left>Verticaly align element.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>viewport</code>
              </td>
              <td className='uk-text-left>bool</td>
              <td className='uk-text-left>Fills the height of the entire viewport.</td>
            </tr>
            <tr>
              <td className='uk-text-left>
                <code>visible</code>
              </td>
              <td className='uk-text-left>
                string<br />
                hover,
                hoverInline,
                large,
                small,
                medium
              </td>
              <td className='uk-text-left>Shows element on differnt devices.</td>
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

    </div>;
  }
}
