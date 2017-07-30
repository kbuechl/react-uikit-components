import React, { Component, PropTypes } from 'react';
import Note from 'react-uikit-note';

import Form from '../lib/form';
import FormInput from '../lib/form-input';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Form';
const npmName = 'react-uikit-form';
const summary = 'Compatible with <a href="http://redux-form.com">Redux Form</a> v5 and v6.';

const noop = () => {};
// Snippet from the example text...
// // ES6
// import Form from 'react-uikit-form';
// import FormInput from 'react-uikit-form/lib/form-input';
// import FormReduxInput from 'react-uikit-form/lib/form-redux-input';
//
// // ES5
// var Form = require('react-uikit-form').default
// var FormInput = require('react-uikit-form/lib/form-input').default
// var FormReduxInput = require('react-uikit-form/lib/formr-redux-input').default

const options = [{ value: 1, body: 'Option 1' }, { value: 2, body: 'Option 2' }, { value: 3, body: 'Option 3' }];

const basicJsx = (
  <Form title='Form title'>
    <FormInput placeholder='Text Input' margin='right bottom' onChange={noop} />
    <FormInput type='password' placeholder='Passowrd Input' Password margin='right bottom' onChange={noop} />
    <FormInput disabled placeholder='Disabled' onChange={noop} margin='right bottom' />
    <FormInput type='checkbox' label='Checkbox' display='inlineBlock' margin='right' onChange={noop} />
    <FormInput type='radio' label='Radio' name='radio' display='inlineBlock' margin='right' onChange={noop} />
    <FormInput type='select' button={{ body: 'Option 1', type: 'button' }} options={options} />
  </Form>
);
// check if opts stringifies nicely...
const basicSnippet = `
<Form title='Form title'>
  <FormInput placeholder='Text Input' margin='right bottom' onChange={this.handleChange} />
  <FormInput type='password' placeholder='Passowrd Input' Password margin='right bottom' onChange={this.handleChange} />
  <FormInput disabled placeholder='Disabled' onChange={this.handleChange} margin='right bottom' />
  <FormInput type='checkbox' label='Checkbox' display='inlineBlock' margin='right' onChange={this.handleChange} />
  <FormInput type='radio' label='Radio' name='radio' display='inlineBlock' margin='right' onChange={this.handleChange} />
  <FormInput type='select' button={{ body: 'Option 1', type: 'button' }} options={${JSON.stringify(options)}} />
</Form>`;

const generateLayoutJsx = ({ layout }) => (
  <Form layout={layout}>
    <FormInput label='Text Input' placeholder='Text Input' onChange={noop} />
    <FormInput type='password' label='Password Input' placeholder='Passowrd Input' Password onChange={noop} />
    <FormInput disabled label='Disabled Input' placeholder='Disabled' onChange={noop} />
    <FormInput type='checkbox' label='Checkbox' display='inlineBlock' onChange={noop} />
    <div>
      <FormInput type='radio' label='Radio 1' name='radio' display='inlineBlock' margin='right' onChange={noop} />
      <FormInput type='radio' label='Radio 2' name='radio' display='inlineBlock' margin='right' onChange={noop} />
      <FormInput type='radio' label='Radio 3' name='radio' display='inlineBlock' onChange={noop} />
    </div>
    <FormInput type='select' label='Select' button={{ body: 'Option 1', type: 'button' }} options={options} />
  </Form>
);
generateLayoutJsx.propTypes = {
  layout: PropTypes.string,
};

const generateLayoutSnippet = ({ layout }) => `
<Form ${layout ? `layout='${layout}'` : "" }>
  <FormInput label='Text Input' placeholder='Text Input' onChange={noop} />
  <FormInput type='password' label='Password Input' placeholder='Passowrd Input' Password onChange={noop} />
  <FormInput disabled label='Disabled Input' placeholder='Disabled' onChange={noop} />
  <FormInput type='checkbox' label='Checkbox' display='inlineBlock' onChange={noop} />
  <div>
    <FormInput type='radio' label='Radio 1' name='radio' display='inlineBlock' margin='right' onChange={noop} />
    <FormInput type='radio' label='Radio 2' name='radio' display='inlineBlock' margin='right' onChange={noop} />
    <FormInput type='radio' label='Radio 3' name='radio' display='inlineBlock' onChange={noop} />
  </div>
  <FormInput type='select' label='Select' button={{ body: 'Option 1', type: 'button' }} options={${JSON.stringify(options)}} />
</Form>
`;

