# React Uikit Base



## Usage

    npm install react-uikit-base --save;

    // ES6
    import Base from 'react-uikit-base';

    // ES5
    var Base = require('react-uikit-base');

## Base

To create a uikit component pass a component as an argument to the base property. The new component will have all the utility props avaliable to it.

### Code

    import React from 'react';

    const Component = ({ children, classes, className }) => {
      const cssClassNames = uikit.helpers.cleanClasses([ classes, className ]);

      return (<div className={cssClassNames}>{children}</div>);
    };

    uikit.base(Component);

    // <Component />

## Element

An empty component that has all the utility props can be quickly created by using the element property. This can be useful for generic containers.

### Code

    import React from 'react';

    const Col = uikit.element;
    // <Col>
    //  {this.props.children}
    // </Col>

## Helper functions



### breakpoints



## Media

Returns a string of the media size.

<table class="uk-table  uk-table-striped"><caption>Responsive media sizes</caption>

<thead>

<tr>

<th>Media</th>

<th>Size</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">small</td>

<td>767</td>

</tr>

<tr>

<td colspan="1">medium</td>

<td>768</td>

</tr>

<tr>

<td colspan="1">large</td>

<td>960</td>

</tr>

<tr>

<td colspan="1">xlarge</td>

<td>1200</td>

</tr>

</tbody>

</table>

### Code

    breakpoints.small; // 767
     breakpoints.medium; // 768
     breakpoints.large; // 960
     breakpoints.xlarge; // 1200

## Screen

Returns a true or false depending on the window.innerWidth.

<table class="uk-table  uk-table-striped"><caption>Responsive media sizes</caption>

<thead>

<tr>

<th>Screen</th>

<th>Size</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">small</td>

<td>less than 767</td>

</tr>

<tr>

<td colspan="1">medium</td>

<td>More than 768 and less than 960</td>

</tr>

<tr>

<td colspan="1">large</td>

<td>More than 960 and less than 1200</td>

</tr>

<tr>

<td colspan="1">xlarge</td>

<td>More than 1200</td>

</tr>

</tbody>

</table>

### Code

    breakpoints.small; // 767
     breakpoints.medium; // 768
     breakpoints.large; // 960
     breakpoints.xlarge; // 1200

## closeClass

Return UIKits 'uk-close' class. If alt is passed as an argument 'uk-close-alt' is returned instead.

### Code

    closeClass();    // 'uk-close';
    closeClass(alt); // 'uk-close-alt';

## colSpan

Returns an array of available column width spans. See utility props below.

## cleanClasses

Returns a new array with all falsey values removed.

### Code

    class Alert ({ large, className}) => {
      ...
      const cssClassNames = uikit.helpers.cleanClasses(['uk-alert', className, large ? 'uk-alert-large' : null ]);
      ...
    }

    <Alert kitid='alert1'/>
    // <div></div>

## cleanProps

cleanProps take two arguments, props object and array of keys to be removed. A new object literal is returned excluding keys that were in the array.

### Code

    const MyComponent (props) = {
      ignoreProps = ['type'];
      return <div {...cleanProps(ignoreProps)(props)}></div>;
    };

## getClass

getClass takes two arguments. The key as a string and an object. If the key exists the value is returned, else an empty string is returned.

## stringToClasses

stringToClasses take two arguments. The string of keys and an object. A new string is returned containing all the values of the keys that exist in the object.

## queryData

Returns DOM node that matches a data attribute value.

### Code

    queryData('myAttr="myid2"');

    // <div data-myAttr="myid2"></div>

## queryDataAll

Returns all DOM nodes that match a data attribute value.

### Code

    queryData('myAttr="myid2"');

    // [
    //   <div data-myAttr="myid2"></div>
    //   <div data-myAttr="myid2"></div>
    //   <div data-myAttr="myid2"></div>
    // ]

## getElement

Returns DOM node that matches a data-kitid value.

### Code

    getElement('myid1');

    // <div></div>

## Utility props

<table class="uk-table  uk-table-striped"><caption>Responsive media sizes</caption>

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">align</td>

<td colspan="1">oneOf: 'left' | 'right' | 'center' | 'middleLeft' | 'middleRight'</td>

<td>Aligns elements with spacing between the text and the element.</td>

</tr>

<tr>

<td colspan="1">children</td>

<td colspan="1">any</td>

<td>Children elements.</td>

</tr>

<tr>

<td colspan="1">className</td>

<td colspan="1">string</td>

<td>CSS class names.</td>

</tr>

<tr>

<td colspan="1">borderRadius</td>

<td colspan="1">oneOf: 'rounded' | 'circle'</td>

<td>Add rounded corners to an element.</td>

</tr>

<tr>

<td colspan="1">clear</td>

<td colspan="1">oneOf: 'fix' | 'nbfc' | 'alt'</td>

<td>Clears floats.</td>

</tr>

<tr>

<td colspan="1">center</td>

<td colspan="1">bool</td>

