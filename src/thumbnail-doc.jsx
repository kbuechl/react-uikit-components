'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Thumbnail from 'react-uikit-thumbnail';
import Table from 'react-uikit-table';


const ThumbnailDoc = (props) => (
  <div>
    <section>
      <h1>Thumbnail</h1>
      <p className='uk-article-lead'>
        Create different thumbnail images.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-thumbnail'>react-uikit-thumbnail</a> on github.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-thumbnail --save;

// ES6
<code>import Article from 'react-uikit-thumbnail';

// ES5
var Article = require('react-uikit-thumbnail').default;`}
</Codeblock>

      <hr className="uk-article-divider" />

      <p>
        Thumbnail component creates a thumbnail around the Img component.
      </p>
      <p>
        There are three types of thumbnails: block, link and figure. Block is
        the defualt type. To change the type of thumbnail add
        the <code>type</code> prop and the respective type.
      </p>

      <h3 className='example'>Example</h3>
      <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
      <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
      <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
<Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
<Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />
`}
      </Codeblock>
    </section>

    <section>
      <h2>Thumbnail caption</h2>
      <p>
        To add a caption, simply add it as a child of the thumbnail.
      </p>

      <h3 className='example'>Example</h3>
      <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>
        Caption <code>div</code>
      </Thumbnail>
      <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>
        Caption <code>link</code>
      </Thumbnail>
      <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>
        Caption <code>figure</code>
      </Thumbnail>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>
Caption <code>div</code>
</Thumbnail>
<Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>
Caption <code>link</code>
</Thumbnail>
<Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>
Caption <code>figure</code>
</Thumbnail>
`}
      </Codeblock>
    </section>


    <section>
      <h2>Thumbnail sizes</h2>
      <p>
        Thumbnails can be resized using the <code>size</code> prop.
      </p>

      <hr className="uk-article-divider" />

      <h3 className='example'>Example</h3>
      <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'>
        <code>large</code>
      </Thumbnail>
      <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'>
        <code>medium</code>
      </Thumbnail>
      <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'>
        <code>small</code>
      </Thumbnail>
      <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'>
        <code>mini</code>
      </Thumbnail>

      <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'>
        <code>expand</code>
      </Thumbnail>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{`<Thumbnail size='large' src='docs/images/placeholder_600x400.svg'>
<code>large</code>
</Thumbnail>
<Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'>
<code>medium</code>
</Thumbnail>
<Thumbnail size='small' src='docs/images/placeholder_600x400.svg'>
<code>small</code>
</Thumbnail>
<Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'>
<code>mini</code>
</Thumbnail>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Img Props</h2>
      Props can be passed to the Img component by using the <code>img</code> prop.
      See Img compoent for further details.
    </section>

    <section>
      <h2>Thumbnail Props</h2>
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
              height
            </td>
            <td className='uk-text-left'>
              string
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              img
            </td>
            <td className='uk-text-left'>
              object<br />See Img component props.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              medium
            </td>
            <td className='uk-text-left'>
              object<br />See Img component props.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              large
            </td>
            <td className='uk-text-left'>
              object<br />See Img component props.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              small
            </td>
            <td className='uk-text-left'>
              object<br />See Img component props.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              src
            </td>
            <td className='uk-text-left'>
              string<br />
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              size
            </td>
            <td className='uk-text-left'>
              oneOf<br />
             large, medium, small, mini or expand
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              type
            </td>
            <td className='uk-text-left'>
              oneOf<br />
              block, figure or link.
              Default is block.
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              width
            </td>
            <td className='uk-text-left'>
              string
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              xlarge
            </td>
            <td className='uk-text-left'>
              object<br />See Img component props.
            </td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default ThumbnailDoc;
