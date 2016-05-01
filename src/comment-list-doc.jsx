'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import CommentList from 'react-uikit-comment-list';
import Comment from 'react-uikit-comment';

const CommentListDoc = (props) => (
  <div>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' />
    <section>
      <h1>Comment List</h1>

        <p>
          <a href='https://github.com/otissv/react-uikit-comment-list'>react-uikit-comment-list</a> on github.
        </p>


      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-comment-list --save;

// ES6
import CommentList from 'react-uikit-comment-list';

// ES5
var CommentList = require('react-uikit-comment-list'&#41);`}
        </Codeblock>

      </section>

      <section>
        <p>
          The CommentList component enables the creation of comment lists. It also supports nested comments
        </p>

        <h3 className='example'>Example</h3>
        <CommentList>
          <li>
            <Comment title='Author' meta='12 days ago | Profile | #'
              avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </p>
            </Comment>
            <CommentList>
              <li>
                <Comment title='Author' meta='12 days ago | Profile | #'
                  avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua.
                  </p>
                </Comment>
              </li>
            </CommentList>
          </li>
        </CommentList>

        <h3 className='code'>Code</h3>
        <Codeblock scroll='text'>
  {
`<CommentList>
  <li>
    <Comment title='Author' meta='12 days ago | Profile | #'
      avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.
      </p>
    </Comment>
    <CommentList>
      <li>
        <Comment title='Author' meta='12 days ago | Profile | #'
          avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </Comment>
      </li>
    </CommentList>
  </li>
</CommentList>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Comment list props</h2>
        See Base for additional utility props.
    </section>

  </div>
);

export default CommentListDoc;
