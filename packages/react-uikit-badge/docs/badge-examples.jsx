import { BadgeExampleWrapper, BadgeSnippet } from './badge-example-generators';

const blockArgs = [
  { block: false, text: 'I am a span' },
  { block: true, text: 'I am a div' }
];
const textArgs = [
  { text: 'Info' },
  { text: 'New' },
  { text: 'Free' }
];
const notificationArgs = [
  { notification: true, text: 3 },
  { notification: true, text: 20 },
  { notification: true, text: 100 }
];
const contextArgs = [
  { context: 'success', text: 'success' },
  { context: 'warning', text: 'warning' },
  { context: 'danger', text: 'danger' },
  { context: 'success', notification: true, text: 1 },
  { context: 'warning', notification: true, text: 10 },
  { context: 'danger', notification: true, text: '100+' },
];

const generateJsxAndSnippet = (args) => ({
  jsx: BadgeExampleWrapper(args),
  snippet: args.map((arg) => BadgeSnippet(arg)).join('\n'),
});

export const blockExample = generateJsxAndSnippet(blockArgs);
export const textExample = generateJsxAndSnippet(textArgs);
export const notificationExample = generateJsxAndSnippet(notificationArgs);
export const contextExample = generateJsxAndSnippet(contextArgs);
