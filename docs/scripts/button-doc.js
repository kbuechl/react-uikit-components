'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitButton = require('react-uikit-button');

var _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonDoc = function ButtonDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Button'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Easily create nicely looking buttons, which come in different styles.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-button' },
          'react-uikit-button'
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
        '<code>npm install react-uikit-button --save;\n\n// ES6\n<code>import Button from \'react-uikit-button\';\n\n// ES5\nvar Button = require(\'react-uikit-button\');'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'p',
        null,
        'The Button component creates either a button, a link or a close button by setting the ',
        _react2.default.createElement(
          'code',
          null,
          'type'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'By defualt the Button component will create a button if no type is provided.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', type: 'link', margin: 'bottom right' }),
      _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', margin: 'bottom right' }),
      _react2.default.createElement(_reactUikitButton2.default, { body: 'Disabled', disabled: true, margin: 'bottom right' }),
      _react2.default.createElement(_reactUikitButton2.default, { type: 'close' }),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '<Button body=\'Link\' type=\'link\' margin=\'bottom right\'/>\n<Button body=\'Button\' margin=\'bottom right\'/>\n<Button body=\'Disabled\' disabled margin=\'bottom right\'/>\n<Button type=\'close\'/>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button contexts'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The color of the button can be easily changed by adding a context to the context prop'
      ),
      _react2.default.createElement(
        _reactUikitTable2.default,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Description'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'context=\'primary\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Emphasizes to identify the primary action in a set of buttons.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'context=\'success\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Indicates a successful or positive action.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'context=\'danger\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Indicates a dangerous or negative action.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'context=\'link\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'De-emphasizes to look like a link while maintaining button behavior.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitButton2.default, { context: 'primary', body: 'Primary', margin: 'bottom right' }),
      _react2.default.createElement(_reactUikitButton2.default, { context: 'success', body: 'Success', margin: 'bottom right' }),
      _react2.default.createElement(_reactUikitButton2.default, { context: 'danger', body: 'Danger', margin: 'bottom right' }),
      _react2.default.createElement(_reactUikitButton2.default, { context: 'link', body: 'Link', type: 'link' }),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '<Button context=\'primary\' body=\'Primary\' margin=\'bottom right\'/>\n<Button context=\'success\' body=\'Success\' margin=\'bottom right\'/>\n<Button context=\'danger\' body=\'Danger\' margin=\'bottom right\'/>\n<Button context=\'link\' body=\'Link\' type=\'link\'/>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button sizes'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To change the size of a Button set the ',
        _react2.default.createElement(
          'code',
          null,
          'size'
        ),
        ' prop to mini, small, or large.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitButton2.default, { size: 'mini', body: 'Mini button', margin: 'right bottom' }),
      _react2.default.createElement(_reactUikitButton2.default, { size: 'mini', body: 'Mini button', context: 'primary', margin: 'bottom' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(_reactUikitButton2.default, { size: 'small', body: 'Small button', margin: 'right bottom' }),
      _react2.default.createElement(_reactUikitButton2.default, { size: 'small', body: 'Small button', context: 'primary', margin: 'bottom' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(_reactUikitButton2.default, { body: 'Default button', margin: 'right bottom' }),
      _react2.default.createElement(_reactUikitButton2.default, { body: 'Default button', context: 'primary', margin: 'bottom' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(_reactUikitButton2.default, { size: 'large', body: 'Large button', margin: 'bottom' }),
      _react2.default.createElement(_reactUikitButton2.default, { size: 'large', body: 'Large button', context: 'primary', margin: 'bottom' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '<Button size=\'mini\' body=\'Mini button\' margin=\'right bottom\'/>\n<Button size=\'mini\' body=\'Mini button\' context=\'primary\' margin=\'bottom\'/><br />\n\n<Button size=\'small\' body=\'Small button\' margin=\'right bottom\'/>\n<Button size=\'small\' body=\'Small button\' context=\'primary\' margin=\'bottom\'/><br />\n\n<Button body=\'Default button\' margin=\'right bottom\'/>\n<Button body=\'Default button\' context=\'primary\' margin=\'bottom\'/><br />\n\n<Button size=\'large\' body=\'Large button\' margin=\'bottom\'/>\n<Button size=\'large\' body=\'Large button\' context=\'primary\' margin=\'bottom\'/><br />\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button blocks'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To create a full width button add the ',
        _react2.default.createElement(
          'code',
          null,
          'block'
        ),
        ' prop to the buttton component.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitButton2.default, { block: true, body: 'Button', margin: 'smallBottom' }),
      _react2.default.createElement(_reactUikitButton2.default, { block: true, body: 'Button', context: 'primary' }),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '\n<Button block body=\'Button\' margin=\'smallBottom\' />\n<Button block body=\'Button\' context=\'primary\'/>\n'
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
        'Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Button Props'
      ),
      _react2.default.createElement(
        'p',
        null,
        'See Base for additional utility props.'
      ),
      _react2.default.createElement(
        _reactUikitTable2.default,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Type'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'body'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'string'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'block'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'context'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'oneOf ',
              _react2.default.createElement('br', null),
              ' primary, success, danger or link'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'disabled'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'size'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'oneOf ',
              _react2.default.createElement('br', null),
              ' mini small or large'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'type'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'oneOf ',
              _react2.default.createElement('br', null),
              ' button close or link'
            )
          )
        )
      )
    )
  );
};

exports.default = ButtonDoc;