# React UIkit Grid

Create a fully responsive, fluid and nestable grid layout.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.
UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)

### Installation

```bash
npm install react-uikit-grid --save;
```
```js
// ES6
import Grid from 'react-uikit-grid';

// ES5
var Grid = require('react-uikit-grid');
```

### Example
```js
<Grid textAlign='center' divider>
...
</Grid>
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
