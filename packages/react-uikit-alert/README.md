# React UIkit Alert

Defines styles for success, warning and error messages

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.
UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)

### Installation

```bash
npm install react-uikit-alert --save;
```

```js
// ES6
import Alert from 'react-uikit-alert';

// ES5
var Alert = require('react-uikit-alert').default;
```

### Example

```js
<Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</Alert>
```

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
