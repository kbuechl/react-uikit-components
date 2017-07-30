import React, { PropTypes } from 'react';
import Badge from '../lib/badge';

import { templatePropGenerator } from '../../script-utils/helpers/snippetArgGenerator';

// Snippet for Badge
const badgePropTemplates = templatePropGenerator({ bool: ['block', 'notification'], string: ['context', 'text'] });

export const BadgeSnippet = (props) =>
  `<Badge${badgePropTemplates.map((arg) => arg(props)).join('')}>${props.text}</Badge>`;

// JSX for Badge
const BadgeExample = ({ block, context, notification = false, text }) => (
  <Badge {...{ block, context, notification }}>
    {text}
  </Badge>
);
BadgeExample.propTypes = {
  block: PropTypes.bool,
  context: PropTypes.string,
  notification: PropTypes.bool,
  text: PropTypes.oneOf([ PropTypes.number, PropTypes.string ]),
};

// An abstraction to save the same snippet being written multiple times
// There is a space at the end of the wrapping span element to space out the badges.
export const BadgeExampleWrapper = (argsArray) =>
  <div>{argsArray.map((arg) => <span>{BadgeExample(arg)} </span>)}</div>;
