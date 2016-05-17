import React from 'react';


const FormHelp = (props) => {
  const component = {
    block: <p
       className='uk-form-help-block'
       data-kitid={props.kitid}
     >
       {props.help.text || props.help}
     </p>,

    inline: <span
      className="uk-form-help-inline"
    >
     {props.help.text}
    </span>
  };

  return component[props.help.type] || component['block'];
};


FormHelp.propTypes = {
  help: React.PropTypes.oneOfType([
     React.PropTypes.string,
     React.PropTypes.object
   ])
};

export default FormHelp;
