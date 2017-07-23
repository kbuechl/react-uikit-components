import React from 'react';
import Table from 'react-uikit-table';

import { generateGridAndPanels, generateGridAndPanelSnippet } from './panel-example-generators';

export const basicTable = (
  <Table head="*" body={[
    { Prop: (<code>tilte</code>), Description: (<span>Add <code>title</code> prop to add the panel title.</span>), },
    { Prop: (<code>badge</code>), Description: (<p>Add the <code>badge</code> prop to add a panel badge. Add <code>badge='value'</code> to set the body of the badge to the value of the string. Add <code>badge=&#123;&#123;body: 'value', context: 'danger'&#125;&#125;</code> to set the body and the context of the badge. Badge context can be success, warning or danger.</p>) },
  ]} />
);
export const typesTable = (
  <Table head="*" body={[
    { Prop: (<code>block</code>), Description: "Renders the panel as a block.", },
    { Prop: (<code>link</code>), Description: (<span>Renders the panel inside of a block. The <code>link='url/path'</code> is required to set the link\'s address.</span>) },
  ]} />
);

const basicPanels = [{title: 'Title', badge: {body: 'hot', context: 'danger'}}];
const basicArgs = { medium: '1-3', large: '1-3', panels: basicPanels };

export const basicExample = generateGridAndPanels(basicArgs);
export const basicSnippet = generateGridAndPanelSnippet(basicArgs);

const typesPanels = [
  {margin: 'bottom', box: true, title: 'Block panel', type: 'block'},
  {box: true, title: 'Link panel', type: 'link', link: ''},
];
export const typesExample = generateGridAndPanels({ panels: typesPanels });
export const typesSnippet = generateGridAndPanelSnippet({ panels: typesPanels });


const boxPanels = [
  {box: true, title: 'Title', badge:{body: 'hot', context: 'danger'}},
];
const boxArgs = { medium: '1-3', large: '1-3', indent: true, panels: boxPanels };
export const boxExample = generateGridAndPanels(boxArgs);
export const boxSnippet = generateGridAndPanelSnippet(boxArgs);

const primaryPanelExample = {colMedium: '1-3', box: true, title:'Title', context: 'primary'};
const boxPrimaryPanels = [
  {...primaryPanelExample, margin:'bottom'},
  {...primaryPanelExample, margin:'bottom'},
  primaryPanelExample
];

export const boxPrimaryExample = generateGridAndPanels({ panels: boxPrimaryPanels });
export const boxPrimarySnippet = generateGridAndPanelSnippet({ panels: boxPrimaryPanels });

const secondaryPanelExample = {colMedium: '1-3', box: true, title:'Title', context: 'secondary', margin:'bottom'};
const boxSecondaryPanels = [secondaryPanelExample, secondaryPanelExample, secondaryPanelExample];

export const boxSecondaryExample = generateGridAndPanels({ panels: boxSecondaryPanels });
export const boxSecondarySnippet = generateGridAndPanelSnippet({ panels: boxSecondaryPanels });

const hoverPanelExample = {title:'Title', link: '#', hover: true, margin:'bottom'};
const hoverPanels = [hoverPanelExample, hoverPanelExample, hoverPanelExample];
export const boxHoverExample = generateGridAndPanels({indent: true, panels: hoverPanels});
export const boxHoverSnippet = generateGridAndPanelSnippet({indent: true, panels: hoverPanels});

const headerPanelExample = {header: true, colMedium: '1-3', title:'Title', margin:'bottom'};
const headerPanels = [headerPanelExample, headerPanelExample, headerPanelExample];

export const headerExample = generateGridAndPanels({panels: headerPanels});
export const headerSnippet = generateGridAndPanelSnippet({panels: headerPanels});

const spacePanelExample = {space: true, box: true, colMedium: '1-3', title:'Title', margin: 'bottom'};
const spacePanels = [spacePanelExample, spacePanelExample, spacePanelExample];

export const spaceExample = <div>{generateGridAndPanels({panels: spacePanels})} {generateGridAndPanels({panels: spacePanels})}</div>;
export const spaceSnippet = [generateGridAndPanelSnippet({panels: spacePanels}), generateGridAndPanelSnippet({panels: spacePanels})].join('\n');

const teaser = {src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'};
const teaserPanelExample = {teaser, box: true, colMedium: '1-3', title:'Title', margin: 'bottom'};
const teaserPanels = [teaserPanelExample, teaserPanelExample, teaserPanelExample];

export const teaserExample = generateGridAndPanels({ panels: teaserPanels });
export const teaserSnippet = generateGridAndPanelSnippet({ panels: teaserPanels });

const iconPanelExample = {icon: 'user', box: true, colMedium: '1-3', title:'Title', margin: 'bottom'};
const iconPanels = [iconPanelExample, iconPanelExample, iconPanelExample];
export const iconExample = generateGridAndPanels({ panels: iconPanels });
export const iconSnippet = generateGridAndPanelSnippet({ panels: iconPanels });
