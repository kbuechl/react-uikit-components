import React, { PropTypes } from 'react';

import Flex from '../lib/flex';
import Panel from 'react-uikit-panel';
import Table from 'react-uikit-table';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Flex';
const npmName = 'react-uikit-flex';
const summary = 'Utilize the power of Flexbox to create a wide range of layouts.';
const propTuples = [
  { Prop: "around", Type: "bool" },
  { Prop: "bottom", Type: "bool" },
  { Prop: "between", Type: "bool" },
  { Prop: "center", Type: "bool" },
  { Prop: "direction", Type: "oneOf: 'rowReverse' / 'column' / 'columnReverse'" },
  { Prop: "grid", Type: "bool" },
  { Prop: "middle", Type: "bool" },
  { Prop: "right", Type: "bool" },
  { Prop: "row", Type: "oneOf: 'wrap' / 'bottom' / 'middle' / 'top' / 'between' / 'around' / 'reverse' / 'nowrap'" },
  { Prop: "top", Type: "bool" }
];

const loremIpsumString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const generatePanelJSX = ({ col, box, margin, style, content, flexAlign }, key) => (
  <Panel {...{col, box, margin, flexAlign, key}} style={{...style}}>
    {content}
  </Panel>
);

generatePanelJSX.propTypes = {
  col: PropTypes.bool,
  box: PropTypes.bool,
  margin: PropTypes.string,
  flexAlign: PropTypes.string,
  content: PropTypes.node,
  style: PropTypes.object,
};

const generateExampleJSX = ({ bottom, grid, middle, panels, row }) => (
  <Flex {...{ bottom, middle, row, grid }}>
    {panels.map((value, key) => generatePanelJSX(value, key))}
  </Flex>
);

generateExampleJSX.propTypes = {
  bottom: PropTypes.bool,
  grid: PropTypes.bool,
  middle: PropTypes.bool,
  panels: PropTypes.array,
  row: PropTypes.string,
};


const generateCodeSnippet = ({ bottom, direction, middle, grid, panels }) =>
`<Flex${bottom ? " bottom" : "" }${grid ? " grid" : "" }${middle ? " middle" : "" }${direction ? ` direction='${direction}'` : "" }>
${panels.join('\n')}
</Flex>`;

// the panel snippet is inside the flex so shift it out 4 chars
const generatePanelSnippet = ({ col, box, margin, style, content, flexAlign }) =>
`  <Panel${col ? ` col='${col}'` : "" }${box ? " box" : "" }${flexAlign ? ` flexAlign=${flexAlign}` : "" }${margin ? ` margin='${margin}'` : "" }${style ? ` style={${style}}` : "" }>
    ${content}
  </Panel>`;

const generatePanelSnippets = panels =>
  panels.map(generatePanelSnippet);

const basicPanels = [
  { col: '1-3', box: true, content: 'Box' },
  { col: '1-3', box: true, margin: 'left', content: 'Box' },
  { col: '1-3', box: true, margin: 'left', content: 'Box' },
];
const basicExample = generateExampleJSX({ panels: basicPanels });
const basicSnippet = generateCodeSnippet({ panels: generatePanelSnippets(basicPanels) });

const alignmentPanels = [
  { col: '1-3', box: true, style: { height: '50px' }, content: 'Box' },
  { col: '1-3', box: true, margin: 'left', style: { height: '70px' }, content: 'Box' },
  { col: '1-3', box: true, margin: 'left', style: { height: '100px' }, content: 'Box' },
];
const alignmentTable = (
  <Table head="*" body={[
    { Value: <code>center</code>, Description : "Add this prop to center Flex items horizontally." },
    { Value: <code>right</code>, Description : "Add this prop to align Flex items to the right." },
    { Value: <code>top</code>, Description : "Add this prop to align Flex items to the top." },
    { Value: <code>middle</code>, Description : "Add this prop to align Flex items to the middle." },
    { Value: <code>bottom</code>, Description : "Add this prop to align Flex items to the bottom." },
    { Value: <code>between</code>, Description : "Add this prop to distribute items evenly, with the first item at the beginning and last item at the end of the main axis." },
    { Value: <code>around</code>, Description : "Add this prop to distribute items evenly with equal space on both sides of each item." }
  ]} />
);
const alignmentExample = generateExampleJSX({ middle: true, bottom: true, panels: alignmentPanels });
const alignmentSnippet = generateCodeSnippet({ middle: true, bottom: true, panels: generatePanelSnippets(alignmentPanels) });

