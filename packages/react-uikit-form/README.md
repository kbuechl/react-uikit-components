#React UIkit Form

Easily create forms.

See [http://otissv.github.io/react-uikit-components/](http://otissv.github.io/react-uikit-components) for docs.


##Usage
UIkit css is not included. You can get it from [getuikit.com](http://getuikit.com/)


###Installation

    npm install react-uikit-form --save;

    // ES6
    import Form from 'react-uikit-form';
    import FormInput from 'react-uikit-form/lib/form-input';

    // ES5
    var Form = require('react-uikit-form').default;
    var FormInput = require('react-uikit-form/lib/form-input').default;


### Example 1
```
<Form>
  <FormInput placeholder='Text Input' margin='right' onChange={this.handleChange} />

  <FormInput type='checkbox' label='Checkbox ' display='inlineBlock' margin='right' onChange={this.handleChange} />

  <FormInput type='radio' label={{ pos: 'right', body: ' 1' }} name='radio' display='inlineBlock' onChange={this.handleChange} />

  <FormInput label='Select' button={{ body: 'Option 1', type: 'button' }} type='select'
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />

  <FormInput row type='file' button={{ body: 'Default file' }} />

  <FormInput
    type='passwordToggle'
    toggle={{
      body   : this.state.showPassword ? 'Hide' : 'Show',
      icon   : this.state.showPassword ? 'eye' : 'eye-slash',
      onClick: this.handlePasswordClick,
      type   : this.state.showPassword ? 'text' : 'password'
    }}
    placeholder='Password input'
    onChange={this.handleChange}
  />
</Form>
```

### Example 2
```
<Form layout='stacked' items={[
  { kitid: 'input1', label: 'Text', placeholder: 'Text Input', margin: 'right', onChange: this.handleChange },
  { kitid: 'input2', label: 'Checkbox', type: 'checkbox', display: 'inlineBlock', margin: 'right', onChange: this.handleChange },
  { kitid: 'input3', label: 'Radio', type: 'radio', name: 'radio', display: 'inlineBlock', onChange: this.handleChange },
  { kitid: 'input4', type: 'file', button: { body: 'Default file' } },
  { kitid: 'input5', label: 'Select', button: { body: 'Option 1', type: 'button' }, type: 'select',
    options: [
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]
  },
  {
    kitid: 'input5',
    type: 'passwordToggle',
    placeholder: 'Password input',
    onChange: this.handleChange,
    toggle: {
      body   : this.state.showPassword ? 'Hide' : 'Show',
      icon   : this.state.showPassword ? 'eye' : 'eye-slash',
      onClick: this.handlePasswordClick,
      type   : this.state.showPassword ? 'text' : 'password'
    }
  }
]}/>
```
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
