import React from 'react';

const FormInputFile = (props) => {

  const type = {
    button: <button className='uk-button'>{props.file.body}</button>,

    link: <a>{props.file.body}</a>,

    span: <span>{props.file.body}</span>
  };

  return <div className='uk-form-file'>
    {type[props.file.type] || type.button}
    <input type='file' />
  </div>;
};


FormInputFile.propTypes = {
  file     : React.PropTypes.object
};

export default FormInputFile;
