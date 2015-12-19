'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createRenderer } from 'react-addons-test-utils';
import dom from 'cheerio';


export default function (element, tag) {
  const renderMarkup = ReactDOMServer.renderToStaticMarkup;
  const $ = dom.load(renderMarkup(element));

  return {
    dom : tag => tag ? $(tag) : $
  };
};
