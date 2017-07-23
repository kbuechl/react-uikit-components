import React, { PropTypes } from 'react';
import Grid from 'react-uikit-grid';
import Panel from 'react-uikit-panel';

import { templatePropGenerator, shortLoremIpsumString, longLoremIpsumString } from '../../script-utils/helpers/snippetArgGenerator';
import Block from '../lib/block';

// Snippet for Block
const blockPropTemplates = templatePropGenerator({ bool: ['container', 'contrast', 'large'], string: ['context'] });
export const BlockSnippet = (props) =>
  `<Block${blockPropTemplates.map((arg) => arg(props)).join('')}>
    <h4>${props.title}</h4>
    <Grid widths='1-3'>
      <Panel>${shortLoremIpsumString}...</Panel>
      <Panel>${shortLoremIpsumString}...</Panel>
      <Panel>${shortLoremIpsumString}...</Panel>
    </Grid>
  </Block>`;


export const BlockExample = ({ context, container = false, contrast, key, large, title = 'block' }) => (
  <Block {...{ context, container, contrast, large, key }}>
    <h4>{title}</h4>
    <Grid widths='1-3'>
      <Panel>{longLoremIpsumString}</Panel>
      <Panel>{longLoremIpsumString}</Panel>
      <Panel>{longLoremIpsumString}</Panel>
    </Grid>
  </Block>
);

BlockExample.propTypes = {
  context: PropTypes.string.isRequired,
  container: PropTypes.bool.isRequired,
  contrast: PropTypes.bool.isRequired,
  key: PropTypes.number,
  large: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export const generateJsxAndSnippet = (args) => ({
  jsx: BlockExample(args),
  snippet: BlockSnippet(args),
});
