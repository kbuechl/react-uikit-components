#React UIKit Overlay

Easily create responsive images.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage

###Installation
    npm install react-uikit-overlay --save;

    // ES6
    import Overlay from 'react-uikit-overlay';

    // ES5
    var Overlay = require('react-uikit-overlay');


###Example
    <Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
      <h3>Title</h3>
      <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
    </Overlay>



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
