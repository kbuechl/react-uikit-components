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

var _reactUikitOverlay = require('react-uikit-overlay');

var _reactUikitOverlay2 = _interopRequireDefault(_reactUikitOverlay);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  OverlayHandler: {
    displayName: 'OverlayHandler'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/overlay-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/overlay-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var OverlayHandler = _wrapComponent('OverlayHandler')((function (_React$Component) {
  _inherits(OverlayHandler, _React$Component);

  function OverlayHandler() {
    _classCallCheck(this, OverlayHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(OverlayHandler).apply(this, arguments));
  }

  _createClass(OverlayHandler, [{
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
            'Overlay'
          ),
          _react3.default.createElement(
            'p',
            { className: 'uk-article-lead' },
            'Easily create responsive images.'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-overlay' },
              'react-uikit-overlay'
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
            'npm install react-uikit-overlay --save;\n\n// ES6\nimport Overlay from \'react-uikit-overlay\';\n\n// ES5\nvar Overlay = require(\'react-uikit-overlay\');'
          ),
          _react3.default.createElement('hr', { className: 'uk-article-divider' }),
          _react3.default.createElement(
            'p',
            null,
            'To create a uikit component pass the component as an argument to ',
            _react3.default.createElement(
              'code',
              null,
              'uikit.base(Component)'
            ),
            '.'
          ),
          _react3.default.createElement('hr', { className: 'uk-article-divider' }),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitOverlay2.default,
            { width: '300px', height: '250px', src: 'docs/images/placeholder_600x400.svg' },
            _react3.default.createElement(
              'h3',
              null,
              'Title'
            ),
            _react3.default.createElement(
              'p',
              null,
              'Lorem ',
              _react3.default.createElement(
                'a',
                { href: '#' },
                'ipsum dolor'
              ),
              ' sit amet, consetetur sadipscing elitr.'
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
            '<Overlay width=\'300px\' height=\'250px\' src=\'docs/images/placeholder_600x400.svg\' >\n  <h3>Title</h3>\n  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>\n</Overlay>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h1',
            null,
            'Overlay background'
          ),
          _react3.default.createElement('p', null),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitOverlay2.default,
            { background: true, width: '300px', height: '250px', src: 'docs/images/placeholder_600x400.svg' },
            _react3.default.createElement(
              'h3',
              null,
              'Title'
            ),
            _react3.default.createElement(
              'p',
              null,
              'Lorem ',
              _react3.default.createElement(
                'a',
                { href: '#' },
                'ipsum dolor'
              ),
              ' sit amet, consetetur sadipscing elitr.'
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
            '<Overlay background width=\'300px\' height=\'250px\' src=\'docs/images/placeholder_600x400.svg\' >\n  <h3>Title</h3>\n  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>\n</Overlay>'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h1',
            null,
            'Overlay icon'
          ),
          _react3.default.createElement('p', null),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(_reactUikitOverlay2.default, { icon: true, background: true, width: '300px', height: '250px', src: 'docs/images/placeholder_600x400.svg' }),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Overlay icon background width=\'300px\' height=\'250px\' src=\'docs/images/placeholder_600x400.svg\' />\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h1',
            null,
            'Overlay image'
          ),
          _react3.default.createElement('p', null),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(_reactUikitOverlay2.default, {
            image: 'docs/images/placeholder_600x400_2.svg',
            width: '300px',
            height: '250px',
            src: 'docs/images/placeholder_600x400.svg'
          }),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Overlay\n  image=\'docs/images/placeholder_600x400_2.svg\'\n  width=\'300px\'\n  height=\'250px\'\n  src=\'docs/images/placeholder_600x400.svg\'\n/>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Img Props'
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
                    'alt'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'string'
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
                    'background'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { colSpan: '2' },
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
                    'flex'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { colSpan: '2' },
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
                    'height'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'string'
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
                    'icon'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { colSpan: '2' },
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
                    'images'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { colSpan: '2' },
                  'string'
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
                  'Obj'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  '{width: "", height: "", src=""}'
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
                    'medium'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Obj'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  '{width: "", height: "", src=""}'
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
                    'small'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Obj'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  '{width: "", height: "", src=""}'
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
                    'src'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'String'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'url'
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
                    'width'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'String'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Any'
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
                    'xlarge'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Obj'
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  '{width: "",height: "", src="url"}`}'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return OverlayHandler;
})(_react3.default.Component));

exports.default = OverlayHandler;