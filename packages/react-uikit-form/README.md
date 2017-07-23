# React Uikit Form



## Usage

    npm install react-uikit-form --save;

    // ES6
    import Form from 'react-uikit-form';

    // ES5
    var Form = require('react-uikit-form');

## Example



### Code

    <Form title='Form title'>
      <FormInput placeholder='Text Input' margin='right bottom' onChange={this.handleChange} />
      <FormInput type='password' placeholder='Passowrd Input' Password margin='right bottom' onChange={this.handleChange} />
      <FormInput disabled placeholder='Disabled' onChange={this.handleChange} margin='right bottom' />
      <FormInput type='checkbox' label='Checkbox' display='inlineBlock' margin='right' onChange={this.handleChange} />
      <FormInput type='radio' label='Radio' name='radio' display='inlineBlock' margin='right' onChange={this.handleChange} />
      <FormInput type='select' button={{ body: 'Option 1', type: 'button' }} options={[{"value":1,"body":"Option 1"},{"value":2,"body":"Option 2"},{"value":3,"body":"Option 3"}]} />
    </Form>

## Stacked Form



### Code

    <Form layout='stacked'>
      <FormInput label='Text Input' placeholder='Text Input' onChange={noop} />
      <FormInput type='password' label='Password Input' placeholder='Passowrd Input' Password onChange={noop} />
      <FormInput disabled label='Disabled Input' placeholder='Disabled' onChange={noop} />
      <FormInput type='checkbox' label='Checkbox' display='inlineBlock' onChange={noop} />
      <div>
        <FormInput type='radio' label='Radio 1' name='radio' display='inlineBlock' margin='right' onChange={noop} />
        <FormInput type='radio' label='Radio 2' name='radio' display='inlineBlock' margin='right' onChange={noop} />
        <FormInput type='radio' label='Radio 3' name='radio' display='inlineBlock' onChange={noop} />
      </div>
      <FormInput type='select' label='Select' button={{ body: 'Option 1', type: 'button' }} options={[{"value":1,"body":"Option 1"},{"value":2,"body":"Option 2"},{"value":3,"body":"Option 3"}]} />
    </Form>

## Horizontal Form



### Code

    <Form layout='horizontal'>
      <FormInput label='Text Input' placeholder='Text Input' onChange={noop} />
      <FormInput type='password' label='Password Input' placeholder='Passowrd Input' Password onChange={noop} />
      <FormInput disabled label='Disabled Input' placeholder='Disabled' onChange={noop} />
      <FormInput type='checkbox' label='Checkbox' display='inlineBlock' onChange={noop} />
      <div>
        <FormInput type='radio' label='Radio 1' name='radio' display='inlineBlock' margin='right' onChange={noop} />
        <FormInput type='radio' label='Radio 2' name='radio' display='inlineBlock' margin='right' onChange={noop} />
        <FormInput type='radio' label='Radio 3' name='radio' display='inlineBlock' onChange={noop} />
      </div>
      <FormInput type='select' label='Select' button={{ body: 'Option 1', type: 'button' }} options={[{"value":1,"body":"Option 1"},{"value":2,"body":"Option 2"},{"value":3,"body":"Option 3"}]} />
    </Form>

## Form input Context



### Code

    <Form>
      <FormInput placeholder='default' row onChange={noop} />
      <FormInput context='danger' placeholder='danger' row onChange={this.handleChange} />
      <FormInput context='success' placeholder='success' row onChange={this.handleChange} />
    </Form>

## Form input size



### Code

    <Form>
      <FormInput size='large' placeholder='large' row onChange={this.handleChange} />
      <FormInput size='small' placeholder='small' row onChange={this.handleChange} />
    </Form>

## Form input width



### Code

    <Form>
      <FormInput width='large' placeholder='large' row onChange={this.handleChange} />
      <FormInput width='medium' placeholder='medium' row onChange={this.handleChange} />
      <FormInput width='small' placeholder='small' row onChange={this.handleChange} />
      <FormInput width='mini' placeholder='mini' row onChange={this.handleChange} />
    </Form>

