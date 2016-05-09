'use strict';


import React from 'react';
import Article from 'react-uikit-article';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Note from 'react-uikit-note';


const ArticleDoc = (props) => (
  <div>
    <section>
      <h1>Article</h1>
      <p className='uk-article-lead'>
        Create articles within your page.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-article'>react-uikit-article</a> on github.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
          <Codeblock>
{`npm install react-uikit-article --save;

// ES6
import Article from 'react-uikit-article';

// ES5
var Article = require('react-uikit-article').default;
`}
        </Codeblock>

      <hr className="uk-article-divider" />

      <p>
        The article component constists of the article itself, a title, a lead and meta data.
      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'><code>title</code></td>
            <td className='uk-text-left'>Creates an article title.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>meta</code></td>
            <td className='uk-text-left'>Adds meta data about the article.</td>
          </tr>
          <tr>
            <td className='uk-text-left'><code>lead</code></td>
            <td className='uk-text-left'>Highlights opening paragraph of the article</td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>

      <Article
        title='Article title'
        meta='Written by Super User on 12 April 2012. Posted in Blog'
        lead='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.' >

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <hr className="uk-article-divider" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#">Read more</a>
      </Article>

      <h4 className='code'>Code</h4>
      <Codeblock scroll='text' syntax='xml'>
{
`  <Article
  title='Article title'
  meta='Written by Super User on 12 April 2012. Posted in Blog'
  lead='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.' >

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>

  <hr className="uk-article-divider" />

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <a href="#">Read more</a>
</Article>
`}
      </Codeblock>

      <Note>
        To create separate sections in an article use <code>&lt;hr className="uk-article-divider" &#47;&gt;</code>.
      </Note>
    </section>


    <section>
      <h2>Artilce Props</h2>

      <p>
        See Base for additional utility props.
      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              lead
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              meta
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              onClose
            </td>
            <td className='uk-text-left'>func</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              title
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
        </tbody>
      </Table>
    </section>
  </div>
);

export default ArticleDoc;
