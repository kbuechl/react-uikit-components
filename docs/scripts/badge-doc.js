'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitBadge = require('react-uikit-badge');

var _reactUikitBadge2 = _interopRequireDefault(_reactUikitBadge);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeDoc = function BadgeDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Badge'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Easily create nicely looking badges to label and highlight your content.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-badge' },
          'react-uikit-badge'
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
        'npm install react-uikit-badge --save;\n\n// ES6\nmport Badge from \'react-uikit-badge\';\n\n// ES5\nvar Badge = require;(\'react-uikit-badge\');'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'p',
        null,
        'By default badges are ',
        _react2.default.createElement(
          'code',
          null,
          '<span>'
        ),
        ' but they can also be ',
        _react2.default.createElement(
          'code',
          null,
          '<div>'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'block'
        ),
        ' prop to create a ',
        _react2.default.createElement(
          'code',
          null,
          '<div>'
        ),
        ' instead of a ',
        _react2.default.createElement(
          'code',
          null,
          '<span>'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Text can be added either as children ',
        _react2.default.createElement(
          'code',
          null,
          '<Badge>Awesome</Badge>'
        ),
        ' or by setting the ',
        _react2.default.createElement(
          'code',
          null,
          'body'
        ),
        ' prop ',
        _react2.default.createElement(
          'code',
          null,
          '<Badge body=\'Awesome\'/>'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitBadge2.default,
        null,
        'Info'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        null,
        'New'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        null,
        'Free'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Badge>Info</Badge>\n<Badge>New</Badge>\n<Badge>Free</Badge>'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Badge notifications'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Use the ',
        _react2.default.createElement(
          'code',
          null,
          'notification'
        ),
        ' prop to indicate that the badge is a notification. Typically it is used with numbers.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { notification: true },
        '3'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { notification: true },
        '20'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { notification: true },
        '100'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Badge notification>3</Badge>\n<Badge notification>20</Badge>\n<Badge notification>100</Badge>'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Badge contexts'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'success\''
        ),
        ' or ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'warning\''
        ),
        ' or ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'danger\''
        ),
        ' prop for additional context.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { context: 'success' },
        'success'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { context: 'warning' },
        'warning'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { context: 'danger' },
        'danger'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { notification: true, context: 'success' },
        '1'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { notification: true, context: 'warning' },
        '10'
      ),
      ' ',
      _react2.default.createElement(
        _reactUikitBadge2.default,
        { notification: true, context: 'danger' },
        '99+'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Badge context=\'success\'>success</Badge>\n<Badge context=\'warning\'>warning</Badge>\n<Badge context=\'danger\'>danger</Badge><br />\n\n<Badge notification context=\'success\'>1</Badge>\n<Badge notification context=\'warning\'>10</Badge>\n<Badge notification context=\'danger\'>99+</Badge>'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Badge Props'
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
              { className: 'uk-text-left' },
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              { className: 'uk-text-left' },
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
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'context'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf ',
              _react2.default.createElement('br', null),
              'success, warning, danger'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'block'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'body'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'notification'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            )
          )
        )
      )
    )
  );
};

exports.default = BadgeDoc;