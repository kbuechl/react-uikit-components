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

var _reactUikitNote = require('react-uikit-note');

var _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NoteHandler: {
    displayName: 'NoteHandler'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/note-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/note-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var NoteHandler = _wrapComponent('NoteHandler')((function (_React$Component) {
  _inherits(NoteHandler, _React$Component);

  function NoteHandler() {
    _classCallCheck(this, NoteHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NoteHandler).apply(this, arguments));
  }

  _createClass(NoteHandler, [{
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
            'Note'
          ),
          _react3.default.createElement(
            'p',
            { className: 'uk-article-lead' },
            'Easily add notes.'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-note' },
              'react-uikit-note'
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
            'npm install react-uikit-note --save;\n// ES6\nimport Note from \'react-uikit-note\';\n\n// ES5\nvar Note = require&(\'react-uikit-note\')'
          ),
          _react3.default.createElement('hr', { className: 'uk-article-divider' }),
          _react3.default.createElement(
            'p',
            null,
            'The Note component consists of a paragraph with a prefixed bagde. To create a Note component add a label for the badge prop ',
            _react3.default.createElement(
              'code',
              null,
              'badge=\'NOTE\''
            ),
            ' and either add text as a child or to the ',
            _react3.default.createElement(
              'code',
              null,
              'body'
            ),
            ' prop. If no bagde is provided the default badge is \'Note\''
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            { badge: 'EXAMPLE' },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Note>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua.\n</Note>\n\n<Note badge=\'EXAMPLE\'>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua.\n</Note>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Note context'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Note badges can be given context using the badge prop and setting the context property.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            { badge: { body: 'Success', context: 'success' } },
            'Lorem ipsum dolor sit amet'
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            { badge: { body: 'Warning', context: 'warning' } },
            'Lorem ipsum dolor sit amet'
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            { badge: { body: 'Danger', context: 'danger' } },
            'Lorem ipsum dolor sit amet'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Note badge={{body: \'Success\', context:\'success\'}}>\n  Lorem ipsum dolor sit amet\n</Note>\n\n<Note badge={{body: \'Warning\', context:\'warning\'}}>\n  Lorem ipsum dolor sit amet\n</Note>\n\n<Note badge={{body: \'Danger\', context:\'danger\'}}>\n  Lorem ipsum dolor sit amet\n</Note>'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Note Props'
          ),
          _react3.default.createElement(
            'p',
            null,
            'See Badge component from more information.'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Note Props'
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
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
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
                    'badge'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'string or object',
                  _react3.default.createElement('br', null),
                  ' See Badge component for props.'
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
                    'body'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'string'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NoteHandler;
})(_react3.default.Component));

exports.default = NoteHandler;