<td>Center a container. For any other block element, you additionally need to apply a width.</td>

</tr>

<tr>

<td colspan="1">col</td>

<td colspan="1">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td>Wraps the component inside of a div element and adds a width class based on a fraction.</td>

</tr>

<tr>

<td colspan="1">colsSmall</td>

<td colspan="1">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td>Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 480px or higher.</td>

</tr>

<tr>

<td colspan="1">colsMedium</td>

<td colspan="1">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td>Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 768px or higher.</td>

</tr>

<tr>

<td colspan="1">colsLarge</td>

<td colspan="1">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td>Wraps the component inside of a div element and adds a widthclass based on a fraction, if the device width is 960px or higher.</td>

</tr>

<tr>

<td colspan="1">contrast</td>

<td colspan="1">bool</td>

<td>Changes the color of the element.</td>

</tr>

<tr>

<td colspan="1">display</td>

<td colspan="1">oneOf: 'block' | 'inline' | 'inlineBlock'</td>

<td>Changes the display style element.</td>

</tr>

<tr>

<td colspan="1">float</td>

<td colspan="1">oneOf: 'left' | 'right'</td>

<td>Floats an element left or right.</td>

</tr>

<tr>

<td colspan="1">hidden</td>

<td colspan="1">oneOf: 'all' | 'invisible' | 'large' | 'small' | 'medium' | 'touch' | 'notouch'</td>

<td>Hides element on different devices.</td>

</tr>

<tr>

<td colspan="1">kitid</td>

<td colspan="1">string</td>

<td>Adds a data attribute to be used as an identifier.</td>

</tr>

<tr>

<td colspan="1">list</td>

<td colspan="1">bool</td>

<td>Wraps the component inside of a li element.</td>

</tr>

<tr>

<td colspan="1">margin</td>

<td colspan="1">oneOf: 'top' | 'left' | 'bottom' | 'right' | 'smallTop' | 'smallLeft' | 'smallBottom' | 'smallRight' | 'largeTop' | 'largeLeft' | 'largeBottom' | 'largeRight' | 'remove' | 'removeTop' | 'removeBottom'</td>

<td>Adds spacing to block elements.</td>

</tr>

<tr>

<td colspan="1">order</td>

<td colspan="1">oneOf: 'first' | 'firstSmall' | 'firstMedium' | 'firstLarge' | 'firstXlarge' | 'last' | 'lastSmall' | 'lastMedium' | 'lastLarge' | 'lastXlarge'</td>

<td>Changes the order of an item if it is a child of a flexbox.</td>

</tr>

<tr>

<td colspan="1">padding</td>

<td colspan="1">oneOf: 'top' | 'left' | 'bottom' | 'right' | 'smallTop' | 'smallLeft' | 'smallBottom' | 'smallRight' | 'largeTop' | 'largeLeft' | 'largeBottom' | 'largeRight' | 'remove' | 'removeTop' | 'removeBottom' | 'removeVertical'</td>

<td>Adds or removes the padding from an element.</td>

</tr>

<tr>

<td colspan="1">position</td>

<td colspan="1">oneOf: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'cover' | 'relative' | 'zIndex'</td>

<td>Positions element.</td>

</tr>

<tr>

<td colspan="1">responsive</td>

<td colspan="1">string: 'width' and 'height'</td>

<td>Makes max width and/or height 100%.</td>

</tr>

<tr>

<td colspan="1">scroll</td>

<td colspan="1">oneOf: 'auto' | 'box' | 'text'</td>

<td>Adds scrollbars to element.</td>

</tr>

<tr>

<td colspan="1">textAlign</td>

<td colspan="1">oneOf: 'center' | 'centerSmall' | 'centerMedium' | 'left' | 'leftSmall' | 'leftMedium' | 'justify' | 'right'</td>

<td>Aligns text horizontally.</td>

</tr>

<tr>

<td colspan="1">textVertical</td>

<td colspan="1">oneOf: 'top' | 'middle' | 'bottom'</td>

<td>Aligns text vertically.</td>

</tr>

<tr>

<td colspan="1">textWrap</td>

<td colspan="1">oneOf: 'truncate' | 'break' | 'nowrap'</td>

<td>Wraps or prevents wrapping of text.</td>

</tr>

<tr>

<td colspan="1">vertical</td>

<td colspan="1">oneOf: 'parent' | 'middle' | 'bottom'</td>

<td>Vertically aligns element.</td>

</tr>

<tr>

<td colspan="1">viewport</td>

<td colspan="1">bool</td>

<td>Fills the height of the entire viewport.</td>

</tr>

<tr>

<td colspan="1">visible</td>

<td colspan="1">oneOf: 'hover' | 'hoverInline' | 'large' | 'small' | 'medium'</td>

<td>Shows element on differnt devices.</td>

</tr>

</tbody>

</table>

## Base Props



## Tests

`npm run test` to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.  

## Build
`npm run build` to build files from distribution.  
`npm run build:watch` watches src directory and builds files on changes.  

## Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.  

## License
MIT