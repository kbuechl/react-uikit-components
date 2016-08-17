import uikit from 'react-uikit-base';

const ignoreProps = [
  'blank',
  'body',
  'button',
  'children',
  'classes',
  'context',
  'control',
  'display',
  'help',
  'icon',
  'input',
  'items',
  'justify',
  'kitid',
  'label',
  'layout',
  'link',
  'onChange',
  'options',
  'pos',
  'row',
  'show',
  'size',
  'spin',
  'title',
  'toggle',
  'type',
  'width'
];

export default uikit.helpers.cleanProps(ignoreProps);
