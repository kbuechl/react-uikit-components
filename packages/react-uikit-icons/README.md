# React UIkit Icons

Font Awesome icons for React using UIKit CSS framework.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.
UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)

### Installation

```bash
npm install react-uikit-icons --save;
```
```js
// ES6
import Icons from 'react-uikit-icons';

// ES5
var Icons = require('react-uikit-icons').default
```
### Example

```js
<Icons icon='cog' />
<Icons icon='user' />
<Icons icon='home' />
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
