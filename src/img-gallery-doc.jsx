'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import ImgGroup from 'react-uikit-img-gallery';
import Table from 'react-uikit-table';


const ImgGalleryDoc = (props) => (
  <div>
    <section>
      <h1>Img Gallery</h1>
      <p className='uk-article-lead'>
        Create gallery of images.
      </p>

      <p>
        <a href='https://github.com/otissv/react-uikit-img-gallery'>react-uikit-img-gallery</a> on github.
      </p>
    </section>


    <section>
    <h2>Usage</h2>
<Codeblock>
{`npm install react-uikit-img-gallery --save;

// ES6
import ImgGallery from 'react-uikit-img-gallery';

// ES5
var ImgGallery = require('react-uikit-img-gallery').default;
`}
    </Codeblock>

    <h3 className='example'>Example</h3>
    <ImgGroup
      items={[
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'}
      ]}
    />

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{`<ImgGroup
  items={[
    {src: 'docs/images/placeholder_200x150_2.svg'},
    {src: 'docs/images/placeholder_200x150_2.svg'},
    {src: 'docs/images/placeholder_200x150_2.svg'},
    {src: 'docs/images/placeholder_200x150_2.svg'},
    {src: 'docs/images/placeholder_200x150_2.svg'},
    {src: 'docs/images/placeholder_200x150_2.svg'}
  ]}
/>
`}
    </Codeblock>
  </section>


  <section>
    <h2>Img gallery items</h2>
    <p>
      The <code>items</code> is an array which takes a collection of JSON objects.
      JSON object properties can be any of the props fom the Img component.
    </p>
    <ImgGroup
      items={[
        {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
        {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
        {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
        {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
        {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
        {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'}
      ]}
    />


    <h4 className='code'>Code</h4>

    <h3 className='example'>Example</h3>
    <Codeblock syntax='xml'>
{`<ImgGroup
  items={[
    {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
    {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
    {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
    {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
    {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'},
    {src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right'}
  ]}
/>
`}
    </Codeblock>
  </section>


    <section>
      <h2>Img gallery props</h2>

      <p>
      See base component for additional utility props.
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
              items
            </td>
            <td className='uk-text-left'>
              array of objects.<br/>
            See Img component for props.
            </td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default ImgGalleryDoc;
