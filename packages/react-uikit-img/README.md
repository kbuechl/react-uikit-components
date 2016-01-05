#React UIkit Img

Easily create responsive images.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage

###Installation
Easily create responsive images.


  npm install react-uikit-img --save;

  // ES6  
  import Img from 'react-uikit-img';

  // ES5  
  var Img = require('react-uikit-img');


###Example

    <Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />

    <Img
      small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
      medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
      large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
      xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
    />

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
