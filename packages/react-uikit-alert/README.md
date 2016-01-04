# React UIkit Alert

Defines styles for success, warning and error messages

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage

###Installation
    npm install react-uikit-alert --save;

    // ES6
    import Alert from ';react-uikit-alert';

    // ES5
    var Alert = require('react-uikit-alert');

###Example

    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Alert>


##Tests

`npm run test`to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.

##Build
`npm run build` to build files fro distribution.  
`npm run build:watch`watches src directory and builds files on changes.

##Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.

##License
MIT
