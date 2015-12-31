'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitNote = require('react-uikit-note');

var _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitBlock = require('react-uikit-block');

var _reactUikitBlock2 = _interopRequireDefault(_reactUikitBlock);

var _reactUikitGrid = require('react-uikit-grid');

var _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);

var _reactUikitPanel = require('react-uikit-panel');

var _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockDoc = function BlockDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Block'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Separate content sections by bundling them in blocks.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-block' },
          'react-uikit-block'
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
        'npm install react-uikit-block --save;\n\n// ES6\nimport Block from \'react-uikit-block\';\n\n// ES5\nvar Block = require(\'react-uikit-block\');'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitBlock2.default,
        { context: 'muted' },
        _react2.default.createElement(
          'h4',
          null,
          'Block'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text' },
        '<Block context=\'muted\'>\n<h4>Block</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Block container'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To add the body in a container use the ',
        _react2.default.createElement(
          'code',
          null,
          'container'
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitBlock2.default,
        { context: 'muted', container: true },
        _react2.default.createElement(
          'h4',
          null,
          'Block'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text' },
        '<Block context=\'muted\' container >\n<h4>Block</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Block Context'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To apply different background colors, add one of the following values for the ',
        _react2.default.createElement(
          'code',
          null,
          'context'
        ),
        ' prop.'
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
                'default'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add the default background color, usually white or similar.'
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
                'muted'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Adds a light background color.'
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
                'primary'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Adds a primary background color.'
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
                'secondary'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Adds a another background color, usually a dark one.'
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
        _reactUikitBlock2.default,
        { context: 'default', container: true },
        _react2.default.createElement(
          'h4',
          null,
          'Default'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        _reactUikitBlock2.default,
        { context: 'muted', container: true },
        _react2.default.createElement(
          'h4',
          null,
          'Muted'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        _reactUikitBlock2.default,
        { context: 'primary', container: true, contrast: true },
        _react2.default.createElement(
          'h4',
          null,
          'Primary'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        _reactUikitBlock2.default,
        { context: 'secondary', container: true, contrast: true },
        _react2.default.createElement(
          'h4',
          null,
          'Secondary'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text' },
        '<Block context=\'default\' container>\n<h4>Default</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>\n\n<Block context=\'muted\' container>\n<h4>Muted</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>\n\n<Block context=\'primary\' container contrast >\n<h4>Primary</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>\n\n<Block context=\'secondary\' container contrast >\n<h4>Secondary</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>'
      ),
      _react2.default.createElement(
        _reactUikitNote2.default,
        { badge: 'NOTE' },
        'To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Block large'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To add the body in a container use the ',
        _react2.default.createElement(
          'code',
          null,
          'container'
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitBlock2.default,
        { context: 'secondary', container: true, contrast: true, large: true },
        _react2.default.createElement(
          'h4',
          null,
          'Block'
        ),
        _react2.default.createElement(
          _reactUikitGrid2.default,
          { widths: '1-3' },
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          ),
          _react2.default.createElement(
            _reactUikitPanel2.default,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text' },
        '<Block context=\'secondary\' container contrast large >\n<h4>Block</h4>\n<Grid widths=\'1-3\'>\n  <Panel>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n  <Panel >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna.\n  </Panel>\n</Grid>\n</Block>'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Block Props'
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
                'context'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'enums'
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
                'container'
              )
            ),
            _react2.default.createElement(
              'td',
              { colSpan: '2' },
              'oneOf ',
              _react2.default.createElement('br', null),
              'default, muted, primary, secondary'
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
                'contrast'
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
                'large'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          )
        )
      )
    )
  );
};

exports.default = BlockDoc;