const formInputContextJsx = (
  <Form>
    <FormInput placeholder='default' row onChange={noop} />
    <FormInput context='danger' placeholder='danger' row onChange={noop} />
    <FormInput context='success' placeholder='success' row onChange={noop} />
  </Form>
);
const formInputContextSnippet = `
<Form>
  <FormInput placeholder='default' row onChange={noop} />
  <FormInput context='danger' placeholder='danger' row onChange={this.handleChange} />
  <FormInput context='success' placeholder='success' row onChange={this.handleChange} />
</Form>`;

const formInputSizeJsx = (
  <Form>
    <FormInput size='large' placeholder='large' row onChange={noop} />
    <FormInput size='small' placeholder='small' row onChange={noop} />
  </Form>
);

const formInputSizeSnippet = `
<Form>
  <FormInput size='large' placeholder='large' row onChange={this.handleChange} />
  <FormInput size='small' placeholder='small' row onChange={this.handleChange} />
</Form>`;

const formInputWidthJsx = (
  <Form>
    <FormInput width='large' placeholder='large' row onChange={noop} />
    <FormInput width='medium' placeholder='medium' row onChange={noop} />
    <FormInput width='small' placeholder='small' row onChange={noop} />
    <FormInput width='mini' placeholder='mini' row onChange={noop} />
  </Form>
);

const formInputWidthSnippet = `
<Form>
  <FormInput width='large' placeholder='large' row onChange={this.handleChange} />
  <FormInput width='medium' placeholder='medium' row onChange={this.handleChange} />
  <FormInput width='small' placeholder='small' row onChange={this.handleChange} />
  <FormInput width='mini' placeholder='mini' row onChange={this.handleChange} />
</Form>`;

const formSelectJsx = (
  <Form>
    <FormInput row button={{ body: 'Button' }} type='select' icon='caret-down' options={options} />
    <FormInput row button={{ body: 'Button', type: 'button' }} type='select' icon='caret-down' options={options} />
    <FormInput row button={{ body: 'Link', type: 'link' }} type='select' icon='caret-down' options={options} />
    <FormInput row button={{ body: 'Text', type: 'span' }} type='select' icon='caret-down' options={options} />
  </Form>
);

const formSelectSnippet = `
<Form>
  <FormInput row button={{ body: 'Button' }} type='select' icon='caret-down' options={options} />
  <FormInput row button={{ body: 'Button', type: 'button' }} type='select' icon='caret-down' options={options} />
  <FormInput row button={{ body: 'Link', type: 'link' }} type='select' icon='caret-down' options={options} />
  <FormInput row button={{ body: 'Text', type: 'span' }} type='select' icon='caret-down' options={options} />
</Form>`;

const formFileJsx = (
  <Form>
    <FormInput row type='file' button={{ body: 'Default file' }} />
    <FormInput row type='file' button={{ body: 'Button file', type: 'button' }} />
    <FormInput row type='file' button={{ body: 'Link file', type: 'link' }} />
    <FormInput row type='file' button={{ body: 'Text file', type: 'span' }} />
  </Form>
);

const formFileSnippet = `
<Form>
  <FormInput row type='file' button={{ body: 'Default file' }} />
  <FormInput row type='file' button={{ body: 'Button file', type: 'button' }} />
  <FormInput row type='file' button={{ body: 'Link file', type: 'link' }} />
  <FormInput row type='file' button={{ body: 'Text file', type: 'span' }} />
</Form>`;

class FormPasswordJSX extends Component {
  constructor(props) {
    super(props);
    this.state = {showPassword: false};
    this.handlePasswordClick = this.handlePasswordClick.bind(this);
  }

  handlePasswordClick(e) {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
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
    );
  }
}

const formPasswordSnippet = `
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
</Form>`;

// { kitid: 'input6', label: 'Toggle password', type: 'passwordToggle', placeholder: 'Password input',
//   onChange: this.handleChange,
//   toggle: {
//     icon   : this.state.showPassword ? 'eye' : 'eye-slash',
//     onClick: this.handlePasswordClick,
//     type   : this.state.showPassword ? 'text' : 'password'
//   }
// },

const formItemsJsx = (
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
);

