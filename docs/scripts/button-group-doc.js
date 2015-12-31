'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitButton = require('react-uikit-button');

var _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);

var _reactUikitButtonGroup = require('react-uikit-button-group');

var _reactUikitButtonGroup2 = _interopRequireDefault(_reactUikitButtonGroup);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroupDoc = function ButtonGroupDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Button Group'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Easily create nicely looking group buttons.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-button-group' },
          'react-uikit-button-group'
        ),
        ' on github.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Usage'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'npm install react-uikit-button-group --save;\n\n// ES6\nimport ButtonGroup from \'react-uikit-button-group\';\n\n// ES5\nvar ButtonGroup = require(\'react-uikit-button-group\');'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button group'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To create a Button group place the Buttons inside a ',
        _react2.default.createElement(
          'code',
          null,
          'ButtonGroup'
        ),
        ' compoment to the buttton component.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitButtonGroup2.default,
        { display: 'block', margin: 'smallBottom' },
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', type: 'link' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button' })
      ),
      _react2.default.createElement(
        _reactUikitButtonGroup2.default,
        { display: 'block', margin: 'smallBottom' },
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', context: 'primary', type: 'link' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', context: 'primary' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', context: 'primary' })
      ),
      _react2.default.createElement(
        _reactUikitButtonGroup2.default,
        { display: 'block', margin: 'smallBottom' },
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', context: 'success', type: 'link' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', context: 'success' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', context: 'success' })
      ),
      _react2.default.createElement(
        _reactUikitButtonGroup2.default,
        { display: 'block', margin: 'smallBottom' },
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', context: 'danger', type: 'link' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', context: 'danger' }),
        _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', context: 'danger' })
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<ButtonGroup display=\'block\' margin=\'smallBottom\'>\n  <Button body=\'Link\' type=\'link\' />\n  <Button body=\'Button\'/>\n  <Button body=\'Button\'/>\n</ButtonGroup>\n\n<ButtonGroup display=\'block\' margin=\'smallBottom\'>\n  <Button body=\'Link\' context=\'primary\' type=\'link\' />\n  <Button body=\'Button\' context=\'primary\'/>\n  <Button body=\'Button\' context=\'primary\'/>\n</ButtonGroup>\n\n<ButtonGroup display=\'block\' margin=\'smallBottom\'>\n  <Button body=\'Link\' context=\'success\' type=\'link\' />\n  <Button body=\'Button\' context=\'success\'/>\n  <Button body=\'Button\' context=\'success\'/>\n</ButtonGroup>\n\n<ButtonGroup display=\'block\' margin=\'smallBottom\'>\n  <Button body=\'Link\' context=\'danger\' type=\'link\' />\n  <Button body=\'Button\' context=\'danger\'/>\n  <Button body=\'Button\' context=\'danger\'/>\n</ButtonGroup>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button dropdown'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Buttons groups can also be used to create split buttons where one button handles the standard action while the other toggles a dropdown. See button dropdown in Dropdown component for more details.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'checkbox button'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Coming soon...'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Radio buttons'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Coming soon...'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button Group Props'
      ),
      _react2.default.createElement(
        'p',
        null,
        'See ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-base' },
          'base'
        ),
        ' for additional props.'
      )
    )
  );
};

exports.default = ButtonGroupDoc;