import React from 'react';

import Table from 'react-uikit-table';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Base';
const npmName = 'react-uikit-base';
const summary = 'Create react components for UIKit.';
const ratioStrings = `oneOf:\n '1-1',\n'1-2',\n'1-3', '2-3',\n'1-4', '2-4', '3-4'\n'1-5', '2-5', ' 3-5', '4-5',
'1-6', '2-6', ' 3-6', '4-6', '5-6'\n'1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'`;

const utilityPropsTable = [{
    Prop: "align",
    Type: "oneOf: 'left' / 'right' / 'center' / 'middleLeft' / 'middleRight'",
    Description: "Aligns elements with spacing between the text and the element.",
  }, {
    Prop: "children",
    Type: "any",
    Description: "Children elements.",
  }, {
    Prop: "className",
    Type: "string",
    Description: "CSS class names.",
  }, {
    Prop: "borderRadius",
    Type: "oneOf: 'rounded' / 'circle'",
    Description: "Add rounded corners to an element.",
  }, {
    Prop: "clear",
    Type: "oneOf: 'fix' / 'nbfc' / 'alt'",
    Description: "Clears floats.",
  }, {
    Prop: "center",
    Type: "bool",
    Description: "Center a container. For any other block element, you additionally need to apply a width.",
  }, {
    Prop: "col",
    Type: ratioStrings,
    Description: "Wraps the component inside of a div element and adds a width class based on a fraction.",
  }, {
    Prop: "colsSmall",
    Type: ratioStrings,
    Description: "Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 480px or higher.",
  }, {
    Prop: "colsMedium",
    Type: ratioStrings,
    Description: "Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 768px or higher.",
  }, {
    Prop: "colsLarge",
    Type: ratioStrings,
    Description: "Wraps the component inside of a div element and adds a widthclass based on a fraction, if the device width is 960px or higher.",
  }, {
    Prop: "contrast",
    Type: "bool",
    Description: "Changes the color of the element.",
  }, {
    Prop: "display",
    Type: "oneOf: 'block' / 'inline' / 'inlineBlock'",
    Description: "Changes the display style element.",
  }, {
    Prop: "float",
    Type: "oneOf: 'left' / 'right'",
    Description: "Floats an element left or right.",
  }, {
    Prop: "hidden",
    Type: "oneOf: 'all' / 'invisible' / 'large' / 'small' / 'medium' / 'touch' / 'notouch'",
    Description: "Hides element on different devices.",
  }, {
    Prop: "kitid",
    Type: "string",
    Description: "Adds a data attribute to be used as an identifier.",
  }, {
    Prop: "list",
    Type: "bool",
    Description: "Wraps the component inside of a li element.",
  }, {
    Prop: "margin",
    Type: "oneOf: 'top' / 'left' / 'bottom' / 'right' / 'smallTop' / 'smallLeft' / 'smallBottom' / 'smallRight' / 'largeTop' / 'largeLeft' / 'largeBottom' / 'largeRight' / 'remove' / 'removeTop' / 'removeBottom'",
    Description: "Adds spacing to block elements.",
  }, {
    Prop: "order",
    Type: "oneOf: 'first' / 'firstSmall' / 'firstMedium' / 'firstLarge' / 'firstXlarge' / 'last' / 'lastSmall' / 'lastMedium' / 'lastLarge' / 'lastXlarge'",
    Description: "Changes the order of an item if it is a child of a flexbox.",
  }, {
    Prop: "padding",
    Type: "oneOf: 'top' / 'left' / 'bottom' / 'right' / 'smallTop' / 'smallLeft' / 'smallBottom' / 'smallRight' / 'largeTop' / 'largeLeft' / 'largeBottom' / 'largeRight' / 'remove' / 'removeTop' / 'removeBottom' / 'removeVertical'",
    Description: "Adds or removes the padding from an element.",
  }, {
    Prop: "position",
    Type: "oneOf: 'top' / 'topLeft' / 'topRight' / 'bottom' / 'bottomLeft' / 'bottomRight' / 'cover' / 'relative' / 'zIndex'",
    Description: "Positions element.",
  }, {
    Prop: "responsive",
    Type: "string: 'width' and 'height'",
    Description: "Makes max width and/or height 100%.",
  }, {
    Prop: "scroll",
    Type: "oneOf: 'auto' / 'box' / 'text'",
    Description: "Adds scrollbars to element.",
  }, {
    Prop: "textAlign",
    Type: "oneOf: 'center' / 'centerSmall' / 'centerMedium' / 'left' / 'leftSmall' / 'leftMedium' / 'justify' / 'right'",
    Description: "Aligns text horizontally.",
  }, {
    Prop: "textVertical",
    Type: "oneOf: 'top' / 'middle' / 'bottom'",
    Description: "Aligns text vertically.",
  }, {
    Prop: "textWrap",
    Type: "oneOf: 'truncate' / 'break' / 'nowrap'",
    Description: "Wraps or prevents wrapping of text.",
  }, {
    Prop: "vertical",
    Type: "oneOf: 'parent' / 'middle' / 'bottom'",
    Description: "Vertically aligns element.",
  }, {
    Prop: "viewport",
    Type: "bool",
    Description: "Fills the height of the entire viewport.",
  }, {
    Prop: "visible",
    Type: "oneOf: 'hover' / 'hoverInline' / 'large' / 'small' / 'medium'",
    Description: "Shows element on differnt devices.",
  },
];

