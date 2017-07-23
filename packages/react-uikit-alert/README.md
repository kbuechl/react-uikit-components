# React Uikit Alert

Defines styles for success, warning and error messages.

## Usage

```
npm install react-uikit-alert --save;
```

```
// ES6
import Alert from 'react-uikit-alert';

// ES5
var Alert = require('react-uikit-alert');
```

The alert component creates an alert box.

To add a close button add the `close` prop with a callback. The kitid as well as the event will be passed to the callback alllowing for things such as animations.

By default Alert components are set to display none. Add the `show` to make the component visible.

### Code

```
const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(element, { opacity: [1, 0.5], translateX: [0, -300] }, {display: 'block'});
};
handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(element, { opacity: [0, 1], translateX: [-300, 0] },  {display: 'block'});
};

  ...
  <div>
    <Button body='Open Alert' onClick={(e, kitid) => handleAlertOpen(e, 'alert1')} />
    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>{loremIpsumString}</Alert>
  </div>
```

## Alert contexts

To change the context of an alert add `context='success'`, `context='warning'`, or `context='danger'` prop.

### Code

```

  <div>
    <Alert show context='success'>To indicate success or a positive message add the <code>context='success'</code> prop.</Alert>
    <Alert show context='warning'>To indicate a message containing a warning add the <code>context='warning'</code> prop.</Alert>
    <Alert show context='danger'>To indicate an important message add the <code>context='danger'</code> prop.</Alert>
  </div>
```

## Alert size

To increase the spacing in an alert add the `large` prop to the alert component.

### Code

```
<Alert show large>
  <h1>Important notice</h1>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Alert>
```

## Alert Props

See Base for additional utility props.

| Prop | Type |
| --- | --- |
| close | func |
| context | oneOf: 'success' | 'warning' | 'danger' |
| large | bool |
| show | bool |

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