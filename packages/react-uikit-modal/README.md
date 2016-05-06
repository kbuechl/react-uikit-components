#React UIkit Modal

Displays dialogs prompts.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.

##Usage
The master branch has been updated to React 15. To use with React 0.14 checkout 0.14 branch.

UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installations
    npm install react-uikit-modal --save;

    // ES6  
    import Modal from 'react-uikit-modal';  

    // ES5  
    var Modal = require('react-uikit-modal').default;  


###Example
    class MyComponent extends React.Component {
      constructor (props) {
        super(props);

        this.state = {
          show: false
        };
      }

      animateIn (modal, dialog) {
        this.setState({show: true});
        velocity(modal, {opacity: 1}, {display: 'block'}, 300);
        velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
      }

      animateOut (modal, dialog) {
        this.setState({show: false});
        velocity(modal, {opacity:0}, { display: 'none' }, 300);
        velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
      }

      render() {
        <Modal
          close
          show={this.state.show}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
        >
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Modal>
      }
    }

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
