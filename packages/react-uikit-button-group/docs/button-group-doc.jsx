import React from 'react';

import examples from './button-group-examples';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Button Group';
const npmName = 'react-uikit-button-group';
const summary = 'Easily create nicely looking group buttons.';

const ButtonGroupDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Button Groups"
      description={`To create a Button group place the Buttons inside a ButtonGroup component.`}
      jsx={examples.contextExample}
      snippet={examples.contextSnippet}
    />
    <DocExample
      name="Button dropdown"
      description={`Buttons groups can also be used to create split buttons where one button handles the standard action while the other toggles a dropdown. See button dropdown in Dropdown component for more details.`}
    />
    <DocExample
      name="Checkbox buttons"
      description={`Coming soon...`}
    />
    <DocExample
      name="Radio buttons"
      description={`Coming soon...`}
    />
    <DocFooter name={name} />
  </div>
);


export default ButtonGroupDoc;
