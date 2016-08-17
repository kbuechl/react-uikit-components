import React from 'react';
import uikit from '../../../base';


const FormHelp = (props) => {
  const cssClassNames = uikit.helpers.cleanClasses([
    props.help.type === 'block' ? 'uk-form-help-block' : 'uk-form-help-inline',
    props.help.context ? `uk-form-${props.help.context}` : null
  ]);

  const component = {
    block: <p
       className={cssClassNames}
       data-kitid={props.kitid}
     >
       {props.help.text || props.help}
     </p>,

    inline: <span
      className={cssClassNames}
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
