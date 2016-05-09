'use strict';


import React from 'react';
import Commnet from 'react-uikit-comment';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Button from 'react-uikit-button';


const meta = <div>
  <Button type='link' context='link' size='mini' body='12 days ago'/> |
  <Button type='link' context='link' size='mini' body='Profile'/> |
  <Button type='link' context='link' size='mini' body='#'/>
</div>;


const CommentDoc = (props) => (
  <div>
    <section>
      <h1>Comment</h1>
      <p>
        Create comments, for example for articles.
      </p>
      <p>
        <a href='https://github.com/otissv/react-uikit-comment'>react-uikit-comment</a> on github.
      </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-comment --save;

//ES6
import Comment from 'react-uikit-comment';

// ES5
var Comment = require('react-uikit-comment').default;`}
        </Codeblock>

        <hr />
      <p>
        The Comment component consists of a comment header, including an
        avatar, a title and meta data, and a comment body.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>avatar</code></td>
            <td>Add avatar prop to create an avatar for the comment author</td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>Add tilte prop to createCreates a comment title.</td>
          </tr>
          <tr>
            <td><code>meta</code></td>
            <td>Add meta prop to add meta data about the comment.</td>
          </tr>
          <tr>
            <td><code>body</code></td>
            <td>
              Add body prop to add text comment body. Body is overridden
              if commet has children.
            </td>
          </tr>
        </tbody>
      </Table>

      <h3 className='example'>Example</h3>

      <Commnet title='Author' meta={meta}
        avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </Commnet>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
`const meta = <div>
  <Button type='link' context='link' size='mini' body='12 days ago'/> |
  <Button type='link' context='link' size='mini' body='Profile'/> |
  <Button type='link' context='link' size='mini' body='#'/>
</div>;

...
<Commnet title='Author' meta={meta}
  avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    erat, sed diam voluptua.
  </p>
</Commnet>
...
`}
      </Codeblock>
    </section>

    <section>
      <h2>Comment Color</h2>
      <p>
        To style a comment differently, for example to highlight it as the
        admin's comment, just add the <code>primary</code> prop.
      </p>

      <h3 className='example'>Example</h3>
      <Commnet primary title='Author' meta='12 days ago | Profile | #'
        avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </Commnet>


      <h4 className='code'>Code</h4>
      <Codeblock syntax='xml'>
{
`<Commnet primary title='Author' meta='12 days ago | Profile | #'
  avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    erat, sed diam voluptua.
  </p>
</Commnet>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Commnet Props</h2>
      <p>
        See Base for additional utility props.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              avatar
            </td>
            <td>object<br /> {`{src, alt }`}</td>
          </tr>
          <tr>
            <td>
              body
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              meta
            </td>
            <td>any</td>
          </tr>
          <tr>
            <td>
              primary
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              title
            </td>
            <td>string</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default CommentDoc;
