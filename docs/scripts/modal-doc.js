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

var _reactUikitButton = require('.react-uikit-button');

var _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);

var _reactUikitCodeblock = require('.react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('.react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitModal = require('.react-uikit-modal');

var _reactUikitModal2 = _interopRequireDefault(_reactUikitModal);

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ModalHandler: {
    displayName: 'ModalHandler'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/modal-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/modal-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var ModalHandler = _wrapComponent('ModalHandler')((function (_React$Component) {
  _inherits(ModalHandler, _React$Component);

  function ModalHandler() {
    _classCallCheck(this, ModalHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalHandler).apply(this, arguments));
  }

  _createClass(ModalHandler, [{
    key: 'animateIn',
    value: function animateIn(modal, dialog) {
      (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);
      (0, _velocityAnimate2.default)(dialog, { translateY: 100, opacity: 1 }, { display: 'block' }, 200);
    }
  }, {
    key: 'animateOut',
    value: function animateOut(modal, dialog) {
      (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);
      (0, _velocityAnimate2.default)(dialog, { translateY: -100, opacity: 0 }, { display: 'none' }, 200);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h1',
            null,
            'Modal'
          ),
          _react3.default.createElement(
            'p',
            { className: 'uk-article-lead' },
            'Displays dialogs prompts.'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-modal' },
              'react-uikit-modal'
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
            'npm install react-uikit-modal --save;\n// ES6\nimport Modal from \'react-uikit-modal\';\n\n// ES5\nvar Modal = require(\'react-uikit-modal\');'
          ),
          _react3.default.createElement('hr', { className: 'uk-article-divider' }),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitModal2.default,
            {
              trigger: {
                body: 'Open',
                animate: {
                  'in': function _in(modal, dialog) {
                    return _this2.animateIn(modal, dialog);
                  },
                  out: function out(modal, dialog) {
                    return _this2.animateOut(modal, dialog);
                  }
                }
              },
              footer: _react3.default.createElement(_reactUikitButton2.default, { body: 'Save' }) },
            _react3.default.createElement(
              'h1',
              null,
              'Headline'
            ),
            _react3.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
            '\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement('h2', null),
          _react3.default.createElement('p', null),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Modal Props'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'code',
              null,
              '<Modal>'
            ),
            ' props and their types.'
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
                  _react3.default.createElement('code', null)
                ),
                _react3.default.createElement('td', { className: 'uk-text-left' }),
                _react3.default.createElement('td', { className: 'uk-text-left' })
              )
            )
          )
        )
      );
    }
  }]);

  return ModalHandler;
})(_react3.default.Component));

exports.default = ModalHandler;