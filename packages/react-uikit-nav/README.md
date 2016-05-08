#React UIkit Nav

## Warning: Not yet completed!

Smooth off screen draws perfect for building mobile navigation.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage
The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.

UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installation

    npm install react-uikit-nav --save;

    // ES6
    import Nav from 'react-uikit-nav';

    // ES5
    var Nav = require('react-uikit-nav').default;


###Example

    <Nav>
      {`<div>...<div>`};
    </Nav>


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
