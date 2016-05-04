#React UIkit Table

Create nice looking dynamic tables.


See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage
The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.

UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installation
    npm install react-uikit-table --save;

    // ES6
    import Table from 'react-uikit-table';

    // ES5
    var Table = require('react-uikit-table');



###Example
    const data = [
      {d1: 'Data', d2: 'Data', d3: 'Data'},
      {d1: 'Data', d2: 'Data', d3: 'Data'},
      {d1: 'Data', d2: 'Data', d3: 'Data'}
    ];
    ...
    <Table caption='Generated table.' head={['Heading', 'Heading', 'Heading']} body={data}/>


    <Table caption='Table from Children.'>
      <thead>
        <tr>
          <th className='uk-text-left'>Heading</th>
          <th className='uk-text-left'>Heading</th>
          <th className='uk-text-left'>Heading</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
        </tr>
      </tbody>
    </Table>



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
