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
    import FormReduxInput from 'react-uikit-form/lib/form-redux-input';

    // ES5
    var Form = require('react-uikit-form').default;
    var FormInput = require('react-uikit-form/lib/form-input').default;
    var FormReduxInput = require('react-uikit-form/lib/form-redux-input').default;


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

### Redux Form expamle
```
const AuthForm = (props) => {
  const {
    heading,
    onSubmit,
  } = props;

  return <Form
    title={heading}
    layout='stacked'
    onSubmit={onSubmit}
  >
    <Field
      name="username"
      component={FormReduxInput}
      label='Username'
      type="text"
      help={{type: 'block'}}
    />
    <Field
      name="password"
      component={FormReduxInput}
      label='password'
      type="password"
      help={{type: 'block'}}
    />
    <Button type='submit' context='primary' margin='right top'>
      Submit
    </Button>
  </Form>;
};

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
