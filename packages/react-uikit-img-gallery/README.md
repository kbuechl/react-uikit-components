#React UIkit Img Gallery

Create gallery of images.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage

###Installation
    npm install react-uikit-img-gallery --save;

    // ES6
    import ImgGallery from 'react-uikit-img-gallery';

    // ES5
    var ImgGallery = require('react-uikit-img-gallery');


###Example
    <ImgGroup
      items={[
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'},
        {src: 'docs/images/placeholder_200x150_2.svg'}
      ]}
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
