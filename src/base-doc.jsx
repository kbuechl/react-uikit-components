'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';


const BaseDoc = (props) => (
  <div>
    <section>
      <h1>UIKit base</h1>
      <p className='uk-article-lead'>
        Create react components for UIKit.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-base'>react-uikit-base</a> on github.
      </p>

    </section>


    <section>
      <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-base --save;

// ES6
<code>import uikit from 'react-uikit-base';

// ES5
var uikit = require;('react-uikit-base').default;
`}
      </Codeblock>

    </section>


    <section>

      <h2>Base</h2>

        <p>
          To create a uikit component pass a component as an argument to the base property.
          The new component will have all the utility props avaliable to it.
        </p>

      <h3 className='code'>Code</h3>
      <Codeblock>
{`import React from 'react';

const Component = (props) => {
const cssClassNames = uikit.helpers.cleanClasses([
  this.props.classes,
  this.props.className
]);

return <div className={cssClassNames}>
  {this.props.children}
</div>;
};

uikit.base(Component);

// <Component />
`}
      </Codeblock>
    </section>


    <section>
      <h2>Element</h2>

        <p>
          An empty component that has all the utility props can be quickly created by using the element property.<br />
          This can be useful for generic containers.
        </p>

      <h3 className='example'>Code</h3>

      <Codeblock>
{`import React from 'react';

const Col = uikit.element;

// <Col>
//   {this.props.children}
// </Col>
`}
    </Codeblock>
  </section>


  <section>
    <h2>Helper functions</h2>
    <p>
      UIkit components come with a number of helper function to assist in the creation of new components.
    </p>
    <hr className="uk-article-divider" />

    <h3>breakpoints</h3>

    <p>
      Returns media and screen objects for handling different responsive sizes.
    </p>


    <h4>Media</h4>
    <p>
      Returns a string of the media size.
    </p>


    <Table striped caption='Responsive media sizes' head={'*'} body={[
      {Media: 'small', Size: 767},
      {Media: 'medium', Size: 768},
      {Media: 'large', Size: 960},
      {Media: 'xlarge', Size: 1200}
    ]} />

    <Codeblock>
{`breakpoints.small; // 767
breakpoints.medium; // 768
breakpoints.large; // 960
breakpoints.xlarge; // 1200
`}
    </Codeblock>


    <h4>Screen</h4>
    <p>
      Returns a true or false depending on the window.innerWidth.
    </p>

    <Table striped caption='Responsive media sizes' head={'*'} body={[
      {Screen: 'small', Size: 'less than 767'},
      {Screen: 'medium', Size: 'More than 768 and less than 960'},
      {Screen: 'large', Size: 'More than 960 and less than 1200'},
      {Screen: 'xlarge', Size: 'More than 1200'}
    ]} />

    <hr className="uk-article-divider" />


    <h3>closeClass</h3>
    <p>
      Return UIKits 'uk-close' class. If alt is passed as an argument 'uk-close-alt' is returned instead.
    </p>
    <h3 className='example'>Code</h3>

    <Codeblock>
{`closeClass();    // 'uk-close';
closeClass(alt); // 'uk-close-alt';
`}
  </Codeblock>


    <hr className="uk-article-divider" />


    <h3>colSpan</h3>
    <p>
      Returns an array of available column width spans. See utility props below.
    </p>


    <hr className="uk-article-divider" />


    <h3>cleanClasses</h3>
    <p>
      Returns a new array with all falsey values removed.
    </p>
    <h3 className='example'>Code</h3>


    <Codeblock>
{`
class Alert (props) => {
...
const cssClassNames = uikit.helpers.cleanClasses([
  'uk-alert',
  props.large ? 'uk-alert-large' : null,
  props.className
]);
...
}

<Alert kitid='alert1'/>
// <div data-kitid="alert1" class="uk-alert"></div>
`}
  </Codeblock>
    <hr className="uk-article-divider" />

    <h3>cleanProps</h3>
    <p>
      cleanProps take two arguments, props object and array of keys to be removed.
      A new object literal is returned excluding keys that were in the array.
    </p>
    <h3 className='example'>Code</h3>


    <Codeblock>
{`const MyComponent (props) = {
ignoreProps = ['type'];

return <div {...cleanProps(ignoreProps)(props)}></div>;
};


`}
  </Codeblock>
    <hr className="uk-article-divider" />


    <h3>getClass</h3>
    <p>
      getClass takes two arguments. The key as a string and an object.
      If the key exists the value is returned, else an empty string is returned.
    </p>

    <hr className="uk-article-divider" />


    <h3>stringToClasses</h3>
    <p>
      stringToClasses take two arguments. The string of keys and an object. <br />
      A new string is returned containing all the values of the keys that exist in the object.
    </p>

    <hr className="uk-article-divider" />


    <h3>queryData</h3>
    <p>
      Returns DOM node that matches a data attribute value.
    </p>
    <h3 className='example'>Code</h3>

    <Codeblock>
{`queryData('myAttr="myid2"');

// <div data-myAttr="myid2"></div>
`}
  </Codeblock>
    <hr className="uk-article-divider" />


    <h3>queryDataAll</h3>
    <p>
      Returns all DOM nodes that match a data attribute value.
    </p>
    <h3 className='example'>Code</h3>

    <Codeblock>
{`queryData('myAttr="myid2"');

// [
//   <div data-myAttr="myid2"></div>
//   <div data-myAttr="myid2"></div>
//   <div data-myAttr="myid2"></div>
// ]
`}
    </Codeblock>
      <hr className="uk-article-divider" />


      <h3>getElement</h3>
      <p>
        Returns DOM node that matches a data-kitid value.
      </p>
      <h3 className='example'>Code</h3>

    <Codeblock>
{`getElement('myid1');

// <div data-kitid="myid1"></div>
`}
      </Codeblock>

    </section>


    <section>
      <h2>Utility props</h2>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>
            <th className='uk-text-left'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              align
            </td>
            <td className='uk-text-left'>oneOf<br /> left, right, center, middleLeft or middleRight</td>
            <td className='uk-text-left'>Aligns elements with spacing between the text and the element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              children
            </td>
            <td className='uk-text-left'>any</td>
            <td className='uk-text-left'>Children elements.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              className
            </td>
            <td className='uk-text-left'>string</td>
            <td className='uk-text-left'>CSS class names.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              borderRadius
            </td>
            <td className='uk-text-left'>oneOf<br /> rounded or circle</td>
            <td className='uk-text-left'>Add rounded corners to an element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              clear
            </td>
            <td className='uk-text-left'>oneOf<br />
            fix,
            nbfc
            and alt</td>
          <td className='uk-text-left'>Clears floats.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              center
            </td>
            <td className='uk-text-left'>bool</td>
            <td className='uk-text-left'>Center a container. For any other block element, you additionally need to apply a width.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              col
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              '1-1'<br />
              '1-2'<br />
              '1-3', '2-3'<br />
              '1-4', '2-4', '3-4'<br />
              '1-5', '2-5', ' 3-5', '4-5'<br />
              '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
              '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
          </td>
            <td className='uk-text-left'>Wraps the component inside of a div element and adds a width class based on a fraction.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              colsSmall
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              '1-1'<br />
              '1-2'<br />
              '1-3', '2-3'<br />
              '1-4', '2-4', '3-4'<br />
              '1-5', '2-5', ' 3-5', '4-5'<br />
              '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
              '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
            </td>
            <td className='uk-text-left'>Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 480px or higher</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              colsMedium
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              '1-1'<br />
              '1-2'<br />
              '1-3', '2-3'<br />
              '1-4', '2-4', '3-4'<br />
              '1-5', '2-5', ' 3-5', '4-5'<br />
              '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
              '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
            </td>
            <td className='uk-text-left'>Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 768px or higher</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              colsLarge
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              '1-1'<br />
              '1-2'<br />
              '1-3', '2-3'<br />
              '1-4', '2-4', '3-4'<br />
              '1-5', '2-5', ' 3-5', '4-5'<br />
              '1-6', '2-6', ' 3-6', '4-6', '5-6'<br />
              '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
            </td>
            <td className='uk-text-left'>Wraps the component inside of a div element and adds a widthclass based on a fraction, if the device width is 960px or higher</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              contrast
            </td>
            <td className='uk-text-left'>bool</td>
            <td className='uk-text-left'>Changes the color of the element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              display
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              block,
              inline
              or inlineblock.
            </td>
            <td className='uk-text-left'>Changes the display style element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              float
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              left or right.
            </td>
            <td className='uk-text-left'>Floats an element left or right.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              hidden
            </td>
            <td className='uk-text-left'>
              string<br />
              all,
              invisible,
              large,
              small,
              medium,
              touch
              and notouch.
            </td>
            <td className='uk-text-left'>Hides element on different devices.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              kitid
            </td>
            <td className='uk-text-left'>string</td>
            <td className='uk-text-left'>Adds a data attribute to be used as an identifier.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              list
            </td>
            <td className='uk-text-left'>bool</td>
            <td className='uk-text-left'>Wraps the component inside of a li element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              margin
            </td>
            <td className='uk-text-left'>
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
            <td className='uk-text-left'>Adds spacing to block elements.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              order
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              first,
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
            <td className='uk-text-left'>Changes the order of an item if it is a child of a flexbox.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              padding
            </td>
            <td className='uk-text-left'>
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
            <td className='uk-text-left'>Adds or removes the padding from an element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              position
            </td>
            <td className='uk-text-left'>
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
            <td className='uk-text-left'>Positions element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              responsive
            </td>
            <td className='uk-text-left'>
              string<br />
              width and height
            </td>
            <td className='uk-text-left'>Makes max width and/or height 100%.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              scroll
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              auto,
              box,
              or text.
            </td>
            <td className='uk-text-left'>Adds scrollbars to element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              textAlign
            </td>
            <td className='uk-text-left'>
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
            <td className='uk-text-left'>Aligns text horizontally.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              textVertical
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              top,
              middle,
              or bottom.
            </td>
            <td className='uk-text-left'>Aligns text vertically.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              textWrap
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              truncate,
              break,
              or nowrap.
            </td>
            <td className='uk-text-left'>Wraps or prevents wrapping of text.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              vertical
            </td>
            <td className='uk-text-left'>
              parent,
              middle,
              bottom
            </td>
            <td className='uk-text-left'>Vertically aligns element.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              viewport
            </td>
            <td className='uk-text-left'>bool</td>
            <td className='uk-text-left'>Fills the height of the entire viewport.</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              visible
            </td>
            <td className='uk-text-left'>
              string<br />
              hover,
              hoverInline,
              large,
              small,
              medium
            </td>
            <td className='uk-text-left'>Shows element on differnt devices.</td>
          </tr>
        </tbody>
      </Table>

    </section>

  </div>
);

export default BaseDoc;
