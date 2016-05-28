import React from 'react';
import Icons from 'react-uikit-icons';

const FormInputSelect = (props) => {
  const body = props.select ?  props.select.body : null;

  const selectType = props.select && props.select.type ? props.select.type : 'link';

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
    button: <span>{body} {icon}</span>,

    link: <a href=''>{body} {icon}</a>
  };

  return <div
    className={props.select && props.select.type === 'button' ? 'uk-button uk-form-select' : 'uk-form-select'}
    data-kitid={props.kitid}
  >
    {type[selectType]}
    <select {...props} icon={null}>
      {options}
    </select>
  </div>;
};


FormInputSelect.propTypes = {
  icon      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  select    : React.PropTypes.object,
  options   : React.PropTypes.array
};

export default FormInputSelect;
