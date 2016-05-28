'use strict';

import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';


class FormDoc extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showPassword: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordClick = this.handlePasswordClick.bind(this);
  }

  handleChange (e) {

  }


  handlePasswordClick (e) {
    this.setState({ showPassword: !this.state.showPassword });
  }


  render () {
    return <div>
      <section>
        <h1>Form</h1>
        <p>Documentation coming soon.</p>

        <p>
          Full compatible with <a href='http://redux-form.com'>Redux Form</a>.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-form'>react-uikit-form</a> on github.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
  {`npm install react-uikit-form --save;

  // ES6
  import Form from 'react-uikit-form';
  import FormInput from 'react-uikit-form-input';

  // ES5
  var Form = require('react-uikit-form').default
  var FormInput = require('react-uikit-form').default`}
        </Codeblock>

        <hr className="uk-article-divider" />
      <p>

      </p>


        <h3 className='example'>Example</h3>
        <Form>
          <FormInput
            placeholder='Text Input'
            margin='right bottom'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            placeholder='Passowrd Input'
            Password
            margin='right bottom'
            onChange={this.handleChange}
          />
          <FormInput
            disabled
            placeholder='Disabled'
            onChange={this.handleChange}
            margin='right bottom'
            />
          <FormInput
            type='checkbox'
            label='Checkbox'
            display='inlineBlock'
            margin='right'
            onChange={this.handleChange}
          />
          <FormInput
            type='radio'
            label='Radio'
            name='radio'
            display='inlineBlock'
            margin='right'
            onChange={this.handleChange}
          />
          <FormInput
            type='select'
            button={{ body: 'Option 1', type: 'button' }}
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />
        </Form>

        <Codeblock scroll='text'>
{`<Form>
  <FormInput
    placeholder='Text Input'
    margin='right bottom'
    onChange={this.handleChange}
  />
  <FormInput
    type='password'
    placeholder='Passowrd Input'
    Password
    margin='right bottom'
    onChange={this.handleChange}
  />
  <FormInput
    disabled
    placeholder='Disabled'
    onChange={this.handleChange}
    margin='right bottom'
    />
  <FormInput
    type='checkbox'
    label='Checkbox'
    display='inlineBlock'
    margin='right'
    onChange={this.handleChange}
  />
  <FormInput
    type='radio'
    label='Radio'
    name='radio'
    display='inlineBlock'
    margin='right'
    onChange={this.handleChange}
  />
  <FormInput
    type='select'
    button={{ body: 'Option 1', type: 'button' }}
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Stacked Form</h2>
        <Form layout="stacked">
          <FormInput
            label='Text Input'
            placeholder='Text Input'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            label='Password Input'
            placeholder='Passowrd Input'
            Password
            onChange={this.handleChange}
          />
          <FormInput
            disabled
            label='Disabled Input'
            placeholder='Disabled'
            onChange={this.handleChange}
            />
          <FormInput
            type='checkbox'
            label='Checkbox'
            display='inlineBlock'
            onChange={this.handleChange}
          />

          <div>
            <FormInput
              type='radio'
              label='Radio 1'
              name='radio'
              display='inlineBlock'
              margin='right'
              onChange={this.handleChange}
            />
            <FormInput
              type='radio'
              label='Radio 2'
              name='radio'
              display='inlineBlock'
              margin='right'
              onChange={this.handleChange}
            />
            <FormInput
              type='radio'
              label='Radio 3'
              name='radio'
              display='inlineBlock'
              onChange={this.handleChange}
            />
          </div>

          <FormInput
            type='select'
            label='Select'
            button={{ body: 'Option 1', type: 'button' }}
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />
        </Form>

        <Codeblock scroll='text'>
{`<Form layout="stacked">
  <FormInput
    label='Text Input'
    placeholder='Text Input'
    onChange={this.handleChange}
  />
  <FormInput
    type='password'
    label='Password Input'
    placeholder='Passowrd Input'
    Password
    onChange={this.handleChange}
  />
  <FormInput
    disabled
    label='Disabled Input'
    placeholder='Disabled'
    onChange={this.handleChange}
    />
  <FormInput
    type='checkbox'
    label='Checkbox'
    display='inlineBlock'
    onChange={this.handleChange}
  />

  <div>
    <FormInput
      type='radio'
      label='1'
      name='radio'
      display='inlineBlock'
      margin='right'
      onChange={this.handleChange}
    />
    <FormInput
      type='radio'
      label='2'
      name='radio'
      display='inlineBlock'
      margin='right'
      onChange={this.handleChange}
    />
    <FormInput
      type='radio'
      label='3'
      name='radio'
      display='inlineBlock'
      onChange={this.handleChange}
    />
  </div>

  <FormInput
    type='select'
    label='Select'
    button={{ body: 'Option 1', type: 'button' }}
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Horizontal Form</h2>
        <Form layout="horizontal">
          <FormInput
            label='Text Input'
            placeholder='Text Input'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            label='Password Input'
            placeholder='Passowrd Input'
            Password
            onChange={this.handleChange}
          />
          <FormInput
            disabled
            label='Disabled Input'
            placeholder='Disabled'
            onChange={this.handleChange}
            />
          <FormInput
            type='checkbox'
            label='Checkbox'
            onChange={this.handleChange}
          />

          <FormInput
            type='radio'
            label='Radio 1'
            name='radio'
            onChange={this.handleChange}
          />
          <FormInput
            type='radio'
            label='Radio 2'
            name='radio'
            onChange={this.handleChange}
          />
          <FormInput
            type='radio'
            label='Radio 3'
            name='radio'
            onChange={this.handleChange}
          />

          <FormInput
            type='select'
            label='Select'
            button={{ body: 'Option 1', type: 'button' }}
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />
        </Form>

        <Codeblock scroll='text'>
{`<Form layout="horizontal">
  <FormInput
    label='Text Input'
    placeholder='Text Input'
    onChange={this.handleChange}
  />
  <FormInput
    type='password'
    label='Password Input'
    placeholder='Passowrd Input'
    Password
    onChange={this.handleChange}
  />
  <FormInput
    disabled
    label='Disabled Input'
    placeholder='Disabled'
    onChange={this.handleChange}
    />
  <FormInput
    type='checkbox'
    label='Checkbox'
    onChange={this.handleChange}
  />

  <FormInput
    type='radio'
    label='Radio 1'
    name='radio'
    onChange={this.handleChange}
  />
  <FormInput
    type='radio'
    label='Radio 2'
    name='radio'
    onChange={this.handleChange}
  />
  <FormInput
    type='radio'
    label='Radio 3'
    name='radio'
    onChange={this.handleChange}
  />

  <FormInput
    type='select'
    label='Select'
    button={{ body: 'Option 1', type: 'button' }}
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />
</Form>
`}
        </Codeblock>
      </section>

      <section>
        <h2>Form input Context</h2>
        <Form>
          <FormInput
            placeholder='default'
            row onChange={this.handleChange} />
          <FormInput
            context='danger'
            placeholder='danger'
            row onChange={this.handleChange}
          />
          <FormInput
            context='success'
            placeholder='success'
            row onChange={this.handleChange}
          />
        </Form>

        <Codeblock>
{` <Form>
    <FormInput
      placeholder='default'
      row onChange={this.handleChange} />
    <FormInput
      context='danger'
      placeholder='danger'
      row onChange={this.handleChange}
    />
    <FormInput
      context='success'
      placeholder='success'
      row onChange={this.handleChange}
    />
  </Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form input size</h2>
        <Form>
          <FormInput
            size='large'
            placeholder='large'
            row
            onChange={this.handleChange}
          />
          <FormInput
            size='small'
            placeholder='small'
            row
            onChange={this.handleChange}
          />
        </Form>

        <Codeblock>
{`<Form>
  <FormInput
    size='large'
    placeholder='large'
    row
    onChange={this.handleChange}
  />
  <FormInput
    size='small'
    placeholder='small'
    row
    onChange={this.handleChange}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form input width</h2>
        <Form>
          <FormInput
            width='large'
            placeholder='large'
            row
            onChange={this.handleChange}
          />
          <FormInput
            width='medium'
            placeholder='medium'
            row
            onChange={this.handleChange}
          />
          <FormInput
            width='small'
            placeholder='small'
            row
            onChange={this.handleChange}
          />
          <FormInput
            width='mini'
            placeholder='mini'
            row
            onChange={this.handleChange}
          />
        </Form>

        <Codeblock scroll='text'>
{`<Form>
  <FormInput
    width='large'
    placeholder='large'
    row
    onChange={this.handleChange}
  />
  <FormInput
    width='medium'
    placeholder='medium'
    row
    onChange={this.handleChange}
  />
  <FormInput
    width='small'
    placeholder='small'
    row
    onChange={this.handleChange}
  />
  <FormInput
    width='mini'
    placeholder='mini'
    row
    onChange={this.handleChange}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form input blank</h2>
        <Form>
          <FormInput
            blank
            placeholder='blank input'
            onChange={this.handleChange}
          />
        </Form>

        <Codeblock>
{`<Form>
  <FormInput
    blank
    placeholder='blank input'
    onChange={this.handleChange}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form icon</h2>

        <p>Displays an icon to the left of the input.</p>

        <Form>
          <FormInput
            icon='calendar'
            type='date'
          />
        </Form>

        <Codeblock>
{`<FormInput
  icon='calendar'
  type='date'
/>`}
        </Codeblock>
      </section>


      <section>
        <h2>Form input help</h2>
        <Form>
          <FormInput
            help={{
              type: 'block',
              text: 'This is block help text'
            }}
            onChange={this.handleChange}
          />
          <FormInput
            help={{
              type: 'inline',
              text: 'This is inline help text'
            }}
            onChange={this.handleChange}
          />
        </Form>

        <Codeblock>
{`  <Form>
    <FormInput
      help={{
        type: 'block',
        text: 'This is block help text'
      }}
      onChange={this.handleChange}
    />
    <FormInput
      help={{
        type: 'inline',
        text: 'This is inline help text'
      }}
      onChange={this.handleChange}
    />
  </Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form select</h2>
        <Form>
          <FormInput
            row
            button={{ body: 'Button' }}
            type='select'
            icon='caret-down'
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />
          <FormInput
            row
            button={{ body: 'Button', type: 'button' }}
            type='select'
            icon='caret-down'
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />

          <FormInput
            row
            button={{ body: 'Link', type: 'link' }}
            type='select'
            icon='caret-down'
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />

          <FormInput
            row
            button={{ body: 'Text', type: 'span' }}
            type='select'
            icon='caret-down'
            options={[
              { value: 1, body: 'Option 1' },
              { value: 2, body: 'Option 2' },
              { value: 3, body: 'Option 3' }
            ]}
          />
        </Form>

        <Codeblock scroll='text'>
{`<Form>
  <FormInput
    row
    button={{ body: 'Button' }}
    type='select'
    icon='caret-down'
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />
  <FormInput
    row
    button={{ body: 'Button', type: 'button' }}
    type='select'
    icon='caret-down'
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />

  <FormInput
    row
    button={{ body: 'Link', type: 'link' }}
    type='select'
    icon='caret-down'
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />

  <FormInput
    row
    button={{ body: 'Text', type: 'span' }}
    type='select'
    icon='caret-down'
    options={[
      { value: 1, body: 'Option 1' },
      { value: 2, body: 'Option 2' },
      { value: 3, body: 'Option 3' }
    ]}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form file</h2>
        <Form>
          <FormInput
            row
            type='file'
            button={{ body: 'Default file' }}
          />
          <FormInput
            row
            type='file'
            button={{ body: 'Button file', type: 'button' }}
          />
          <FormInput
            row
            type='file'
            button={{ body: 'Link file', type: 'link' }}
          />
          <FormInput
            row
            type='file'
            button={{ body: 'Text file', type: 'span' }}
          />
        </Form>

        <Codeblock scroll='text'>
{`<Form>
  <FormInput
    row
    type='file'
    button={{ body: 'Default file' }}
  />
  <FormInput
    row
    type='file'
    button={{ body: 'Button file', type: 'button' }}
  />
  <FormInput
    row
    type='file'
    button={{ body: 'Link file', type: 'link' }}
  />
  <FormInput
    row
    type='file'
    button={{ body: 'Text file', type: 'span' }}
  />
</Form>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form password</h2>

        <p>
        Toggles input betwen password and text.
        </p>

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

        <Codeblock>
{`<Form>
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
`}
        </Codeblock>
      </section>


      <section>
        <h2>Form items</h2>
        <Form
          layout='horizontal'
          items={[
            { kitid: 'input1', label: 'Text', placeholder: 'Text Input', onChange: this.handleChange },
            { kitid: 'input2', label: 'Checkbox', type: 'checkbox', onChange: this.handleChange },
            { kitid: 'input3', label: 'Radio', type: 'radio', name: 'radio', onChange: this.handleChange },
            { kitid: 'input4', label: 'File', type: 'file', button: { body: 'Default file' } },
            { kitid: 'input5', label: 'Select', type: 'select', button: { body: 'Option 1', type: 'button' },
              options: [
                { value: 1, body: 'Option 1' },
                { value: 2, body: 'Option 2' },
                { value: 3, body: 'Option 3' }
              ]
            },
            { kitid: 'input6', label: 'Toggle password', type: 'passwordToggle', placeholder: 'Password input',
              onChange: this.handleChange,
              toggle: {
                icon   : this.state.showPassword ? 'eye' : 'eye-slash',
                onClick: this.handlePasswordClick,
                type   : this.state.showPassword ? 'text' : 'password'
              }
            },
            { kitid: 'input7', label: 'Date', type: 'date', icon: 'calendar', onChange: this.handleChange }
          ]}
        />


        <Codeblock scroll='text'>
{`<Form
  layout='horizontal'
  items={[
    { kitid: 'input1', label: 'Text', placeholder: 'Text Input', onChange: this.handleChange },
    { kitid: 'input2', label: 'Checkbox', type: 'checkbox', onChange: this.handleChange },
    { kitid: 'input3', label: 'Radio', type: 'radio', name: 'radio', onChange: this.handleChange },
    { kitid: 'input4', label: 'File', type: 'file', button: { body: 'Default file' } },
    { kitid: 'input5', label: 'Select', type: 'select', button: { body: 'Option 1', type: 'button' },
      options: [
        { value: 1, body: 'Option 1' },
        { value: 2, body: 'Option 2' },
        { value: 3, body: 'Option 3' }
      ]
    },
    { kitid: 'input6', label: 'Toggle password', type: 'passwordToggle', placeholder: 'Password input',
      onChange: this.handleChange,
      toggle: {
        icon   : this.state.showPassword ? 'eye' : 'eye-slash',
        onClick: this.handlePasswordClick,
        type   : this.state.showPassword ? 'text' : 'password'
      }
    },
    { kitid: 'input7', label: 'Date', type: 'date', icon: 'calendar', onChange: this.handleChange }
  ]}
/>
`}
      </Codeblock>
    </section>

    <section>
      <h2>Redux Form</h2>

      <h3 className='code'>Code</h3>
      <Codeblock scroll='text'>
{`const AuthForm = (props) => {
  const {
    fields: { username, password },
    onSubmit
  } = props;

  return <Form layout='stacked' onSubmit={onSubmit}>
    <FormInput
      label='Username'
      {...username}
      context={ username.invalid ? 'danger' :  null}
      help={
        username.invalid && username.touched
        ? { type: 'block', text: username.error, context: 'danger' }
        :  null
      }
    />

    <FormInput
      label='Password'
      type='password'
      {...password}
      context={ password.invalid ? 'danger' :  null}
      help={
        password.invalid && password.touched
        ? { type: 'block', text: password.error, context: 'danger' }
        :  null
      }
    />

    <button type='submit' className='uk-button uk-button-primary'>Sign in</button>

    <a href={ROOT_ROUTE} className='uk-button uk-button-danger'>Cancel</a>
  </Form>;
};
`}
      </Codeblock>
    </section>

    <section>
      <h2>Form Props</h2>
      <p>
        See Base for additional utility props.
      </p>
    </section>

    </div>;
  }
}


export default FormDoc;
