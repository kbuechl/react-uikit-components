import { helpers } from 'react-uikit-base';

const ignoreProps = [
  'blank',
  'body',
  'button',
  'children',
  'classes',
  'container',
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

export const cleanProps = helpers.cleanProps(ignoreProps);

export const cleanInputProps = helpers.cleanProps([]);

export default cleanProps;
