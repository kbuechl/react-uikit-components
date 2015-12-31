'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitGrid = require('react-uikit-grid');

var _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);

var _reactUikitPanel = require('react-uikit-panel');

var _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelDoc = function PanelDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Panel'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Create layout boxes with different styles.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-panel' },
          'react-uikit-panel'
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
        'npm install react-uikit-panel --save;\n\n// ES6\nmport Panel from \'react-uikit-panel\';\n\n// ES5\nvar Panel = require(\'react-uikit-panel\');'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'p',
        null,
        'The Panel component consists of the panel itself, the panel title and a panel badge. To prevent redundant white space, top and bottom margins are removed from the panel\'s content.'
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
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'tilte'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Add this prop to a heading to create the panel title.'
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
                'badge'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Add this prop to create a panel badge.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Add ',
              _react2.default.createElement(
                'code',
                null,
                'badge=\'value\''
              ),
              ' to set the body of the badge to the value of the string.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Add ',
              _react2.default.createElement(
                'code',
                null,
                'badge={{body: \'value\', context: \'danger\'}}'
              ),
              'to set the body and the context of the badge. Badge context can be success, warning or danger.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { medium: '1-3', large: '1-3' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { title: 'Title', badge: { body: 'hot', context: 'danger' } },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        'Grid medium=\'1-3\' large=\'1-3\'>\n  <Panel title=\'Title\' badge={{body: \'hot\', context: \'danger\'}}>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel types'
      ),
      _react2.default.createElement('p', null),
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
              'Renders the panel as a block.'
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
                'link'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Renders the panel inside of a block. The ',
              _react2.default.createElement(
                'code',
                null,
                'link=\'url/path\''
              ),
              ' is required to set the link\\\'s address.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', margin: 'bottom', box: true, title: 'Block panel', type: 'block' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Link panel', type: 'link', link: '' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid>\n  <Panel colMedium=\'1-3\' margin=\'bottom\' box title=\'Block panel\' type=\'block\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n\n  <Panel colMedium=\'1-3\' box title=\'Link panel\' type=\'link\' link=\'\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel box'
      ),
      _react2.default.createElement(
        'p',
        null,
        'By default the Panel has no styling. The panel box places a box around a panel.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { medium: '1-3', large: '1-3', indent: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { box: true, title: 'Title', badge: { body: 'hot', context: 'danger' } },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid medium=\'1-3\' large=\'1-3\' indent>\n  <Panel box title=\'Title\' badge={{body: \'hot\', context: \'danger\'}}>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel box primary'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'primary\''
        ),
        ' prop to modify the box panel to emphasize it by using a different color.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Title', margin: 'bottom', context: 'primary' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Title', margin: 'bottom', context: 'primary' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Title', context: 'primary' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid>\n  <Panel colMedium=\'1-3\' box title=\'Title\' margin=\'bottom\' context=\'primary\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n\n  <Panel colMedium=\'1-3\' box title=\'Title\' margin=\'bottom\' context=\'primary\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel colMedium=\'1-3\' box title=\'Title\' context=\'primary\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel box secondary'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'secondary\''
        ),
        ' prop to modify the box panel which will give it a white background.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Title', margin: 'bottom', context: 'secondary' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Title', margin: 'bottom', context: 'secondary' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { colMedium: '1-3', box: true, title: 'Title', context: 'secondary' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid>\n  <Panel colMedium=\'1-3\' box title=\'Title\' margin=\'bottom\' context=\'secondary\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n\n  <Panel colMedium=\'1-3\' box title=\'Title\' margin=\'bottom\' context=\'secondary\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel colMedium=\'1-3\' box title=\'Title\' context=\'secondary\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel hover'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'hover'
        ),
        ' prop to add a hover effect to the panel. This comes in handy when using the panel as a link.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { indent: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom', title: 'Title', link: '#', hover: true },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom', title: 'Title', link: '#', hover: true },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { title: 'Title', link: '#', hover: true },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid indent>\n  <Panel margin=\'bottom\' title=\'Title\' link=\'#\' hover>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel margin=\'bottom\' title=\'Title\' link=\'#\' hover>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel title=\'Title\' link=\'#\' hover>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel header'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'header'
        ),
        ' prop to separate the panel title and content with a horizontal line.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { header: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { header: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { header: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid>\n  <Panel header colMedium=\'1-3\' title=\'Title\' margin=\'bottom\' >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel header colMedium=\'1-3\' title=\'Title\' margin=\'bottom\' >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel header colMedium=\'1-3\' title=\'Title\' margin=\'bottom\' >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel space'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'header'
        ),
        ' prop to increase the spacing around the panel content.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { space: true, box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { space: true, box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { space: true, box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { space: true, box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { space: true, box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { space: true, box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text', syntax: 'xml' },
        '<Grid>\n  <Panel space box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel space box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel space box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n<Grid>\n  <Panel space box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel space box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel space box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel box with teaser'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To display an image inside a panel box that is attached to the border of the panel without any spacing, just add the ',
        _react2.default.createElement(
          'code',
          null,
          'teaser={{src: , alt: }}'
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { teaser: { src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image' },
            box: true, colMedium: '1-3', title: 'Title', margin: 'bottom'
          },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { teaser: { src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image' },
            box: true, colMedium: '1-3', title: 'Title', margin: 'bottom'
          },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { teaser: { src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image' },
            box: true, colMedium: '1-3', title: 'Title', margin: 'bottom'
          },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid>\n  <Panel teaser={{src: \'docs/images/placeholder_600x400.svg\', alt: \'placeholder image\'}}\n    box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'\n  >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel teaser={{src: \'docs/images/placeholder_600x400.svg\', alt: \'placeholder image\'}}\n    box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'\n  >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel teaser={{src: \'docs/images/placeholder_600x400.svg\', alt: \'placeholder image\'}}\n    box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'\n  >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel with icons'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Easily apply an icon from UIkit ',
        _react2.default.createElement(
          'a',
          { href: 'http://getuikit.com/docs/icon.html' },
          'Icon'
        ),
        ' to your panel by adding ',
        _react2.default.createElement(
          'code',
          null,
          'icon=\'icon-name\''
        ),
        '.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { medium: '1-3', large: '1-3' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { icon: 'user', box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { icon: 'user', box: true, colMedium: '1-3', title: 'Title', margin: 'bottom' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { icon: 'user', box: true, colMedium: '1-3', title: 'Title' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Grid medium=\'1-3\' large=\'1-3\'>\n  <Panel icon=\'user\' box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel icon=\'user\' box colMedium=\'1-3\' title=\'Title\' margin=\'bottom\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n  <Panel icon=\'user\' box colMedium=\'1-3\' title=\'Title\'>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Panel Props'
      ),
      _react2.default.createElement(
        'p',
        null,
        'See base component for additional utility props.'
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
                'badge'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string or object ',
              '{body , context}'
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
                'box'
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
                'context'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              ' primary or secondary'
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
                'header'
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
                'hover'
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
                'icon'
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
                'link'
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
                'space'
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
                'teaser'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object ',
              '{src, alt}'
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
                'type'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'block (default) or link'
            )
          )
        )
      )
    )
  );
};

exports.default = PanelDoc;