import React from 'react';
import Table from 'react-uikit-table';
import Note from 'react-uikit-note';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];

const name = 'Table';
const npmName = 'react-uikit-table';
const summary = 'Create nice looking tables.';
const propTuples = [{
    Prop: "body",
    Type: "array",
  }, {
    Prop: "caption",
    Type: "string",
  }, {
    Prop: "condensed",
    Type: "bool",
  }, {
    Prop: "hover",
    Type: "bool",
  }, {
    Prop: "head",
    Type: "oneOf: 'array' / 'string'",
  }, {
    Prop: "numbered",
    Type: "oneOf: 'bool' / 'string'",
  }, {
    Prop: "overflow",
    Type: "bool",
  }, {
    Prop: "sort",
    Type: "oneOf: 'array' / 'string'",
  }, {
    Prop: "striped",
    Type: "bool",
}];

const basicExample = (
  <div>
    <Table caption='Generated table.' head={['Heading', 'Heading', 'Heading']} body={data}/>
    <Table caption='Table from Children.'>
      <thead>
        <tr>
          <th className='uk-text-left'>Heading</th><th className='uk-text-left'>Heading</th><th className='uk-text-left'>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
const basicSnippet = `
const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
...
<Table caption='Generated table.' head={['Heading', 'Heading', 'Heading']} body={data}/>
<Table caption='Table from Children.'>
  <thead>
    <tr>
      <th className='uk-text-left'>Heading</th><th className='uk-text-left'>Heading</th><th className='uk-text-left'>Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
    </tr>
    <tr>
      <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
    </tr>
    <tr>
      <td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td><td className='uk-text-left'>Data</td>
    </tr>
  </tbody>
</Table>\n...`;

const tableHeadExample = (
  <div>
    <Table caption='Headings from body keys.' condensed head='*' body={items}/>
    <Table caption='Headins from prop.' condensed head={['Heading', 'Heading', 'Heading']} body={items}/>
  </div>
);
const tableHeadSnippet = `
const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
...
<Table caption='Headings from body keys.' condensed head='*' body={items}/>
<Table caption='Headins from prop.' condensed head={['Heading', 'Heading', 'Heading']} body={items}/>
`;

const condensedTableExample = <Table caption='Condensed table' condensed head={['Heading', 'Heading', 'Heading']} body={data}/>;
const condensedTableSnippet = `
const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
...
<Table caption='Condensed table' condensed head={['Heading', 'Heading', 'Heading']} body={data}/>`;

const hoverTableExample = <Table caption='Hoverable table' hover head={['Heading', 'Heading', 'Heading']} body={data}/>;
const hoverTableSnippet = `
const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
...
<Table caption='Hoverable table' hover head={['Heading', 'Heading', 'Heading']} body={data}/>`;

const stripedTableExample = <Table caption='Striped table' striped head={['Heading', 'Heading', 'Heading']} body={data}/>;
const stripedTableSnippet = `
const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
...
<Table caption='Striped table' striped head={['Heading', 'Heading', 'Heading']} body={data}/>`;

const sortedTableExample = <Table caption='Sortable table' sort={['name', '-height']} head='*' body={items}/>;
const sortedTableSnippet = `
const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
...
<Table caption='Sortable table' sort={['name', '-height']} head='*' body={items}/>`;

const numberedTableExample = (
  <div>
    <Table numbered condensed caption='Numbered table.' head={['Heading', 'Heading', 'Heading']} body={data} />
    <Table numbered='#' condensed caption='Numbered table heading.' head={['Heading', 'Heading', 'Heading']} body={data} />
  </div>
);
const numberedTableSnippet = `
const items = [
  { name: 'OTIS', score: 39, height: 5.6 },
  { name: 'jocelyn', score: 65, height: 4.8 },
  { name: 'Ania', score: -50, height: 6.10 }
];
...
<Table numbered condensed caption='Numbered table.' head={['Heading', 'Heading', 'Heading']} body={data} />
<Table numbered='#' condensed caption='Numbered table heading.' head={['Heading', 'Heading', 'Heading']} body={data} />`;

const TableDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Example"
      description={(
        <div>
          <span>Table can be typed declaratively or generated by passing a JSON object to the <code>body</code> prop.</span>
          <Note>Generated nested properties are not supported at this time.</Note>
        </div>
      )}
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Table Head"
      description={(
        <div>
          <span>Table headings can be set by passing a list of headings to the <code>head=[]</code> prop. Alternatively, if the body prop is being used to generate table data, headings can also be generated by using the body's JSON keys like so, <code>head='*'</code>.</span>
          <Note>Keys generate a list of headings in the order they appear. Also the keys will be case insensitive.</Note>
        </div>
      )}
      jsx={tableHeadExample}
      snippet={tableHeadSnippet}
    />
    <DocExample
      name="Table condensed"
      description={<span>To make the table more compact add the <code>condensed</code> prop to the Tables props.</span>}
      jsx={condensedTableExample}
      snippet={condensedTableSnippet}
    />
    <DocExample
      name="Table Hover"
      description={<span>To highlight a row when it is hovered add the <code>hover</code> prop to the Tables props.</span>}
      jsx={hoverTableExample}
      snippet={hoverTableSnippet}
    />
    <DocExample
      name="Table Striped"
      description={<span>Add zebra-striping to table by adding the <code>striped</code> prop to the Tables props.</span>}
      jsx={stripedTableExample}
      snippet={stripedTableSnippet}
    />
    <DocExample
      name="Table sort"
      description={<span>Generated tables can be sorted by passing key names to the <code>sort</code> prop. The sort prop can either be a string to sort by a single key or an array of keys to sort by  multiple keys.To reverse the sort on a field put '-' in front of the key name.</span>}
      jsx={sortedTableExample}
      snippet={sortedTableSnippet}
    />
    <DocExample
      name="Table numbered"
      description={<span>Table row can be numbered by using the <code>numbered</code> prop. To add a heading for the numbered column simply asign a string like so, <code>numbered='#'</code></span>}
      jsx={numberedTableExample}
      snippet={numberedTableSnippet}
    />
    <DocFooter name="List item" propTuples={propTuples} />
  </div>
);

export default TableDoc;
