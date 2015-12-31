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

var _reactUikitNote = require('react-uikit-note');

var _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);

var _reactUikitPanel = require('react-uikit-panel');

var _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridHandler = function GridHandler(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Grid'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Create a fully responsive, fluid and nestable grid layout.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-grid' },
          'react-uikit-grid'
        ),
        ' on github.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'p',
        null,
        'The grid system of UIkit follows the mobile-first approach and accomodates up to 10 grid columns. It uses units with predefined classes inside each grid, which define the column col. It is also possible to combine the grid with classes from the Flex component, although it works only in modern browsers.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Usage'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'npm install react-uikit-grid --save;\n\n// ES6\nimport Grid from \'react-uikit-grid\';\n\n// ES5\nvar Grid = require(\'react-uikit-grid\');'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To create the grid container, use the ',
        _react2.default.createElement(
          'code',
          null,
          '<Grid>'
        ),
        ' component. A ',
        _react2.default.createElement(
          'code',
          null,
          '<ul>'
        ),
        ' grid can be created by adding ',
        _react2.default.createElement(
          'code',
          null,
          'list'
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Columns can be added by adding the ',
        _react2.default.createElement(
          'code',
          null,
          'col'
        ),
        ' prop to any react uikit component.',
        _react2.default.createElement('br', null)
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { textAlign: 'center' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-2', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-2', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '3-10', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '7-10', box: true },
          'Col'
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
        '<Grid textAlign=\'center\'>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-2\' box>\n  Col\n</Panel>\n<Panel col=\'1-2\' box>\n  Col\n</Panel>\n<Panel col=\'3-10\' box>\n  Col\n</Panel>\n<Panel col=\'7-10\' box>\n  Col\n</Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Grid gutter'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Grids automatically create a horizontal gutter between columns and a vertical one between two succeeding grids. By default, the grid gutter is wider on large screens.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { textAlign: 'center' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
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
        '<Grid textAlign=\'center\'>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n</Grid>\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-grid-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'Medium gutter'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To apply a medium-sized gutter between grid columns, just add the ',
        _react2.default.createElement(
          'code',
          null,
          'gutter=\'medium\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { gutter: 'medium' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
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
        '<Grid gutter=\'medium\'>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n</Grid>\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-grid-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'Small gutter'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To apply a small-sized gutter between grid columns, just add the ',
        _react2.default.createElement(
          'code',
          null,
          'gutter=\'small\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { gutter: 'small' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
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
        '<Grid gutter=\'small\'>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n</Grid>\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-grid-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'Collapse gutter'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To remove the gutter entirely, just add the ',
        _react2.default.createElement(
          'code',
          null,
          'gutter=\'collapse\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { gutter: 'collapse' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
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
        '<Grid gutter=\'collapse\'>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n</Grid>\n\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Grid divider'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Add the ',
        _react2.default.createElement(
          'code',
          null,
          'divider'
        ),
        ' prop to separate grid columns with lines. To separate grids with a horizontal line, just add the class to a <hr> or <div>  element.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { textAlign: 'center', divider: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        )
      ),
      _react2.default.createElement('hr', { className: 'uk-grid-divider' }),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { textAlign: 'center', divider: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Col'
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
        '<Grid textAlign=\'center\' divider>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n</Grid>\n\n<hr className="uk-grid-divider"/>\n\n<Grid textAlign=\'center\' divider>\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n\n<Panel col=\'1-3\' box>\n  Col\n</Panel>\n</Grid>\n'
      ),
      _react2.default.createElement(
        _reactUikitNote2.default,
        { badge: 'NOTE' },
        'For horizontal divider use ',
        _react2.default.createElement(
          'code',
          null,
          '<hr class="uk-grid-divider" />'
        ),
        ' can be used between grids.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Match column heights'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To match grid column heights add the ',
        _react2.default.createElement(
          'code',
          null,
          'match'
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
        { match: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Lorem ipsum dolor sit amet.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Lorem ipsum dolor sit amet.'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
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
        '<Grid match>\n<Panel box>\n  Lorem ipsum dolor sit amet.\n</Panel>\n<Panel col=\'1-3\'box>\n  Lorem ipsum dolor sit amet.\n</Panel>\n<Panel col=\'1-3\'box>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam.\n</Panel>\n</Grid>\n'
      ),
      _react2.default.createElement(
        _reactUikitNote2.default,
        { badge: 'NOTE' },
        'If grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Even grid columns'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To create a grid whose child elements are evenly split, no need to apply the same prop to each child component. Just add one of the ',
        _react2.default.createElement(
          'code',
          null,
          'widths'
        ),
        ' prop to the grid itself. Widths use the same values as the prop ',
        _react2.default.createElement(
          'code',
          null,
          'col'
        ),
        ' from uikit utility props.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For responsive widths, instead of the ',
        _react2.default.createElement(
          'code',
          null,
          'widths'
        ),
        ' you can use ',
        _react2.default.createElement(
          'code',
          null,
          'small'
        ),
        ', ',
        _react2.default.createElement(
          'code',
          null,
          'medium'
        ),
        _react2.default.createElement(
          'code',
          null,
          'large'
        ),
        ' respectively.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { widths: '1-6', type: 'list' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'top bottom', list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'top bottom', list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'top bottom', list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'top bottom', list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'top bottom', list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'top bottom', list: true, box: true },
          'Col'
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
        '<Grid widths=\'1-6\' type=\'list\' >\n<Panel margin=\'top bottom\' list box>\n  Col\n</Panel>\n<Panel margin=\'top bottom\' list box>\n  Col\n</Panel>\n<Panel margin=\'top bottom\' list box>\n  Col\n</Panel>\n<Panel margin=\'top bottom\' list box>\n  Col\n</Panel>\n<Panel margin=\'top bottom\' list box>\n  Col\n</Panel>\n<Panel margin=\'top bottom\' list box>\n  Col\n</Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Responsive grid widths'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Responsive grid properties can be applied to all direct children of the ',
        _react2.default.createElement(
          'code',
          null,
          'Grid'
        ),
        ' components by adding one of the width props to the grid itself. This will maintain evenly sized grid columns, regardless of the device.'
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
                'widths=\'value\''
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Affects direct children elements on all device .'
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
                'small=\'value\''
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Affects direct children elements on 480px and higher devices.'
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
                'medium=\'value\''
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Affects direct children elements on 768px and higher devices.'
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
                'large=\'value'
              ),
              '\''
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Affects direct children elements on 960px and higher devices..'
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
                'xlarge=\'value\''
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Affects direct children elements on 1220px and higher devices.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Responsive grid widths take the same values as col values. See base componmt for col values.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitGrid2.default,
        { type: 'list', widths: '1-2', medium: '1-3', large: '1-6' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { list: true, box: true },
          'Col'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { list: true, box: true },
          'Col'
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
        '<Grid type=\'list\' widths=\'1-2\' medium=\'1-3\' large=\'1-6\'>\n  <Panel list box>\n    Col\n  </Panel>\n  <Panel list box>\n    Col\n  </Panel>\n  <Panel list box>\n    Col\n  </Panel>\n  <Panel list box>\n    Col\n  </Panel>\n  <Panel list box>\n    Col\n  </Panel>\n  <Panel list box>\n    Col\n  </Panel>\n</Grid>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Indent grid'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To indent the left grid margin add the ',
        _react2.default.createElement(
          'code',
          null,
          'indent'
        ),
        ' prop to the Grid component.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Grid props'
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
                'divider'
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
                'gutter'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'small, medium or collapse'
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
                'indent'
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
                'large'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              ' col values'
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
                'match'
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
                'medium'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'col values'
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
                'small'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'col values'
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
              'oneOf ',
              _react2.default.createElement('br', null),
              'block or list'
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
                'widths'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              ' col values'
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
                'xlarge'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              ' col values'
            )
          )
        )
      )
    )
  );
};

exports.default = GridHandler;