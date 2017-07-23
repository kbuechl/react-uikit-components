import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import toMarkdown from 'to-markdown';

// TODO: still things to fix...
const args = process.argv.slice(2);

// set the node mode to md:
process.env.NODE_ENV = 'mdGenerator';

const Component = require(path.resolve(process.cwd(), args[0]));

const htmString = ReactDOMServer.renderToStaticMarkup(<Component.default />);

// \xa0 is a non breaking space in a string, this is purely for asthetic purposes in the generated md.
const postAmble = `\n
## Tests

\`npm run test\` to run tests with minimal output.\xa0\xa0
\`npm run test:spec\` to run tests with detailed output.\xa0\xa0
\`npm run test:watch\` watches all directories and run tests with minimal output on file changes.\xa0\xa0

## Build
\`npm run build\` to build files from distribution.\xa0\xa0
\`npm run build:watch\` watches src directory and builds files on changes.\xa0\xa0

## Lint
\`npm run lint\` lints scripts in src directory.\xa0\xa0
\`npm run lint:watch\` watches src directory and lints scripts in src directory.\xa0\xa0

## License
MIT`;

const options = {
  converters: [
    {
      filter: (node) => node.getAttribute('data-markdown-omit'),
      replacement: () => '',
    },
    {
      filter: ['div', 'p', 'section', 'span'],
      replacement: (innerHTML, node) => `\n${innerHTML}\n`,
    },
  ],
  gfm: true,
};

// Add a method to the string object to regex replace all instances.
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

let markdown = toMarkdown(htmString, options);

markdown = markdown.replaceAll(`undefined`, '');
markdown = markdown.replaceAll(' data-kitid="(.*)"', '');

markdown = markdown + postAmble;

process.stdout.write(markdown);
