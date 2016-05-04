#React UIkit Comment List

Create comment lists.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage

The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.

UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installation

    npm install react-uikit-comment-list --save;

    // ES6
    import CommentList from 'react-uikit-comment-list';

    // ES5
    var CommentList = require('react-uikit-comment-list').default;

###Example
    <CommentList>
      <li>
        <Commnet title='Author' meta='12 days ago | Profile | #'
          avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </Commnet>
        <CommentList>
          <li>
            <Commnet title='Author' meta='12 days ago | Profile | #'
              avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </p>
            </Commnet>
          </li>
        </CommentList>
      </li>
    </CommentList>


##Tests

`npm run test`to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.

##Build
`npm run build` to build files fro distribution.  
`npm run build:watch` watches src directory and builds files on changes.

##Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.

##License
MIT
