#React UIkit Button Group

Easily create nicely looking group buttons.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.


##Usage
The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.

UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installation
    npm install react-uikit-button-group --save;

    // ES6
    import Button from 'react-uikit-button';
    import ButtonGroup from 'react-uikit-button-group';

    // ES5
    var Button = require('react-uikit-button').default;
    var ButtonGroup = require('react-uikit-button-group').default;

###Example
    <ButtonGroup display='block' margin='smallBottom'>
      <Button body='Link' type='link' />
      <Button body='Button'/>
      <Button body='Button'/>
    </ButtonGroup>

    <ButtonGroup display='block' margin='smallBottom'>
      <Button body='Link' context='primary' type='link' />
      <Button body='Button' context='primary'/>
      <Button body='Button' context='primary'/>
    </ButtonGroup>

    <ButtonGroup display='block' margin='smallBottom'>
      <Button body='Link' context='success' type='link' />
      <Button body='Button' context='success'/>
      <Button body='Button' context='success'/>
    </ButtonGroup>

    <ButtonGroup display='block' margin='smallBottom'>
      <Button body='Link' context='danger' type='link' />
      <Button body='Button' context='danger'/>
      <Button body='Button' context='danger'/>
    </ButtonGroup>

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
