# React Uikit Notify



## Usage

    npm install react-uikit-notify --save;

    // ES6
    import Notify from 'react-uikit-notify';

    // ES5
    var Notify = require('react-uikit-notify');




### Code

      <Notify kitid='notify1' pos='top-center' messages={[{ message: 'Message...', kitid:  'message_0', timeout: 3000, context: 'info',
          animate: {
     in : kitid => this.handleNotifyIn(kitid),
     out: kitid => this.handleNotifyOut(kitid)
     },
          onClick: e => this.handleClose(e),
        }]}
      />

## Animation



## Custom message




### Code

    {
      message: <div><i className='uk-icon-check'></i> Message with an icon...</div>
    }

## Delay and sticky




### Code

    {
      message: 'Stiky message...', timeout: 0
    }

## Message context



<table class="uk-table"><caption>Notification message context table.</caption>

<thead>

<tr>

<th>Status</th>

<th>Code</th>

<th>Example</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">Info</td>

<td colspan="1">{ context: 'info' }</td>

<td>Info</button></td>

</tr>

<tr>

<td colspan="1">Success</td>

<td colspan="1">{ context: 'success' }</td>

<td>Success</button></td>

</tr>

<tr>

<td colspan="1">Warning</td>

<td colspan="1">{ context: 'warning' }</td>

<td>Warning</button></td>

</tr>

<tr>

<td colspan="1">Danger</td>

<td colspan="1">{ context: 'danger' }</td>

<td>Danger</button></td>

</tr>

</tbody>

</table>

## Positions



<table class="uk-table"><caption>Notification message context table.</caption>

<thead>

<tr>

<th>Position</th>

<th>Code</th>

<th>Example</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">top-center</td>

<td colspan="1">{ pos: 'top-center' }</td>

<td>Top Center</button></td>

</tr>

<tr>

<td colspan="1">top-left</td>

<td colspan="1">{ pos: 'top-left' }</td>

<td>Top Left</button></td>

</tr>

<tr>

<td colspan="1">top-right</td>

<td colspan="1">{ pos: 'top-right' }</td>

<td>Top Right</button></td>

</tr>

<tr>

<td colspan="1">bottom-center</td>

<td colspan="1">{ pos: 'bottom-center' }</td>

<td>Bottom Center</button></td>

</tr>

<tr>

<td colspan="1">bottom-left</td>

<td colspan="1">{ pos: 'bottom-left' }</td>

<td>Bottom Left</button></td>

</tr>

<tr>

<td colspan="1">bottom-right</td>

<td colspan="1">{ pos: 'bottom-right' }</td>

<td>Bottom Right</button></td>

</tr>

</tbody>

</table>

## Notify Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">message</td>

<td>array</td>

</tr>

<tr>

<td colspan="1">pos</td>

<td>oneOf: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' 'bottom-left' | 'bottom-right'</td>

</tr>

</tbody>

</table>

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