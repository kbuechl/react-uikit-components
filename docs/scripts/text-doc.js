'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitGrid = require('react-uikit-grid');

var _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);

var _reactUikitPanel = require('react-uikit-panel');

var _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitText = require('react-uikit-text');

var _reactUikitText2 = _interopRequireDefault(_reactUikitText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TextdDoc: {
    displayName: 'TextdDoc'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/text-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/text-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var TextdDoc = _wrapComponent('TextdDoc')((function (_React$Component) {
  _inherits(TextdDoc, _React$Component);

  function TextdDoc() {
    _classCallCheck(this, TextdDoc);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextdDoc).apply(this, arguments));
  }

  _createClass(TextdDoc, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h1',
            null,
            'Text'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-text' },
              'react-uikit-text'
            ),
            ' on github.'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Usage'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            'npm install react-uikit-text --save;\n\nES6\nimport Text from \'react-uikit-text\';\n\nES5\nvar Text = require(react-uikit-text\');'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text Types'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The Text component creates a number of various Text components. ',
            _react3.default.createElement('br', null),
            'The default type is ',
            _react3.default.createElement(
              'code',
              null,
              'p'
            ),
            ' which creates a paragraph.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'p\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a paragraph using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'p', display: 'inline' },
                    'p type.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'a\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Turn text into hypertext using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'a' },
                    'a type.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'em\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Emphasize text using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'em' },
                    'em element'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'strong\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Impliy any extra importance using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'strong' },
                    'strong type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'code\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define inline code snippets using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'code' },
                    'code type.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'ins\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Mark document changes as inserted text using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'ins' },
                    'ins type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'mark\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Highlight text with no semantic meaning using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'mark' },
                    'mark type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'q\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define inline quotations using ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'q' },
                    ' q type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'abbr\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define an abbreviation using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'abbr', title: 'Abbreviation Element' },
                    'abbr type'
                  ),
                  ' with a ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'title=\'\''
                  ),
                  ' prop.',
                  _react3.default.createElement('br', null)
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'del\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Mark document changes as deleted text using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'del' },
                    'del type'
                  ),
                  ' with a ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'title=\'\''
                  ),
                  ' prop.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'dfn\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a definition term using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'dfn', title: 'Defines a definition term' },
                    'dfn type'
                  ),
                  ' with a ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'title=\'\''
                  ),
                  ' prop.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'small\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'De-emphasize text for small print using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'small' },
                    'small'
                  ),
                  ' type.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'h1\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a h1 heading using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'h1', display: 'inline' },
                    'h1 type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'h2\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a h2 heading using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'h2', display: 'inline' },
                    'h2 type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'h3\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a h3 heading using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'h3', display: 'inline' },
                    'h3 type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'h4\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a h4 heading using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'h4', display: 'inline' },
                    'h4 type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'h5\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a h5 heading using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'h5', display: 'inline' },
                    'h5 type'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'h6\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define a h6 heading using the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'h6', display: 'inline' },
                    'h6 type'
                  ),
                  '.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'span\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Define parts of inline text with the ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'span', display: 'inline' },
                    'span type'
                  ),
                  '.',
                  _react3.default.createElement('br', null),
                  'Use when no other component or HTML element is suitable.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type=\'hr\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Create a horizontal rule by using the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'hr type'
                  ),
                  '.'
                )
              )
            )
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text headings'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Use ',
            _react3.default.createElement(
              'code',
              null,
              'heading'
            ),
            ' prop to alter any of the Text component types to a heading.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading=\'h1\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Changes the size of text to h1'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading=\'h2\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Changes the size of text to h2'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading=\'h3\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Changes the size of text to h3'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading=\'h4\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Changes the size of text to h4'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading=\'h5\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Changes the size of text to h5'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading=\'h6\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Changes the size of text to h6'
                )
              )
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Text heading=\'h1\'>...</Text>\n<Text heading=\'h2\'>...</Text>\n<Text heading=\'h3\'>...</Text>\n<Text heading=\'h4\'>...</Text>\n<Text heading=\'h5\'>...</Text>\n<Text heading=\'h6\'>...</Text>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text bold'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Add the ',
            _react3.default.createElement(
              'code',
              null,
              'bold'
            ),
            ' prop to create bold text.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            'p',
            null,
            'This is ',
            _react3.default.createElement(
              _reactUikitText2.default,
              { bold: true, type: 'span' },
              'bold text'
            ),
            '.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Text bold type=\'span\'>bold text</Text>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text size'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Text size can be changed by using one of the ',
            _react3.default.createElement(
              'code',
              null,
              'size=\'\''
            ),
            ' props.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'size=\'small\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'size=\'small\''
                  ),
                  ' prop to ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'span', size: 'small' },
                    'decrease the font size.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'large'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'size=\'large\''
                  ),
                  ' prop to ',
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { type: 'span', size: 'large' },
                    'increase the font size.'
                  )
                )
              )
            )
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text context'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The text context prop can be used to give text context.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context=\'muted\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { context: 'muted' },
                    'Add the muted prop to mute text.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context=\'primary\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { context: 'primary' },
                    'Add the primary prop to highlight additional information.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context=\'success\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { context: 'success' },
                    'Add the success prop to indicate success.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context=\'warning\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { context: 'warning' },
                    'Add the warning prop to indicate warning.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context=\'danger\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    { context: 'danger' },
                    'Add the danger prop to indicate danger.'
                  )
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context=\'contrast\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    _reactUikitText2.default,
                    null,
                    'Add the contrast prop to make the text context readable on flat context areas or pictures. It\'s usualy white.'
                  )
                )
              )
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Text context=\'muted\'>Add the muted props for text.</Text>\n<Text context=\'primary\'>Add the primary props to text context.</Text>\n<Text context=\'success\'>Add the success props to  your to text context.</Text>\n<Text context=\'warning\'>Addthe  warning props to  your to text context.</Text>\n<Text context=\'danger\'>Add the danger props to  your to text context.</Text>\n<Text context=\'contrast\'>Add the contrast props to make the text context readable on flat context areas or pictures. It\'s often white.</Text>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text align'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The textAlign prop horizontally aligns text.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'left\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Aligns text to the left.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'left-small\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Aligns text to the left only on small devices.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'left-medium\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Aligns text to the left on medium and small devices.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'right\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Aligns text to the right.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'center\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Centers text horizontally.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'center-small\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Centers text horizontally only on small devices.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'center-medium\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Centers text horizontally on medium and small devices.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textAlign=\'justify\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Justifies text.'
                )
              )
            )
          ),
          _react3.default.createElement(
            'h3',
            { className: 'exmaple' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { gutter: 'small', indent: true },
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'left' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'left\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'leftSmall' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'left-small\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'leftMedium' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'left-medium\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'right' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'right\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'center' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'center\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'centerSmall' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'center-small\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'centerMedium' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'center-medium\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { box: true, margin: 'bottom', col: '1-2' },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textAlign: 'justify' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textAlign=\'justify\''
                )
              )
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Grid gutter=\'small\' indent>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'left\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'left\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'leftSmall\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'left-small\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'leftMedium\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'left-medium\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'right\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'right\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'center\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'center\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'centerSmall\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'center-small\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'centerMedium\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'center-medium\'</code>\n    </Text>\n  </Panel>\n  <Panel box margin=\'bottom\' col=\'1-2\'>\n    <Text textAlign=\'justify\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign=\'justify\'</code>\n    </Text>\n  </Panel>\n</Grid>'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text verticle'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The textVerticle prop vertically aligns text to an object.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textVerticle=\'top\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Aligns text to the top.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textVerticle=\'top\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Centers text vertically.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textVerticle=\'top\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Aligns text to the bottom.'
                )
              )
            )
          ),
          _react3.default.createElement(
            'p',
            null,
            'As React adds additional spans around text you will need to manually add a few lines of css to your style file.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { gutter: 'small' },
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { colMedium: '1-2', colLarge: '1-3', margin: 'bottom' },
              _react3.default.createElement('img', { src: 'docs/images/placeholder_avatar.svg', width: '50', height: '50' }),
              _react3.default.createElement(
                _reactUikitText2.default,
                { textVertical: 'top', type: 'span' },
                'Lorem ipsum ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textVerticle=\'top\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { colMedium: '1-2', colLarge: '1-3', margin: 'bottom' },
              _react3.default.createElement('img', { src: 'docs/images/placeholder_avatar.svg', width: '50', height: '50' }),
              _react3.default.createElement(
                _reactUikitText2.default,
                { textVertical: 'middle', type: 'span' },
                'Lorem ipsum ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textVerticle=\'middle\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { colMedium: '1-2', colLarge: '1-3', margin: 'bottom' },
              _react3.default.createElement('img', { src: 'docs/images/placeholder_avatar.svg', width: '50', height: '50' }),
              _react3.default.createElement(
                _reactUikitText2.default,
                { textVertical: 'bottom', type: 'span' },
                'Lorem ipsum ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textVerticle=\'bottom\''
                )
              )
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            'h5',
            null,
            'style.css'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            '.uk-text-top > * {\n  vertical-align: top;\n}\n'
          ),
          _react3.default.createElement(
            'h5',
            null,
            'script.js'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Grid gutter=\'small\'>\n  <Panel colMedium=\'1-2\' colLarge=\'1-3\'>\n    <img src=\'docs/images/placeholder_avatar.svg\' width=\'50\' height=\'50\' />\n    <Text textVerticle=\'top\' type=\'span\'>\n      Lorem ipsum <code>textVerticle=\'top\'</code>\n    </Text>\n  </Panel>\n  <Panel colMedium=\'1-2\' colLarge=\'1-3\'>\n    <img src=\'docs/images/placeholder_avatar.svg\' width=\'50\' height=\'50\' />\n    <Text textVerticle=\'middle\' type=\'span\'>\n      Lorem ipsum <code>textVerticle=\'middle\'</code>\n    </Text>\n  </Panel>\n  <Panel colMedium=\'1-2\' colLarge=\'1-3\'>\n    <img src=\'docs/images/placeholder_avatar.svg\' width=\'50\' height=\'50\' />\n    <Text textVerticle=\'bottom\' type=\'span\'>\n      Lorem ipsum <code>textVerticle=\'bottom\'</code>\n    </Text>\n  </Panel>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text wrap'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The textWrap prop wraps text.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Description'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textWrap=\'truncate\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Prevents text from wrapping into multiple lines, truncating it instead.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textWrap=\'break\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Breaks strings if their length exceeds the width of their container.'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'textWrap=\'nowrap\''
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Breaks strings if their length exceeds the width of their container.'
                )
              )
            )
          ),
          _react3.default.createElement(
            'h3',
            { className: 'exmaple' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { gutter: 'small', indent: true },
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { col: '1-3', box: true },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textWrap: 'truncate' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textWrap=\'truncate\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { col: '1-3', box: true },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textWrap: 'break' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textWrap=\'break\''
                )
              )
            ),
            _react3.default.createElement(
              _reactUikitPanel2.default,
              { col: '1-3', box: true },
              _react3.default.createElement(
                _reactUikitText2.default,
                { textWrap: 'nowrap' },
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit ',
                _react3.default.createElement(
                  'code',
                  null,
                  'textWrap=\'nowrap\''
                )
              )
            )
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Grid gutter=\'small\' indent>\n  <Panel col=\'1-3\' box >\n    <Text textWrap=\'truncate\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap=\'truncate\'</code>\n    </Text>\n  </Panel>\n  <Panel col=\'1-3\' box>\n    <Text textWrap=\'break\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap=\'break\'</code>\n    </Text>\n</Panel>\n  <Panel col=\'1-3\' box >\n    <Text textWrap=\'nowrap\'>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit <code>textWrap=\'nowrap\'</code>\n    </Text>\n  </Panel>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Text Props'
          ),
          _react3.default.createElement(
            'p',
            null,
            'See base component for additional utility props.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Type'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'bold'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'bool'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'context'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'oneOf',
                  _react3.default.createElement('br', null),
                  'muted, primary, success, warning, danger, contrast'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'heading'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'oneOf',
                  _react3.default.createElement('br', null),
                  'h1, h2, h3, h4, h5, h6'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'size'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'oneOf',
                  _react3.default.createElement('br', null),
                  ' small or large'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'oneOf',
                  _react3.default.createElement('br', null),
                  'a abbr, code, del, dfn, em, h1, h2, h3, h4, h5, h6, hr, ins, mark, q, p (default), small, span, strong.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TextdDoc;
})(_react3.default.Component));

exports.default = TextdDoc;