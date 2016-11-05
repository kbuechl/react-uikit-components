#React UIkit Progress

Defines different styles for progress bars.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage
UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installation

    npm install react-uikit-progress --save;

    // ES6
    import Codeblock from 'react-uikit-progress';

    // ES5
    var Codeblock = require('react-uikit-progress').default;

###Example

```
<Progress
  bar={80}
  striped active
  size='small'
  context='danger'
/>
```


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
