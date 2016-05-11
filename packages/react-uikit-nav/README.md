#React UIkit Nav

Defines different styles for list navigations in React using the UIKit CSS Framework.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage
The master branch uses React v15.

###Installation

    npm install react-uikit-nav --save;

    // ES6
    import Nav from 'react-uikit-nav';
    import NavItem from 'react-uikit-nav/lib.nav-item';

    // ES5
    var Nav = require('react-uikit-nav').default;
    var NavItem = require('react-uikit-nav/lib/nav-item').default;


###Examples

    <Nav parent type='side' cols='1-4'>
    <NavItem label='Active' href='#' active />
    <NavItem parent label='Item' href='#' >
      <Nav type='sub'>
        <NavItem label='Sub item' href='#' />
        <NavItem label='Sub item' href='#' />
      </Nav>
    </NavItem>
    <NavItem label='Item' href='#' />
    </Nav>


    <Nav cols='1-4' type='side' items={[
      {
        label: 'Home',
        href: '#',
        active: true
      },
      {
        label: 'About',
        href: '#'
      }
    ]} />



##Tests

`npm run test`to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.

##Build
`npm run build` to build files for distribution.  
`npm run build:watch` watches src directory and builds files on changes.

##Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.

##License
MIT
