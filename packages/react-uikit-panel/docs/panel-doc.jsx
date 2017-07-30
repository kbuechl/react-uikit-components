import React from 'react';

import * as examples from './panel-examples';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Panel';
const npmName = 'react-uikit-panel';
const summary = 'Create layout boxes with different styles.';
const propTuples = [
  { Prop: "badge",Type: "string or object: {`{body , context}`}", },
  { Prop: "box",Type: "bool", },
  { Prop: "context",Type: "oneOf: 'primary' / 'secondary'", },
  { Prop: "header",Type: "bool", },
  { Prop: "hover",Type: "bool", },
  { Prop: "icon",Type: "string", },
  { Prop: "space",Type: "bool", },
  { Prop: "teaser",Type: "objectOf: {`{src, alt}`}", },
  { Prop: "type", Type: "oneOf: 'block' (default) | 'link'" },
];

const PanelDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      description="The Panel component consists of the panel itself, the panel title and a panel badge. To prevent redundant white space, top and bottom margins are removed from the panel's content.."
      table={examples.basicTable}
      jsx={examples.basicExample}
      snippet={examples.basicSnippet}
    />
    <DocExample
      name="Panel Types"
      table={examples.typesTable}
      jsx={examples.typesExample}
      snippet={examples.typesSnippet}
    />
    <DocExample
      name="Panel box"
      description="By default the Panel has no styling. The panel box places a box around a panel."
      jsx={examples.boxExample}
      snippet={examples.boxSnippet}
    />
    <DocExample
      name="Panel box primary"
      description={<span>Add the <code>context='primary'</code> prop to modify the box panel to emphasize it by using a different color.</span>}
      jsx={examples.boxPrimaryExample}
      snippet={examples.boxPrimarySnippet}
    />
    <DocExample
      name="Panel box secondary"
      description={<span>Add the <code>context='secondary'</code> prop to modify the box panel which will give it a white background.</span>}
      jsx={examples.boxSecondaryExample}
      snippet={examples.boxSecondarySnippet}
    />
    <DocExample
      name="Panel hover"
      description={<span>Add the <code>hover</code> prop to add a hover effect to the panel. This comes in handy when using the panel as a link.</span>}
      jsx={examples.boxHoverExample}
      snippet={examples.boxHoverSnippet}
    />
    <DocExample
      name="Panel header"
      description={<span>Add the <code>header</code> prop to separate the panel title and content with a horizontal line.</span>}
      jsx={examples.headerExample}
      snippet={examples.headerSnippet}
    />
    <DocExample
      name="Panel space"
      description={<span>Add the <code>space</code> prop to increase the spacing around the panel content.</span>}
      jsx={examples.spaceExample}
      snippet={examples.spaceSnippet}
    />
    <DocExample
      name="Panel box with teaser"
      description={<span>To display an image inside a panel box that is attached to the border of the panel without any spacing, just add the <code>teaser=&#123;&#123;src: , alt: &#125;&#125;</code> prop..</span>}
      jsx={examples.teaserExample}
      snippet={examples.teaserSnippet}
    />
    <DocExample
      name="Panel with icons"
      description={<span>Easily apply an icon from UIkit <a href='http://getuikit.com/docs/icon.html'>Icon</a> to your panel by adding <code>icon='icon-name'</code>.</span>}
      jsx={examples.iconExample}
      snippet={examples.iconSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default PanelDoc;
