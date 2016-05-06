import React from 'react';
import Button from 'react-uikit-button';


const ComfirmButton = (props) => {

  if (props.confirm && props.confirm.show) {
    return <div>

      <Button
        kitid={`ok-${props.kitid}`}
        body='cancel'
        margin='right'
        {...props.cancel}
      />
      <Button
        kitid={`confrim-${props.kitid}`}
        body={props.confirm.body || 'Confirm'}
        {...props.confirm}
      />
    </div>;
  } else {
    return <div>
      <Button
        kitid={`ok-${props.kitid}`}
        body='cancel'
        margin='right'
        {...props.cancel}
      />
      <Button
        kitid={`cancel-${props.kitid}`}
        body='ok'
        {...props.ok}
      />
    </div>;
  }
};

ComfirmButton.propTypes = {
  cancel    : React.PropTypes.object,
  confirm  :  React.PropTypes.object,
  kitid     : React.PropTypes.string,
  ok        : React.PropTypes.object
};


export default ComfirmButton;
