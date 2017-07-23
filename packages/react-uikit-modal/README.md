# React Uikit Modal



## Usage

    npm install react-uikit-modal --save;

    // ES6
    import Modal from 'react-uikit-modal';

    // ES5
    var Modal = require('react-uikit-modal');




### Code

      <Modal close show={this.state.show} trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <h2>Headline</h2>
        <p>{loremIpsumString}</p>
      </Modal>

## Modal trigger



## Modal close

<span>The `close` prop when present shows a close button. When clicked it will trigger the triggers animate out callback.</span>

## Modal header and footer

<span>To add a header or a footer add the `header` or `footer` props respectively. Any kind of prop type can be used for the header or footer.</span>


### Code

      <Modal show={this.state.show} header='Modal with header and footer' footer={<Button body='Save' />} close trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>

## Modal caption

<span>A caption can be displayed below the modal by passing a string to the `caption` prop.</span>


### Code

      <Modal show={show} caption='This is a caption' close trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <h2>Modal with caption</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>

## Modal lightbox

<span>The Modal component can be used as a lightbox by adding the `lightbox` prop. Useful for images and videos.</span>


### Code

      <Modal show={this.state.show} lightbox close trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <img src='docs/images/placeholder_600x400.svg' alt='Image place holder' width="100%" height="400"/>
      </Modal>

## Modal blank

<span>The styling of the Modal can be reset, e.g removing the padding and margin by adding the `blank` prop. This has the effect of creating a full screen modal.</span>


### Code

      <Modal show={this.state.show} blank close trigger={{ body: 'Open', animate: {
      in: this.blankAnimateIn,
      out: this.blankAnimateOut
    } }}>
        <h2>Blank modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>

## Modal types

<span>The Modal component can be set to `block`, `alert`, or `prompt`</span>

<table class="uk-table"><caption>Modal types</caption>

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">block</td>

<td>Default type, which dispalys an empty modal</td>

</tr>

<tr>

<td colspan="1">alert</td>

<td>Displays an alert style modal with an OK button</td>

</tr>

<tr>

<td colspan="1">prompt</td>

<td>Dispalys a prompt style modal with a text input, cancel and OK buttons</td>

</tr>

<tr>

<td colspan="1">confirm</td>

<td>Dispalys a modal with cancel and OK buttons. When OK is clicked a confirm style modal is displayed with a cancel and OK buttton</td>

</tr>

</tbody>

</table>

## Modal buttons



## Block



### Code

      <Modal show={this.state.show} ok={{context: 'primary'}} type='alert' trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <p>This is a block modal.</p>
      </Modal>

## Alert



### Code

      <Modal show={this.state.show} type='alert' ok={{context: 'primary'}} trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <p>This is an alert modal.</p>
      </Modal>

## Prompt



### Code

      <Modal show={this.state.show} type='prompt' ok={{context: 'primary', onClick: this.handleOkClick}} trigger={{ body: 'Open', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
        <p>This is an prompt modal</p>
      </Modal>

## Confirm



### Code

      handleOkClick (e) {
        alert('prompt value: ' + e.item.value);
      }

      animateIn (modal, dialog) {
        this.setState({show: true});

        velocity(modal, {opacity: 1}, {display: 'block'}, 300);
        velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
      }

      animateOut (modal, dialog) {
        this.setState({show: false});

        this.setState({confirm: false});
        velocity(modal, {opacity:0}, { display: 'none' }, 300);
        velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
      }

      comfirmAnimateIn (modal, dialog) {
        this.setState({confirm: true});

        velocity(modal, {opacity: 1}, {display: 'block'}, 300);
        velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
      }

      comfirmAnimateOut (modal, dialog) {
        this.setState({show: false});
        this.setState({confirm: false});

        velocity(modal, {opacity:0}, { display: 'none' }, 300);
        velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
      }

      handleConfirmClick (e) {
        alert('modal confirmed');
        setTimeout(() =>  this.setState({confirm: false}), 500);
      }
      const confirm = {
        context: 'danger',
        show: confirm,
        dialog: (<p>This is an comfirm modal</p>),
        body: 'Confirm',
        onClick: this.handleConfirmClick,
        animate: { in: this.comfirmAnimateIn, out: this.animateOut }
      };
      ...
      <Modal show={this.state.show} type='confirm' confirm={confirm} ok={{context: 'primary', onClick: handleConfirmOkClick}} trigger={{body: 'Open', animate: animate: {
      in: this.animateIn,
      out: this.animateOut
    }}}>
        <p>Are you sure?</p>
      </Modal>

## Modal large

<span>To fit the modal to the width of the site container add the `large` props.</span>


### Code

      <Modal show={this.state.show} large close trigger={{ body: 'Open', animate: {
      in: this.blankAnimateIn,
      out: this.blankAnimateOut
    } }}>
        <h2>Large modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>

## Modal Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="2">blank</td>

<td>bool</td>

</tr>

<tr>

<td colspan="2">cancel</td>

<td>object</td>

</tr>

<tr>

<td colspan="2">close</td>

<td>bool</td>

</tr>

<tr>

<td colspan="2">confirm</td>

<td>object</td>

</tr>

<tr>

<td colspan="2">dialog</td>

<td>object</td>

</tr>

<tr>

<td colspan="2">footer</td>

<td>any</td>

</tr>

<tr>

<td colspan="2">header</td>

<td>any</td>

</tr>

<tr>

<td colspan="2">lightbox</td>

<td>bool</td>

</tr>

<tr>

<td colspan="2">ok</td>

<td>object</td>

</tr>

<tr>

<td colspan="2">large</td>

<td>bool</td>

</tr>

<tr>

<td colspan="2">show</td>

<td>bool</td>

</tr>

<tr>

<td colspan="2">trigger</td>

<td>object</td>

</tr>

<tr>

<td colspan="2">type</td>

<td>oneOf block, alert, prompt</td>

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