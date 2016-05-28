import React from 'react';

const FormInputFile = (props) => {

  const type = {
    button: <button className='uk-button'>{props.body}</button>,

    link: <a>{props.body}</a>,

    span: <span>{props.body}</span>
  };

  return <div className='uk-form-file'>
    {type[props.type] || type.button}
    <input type='file' />
  </div>;
};


FormInputFile.propTypes = {
  body     : React.PropTypes.string,
  type : React.PropTypes.oneOf(['button', 'link', 'span'])
};

export default FormInputFile;
