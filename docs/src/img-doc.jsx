'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Img from 'react-uikit-img';
import Table from 'react-uikit-table';


const ImgDoc = (props) => (
  <div>
    <section>
      <h1>Img</h1>
      <p className='uk-article-lead'>
        Easily create responsive images.
      </p>

      <p>
        <a href='https://github.com/otissv/react-uikit-img'>react-uikit-img</a> on github.
      </p>
    </section>


    <section>
      <h2>Usage</h2>
      <Codeblock>
{`npm install react-uikit-img --save;

// ES6
import Img from 'react-uikit-img';

// ES5
var Img = require('react-uikit-img').default;
`}
      </Codeblock>


      <h3 className='example'>Example</h3>
      <Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />

      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
`<Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />
`}
      </Codeblock>
    </section>

    <section>

    <h2>Responsive image</h2>
    <p>
      The Image component can provide different images for various
      viewport widths. Enable responsive behavior by adding one or
       all of the responsive props <code>small</code>, <code>medium</code>,
       <code>large</code> or <code>xlarge</code>.
    </p>

    <p>
      Each responsive size takes a JSON object.
    </p>

    <Table>
      <thead>
        <tr>
          <th className='uk-text-left'>JSON key</th>
          <th className='uk-text-left'>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='uk-text-left'>width</td>
          <td className='uk-text-left'>The width of the image. The defualt width is 100% if no width is specified</td>
        </tr>
        <tr>
          <td className='uk-text-left'>height</td>
          <td className='uk-text-left'>The height of the image. The defualt height is auto if no height is specified</td>
        </tr>
        <tr>
          <td className='uk-text-left'>src</td>
          <td className='uk-text-left'>The src url for the image</td>
        </tr>
      </tbody>
    </Table>

    <h4 className='example'>Example</h4>

    <Img
      small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
      medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
      large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
      xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
    />


    <Codeblock syntax='xml'>
{
`<Img
  small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
  medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
  large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
  xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
/>
`}
    </Codeblock>
  </section>


  <section>
    <h1>Cover images</h1>
    <p>
      The <code>cover</code> prop allows you to create fullscreen teasers using images. It will always
      be centered vertically and horizontally and cover its container without
      losing its proportions. You can also place additional content, like text
      or images on top of the image cover.
    </p>


    <h4 className='example'>Example</h4>

    <Img cover
      small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
      medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
      large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
      xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
    >

      <h1>Cover image</h1>
    </Img>


    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`<Img cover
  small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
  medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
  large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
  xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
>

  <h1>Cover image</h1>
</Img>
`}
    </Codeblock>
  </section>


    <section>
      <h2>Img Props</h2>

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
              alt
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              cover
            </td>
            <td colSpan='2'>Bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              height
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              large
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
            <td className='uk-text-left'></td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              medium
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              small
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              src
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              width
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              xlarge
            </td>
            <td className='uk-text-left'>object<br />{`{width, height, src}`}</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default ImgDoc;
