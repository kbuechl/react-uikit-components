import React from 'react';

import Icons from '../lib/icons';
import Table from 'react-uikit-table';
import List from 'react-uikit-list';
import ListItem from 'react-uikit-list/lib/list-item';

import IconCollection from './icon-collection';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Icons';
const npmName = 'react-uikit-icons';
const summary = 'Place vector icons anywhere using the Icons component.';
const propTuples = [{
    Prop: "icon",
    Type: "string",
  }, {
    Prop: "link",
    Type: "object { href}",
  }, {
    Prop: "justify",
    Type: "bool",
  }, {
    Prop: "spin",
    Type: "bool",
  }, {
    Prop: "size",
    Type: "bool",
}];

const iconExampleTable = (
  <Table head={['example', 'description']} body={[
    {example: <Icons kitid='i1' icon='cog' />, description: <span>Uses the <code>icon='cog'</code> prop</span>},
    {example: <Icons kitid='i1' icon='user' />, description: <span>Uses the <code>icon='user'</code> prop</span>},
    {example: <Icons kitid='i1' icon='home' />, description: <span>Uses the <code>icon='home'</code> prop</span>}
  ]}/>
);

const linksExample = (
  <div>
    <Icons link={{ href: '#' }} icon='facebook-official' size='small' margin='right'/>
    <Icons link={{ href: '#' }} icon='twitter-square' size='small' margin='right'/>
    <Icons link={{ href: '#' }} icon='github-square ' size='small'/>
  </div>
);
const linksSnippet = `
<Icons link={{ href: '#' }} icon='facebook-official' size='small' margin='right'/>
<Icons link={{ href: '#' }} icon='twitter-square' size='small' margin='right'/>
<Icons link={{ href: '#' }} icon='github-square ' size='small'/>`;

const buttonsExample = (
  <div>
    <Icons link={{ href: '#', type: 'button' }} icon='facebook' size='small' margin='right'/>
    <Icons link={{ href: '#', type: 'button' }} icon='twitter' size='small' margin='right'/>
    <Icons link={{ href: '#', type: 'button' }} icon='github ' size='small'/>
  </div>
);
const buttonsSnippet = `
<Icons link={{ href: '#', type: 'button' }} icon='facebook' size='small' margin='right'/>
<Icons link={{ href: '#', type: 'button' }} icon='twitter' size='small' margin='right'/>
<Icons link={{ href: '#', type: 'button' }} icon='github ' size='small'/>`;

const exampleSnippet = `<Icons icon='cog' />\n<Icons icon='user' />\n<Icons icon='home' />`;

const iconSizeTable = (
  <Table head={['example', 'description']} body={[
    {example: <Icons kitid='i1' icon='home' />, description: "Default size"},
    {example: <Icons kitid='i1' icon='home' size='small'/>, description: <span>Uses the <code>size='small'</code> prop</span>},
    {example: <Icons kitid='i1' icon='home' size='medium'/>, description: <span>Uses the <code>size='medium'</code> prop</span>},
    {example: <Icons kitid='i1' icon='home' size='large'/>, description: <span>Uses the <code>size='large'</code> prop</span>}
  ]}/>
);
const iconSizeSnippet = `<Icons icon='home' />\n<Icons icon='home' size='small'/>\n<Icons icon='home' size='medium'/>\n<Icons icon='home' size='large'/>`;

const spinningExample = (
  <div>
    <Icons spin icon='spinner' margin='right'/>
    <Icons spin icon='refresh' margin='right'/>
  </div>
);
const spinningSnippet = `<Icons spin icon='spinner' margin='right'/>\n<Icons spin icon='refresh' margin='right'/>`;

const justifyExample = (
  <List line>
    <ListItem><Icons justify icon='flash' /> Justified icon</ListItem>
    <ListItem><Icons justify icon='folder' /> Justified icon</ListItem>
    <ListItem><Icons justify icon='plug' /> Justified icon</ListItem>
    <ListItem><Icons justify icon='lock' /> Justified icon</ListItem>
  </List>
);
const justifySnippet = `
<List line>
  <ListItem><Icons justify icon='flash' /> Justified icon</ListItem>
  <ListItem><Icons justify icon='folder' /> Justified icon</ListItem>
  <ListItem><Icons justify icon='plug' /> Justified icon</ListItem>
  <ListItem><Icons justify icon='lock' /> Justified icon</ListItem>
</List>`;

const IconsDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <p>
     The Icon component uses the fantastic <a href='https://fortawesome.github.io/Font-Awesome/'>Font Awesome</a> icon font, a project by Dave Gandy, which provides more than 300 symbols and glyphs for web-related actions.
    </p>
    <DocExample
      name="Example"
      description={<span>The Icon component uses the fantastic <a href='https://fortawesome.github.io/Font-Awesome/'>Font Awesome</a> icon font, a project by Dave Gandy, which provides more than 300 symbols and glyphs for web-related actions</span>}
      table={iconExampleTable}
      snippet={exampleSnippet}
    />
    <DocExample
      name="Icons Link"
      description={<span>Icons can be used as anchors by adding the <code>link</code> prop. The properties from the <code>link</code> prop will be passed to the anchor.</span>}
      table={iconExampleTable}
      jsx={linksExample}
      snippet={linksSnippet}
    />
    <DocExample
      name="Button icon"
      description={<span>To display an Icon as a button add a <code>type: 'button'</code>  property to the <code>link</code> prop.</span>}
      table={iconExampleTable}
      jsx={buttonsExample}
      snippet={buttonsSnippet}
    />
    <DocExample
      name="Icon sizes"
      description={<span>Icons can be displayed in larger sizes by using the <code>size='*'</code> prop.</span>}
      table={iconSizeTable}
      snippet={iconSizeSnippet}
    />
    <DocExample
      name="Spinning Icon"
      description={<span>Add the <code>spin</code> class to create animated spinning icons.</span>}
      jsx={spinningExample}
      snippet={spinningSnippet}
    />
    <DocExample
      name="Justify Icon"
      description={<span>To add a fixed width to the icon and center it, add the <code>justify</code> prop. This is useful when using different icons in a list.</span>}
      jsx={justifyExample}
      snippet={justifySnippet}
    />
    <section data-markdown-omit="true">
      <h2>Icon mapping</h2>
      <div>
        <p>Here is an overview of the <code>icon</code> classes provided by <a href="http://fortawesome.github.com/Font-Awesome/">Font Awesome</a>.</p>
        <h3>Web Application Icons</h3>
      </div>
      <IconCollection />
    </section>
    <DocFooter { ...{ name, propTuples }} />
  </div>
);


export default IconsDoc;