const baseExampleSnippet = `
import React from 'react';

const Component = ({ children, classes, className }) => {
  const cssClassNames = uikit.helpers.cleanClasses([ classes, className ]);

  return (<div className={cssClassNames}>{children}</div>);
};

uikit.base(Component);

// <Component />`;

const elementSnippet = `
import React from 'react';

const Col = uikit.element;
// <Col>
//  {this.props.children}
// </Col>`;

const cleanClassesSnipet = `
class Alert ({ large, className}) => {
  ...
  const cssClassNames = uikit.helpers.cleanClasses(['uk-alert', className, large ? 'uk-alert-large' : null ]);
  ...
}

<Alert kitid='alert1'/>
// <div data-kitid="alert1" class="uk-alert"></div>`;

const BaseDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Base"
      description="To create a uikit component pass a component as an argument to the base property. The new component will have all the utility props avaliable to it."
      snippet={baseExampleSnippet}
    />
    <DocExample
      name="Element"
      description="An empty component that has all the utility props can be quickly created by using the element property. This can be useful for generic containers."
      snippet={elementSnippet}
    />
    <section>
      {/* TODO: make this styling work if it doesn't */}
      <h2>Helper functions</h2>
      <p>UIkit components come with a number of helper function to assist in the creation of new components.</p>
      <section>
        <h3>breakpoints</h3>
        <p>Returns media and screen objects for handling different responsive sizes.</p>
        <DocExample
          name="Media"
          description="Returns a string of the media size."
          table={<Table striped caption='Responsive media sizes' head={'*'} body={[
            {Media: 'small', Size: 767}, {Media: 'medium', Size: 768}, {Media: 'large', Size: 960}, {Media: 'xlarge', Size: 1200}
          ]} />}
          snippet={`breakpoints.small; // 767\n breakpoints.medium; // 768\n breakpoints.large; // 960\n breakpoints.xlarge; // 1200`}
        />
        <DocExample
          name="Screen"
          description="Returns a true or false depending on the window.innerWidth."
          table={    <Table striped caption='Responsive media sizes' head={'*'} body={[
            {Screen: 'small', Size: 'less than 767'}, {Screen: 'medium', Size: 'More than 768 and less than 960'}, {Screen: 'large', Size: 'More than 960 and less than 1200'}, {Screen: 'xlarge', Size: 'More than 1200'}
          ]} />}
          snippet={`breakpoints.small; // 767\n breakpoints.medium; // 768\n breakpoints.large; // 960\n breakpoints.xlarge; // 1200`}
        />
      </section>
      <DocExample
        name="closeClass"
        description="Return UIKits 'uk-close' class. If alt is passed as an argument 'uk-close-alt' is returned instead."
        snippet={`closeClass();    // 'uk-close';\ncloseClass(alt); // 'uk-close-alt';`}
      />
      <DocExample
        name="colSpan"
        description="Returns an array of available column width spans. See utility props below."
      />
      <DocExample
        name="cleanClasses"
        description="Returns a new array with all falsey values removed."
        snippet={cleanClassesSnipet}
      />
      <DocExample
        name="cleanProps"
        description="cleanProps take two arguments, props object and array of keys to be removed. A new object literal is returned excluding keys that were in the array."
        snippet={`const MyComponent (props) = {\n  ignoreProps = ['type'];\n  return <div {...cleanProps(ignoreProps)(props)}></div>;\n};`}
      />
      <DocExample
        name="getClass"
        description="getClass takes two arguments. The key as a string and an object. If the key exists the value is returned, else an empty string is returned."
      />
      <DocExample
        name="stringToClasses"
        description="stringToClasses take two arguments. The string of keys and an object. A new string is returned containing all the values of the keys that exist in the object."
      />
      <DocExample
        name="queryData"
        description="Returns DOM node that matches a data attribute value."
        snippet={`queryData('myAttr="myid2"');\n\n// <div data-myAttr="myid2"></div>`}
      />
      <DocExample
        name="queryDataAll"
        description="Returns all DOM nodes that match a data attribute value."
        snippet={`queryData('myAttr="myid2"');\n\n// [\n//   <div data-myAttr="myid2"></div>\n//   <div data-myAttr="myid2"></div>\n//   <div data-myAttr="myid2"></div>\n// ]`}
      />
      <DocExample
        name="getElement"
        description="Returns DOM node that matches a data-kitid value."
        snippet={`getElement('myid1');\n\n// <div data-kitid="myid1"></div>`}
      />
    </section>
    <DocExample
      name="Utility props"
      table={<Table striped caption='Responsive media sizes' head={'*'} body={utilityPropsTable} />}
    />
    {/* TODO: probably fix the grab additional props from util... */}
    <DocFooter { ...{ name }} />
  </div>
);

export default BaseDoc;
