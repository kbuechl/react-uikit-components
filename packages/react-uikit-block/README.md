#React UIkit Block

Separate content sections by bundling them in blocks with different styles.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage

###Installation

    npm install react-uikit-block --save;

    // ES6
    import Block from 'react-uikit-block';

    // ES5
    var Block = require('react-uikit-block');


###Example
    <Block context='muted'>
    ...
    </Block>



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
