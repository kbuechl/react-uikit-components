'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeblockDoc = function CodeblockDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Codeblock'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Displays code inside of a block.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-codeblock' },
          'react-uikit-codeblock'
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
        { lang: 'xml' },
        'npm install react-uikit-codeblock --save;\n\n// ES6\nimport Codeblock from \'react-uikit-codeblock\';\n\n// ES5\nvar Codeblock = require(\'react-uikit-codeblock\')'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'p',
        null,
        'To use Codeblock component place backticks inside of braces and place the code inside of the backticks.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For inline code use the html element ',
        _react2.default.createElement(
          'code',
          null,
          '<code>'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { lang: 'xml' },
        '<Codeblock>\n{`<div>...<div>`};\n</Codeblock>'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'code',
          null,
          'scroll'
        ),
        ' prop can be added to create a scrollable Codeblock.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Codeblock Props'
      ),
      _react2.default.createElement(
        'p',
        null,
        'See Base for additional utility props.'
      )
    )
  );
};

exports.default = CodeblockDoc;