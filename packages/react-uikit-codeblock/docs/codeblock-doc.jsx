import React from 'react';

import Codeblock from '../lib/codeblock';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Codeblock';
const npmName = 'react-uikit-codeblock';
const summary = 'Displays code inside of a block.';

const loremIpsumString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const snippet = `<Codeblock>\n  {<div>...</div>}\n</Codeblock>`;

const CodeblockDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={
        `To use Codeblock component place backticks inside of braces and place the code inside of the backticks.` +
        `For inline code use the html element <code>.`
      }
      snippet={snippet}
    />
    <DocExample
      description={`The scroll prop can be added to create a scrollable Codeblock.`}
      example={<Codeblock scroll="scroll">{loremIpsumString}{loremIpsumString} {loremIpsumString} {loremIpsumString}</Codeblock>}
      snippet={`<Codeblock scroll="scroll">\n  ${loremIpsumString}\n  ${loremIpsumString}\n  \n  ${loremIpsumString}\n  \n  ${loremIpsumString}\n</Codeblock>`}
    />
    <DocFooter name={name} />
  </div>
);


export default CodeblockDoc;
