import React, { PropTypes } from 'react';
import Grid from 'react-uikit-grid';

import { templatePropGenerator, shortLoremIpsumString, longLoremIpsumString } from '../../script-utils/helpers/snippetArgGenerator';
import Panel from '../lib/panel';

// Snippet for Panel
const panelProps = {
  bool: ['box', 'hover', 'header', 'space'],
  json: ['badge', 'teaser'],
  string: ['context', 'colMedium', 'icon', 'link', 'margin', 'title', 'type'],
};
const panelPropTemplates = templatePropGenerator(panelProps);

const generatePanelSnippet = (props) => `
  <Panel${panelPropTemplates.map((arg) => arg(props)).join('')}>
    ${shortLoremIpsumString}...
  </Panel>`;

// JSX for Panel
// Note, use a short string for link and block type because they're inline.
const generatePanel = (props) =>
  <Panel {...props}>
    {(props.type === 'link' || props.type === 'block') ? shortLoremIpsumString : longLoremIpsumString }
  </Panel>;

// Snippet for Grid
const gridPropTemplates = templatePropGenerator(gridProps);
const gridProps = {
  string: ['medium', 'large'],
};

export const generateGridAndPanelSnippet = (props) => `
  <Grid${gridPropTemplates.map((arg) => arg(props)).join('')}>
    ${props.panels.map((panel) => generatePanelSnippet(panel)).join('\n  ')}
  </Grid>`;


// JSX for Grid
export const generateGridAndPanels = ({ indent, medium, large, panels }) => (
  <Grid {...{ indent, medium, large }}>{
    panels.map((panel) => generatePanel(panel))
  }</Grid>
);
generateGridAndPanels.propTypes = {
  indent: PropTypes.bool,
  medium: PropTypes.string,
  large: PropTypes.string,
  panels: PropTypes.array,
};
