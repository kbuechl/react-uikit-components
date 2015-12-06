import React from 'react';
import ReactDom from 'react-dom/server'
import path from 'path';


const args = process.argv.slice(2);

const filePath = path.resolve();

const Component = require(path.resolve(__dirname, args[0]));

const outputFile = args[1];

const htmString = ReactDom.renderToStaticMarkup(<Component />);

console.log(htmString);
