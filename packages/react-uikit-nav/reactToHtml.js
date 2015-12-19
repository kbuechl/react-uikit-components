import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';


const args = process.argv.slice(2);

const Component = require(path.resolve(__dirname, args[0]));

const htmString = ReactDOMServer.renderToStaticMarkup(<Component.default />);

process.stdout.write(htmString);
