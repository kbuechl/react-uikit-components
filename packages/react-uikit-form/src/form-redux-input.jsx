import React from 'react';


import FormInput from './form-input';

const FormReduxInput = field => {
  const {
    blank,
    button,
    context,
    disabled,
    help,
    icon,
    input,
    label,
    onChange,
    options,
    Password,
    placeholder,
    row,
    size,
    toggle,
    type,
    width,
    meta
  } = field

  return <FormInput
    {...input}
    label={label}
    blank={blank}
    button={button}
    context={context}
    disabled={disabled}
    help={meta.touched && meta.error ? { ...help, text: meta.error, context: 'danger' } :  null}
    icon={icon}
    options={options}
    Password={Password}
    placeholder={placeholder}
    size={size}
    toggle={toggle}
    type={type}
    width={width}
    row={row}
  />
};

export default FormReduxInput;