const directionPanels = [
  { col: '1-3', box: true, content: 1 },
  { col: '1-3', box: true, margin: 'bottom', content: 2 },
  { col: '1-3', box: true, margin: 'bottom', content: 3 },
];
const directionTable = (
  <Table head="*" body={[
    { Value: <code>rowReverse</code>, Description : "Add this prop to lay out Flex items from right to left." },
    { Value: <code>column</code>, Description : "Add this prop to lay out Flex items as vertical columns." },
    { Value: <code>columnReverse</code>, Description : "Add this prop to lay out Flex items from bottom to top." }
  ]} />
);
const directionExample = generateExampleJSX({ direction: 'columnReverse', panels: directionPanels });
const directionSnippet = generateCodeSnippet({ direction: 'columnReverse', panels: generatePanelSnippets(directionPanels) });

const rowWrapPanels = [
  { col: '1-3', box: true, margin: 'bottom right', content: 1 },
  { col: '1-2', box: true, margin: 'bottom right', content: 2 },
  { col: '1-3', box: true, margin: 'bottom right', content: 3 },
  { col: '1-3', box: true, margin: 'bottom right', content: 4 },
  { box: true, content: 5 },
  { col: '1-3', box: true, margin: 'bottom right', content: 6 },
];
const rowWrapTable = (
  <Table head="*" body={[
    { Value: <code>row='wrap'</code>, Description : "Add this prop to for wrap Flex items on multiple rows." },
    { Value: <code>row='top'</code>, Description : "Add this prop to align multirow Flex items to the top." },
    { Value: <code>row='middle'</code>, Description : "Add this prop to vertically center multirow Flex items." },
    { Value: <code>row='bottom'</code>, Description : "Add this prop to align multiline Flex items to the bottom." },
    { Value: <code>row='between'</code>, Description : "Add this prop to distribute Flex item rows evenly, with the first row at the top and last row at the bottom of the container." },
    { Value: <code>row='around'</code>, Description : "Add this prop to distribute Flex rows evenly with equal space at the top and bottom of each row." },
    { Value: <code>row='reverse'</code>, Description : "Add this prop to change the direction of the Flex items from right to left." },
    { Value: <code>row='nowrap'</code>, Description : "Add this prop to remove row wrapping." }
  ]} />
);
const rowWrapExample = generateExampleJSX({ row: 'wrap reverse around', panels: rowWrapPanels });
const rowWrapSnippet = generateCodeSnippet({ row: 'wrap reverse around', panels: generatePanelSnippets(rowWrapPanels) });

const flexAndGridPanels = [
  { col: '1-3', content: <img src='docs/images/placeholder_400x250.svg' alt='Placeholder image' /> },
  { col: '2-3', flexAlign: 'middle', content: <p>{loremIpsumString}</p> },
];
const flexAndGridExample = generateExampleJSX({ grid: true, panels: flexAndGridPanels });
const flexAndGridSnippet = generateCodeSnippet({ grid: true, panels: generatePanelSnippets(flexAndGridPanels) });

const FlexDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      description="Flex component uses flexbox, a concept that is still quite new but extremely powerful for creating layouts."
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Flex alignment"
      description="These props define the horizontal and vertical alignment of Flex items and distribute the space between them."
      jsx={alignmentExample}
      snippet={alignmentSnippet}
      table={alignmentTable}
    />
    <DocExample
      name="Flex direction"
      description="Directon props define the axis flex items placed on and their direction. By default, items run horizontally from left to right."
      jsx={directionExample}
      snippet={directionSnippet}
      table={directionTable}
    />
    <DocExample
      name="Flex row wrap"
      description={`By default, Flex items fit themselves into one row. Add the row='wrap' prop so that the items wrap into another row when they no longer
       fit into the viewport. To change the items' direction so that they run from right to left, add the reverse prop. The following props modify the alignment
       of wrapping Flex items. To force the Flex items into one row, just add the nowrap prop.`}
      jsx={rowWrapExample}
      snippet={rowWrapSnippet}
      table={rowWrapTable}
    />
    <DocExample
      name="Flex and grid"
      description="The Flex component can be combined with a grid from the Grid component by adding <code>grid</code> prop"
      jsx={flexAndGridExample}
      snippet={flexAndGridSnippet}
    />
    <DocExample
      name="Flex order"
      description="To see how to order Flex items see <code>order</code> prop in the Base
      component under Utiliy props."
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default FlexDoc;
