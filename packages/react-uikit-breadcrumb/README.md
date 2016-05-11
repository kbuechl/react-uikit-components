#React UIkit Breadcrumb

Defines different styles for list breadcrumbigations in React using the UIKit CSS Framework.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage
The master branch uses React v15.

###Installation

    npm install react-uikit-breadcrumb --save;

    // ES6
    import Breadcrumb from 'react-uikit-breadcrumb';
    import BreadcrumbItem from 'react-uikit-breadcrumb/lib.breadcrumb-item';

    // ES5
    var Breadcrumb = require('react-uikit-breadcrumb').default;
    var BreadcrumbItem = require('react-uikit-breadcrumb/lib/breadcrumb-item').default;


###Examples

    <Breadcrumb parent type='side' cols='1-4'>
    <BreadcrumbItem label='Active' href='#' active />
    <BreadcrumbItem parent label='Item' href='#' >
      <Breadcrumb type='sub'>
        <BreadcrumbItem label='Sub item' href='#' />
        <BreadcrumbItem label='Sub item' href='#' />
      </Breadcrumb>
    </BreadcrumbItem>
    <BreadcrumbItem label='Item' href='#' />
    </Breadcrumb>


    <Breadcrumb cols='1-4' type='side' items={[
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
