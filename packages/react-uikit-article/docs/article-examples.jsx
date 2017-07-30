import React from 'react';
import Article from '../lib/article';
import Table from 'react-uikit-table';

import { shortLoremIpsumString, longLoremIpsumString } from '../../script-utils/helpers/snippetArgGenerator';

const basicExample = (
  <Article title='Article title' meta='Written by Super User on 12 April 2012. Posted in Blog' lead={shortLoremIpsumString}>
    <p>{longLoremIpsumString}</p>
    <hr className="uk-article-divider" />
    <p>{longLoremIpsumString}</p>
    <a href="#">Read more</a>
  </Article>
);

const basicSnippet = `
  <Article title='Article title' meta='Written by Super User on 12 April 2012. Posted in Blog' lead='${shortLoremIpsumString}'>
    <p>${shortLoremIpsumString}...</p>
    <hr className="uk-article-divider" />
    <p>${shortLoremIpsumString}...</p>
    <a href="#">Read more</a>
  </Article>`;

const basicTable = (
  <Table head="*" body={[
    {Prop: 'title', Description: 'Creates an article title.'},
    {Prop: 'meta', Description: 'Adds meta data about the article.'},
    {Prop: 'lead', Description: 'Highlights the opening paragraph of the article'},
  ]} />
);

export default {
  basicExample,
  basicSnippet,
  basicTable,
};