const formItemsSnippet =
`<Form
  layout='horizontal'
  items={[
    { kitid: 'input1', label: 'Text', placeholder: 'Text Input', onChange: noop },
    { kitid: 'input2', label: 'Checkbox', type: 'checkbox', onChange: noop },
    { kitid: 'input3', label: 'Radio', type: 'radio', name: 'radio', onChange: noop },
    { kitid: 'input4', label: 'File', type: 'file', button: { body: 'Default file' } },
    { kitid: 'input5', label: 'Select', type: 'select', button: { body: 'Option 1', type: 'button' }, options: options },
    { kitid: 'input6', label: 'Date', type: 'date', icon: 'calendar', onChange: noop }
  ]}
/>`;

const reduxFormV6Snippet = `
const AuthForm = ({ heading, onSubmit }) => (
  <Form title={heading} layout='stacked' onSubmit={onSubmit} >
    <Field name="username" component={FormReduxInput} label='Username' type="text" help={{type: 'block'}} />
    <Field name="password" component={FormReduxInput} label='password' type="password" help={{type: 'block'}} />
    <Button type='submit' context='primary' margin='right top'>Submit</Button>
  </Form>);
);`;

const reduxFormV5Snippet = `
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
);`;

const stackedJsx = generateLayoutJsx({layout: 'stacked'});
const stackedSnippet = generateLayoutSnippet({layout: 'stacked'});
const horizontalJsx = generateLayoutJsx({layout: 'horizontal'});
const horizontalSnippet = generateLayoutSnippet({layout: 'horizontal'});

const FormDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Example"
      jsx={basicJsx}
      snippet={basicSnippet}
    />
    <DocExample
      name="Stacked Form"
      jsx={stackedJsx}
      snippet={stackedSnippet}
    />
    <DocExample
      name="Horizontal Form"
      jsx={horizontalJsx}
      snippet={horizontalSnippet}
    />
    <DocExample
      name="Form input Context"
      jsx={formInputContextJsx}
      snippet={formInputContextSnippet}
    />
    <DocExample
      name="Form input size"
      jsx={formInputSizeJsx}
      snippet={formInputSizeSnippet}
    />
    <DocExample
      name="Form input width"
      jsx={formInputWidthJsx}
      snippet={formInputWidthSnippet}
    />
    <DocExample
      name="Form input blank"
      jsx={<Form><FormInput blank placeholder='blank input' onChange={noop} /></Form>}
      snippet={`<Form>\n  <FormInput blank placeholder='blank input' onChange={noop} />\n</Form>`}
    />
    <DocExample
      name="Form icon"
      jsx={<Form><FormInput icon='calendar' type='date' /></Form>}
      snippet={`<Form>\n  <FormInput icon='calendar' type='date' />\n</Form>`}
    />
    <DocExample
      name="Form icon help"
      jsx={(<Form>
        <FormInput help={{ type: 'block', text: 'This is block help text' }} onChange={noop} />
        <FormInput help={{ type: 'inline', text: 'This is inline help text' }} onChange={noop} />
      </Form>)}
      snippet={`<Form>
  <FormInput help={{ type: 'block', text: 'This is block help text' }} onChange={this.handleChange} />
  <FormInput help={{ type: 'inline', text: 'This is inline help text' }} onChange={this.handleChange} />
</Form>`}
    />
    <DocExample
      name="Form select"
      jsx={formSelectJsx}
      snippet={formSelectSnippet}
    />
    <DocExample
      name="Form File"
      jsx={formFileJsx}
      snippet={formFileSnippet}
    />
    <DocExample
      name="Form Password"
      jsx={<FormPasswordJSX />}
      snippet={formPasswordSnippet}
    />
    <DocExample
      name="Form Items"
      jsx={formItemsJsx}
      snippet={formItemsSnippet}
    />
    <DocExample
      name="Redux Form V6"
      description="Form inputs support <a href='http://redux-form.com/'>Redux Form</a> with the FormReduxInput located in the 'react-uikit-form/lib/form-redux-input' directory."
      snippet={reduxFormV6Snippet}
      trailingNote={<Note>
          The Redux Form Fields api in v6 was completely rewitten and therefore has an
          entiely different implementation. For more details see <a href='http://redux-form.com'>Redux Form</a>
        </Note>
      }
    />
    <DocExample
      name="Redux Form V5"
      snippet={reduxFormV5Snippet}
    />
    <DocFooter { ...{ name }} />
  </div>
);

export default FormDoc;
