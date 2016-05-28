import React from 'react';
import Icons from 'react-uikit-icons';

const FormInputSelect = (props) => {
  const icon = <Icons
    icon={props.icon || 'caret-down'}
    kitid={`icon-${props.kitid}`}
  />;

  let options;

  if (props.options) {
    options = props.options.map(item =>
      <option
        key={item.value}
        value={item.value}
      >
        {item.body}
      </option>
    );
  }

  const type = {
    button: <span>{props.body} {icon}</span>,

    link: <a>{props.body} {icon}</a>,

    span: <span>{props.body} {icon}</span>
  };

  return <div
    className={props.type === 'button' ? 'uk-button uk-form-select' : 'uk-form-select'}
    data-kitid={props.kitid}
  >
    {type[props.type] || type.button}
    <select {...props} icon={null} type='select'>
      {options}
    </select>
  </div>;
};


FormInputSelect.propTypes = {
  body      : React.PropTypes.string,
  icon      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  options   : React.PropTypes.array,
  select    : React.PropTypes.object,
  type      : React.PropTypes.string
};

export default FormInputSelect;
