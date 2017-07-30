# React Uikit Comment List



## Usage

    npm install react-uikit-comment-list --save;

    // ES6
    import Comment List from 'react-uikit-comment-list';

    // ES5
    var Comment List = require('react-uikit-comment-list');

## Basic

The CommentList component enables the creation of comment lists. It also supports nested comments.


### Code

    <CommentList>
      <li>
        <Comment title='Author' meta='12 days ago | Profile | #' avatar={{src: docs/images/placeholder_avatar.svg, alt: Avatar placeholder}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Comment>
        <CommentList>
          <li>
            <Comment title='Author' meta='12 days ago | Profile | #' avatar={{src: docs/images/placeholder_avatar.svg, alt: Avatar placeholder}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Comment>
          </li>
        </CommentList>
      </li>
    </CommentList>

## Comment List Props



## Tests

`npm run test` to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.  

## Build
`npm run build` to build files from distribution.  
`npm run build:watch` watches src directory and builds files on changes.  

## Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.  

## License
MIT