## Form input blank



### Code

    <Form>
      <FormInput blank placeholder='blank input' onChange={noop} />
    </Form>

## Form icon



### Code

    <Form>
      <FormInput icon='calendar' type='date' />
    </Form>

## Form icon help



### Code

    <Form>
      <FormInput help={{ type: 'block', text: 'This is block help text' }} onChange={this.handleChange} />
      <FormInput help={{ type: 'inline', text: 'This is inline help text' }} onChange={this.handleChange} />
    </Form>

## Form select



### Code

    <Form>
      <FormInput row button={{ body: 'Button' }} type='select' icon='caret-down' options={options} />
      <FormInput row button={{ body: 'Button', type: 'button' }} type='select' icon='caret-down' options={options} />
      <FormInput row button={{ body: 'Link', type: 'link' }} type='select' icon='caret-down' options={options} />
      <FormInput row button={{ body: 'Text', type: 'span' }} type='select' icon='caret-down' options={options} />
    </Form>

## Form File



### Code

    <Form>
      <FormInput row type='file' button={{ body: 'Default file' }} />
      <FormInput row type='file' button={{ body: 'Button file', type: 'button' }} />
      <FormInput row type='file' button={{ body: 'Link file', type: 'link' }} />
      <FormInput row type='file' button={{ body: 'Text file', type: 'span' }} />
    </Form>

## Form Password



### Code

    <Form>
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

## Form Items



### Code

    <Form
      layout='horizontal'
      items={[
        { kitid: 'input1', label: 'Text', placeholder: 'Text Input', onChange: noop },
        { kitid: 'input2', label: 'Checkbox', type: 'checkbox', onChange: noop },
        { kitid: 'input3', label: 'Radio', type: 'radio', name: 'radio', onChange: noop },
        { kitid: 'input4', label: 'File', type: 'file', button: { body: 'Default file' } },
        { kitid: 'input5', label: 'Select', type: 'select', button: { body: 'Option 1', type: 'button' }, options: options },
        { kitid: 'input6', label: 'Date', type: 'date', icon: 'calendar', onChange: noop }
      ]}
    />

## Redux Form V6

Form inputs support <a href='http://redux-form.com/'>Redux Form</a> with the FormReduxInput located in the 'react-uikit-form/lib/form-redux-input' directory.

### Code

    const AuthForm = ({ heading, onSubmit }) => (
      <Form title={heading} layout='stacked' onSubmit={onSubmit} >
        <Field name="username" component={FormReduxInput} label='Username' type="text" help={{type: 'block'}} />
        <Field name="password" component={FormReduxInput} label='password' type="password" help={{type: 'block'}} />
        <Button type='submit' context='primary' margin='right top'>Submit</Button>
      </Form>);
    );



## Redux Form V5

### Code

    const AuthForm = ({ fields: { username, password }, heading, onSubmit }) => (
      <Form title={heading} layout='stacked' onSubmit={onSubmit}
        items={[
          {
            ...username,
            kitid: 'username',
            label: 'Username',
            context: username.invalid && username.touched ? 'danger' :  null,
            help={
              password.invalid && password.touched
              ? { type: 'block', text: password.error, context: 'danger' }
              :  null
            }
          },
          {
            ...password,
            kitid: 'label',
            label: 'password',
            context: password.invalid && password.touched ? 'danger' :  null,
            help: {
              password.invalid && password.touched
              ? { type: 'block', text: password.error, context: 'danger' }
              :  null
            }
          }
        ]}
      >
        <button type='submit' className='uk-button uk-button-primary uk-margin-right uk-margin-top'>Sign in</button>
        <a href={ROOT_ROUTE} className='uk-button uk-button-danger uk-margin-top'>Cancel</a>
      </Form>;
    );

## Form Props



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