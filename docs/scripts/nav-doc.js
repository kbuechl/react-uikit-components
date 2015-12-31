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

var _reactUikitNav = require('react-uikit-nav');

var _reactUikitNav2 = _interopRequireDefault(_reactUikitNav);

var _navItem = require('react-uikit-nav/lib/nav-item');

var _navItem2 = _interopRequireDefault(_navItem);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitNote = require('react-uikit-note');

var _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavDoc: {
    displayName: 'NavDoc'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/nav-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/nav-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var NavDoc = _wrapComponent('NavDoc')((function (_React$Component) {
  _inherits(NavDoc, _React$Component);

  function NavDoc() {
    _classCallCheck(this, NavDoc);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NavDoc).apply(this, arguments));
  }

  _createClass(NavDoc, [{
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
            'Nav'
          ),
          _react3.default.createElement(
            'p',
            { className: 'uk-Nav-lead' },
            'Defines different styles for list navigations.'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-nav' },
              'react-uikit-nav'
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
            'p',
            null,
            _react3.default.createElement(
              'code',
              null,
              'npm install react-uikit-nav --save;'
            )
          ),
          _react3.default.createElement(
            'p',
            null,
            'ES6 ',
            _react3.default.createElement('br', null),
            _react3.default.createElement(
              'code',
              null,
              'Nav uikit from \'react-uikit-nav\';'
            ),
            _react3.default.createElement('br', null),
            _react3.default.createElement(
              'code',
              null,
              'NavItem uikit from \'react-uikit-nav/lib/na-vitem\';'
            )
          ),
          _react3.default.createElement(
            'p',
            null,
            'ES5 ',
            _react3.default.createElement('br', null),
            _react3.default.createElement(
              'code',
              null,
              'var Nav = require(\'react-uikit-nav\');'
            ),
            _react3.default.createElement('br', null),
            _react3.default.createElement(
              'code',
              null,
              'var NavItem = require(\'react-uikit-nav/lib/na-vitem\');'
            )
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            { badge: { context: 'danger', body: 'Note' } },
            'UIkit css is not included. You can get it from ',
            _react3.default.createElement(
              'a',
              { href: 'http://getuikit.com/' },
              'getuikit.com'
            ),
            '. This has been tested with UIKit version 2.24.x.'
          ),
          _react3.default.createElement('hr', { className: 'uk-article-divider' }),
          _react3.default.createElement(
            'p',
            null,
            'Navigation consists of two components ',
            _react3.default.createElement(
              'code',
              null,
              '<Nav>'
            ),
            ' and ',
            _react3.default.createElement(
              'code',
              null,
              '<NavItem>'
            ),
            '. The Nav component displays a list of links for various types of Navs. To choose a type of Nav the ',
            _react3.default.createElement(
              'code',
              null,
              'type'
            ),
            ' prop must be added to the Nav component.'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Nav side'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Add the ',
            _react3.default.createElement(
              'code',
              null,
              'type="side"'
            ),
            ' prop to place a nav inside your sidebar, panels or anywhere else in your content.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitNav2.default,
              { type: 'side', cols: '1-4' },
              _react3.default.createElement(_navItem2.default, { label: 'Active', href: '#', active: true }),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#' }),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#' })
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
            '<Grid>\n  <Nav type=\'side\' cols=\'1-4\'>\n    <NavItem label=\'Active\' href=\'#\' active />\n    <NavItem label=\'Item\' href=\'#\' />\n    <NavItem label=\'Item\' href=\'#\' />\n  </Nav>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Navs nested'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Navs can easily be nested inside of each other by using the Nav ',
            _react3.default.createElement(
              'code',
              null,
              'parent'
            ),
            ' and ',
            _react3.default.createElement(
              'code',
              null,
              'sub'
            ),
            ' props and the NavItems ',
            _react3.default.createElement(
              'code',
              null,
              'parent'
            ),
            ' prop.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitNav2.default,
              { parent: true, type: 'side', cols: '1-4' },
              _react3.default.createElement(_navItem2.default, { label: 'Active', href: '#', active: true }),
              _react3.default.createElement(
                _navItem2.default,
                { parent: true, label: 'Item', href: '#' },
                _react3.default.createElement(
                  _reactUikitNav2.default,
                  { type: 'sub' },
                  _react3.default.createElement(_navItem2.default, { label: 'Sub item', href: '#' }),
                  _react3.default.createElement(_navItem2.default, { label: 'Sub item', href: '#' })
                )
              ),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#' })
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
            '<Grid>\n  <Nav parent type=\'side\' cols=\'1-4\'>\n    <NavItem label=\'Active\' href=\'#\' active />\n    <NavItem parent label=\'Item\' href=\'#\' >\n      <Nav type=\'sub\'>\n        <NavItem label=\'Sub item\' href=\'#\' />\n        <NavItem label=\'Sub item\' href=\'#\' />\n      </Nav>\n    </NavItem>\n    <NavItem label=\'Item\' href=\'#\' />\n  </Nav>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Nav dropdown'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Coming soon...'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
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
            'Nav offcanvas'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Coming soon...'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
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
            'Nav accordion'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Coming soon...'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
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
            'Nav Items'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The NavItem component creates a Nav item which can either be a link, header or a divider. This can be specified using the ',
            _react3.default.createElement(
              'code',
              null,
              'type'
            ),
            ' prop. The default type is link.'
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
                  'Type'
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
                    'link'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Add the link ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'type'
                  ),
                  ' to create a link',
                  _react3.default.createElement('br', null),
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'label'
                  ),
                  ' to provide a label for a link.',
                  _react3.default.createElement('br', null),
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'href'
                  ),
                  ' props to provide a URL for a link.',
                  _react3.default.createElement('br', null),
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'active'
                  ),
                  '  prop to show the active as active.',
                  _react3.default.createElement('br', null),
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'subtitle=\'*\''
                  ),
                  ' prop to create a subtitle.'
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
                    'header'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Add the header ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'type'
                  ),
                  ' to create a header.',
                  _react3.default.createElement('br', null),
                  'Add the ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'label'
                  ),
                  ' to provide a label for a link.'
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
                    'divider'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'Add the divider ',
                  _react3.default.createElement(
                    'code',
                    null,
                    'type'
                  ),
                  ' to create a divider separating menu items.'
                )
              )
            )
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitNav2.default,
              { type: 'side', cols: '1-4' },
              _react3.default.createElement(_navItem2.default, { type: 'header', label: 'Header' }),
              _react3.default.createElement(_navItem2.default, { label: 'Active', href: '#', active: true }),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#' }),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#', subtitle: 'Subtitle' }),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#' }),
              _react3.default.createElement(_navItem2.default, { type: 'divider' }),
              _react3.default.createElement(_navItem2.default, { label: 'Item', href: '#' })
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
            '<Grid>\n  <Nav type=\'side\' cols=\'1-4\'>\n    <NavItem type=\'header\' label=\'Header\'/>\n    <NavItem label=\'Active\' href=\'#\' active />\n    <NavItem label=\'Item\' href=\'#\' />\n    <NavItem label=\'Item\' href=\'#\' subtitle=\'Subtitle\'/>\n    <NavItem label=\'Item\' href=\'#\' />\n    <NavItem type=\'divider\' />\n    <NavItem label=\'Item\' href=\'#\' />\n  </Nav>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            ' Nav Item collections'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(_reactUikitNav2.default, { cols: '1-4', type: 'side', items: [{
                label: 'Home',
                href: '#',
                active: true
              }, {
                label: 'About',
                href: '#'
              }] })
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Grid>\n  <Nav cols=\'1-4\' type=\'side\' items={[\n    {\n      label: \'Home\',\n      href: \'#\',\n      active: true\n    },\n    {\n      label: \'About\',\n      href: \'#\'\n    }\n  ]} />\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'React Router'
          ),
          _react3.default.createElement(
            'p',
            null,
            'NavItem can be used with ',
            _react3.default.createElement(
              'a',
              { href: 'http://rackt.github.io/react-router/' },
              'React Router'
            ),
            ' by adding ',
            _react3.default.createElement(
              'code',
              null,
              '<Link>'
            ),
            ' as a child of ',
            _react3.default.createElement(
              'code',
              null,
              '<NavItem>'
            ),
            '.'
          ),
          _react3.default.createElement(
            'p',
            null,
            'See ',
            _react3.default.createElement(
              'a',
              { href: 'http://rackt.github.io/react-router/' },
              'React Router'
            ),
            ' for router configuration.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<Nav type=\'side\'>\n  <NavItem><Link to="app">Home</Link></NavItem>\n</Nav>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Nav Props'
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
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Value'
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

  return NavDoc;
})(_react3.default.Component));

exports.default = NavDoc;