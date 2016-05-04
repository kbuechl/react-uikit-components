'use strict';

import ReactDOMServer from 'react-dom/server';
import { createRenderer } from 'react-addons-test-utils';
import dom from 'cheerio';


export function htmlToDom (element) {
  const $ = dom.load(element);

  return {
    dom : tag => tag ? $(tag) : $
  };
}

export function htmlToString (element) {
  return htmlToDom(element).dom().html().replace(/\n\s+/g,'');
}


export function reactToDom (element, tag) {
  const renderMarkup = ReactDOMServer.renderToStaticMarkup;
  const $ = dom.load(renderMarkup(element));

  return {
    dom : tag => tag ? $(tag) : $
  };
}

export function reactToString (element) {
  return reactToDom(element).dom().html();
}
